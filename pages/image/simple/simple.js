// Entry point for Simple Mode logic
import { initTheme } from '../../../assets/js/utils.js';

export function initSimpleMode() {
    console.log("Initializing Simple Mode");

    const outputArea = document.querySelector('.simple-output-area');
    const promptOutput = document.getElementById('simple-prompt-output');
    const copyBtn = document.getElementById('simple-copy-btn');
    const buttons = document.querySelectorAll('.simple-action-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.dataset.action;
            const category = btn.closest('.simple-category-card').dataset.category;

            // Show Output Area
            if (outputArea) outputArea.classList.remove('hidden');

            // Placeholder Logic (No AI yet as per instructions)
            if (promptOutput) {
                promptOutput.textContent = `[Simple Mode] Selected: ${category} -> ${action}`;
            }
        });
    });

    if (copyBtn && promptOutput) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(promptOutput.textContent).then(() => {
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                setTimeout(() => copyBtn.textContent = originalText, 2000);
            });
        });
    }
}
