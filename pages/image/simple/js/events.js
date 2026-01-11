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
            // If pivot is 1, we clear 1 (wait, clearSubDropdowns(1) hides Level 2+).
            // We want to reset the selection at pivotLevel?
            // "Fix Image" (L0). "Fix Background" (L1).
            // We want L1 to become "Select Option".
            // So we clear selection at L1.
            // "Customization" (L0). "Male" (L1). "Face" (L2).
            // We want L2 to become "Select Option".
            // So we clear selection at L2.

            // Loop to clear selections
            // We want to clear State.selections[pivotLevel] and onwards.
            // State.setSelection handles clearing deeper levels automatically if we set pivotLevel to null.
            State.setSelection(pivotLevel, null);

            // Re-trigger handleLevelSelection at pivotLevel - 1 (The parent of the one we want to reset).
            // For Fix Image: pivotLevel=1. Parent=0. handleLevelSelection(0).
            // For Customization: pivotLevel=2. Parent=1. handleLevelSelection(1).

            handleLevelSelection(pivotLevel - 1, State.getSelection(pivotLevel - 1));
        });
    }
}

function captureCurrentInputToStack() {
    const stack = State.getStack();

    // We need to find the item corresponding to current selection.
    // In dropdown-manager, we used specific logic to determine category/option.
    // We should replicate that or genericize it.
    // For Fix Image, Category is at Level 1.
    // For Customization, Category is at Level - 1 (last level minus 1).

    // Simpler approach: Look at the last added item in stack?
    // If the user hasn't navigated away, the last item in stack is likely the current one.
    // But uniqueness logic means it might be anywhere.

    // Let's use the same logic as dropdown-manager to identify the 'key'.
    // If we can't easily share that logic, we might need to export a helper or check State.

    // Fallback: Check if there's an active input.
    const val = getInputValue();
    if (!val) return; // No input to capture

    // If input exists, find the stack item that matches current context.
    // We can try to match the last selection?
    // The "Option" name is usually the leaf selection.

    const lastSel = State.getLastSelection();
    if (!lastSel) return;

    // Find item in stack where option === lastSel
    // This assumes option names are unique enough or we prioritize the latest one.
    // Or we use the category/option logic again.

    // Replicating simplified logic:
    let stackCategory = null;
    let stackOption = null;
    const selections = State.getAllSelections();

    if (State.selectedCategory === "Fix Image") {
        if (selections.length >= 3) {
                stackCategory = selections[1];
                stackOption = selections[2];
        } else if (selections.length === 2) {
                stackCategory = selections[1];
                stackOption = selections[1];
        }
    } else if (State.selectedCategory === "Customization") {
        if (selections.length >= 2) {
             const level = selections.length - 1; // last index
             stackCategory = selections[level-1];
             stackOption = selections[level];
        }
    }

    if (stackCategory && stackOption) {
        const stackItem = stack.find(f => f.category === stackCategory && f.option === stackOption);
        if (stackItem) {
            stackItem.inputValue = val;
        }
    }
}
