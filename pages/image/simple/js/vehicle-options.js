// Vehicle Options Manager
import { DOM } from './dom.js';
import { State } from './state.js';
import { vehicleData, vehicleColors } from '../brain/generators/vehicle-options.js';
import { initDropdown, setDropdownValue, getDropdownValue } from '../../shared/dropdown.js';
import { generatePrompt } from './prompt-controller.js';

export function initVehicleOptions() {
    const optCat = DOM.optVehicleCat();
    if (!optCat) return;

    // Initialize Category Dropdown
    initDropdown(optCat, Object.keys(vehicleData), (val) => {
        handleVehicleCatChange(val);
        updateStackWithVehicleData();
        // generatePrompt(); // REMOVED to prevent auto-generation
    }, "Select Vehicle Category");

    // Initialize Type Dropdown (empty initially)
    const optType = DOM.optVehicleType();
    if (optType) {
        initDropdown(optType, [], (val) => {
            handleVehicleTypeChange(val);
            updateStackWithVehicleData();
            // generatePrompt(); // REMOVED to prevent auto-generation
        }, "Select Type", { enableSearch: true, searchPlaceholder: "Type vehicle name here..." });
    }

    // Initialize Color Dropdown (static list)
    const optColor = DOM.optVehicleColor();
    if (optColor) {
        initDropdown(optColor, vehicleColors, (val) => {
            updateStackWithVehicleData();
            // generatePrompt(); // REMOVED to prevent auto-generation
        }, "Select Color");
    }
}

export function resetVehicleOptions() {
    const container = DOM.vehicleOptionsContainer();
    if (!container) return;

    container.classList.add('hidden');
    if (DOM.optVehicleCat()) setDropdownValue(DOM.optVehicleCat(), "");

    const typeWrapper = DOM.optVehicleTypeWrapper();
    if (typeWrapper) typeWrapper.classList.add('hidden');
    if (DOM.optVehicleType()) setDropdownValue(DOM.optVehicleType(), "");

    const colorWrapper = DOM.optVehicleColorWrapper();
    if (colorWrapper) colorWrapper.classList.add('hidden');
    if (DOM.optVehicleColor()) setDropdownValue(DOM.optVehicleColor(), "");

    // NOTE: We do NOT clear the stack data here.
    // Hiding the UI (e.g., navigating away) should not delete the persisted data from the stack item.
    // The stack item itself will be removed if the user changes the "Replace Background" selection to something else.
}

function updateStackWithVehicleData() {
    const data = getVehicleOptionsValues();
    // Update stack item with data (or null if inputs cleared)
    // This allows clearing the vehicle options by unselecting the category.
    State.updateStackItem("Replace Background", { vehicleOptions: data });
}

export function checkVehicleVisibility() {
    // Strict Scope: Only visible if path is Fix Image -> Fix Background -> Replace Background
    const selections = State.getAllSelections();

    // Check if path is valid
    // selections[0] must be "Fix Image"
    // selections[1] must be "Fix Background" (assuming it exists in map, sometimes level 1 is Fix Background directly?)
    // Let's check simple.brain.map structure logic from prompt-controller or dropdown-manager
    // Level 0: Main Category (Fix Image)
    // Level 1: Sub Category (Fix Background)
    // Level 2: Sub Sub Category (Replace Background)

    let isCorrectScope = false;

    if (selections.length >= 3) {
        if (selections[0] === "Fix Image" &&
            selections[1] === "Fix Background" &&
            selections[2] === "Replace Background") {
            isCorrectScope = true;
        }
    }

    const container = DOM.vehicleOptionsContainer();
    if (container) {
        if (isCorrectScope) {
            container.classList.remove('hidden');
        } else {
            // Only reset if it WAS visible (to avoid constant resets, though harmless)
            if (!container.classList.contains('hidden')) {
                resetVehicleOptions();
            } else {
                // Ensure it remains hidden and reset even if we didn't just hide it,
                // just in case of state leakage.
                // But resetVehicleOptions() clears the values too.
                // If we are navigating away, we want to clear.
                // If we are just initializing, maybe not.
                // Safe to always reset if not in scope.

                // Wait, if I am in "Remove Distractions" (Level 2), scope is false.
                // I should ensure vehicle options are gone.
                // But checkVehicleVisibility is called on every selection.
                // So yes, if not correct scope, hide and reset.
            }
        }
    }
}

function handleVehicleCatChange(category) {
    const typeWrapper = DOM.optVehicleTypeWrapper();
    const typeDropdown = DOM.optVehicleType();
    const colorWrapper = DOM.optVehicleColorWrapper();
    const colorDropdown = DOM.optVehicleColor();

    if (!category) {
        if (typeWrapper) typeWrapper.classList.add('hidden');
        if (colorWrapper) colorWrapper.classList.add('hidden');
        return;
    }

    // Populate Type Dropdown
    const types = vehicleData[category] || [];
    if (typeDropdown) {
        initDropdown(typeDropdown, types, (val) => {
            handleVehicleTypeChange(val);
            updateStackWithVehicleData();
            // generatePrompt(); // REMOVED to prevent auto-generation
        }, "Select Type", { enableSearch: true, searchPlaceholder: "Type vehicle name here..." });
    }

    if (typeWrapper) typeWrapper.classList.remove('hidden');

    // Reset lower levels
    if (colorWrapper) colorWrapper.classList.add('hidden');
    if (colorDropdown) setDropdownValue(colorDropdown, "");
}

function handleVehicleTypeChange(typeVal) {
    const colorWrapper = DOM.optVehicleColorWrapper();

    if (typeVal) {
        if (colorWrapper) colorWrapper.classList.remove('hidden');
    } else {
        if (colorWrapper) colorWrapper.classList.add('hidden');
    }
}

export function getVehicleOptionsValues() {
    const container = DOM.vehicleOptionsContainer();
    // If container is hidden, we return null?
    // NO! If the user navigates away, the container hides.
    // But we might want to READ the values if we rely on DOM.
    // However, the new architecture relies on STATE (stack item).
    // This function is for reading DOM to PUT into State.

    if (!container || container.classList.contains('hidden')) return null;

    const cat = getDropdownValue(DOM.optVehicleCat());
    const type = getDropdownValue(DOM.optVehicleType());
    const color = getDropdownValue(DOM.optVehicleColor());

    if (!cat) return null; // Category is required for this optional part to trigger text

    return {
        category: cat,
        type: type,
        color: color
    };
}
