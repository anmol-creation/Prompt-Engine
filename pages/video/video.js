// Root Loader for Video Page
import { initTheme } from '../../assets/js/utils.js';
import { isFeatureEnabled, FEATURES } from '../../dev-access/access.js';
import { initDevTrigger } from '../../dev-access/trigger.js';

const MODES = {
    SIMPLE: 'simple',
    ADVANCED: 'advanced',
    PRO: 'pro'
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

            // Cache bust the module import
            const module = await import('./simple/js/simple.js');
            if (module && module.initVideoSimpleMode) {
                module.initVideoSimpleMode();
            } else {
                console.warn("initVideoSimpleMode not found in module");
            }
        } else {
            // Advanced / Pro - Should be blocked by UI, but if reached here:
            container.innerHTML = `<div style="text-align:center; padding: 2rem;"><h3>Mode Locked</h3></div>`;
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
    initDevTrigger();

    const switchBtns = document.querySelectorAll('.switch-btn');

    let currentMode = MODES.SIMPLE;

    // Load initial mode
    loadMode(currentMode);

    switchBtns.forEach(btn => {
        const target = btn.dataset.target;
        let isLocked = false;

        if (target === MODES.ADVANCED) {
            if (!isFeatureEnabled(FEATURES.VIDEO_ADVANCED)) isLocked = true;
        } else if (target === MODES.PRO) {
            if (!isFeatureEnabled(FEATURES.VIDEO_PRO)) isLocked = true;
        }

        if (isLocked) {
            btn.classList.add('locked');
            btn.title = 'Locked';
            btn.innerHTML += ' 🔒';
        }

        btn.addEventListener('click', () => {
            if (isLocked) return;
            if (target === currentMode) return;

            // UI Update
            switchBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            currentMode = target;
            loadMode(currentMode);
        });
    });
});
