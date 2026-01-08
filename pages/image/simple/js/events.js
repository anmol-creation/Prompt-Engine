// Event Listeners
import { DOM } from './dom.js';
import { generatePrompt } from './prompt-controller.js';
import { State } from './state.js';
import { setDropdownValue } from '../../shared/dropdown.js';
import { getInputValue } from './inputs.js';
import { handleLevelSelection } from './dropdown-manager.js';
import { resetDynamicInputs } from './inputs.js';

export function initEvents() {
    const createBtn = DOM.createBtn();
    const copyBtn = DOM.copyBtn();
    const fixPlusBtn = document.getElementById('simple-fix-plus-btn');

    if (createBtn) {
        createBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Before generating, if we are in Fix Image mode, capture current input value into stack
            if (State.selectedCategory === "Fix Image") {
                captureCurrentInputToStack();
            }
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

    if (fixPlusBtn) {
        fixPlusBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Capture any input value from the CURRENT selection before we reset UI
            captureCurrentInputToStack();

            // Reset dynamic inputs to hide old fields
            resetDynamicInputs();

            // Clear current selections in State for levels > 1 to ensure clean state
            // But we keep Level 0 (Main Category)
            State.setSelection(1, null);
            State.setSelection(2, null);
            State.setSelection(3, null);

            // Hide the plus button until new selection completes
            fixPlusBtn.classList.add('hidden');

            // Call handleLevelSelection for Level 0 ("Fix Image")
            // This re-initializes Level 1 (Sub Category 1), calculating disabled options based on the stack.
            handleLevelSelection(0, State.selectedCategory);

            // Note: handleLevelSelection sets up the dropdown but doesn't necessarily open it.
            // It has logic inside:
            /*
             setTimeout(() => {
                const trigger = dropdownEl.querySelector('.dropdown-trigger');
                if (trigger) trigger.click();
            }, 100);
            */
            // So it should auto-open.
        });
    }
}

function captureCurrentInputToStack() {
    const stack = State.getFixStack();
    // We want to update the MOST RECENTLY ADDED/MODIFIED item in the stack,
    // which corresponds to the current visible selection logic.

    // We can match based on State.getSelection(1) (Current Fix Category).
    const currentFixCat = State.getSelection(1);
    if (!currentFixCat) return;

    const stackItem = stack.find(f => f.category === currentFixCat);
    if (stackItem) {
        const val = getInputValue();
        if (val) {
            stackItem.inputValue = val;
        }
    }
}
