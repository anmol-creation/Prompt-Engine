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
const app = initializeApp(firebaseConfig);
// Note: We wrap this in a try-catch or check to ensure config is present,
// but for this task, we assume the user will paste it.
// If config is empty, initializeApp might throw. We'll proceed assuming valid config eventually.
let app, auth;

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

// --- DOM ELEMENTS ---
const loginBtn = document.getElementById('login-btn');
const userProfile = document.getElementById('user-profile');
const userAvatar = document.getElementById('user-avatar');
const profileDropdown = document.getElementById('profile-dropdown');
const logoutBtn = document.getElementById('logout-btn');

// --- AUTH FUNCTIONS ---

async function loginWithGoogle() {
    if (!auth) {
        alert("Firebase config missing!");
        return;
    }
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        console.log("User signed in:", result.user);
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
        if (profileDropdown) profileDropdown.classList.add('hidden');
    } catch (error) {
        console.error("Logout failed:", error);
    }
}

// --- EVENT LISTENERS ---

if (loginBtn) {
    loginBtn.addEventListener('click', loginWithGoogle);
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', logoutUser);
}

if (userAvatar) {
    userAvatar.addEventListener('click', (e) => {
        e.stopPropagation();
        if (profileDropdown) {
            profileDropdown.classList.toggle('hidden');
        }
    });
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (profileDropdown && !profileDropdown.classList.contains('hidden')) {
        if (!userProfile.contains(e.target)) {
            profileDropdown.classList.add('hidden');
        }
    }
});

// --- STATE LISTENER ---

if (auth) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
            if (loginBtn) loginBtn.classList.add('hidden');
            if (userProfile) userProfile.classList.remove('hidden');

            if (userAvatar) {
                userAvatar.src = user.photoURL || 'assets/img/default-avatar.png'; // Fallback if needed
                userAvatar.alt = user.displayName || 'User';
                userAvatar.title = user.displayName || 'User';
            }
        } else {
            // User is signed out
            if (loginBtn) loginBtn.classList.remove('hidden');
            if (userProfile) userProfile.classList.add('hidden');
        }
    });
}
