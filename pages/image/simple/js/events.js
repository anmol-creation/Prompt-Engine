// Event Listeners
import { DOM } from './dom.js';
import { generatePrompt } from './prompt-controller.js';
import { State } from './state.js';
import { setDropdownValue } from '../../shared/dropdown.js';
import { getInputValue, renderSentenceBuilder } from './inputs.js';
import { handleLevelSelection, clearSubDropdowns, refreshMainDropdown } from './dropdown-manager.js';
import { resetDynamicInputs } from './inputs.js';

export function initEvents() {
    const createBtn = DOM.createBtn();
    const copyBtn = DOM.copyBtn();

    // Delegation for Sentence Builder Actions (Delete x and Add +)
    const builderRow = document.querySelector('.simple-builder-row');
    if (builderRow) {
        builderRow.addEventListener('click', (e) => {
            const target = e.target;

            // Handle Delete [x]
            if (target.classList.contains('delete-btn')) {
                const stackIndex = target.getAttribute('data-stack-index');
                const level = target.getAttribute('data-level');

                if (stackIndex !== null && stackIndex !== undefined) {
                    // Remove from stack
                    State.removeFromStackByIndex(parseInt(stackIndex));

                    // Refresh Main Dropdown logic (because stack changed)
                    refreshMainDropdown();

                    // Re-render
                    renderSentenceBuilder();
                    if (State.getFixStack().length === 0 && !State.getSelection(0)) {
                         handleLevelSelection(0, null); // Reset main
                    }
                } else if (level !== null) {
                    // Reset selection at this level
                    const lvl = parseInt(level);
                    State.setSelection(lvl, null);

                    // Clear deeper selections

                    const parentLevel = lvl - 1;
                    const parentValue = (parentLevel >= 0) ? State.getSelection(parentLevel) : null;

                    if (lvl === 0) {
                        // Reset Main - Handle UI Reset
                         State.setCategory(null);
                         State.reset();

                         // Clear Dropdowns Manually
                         const mainEl = DOM.mainCategory();
                         setDropdownValue(mainEl, "");

                         document.getElementById('simple-main-category').classList.remove('hidden');
                         document.getElementById('simple-main-category').classList.remove('hidden-by-sentence');

                         clearSubDropdowns(0);
                         refreshMainDropdown();
                    } else {
                        // Level > 0
                        // When we revert to a previous level, we must hide deeper levels
                        clearSubDropdowns(parentLevel + 1);
                        handleLevelSelection(parentLevel, parentValue);
                    }

                    renderSentenceBuilder();
                }
            }

            // Handle Add [+]
            if (target.classList.contains('add-btn')) {
                const level = parseInt(target.getAttribute('data-level'));

                if (level === 0) {
                     // Main Category Stacking (e.g. Fix Image -> Add Customization)
                     State.setCategory(null);
                     // Clear lower levels
                     clearSubDropdowns(0);
                     // Refresh Options based on stack
                     refreshMainDropdown();

                     // Reset UI to show Main Dropdown
                     // We need to ensure the dropdown is visible, which refreshMainDropdown handles?
                     // refreshMainDropdown calls setupMainDropdown which calls initDropdown.
                     // It ensures visibility.

                     // However, we need to ensure the dropdown value is cleared visually
                     const mainEl = DOM.mainCategory();
                     setDropdownValue(mainEl, "");

                     renderSentenceBuilder();

                } else if (State.selectedCategory === "Fix Image") {
                     // L1+ Stacking
                     captureCurrentInputToStack();
                     State.setSelection(1, null);
                     clearSubDropdowns(1);

                     refreshMainDropdown(); // Stack changed
                     handleLevelSelection(0, State.selectedCategory);
                     renderSentenceBuilder();
                } else if (State.selectedCategory === "Customization") {
                     // Customization Stacking
                     captureCurrentInputToStack();
                     State.setSelection(2, null);
                     clearSubDropdowns(2);

                     refreshMainDropdown(); // Stack changed
                     handleLevelSelection(1, State.getSelection(1));
                     renderSentenceBuilder();
                }
            }
        });
    }

    if (createBtn) {
        createBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (State.selectedCategory === "Fix Image" || State.selectedCategory === "Customization") {
                captureCurrentInputToStack();
            }
            renderSentenceBuilder();
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

function captureCurrentInputToStack() {
    const selections = State.getAllSelections();
    if (!selections[1]) return; // Nothing to capture

    let item = {
        level0: selections[0],
        level1: selections[1],
        level2: selections[2],
        level3: selections[3],
        inputValue: getInputValue()
    };

    if (selections[0] === "Fix Image") {
        item.category = selections[1];
        item.option = selections[2] || selections[1];
    } else {
        item.category = selections[1];
        item.option = selections[2];
    }

    State.addToStack(item);
}
