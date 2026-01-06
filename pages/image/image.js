// Root Loader for Image Page
import { initTheme } from '../../assets/js/utils.js';

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
            const response = await fetch('simple/simple.html');
            const html = await response.text();
            container.innerHTML = html;

            const module = await import('./simple/simple.js');
            module.initSimpleMode();
        } else {
            // Load Hard Mode (Default)
            await loadStyle('default/default.css');
            const response = await fetch('default/default.html');
            const html = await response.text();
            container.innerHTML = html;

            const module = await import('./default/default.js');
            module.initDefaultMode();
        }
    } catch (error) {
        console.error(`Failed to load mode: ${mode}`, error);
        container.innerHTML = `<div style="color:red; text-align:center;">Error loading mode. Please refresh.</div>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    const switchBtns = document.querySelectorAll('.switch-btn');

    let currentMode = MODES.SIMPLE;

    // Load initial mode
    loadMode(currentMode);

    switchBtns.forEach(btn => {
        // Lock Hard Mode
        if (btn.dataset.target === MODES.HARD) {
            btn.style.opacity = '0.5';
            btn.style.cursor = 'not-allowed';
            btn.title = 'Coming Soon';
            btn.innerHTML += ' 🔒'; // Add lock icon
            // Remove click listener logic for this button effectively
            return;
        }

        btn.addEventListener('click', () => {
            const target = btn.dataset.target;

            // Prevent Hard Mode switch explicitly (though UI is locked)
            if (target === MODES.HARD) return;

            if (target === currentMode) return;

            // UI Update
            switchBtns.forEach(b => {
                if(b.dataset.target !== MODES.HARD) b.classList.remove('active');
            });
            btn.classList.add('active');

            currentMode = target;
            loadMode(currentMode);
        });
    });
});
