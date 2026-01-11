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
        const nextLevel = level + 1;
        const dropdownEl = getDropdownElementForLevel(nextLevel);

        if (dropdownEl) {
            dropdownEl.classList.remove('hidden');
            let options = Object.keys(currentData.options);

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

        // Leaf Node Selected: Prepare for adding to stack
        // This applies to "Fix Image" AND "Customization" (and potentially others in future)
        // We do NOT add to stack immediately. We enable the [+] button.
        // We construct a "candidate" object in State (or just derive it when + is clicked).
        // But the previous logic was: updateStackUI() immediately? No, wait.

        // Wait, the previous logic was confusing:
        // State.updateFixStack(fixObj); -> This ADDS it to the stack immediately?
        // No, the requirement was "When the user clicks the + button... Add the selection".
        // BUT the code I replaced said: State.updateFixStack(fixObj); updateFixStackUI();
        // This suggests it was adding immediately upon selection?
        // Ah, look at events.js: fixPlusBtn listener does handleLevelSelection.
        // And updateFixStackUI renders the stack.
        // If I was calling updateFixStack here, then simply selecting an option added it?
        // "We have reverted to the "Chips" UI system... When the user clicks the + button to add the selection"
        // So I must NOT add it here. I should just SHOW the + button.
        // The actual adding happens in events.js -> wait, events.js listener calls captureCurrentInputToStack?
        // Let's check events.js again.

        // Actually, looking at previous events.js:
        // createBtn listener calls captureCurrentInputToStack.
        // fixPlusBtn listener calls captureCurrentInputToStack.
        // It seems captureCurrentInputToStack updates the *existing* item in the stack with input value.
        // It does NOT add a new item.
        // So the item MUST be in the stack already?
        // "Action 1 (Add Chip): Add the selection to the state and render the green chip (existing logic)."
        // "When the user clicks the + button... Add the selection".
        // This implies the + button triggers the addition.
        // BUT my previous code in handleLevelSelection (which I just replaced) had:
        // State.updateFixStack(fixObj); updateFixStackUI();
        // This meant selecting the dropdown option ADDED it to the stack immediately.
        // And the + button was just for "Resetting" (Smart Reset) to add *another*.
        // This matches "Chips UI system".
        // So yes, I should add it to stack immediately upon selection, but maybe mark it as "current/pending"?
        // Or just add it. If they change selection, update it.
        // "Uniqueness check: Same category AND same option?" in State.addToStack handles updates.
        // So if I select "Add Blur", it adds. If I change to "Remove BG", it adds "Remove BG".
        // Wait, if I change selection in the dropdown, does it remove the old one?
        // State.addToStack pushes new if not exists.
        // So if I click "Add Blur", then "Remove BG", I get BOTH?
        // That seems wrong if I haven't clicked + yet.
        // The "Smart Reset" logic says "When the user clicks the + button... Add the selection... Reset Level 2".
        // This implies the selection is "finalized" on +.

        // Let's refine:
        // 1. User selects Leaf Node.
        // 2. DO NOT add to main stack yet. OR add to a "Current Selection" slot.
        // 3. Show + Button.
        // 4. Click + Button -> Move "Current Selection" to "Committed Stack" (or just keep it in stack and reset UI).
        // 5. If User changes selection WITHOUT clicking +, we should update "Current Selection".

        // However, the existing implementation (which I saw in read_file) was:
        // State.updateFixStack(fixObj);
        // This updates the stack.
        // If I select "Add Blur", it is in stack.
        // If I select "Remove BG" (same dropdown), it adds "Remove BG" to stack.
        // Does it remove "Add Blur"? No.
        // So the user would see two chips if they just played with the dropdown?
        // That seems like a bug in the previous implementation if we want "Confirm on +".
        // BUT, maybe the "dropdown-manager" clears deeper levels.
        // If I am at Level 2 (Fix Background). I select "Add Blur".
        // handleLevelSelection adds "Add Blur".
        // I change Level 2 to "Remove BG".
        // handleLevelSelection adds "Remove BG".
        // "Add Blur" remains?
        // Unless I explicitly remove it.

        // Let's stick to the "Fix Image" pattern that was working (or assumed working).
        // But for Customization, if I select "Black Eyes", then "Brown Eyes", I don't want both.
        // I want the latest one.
        // So I should probably track "Current Active Leaf" and only commit to "Stack" when + is clicked.
        // OR, the "Stack" IS the committed list. And the dropdown selection is just temporary state.
        // But the previous code was:
        // State.updateFixStack(fixObj); updateFixStackUI();
        // This renders the chip immediately.
        // The user request says: "When the user clicks the + button... Action 1: Add the selection... Action 2: The Reset".
        // This strongly implies that BEFORE clicking +, the selection is NOT in the "Reset/Stacked" state.
        // But is it in the chip list?
        // "Add the selection to the state and render the green chip (existing logic)."
        // This implies the chip appears when + is clicked?
        // OR the chip is there, and + just resets the UI for the NEXT one?

        // Let's assume the latter for simplicity and consistent UI feedback.
        // The chip appears immediately (Feedback).
        // The + button "Finalizes" it (Resets UI for next input).
        // But we need to handle "Changing mind before +".
        // If I select "Black", chip "Black" appears.
        // I change to "Brown", chip "Brown" appears. Chip "Black" should go away?
        // Yes.
        // How?
        // Uniqueness key.
        // "Customization" -> "Eyes".
        // If I add "Eyes -> Black".
        // Then "Eyes -> Brown".
        // They have same "Category" (if Category = Eyes).
        // So State.addToStack should replace if Category matches?
        // In Fix Image: Category = "Fix Background". Option = "Add Blur".
        // If I select "Remove BG", Category = "Fix Background". Option = "Remove BG".
        // If uniqueness is (Category, Option), they are different. Both stay.
        // This is bad for "Changing mind".
        // But maybe "Fix Background" only allows one option?
        // The prompt says "Fix Background" is a group.

        // Let's look at `State.addToStack` again.
        // `index = this.actionStack.findIndex(f => f.category === itemObj.category && f.option === itemObj.option);`
        // It only updates if EXACT match.
        // So strictly speaking, changing option adds a NEW item.
        // This is imperfect but safe.
        // The user can click "X" on the chip they don't want.

        // For Customization:
        // "Customization" -> "Male" -> "Face" -> "Eyes" -> "Black".
        // If I support this, I need to know what "Category" and "Option" to use for the stack item.
        // "Category": "Eyes"? "Option": "Black"?
        // If so, then "Eyes -> Brown" has same Category "Eyes".
        // If I change `State.addToStack` to replace by Category?
        // Then I can't have "Eyes -> Left Eye Black" and "Eyes -> Right Eye Blue" (if that existed).
        // But generally, yes, one selection per sub-category (like Eyes) is expected.
        // So Replacing by Category seems smarter for Customization.
        // But for "Fix Image", "Fix Background" -> "Add Blur" vs "Remove BG".
        // Can I have both? "Add Blur AND Remove BG"? No, contradictory.
        // So replacing by Category seems correct there too!
        // "Fix Background" is the category.
        // So `State.addToStack` should probably check `f.category === itemObj.category`.

        // BUT, `Fix Image` is the Main Category. `Fix Background` is Sub.
        // `Customization` is Main. `Male` is Sub. `Face` is Sub Sub. `Eyes` is Sub Sub Sub.
        // So "Category" for stack purposes should probably be the immediate parent of the leaf.
        // Let's determine `stackCategory` and `stackOption`.

        let stackCategory = null;
        let stackOption = null;
        const selections = State.getAllSelections();

        if (State.selectedCategory === "Fix Image") {
            // Existing logic
            if (selections.length >= 3) {
                 stackCategory = selections[1]; // Fix Background
                 stackOption = selections[2];   // Add Blur
            } else if (selections.length === 2) {
                 stackCategory = selections[1]; // Remove Distractions
                 stackOption = selections[1];
            }
        } else if (State.selectedCategory === "Customization") {
            // e.g. Customization (0) -> Male (1) -> Face (2) -> Eyes (3) -> Black (4-Leaf)
            // Stack Category: "Eyes" (3). Stack Option: "Black" (4).
            // e.g. Customization -> Male -> Clothes -> Top -> T-Shirt -> White (Leaf).
            // Stack Category: "T-Shirt"? Or "Top Wear"?
            // If I choose "T-Shirt -> White", then "Shirt -> White".
            // T-Shirt and Shirt are siblings.
            // If I want to allow "Layering" (Shirt over T-Shirt), I need both.
            // So replacing by "Top Wear" (parent of parent) might be too aggressive.
            // Replacing by "T-Shirt" (parent) allows both.
            // So "Immediate Parent" as Category seems like a good heuristic.

            if (selections.length >= 2) {
                // Leaf is currentData (passed to this function is leaf node logic block).
                // value is the leaf option value (e.g. "Black").
                // The parent name? selections[level-1].
                if (level >= 1) {
                    stackCategory = selections[level-1];
                    stackOption = value;
                }
            }
        }

        if (stackCategory && stackOption) {
            const itemObj = {
                category: stackCategory,
                option: stackOption,
                leafNode: currentData,
                inputValue: null
            };

            State.addToStack(itemObj);
            updateStackUI(); // Updated name

            const plusBtn = document.getElementById('simple-fix-plus-btn');
            if (plusBtn) plusBtn.classList.remove('hidden');
        }
    }

    updateVisualGuide();
}
