// Prompt Controller (UI Only)
import { DOM } from './dom.js';
import { updateVisualGuide } from './visual-guide-bridge.js';
import { PromptEngine } from '../../shared/prompt/index.js';

export function generatePrompt() {
    const result = PromptEngine.generate('simple');

    const { text, metadata } = result;

    // Handle UI Alerts (Legacy Logic Preservation)
    if (!text || text.trim() === "" || text === "\n\nPreserve the subject's identity and image quality.") { // Check if only safety prompt exists
        if (metadata.isFixImageOnly && !metadata.hasStack) {
            alert("Please select an option.");
            return;
        }
        if (!metadata.hasStack && !metadata.isValidSelection) {
            alert("Please select or type the final option.");
            return;
        }
    }

    // Update DOM
    const finalPromptEl = DOM.finalPrompt();
    const copyBtn = DOM.copyBtn();

    if (finalPromptEl) finalPromptEl.textContent = text;
    if (copyBtn) copyBtn.classList.remove('hidden');

    updateVisualGuide();
}
