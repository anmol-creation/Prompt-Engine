import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// --- CONFIGURATION ---
// ⚠️ PASTE YOUR FIREBASE CONFIGURATION KEYS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBobzUg9DH5UZgNfpXo9KZCCqHq37L9bog",
  authDomain: "promptoengine.firebaseapp.com",
  projectId: "promptoengine",
  storageBucket: "promptoengine.firebasestorage.app",
  messagingSenderId: "743658812881",
  appId: "1:743658812881:web:755a7a1cc8c798c8a09cf0"
};

// Initialize Firebase
let app, auth;
let isUserLoggedIn = false; // Track login state

try {
    if (Object.keys(firebaseConfig).length > 0) {
        app = initializeApp(firebaseConfig);
        auth = getAuth(app);
    } else {
        console.warn("Firebase Config is empty. Authentication will not work until keys are added.");
    }
} catch (e) {
    console.error("Error initializing Firebase:", e);
}

// Export for other modules
export { app, auth, isUserLoggedIn };

// --- AUTH FUNCTIONS ---

async function loginWithGoogle(redirectUrl) {
    if (!auth) {
        alert("Firebase config missing!");
        return;
    }
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        console.log("User signed in:", result.user);

        // Auto-Redirect if a URL is provided
        if (typeof redirectUrl === 'string' && redirectUrl.length > 0) {
            window.location.href = redirectUrl;
        }
    } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed: " + error.message);
    }
}

async function logoutUser() {
    if (!auth) return;
    try {
        await signOut(auth);
        console.log("User signed out");
        // Hide dropdown on logout
        const profileDropdown = document.getElementById('profile-dropdown');
        if (profileDropdown) profileDropdown.classList.add('hidden');
    } catch (error) {
        console.error("Logout failed:", error);
    }
}

// --- INITIALIZATION & EVENT LISTENERS ---

function initAuthUI() {
    const loginBtn = document.getElementById('login-btn');
    const userProfile = document.getElementById('user-profile');
    const userAvatar = document.getElementById('user-avatar');
    const profileDropdown = document.getElementById('profile-dropdown');
    const logoutBtn = document.getElementById('logout-btn');
    const createPromptBtn = document.getElementById('create-prompt-btn');

    // Modal Elements
    const authModal = document.getElementById('auth-modal');
    const modalLoginBtn = document.getElementById('modal-login-btn');
    const modalSkipBtn = document.getElementById('modal-skip-btn');
    const sectionSignupBtn = document.getElementById('section-signup-btn');

    if (loginBtn) {
        // Pass a wrapper to ensure event object isn't treated as redirectUrl
        loginBtn.addEventListener('click', () => loginWithGoogle());
    }

    // Handle single ID logout button (legacy/existing)
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logoutUser);
    }

    // Handle multiple logout buttons (class-based)
    const logoutBtns = document.querySelectorAll('.logout-btn');
    logoutBtns.forEach(btn => {
        btn.addEventListener('click', logoutUser);
    });

    if (userAvatar) {
        userAvatar.addEventListener('click', (e) => {
            e.stopPropagation();
            if (profileDropdown) {
                profileDropdown.classList.toggle('hidden');
            }
        });
    }

    // Gatekeeper for Create Prompt button
    if (createPromptBtn) {
        createPromptBtn.addEventListener('click', (e) => {
            if (!isUserLoggedIn) {
                e.preventDefault(); // Stop navigation
                // Show Benefits Modal instead of direct login
                if (authModal) authModal.classList.remove('hidden');
            }
            // If logged in, do nothing (let default href work)
        });
    }

    // Modal Interactions
    if (modalLoginBtn) {
        modalLoginBtn.addEventListener('click', () => {
             // Redirect to tool after login is tricky with popup,
             // but usually auth state change handles UI updates.
             // If we want to redirect to the tool specifically:
             const targetUrl = createPromptBtn ? createPromptBtn.href : null;
             loginWithGoogle(targetUrl);
        });
    }

    if (modalSkipBtn) {
        modalSkipBtn.addEventListener('click', () => {
            if (createPromptBtn) {
                window.location.href = createPromptBtn.href;
            }
        });
    }

    // Section CTA Button
    if (sectionSignupBtn) {
        sectionSignupBtn.addEventListener('click', () => loginWithGoogle());
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (profileDropdown && !profileDropdown.classList.contains('hidden')) {
            if (userProfile && !userProfile.contains(e.target)) {
                profileDropdown.classList.add('hidden');
            }
        }
        // Close modal when clicking outside content
        if (authModal && !authModal.classList.contains('hidden')) {
             if (e.target === authModal) {
                 authModal.classList.add('hidden');
             }
        }
    });

    // --- STATE LISTENER ---
    if (auth) {
        onAuthStateChanged(auth, (user) => {
            // Auth Guard for Dashboard
            const isDashboard = window.location.pathname.includes('dashboard.html');

            if (user) {
                // User is signed in
                isUserLoggedIn = true;
                if (loginBtn) loginBtn.classList.add('hidden');
                if (userProfile) userProfile.classList.remove('hidden');

                const avatarSrc = user.photoURL || 'assets/img/default-avatar.png';
                const userName = user.displayName || 'User';

                if (userAvatar) {
                    userAvatar.src = avatarSrc; // Fallback handled in variable
                    userAvatar.alt = userName;
                    userAvatar.title = userName;
                }

                // Populate Dashboard if present
                if (isDashboard) {
                    const dashName = document.getElementById('dash-name');
                    const dashEmail = document.getElementById('dash-email');
                    const dashAvatar = document.getElementById('dash-avatar');

                    if (dashName) dashName.textContent = userName;
                    if (dashEmail) dashEmail.textContent = user.email;
                    if (dashAvatar) dashAvatar.src = avatarSrc;
                }

            } else {
                // User is signed out
                isUserLoggedIn = false;
                if (loginBtn) loginBtn.classList.remove('hidden');
                if (userProfile) userProfile.classList.add('hidden');

                // Redirect if on Dashboard and not logged in
                if (isDashboard) {
                    window.location.href = 'index.html';
                }
            }
        });
    }
}

// Ensure DOM and layout are ready
function setupAuthUI() {
    if (window.layoutReadyFired) {
        initAuthUI();
    } else {
        document.addEventListener('layoutReady', initAuthUI);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupAuthUI);
} else {
    setupAuthUI();
}
