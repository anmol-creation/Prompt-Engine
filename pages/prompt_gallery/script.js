import { promptDatabase } from './database.js';
import { initTheme } from '../../assets/js/utils.js';
import { initDevTrigger } from '../../dev-access/trigger.js';

// DOM Elements
const galleryGrid = document.getElementById('gallery-grid');
const tabsContainer = document.getElementById('tabs-container');
const toast = document.getElementById('toast');
const resultsCount = document.getElementById('results-count');

// Current Filter State
let currentCategory = "All";

/**
 * Initializes the Gallery
 */
function init() {
    initTheme();
    initDevTrigger();
    renderTabs();
    renderGallery("All");
}

/**
 * Renders the Category Tabs
 */
function renderTabs() {
    // "All" Tab
    const allTab = createTabBtn("All");
    allTab.classList.add("active");
    allTab.addEventListener('click', () => handleTabClick("All", allTab));
    tabsContainer.appendChild(allTab);

    // Dynamic Category Tabs
    const categories = Object.keys(promptDatabase);
    categories.forEach(category => {
        const tab = createTabBtn(category);
        tab.addEventListener('click', () => handleTabClick(category, tab));
        tabsContainer.appendChild(tab);
    });
}

/**
 * Helper to create a tab button element
 */
function createTabBtn(text) {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.className = 'tab-btn';
    return btn;
}

/**
 * Handles Tab Selection Logic
 */
function handleTabClick(category, tabElement) {
    // Update State
    currentCategory = category;

    // Update UI (Active Class)
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(t => t.classList.remove('active'));
    tabElement.classList.add('active');

    // Re-render Gallery
    renderGallery(category);
}

/**
 * Renders the Gallery Grid based on the selected category
 */
function renderGallery(category) {
    // Clear existing content
    galleryGrid.innerHTML = '';

    let promptsToDisplay = [];

    if (category === "All") {
        // Flatten all categories into one array
        Object.values(promptDatabase).forEach(items => {
            promptsToDisplay = promptsToDisplay.concat(items);
        });
    } else {
        // Get specific category items
        // We create a copy to avoid mutating the original database array when sorting
        promptsToDisplay = [...(promptDatabase[category] || [])];
    }

    // Sort by createdAt DESC (Newest First)
    // If createdAt is missing, treat as oldest (0)
    promptsToDisplay.sort((a, b) => {
        const timeA = a.createdAt || 0;
        const timeB = b.createdAt || 0;
        return timeB - timeA;
    });

    // Update Results Count
    if (resultsCount) {
        resultsCount.textContent = `About ${promptsToDisplay.length} Results`;
    }

    // Render Items
    promptsToDisplay.forEach(item => {
        const card = createGalleryCard(item);
        galleryGrid.appendChild(card);
    });
}

/**
 * Creates a single gallery card DOM element
 */
function createGalleryCard(item) {
    const card = document.createElement('div');
    card.className = 'gallery-card';

    // Default state: AI Image visible
    let isAiView = true;

    // Like State (Local)
    let isLiked = false;
    let likeCount = Math.floor(Math.random() * 50) + 5; // Simulate a count for demo

    // Build structure
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'card-image-wrapper';
    // Make wrapper focusable for mobile tap simulation if needed,
    // but we will use click listener for mobile tap.
    imageWrapper.setAttribute('tabindex', '0');

    // Image Element
    const img = document.createElement('img');
    img.className = 'card-image';
    img.src = item.ai_image;
    img.alt = "Gallery Image";
    img.loading = "lazy";

    // Toggle Button (Top Right)
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'image-toggle-btn';
    toggleBtn.textContent = "View Original"; // Since default is AI, button offers to view original

    // Overlay Container
    const overlay = document.createElement('div');
    overlay.className = 'card-overlay';

    // Overlay Actions
    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'overlay-actions';

    // Like Button
    const likeBtn = document.createElement('button');
    likeBtn.className = 'action-btn like-btn';
    // Using simple text/emoji structure: "❤️ Count"
    likeBtn.innerHTML = `❤️ ${likeCount}`;
    likeBtn.title = "Like";

    likeBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering wrapper click

        isLiked = !isLiked;

        if (isLiked) {
            likeCount++;
            likeBtn.classList.add('liked');
        } else {
            likeCount--;
            likeBtn.classList.remove('liked');
        }

        // Update text
        likeBtn.innerHTML = `❤️ ${likeCount}`;

        // Simple visual feedback animation
        likeBtn.style.transform = "scale(1.2)";
        setTimeout(() => {
            if (likeBtn.matches(':hover')) {
                likeBtn.style.transform = "scale(1.05)";
            } else {
                likeBtn.style.transform = "scale(1)";
            }
        }, 200);
    });

    // Copy Button
    const copyBtn = document.createElement('button');
    copyBtn.className = 'action-btn copy-btn-overlay';
    copyBtn.innerHTML = '📋 Copy Prompt';
    copyBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering wrapper click
        copyToClipboard(item.prompt);
    });

    actionsContainer.appendChild(likeBtn);
    actionsContainer.appendChild(copyBtn);
    overlay.appendChild(actionsContainer);

    imageWrapper.appendChild(img);
    imageWrapper.appendChild(toggleBtn);
    imageWrapper.appendChild(overlay);

    // Prompt Text - HIDDEN (Task 2)
    // We strictly do NOT append the prompt text content as requested.
    // "Prompt text UI me show nahi ho"
    // So we don't even create the .card-content div.

    card.appendChild(imageWrapper);

    // --- Interaction Logic ---

    // Toggle Logic
    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent overlay/wrapper click issues
        if (isAiView) {
            // Switch to Reference
            img.style.opacity = '0'; // Fade out
            setTimeout(() => {
                img.src = item.ref_image;
                img.style.opacity = '1'; // Fade in
            }, 200); // Wait for transition
            toggleBtn.textContent = "View AI Generated";
            isAiView = false;
        } else {
            // Switch to AI
            img.style.opacity = '0';
            setTimeout(() => {
                img.src = item.ai_image;
                img.style.opacity = '1';
            }, 200);
            toggleBtn.textContent = "View Original";
            isAiView = true;
        }
    });

    // Mobile Tap Logic for Overlay
    // Desktop: Hover is handled by CSS.
    // Mobile: Tap to show overlay. Second tap or outside tap to hide.

    // Check if device is touch capable roughly
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    if (isTouch) {
        imageWrapper.addEventListener('click', (e) => {
            // If clicking toggle or buttons, do nothing (stopped propagation there)

            // Toggle 'active-mobile' class
            const isActive = imageWrapper.classList.contains('active-mobile');

            // Remove active from all other cards first (exclusive open)
            document.querySelectorAll('.card-image-wrapper.active-mobile').forEach(el => {
                if (el !== imageWrapper) el.classList.remove('active-mobile');
            });

            if (!isActive) {
                imageWrapper.classList.add('active-mobile');
            } else {
                imageWrapper.classList.remove('active-mobile');
            }
        });

        // Hide when clicking outside
        document.addEventListener('click', (e) => {
            if (!imageWrapper.contains(e.target)) {
                imageWrapper.classList.remove('active-mobile');
            }
        });
    }

    return card;
}

/**
 * Copies text to clipboard and shows toast notification
 */
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showToast();
    } catch (err) {
        console.error('Failed to copy: ', err);
        // Fallback
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        showToast();
    }
}

/**
 * Shows the Toast Notification
 */
function showToast() {
    // Add the "show" class to DIV
    toast.className = "show";
    toast.textContent = "Prompt Copied! ✅";

    // After 3 seconds, remove the show class
    setTimeout(function(){
        toast.className = toast.className.replace("show", "");
    }, 3000);
}

// Run Initialization when DOM is ready
document.addEventListener('DOMContentLoaded', init);
