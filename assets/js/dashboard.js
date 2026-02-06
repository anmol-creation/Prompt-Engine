import { app, auth } from "./auth.js";
import {
    getFirestore,
    collection,
    query,
    orderBy,
    getDocs,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const db = getFirestore(app);
const contentContainer = document.getElementById('dash-content');

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
        if (activeTab && activeTab.dataset.tab === 'saved-prompts') {
            fetchSavedPrompts(user.uid);
        }

        // Tab Switching Logic
        setupTabs(user.uid);
    });
}

function setupTabs(uid) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update UI
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Load Content
            if (tab.dataset.tab === 'saved-prompts') {
                fetchSavedPrompts(uid);
            } else if (tab.dataset.tab === 'contributions') {
                loadContributions();
            }
        });
    });
}

async function fetchSavedPrompts(uid) {
    if (!contentContainer) return;

    contentContainer.innerHTML = '<div class="loader">Loading your prompts...</div>';

    try {
        console.log(`Fetching prompts for user: ${uid}`);

        const promptsRef = collection(db, "users", uid, "saved_prompts");
        // Ensure index exists for this query in Firestore console if needed
        const q = query(promptsRef, orderBy("createdAt", "desc"));

        const querySnapshot = await getDocs(q);

        console.log("Docs found:", querySnapshot.size);

        if (querySnapshot.empty) {
            contentContainer.innerHTML = `
                <div class="empty-state">
                    <p>You haven't saved any prompts yet.</p>
                    <a href="pages/selection/selection.html" class="cta-link">Create a Prompt</a>
                </div>
            `;
            return;
        }

        // Render Grid
        contentContainer.innerHTML = '<div class="prompts-grid" id="prompts-grid"></div>';
        const grid = document.getElementById('prompts-grid');

        querySnapshot.forEach((docSnap) => {
            const data = docSnap.data();
            const card = createPromptCard(docSnap.id, data);
            grid.appendChild(card);
        });

    } catch (error) {
        console.error("Error fetching prompts:", error);
        contentContainer.innerHTML = `
            <div class="error-state">
                <p>Failed to load prompts.</p>
                <small>${error.message}</small>
            </div>
        `;
    }
}

function createPromptCard(docId, data) {
    const card = document.createElement('div');
    card.className = 'saved-prompt-card';

    // Format Date
    let dateStr = "Unknown Date";
    if (data.createdAt) {
        try {
            dateStr = new Date(data.createdAt.seconds * 1000).toLocaleDateString();
        } catch (e) {}
    }

    // Image Element Construction
    let imageHtml = '';
    if (data.image) {
        imageHtml = `<div class="card-image-wrapper"><img src="${data.image}" class="card-image" alt="Prompt Image" loading="lazy"></div>`;
    }

    card.innerHTML = `
        ${imageHtml}
        <div class="card-content-wrapper">
            <div class="card-header">
                <span class="card-date">${dateStr}</span>
                <div class="card-actions">
                    <button class="icon-btn delete-btn" title="Delete">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff4757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                    </button>
                </div>
            </div>
            <div class="card-body">
                <p class="prompt-text">${escapeHtml(data.prompt)}</p>
            </div>
            <div class="card-footer-tip">Click card to copy</div>
        </div>
    `;

    // Event Listeners
    const deleteBtn = card.querySelector('.delete-btn');

    // Make whole card click to copy (excluding delete button)
    card.addEventListener('click', (e) => {
        // If clicked on delete button or its children, do nothing (handled below)
        if (e.target.closest('.delete-btn')) return;

        navigator.clipboard.writeText(data.prompt);

        // Visual Feedback (Toast or Card Animation)
        showCopiedFeedback(card);
    });

    deleteBtn.addEventListener('click', async (e) => {
        e.stopPropagation(); // Stop card click
        if (confirm("Are you sure you want to delete this prompt?")) {
            try {
                await deleteDoc(doc(db, "users", auth.currentUser.uid, "saved_prompts", docId));
                card.remove();
                // Check if empty
                const grid = document.getElementById('prompts-grid');
                if (grid && grid.children.length === 0) {
                    contentContainer.innerHTML = `
                        <div class="empty-state">
                            <p>You haven't saved any prompts yet.</p>
                            <a href="pages/selection/selection.html" class="cta-link">Create a Prompt</a>
                        </div>
                    `;
                }
            } catch (e) {
                console.error("Error deleting doc:", e);
                alert("Failed to delete.");
            }
        }
    });

    return card;
}

function showCopiedFeedback(card) {
    // Add a temporary overlay or change styling
    const originalBorder = card.style.borderColor;
    card.style.borderColor = "#2ecc71";

    // Optional: Add a 'Copied' badge
    let badge = document.createElement('div');
    badge.className = 'copied-badge';
    badge.textContent = "Copied!";
    card.appendChild(badge);

    setTimeout(() => {
        card.style.borderColor = originalBorder;
        if (badge.parentNode) badge.parentNode.removeChild(badge);
    }, 1500);
}

function loadContributions() {
    contentContainer.innerHTML = `
        <div class="empty-state">
            <p>Contributions feature coming soon!</p>
        </div>
    `;
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

// Run
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDashboard);
} else {
    initDashboard();
}
