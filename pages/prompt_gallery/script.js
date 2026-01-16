import { promptDatabase } from './database.js';

// DOM Elements
const galleryGrid = document.getElementById('gallery-grid');
const tabsContainer = document.getElementById('tabs-container');
const toast = document.getElementById('toast');

// Current Filter State
let currentCategory = "All";

/**
 * Initializes the Gallery
 */
function init() {
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
        promptsToDisplay = promptDatabase[category] || [];
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

    card.innerHTML = `
        <div class="card-image-wrapper">
            <img src="${item.ai_image}"
                 data-ai="${item.ai_image}"
                 data-ref="${item.ref_image}"
                 alt="${item.id}"
                 class="card-image"
                 loading="lazy">
        </div>
        <div class="card-content">
            <div class="card-prompt">${item.prompt}</div>
            <button class="copy-btn">Copy Prompt <i class="fas fa-copy"></i></button>
        </div>
    `;

    const img = card.querySelector('.card-image');

    // Hover Logic
    img.addEventListener('mouseenter', () => {
        img.src = item.ref_image;
    });

    img.addEventListener('mouseleave', () => {
        img.src = item.ai_image;
    });

    // Click Logic (Toggle)
    img.addEventListener('click', () => {
        if (img.src === item.ai_image) {
            img.src = item.ref_image;
        } else {
            img.src = item.ai_image;
        }
    });

    // Copy Button Logic
    const copyBtn = card.querySelector('.copy-btn');
    copyBtn.addEventListener('click', () => copyToClipboard(item.prompt));

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
        // Fallback for older browsers or if permission denied (rare in modern context)
        // Simple alert or fallback could go here, but ignoring for MVP
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
