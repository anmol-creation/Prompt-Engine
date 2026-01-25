import { promptDatabase } from './database.js';
import { initTheme } from '../../assets/js/utils.js';
import { initDevTrigger } from '../../dev-access/trigger.js';
import { TypingAnimator } from '../../pages/home/js/typing-animation.js';

// DOM Elements
const galleryGrid = document.getElementById('gallery-grid');
const searchInput = document.getElementById('gallery-search');
const searchBtn = document.getElementById('search-btn');
const tabsContainer = document.getElementById('tabs-container');
const toast = document.getElementById('toast');
const resultsCount = document.getElementById('results-count');
const sortSelect = document.getElementById('sort-select');
const subjectSelect = document.getElementById('subject-select');

// Current Filter State
let currentCategory = "All";
let currentSort = "newest";
let currentSubject = "all";
let currentSearchQuery = "";

/**
 * Initializes the Gallery
 */
function init() {
    initTheme();
    initDevTrigger();
    initControls();
    initSearch();
    renderTabs();
    renderGallery("All");
}

/**
 * Initialize Control Listeners
 */
function initControls() {
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderGallery(currentCategory);
        });
    }
    if (subjectSelect) {
        subjectSelect.addEventListener('change', (e) => {
            currentSubject = e.target.value;
            renderGallery(currentCategory);
        });
    }
}

/**
 * Initialize Search
 */
function initSearch() {
    if (searchInput) {
        // Typing Animation
        const phrases = [
            "Search for 'Cyberpunk'...",
            "Search for 'Portrait'...",
            "Search for 'Cinematic'...",
            "Search for 'Neon'...",
            "Search for 'Studio Lighting'...",
            "Search for 'Minimalist'..."
        ];

        new TypingAnimator(searchInput, phrases, {
            typingSpeed: 60,
            erasingSpeed: 30,
            delayAfterType: 2000,
            delayAfterErase: 500
        });

        // Input Listener (Debounced)
        let timeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                currentSearchQuery = e.target.value.trim();
                renderGallery(currentCategory);
            }, 300);
        });

        // Enter Key Listener
        searchInput.addEventListener('keypress', (e) => {
             if (e.key === 'Enter') {
                currentSearchQuery = searchInput.value.trim();
                renderGallery(currentCategory);
             }
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            if (searchInput) {
                currentSearchQuery = searchInput.value.trim();
                renderGallery(currentCategory);
            }
        });
    }
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
        // Flatten all categories into one array and assign original index
        Object.values(promptDatabase).forEach(items => {
            // Map items to include their original index/load order
            const itemsWithOrder = items.map((item, index) => ({
                ...item,
                _loadOrder: index
            }));
            promptsToDisplay = promptsToDisplay.concat(itemsWithOrder);
        });
    } else {
        // Get specific category items with load order
        const items = promptDatabase[category] || [];
        promptsToDisplay = items.map((item, index) => ({
            ...item,
            _loadOrder: index
        }));
    }

    // Filter by Subject
    if (currentSubject !== "all") {
        promptsToDisplay = promptsToDisplay.filter(item => {
            // Case insensitive check
            return item.subject && item.subject.toLowerCase() === currentSubject.toLowerCase();
        });
    }

    // Filter by Search Query
    if (currentSearchQuery) {
        const lowerQuery = currentSearchQuery.toLowerCase();
        promptsToDisplay = promptsToDisplay.filter(item => {
            const inPrompt = item.prompt && item.prompt.toLowerCase().includes(lowerQuery);
            const inSubject = item.subject && item.subject.toLowerCase().includes(lowerQuery);
            return inPrompt || inSubject;
        });
    }

    // Sort Logic
    promptsToDisplay.sort((a, b) => {
        const timeA = a.createdAt || 0;
        const timeB = b.createdAt || 0;

        if (currentSort === 'newest') {
            // Primary: Timestamp Descending
            if (timeB !== timeA) {
                return timeB - timeA;
            }
            // Secondary: Load Order Descending (Bottom of file = Newer)
            return b._loadOrder - a._loadOrder;
        } else {
            // Oldest First
            if (timeA !== timeB) {
                return timeA - timeB;
            }
            // Secondary: Load Order Ascending
            return a._loadOrder - b._loadOrder;
        }
    });

    // Update Results Count
    if (resultsCount) {
        resultsCount.textContent = `About ${promptsToDisplay.length} Results`;
    }

    // Determine "New" items (Top 5 sorted by date across ALL categories)
    // We need to calculate this globally, but for visual consistency in the current view,
    // we can just check against the global sorted list or just highlight the top 5 in the current list
    // if sorting is "newest".
    // Better Approach: Calculate the top 5 NEWEST items from the entire database once per init/update
    // and store their IDs. For now, let's just mark the top 5 of the *current* list if sorted by newest.
    // Wait, requirement is "jab uske baad new data add ho to wo purane data se hat jaye".
    // This implies a global "New" status.

    // Get all items flattened to find the absolute newest
    let allItems = [];
    Object.values(promptDatabase).forEach(items => {
        const itemsWithOrder = items.map((item, index) => ({
             ...item,
             _loadOrder: index
        }));
        allItems = allItems.concat(itemsWithOrder);
    });

    // Sort all items by newest logic
    allItems.sort((a, b) => {
        const timeA = a.createdAt || 0;
        const timeB = b.createdAt || 0;
        if (timeB !== timeA) return timeB - timeA;
        return b._loadOrder - a._loadOrder;
    });

    // Get IDs of top 5
    const newItemsIds = new Set(allItems.slice(0, 5).map(item => item.id + '_' + item.createdAt));
    // Note: using composite key since IDs might be manually duplicated in static files

    // Render Items
    promptsToDisplay.forEach(item => {
        // Check if this item is in the "New" set
        // We reconstruct the key
        const key = item.id + '_' + item.createdAt;
        const isNew = newItemsIds.has(key);

        const card = createGalleryCard(item, isNew);
        galleryGrid.appendChild(card);
    });
}

/**
 * Creates a single gallery card DOM element
 */
function createGalleryCard(item, isNew = false) {
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

    // "New" Badge (Top Left) - Visual Only
    if (isNew) {
        const newBadge = document.createElement('span');
        newBadge.className = 'new-badge';
        newBadge.textContent = 'New';
        imageWrapper.appendChild(newBadge);
    }

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
