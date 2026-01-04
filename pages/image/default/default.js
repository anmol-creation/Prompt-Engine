// Entry point for Image Page - Default (Hard) Mode
import { initTheme } from '../../../assets/js/utils.js';
import { initModeSystem } from './js/ui/mode.js';
import { initRows, updateAllRowsForMode } from './js/ui/rows.js';
import { setupCopyButton } from './js/ui/helpers.js';
import { setupPromptGeneration } from './js/prompt/connector.js';
import { createVisualGuide } from './js/visual-guide/index.js';

// Import Shared Dropdown CSS dynamically?
// image.js handles CSS loading, but we need shared/dropdown.css
// Ideally image.js should load it, or we inject it here.
// Since image.js loaded default.css, we assume shared styles might need help.
// However, since we added <link rel="stylesheet" href="shared/dropdown.css"> to image.html, it's global!
// Wait, image.html changes persist. So shared/dropdown.css is available.

export function initDefaultMode() {
    console.log("Initializing Default Mode");

    // 2. Page check (image page)
    const builderRowsContainer = document.getElementById('builder-rows');
    if (!builderRowsContainer) {
        console.error("Builder rows container not found");
        return;
    }

    // 3. Initialize Mode System
    initModeSystem(updateAllRowsForMode);

    // 4. Initialize Visual Guide Layout
    // Required Position: [Create Prompt Button] [Generated Prompt Output] [Visual Guide] [Footer]
    // The visual guide logic expects a container with id 'global-visual-guide' to exist for updates.

    const outputArea = document.querySelector('.output-area');
    if (outputArea) {
        // Remove existing visual guide if any (to prevent duplicates on re-init)
        const existingGuide = document.getElementById('global-visual-guide');
        if (existingGuide) existingGuide.remove();

        const visualGuide = createVisualGuide();
        visualGuide.id = 'global-visual-guide';

        // Insert after outputArea
        outputArea.parentNode.insertBefore(visualGuide, outputArea.nextSibling);
    }

    // 5. Initialize Rows
    // Check if rows are already initialized (to avoid duplicating event listeners if re-init is sloppy,
    // but better to rely on fresh DOM from HTML injection)
    initRows(builderRowsContainer);

    // 6. Initialize Prompt Logic
    const createPromptBtn = document.getElementById('create-prompt-btn');
    const promptOutput = document.getElementById('prompt-output');
    const copyBtn = document.getElementById('copy-btn');
    const languageSelect = document.getElementById('language-select');

    setupPromptGeneration(createPromptBtn, promptOutput, builderRowsContainer, copyBtn, languageSelect);
    setupCopyButton(copyBtn, promptOutput);
}
