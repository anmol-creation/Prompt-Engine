// Video Simple Mode Dropdown Manager
import { DOM } from './dom.js';
import { State } from './state.js';
import { simpleBrainMap } from '../simple.brain.map.js';
import { PlaceholderAnimator } from './animator.js';

let currentAnimator = null;

export function initVideoSimpleMode() {
    console.log("Video Simple Mode Initialized (Final)");

    // Ensure Dynamic Input Container Exists
    const levelsContainer = DOM.dynamicLevelsContainer();
    const { container, input } = DOM.createInputContainer();
    levelsContainer.parentNode.insertBefore(container, levelsContainer.nextSibling);

    // Input Listener
    input.addEventListener('input', (e) => {
        const val = e.target.value;
        const pending = State.getPendingChange();
        if (pending && pending.node && pending.node.type === 'input') {
            State.setPendingChange({ ...pending, inputValue: val });

            if (val.trim().length > 0) {
                showAddButton();
            } else {
                hideAddButton();
            }
        }
    });

    initMainCategory();

    // Add Button Listener
    DOM.addBtn().addEventListener('click', handleAddClick);

    // Stack Update Listener
    document.addEventListener('stack-updated', updateStackUI);
}

function initMainCategory() {
    try {
        const select = DOM.mainCategorySelect();
        const categories = Object.keys(simpleBrainMap);

        select.innerHTML = '<option value="">Select Category</option>';
        categories.forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat;
            opt.textContent = cat;
            select.appendChild(opt);
        });

        select.addEventListener('change', (e) => {
            const val = e.target.value;
            hideDynamicInput(); // Reset input

            if (!val) {
                State.setCategory(null);
                DOM.dynamicLevelsContainer().innerHTML = '';
                hideAddButton();
                return;
            }

            State.setCategory(val);
            State.setSelection(0, val);

            // Clear dynamic levels
            DOM.dynamicLevelsContainer().innerHTML = '';
            hideAddButton();

            // Determine next level
            handleLevelSelection(0, val);
        });
    } catch (e) {
        console.error("Error in initMainCategory:", e);
    }
}

function handleLevelSelection(level, value) {
    const category = State.selectedCategory;
    const node = simpleBrainMap[category];

    if (!node) return;

    // Locate the current node in the tree based on level/selections
    // Simplified for 2-level depth for now, as per current Video Brain Map
    let currentNode = node;
    if (level === 1) {
        currentNode = node.options[value];
    }

    if (!currentNode) return;

    // Logic: If it's a Group, render next level options
    if (currentNode.type === 'group' && currentNode.options) {
        renderLevel(level + 1, currentNode.options);
    }

    // Logic: If it's a leaf (Option or Input), prepare stack
    if (currentNode.type === 'option' || currentNode.type === 'input') {

        // If it requires input (type='input'), show input field
        if (currentNode.type === 'input') {
            showDynamicInput(currentNode);
            prepareStackItem(level, value, currentNode);
            hideAddButton(); // Wait for typing
        } else {
            // Standard option
            hideDynamicInput();
            prepareStackItem(level, value, currentNode);
            showAddButton();
        }
    }
}

function renderLevel(level, optionsObj) {
    const container = DOM.dynamicLevelsContainer();

    const wrapper = DOM.create('div', `dropdown-wrapper level-${level}`);
    const select = DOM.create('select', 'custom-dropdown');

    select.innerHTML = '<option value="">Select Option</option>';

    Object.keys(optionsObj).forEach(key => {
        select.appendChild(DOM.create('option', '', key));
    });

    select.addEventListener('change', (e) => {
        const val = e.target.value;
        hideDynamicInput();

        if (!val) {
            hideAddButton();
            return;
        }

        State.setSelection(level, val);
        handleLevelSelection(level, val);
    });

    wrapper.appendChild(select);
    container.appendChild(wrapper);
}

function showDynamicInput(node) {
    const container = DOM.dynamicInputContainer();
    const input = DOM.dynamicInput();

    container.classList.remove('hidden');
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

function hideDynamicInput() {
    const container = DOM.dynamicInputContainer();
    if (container) container.classList.add('hidden');
    if (currentAnimator) currentAnimator.stop();
}

function prepareStackItem(level, value, node) {
    const item = {
        category: State.selectedCategory,
        option: value,
        node: node
    };

    State.setPendingChange(item);
    showAddButton();
}

function showAddButton() {
    DOM.addBtnContainer().classList.remove('hidden');
}

function hideAddButton() {
    DOM.addBtnContainer().classList.add('hidden');
}

function handleAddClick() {
    const pending = State.getPendingChange();
    if (pending) {
        // Validation for input types
        if (pending.node.type === 'input' && (!pending.inputValue || pending.inputValue.trim() === "")) {
            alert("Please type something first.");
            return;
        }

        State.addToStack(pending);

        // Reset UI - Allow stacking
        DOM.mainCategorySelect().value = "";
        DOM.dynamicLevelsContainer().innerHTML = "";
        hideDynamicInput();
        hideAddButton();
        State.setCategory(null);
    }
}

function updateStackUI() {
    const stack = State.getStack();
    const container = DOM.activeStack();
    container.innerHTML = "";

    if (stack.length === 0) {
        container.innerHTML = "<p style='color: #666; font-style: italic;'>No selections yet.</p>";
        return;
    }

    stack.forEach((item, index) => {
        const div = DOM.create('div', 'stack-item');
        div.innerHTML = `
            <span><strong>${item.category}:</strong> ${item.option}</span>
            <button class="remove-btn" data-index="${index}">×</button>
        `;
        container.appendChild(div);
    });

    // Add remove listeners
    container.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(e.target.dataset.index);
            State.removeFromStack(idx);
        });
    });
}
