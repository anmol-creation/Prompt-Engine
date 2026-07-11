import { State } from '../state.js';
import { DOM } from '../dom.js';
import { Renderer } from './renderer.js';
import { resetDynamicInputs } from '../inputs.js';
import { handleLevelSelection } from './index.js';

export const StackSync = {
    updateUI() {
        const stackContainer = document.getElementById('simple-fix-stack-container');
        if (!stackContainer) return;

        const stack = State.getStack();
        stackContainer.innerHTML = '';

        if (stack.length === 0) {
            stackContainer.classList.add('hidden');
            const event = new CustomEvent('stack-emptied');
            document.dispatchEvent(event);
            return;
        }

        stackContainer.classList.remove('hidden');

        stack.forEach((item) => {
            const el = document.createElement('div');
            el.className = 'fix-stack-item';

            let labelHtml = `<strong>${item.category}</strong>`;

            let optionText = item.option;
            if (item.inputValue) {
               optionText += ` (${item.inputValue})`;
            }

            labelHtml += `: ${optionText}`;

            el.innerHTML = `
                <span class="fix-stack-label">${labelHtml}</span>
                <button class="fix-stack-remove" aria-label="Remove item">×</button>
            `;

            el.querySelector('.fix-stack-remove').addEventListener('click', () => {
                State.removeFromStack(item.category, item.option);
                this.updateUI();

                Renderer.clearSubDropdowns(1);
                resetDynamicInputs();
                Renderer.hidePlusButton();
                Renderer.hideAddButton();
                State.setSelection(1, null);

                const currentL0 = State.getSelection(0);
                if (currentL0) {
                    handleLevelSelection(0, currentL0);
                }

                const event = new CustomEvent('stack-item-removed', { detail: item });
                document.dispatchEvent(event);
            });

            stackContainer.appendChild(el);
        });
    }
};
