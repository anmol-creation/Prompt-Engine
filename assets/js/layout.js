// Layout Loader
// Dynamically injects Header and Footer to ensure global consistency.

const headerHTML = `
<div class="container header-content">
    <a href="https://anmol-creation.github.io/PromptoEngine/pages/home/home.html" class="logo-link"><h1>Prompt<span style="color: #2563eb;">O</span>Engine</h1></a>
    <div class="header-right">
        <button id="theme-toggle" aria-label="Toggle Dark Mode" class="icon-btn">
            <span class="icon">☀️</span>
        </button>

        <!-- Authentication UI -->
        <button id="login-btn" class="auth-btn icon-btn" aria-label="Sign In">
            <!-- Google Icon SVG -->
            <svg class="google-icon" viewBox="0 0 48 48" width="24px" height="24px">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
        </button>

        <div id="user-profile" class="user-profile hidden">
            <img id="user-avatar" src="" alt="User" class="avatar">
            <div id="profile-dropdown" class="profile-dropdown hidden">
                <a href="/dashboard.html" class="dropdown-item">My Dashboard</a>
                <button id="logout-btn" class="logout-btn">Logout</button>
            </div>
        </div>
    </div>
</div>
`;

const footerHTML = `
<div class="container footer-content">
    <div class="footer-branding">
        <p>&copy; 2025 PromptoEngine. Designed for thinking, not guessing. <span id="dev-trigger" class="ac-text ac-trigger">.ac</span></p>
    </div>

    <div class="footer-feedback">
        <h4>Rate Your Experience</h4>
        <div class="feedback-form" id="feedback-form">
            <div class="star-rating" id="star-rating">
                <span class="star" data-value="1">★</span>
                <span class="star" data-value="2">★</span>
                <span class="star" data-value="3">★</span>
                <span class="star" data-value="4">★</span>
                <span class="star" data-value="5">★</span>
            </div>

            <div class="feedback-details" id="feedback-details" style="display: none;">
                <div class="feedback-category">
                    <label><input type="radio" name="feedback-category" value="Report Bug"> Bug</label>
                    <label><input type="radio" name="feedback-category" value="Feature Request"> Feature</label>
                    <label><input type="radio" name="feedback-category" value="Other" checked> Other</label>
                </div>
                <textarea id="feedback-message" placeholder="Tell us more..."></textarea>
                <button id="feedback-submit" disabled>Send Feedback</button>
            </div>
        </div>
        <div id="feedback-success" style="display: none;">
            <p>Thank you for your feedback!</p>
        </div>
    </div>
</div>
`;

// Inject Header
const headerEl = document.getElementById('main-header');
if (headerEl) {
    headerEl.innerHTML = headerHTML;
} else {
    console.warn('Layout: #main-header not found');
}

// Inject Footer
const footerEl = document.getElementById('main-footer');
if (footerEl) {
    footerEl.innerHTML = footerHTML;
} else {
    console.warn('Layout: #main-footer not found');
}

// Initialize Global Logic
setupThemeToggle();
setupDevMode();

// --- Feature Implementations ---

function setupThemeToggle() {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    if (!toggleButton) return;

    const iconSpan = toggleButton.querySelector('.icon');

    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.remove('dark-mode', 'light-mode');
        body.classList.add(savedTheme);
        updateButtonState(savedTheme === 'dark-mode');
    } else {
        // Default check (assuming dark-mode is default class on body)
        if (body.classList.contains('dark-mode')) {
            updateButtonState(true);
        }
    }

    toggleButton.addEventListener('click', () => {
        const isDarkMode = body.classList.toggle('dark-mode');
        // If it was dark, and we toggled, it might remove 'dark-mode'.
        // If body has 'dark-mode' class, it is dark.
        // Wait, classList.toggle returns true if added, false if removed.
        // If default body has 'dark-mode', toggling removes it -> becomes light.

        // Let's be explicit to avoid confusion
        // If body has dark-mode, it's dark.

        const currentMode = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', currentMode);
        updateButtonState(currentMode === 'dark-mode');

        // If light mode is active (no dark-mode class), ensure we don't have conflicting classes if any
        if (currentMode === 'light-mode') {
             body.classList.remove('dark-mode');
        }
    });

    function updateButtonState(isDarkMode) {
        if (!iconSpan) return;
        // Icon: Sun for Light Mode (to switch to Dark?), Moon for Dark Mode (to switch to Light?)
        // Usually: Show the icon of the mode you are IN, or the mode you will switch TO.
        // Existing code: "☀️" was used.
        // Let's stick to: ☀️ = currently in Light Mode (or button to make it sunny?), 🌙 = Dark Mode.
        // Wait, standard:
        // If Dark Mode active -> Show Sun (to switch to light)
        // If Light Mode active -> Show Moon (to switch to dark)

        if (isDarkMode) {
            iconSpan.textContent = '☀️'; // Button to switch to Light
            toggleButton.setAttribute('aria-label', 'Switch to Light Mode');
        } else {
            iconSpan.textContent = '🌙'; // Button to switch to Dark
            toggleButton.setAttribute('aria-label', 'Switch to Dark Mode');
        }
    }
}

function setupDevMode() {
    const triggerEl = document.getElementById('dev-trigger');
    if (!triggerEl) return;

    let tapCount = 0;
    let tapTimer;

    triggerEl.addEventListener('click', (e) => {
        e.preventDefault();

        tapCount++;
        clearTimeout(tapTimer);
        tapTimer = setTimeout(() => {
            tapCount = 0;
        }, 2000);

        if (tapCount === 7) {
            alert("👨‍💻 Developer Mode Unlocked!");
            localStorage.setItem('promto_dev_mode_enabled', 'true');
            window.dispatchEvent(new Event('dev-mode-enabled'));
            tapCount = 0;
            // Reload to apply changes if necessary
             setTimeout(() => window.location.reload(), 500);
        }
    });
}
