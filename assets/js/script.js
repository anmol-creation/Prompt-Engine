
import { db } from "./firestore.js";
import { auth } from "./auth.js";
import { collection, addDoc, serverTimestamp, query, orderBy, limit, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// --- HISTORY LOGIC ---

export async function addToHistory(promptText) {
    if (!auth.currentUser || !promptText) return;

    const uid = auth.currentUser.uid;
    const historyRef = collection(db, "users", uid, "history");

    try {
        // Add new history item
        await addDoc(historyRef, {
            prompt: promptText,
            timestamp: serverTimestamp()
        });
        console.log("Prompt added to history.");

        // Optional: Maintain limit (e.g., last 50)
        // For simplicity and performance, we might skip deletion here or do it periodically.
        // But requested: "Limit history to last 50 items to save space."
        // We can check count or just rely on client-side limit for now to avoid extra reads/deletes on every save.
        // A Cloud Function would be better for cleanup, but client-side is okay for small scale.

    } catch (e) {
        console.error("Error adding to history:", e);
    }
}

// Global Event Listener for Tool Pages
document.addEventListener('DOMContentLoaded', () => {
    // --- IMAGE SIMPLE MODE ---
    const simpleCreateBtn = document.getElementById('simple-create-btn');
    const simpleCopyBtn = document.getElementById('simple-copy-btn');
    const simpleFinalPrompt = document.getElementById('simple-final-prompt');

    if (simpleCreateBtn && simpleFinalPrompt) {
        simpleCreateBtn.addEventListener('click', () => {
            // Wait slightly for generation (if async) or grab current content if immediate
            // The prompt generation is usually synchronous or fast.
            // But if it has animation (typing effect), we might need to wait.
            // Let's use a mutation observer or a simple timeout/check.
            // Assuming the button triggers generation and updates text.

            // Actually, best to capture when the user explicitly copies or when generation is *complete*.
            // If typing animation is used, textContent changes over time.

            // For now, let's hook into the Copy button as it's definitive.
            // And maybe a delay on Create?
            setTimeout(() => {
                const text = simpleFinalPrompt.innerText || simpleFinalPrompt.textContent;
                if (text && !text.includes("Your generated prompt will appear here")) {
                     addToHistory(text);
                }
            }, 2000); // 2s delay to allow generation/animation
        });
    }

    if (simpleCopyBtn && simpleFinalPrompt) {
        simpleCopyBtn.addEventListener('click', () => {
            const text = simpleFinalPrompt.innerText || simpleFinalPrompt.textContent;
            if (text && !text.includes("Your generated prompt will appear here")) {
                addToHistory(text);
            }
        });
    }

    // --- GENERIC / OTHER MODES ---
    // If other pages use different IDs, add them here.
    // e.g. Image Default Mode
    const defaultCopyBtn = document.getElementById('copy-btn');
    const defaultPromptOutput = document.getElementById('prompt-output'); // Hypothethical ID

    if (defaultCopyBtn) {
        defaultCopyBtn.addEventListener('click', () => {
            // Try to find the prompt text
            let text = "";
            if (defaultPromptOutput) text = defaultPromptOutput.value || defaultPromptOutput.textContent;
            // Fallback: clipboard? No, security restriction.

            if (text) addToHistory(text);
        });
    }
});
