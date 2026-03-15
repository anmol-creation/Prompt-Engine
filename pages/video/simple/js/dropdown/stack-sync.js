import { State } from '../state.js';
import { DOM } from '../dom.js';
import { Renderer } from './renderer.js';
import { resetDynamicInputs } from '../inputs.js';

export const StackSync = {
    updateUI() {
        const container = document.getElementById('simple-fix-stack-container');
        if (!container) return;

        const stack = State.getStack();
        if (stack.length === 0) {
            container.innerHTML = '';
            container.classList.add('hidden');
            return;
        }

        container.classList.remove('hidden');
        container.innerHTML = stack.map(item => {
            const valueDisplay = item.inputValue ? `: ${item.inputValue}` : '';
            return `
            <div class="fix-stack-item">
                <span class="fix-stack-check">✔</span>
                <span>${item.category} (${item.option}${valueDisplay})</span>
                <span class="remove-fix-btn" data-category="${item.category}" data-option="${item.option}">❌</span>
            </div>
            `;
        }).join('');

        this.attachRemoveListeners(container);
    },

    attachRemoveListeners(container) {
        const removeBtns = container.querySelectorAll('.remove-fix-btn');
        removeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const categoryToRemove = e.target.getAttribute('data-category');
                const optionToRemove = e.target.getAttribute('data-option');

                if (categoryToRemove && optionToRemove) {
                    State.removeFromStack(categoryToRemove, optionToRemove);

                    if (State.getStack().length === 0) {
                        Renderer.hidePlusButton();
                        this.updateUI(); // clear it

                        // Deep Reset
                        Renderer.clearSubDropdowns(0);
                        resetDynamicInputs();

                        // We need to re-trigger the main category selection logic to reset Level 1.
                        // But StackSync shouldn't depend on Orchestrator directly to avoid cycles.
                        // We can dispatch a custom event or just accept that Level 1 is cleared.
                        // In original logic: handleLevelSelection(0, State.selectedCategory);
                        // We will handle this in Index.js via a callback or event.
                        document.dispatchEvent(new CustomEvent('stack-emptied'));
                    } else {
                        this.updateUI();
                    }
                }
            });
        });
    }
};
