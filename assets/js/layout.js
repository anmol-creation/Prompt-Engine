// Layout Loader
// Dynamically injects Header and Footer to ensure global consistency.

// Determine Base Path for Assets and Links
function getBasePath() {
    // 1. If we are running on a known domain (like GitHub Pages or localhost)
    // we can calculate the depth relative to the root by counting the path segments
    // after the repository name (e.g. /PromptoEngine/)

    // First, find the script tag that loaded this file
    const scripts = document.getElementsByTagName('script');
    for (let s of scripts) {
        const srcAttr = s.getAttribute('src');
        if (srcAttr && srcAttr.includes('assets/js/layout.js')) {
            // This is safer than string manipulation of absolute URL:
            // Extract the prefix like '../../' or './' or ''
            let basePath = srcAttr.split('assets/js/layout.js')[0];
            // Normalize empty or strictly relative base paths
            if (!basePath) return '.';
            if (basePath.endsWith('/')) {
                return basePath.slice(0, -1);
            }
            return basePath;
        }
    }

    // Fallback if the above fails: calculate depth from current pathname
    // Assuming 'pages' or 'assets' indicates we are in a subdirectory
    const path = window.location.pathname;
    if (path.includes('/pages/')) {
        // e.g., /repo/pages/home/home.html -> split by /pages/ -> ['/repo', 'home/home.html']
        // We need to go up one level for each slash in the second part, plus one for 'pages' itself
        const afterPages = path.split('/pages/')[1];
        const depth = afterPages.split('/').length;
        let relative = '..';
        for (let i = 1; i < depth; i++) {
            relative += '/..';
        }
        return relative;
    }

    return '.'; // Default to current directory
}

const basePath = getBasePath();

// Construct URLs
const homeUrl = basePath + '/pages/home/home.html';
const dashboardUrl = basePath + '/dashboard.html';

const headerHTML = `
<div class="container header-content">
    <a href="${homeUrl}" class="logo-link"><h1>Prompt<span style="color: #2563eb; font-weight: 700;">O</span>Engine</h1></a>
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
                <a href="${dashboardUrl}" class="dropdown-item">My Dashboard</a>
                <button id="logout-btn" class="logout-btn">Logout</button>
            </div>
        </div>
    </div>
</div>
`;

const footerHTML = `
<div class="container footer-content">
    <div class="footer-branding">
        <p>&copy; 2025 PromptoEngine. Designed for thinking, not guessing. <span id="dev-trigger" class="ac-text ac-trigger" style="margin-left: 10px;">.ac</span></p>
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
}

// Inject Footer
const footerEl = document.getElementById('main-footer');
if (footerEl) {
    footerEl.innerHTML = footerHTML;
}

// Dispatch custom event to signal that header and footer have been injected
document.dispatchEvent(new CustomEvent('layoutReady'));
window.layoutReadyFired = true;

function injectPWA(basePath) {
    // Inject Manifest
    if (!document.querySelector('link[rel="manifest"]')) {
        const link = document.createElement('link');
        link.rel = 'manifest';
        // Need to add a slash if basePath is purely relative without it
        const prefix = basePath === '.' ? '' : `${basePath}/`;
        link.href = `${prefix}manifest.json`;
        document.head.appendChild(link);
    }

    // Register Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            const prefix = basePath === '.' ? '' : `${basePath}/`;
            navigator.serviceWorker.register(`${prefix}sw.js`)
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
}

// Initialize Global Logic
document.addEventListener('DOMContentLoaded', () => {
    const basePath = getBasePath();
    injectPWA(basePath);
    setupDevMode();
    injectGlobalScripts();
});

function injectGlobalScripts() {
    // Inject History/Script.js globally
    // We reuse the basePath calculated above
    const script = document.createElement('script');
    script.type = 'module';
    script.src = basePath + 'assets/js/script.js';
    document.body.appendChild(script);
}

// --- Feature Implementations ---

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
            setTimeout(() => window.location.reload(), 500);
        }
    });
}
