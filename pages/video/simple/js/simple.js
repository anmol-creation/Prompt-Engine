// Video Simple Mode Dropdown Manager
import { DOM } from './dom.js';
import { State } from './state.js';
import { simpleBrainMap } from '../simple.brain.map.js';

export function initVideoSimpleMode() {
    console.log("Video Simple Mode Initialized (Final)");

    // Debug
    try {
        if (simpleBrainMap) {
             console.log("Brain Map Loaded:", Object.keys(simpleBrainMap));
        }
    } catch (e) {
        console.error("Brain Map Error:", e);
    }

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
            if (!val) return;

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
    // Basic traversal logic
    // Level 0 is Category. Level 1 is Options.

    const category = State.selectedCategory;
    const node = simpleBrainMap[category];

    if (!node) return;

    if (node.type === 'group' && level === 0) {
        // Render next level (Level 1)
        renderLevel(1, node.options);
    } else if (level >= 1) {
        // Check if we are at a leaf or need deeper traversal

        // Since we didn't implement full traversal util yet, let's assume depth 1 for now
        // based on the brain map we created (Type -> Options).

        // Check if the selected option is a leaf
        const parentNode = (level === 1) ? node : null; // simplified
        const selectedOptionNode = parentNode ? parentNode.options[value] : null;

        if (selectedOptionNode) {
            if (selectedOptionNode.type === 'option' || selectedOptionNode.type === 'input') {
                // Leaf
                prepareStackItem(level, value, selectedOptionNode);
            } else if (selectedOptionNode.type === 'group') {
                // Recurse (not implemented fully for this demo)
            }
        }
    }
}

function renderLevel(level, optionsObj) {
    const container = DOM.dynamicLevelsContainer();

    const wrapper = DOM.create('div', `dropdown-wrapper level-${level}`);
    const select = DOM.create('select', 'custom-dropdown');

    select.innerHTML = '<option value="">Select Option</option>';

    Object.keys(optionsObj).forEach(key => {
        const optNode = optionsObj[key];
        // Handle input type slightly differently in UI?
        // For now, treat as selectable option which triggers input logic if selected.
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = key;
        select.appendChild(opt);
    });

    select.addEventListener('change', (e) => {
        const val = e.target.value;
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
        State.addToStack(pending);

        // Reset UI
        DOM.mainCategorySelect().value = "";
        DOM.dynamicLevelsContainer().innerHTML = "";
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
