// Orchestrator for Dropdown System
import { DOM } from '../dom.js';
import { State } from '../state.js';
import { simpleBrainMap } from '../../brain/index.js';
import { updateVisualGuide } from '../visual-guide-bridge.js';
import { resetDynamicInputs, handleDynamicInputs } from '../inputs.js';
import { CoupleManager } from '../couple-manager.js';

// Feature Specifics (Imported here, but logic delegated)
import { resetFanMomentOptions, checkFanMomentVisibility } from '../fan-options.js';
import { resetVehicleOptions, getVehicleOptionsValues } from '../vehicle-options.js';
import { resetHairOptions, checkHairOptionsVisibility, getHairOptionsValues } from '../hair-options.js';
import { resetMustacheOptions, checkMustacheOptionsVisibility, getMustacheOptionsValues } from '../mustache-options.js';
import { checkBeardVisibility, getBeardOptionsValues } from '../beard-options.js';

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

        // Reset Feature Options
        safeCall(resetFanMomentOptions);
        safeCall(resetVehicleOptions);

        // Feature Checks
        // note: resetBeardOptions is removed/safeCall-ed to prevent crashes if missing

        StackSync.updateUI();
        Renderer.hidePlusButton();
        Renderer.resetPromptUI();

        handleLevelSelection(0, category);
    });
}

// --- Core Logic ---

export function handleLevelSelection(level, value) {
    // Intercept Couple Mode under Customization

    // Level 1: "Couple" selected. Show Attributes (Level 2).
    if (State.selectedCategory === "Customization" && level === 1 && value === "Couple") {
        CoupleManager.init();
        // Ensure Couple UI is HIDDEN at this stage (we only want attributes now)
        CoupleManager.hide();

        // Clear deeper levels just in case (clear Level 2+)
        Renderer.clearSubDropdowns(level);

        const attributes = CoupleManager.getAttributes();
        Renderer.renderDropdown(2, attributes, { searchPlaceholder: "Select Details..." }, (val) => {
            State.setSelection(2, val);
            Renderer.clearSubDropdowns(2); // Clear Level 3+
            resetDynamicInputs();
            Renderer.resetPromptUI();

            handleLevelSelection(2, val);
        });

        return;
    }

    // Level 2: Attribute selected. Show Split Table (Couple UI).
    if (State.selectedCategory === "Customization" && level === 2 && State.getSelection(1) === "Couple") {
        CoupleManager.init();
        CoupleManager.show(value); // Show Split Table for selected attribute (e.g. "Clothes")
        return;
    }

    // Ensure UI is hidden if we navigate away (e.g. to Male/Female)
    // Optimization: Only call hide if it might be open.
    // Or just always hide.
    if (State.selectedCategory === "Customization") {
        CoupleManager.hide();
    }

    // 1. Traverse to find current node
    const currentData = Traversal.resolveNode(State.selectedCategory, State, level);

    if (!currentData) {
        console.warn(`Dropdown: Could not resolve data for level ${level}`);
        return;
    }

    // 2. Decide Next Step
    if (Validators.isGroup(currentData)) {
        handleGroupSelection(level, currentData);
    } else {
        handleLeafSelection(level, value, currentData);
    }

    updateVisualGuide();
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
        safeCall(resetFanMomentOptions);
        Renderer.resetPromptUI();

        // Feature Checks (Side Effects)
        safeCall(checkBeardVisibility);

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

    // Feature Checks
    safeCall(() => checkFanMomentVisibility(State.selectedCategory, State.getAllSelections()));
    safeCall(checkBeardVisibility);

    // Prepare Stack Item
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

        // Capture Initial Optional Values
        if (stackCategory === "Replace Background") {
            const val = safeCall(getVehicleOptionsValues);
            if (val) itemObj.vehicleOptions = val;
        }
        if (stackCategory === "Beard Style") {
            const val = safeCall(getBeardOptionsValues);
            if (val) itemObj.beardColor = val;
        }
        if (stackCategory === "Hair Style") {
            const val = safeCall(getHairOptionsValues);
            if (val) itemObj.hairOptions = val;
        }
        if (stackCategory === "Mustache Style") {
            const val = safeCall(getMustacheOptionsValues);
            if (val) itemObj.mustacheColor = val;
        }

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
