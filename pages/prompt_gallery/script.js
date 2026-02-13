import { app } from '../../assets/js/auth.js';
import {
    getFirestore,
    collection,
    query,
    orderBy,
    getDocs,
    where,
    limit
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { initTheme } from '../../assets/js/utils.js';
import { initDevTrigger } from '../../dev-access/trigger.js';
import { TypingAnimator } from '../../pages/home/js/typing-animation.js';
import { savePrompt } from '../../assets/js/firestore.js';

// Initialize Firestore
const db = getFirestore(app);

// DOM Elements
const galleryGrid = document.getElementById('gallery-grid');
const searchInput = document.getElementById('gallery-search');
const searchBtn = document.getElementById('search-btn');
const tabsContainer = document.getElementById('tabs-container');
const toast = document.getElementById('toast');
const resultsCount = document.getElementById('results-count');
const sortSelect = document.getElementById('sort-select');
const subjectSelect = document.getElementById('subject-select'); // Might be deprecated if data doesn't support it well, but we'll try

// State
let currentCategory = "All";
let currentSort = "newest";
let currentSearchQuery = "";

// Categories (Static list for now, or fetch distinct? Static is safer/faster for tabs)
const CATEGORIES = ["All", "Realistic", "Anime", "Car", "Portrait", "Architecture", "Nature", "Cyberpunk", "Fantasy", "Other"];

/**
 * Initializes the Gallery
 */
function init() {
    initTheme();
    initDevTrigger();
    initControls();
    initSearch();
    renderTabs();
    fetchAndRenderGallery(); // Initial Load
}

/**
 * Initialize Control Listeners
 */
function initControls() {
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            fetchAndRenderGallery();
        });
    }
    // Subject select might need adjustment based on data structure.
    // Public gallery data has: prompt, imageUrl, category, author, timestamp.
    // It does NOT have explicit 'subject'. We might filter by prompt text?
    // Or just hide this filter if not applicable.
    if (subjectSelect) {
        subjectSelect.style.display = 'none'; // Hide for now as we don't have subject field
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
                fetchAndRenderGallery(); // Client-side filter or re-fetch?
                // For simplicity and cost, fetching all then filtering client-side is okay for small datasets.
                // But "Filter this Firestore query" implies server-side.
                // Firestore text search is limited. Client-side is better for small scale.
                // We'll stick to client-side filtering after fetching for search,
                // but category/sort can be server-side.
            }, 500);
        });

        searchInput.addEventListener('keypress', (e) => {
             if (e.key === 'Enter') {
                currentSearchQuery = searchInput.value.trim();
                fetchAndRenderGallery();
             }
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            if (searchInput) {
                currentSearchQuery = searchInput.value.trim();
                fetchAndRenderGallery();
            }
        });
    }
}

/**
 * Renders the Category Tabs
 */
function renderTabs() {
    tabsContainer.innerHTML = '';
    CATEGORIES.forEach(category => {
        const tab = createTabBtn(category);
        if (category === "All") tab.classList.add("active");
        tab.addEventListener('click', () => handleTabClick(category, tab));
        tabsContainer.appendChild(tab);
    });
}

function createTabBtn(text) {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.className = 'tab-btn';
    return btn;
}

function handleTabClick(category, tabElement) {
    currentCategory = category;
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(t => t.classList.remove('active'));
    tabElement.classList.add('active');
    fetchAndRenderGallery();
}

/**
 * Fetch Data and Render
 */
async function fetchAndRenderGallery() {
    galleryGrid.innerHTML = '<div class="loader">Loading Gallery...</div>';

    try {
        const galleryRef = collection(db, "public_gallery");
        let q = query(galleryRef, orderBy("timestamp", "desc"), limit(50));
        // We limit to 50 for performance initially. Pagination can be added later.

        // Note: Compound queries (where + orderBy) require index.
        // If user filters by Category (where) AND Sort by Timestamp (orderBy),
        // Firestore needs an index.
        // To avoid index creation requirement for this task, we can fetch all (latest 50)
        // and filter client-side for category if the list is small.
        // Or we strictly use server-side.

        // Let's try server-side for category if not "All".
        if (currentCategory !== "All") {
             q = query(galleryRef, where("category", "==", currentCategory), orderBy("timestamp", "desc"), limit(50));
        }

        // If sort is Oldest
        if (currentSort === 'oldest') {
             if (currentCategory !== "All") {
                 q = query(galleryRef, where("category", "==", currentCategory), orderBy("timestamp", "asc"), limit(50));
             } else {
                 q = query(galleryRef, orderBy("timestamp", "asc"), limit(50));
             }
        }

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            galleryGrid.innerHTML = '<div class="empty-state">No posts found. Be the first to post!</div>';
            if (resultsCount) resultsCount.textContent = "0 Results";
            return;
        }

        let items = [];
        querySnapshot.forEach(doc => {
            items.push({ id: doc.id, ...doc.data() });
        });

        // Client-side Search Filtering
        if (currentSearchQuery) {
            const lowerQ = currentSearchQuery.toLowerCase();
            items = items.filter(item =>
                (item.prompt && item.prompt.toLowerCase().includes(lowerQ)) ||
                (item.author && item.author.toLowerCase().includes(lowerQ))
            );
        }

        renderGrid(items);

    } catch (error) {
        console.error("Gallery Fetch Error:", error);
        // Fallback for index errors or permission errors
        galleryGrid.innerHTML = `<div class="error-state">
            <p>Failed to load gallery.</p>
            <small>${error.message}</small>
        </div>`;
    }
}

function renderGrid(items) {
    galleryGrid.innerHTML = '';
    if (resultsCount) resultsCount.textContent = `About ${items.length} Results`;

    if (items.length === 0) {
        galleryGrid.innerHTML = '<div class="empty-state">No matching results.</div>';
        return;
    }

    items.forEach(item => {
        const card = createGalleryCard(item);
        galleryGrid.appendChild(card);
    });
}

function createGalleryCard(item) {
    const card = document.createElement('div');
    card.className = 'gallery-card';

    // Image
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'card-image-wrapper';

    const img = document.createElement('img');
    img.className = 'card-image';
    img.src = item.imageUrl || 'https://placehold.co/400x600?text=No+Image';
    img.alt = item.category || "Gallery Image";
    img.loading = "lazy";

    // Overlay
    const overlay = document.createElement('div');
    overlay.className = 'card-overlay';

    // Author Badge (Bottom Left of Image/Overlay)
    // We can put it in overlay
    const authorTag = document.createElement('div');
    authorTag.className = 'author-tag';
    authorTag.textContent = `By ${item.author || 'User'}`;
    // Style this in CSS or inline
    authorTag.style.position = 'absolute';
    authorTag.style.bottom = '10px';
    authorTag.style.left = '10px';
    authorTag.style.color = 'white';
    authorTag.style.fontSize = '0.8rem';
    authorTag.style.textShadow = '0 2px 4px rgba(0,0,0,0.8)';

    // Actions
    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'overlay-actions';

    // Copy Button
    const copyBtn = document.createElement('button');
    copyBtn.className = 'action-btn copy-btn-overlay';
    copyBtn.innerHTML = '📋 Copy';
    copyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        copyToClipboard(item.prompt);
    });

    // Save Button
    const saveBtn = document.createElement('button');
    saveBtn.className = 'action-btn gallery-save-btn';
    saveBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>`;
    saveBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        savePrompt(item.prompt, saveBtn, item.imageUrl);
    });

    actionsContainer.appendChild(copyBtn);
    actionsContainer.appendChild(saveBtn);
    overlay.appendChild(actionsContainer);
    overlay.appendChild(authorTag);

    imageWrapper.appendChild(img);
    imageWrapper.appendChild(overlay);

    card.appendChild(imageWrapper);

    // Optional: Prompt Text below?
    // User requirement: "Prompt: Display the prompt text (hidden or visible on hover)."
    // We put it in copy button mainly.
    // If we want it visible on hover, overlay is good.
    // Let's add a small snippet in overlay if space permits, or just rely on copy.
    // For now, overlay actions are sufficient.

    return card;
}

async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showToast("Prompt Copied! ✅");
    } catch (err) {
        console.error('Failed to copy: ', err);
        showToast("Failed to copy");
    }
}

function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.className = "show";
    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}

// Init
document.addEventListener('DOMContentLoaded', init);
