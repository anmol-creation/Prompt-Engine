// Orchestrator for Dropdown System
import { DOM } from '../dom.js';
import { State } from '../state.js';
import { simpleBrainMap } from '../../brain/index.js';
import { resetDynamicInputs, handleDynamicInputs } from '../inputs.js';

// Removed specific feature imports for generic Video mode

// Internal Modules
import { Validators } from './validators.js';
import { Traversal } from './traversal.js';
import { Renderer } from './renderer.js';
import { StackSync } from './stack-sync.js';

// --- Initialization ---

export function initMainCategory() {
    // Ensure we listen for stack empty event
    document.addEventListener('stack-emptied', () => {
        handleLevelSelection(0, State.selectedCategory);
    });

    const categories = Object.keys(simpleBrainMap);

    Renderer.initMain(categories, (category) => {
        // Main Category Selected
        State.setCategory(category);
        State.setSelection(0, category);

        // Reset Everything
        Renderer.clearSubDropdowns();
        resetDynamicInputs();

        // (Specific feature resets removed)

        StackSync.updateUI();
        Renderer.hidePlusButton();
        Renderer.resetPromptUI();

        handleLevelSelection(0, category);
    });
}

// --- Core Logic ---

export function handleLevelSelection(level, value) {
    // 1. Traverse to find current node
    const currentData = Traversal.resolveNode(State.selectedCategory, State, level);

    if (!currentData) {
        console.warn(`Dropdown: Could not resolve data for level ${level}`);
        return;
    }

    // 2. Decide Next Step
    if (Validators.hasOptions(currentData)) {
        handleGroupSelection(level, currentData);
    } else {
        handleLeafSelection(level, value, currentData);
    }

}

function handleGroupSelection(level, node) {
    // Reset pending state
    State.setPendingChange(null);
    Renderer.hideAddButton();

    const nextLevel = level + 1;
    const options = Traversal.getOptionsForNextLevel(node);

    if (options.length === 0) {
        console.warn("Dropdown: Group has no options", node);
        return;
    }

    const isFixImageLevel1 = (State.selectedCategory === "Fix Image" && level === 0);
    const disabledOptions = isFixImageLevel1 ? State.getStack().map(i => i.category) : [];

    const config = {
        enableSearch: node.enableType || false,
        searchPlaceholder: node.searchPlaceholder || "Type option...",
        disabledOptions: disabledOptions
    };

    Renderer.renderDropdown(nextLevel, options, config, (val) => {
        State.setSelection(nextLevel, val);

        // Clear deeper levels
        Renderer.clearSubDropdowns(nextLevel);
        resetDynamicInputs();
        Renderer.resetPromptUI();

        // Hide Plus Button (Intermediate State)
        if (document.getElementById('simple-fix-plus-btn')) {
            Renderer.hidePlusButton();
        }

        // Recurse
        handleLevelSelection(nextLevel, val);
    });
}

function handleLeafSelection(level, value, node) {
    // Handle Inputs
    handleDynamicInputs(node);

    // Prepare Stack Item
    prepareStackItem(level, value, node);
}

function prepareStackItem(level, value, node) {
    let stackCategory = null;
    let stackOption = null;
    const selections = State.getAllSelections();

    // To get user-friendly labels, we resolve the parent node
    if (level === 1) {
        // Level 1: Category is the selected main category, option is the label of this selection
        const mainCatNode = Traversal.resolveNode(State.selectedCategory, State, 0);
        if (mainCatNode && mainCatNode.children && mainCatNode.children[selections[1]]) {
            stackCategory = mainCatNode.children[selections[1]].title;
            stackOption = mainCatNode.children[selections[1]].title;
        } else {
            stackCategory = selections[1];
            stackOption = selections[1];
        }
    } else if (level >= 1) {
        // Find the parent node to get its title
        const parentNode = Traversal.resolveNode(State.selectedCategory, State, level - 1);

        if (parentNode && parentNode.title) {
            stackCategory = parentNode.title;
        } else {
            stackCategory = selections[level - 1];
        }

        // For the option, if it's a leaf generated from a registry, we need to find its label
        // But the value might just be an ID from the generator array
        // We'll rely on the leafNode's title if it has one, or try to lookup the option label
        if (node.title) {
            stackOption = node.title;
        } else if (parentNode && parentNode.generator) {
            // It's from a generator
            const options = Traversal.getOptionsForNextLevel(parentNode);
            const foundOpt = options.find(o => o.value === value);
            stackOption = foundOpt ? foundOpt.label : value;
        } else {
            stackOption = value;
        }
    }

    if (stackCategory && stackOption) {
        const itemObj = {
            category: stackCategory,
            option: stackOption,
            leafNode: node,
            inputValue: null
        };

        // Set Pending
        State.setPendingChange(itemObj);
        Renderer.showAddButton();
        Renderer.hidePlusButton();
    }
}

// Helper to prevent crashes if a feature module is missing or buggy
function safeCall(fn, ...args) {
    if (typeof fn === 'function') {
        try {
            return fn(...args);
        } catch (e) {
            console.error("Dropdown: Feature callback failed", e);
        }
    }
    return null;
}

// Exports
export const updateStackUI = StackSync.updateUI.bind(StackSync);
export const clearSubDropdowns = Renderer.clearSubDropdowns.bind(Renderer);
