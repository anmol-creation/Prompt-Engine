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

        if (level >= fromLevel + 1) {
            el.classList.add('hidden');
            setDropdownValue(el, "");
        }
    });
}

function getDropdownElementForLevel(level) {
    if (level === 1) return DOM.subCategory1();
    if (level === 2) return DOM.subCategory2();
    if (level === 3) return DOM.subCategory3();
    return null;
}

function updateFixStackUI() {
    const container = document.getElementById('simple-fix-stack-container');
    if (!container) return;

    const stack = State.getFixStack();
    if (stack.length === 0) {
        container.innerHTML = '';
        container.classList.add('hidden');
        return;
    }

    container.classList.remove('hidden');
    container.innerHTML = stack.map(item => `
        <div class="fix-stack-item">
            <span class="fix-stack-check">✔</span>
            <span>${item.category} (${item.option})</span>
        </div>
    `).join('');
}

// Helper to resolve prompt (Copied/Adapted from logic in prompt-controller to avoid circular deps if possible, or just reimplement simple traversal)
function resolvePromptForLeaf(leafNode, inputValue, lastSelectionValue) {
    let promptText = "";
    if (typeof leafNode === 'string') {
        promptText = leafNode;
    } else if (leafNode && typeof leafNode === 'object') {
        if (leafNode.type === 'static') {
            promptText = leafNode.prompt;
        } else if (leafNode.type === 'input') {
             // Shouldn't happen in dropdown selection context usually, but for completeness
        } else if (leafNode.type === 'option' && leafNode.enableType) {
             // If it's an option that enables type (like "Type" in Replace BG), we need input value.
             // But here we are just adding to stack.
             // If user selected "Type", `handleDynamicInputs` was called.
             // The prompt generation happens later when "Create Prompt" is clicked.
             // Wait! The user clicks "Create Prompt" at the end.
             // But we need to store the "intent" in the stack.

             // If the node requires input, we can't generate the full prompt yet.
             // But `generatePrompt` iterates the stack.
             // So the stack should store the `leafNode` and `inputValue` (if any).

             // HOWEVER, my `generatePrompt` implementation assumes `item.prompt` is pre-calculated string.
             // If I change it to use `item.leafNode` and `item.inputValue`, it's more robust.
             // But `leafNode` object ref is fine.

             // Let's change strategy:
             // Store `category` (Fix Background), `option` (Add Blur), `leafNode` (ref), `inputValue` (if any).
             // And let `generatePrompt` do the work.
             return null;
        } else if (leafNode.customGenerator && lastSelectionValue) {
             promptText = leafNode.customGenerator(lastSelectionValue);
        }
    }
    return promptText;
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

                const plusBtn = document.getElementById('simple-fix-plus-btn');
                if (plusBtn) plusBtn.classList.add('hidden');

                handleLevelSelection(nextLevel, val);
                updateVisualGuide();
            }, "Select Option", dropdownConfig);

             setTimeout(() => {
                const trigger = dropdownEl.querySelector('.dropdown-trigger');
                if (trigger) trigger.click();
            }, 100);
        }
    } else {
        // It's a leaf node or end of chain
        handleDynamicInputs(currentData);
        checkFanMomentVisibility(State.selectedCategory, State.getAllSelections());

        if (State.selectedCategory === "Fix Image") {
            const selections = State.getAllSelections();
            if (selections.length >= 2) {
                const fixCategory = selections[1];
                const fixOption = selections[selections.length - 1];

                // Pre-calculate prompt or store data needed
                // For "Fix Image", mostly static prompts or generators.
                // If it requires input (like "Type" -> input), we can't capture prompt yet.
                // But `handleDynamicInputs` shows the input.
                // The user types in the input.
                // The Stack UI shows "Fix Background (Type)".
                // When "Create Prompt" is clicked, we need the input value.

                // Problem: If user adds multiple fixes that require input, we only have ONE input field in DOM.
                // `simple-text-input`.
                // If I add Fix 1 (needs input), type "A".
                // Then click "+".
                // Add Fix 2 (needs input), type "B".
                // The DOM input is overwritten or reused.
                // Fix 1's input "A" is lost unless saved.

                // Does "Fix Image" have multiple input-requiring fields?
                // Fix Background -> Replace Background -> Type (Needs Input)
                // Fix Background -> Replace Background -> Custom Images (Removed)
                // Remove Distractions (Static)
                // Improve Quality (Static)
                // Fix Face (Static)
                // Fix Lighting (Static)

                // Only "Replace Background -> Type" needs input.
                // And "Custom Images" is removed.

                // So at most ONE fix in the stack will need input?
                // Yes, because "Fix Background" can only be added once.
                // And other categories don't seem to have inputs in "Fix Image" brain map.

                // So it's safe to use the single DOM input for that one case.
                // BUT, if I click "+", I clear the dynamic input UI.
                // If I click "+" and add "Improve Quality" (static).
                // The input field for "Fix Background" is hidden.
                // But the value?
                // We should save the value into the stack item if applicable.

                // However, "Type" option in Replace BG has `enableType: true`.
                // The INPUT is shown when "Type" is selected.
                // The user types.
                // THEN acts.
                // If they click "+", we should capture the input value then.

                // Let's modify the "+" click handler in `events.js` to capture input value if present before resetting.
                // AND/OR capture it here?
                // Here we just selected the option. The input is empty.

                // So, we add to stack here.
                // If it needs input, we flag it.

                const fixObj = {
                    category: fixCategory,
                    option: fixOption,
                    leafNode: currentData,
                    inputValue: null // Will be populated if needed
                };

                // If this fix REPLACED an existing entry for this category (not possible via logic, but safe check)
                // actually we check `isFixCategoryAdded` in dropdown init.

                // Wait, if I change selection within same dropdown (e.g. from Add Blur to Remove BG),
                // I should update the stack item for "Fix Background", not add a duplicate.
                // `State.addFixToStack` prevents duplicates of category.
                // But if I change option, I want to UPDATE it.

                // Update State.js to allow upsert/update.
                State.updateFixStack(fixObj);
                updateFixStackUI();

                const plusBtn = document.getElementById('simple-fix-plus-btn');
                if (plusBtn) plusBtn.classList.remove('hidden');
            }
        }
    }

    updateVisualGuide();
}
