// Event Listeners
import { DOM } from './dom.js';
import { generatePrompt } from './prompt-controller.js';

export function initEvents() {
    const createBtn = DOM.createBtn();
    const copyBtn = DOM.copyBtn();

    if (createBtn) {
        createBtn.addEventListener('click', (e) => {
            e.preventDefault();
            generatePrompt();
        });
    }

    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const finalPrompt = DOM.finalPrompt();
            if (finalPrompt) {
                navigator.clipboard.writeText(finalPrompt.textContent).then(() => {
                    const originalText = copyBtn.textContent;
                    copyBtn.textContent = 'Copied!';
                    setTimeout(() => copyBtn.textContent = originalText, 2000);
                });
            }
        });
    }
}
