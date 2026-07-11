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
    const saveBtn = DOM.saveBtn();
    const fixPlusBtn = document.getElementById('simple-fix-plus-btn');
    const addBtn = document.getElementById('simple-add-btn');

    if (addBtn) {
        addBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const pendingItem = State.getPendingChange();
            if (pendingItem) {
                const currentInputVal = getInputValue();
                if (currentInputVal) {
                    pendingItem.inputValue = currentInputVal;
                }

                State.addToStack(pendingItem);
                updateStackUI();
                State.setPendingChange(null);
                addBtn.classList.add('hidden');
                resetUIForNextSelection();
            }
        });
    }

    if (createBtn) {
        createBtn.addEventListener('click', (e) => {
            e.preventDefault();
            captureCurrentInputToStack();
            updateStackUI();
            generatePrompt();
            if (saveBtn) saveBtn.classList.remove('hidden');
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

    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            console.log("Save disabled for now");
        });
    }

    if (fixPlusBtn) {
        fixPlusBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            resetUIForNextSelection();
        });
    }
}

function resetUIForNextSelection() {
    resetDynamicInputs();
    let pivotLevel = 1;
    clearSubDropdowns(pivotLevel);
    State.setSelection(pivotLevel, null);
    handleLevelSelection(pivotLevel - 1, State.getSelection(pivotLevel - 1));
}

function captureCurrentInputToStack() {
    const stack = State.getStack();
    const val = getInputValue();

    if (!val) return;

    const selections = State.getAllSelections();

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
