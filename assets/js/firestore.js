import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { app, auth } from "./auth.js";

// Initialize Firestore
const db = getFirestore(app);

// SVG Icons
const bookmarkOutline = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>`;
const bookmarkFilled = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>`;

export async function savePrompt(promptText, btnElement) {
    if (!auth.currentUser) {
        alert("Please login to save prompts.");
        return;
    }

    if (!promptText) return;

    // Visual feedback processing
    const originalContent = btnElement.innerHTML;
    btnElement.disabled = true;
    btnElement.style.opacity = "0.7";

    try {
        const uid = auth.currentUser.uid;
        // Save to users/{uid}/saved_prompts
        await addDoc(collection(db, "users", uid, "saved_prompts"), {
            prompt: promptText,
            createdAt: serverTimestamp()
        });

        // Success UI
        btnElement.innerHTML = bookmarkFilled;
        btnElement.classList.add('saved');
        btnElement.title = "Saved";

        // Show Toast
        showToast("Saved to Dashboard");

    } catch (e) {
        console.error("Error saving prompt:", e);
        alert("Failed to save prompt. Please try again.");
        btnElement.innerHTML = originalContent; // Revert
    } finally {
        btnElement.disabled = false;
        btnElement.style.opacity = "1";
    }
}

function showToast(message) {
    // Create toast element if not exists or use existing system
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.className = "show"; // Assuming 'show' class handles visibility animation

    // Add css for toast if not present in global.css (it is in prompt gallery but maybe not global)
    // We'll rely on global styling or simple inline styles for safety if 'show' class isn't defined globally.
    // Checking previous files, prompt_gallery/style.css defines #toast.
    // assets/css/dashboard.css doesn't.
    // We might need to add toast styles to global.css.

    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}
