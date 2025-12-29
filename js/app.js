// Entry point
import { initTheme } from './ui/theme.js';
import { initModeSystem } from './ui/mode.js';
import { initRows, updateAllRowsForMode } from './ui/rows.js';
import { setupCopyButton } from './ui/helpers.js';
import { setupPromptGeneration } from './prompt/connector.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Theme
    initTheme();

    // 2. Page check (image page)
    const builderRowsContainer = document.getElementById('builder-rows');
    if (!builderRowsContainer) return;

    // 3. Initialize Mode System
    initModeSystem(updateAllRowsForMode);

    // 4. Initialize Rows
    initRows(builderRowsContainer);

    // 5. Initialize Prompt Logic
    const createPromptBtn = document.getElementById('create-prompt-btn');
    const promptOutput = document.getElementById('prompt-output');
    const copyBtn = document.getElementById('copy-btn');
    const languageSelect = document.getElementById('language-select');

    setupPromptGeneration(createPromptBtn, promptOutput, builderRowsContainer, copyBtn, languageSelect);
    setupCopyButton(copyBtn, promptOutput);
});
