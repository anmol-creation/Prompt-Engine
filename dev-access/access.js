// dev-access/access.js

import { FEATURES, DEFAULT_CONFIG } from './config.js';

export { FEATURES };

// Secret parameter name
const DEV_PARAM = 'dev';

// Check if dev mode is active via URL
function isDevMode() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.has(DEV_PARAM);
}

// Check if a feature is enabled
export function isFeatureEnabled(featureId) {
    // If not a known feature, default to false (safe)
    if (!Object.values(FEATURES).includes(featureId)) {
        console.warn(`Unknown feature check: ${featureId}`);
        return false;
    }

    // If dev mode, everything is unlocked
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
