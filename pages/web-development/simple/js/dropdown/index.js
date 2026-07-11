import { DOM } from '../dom.js';
import { State } from '../state.js';
import { simpleBrainMap } from '../../brain/index.js';
import { updateVisualGuide } from '../visual-guide-bridge.js';
import { resetDynamicInputs, handleDynamicInputs } from '../inputs.js';

import { Validators } from './validators.js';
import { Traversal } from './traversal.js';
import { Renderer } from './renderer.js';
import { StackSync } from './stack-sync.js';

export function initMainCategory() {
    document.addEventListener('stack-emptied', () => {
        handleLevelSelection(0, State.selectedCategory);
    });

    const categories = Object.keys(simpleBrainMap);

    Renderer.initMain(categories, (category) => {
        State.setCategory(category);
        State.setSelection(0, category);

        Renderer.clearSubDropdowns();
        resetDynamicInputs();

        StackSync.updateUI();
        Renderer.hidePlusButton();
        Renderer.resetPromptUI();

        handleLevelSelection(0, category);
    });
}

export function handleLevelSelection(level, value) {
    const currentData = Traversal.resolveNode(State.selectedCategory, State, level);

    if (!currentData) {
        console.warn(`Dropdown: Could not resolve data for level ${level}`);
        return;
    }

    if (Validators.isGroup(currentData)) {
        handleGroupSelection(level, currentData);
    } else {
        handleLeafSelection(level, value, currentData);
    }

    updateVisualGuide();
}

function handleGroupSelection(level, node) {
    State.setPendingChange(null);
    Renderer.hideAddButton();

    const nextLevel = level + 1;
    const options = Traversal.getOptionsForNextLevel(node);

    if (options.length === 0) {
        console.warn("Dropdown: Group has no options", node);
        return;
    }

    const config = {
        enableSearch: node.enableType || false,
        searchPlaceholder: node.searchPlaceholder || "Type option...",
        disabledOptions: []
    };

    Renderer.renderDropdown(nextLevel, options, config, (val) => {
        State.setSelection(nextLevel, val);

        Renderer.clearSubDropdowns(nextLevel);
        resetDynamicInputs();
        Renderer.resetPromptUI();

        if (document.getElementById('simple-fix-plus-btn')) {
            Renderer.hidePlusButton();
        }

        handleLevelSelection(nextLevel, val);
    });
}

function handleLeafSelection(level, value, node) {
    handleDynamicInputs(node);
    prepareStackItem(level, value, node);
}

function prepareStackItem(level, value, node) {
    let stackCategory = null;
    let stackOption = null;
    const selections = State.getAllSelections();

    if (level === 1) {
        stackCategory = selections[1];
        stackOption = selections[1];
    } else if (level >= 1) {
        stackCategory = selections[level - 1];
        stackOption = value;
    }

    if (stackCategory && stackOption) {
        const itemObj = {
            category: stackCategory,
            option: stackOption,
            leafNode: node,
            inputValue: null
        };

        State.setPendingChange(itemObj);
        Renderer.showAddButton();
        Renderer.hidePlusButton();
    }
}

export const updateStackUI = StackSync.updateUI.bind(StackSync);
export const clearSubDropdowns = Renderer.clearSubDropdowns.bind(Renderer);
