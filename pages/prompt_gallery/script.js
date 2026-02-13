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
import { promptDatabase } from './database.js'; // Restore database import

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
const subjectSelect = document.getElementById('subject-select');

// State
let currentCategory = "All";
let currentSort = "newest";
let currentSearchQuery = "";
let currentSubject = "all";

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
    // 1. Render Static Gallery First
    // This populates galleryGrid with static items based on current filters.
    // We assume renderStaticGallery clears the grid or manages it.
    // Actually, to prepend, we should ideally render static first, then dynamic on top.

    galleryGrid.innerHTML = ''; // Clear once at start of refresh

    // Render Static Items
    const staticCount = renderStaticGallery(false); // false = don't clear, just return count or append

    // 2. Fetch and Prepend Dynamic Items
    // We show a small loader placeholder at top? Or just pop them in.
    // Let's pop them in.
    await fetchAndPrependDynamicGallery();

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
        Object.values(promptDatabase).forEach(items => {
            const itemsWithOrder = items.map((item, index) => ({
                ...item,
                _loadOrder: index,
                isStatic: true
            }));
            promptsToDisplay = promptsToDisplay.concat(itemsWithOrder);
        });
    } else {
        const items = promptDatabase[currentCategory] || [];
        promptsToDisplay = items.map((item, index) => ({
            ...item,
            _loadOrder: index,
            isStatic: true
        }));
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

// --- DYNAMIC GALLERY LOGIC (New) ---

async function fetchAndPrependDynamicGallery() {
    try {
        const galleryRef = collection(db, "public_gallery");

        // Construct Query
        let q;
        const constraints = [];

        if (currentCategory !== "All") {
             // Note: Case sensitivity might match if user selects "Realistic" from dropdown
             constraints.push(where("category", "==", currentCategory));
        }

        // Sorting
        if (currentSort === 'newest') {
            constraints.push(orderBy("timestamp", "desc"));
        } else {
            constraints.push(orderBy("timestamp", "asc"));
        }

        constraints.push(limit(50));

        // Note: Firestore might need composite indexes for Category + Timestamp
        // If query fails, we handle graceful degradation (empty dynamic list)
        q = query(galleryRef, ...constraints);

        const querySnapshot = await getDocs(q);

        const dynamicItems = [];
        querySnapshot.forEach(doc => {
            dynamicItems.push({ id: doc.id, ...doc.data(), isDynamic: true });
        });

        // Client-side Search Filtering for Dynamic items
        let filteredDynamic = dynamicItems;
        if (currentSearchQuery) {
            const lowerQ = currentSearchQuery.toLowerCase();
            filteredDynamic = dynamicItems.filter(item =>
                (item.prompt && item.prompt.toLowerCase().includes(lowerQ)) ||
                (item.author && item.author.toLowerCase().includes(lowerQ))
            );
        }

        // Subject Filter: Dynamic items might not have 'subject' field explicitly matching static ones.
        // We skip strict subject filtering for dynamic items unless we map categories to subjects.
        // For now, if subject filter is active, we might hide dynamic items if they don't conform?
        // Let's keep them if "all", or maybe filter by prompt keywords?
        // Requirement says "Hybrid Fix", implies keeping them visible if possible.
        // If subject is specific (e.g. "Male"), and dynamic item doesn't have metadata, maybe exclude?
        // To be safe, let's include them if Subject is All, otherwise exclude or try to match.
        // Simple approach: Only show dynamic if Subject is All.
        if (currentSubject !== "all") {
             // Attempt to match keywords?
             // Or just hide.
             // Let's hide dynamic items for specific subject filters to avoid pollution.
             return;
        }

        // PREPEND items (reverse order of fetch if newest first? No, fetch gives ordered list)
        // We want the newest dynamic item at the VERY TOP.
        // So iterate in reverse?
        // If fetch returns [Newest, Older, Oldest], we append them in order to a fragment,
        // then insert that fragment at start.

        // Actually, renderStaticGallery appends to grid.
        // To put dynamic items BEFORE static, we should insert them at the beginning.
        // But we need to maintain THEIR order relative to each other.
        // [Dynamic 1, Dynamic 2] -> Grid: [Dynamic 1, Dynamic 2, Static 1...]

        // Loop through filteredDynamic (which is sorted)
        // Insert them before the first child of galleryGrid?
        // Or better: clear grid, render dynamic, then render static?
        // "Stop doing that" (clearing innerHTML) refers to not wiping the STATIC HTML *if it was hardcoded in HTML file*.
        // But here, static items are generated from JS (`database.js`).
        // So clearing `galleryGrid` and rebuilding is fine, AS LONG AS we include both sources.

        // Wait, "The static HTML cards MUST remain."
        // Does `gallery.html` contain hardcoded cards?
        // Checking `gallery.html` content...
        // It says `<!-- Gallery items injected by script.js -->`.
        // So there are NO hardcoded cards in HTML.
        // "Static" refers to `database.js` items.

        // Strategy:
        // 1. Get Static Items (Array)
        // 2. Get Dynamic Items (Array)
        // 3. Merge them?
        //    If sort is Newest: Dynamic (usually newer) + Static.
        //    But wait, Static items have dates too.
        //    Ideally, we merge arrays and sort together.
        //    Static items have `createdAt` (timestamp or string?).
        //    Dynamic items have `timestamp` (Firestore Timestamp).
        //    Need to normalize.

        // Normalization:
        // Static: createdAt might be "2023-10-27" or similar.
        // Dynamic: Firestore Timestamp.

        // If merging is too complex for "Hybrid Fix", sticking to "Dynamic on Top" is safer and requested.
        // "The dynamic Firebase posts should be prepended (added to the top) of the existing grid."

        // Implementation:
        // We already rendered static items.
        // Now take dynamic items, create cards, and insert them at the top.
        // Iterate reversed?
        // If items = [A, B, C] (A is newest).
        // Prepend A -> [A, Static...]
        // Prepend B -> [B, A, Static...] -> WRONG.
        // We want [A, B, C, Static...]
        // So we iterate Normally and append to a DocumentFragment, then prepend Fragment.

        const fragment = document.createDocumentFragment();
        filteredDynamic.forEach(item => {
            const card = createGalleryCard(item);
            fragment.appendChild(card);
        });

        if (galleryGrid.firstChild) {
            galleryGrid.insertBefore(fragment, galleryGrid.firstChild);
        } else {
            galleryGrid.appendChild(fragment);
        }

    } catch (e) {
        console.error("Dynamic gallery error:", e);
        // Ignore, static gallery remains.
    }
}

// --- CARD CREATION (Unified) ---

function createGalleryCard(item) {
    const card = document.createElement('div');
    card.className = 'gallery-card';

    // Normalize Data
    // Static: ai_image, prompt, subject.
    // Dynamic: imageUrl, prompt, category, author.

    const imageUrl = item.ai_image || item.imageUrl || 'https://placehold.co/400x600?text=No+Image';
    const isDynamic = item.isDynamic;

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
        copyToClipboard(item.prompt);
    });

    // Save Button
    const saveBtn = document.createElement('button');
    saveBtn.className = 'action-btn gallery-save-btn';
    saveBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>`;
    saveBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        savePrompt(item.prompt, saveBtn, imageUrl);
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
    // Static items have toggle for ref_image.
    if (!isDynamic && item.ref_image) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'image-toggle-btn';
        toggleBtn.textContent = "View Original";

        let isAiView = true;
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (isAiView) {
                img.src = item.ref_image;
                toggleBtn.textContent = "View AI Generated";
            } else {
                img.src = item.ai_image;
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

        let timeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                currentSearchQuery = e.target.value.trim();
                loadHybridGallery();
            }, 500);
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
