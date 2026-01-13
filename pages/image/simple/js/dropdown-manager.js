// Dropdown Manager (Dynamic Depth)
import { DOM } from './dom.js';
import { State } from './state.js';
import { initDropdown, getDropdownValue, setDropdownValue } from '../../shared/dropdown.js';
import { simpleBrainMap } from '../brain/index.js';
import { updateVisualGuide } from './visual-guide-bridge.js';
import { resetDynamicInputs, handleDynamicInputs, getInputValue } from './inputs.js';
import { resetFanMomentOptions, checkFanMomentVisibility } from './fan-options.js';
import { checkVehicleVisibility, resetVehicleOptions } from './vehicle-options.js';
import { resetHairOptions, checkHairOptionsVisibility } from './hair-options.js';
import { resetMustacheOptions, checkMustacheOptionsVisibility } from './mustache-options.js';
import { checkBeardVisibility } from './beard-options.js';

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
        resetVehicleOptions();
        resetBeardOptions();

        // Do NOT clear Fix Stack on Main Category Change.
        // Users might want to add Fix Image changes, then switch to Customization.
        // State.fixImageStack = []; // REMOVED

        // Re-render the stack UI (just in case)
        updateStackUI();

        // If we have items in stack, we might need to hide/show plus btn?
        // Actually, plus button visibility is controlled by leaf node logic usually.
        // When switching main category, we are at Level 0.
        // Plus button should generally be hidden until a leaf is selected.
        const plusBtn = document.getElementById('simple-fix-plus-btn');
        if (plusBtn) plusBtn.classList.add('hidden');

        handleLevelSelection(0, category);
        clearPromptUI();
    }, "Select Category");
}

export function clearSubDropdowns(fromLevel = 0) {
    const all = DOM.getAllSubDropdowns();
    all.forEach(el => {
        let level = 1;
        if (el.id === 'simple-sub-category') level = 1;
        else if (el.id === 'simple-sub-category-2') level = 2;
        else if (el.id === 'simple-sub-category-3') level = 3;
        else if (el.id === 'simple-sub-category-4') level = 4;
        else if (el.id === 'simple-sub-category-5') level = 5;
        else if (el.id === 'simple-sub-category-6') level = 6;
        else if (el.id === 'simple-sub-category-7') level = 7;
        else if (el.id === 'simple-sub-category-8') level = 8;

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
    if (level === 5) return DOM.subCategory5();
    if (level === 6) return DOM.subCategory6();
    if (level === 7) return DOM.subCategory7();
    if (level === 8) return DOM.subCategory8();
    return null;
}

export function updateStackUI() {
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
        // For Customization, category/option might be confusing if just "Male (Eyes)".
        // Maybe "Male > Eyes (Black)" or "Customization > Male > Face > Eyes > Black".
        // item.category is usually the one level above option.
        // Let's stick to what we have: Category (Option)
        // For Fix Image: Fix Background (Add Blur).
        // For Customization: Eyes (Black).

        return `
        <div class="fix-stack-item">
            <span class="fix-stack-check">✔</span>
            <span>${item.category} (${item.option}${valueDisplay})</span>
            <span class="remove-fix-btn" data-category="${item.category}" data-option="${item.option}">❌</span>
        </div>
        `;
    }).join('');

    // Check Vehicle Options Visibility based on new Stack state
    checkVehicleVisibility();

    // Attach event listeners for remove buttons
    const removeBtns = container.querySelectorAll('.remove-fix-btn');
    removeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const categoryToRemove = e.target.getAttribute('data-category');
            const optionToRemove = e.target.getAttribute('data-option');

            if (categoryToRemove && optionToRemove) {
                State.removeFromStack(categoryToRemove, optionToRemove);

                // If stack becomes empty, reset UI state
                if (State.getStack().length === 0) {
                    const plusBtn = document.getElementById('simple-fix-plus-btn');
                    if (plusBtn) plusBtn.classList.add('hidden');

                    // Update UI to clear stack container (Hide it)
                    updateStackUI();

                    // Reset to Level 1
                    clearSubDropdowns(0);
                    resetDynamicInputs();
                    resetVehicleOptions();
                    // Re-trigger Level 0 to reset Level 1 options (enable all)
                    handleLevelSelection(0, State.selectedCategory);
                } else {
                    // Update UI (re-render stack)
                    updateStackUI();
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
        // --- EDGE CASE FIX: Hide Add button if we are not at a leaf node ---
        // If user navigated away from a leaf to a group, clear pending state.
        const addBtn = document.getElementById('simple-add-btn');
        if (addBtn) addBtn.classList.add('hidden');
        State.setPendingChange(null);
        // ------------------------------------------------------------------

        const nextLevel = level + 1;
        const dropdownEl = getDropdownElementForLevel(nextLevel);

        if (dropdownEl) {
            dropdownEl.classList.remove('hidden');
            let optionsKeys = Object.keys(currentData.options);

            // === UPDATED LOGIC: Map keys to Objects with Icons ===
            const options = optionsKeys.map(key => {
                const optData = currentData.options[key];
                // Check if this option node has an icon defined
                if (optData && optData.icon) {
                    return { label: key, value: key, icon: optData.icon };
                }
                // Fallback for string-only options
                return key;
            });

            const isFixImageLevel1 = (State.selectedCategory === "Fix Image" && level === 0);

            const disabledOptions = [];
            if (isFixImageLevel1) {
                const stack = State.getStack();
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

                // Since we are moving deeper, check visibility of optional sections that might need to be hidden/reset
                // (e.g. if we went back up and changed something)
                checkBeardVisibility();

                // Hide plus button when navigating deeper, UNLESS we already have a stack
                const plusBtn = document.getElementById('simple-fix-plus-btn');
                if (plusBtn) {
                   // Always hide + button when opening a new level dropdown (intermediate state)
                   // It will reappear when a leaf node is selected in handleLevelSelection logic below.
                   plusBtn.classList.add('hidden');
                }

                handleLevelSelection(nextLevel, val);
                updateVisualGuide();
            }, "Select Option", dropdownConfig);
        }
    } else {
        // It's a leaf node or end of chain
        handleDynamicInputs(currentData);
        checkFanMomentVisibility(State.selectedCategory, State.getAllSelections());
        checkBeardVisibility();

        // Leaf Node Selected: Prepare for adding to stack
        let stackCategory = null;
        let stackOption = null;
        const selections = State.getAllSelections();

        // Universal Stack Logic (Deep Nesting Support)
        if (level === 1) {
            stackCategory = selections[1];
            stackOption = selections[1];
        }

        if (level >= 1) {
             stackCategory = selections[level-1];
             stackOption = value;
        }

        if (stackCategory && stackOption) {
            const itemObj = {
                category: stackCategory,
                option: stackOption,
                leafNode: currentData,
                inputValue: null
            };

            // Fix: Check if we have vehicle options in the DOM/Module and attach them
            if (stackCategory === "Replace Background") {
                const pendingVehicleOpts = getVehicleOptionsValues();
                if (pendingVehicleOpts) {
                    itemObj.vehicleOptions = pendingVehicleOpts;
                }
            }

            // --- CHANGED BEHAVIOR: Do NOT add to stack immediately. ---
            // Set as pending and show Add button.
            State.setPendingChange(itemObj);

            // Show Add Button
            const addBtn = document.getElementById('simple-add-btn');
            if (addBtn) addBtn.classList.remove('hidden');

            // Hide the old Plus button if visible (it shouldn't be here yet, but just in case)
            const plusBtn = document.getElementById('simple-fix-plus-btn');
            if (plusBtn) plusBtn.classList.add('hidden');
        }
    }

    updateVisualGuide();
}
