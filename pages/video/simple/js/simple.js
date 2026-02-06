// Video Simple Mode Dropdown Manager
import { DOM } from './dom.js';
import { State } from './state.js';
import { simpleBrainMap, globalVideoInstructions } from '../simple.brain.map.js';
import { PlaceholderAnimator } from './animator.js';
import { initDropdown, setDropdownValue, resetDropdown } from './dropdown-shared.js';
import { savePrompt } from '../../../../assets/js/firestore.js';

let currentAnimator = null;

// Renderer Object (Simplified for Video Mode but matching Image UI)
const Renderer = {
    renderDropdown(level, options, config, onSelect) {
        const dropdownEl = this.getDropdownElement(level);
        if (!dropdownEl) return;

        dropdownEl.classList.remove('hidden');

        // Convert object to array if needed (simpleBrainMap uses objects)
        let optionsArray = options;
        if (!Array.isArray(options) && typeof options === 'object') {
            optionsArray = Object.keys(options).map(key => {
                 // Check if it has a label or just use key
                 // Brain map structure: { "Action": { type: "group", ... } }
                 // We want the keys as options.
                 return key;
            });
        }

        initDropdown(dropdownEl, optionsArray, onSelect, "Select Option", config);
    },

    getDropdownElement(level) {
        if (level === 1) return DOM.subCategory1();
        if (level === 2) return DOM.subCategory2();
        if (level === 3) return DOM.subCategory3();
        if (level === 4) return DOM.subCategory4();
        if (level === 5) return DOM.subCategory5();
        if (level === 6) return DOM.subCategory6();
        if (level === 7) return DOM.subCategory7();
        if (level === 8) return DOM.subCategory8();
        return null;
    },

    clearSubDropdowns(fromLevel = 0) {
        const all = DOM.getAllSubDropdowns();
        all.forEach(el => {
            let level = -1;
            if (el.id === 'simple-sub-category') level = 1;
            else if (el.id.startsWith('simple-sub-category-')) {
                const parts = el.id.split('-');
                level = parseInt(parts[parts.length - 1]);
            }

            if (level >= fromLevel + 1) {
                el.classList.add('hidden');
                resetDropdown(el);
            }
        });
    },

    initMain(categories, onSelect) {
        const mainDropdown = DOM.mainCategory();
        if (!mainDropdown) return;
        initDropdown(mainDropdown, categories, onSelect, "Select Category");
    },

    showAddButton() {
        const addBtn = DOM.addBtn();
        if (addBtn) addBtn.classList.remove('hidden');
    },

    hideAddButton() {
        const addBtn = DOM.addBtn();
        if (addBtn) addBtn.classList.add('hidden');
    },

    updateStackUI() {
        const stack = State.getStack();
        const container = DOM.fixStackContainer();
        if (!container) return;

        container.classList.remove('hidden');
        container.innerHTML = "";

        if (stack.length === 0) {
            container.classList.add('hidden');
            return;
        }

        stack.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'fix-stack-item';
            div.innerHTML = `
                <span class="fix-stack-check">✓</span>
                <span><strong>${item.category}:</strong> ${item.option}</span>
                <span class="remove-fix-btn" data-index="${index}">×</span>
            `;
            container.appendChild(div);
        });

        // Add remove listeners
        container.querySelectorAll('.remove-fix-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt(e.target.dataset.index);
                State.removeFromStack(idx);
                // Re-render stack is handled by event listener in init
            });
        });
    }
};

export function initVideoSimpleMode() {
    console.log("Video Simple Mode Initialized (Final)");

    // Initialize Main Category
    const categories = Object.keys(simpleBrainMap);
    Renderer.initMain(categories, (val) => {
        handleMainCategorySelect(val);
    });

    // Initialize Aspect Ratio (Locked / Always Visible)
    const aspectRatios = [
        "9:16 (Reels / Shorts)",
        "16:9 (YouTube / Landscape)",
        "1:1 (Square)"
    ];
    initDropdown(DOM.languageSelect(), aspectRatios, (val) => {
        State.setAspectRatio(val);
    }, "Select Ratio", { defaultText: aspectRatios[0] });

    // Input Listener
    DOM.textInput().addEventListener('input', (e) => {
        const val = e.target.value;
        const pending = State.getPendingChange();
        if (pending && pending.node && pending.node.type === 'input') {
            State.setPendingChange({ ...pending, inputValue: val });

            if (val.trim().length > 0) {
                Renderer.showAddButton();
            } else {
                Renderer.hideAddButton();
            }
        }
    });

    // Add Button Listener
    DOM.addBtn().addEventListener('click', handleAddClick);

    // Create Prompt Button Listener
    DOM.createBtn().addEventListener('click', handleCreatePrompt);

    // Stack Update Listener
    document.addEventListener('stack-updated', () => {
        Renderer.updateStackUI();
    });
}

function handleMainCategorySelect(val) {
    DOM.dynamicInputsContainer().classList.add('hidden'); // Reset input
    Renderer.hideAddButton();

    if (!val) {
        State.setCategory(null);
        Renderer.clearSubDropdowns(0);
        return;
    }

    State.setCategory(val);
    State.setSelection(0, val);
    Renderer.clearSubDropdowns(0);

    handleLevelSelection(0, val);
}


function handleLevelSelection(level, value) {
    const category = State.selectedCategory;
    const node = simpleBrainMap[category];

    if (!node) return;

    // Locate the current node in the tree based on level/selections
    // Since we don't have a full path traverser here like Image Mode, we'll implement simple traversal
    // Assuming level 0 is root.
    // Level 1 is option inside root.
    // This part requires tracking the path.

    // Simplification: We will just look at the current selection path stored in State if we had one.
    // But State.selection only stores simple key-values.

    // Let's traverse down from the root based on current selections + new selection
    let currentNode = node; // Root node (Category)

    // For Video Mode Brain Map, it seems to be depth 1 or 2 mainly.
    // Let's rely on recursive checking based on previous dropdowns values.
    // BUT we don't have previous values easily accessible unless we read from DOM or State.
    // State stores them.

    // If level is 0, we just selected Main Category. 'node' is the category object.
    // If it has 'options', we render level 1.
    if (level === 0) {
        if (node.options) {
             Renderer.renderDropdown(1, node.options, {}, (val) => {
                 // When Level 1 is selected
                 State.setSelection(1, val);
                 handleLevelSelection(1, val);
             });
        }
        // If it's input directly (unlikely for main category but possible)
        if (node.type === 'input') {
            showDynamicInput(node);
            prepareStackItem(0, value, node);
        }
    } else {
        // Level > 0. We need to find the node for the SELECTED value.
        // We know the parent node's options.
        // We need to find the specific option object for 'value'.

        // We need a way to get the parent node of the current selection.
        // This is tricky without a full traversal state.
        // Let's re-traverse from root using State.selections.

        let ptr = simpleBrainMap[category];
        for (let i = 1; i <= level; i++) {
            const sel = State.selections[i]; // Value selected at level i
            if (!sel) break;
            if (ptr.options && ptr.options[sel]) {
                ptr = ptr.options[sel];
            } else {
                // If the structure is different (e.g. leaf)
                break;
            }
        }

        // Now 'ptr' should be the node for the value we just selected.
        currentNode = ptr;

        // Render next level if it's a group
        if (currentNode.type === 'group' && currentNode.options) {
            Renderer.renderDropdown(level + 1, currentNode.options, {}, (val) => {
                State.setSelection(level + 1, val);
                handleLevelSelection(level + 1, val);
            });
        } else if (currentNode.type === 'option' || currentNode.type === 'input') {
            // Leaf node
            if (currentNode.type === 'input') {
                showDynamicInput(currentNode);
                prepareStackItem(level, value, currentNode);
                Renderer.hideAddButton(); // Wait for typing
            } else {
                DOM.dynamicInputsContainer().classList.add('hidden');
                prepareStackItem(level, value, currentNode);
                Renderer.showAddButton();
            }
        }
    }
}

function showDynamicInput(node) {
    const container = DOM.dynamicInputsContainer();
    const input = DOM.textInput();

    container.classList.remove('hidden');
    input.classList.remove('hidden');
    input.value = "";
    input.focus();

    // Setup Animator
    if (currentAnimator) currentAnimator.stop();

    const examples = node.examples || [
        "Cinematic Music Video",
        "Travel Vlog in 4K",
        "Documentary about Nature",
        "Commercial for Sports Car",
        "Futuristic Sci-Fi Trailer"
    ];

    currentAnimator = new PlaceholderAnimator(input, examples);
}

function prepareStackItem(level, value, node) {
    const item = {
        category: State.selectedCategory,
        option: value,
        node: node
    };

    State.setPendingChange(item);
    Renderer.showAddButton();
}

function handleAddClick() {
    const pending = State.getPendingChange();
    if (pending) {
        // Validation for input types
        if (pending.node.type === 'input' && (!pending.inputValue || pending.inputValue.trim() === "")) {
            alert("Please type something first.");
            return;
        }

        // If input, use input value as option text
        if (pending.node.type === 'input') {
            pending.option = pending.inputValue;
        }

        State.addToStack(pending);

        // Reset UI - Allow stacking
        resetMainUI();
    }
}

function resetMainUI() {
    // Reset Main Category Dropdown
    resetDropdown(DOM.mainCategory(), "Select Category");
    Renderer.clearSubDropdowns(0);
    DOM.dynamicInputsContainer().classList.add('hidden');
    Renderer.hideAddButton();
    State.setCategory(null);
    if (currentAnimator) currentAnimator.stop();
}

function handleCreatePrompt() {
    const stack = State.getStack();
    if (stack.length === 0) {
        alert("Please add at least one element to the prompt.");
        return;
    }

    // Generate Prompt
    const promptParts = stack.map(item => {
        // Simple prompt generation: "Category: Option" or just "Option"
        // If node has specific prompt logic (like Image mode), we use it.
        // For now, just concatenating options.
        if (item.node.prompt) {
             return item.node.prompt.replace('${input}', item.option);
        }
        return item.option;
    });

    let finalString = promptParts.join(", ");

    // Global Realism Rule (Mandatory Injection)
    // Using imported detailed instructions
    finalString += ". " + globalVideoInstructions;

    // Append Aspect Ratio
    const ar = State.getAspectRatio();
    if (ar) {
        finalString += `, Aspect Ratio: ${ar}`;
    }

    // Display in Output
    DOM.finalPrompt().textContent = finalString;
    DOM.copyBtn().classList.remove('hidden');

    // Show Save Button
    const saveBtn = DOM.saveBtn();
    if (saveBtn) {
        saveBtn.classList.remove('hidden');
        // Reset state for new prompt
        saveBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>`;
        saveBtn.classList.remove('saved');
        saveBtn.title = "Save Prompt";

        saveBtn.onclick = () => {
             savePrompt(finalString, saveBtn);
        };
    }

    // Setup Copy Button
    DOM.copyBtn().onclick = () => {
        navigator.clipboard.writeText(finalString);
        DOM.copyBtn().textContent = "Copied!";
        setTimeout(() => DOM.copyBtn().textContent = "Copy", 2000);
    };
}

// Ensure the Visual Guide container has the class
// (No dynamic logic yet, but structure is preserved)
const vgContainer = document.getElementById('simple-visual-guide-container');
if (vgContainer) {
    vgContainer.classList.add('visual-guide-container');
}
