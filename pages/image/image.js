// Root Loader for Image Page
import { initTheme } from '../../assets/js/utils.js';
import { isFeatureEnabled, FEATURES } from '../../dev-access/access.js';

const MODES = {
    SIMPLE: 'simple',
    HARD: 'hard' // Maps to 'default' folder internally
};

// Cache for styles
const loadedStyles = new Set();

async function loadStyle(href) {
    if (loadedStyles.has(href)) return;
    return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.onload = () => {
            loadedStyles.add(href);
            resolve();
        };
        link.onerror = reject;
        document.head.appendChild(link);
    });
}

// Function to load content
async function loadMode(mode) {
    const container = document.getElementById('mode-content-container');
    container.innerHTML = '<div style="text-align:center; padding: 2rem;">Loading...</div>';

    try {
        if (mode === MODES.SIMPLE) {
            // Load Simple Mode
            await loadStyle('simple/simple.css');
            await loadStyle('simple/visual-guide.css');
            const response = await fetch('simple/simple.html');
            if (!response.ok) throw new Error(`Failed to fetch simple.html: ${response.statusText}`);

            const html = await response.text();
            container.innerHTML = html;

            const module = await import(`./simple/simple.js?t=${Date.now()}`);
            if (module && module.initSimpleMode) {
                module.initSimpleMode();
            } else {
                throw new Error("initSimpleMode not found in module");
            }
        } else {
            // Load Hard Mode (Default)
            await loadStyle('default/default.css');
            const response = await fetch('default/default.html');
            if (!response.ok) throw new Error(`Failed to fetch default.html: ${response.statusText}`);

            const html = await response.text();
            container.innerHTML = html;

            const module = await import('./default/default.js');
            if (module && module.initDefaultMode) {
                module.initDefaultMode();
            } else {
                throw new Error("initDefaultMode not found in module");
            }
        }
    } catch (error) {
        console.error(`Failed to load mode: ${mode}`, error);
        container.innerHTML = `<div style="color:red; text-align:center; padding: 20px;">
            <h3>Error loading mode</h3>
            <p>Please refresh the page.</p>
            <p style="font-size: 0.8rem; color: #666;">${error.message}</p>
        </div>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    const switchBtns = document.querySelectorAll('.switch-btn');

    let currentMode = MODES.SIMPLE;

    // Load initial mode
    loadMode(currentMode);

    switchBtns.forEach(btn => {
        // Lock Hard Mode if feature is not enabled
        if (btn.dataset.target === MODES.HARD && !isFeatureEnabled(FEATURES.HARD_MODE)) {
            btn.style.opacity = '0.5';
            btn.style.cursor = 'not-allowed';
            btn.title = 'Coming Soon';
            btn.innerHTML += ' 🔒'; // Add lock icon
            // Remove click listener logic for this button effectively
            return;
        }

        btn.addEventListener('click', () => {
            const target = btn.dataset.target;

            // Security check: Prevent click if feature is locked
            if (target === MODES.HARD && !isFeatureEnabled(FEATURES.HARD_MODE)) return;

            if (target === currentMode) return;

            // UI Update
            switchBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            currentMode = target;
            loadMode(currentMode);
        });
    });
});
