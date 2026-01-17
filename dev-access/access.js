// dev-access/access.js

import { FEATURES, DEFAULT_CONFIG } from './config.js';

export { FEATURES };

// Secret parameter name
const DEV_PARAM = 'dev';
const DEV_STORAGE_KEY = 'promto_dev_mode_enabled';

// Check if dev mode is active via URL or Storage
function isDevMode() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has(DEV_PARAM)) return true;

    return localStorage.getItem(DEV_STORAGE_KEY) === 'true';
}

// Toggle dev mode (for the footer trigger)
export function toggleDevMode() {
    const current = localStorage.getItem(DEV_STORAGE_KEY) === 'true';
    const newState = !current;
    localStorage.setItem(DEV_STORAGE_KEY, newState);

    // Alert the user
    if (newState) {
        alert("Developer Mode Enabled");
    } else {
        alert("Developer Mode Disabled");
    }

    // Refresh to apply changes
    window.location.reload();
}

// Check if a feature is enabled
export function isFeatureEnabled(featureId) {
    // If not a known feature, default to false (safe)
    if (!Object.values(FEATURES).includes(featureId)) {
        console.warn(`Unknown feature check: ${featureId}`);
        return false;
    }

    // SPECIAL RULE: These modes are ALWAYS LOCKED, even in Dev Mode.
    if (featureId === FEATURES.HARD_MODE ||
        featureId === FEATURES.VIDEO_ADVANCED ||
        featureId === FEATURES.VIDEO_PRO) {
        return false;
    }

    // If dev mode, everything else is unlocked
    if (isDevMode()) {
        return true;
    }

    // Otherwise use public config
    return DEFAULT_CONFIG[featureId] || false;
}

// Helper to get dev status (e.g. for UI debugging tools)
export function getDevStatus() {
    return {
        isDev: isDevMode()
    };
}
