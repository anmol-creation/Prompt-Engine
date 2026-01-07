// Dropdown Manager (Dynamic Depth)
import { DOM } from './dom.js';
import { State } from './state.js';
import { initDropdown, getDropdownValue, setDropdownValue } from '../../shared/dropdown.js';
import { simpleBrainMap } from '../brain/index.js';
import { updateVisualGuide } from './visual-guide-bridge.js';
import { resetDynamicInputs, handleDynamicInputs } from './inputs.js';
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

export function handleLevelSelection(level, value) {
    // 1. Resolve the current data node based on the hierarchy selections up to 'level'
    let currentData = simpleBrainMap[State.selectedCategory];

    for (let i = 1; i <= level; i++) {
        const sel = State.getSelection(i);
        if (currentData && currentData.options && currentData.options[sel]) {
            currentData = currentData.options[sel];
        } else {
             // Fallback: If we are at a group that expects input but has options structure
             // This matches the issue where 'enableType' on a group might confuse logic if not strict.
             // But we fixed data.
             currentData = null;
        }
    }

    // 2. Determine what to show next
    if (currentData && currentData.type === 'group') {
        const nextLevel = level + 1;
        const dropdownEl = getDropdownElementForLevel(nextLevel);

        if (dropdownEl) {
            dropdownEl.classList.remove('hidden');
            const options = Object.keys(currentData.options);

            const dropdownConfig = {
                enableSearch: currentData.enableType || false,
                searchPlaceholder: currentData.searchPlaceholder || "Type option..." // searchPlaceholder might be undefined now, that's fine
            };

            initDropdown(dropdownEl, options, (val) => {
                State.setSelection(nextLevel, val);

                // Clear subsequent levels
                clearSubDropdowns(nextLevel);
                resetDynamicInputs();
                resetFanMomentOptions();
                clearPromptUI();

                // Recursively handle the next selection
                handleLevelSelection(nextLevel, val);

                updateVisualGuide();
            }, "Select Option", dropdownConfig);

             // Auto-open logic (optional, preserved from original)
             setTimeout(() => {
                const trigger = dropdownEl.querySelector('.dropdown-trigger');
                if (trigger) trigger.click();
            }, 100);
        }
    } else {
        // It's a leaf node (static, option) or end of chain
        handleDynamicInputs(currentData);
        checkFanMomentVisibility(State.selectedCategory, State.getAllSelections());
    }

    updateVisualGuide();
}

function clearPromptUI() {
    const finalPrompt = DOM.finalPrompt();
    const copyBtn = DOM.copyBtn();
    const visualGuide = DOM.visualGuideContainer();

    if (finalPrompt) finalPrompt.textContent = "Your generated prompt will appear here...";
    if (copyBtn) copyBtn.classList.add('hidden');
    if (visualGuide) visualGuide.classList.add('hidden');
}
