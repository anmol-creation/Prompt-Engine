// Event Listeners
import { DOM } from './dom.js';
import { generatePrompt } from './prompt-controller.js';
import { State } from './state.js';
import { setDropdownValue } from '../../shared/dropdown.js';
import { getInputValue } from './inputs.js';
import { handleLevelSelection, updateStackUI, clearSubDropdowns } from './dropdown-manager.js';
import { resetDynamicInputs } from './inputs.js';

export function initEvents() {
    const createBtn = DOM.createBtn();
    const copyBtn = DOM.copyBtn();
    const fixPlusBtn = document.getElementById('simple-fix-plus-btn');

    if (createBtn) {
        createBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Capture current input value into stack for any category supporting generic stack
            if (State.selectedCategory === "Fix Image" || State.selectedCategory === "Customization") {
                captureCurrentInputToStack();
                updateStackUI(); // Ensure UI reflects captured input
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
            updateStackUI(); // Reflect captured input in stack before hiding input field

            // Reset dynamic inputs to hide old fields
            resetDynamicInputs();

            // Smart Reset:
            // For "Fix Image": Keep Main (L0), Reset Sub 1 (L1).
            // For "Customization": Keep Main (L0) and Sub 1 (L1, e.g. Male), Reset Sub 2 (L2, e.g. Face).
            // Why? Because "Customization -> Male -> Face -> Eyes". User probably wants to add more to "Male".
            // If we reset L1 (Male), they have to pick Male again.
            // So we define "Pivot Level" based on Category.

            let pivotLevel = 1; // Default (reset everything after Level 0)
            if (State.selectedCategory === "Customization") {
                pivotLevel = 2; // Keep Level 0 and Level 1. Reset Level 2+.
            }

            // Hide levels AFTER the pivot level
            clearSubDropdowns(pivotLevel);

            // Clear selections in State after pivot level
            State.setSelection(pivotLevel, null);

            // Re-trigger handleLevelSelection at pivotLevel - 1
            handleLevelSelection(pivotLevel - 1, State.getSelection(pivotLevel - 1));
        });
    }
}

function captureCurrentInputToStack() {
    const stack = State.getStack();
    const val = getInputValue();

    // If no input, we don't strictly need to do anything, unless we want to clear previous input?
    // But usually input is additive.
    // If leaf node expects input but user didn't type, prompt logic handles it (null input).
    // But if user typed, we MUST capture it.

    if (!val) return;

    const selections = State.getAllSelections();

    // Generic Logic to match dropdown-manager.js:
    // stackCategory = selections[lastIndex - 1]
    // stackOption = selections[lastIndex]

    if (selections.length >= 2) {
        const lastIndex = selections.length - 1;
        const stackCategory = selections[lastIndex - 1];
        const stackOption = selections[lastIndex];

        if (stackCategory && stackOption) {
            const stackItem = stack.find(f => f.category === stackCategory && f.option === stackOption);
            if (stackItem) {
                stackItem.inputValue = val;
            }
        }
    }
}
