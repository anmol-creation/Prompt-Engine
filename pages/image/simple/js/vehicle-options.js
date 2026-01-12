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
        generatePrompt(); // Regenerate prompt on change
    }, "Select Vehicle Category");

    // Initialize Type Dropdown (empty initially)
    const optType = DOM.optVehicleType();
    if (optType) {
        initDropdown(optType, [], (val) => {
            handleVehicleTypeChange(val);
            generatePrompt();
        }, "Select Type", { enableSearch: true, searchPlaceholder: "Type vehicle name here..." });
    }

    // Initialize Color Dropdown (static list)
    const optColor = DOM.optVehicleColor();
    if (optColor) {
        initDropdown(optColor, vehicleColors, (val) => {
            generatePrompt();
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
}

export function checkVehicleVisibility() {
    // Check if "Replace Background" is in the stack or currently selected
    // Since Replace Background is usually Level 2 (Fix Image -> Fix Background -> Replace Background)
    // and Nature/Urban is Level 3 (Leaf).
    // The "Stack" logic usually captures (Category=Replace Background, Option=Nature).
    // Or (Category=Fix Background, Option=Remove BG).

    // In "Replace Background" flow:
    // Level 0: Fix Image
    // Level 1: Fix Background (Group)
    // Level 2: Replace Background (Group)
    // Level 3: Nature (Leaf)

    // When "Nature" is selected, `handleLevelSelection` adds it to Stack.
    // The stack item: { category: "Replace Background", option: "Nature" }.
    // Why? `dropdown-manager.js`:
    // if (level >= 1) { stackCategory = selections[level-1]; stackOption = value; }
    // level=3 (Nature). selections[2] = "Replace Background".
    // So category="Replace Background", option="Nature".

    const stack = State.getStack();
    const isReplaceBg = stack.some(item => item.category === "Replace Background");

    const container = DOM.vehicleOptionsContainer();
    if (container) {
        if (isReplaceBg) {
            container.classList.remove('hidden');
        } else {
            resetVehicleOptions(); // Hide and reset if no longer relevant
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
            generatePrompt();
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
