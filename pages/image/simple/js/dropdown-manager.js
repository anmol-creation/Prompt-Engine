// Dropdown Manager (Dynamic Depth)
import { DOM } from './dom.js';
import { State } from './state.js';
import { initDropdown, getDropdownValue, setDropdownValue } from '../../shared/dropdown.js';
import { simpleBrainMap } from '../brain/index.js';
import { updateVisualGuide } from './visual-guide-bridge.js';
import { resetDynamicInputs, handleDynamicInputs, getInputValue, renderSentenceBuilder } from './inputs.js';
import { resetFanMomentOptions, checkFanMomentVisibility } from './fan-options.js';

export function initMainCategory() {
    const mainDropdown = DOM.mainCategory();
    if (!mainDropdown) return;

    const categories = Object.keys(simpleBrainMap);

    // Filter categories if we are in stacking mode?
    // Requirement: "Disable/Hide the category that is already selected (No duplicates)."
    // "Rule: Only Fix Image and Customization can coexist."
    // If we have "Fix Image" items in stack, we should only allow "Customization" (and maybe "Fix Image" if we allow re-selecting it for more fixes, which we do via internal stacking logic, but here we are talking about Main Category switching).

    // The previous implementation of Events.js resets the Main Category to allow selection.
    // If stack has Fix Image items, we should filter out "Fix Image" to prevent nesting logic issues?
    // Actually, "Fix Image" supports internal stacking. If I select "Fix Image" again, I start a new Fix path.
    // But the requirement says "Only Fix Image and Customization can coexist".
    // This implies I can't add "Creative Image".

    // Let's implement dynamic disabledOptions for Main Category.
    // But initDropdown is called once on load. We need to re-init it or update it?
    // The shared dropdown supports `updateOptions`? No, we call initDropdown again.

    // We can wrap the init logic in a function we call when resetting L0.

    setupMainDropdown(categories);
}

function setupMainDropdown(categories) {
    const mainDropdown = DOM.mainCategory();

    // Determine disabled options based on stack
    const stack = State.getFixStack();
    const disabledOptions = [];

    if (stack.length > 0) {
        // We have items.
        // Rule: Only Fix Image and Customization.
        // Disable everything else.
        categories.forEach(c => {
            if (c !== "Fix Image" && c !== "Customization") {
                disabledOptions.push(c);
            }
        });

        // Also, if "Fix Image" is in stack, do we disable it?
        // Requirement: "Disable/Hide the category that is already selected (No duplicates)."
        // If we treat "Fix Image" as the category, and we have items, it is "selected".
        // But we might want to add *another* fix.
        // However, "Fix Image" internal stacking allows adding fixes.
        // If we select "Fix Image" at Main Level, we are entering that flow.
        // If we want to add "Customization", we pick that.
        // If we pick "Fix Image" again, we are just adding another fix.
        // So we should NOT disable "Fix Image".

        // But what if "Customization" is in stack?
        // If stack has Customization items, do we disable Customization?
        // "Allows stacking attributes up to 2nd last level".
        // So we can add more attributes.
        // So we should NOT disable Customization.

        // So we basically lock the Main Category to these two.
    }

    const config = {
        disabledOptions: disabledOptions
    };

    initDropdown(mainDropdown, categories, (category) => {
        State.setCategory(category);
        State.setSelection(0, category);
        clearSubDropdowns();
        resetDynamicInputs();
        resetFanMomentOptions();

        // Note: We DO NOT clear stack here if we are just switching main category in a stacked context?
        // If stack is empty, we are fine.
        // If stack has items, and we switch from Fix Image to Customization, we KEEP the stack.
        // But if we switch to "Creative Image" (which should be disabled), we would clear stack.
        // Since we disable incompatible ones, we assume safe switching.

        // BUT, existing logic cleared stack on change. We must preserve it if allowed.
        // If new category is compatible with existing stack, keep it.
        // Actually, if we restrict options, we are safe.
        // But wait, if I have "Fix Image" items, and I click "Creative Image" (if it wasn't disabled), I should clear stack.
        // So we need to know if we should clear.

        if (stack.length > 0) {
            // Check compatibility
            if (category !== "Fix Image" && category !== "Customization") {
                State.fixImageStack = []; // Force clear if user somehow selected illegal one
            }
        } else {
            State.fixImageStack = [];
        }

        handleLevelSelection(0, category);
        clearPromptUI();
        renderSentenceBuilder();

        // Re-setup main dropdown to update disabled options (e.g. if we cleared stack)
        // But we are inside the callback.
        // We can't easily re-init the dropdown we are interacting with immediately without issues.
        // But the state change happens. Next time we open it, it should be updated?
        // The dropdown library renders options on click usually? Or on init?
        // It renders on init.
        // So we might need to re-init if the stack state changed significantly (e.g. became empty).

    }, "Select Category", config);

    // Ensure visibility
    mainDropdown.classList.remove('hidden');
    mainDropdown.classList.remove('hidden-by-sentence');
    mainDropdown.style.display = '';
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

        if (level >= fromLevel + 1) {
            el.classList.add('hidden');
            el.classList.remove('hidden-by-sentence'); // Reset this flag
            el.style.display = 'none'; // Ensure hidden properly
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
    return null;
}

export function handleLevelSelection(level, value) {
    // 1. Resolve data node
    let currentData = simpleBrainMap[State.selectedCategory];

    for (let i = 1; i <= level; i++) {
        const sel = State.getSelection(i);
        if (currentData && currentData.options && currentData.options[sel]) {
            currentData = currentData.options[sel];
        } else {
             currentData = null;
        }
    }

    // 2. Determine next step
    if (currentData && currentData.type === 'group') {
        const nextLevel = level + 1;
        const dropdownEl = getDropdownElementForLevel(nextLevel);

        if (dropdownEl) {
            dropdownEl.classList.remove('hidden');
            dropdownEl.classList.remove('hidden-by-sentence');
            dropdownEl.style.display = '';

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

                handleLevelSelection(nextLevel, val);
                updateVisualGuide();
                renderSentenceBuilder();
            }, "Select Option", dropdownConfig);
        }
    } else {
        // Leaf Node
        handleDynamicInputs(currentData);
        checkFanMomentVisibility(State.selectedCategory, State.getAllSelections());

        renderSentenceBuilder();
    }

    updateVisualGuide();

    // Update Main Dropdown options whenever level selection changes?
    // No, only when Stack changes. But Stack changes on [+] click.
    // The events.js handles the stack update. We should probably trigger main dropdown update there.
    // Or just call setupMainDropdown(Object.keys(simpleBrainMap)) whenever we want to refresh L0 options.
    // Since we exported initMainCategory, we can't easily reach setupMainDropdown from outside unless we export it.
    // We will export it.
}

export function refreshMainDropdown() {
    setupMainDropdown(Object.keys(simpleBrainMap));
}
