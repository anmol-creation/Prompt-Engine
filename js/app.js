// Entry point
import { initTheme } from './ui/theme.js';
import { initModeSystem } from './ui/mode.js';
import { initRows, updateAllRowsForMode } from './ui/rows.js';
import { setupCopyButton } from './ui/helpers.js';
import { setupPromptGeneration } from './prompt/connector.js';
import { createVisualGuide } from './visual-guide/index.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Theme
    initTheme();

    // 2. Page check (image page)
    const builderRowsContainer = document.getElementById('builder-rows');
    if (!builderRowsContainer) return;

    // 3. Initialize Mode System
    initModeSystem(updateAllRowsForMode);

    // 4. Initialize Visual Guide Layout
    // Required Position: [Create Prompt Button] [Generated Prompt Output] [Visual Guide] [Footer]
    // The visual guide logic expects a container with id 'global-visual-guide' to exist for updates.

    const outputArea = document.querySelector('.output-area');
    if (outputArea) {
        const visualGuide = createVisualGuide();
        visualGuide.id = 'global-visual-guide';

        // Insert after outputArea
        outputArea.parentNode.insertBefore(visualGuide, outputArea.nextSibling);
    }

    // 5. Initialize Rows
    initRows(builderRowsContainer);

    // 6. Initialize Prompt Logic
    const createPromptBtn = document.getElementById('create-prompt-btn');
    const promptOutput = document.getElementById('prompt-output');
    const copyBtn = document.getElementById('copy-btn');
    const languageSelect = document.getElementById('language-select');

    setupPromptGeneration(createPromptBtn, promptOutput, builderRowsContainer, copyBtn, languageSelect);
    setupCopyButton(copyBtn, promptOutput);
});
