import { app, auth } from "./auth.js";
import {
    getFirestore,
    collection,
    query,
    orderBy,
    getDocs,
    deleteDoc,
    addDoc,
    doc,
    limit,
    serverTimestamp,
    where
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const db = getFirestore(app);
const storage = getStorage(app);
const contentContainer = document.getElementById('dash-content');

// Modal Elements
const postModal = document.getElementById('post-modal');
const closeModalBtn = document.getElementById('close-post-modal');
const postPromptPreview = document.getElementById('post-prompt-preview');
const postImageUpload = document.getElementById('post-image-upload');
const imagePreviewContainer = document.getElementById('image-preview-container');
const imagePreview = document.getElementById('image-preview');
const postCategory = document.getElementById('post-category');
const postSubmitBtn = document.getElementById('post-submit-btn');

let currentPromptToPost = "";

// Initialize Dashboard Logic
function initDashboard() {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            // Redirect handled by auth.js but double checking here
            window.location.href = 'index.html';
            return;
        }

        console.log("Dashboard: User authenticated:", user.uid);

        // Initial Tab Load
        const activeTab = document.querySelector('.tab-btn.active');
        if (activeTab) {
            handleTabChange(activeTab.dataset.tab, user.uid);
        }

        // Tab Switching Logic
        setupTabs(user.uid);

        // Modal Logic
        setupModal(user);
    });
}

function setupTabs(uid) {
    const tabs = document.querySelectorAll('.tab-btn[data-tab]');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update UI
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Ensure main content is visible, contributions hidden
            const contentArea = document.getElementById('dash-content');
            const contribTab = document.getElementById('contributions-tab');
            if (contentArea) contentArea.style.display = 'block';
            if (contribTab) contribTab.style.display = 'none';

            handleTabChange(tab.dataset.tab, uid);
        });
    });
}

// Global switchTab for onclick handler
window.switchTab = (tabName) => {
    // Update active state
    document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));

    if (tabName === 'contributions') {
        const btn = document.querySelector(`button[onclick*="'contributions'"]`);
        if (btn) btn.classList.add('active');

        // Handle visibility
        const contentArea = document.getElementById('dash-content');
        const contribTab = document.getElementById('contributions-tab');
        if (contentArea) contentArea.style.display = 'none';
        if (contribTab) contribTab.style.display = 'block';

        loadContributions();
    }
};

function handleTabChange(tabName, uid) {
    if (tabName === 'saved-prompts') {
        fetchSavedPrompts(uid);
    } else if (tabName === 'history') {
        fetchHistory(uid);
    } else if (tabName === 'contributions') {
        loadContributions();
    }
}

async function fetchSavedPrompts(uid) {
    if (!contentContainer) return;
    contentContainer.innerHTML = '<div class="loader">Loading your prompts...</div>';

    try {
        const promptsRef = collection(db, "users", uid, "saved_prompts");
        const q = query(promptsRef, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            contentContainer.innerHTML = `
                <div class="empty-state">
                    <p>You haven't saved any prompts yet.</p>
                    <a href="pages/selection/selection.html" class="cta-link">Create a Prompt</a>
                </div>
            `;
            return;
        }

        contentContainer.innerHTML = '<div class="prompts-grid" id="prompts-grid"></div>';
        const grid = document.getElementById('prompts-grid');

        querySnapshot.forEach((docSnap) => {
            const data = docSnap.data();
            const card = createPromptCard(docSnap.id, data, "saved");
            grid.appendChild(card);
        });

    } catch (error) {
        console.error("Error fetching saved prompts:", error);
        contentContainer.innerHTML = `<div class="error-state"><p>Failed to load prompts.</p><small>${error.message}</small></div>`;
    }
}

async function fetchHistory(uid) {
    if (!contentContainer) return;
    contentContainer.innerHTML = '<div class="loader">Loading history...</div>';

    try {
        const historyRef = collection(db, "users", uid, "history");
        const q = query(historyRef, orderBy("timestamp", "desc"), limit(50));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            contentContainer.innerHTML = `
                <div class="empty-state">
                    <p>No history found.</p>
                    <a href="pages/selection/selection.html" class="cta-link">Start Creating</a>
                </div>
            `;
            return;
        }

        contentContainer.innerHTML = '<div class="prompts-grid" id="prompts-grid"></div>';
        const grid = document.getElementById('prompts-grid');

        querySnapshot.forEach((docSnap) => {
            const data = docSnap.data();
            // Map timestamp to createdAt for consistent card rendering if needed
            data.createdAt = data.timestamp;
            const card = createPromptCard(docSnap.id, data, "history");
            grid.appendChild(card);
        });

    } catch (error) {
        console.error("Error fetching history:", error);
        // Fallback or Empty state on error
        contentContainer.innerHTML = `
            <div class="empty-state">
                <p>No history found (or failed to load).</p>
                <a href="pages/selection/selection.html" class="cta-link">Start Creating</a>
            </div>
        `;
    }
}

function createPromptCard(docId, data, type) {
    const card = document.createElement('div');
    card.className = 'saved-prompt-card';

    // Format Date
    let dateStr = "Unknown Date";
    if (data.createdAt) {
        try {
            dateStr = new Date(data.createdAt.seconds * 1000).toLocaleDateString();
        } catch (e) {}
    }

    let imageHtml = '';
    if (data.image) {
        imageHtml = `<div class="card-image-wrapper"><img src="${data.image}" class="card-image" alt="Prompt Image" loading="lazy"></div>`;
    }

    // Action Buttons
    let actionButtons = '';

    // Delete Button (Available for both)
    // For history, maybe delete removes from history? Yes.
    actionButtons += `
        <button class="icon-btn delete-btn" title="Delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff4757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
    `;

    // Post to Gallery Button (For History primarily, maybe Saved too)
    // The requirement: "Action: On the "My History" cards, add a "Post to Gallery" button."
    if (type === 'history' || type === 'saved') { // Let's allow both
         actionButtons = `
            <button class="icon-btn post-gallery-btn" title="Post to Gallery" style="margin-right: 8px;">
                🚀
            </button>
         ` + actionButtons;
    }

    card.innerHTML = `
        ${imageHtml}
        <div class="card-content-wrapper">
            <div class="card-header">
                <span class="card-date">${dateStr}</span>
                <div class="card-actions">
                    ${actionButtons}
                </div>
            </div>
            <div class="card-body">
                <p class="prompt-text">${escapeHtml(data.prompt)}</p>
            </div>
            <div class="card-footer-tip">Click card to copy</div>
        </div>
    `;

    // Event Listeners

    // Copy
    card.addEventListener('click', (e) => {
        if (e.target.closest('.icon-btn')) return;
        navigator.clipboard.writeText(data.prompt);
        showCopiedFeedback(card);
    });

    // Delete
    const deleteBtn = card.querySelector('.delete-btn');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', async (e) => {
            e.stopPropagation();
            if (confirm("Are you sure you want to delete this item?")) {
                try {
                    let docRef;
                    if (type === 'contributions') {
                        docRef = doc(db, "public_gallery", docId);
                    } else {
                        const collectionName = type === 'saved' ? 'saved_prompts' : 'history';
                        docRef = doc(db, "users", auth.currentUser.uid, collectionName, docId);
                    }

                    await deleteDoc(docRef);
                    card.remove();

                    if (type === 'contributions') {
                         const container = document.getElementById('my-contributions-container');
                         if (container && container.children.length === 0) {
                             container.innerHTML = `
                                <div class="empty-state">
                                    <p>You haven't contributed yet.</p>
                                </div>
                            `;
                         }
                    } else {
                        checkEmptyState();
                    }
                } catch (e) {
                    console.error("Error deleting:", e);
                    alert("Failed to delete.");
                }
            }
        });
    }

    // Post to Gallery
    const postBtn = card.querySelector('.post-gallery-btn');
    if (postBtn) {
        postBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openPostModal(data.prompt);
        });
    }

    return card;
}

function checkEmptyState() {
    const grid = document.getElementById('prompts-grid');
    if (grid && grid.children.length === 0) {
        contentContainer.innerHTML = `
            <div class="empty-state">
                <p>No items found.</p>
                <a href="pages/selection/selection.html" class="cta-link">Create a Prompt</a>
            </div>
        `;
    }
}

function showCopiedFeedback(card) {
    const originalBorder = card.style.borderColor;
    card.style.borderColor = "#2ecc71";
    let badge = document.createElement('div');
    badge.className = 'copied-badge';
    badge.textContent = "Copied!";
    card.appendChild(badge);
    setTimeout(() => {
        card.style.borderColor = originalBorder;
        if (badge.parentNode) badge.parentNode.removeChild(badge);
    }, 1500);
}

async function loadContributions() {
    const user = auth.currentUser;
    if (!user) return;
    const container = document.getElementById('my-contributions-container');
    if (!container) return;

    container.innerHTML = '<div class="loader">Loading contributions...</div>';

    try {
        const galleryRef = collection(db, "public_gallery");
        const q = query(galleryRef, where("authorId", "==", user.uid), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            container.innerHTML = `
                <div class="empty-state">
                    <p>You haven't contributed yet.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = '';
        querySnapshot.forEach((docSnap) => {
            const data = docSnap.data();
            // Map data for createPromptCard
            const cardData = {
                ...data,
                image: data.imageUrl,
                createdAt: data.timestamp
            };
            const card = createPromptCard(docSnap.id, cardData, "contributions");
            container.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading contributions:", error);
        container.innerHTML = `<div class="error-state"><p>Failed to load contributions.</p><small>${error.message}</small></div>`;
    }
}

// --- Modal Functions ---

async function convertToWebP(file) {
    return new Promise((resolve, reject) => {
        const objectUrl = URL.createObjectURL(file);
        const img = new Image();

        img.onload = function() {
            URL.revokeObjectURL(objectUrl);
            const canvas = document.createElement('canvas');
            let width = img.width;
            let height = img.height;

            // Resize if massive
            const MAX_DIMENSION = 1920;
            if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
                if (width > height) {
                    height *= MAX_DIMENSION / width;
                    width = MAX_DIMENSION;
                } else {
                    width *= MAX_DIMENSION / height;
                    height = MAX_DIMENSION;
                }
            }

            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);

            canvas.toBlob((blob) => {
                if (blob) {
                    resolve(blob);
                } else {
                    reject(new Error("Canvas to Blob conversion failed"));
                }
            }, 'image/webp', 0.8);
        };

        img.onerror = function() {
            URL.revokeObjectURL(objectUrl);
            reject(new Error("Image loading failed"));
        };

        img.src = objectUrl;
    });
}

function setupModal(user) {
    if (!postModal) return;

    // Close Modal
    closeModalBtn.addEventListener('click', () => {
        postModal.classList.add('hidden');
        resetModal();
    });

    window.addEventListener('click', (e) => {
        if (e.target == postModal) {
            postModal.classList.add('hidden');
            resetModal();
        }
    });

    // Image Upload Preview
    postImageUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.src = e.target.result;
                imagePreviewContainer.classList.remove('hidden');
            }
            reader.readAsDataURL(file);
        } else {
            imagePreviewContainer.classList.add('hidden');
            imagePreview.src = "";
        }
    });

    // Submit
    postSubmitBtn.addEventListener('click', handlePostSubmit);

    async function handlePostSubmit() {
        const file = postImageUpload.files[0];
        const category = postCategory.value;
        const promptText = postPromptPreview.value;

        if (!promptText) {
            alert("Prompt is missing.");
            return;
        }
        if (!file) {
            alert("Please upload an image result.");
            return;
        }

        // Disable button
        postSubmitBtn.disabled = true;
        postSubmitBtn.textContent = "Publishing...";

        try {
            // 1. Upload Image
            const timestamp = Date.now();
            const webpBlob = await convertToWebP(file);
            const storageRef = ref(storage, `gallery_uploads/${user.uid}_${timestamp}.webp`);
            await uploadBytes(storageRef, webpBlob);
            const downloadURL = await getDownloadURL(storageRef);

            // 2. Add to public_gallery
            await addDoc(collection(db, "public_gallery"), {
                prompt: promptText,
                imageUrl: downloadURL,
                category: category,
                author: user.displayName || "Anonymous",
                authorId: user.uid,
                timestamp: serverTimestamp()
            });

            alert("Posted Successfully! 🚀");
            postModal.classList.add('hidden');
            resetModal();

        } catch (error) {
            console.error("Error posting to gallery:", error);
            alert("Failed to post: " + error.message);
        } finally {
            postSubmitBtn.disabled = false;
            postSubmitBtn.textContent = "Publish to Gallery";
        }
    }
}

function openPostModal(promptText) {
    if (!postModal) return;
    currentPromptToPost = promptText;
    postPromptPreview.value = promptText;
    postModal.classList.remove('hidden');
}

function resetModal() {
    postPromptPreview.value = "";
    postImageUpload.value = "";
    imagePreview.src = "";
    imagePreviewContainer.classList.add('hidden');
    postCategory.selectedIndex = 0;
}

// Utility
function escapeHtml(text) {
    if (!text) return "";
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDashboard);
} else {
    initDashboard();
}
