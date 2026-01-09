// Dropdown Manager (Dynamic Depth)
import { DOM } from './dom.js';
import { State } from './state.js';
import { initDropdown, getDropdownValue, setDropdownValue } from '../../shared/dropdown.js';
import { simpleBrainMap } from '../brain/index.js';
import { updateVisualGuide } from './visual-guide-bridge.js';
import { resetDynamicInputs, handleDynamicInputs, getInputValue } from './inputs.js';
import { resetFanMomentOptions, checkFanMomentVisibility } from './fan-options.js';

export function initMainCategory() {
    const mainDropdown = DOM.mainCategory();
    if (!mainDropdown) return;

    const categories = Object.keys(simpleBrainMap);
    initDropdown(mainDropdown, categories, (category) => {
        State.setCategory(category);
        State.setSelection(0, category); // Ensure Level 0 is tracked in selections map
        clearSubDropdowns();
        resetDynamicInputs();
        resetFanMomentOptions();

        // Clear Fix Stack on Main Category Change
        State.fixImageStack = [];
        updateFixStackUI();
        const plusBtn = document.getElementById('simple-fix-plus-btn');
        if (plusBtn) plusBtn.classList.add('hidden');

        handleLevelSelection(0, category);
        clearPromptUI();
    }, "Select Category");
}

function clearSubDropdowns(fromLevel = 0) {
    const all = DOM.getAllSubDropdowns();
    all.forEach(el => {
        let level = 1;
        if (el.id === 'simple-sub-category') level = 1;
        else if (el.id === 'simple-sub-category-2') level = 2;
        else if (el.id === 'simple-sub-category-3') level = 3;
        else if (el.id === 'simple-sub-category-4') level = 4;

        if (level >= fromLevel + 1) {
            el.classList.add('hidden');
            setDropdownValue(el, "");
        }
    });
}

function clearPromptUI() {
    const finalPrompt = DOM.finalPrompt();
    if (finalPrompt) finalPrompt.textContent = "Your generated prompt will appear here...";

    const copyBtn = DOM.copyBtn();
    if (copyBtn) copyBtn.classList.add('hidden');
}

function getDropdownElementForLevel(level) {
    if (level === 1) return DOM.subCategory1();
    if (level === 2) return DOM.subCategory2();
    if (level === 3) return DOM.subCategory3();
    if (level === 4) return DOM.subCategory4();
    return null;
}

export function updateFixStackUI() {
    const container = document.getElementById('simple-fix-stack-container');
    if (!container) return;

    const stack = State.getFixStack();
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

    // Attach event listeners for remove buttons
    const removeBtns = container.querySelectorAll('.remove-fix-btn');
    removeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const categoryToRemove = e.target.getAttribute('data-category');
            const optionToRemove = e.target.getAttribute('data-option');

            if (categoryToRemove && optionToRemove) {
                State.removeFixFromStack(categoryToRemove, optionToRemove);

                // If stack becomes empty, reset UI state
                if (State.getFixStack().length === 0) {
                    const plusBtn = document.getElementById('simple-fix-plus-btn');
                    if (plusBtn) plusBtn.classList.add('hidden');

                    // Update UI to clear stack container (Hide it)
                    updateFixStackUI();

                    // Reset to Level 1
                    clearSubDropdowns(0);
                    resetDynamicInputs();
                    // Re-trigger Level 0 to reset Level 1 options (enable all)
                    handleLevelSelection(0, State.selectedCategory);
                } else {
                    // Update UI (re-render stack)
                    updateFixStackUI();

                    // If the user is currently looking at Level 1 options (adding another fix),
                    // we should update the disabled options in that dropdown.
                    // We can do this by re-triggering the current level selection if we are adding.
                    // However, simplified approach: just ensure stack is updated.
                    // If the dropdown is open, it won't dynamically update until re-opened.
                    // But clicking "+" re-opens it. So next time "+" is clicked, it will be correct.
                    // If we want to support "Allow the removed fix to be selectable again via +",
                    // since "+" re-renders the dropdown, we are good.
                }
            }
        });
    });
}

export function handleLevelSelection(level, value) {
    // 1. Resolve the current data node based on the hierarchy selections up to 'level'
    let currentData = simpleBrainMap[State.selectedCategory];

    for (let i = 1; i <= level; i++) {
        const sel = State.getSelection(i);
        if (currentData && currentData.options && currentData.options[sel]) {
            currentData = currentData.options[sel];
        } else {
             currentData = null;
        }
    }

    // 2. Determine what to show next
    if (currentData && currentData.type === 'group') {
        const nextLevel = level + 1;
        const dropdownEl = getDropdownElementForLevel(nextLevel);

        if (dropdownEl) {
            dropdownEl.classList.remove('hidden');
            let options = Object.keys(currentData.options);

            const isFixImageLevel1 = (State.selectedCategory === "Fix Image" && level === 0);

            const disabledOptions = [];
            if (isFixImageLevel1) {
                const stack = State.getFixStack();
                stack.forEach(item => {
                    disabledOptions.push(item.category);
                });
            }

            const dropdownConfig = {
                enableSearch: currentData.enableType || false,
                searchPlaceholder: currentData.searchPlaceholder || "Type option...",
                disabledOptions: disabledOptions
            };

            initDropdown(dropdownEl, options, (val) => {
                State.setSelection(nextLevel, val);
                clearSubDropdowns(nextLevel);
                resetDynamicInputs();
                resetFanMomentOptions();
                clearPromptUI();

                // Hide plus button when navigating deeper, UNLESS we already have a stack
                const plusBtn = document.getElementById('simple-fix-plus-btn');
                if (plusBtn) {
                   if (State.getFixStack().length === 0) {
                        plusBtn.classList.add('hidden');
                   } else {
                        plusBtn.classList.add('hidden');
                   }
                }

                handleLevelSelection(nextLevel, val);
                updateVisualGuide();
            }, "Select Option", dropdownConfig);
        }
    } else {
        // It's a leaf node or end of chain
        handleDynamicInputs(currentData);
        checkFanMomentVisibility(State.selectedCategory, State.getAllSelections());

        if (State.selectedCategory === "Fix Image") {
            const selections = State.getAllSelections();
            // Level 0: Fix Image, Level 1: SubCat, Level 2: Option (Leaf)

            let fixCategory = null;
            let fixOption = null;

            if (selections.length >= 3) {
                 // ["Fix Image", "Fix Background", "Add Blur"]
                 // selections[1] is Fix Background (Level 1)
                 fixCategory = selections[1];
                 fixOption = selections[2];
            } else if (selections.length === 2) {
                 // ["Fix Image", "Remove Distractions"]
                 // selections[1] is Remove Distractions (Level 1)
                 fixCategory = selections[1];
                 fixOption = selections[1];
            }

            if (fixCategory) {
                const fixObj = {
                    category: fixCategory,
                    option: fixOption,
                    leafNode: currentData,
                    inputValue: null // Will be populated if needed
                };

                State.updateFixStack(fixObj);
                updateFixStackUI();

                const plusBtn = document.getElementById('simple-fix-plus-btn');
                if (plusBtn) plusBtn.classList.remove('hidden');
            }
        }
    }

    updateVisualGuide();
}
