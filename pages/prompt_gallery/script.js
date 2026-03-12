import { app } from '../../assets/js/auth.js';
import { initTheme } from '../../assets/js/utils.js';
import { initDevTrigger } from '../../dev-access/trigger.js';
import { TypingAnimator } from '../../pages/home/js/typing-animation.js';
import { savePrompt } from '../../assets/js/firestore.js';
import { promptDatabase } from './database.js'; // Restore database import

// DOM Elements
const galleryGrid = document.getElementById('gallery-grid');
const searchInput = document.getElementById('gallery-search');
const searchBtn = document.getElementById('search-btn');
const tabsContainer = document.getElementById('tabs-container');
const toast = document.getElementById('toast');
const resultsCount = document.getElementById('results-count');
const sortSelect = document.getElementById('sort-select');
const subjectSelect = document.getElementById('subject-select');

// State
let currentCategory = "All";
let currentSort = "newest";
let currentSearchQuery = "";
let currentSubject = "all";

// --- NORMALIZER FUNCTION ---

function normalizePromptData(rawItem, source = 'static') {
    if (source === 'static') {
        return {
            id: rawItem.id || `static-${Math.random().toString(36).substr(2, 9)}`,
            imageUrl: rawItem.ai_image || '',
            promptText: rawItem.prompt || '',
            category: rawItem.category || 'Uncategorized',
            subject: rawItem.subject || '',
            dateAdded: rawItem.createdAt || 0,
            source: 'static',
            refImage: rawItem.ref_image || '',
            author: rawItem.author || ''
        };
    } else if (source === 'firebase') {
        return {
            id: rawItem.id || `firebase-${Math.random().toString(36).substr(2, 9)}`,
            imageUrl: rawItem.imageUrl || '',
            promptText: rawItem.prompt || '',
            category: rawItem.category || 'Uncategorized',
            subject: rawItem.subject || '',
            // Handle Firestore Timestamp or fallback to 0
            dateAdded: rawItem.timestamp ? (typeof rawItem.timestamp.toMillis === 'function' ? rawItem.timestamp.toMillis() : rawItem.timestamp) : 0,
            source: 'firebase',
            refImage: rawItem.refImage || '',
            author: rawItem.author || ''
        };
    }
    return rawItem;
}

// --- INITIALIZATION ---

function init() {
    initTheme();
    initDevTrigger();
    initControls();
    initSearch();
    renderTabs();

    // Initial Load: Hybrid (Static + Dynamic)
    loadHybridGallery();
}

// --- HYBRID RENDERING LOGIC ---

async function loadHybridGallery() {
    galleryGrid.innerHTML = ''; // Clear once at start of refresh

    // 1. Fetch Dynamic Items (Currently returning empty stub)
    const dynamicItems = await fetchFirebasePrompts();

    // In the future, we will merge these properly, but for now we just use static items

    // 2. Render Static Gallery First
    const staticCount = renderStaticGallery(false);

    // 3. Prepend Dynamic Items (Future)
    // When Firebase is enabled, we'll want to either:
    // A. Merge the dynamicItems with the staticItems array inside renderStaticGallery
    //    and sort them together (recommended).
    // B. Or manually prepend the dynamicItems elements to galleryGrid here.
    if (dynamicItems.length > 0) {
        const fragment = document.createDocumentFragment();
        dynamicItems.forEach(item => {
            const card = createGalleryCard(item);
            fragment.appendChild(card);
        });

        if (galleryGrid.firstChild) {
            galleryGrid.insertBefore(fragment, galleryGrid.firstChild);
        } else {
            galleryGrid.appendChild(fragment);
        }
    }

    updateResultsCount();
}

function updateResultsCount() {
    if (resultsCount) {
        const count = galleryGrid.children.length;
        resultsCount.textContent = `About ${count} Results`;
    }
}

// --- STATIC GALLERY LOGIC (Restored) ---

function renderStaticGallery(shouldClear = true) {
    if (shouldClear) galleryGrid.innerHTML = '';

    let promptsToDisplay = [];

    if (currentCategory === "All") {
        Object.entries(promptDatabase).forEach(([catKey, items]) => {
            const normalizedItems = items.map((item, index) => {
                const normalized = normalizePromptData({...item, category: catKey}, 'static');
                return { ...normalized, _loadOrder: index };
            });
            promptsToDisplay = promptsToDisplay.concat(normalizedItems);
        });
    } else {
        const items = promptDatabase[currentCategory] || [];
        const normalizedItems = items.map((item, index) => {
            const normalized = normalizePromptData({...item, category: currentCategory}, 'static');
            return { ...normalized, _loadOrder: index };
        });
        promptsToDisplay = normalizedItems;
    }

    // Filter by Subject
    if (currentSubject && currentSubject !== "all") {
        promptsToDisplay = promptsToDisplay.filter(item => {
            return item.subject && item.subject.toLowerCase() === currentSubject.toLowerCase();
        });
    }

    // Filter by Search Query
    if (currentSearchQuery) {
        const lowerQuery = currentSearchQuery.toLowerCase();
        promptsToDisplay = promptsToDisplay.filter(item => {
            const inPrompt = item.promptText && item.promptText.toLowerCase().includes(lowerQuery);
            const inSubject = item.subject && item.subject.toLowerCase().includes(lowerQuery);
            return inPrompt || inSubject;
        });
    }

    // Sort Logic
    promptsToDisplay.sort((a, b) => {
        const timeA = a.dateAdded || 0;
        const timeB = b.dateAdded || 0;

        if (currentSort === 'newest') {
            if (timeB !== timeA) return timeB - timeA;
            return b._loadOrder - a._loadOrder;
        } else {
            if (timeA !== timeB) return timeA - timeB;
            return a._loadOrder - b._loadOrder;
        }
    });

    // Render Static Items
    promptsToDisplay.forEach(item => {
        const card = createGalleryCard(item);
        galleryGrid.appendChild(card);
    });

    return promptsToDisplay.length;
}

// --- DYNAMIC GALLERY LOGIC (Stub) ---

async function fetchFirebasePrompts() {
    // 🚧 FIREBASE INTEGRATION PAUSED 🚧
    // This function is a stub. It returns an empty array to prevent rendering errors
    // while backend setup is blocked.
    //
    // TODO: When Firebase is reactivated:
    // 1. Import Firestore methods.
    // 2. Query the "public_gallery" collection.
    // 3. Map the raw document data through the normalizer function.
    //
    // Example implementation:
    // const querySnapshot = await getDocs(query(collection(db, "public_gallery")));
    // return querySnapshot.docs.map(doc => normalizePromptData({ id: doc.id, ...doc.data() }, 'firebase'));

    return [];
}

// --- CARD CREATION (Unified) ---

function createGalleryCard(item) {
    const card = document.createElement('div');
    card.className = 'gallery-card';

    const imageUrl = item.imageUrl || 'https://placehold.co/400x600?text=No+Image';
    const isDynamic = item.source === 'firebase';

    // Image Wrapper
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'card-image-wrapper';

    const img = document.createElement('img');
    img.className = 'card-image';
    img.src = imageUrl;
    img.alt = item.subject || item.category || "Image";
    img.loading = "lazy";

    // Overlay
    const overlay = document.createElement('div');
    overlay.className = 'card-overlay';

    // Actions
    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'overlay-actions';

    // Copy Button
    const copyBtn = document.createElement('button');
    copyBtn.className = 'action-btn copy-btn-overlay';
    copyBtn.innerHTML = '📋 Copy';
    copyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        copyToClipboard(item.promptText);
    });

    // Save Button
    const saveBtn = document.createElement('button');
    saveBtn.className = 'action-btn gallery-save-btn';
    saveBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>`;
    saveBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        savePrompt(item.promptText, saveBtn, imageUrl);
    });

    // Like Button (Visual Only for now)
    const likeBtn = document.createElement('button');
    likeBtn.className = 'action-btn like-btn';
    likeBtn.innerHTML = '❤️';
    likeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        likeBtn.classList.toggle('liked');
    });

    // Toggle Button (Static Only feature usually, but let's hide for dynamic)
    // Static items have toggle for refImage.
    if (!isDynamic && item.refImage) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'image-toggle-btn';
        toggleBtn.textContent = "View Original";

        let isAiView = true;
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (isAiView) {
                img.src = item.refImage;
                toggleBtn.textContent = "View AI Generated";
            } else {
                img.src = item.imageUrl;
                toggleBtn.textContent = "View Original";
            }
            isAiView = !isAiView;
        });
        imageWrapper.appendChild(toggleBtn);
    }

    // Author Tag (Dynamic Only)
    if (isDynamic && item.author) {
        const authorTag = document.createElement('div');
        authorTag.className = 'author-tag';
        authorTag.textContent = `By ${item.author}`;
        authorTag.style.position = 'absolute';
        authorTag.style.bottom = '10px';
        authorTag.style.left = '10px';
        authorTag.style.color = 'white';
        authorTag.style.fontSize = '0.8rem';
        authorTag.style.textShadow = '0 2px 4px rgba(0,0,0,0.8)';
        overlay.appendChild(authorTag);
    }

    actionsContainer.appendChild(likeBtn);
    actionsContainer.appendChild(copyBtn);
    actionsContainer.appendChild(saveBtn);
    overlay.appendChild(actionsContainer);

    imageWrapper.appendChild(img);
    imageWrapper.appendChild(overlay);
    card.appendChild(imageWrapper);

    return card;
}

// --- CONTROLS ---

function initControls() {
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            loadHybridGallery();
        });
    }
    if (subjectSelect) {
        subjectSelect.addEventListener('change', (e) => {
            currentSubject = e.target.value;
            loadHybridGallery();
        });
    }
}

function initSearch() {
    if (searchInput) {
        new TypingAnimator(searchInput, [
            "Search for 'Cyberpunk'...",
            "Search for 'Portrait'...",
            "Search for 'Cinematic'..."
        ], { typingSpeed: 60, erasingSpeed: 30, delayAfterType: 2000, delayAfterErase: 500 });

        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                currentSearchQuery = e.target.value.trim();
                loadHybridGallery();
            }, 300);
        });
    }
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
             if (searchInput) {
                 currentSearchQuery = searchInput.value.trim();
                 loadHybridGallery();
             }
        });
    }
}

function renderTabs() {
    // We use Categories from Database + All
    const dbCategories = Object.keys(promptDatabase);
    const tabs = ["All", ...dbCategories]; // Unique categories

    tabsContainer.innerHTML = '';
    tabs.forEach(category => {
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
    loadHybridGallery();
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
