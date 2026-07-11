import { DOM } from './dom.js';

export function generatePrompt() {
    const finalPromptEl = DOM.finalPrompt();
    const copyBtn = DOM.copyBtn();

    if (finalPromptEl) finalPromptEl.textContent = "Prompt generation is not implemented yet for Web Development mode.";
    if (copyBtn) copyBtn.classList.remove('hidden');
}
