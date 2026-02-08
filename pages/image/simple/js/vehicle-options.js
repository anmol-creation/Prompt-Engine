// Vehicle Options Manager
import { DOM } from './dom.js';
import { State } from './state.js';
import { vehicleData, vehicleColors } from '../brain/generators/vehicle-options.js';
import { initDropdown, setDropdownValue, getDropdownValue } from '../../shared/dropdown.js';
import { ensurePendingItem } from './dropdown/pending-reconstructor.js';

export function initVehicleOptions() {
    const optCat = DOM.optVehicleCat();
    if (!optCat) return;

    // Initialize Category Dropdown
    initDropdown(optCat, Object.keys(vehicleData), (val) => {
        handleVehicleCatChange(val);
        updatePendingWithVehicleData();
    }, "Select Vehicle Category");

    // Initialize Type Dropdown (empty initially)
    const optType = DOM.optVehicleType();
    if (optType) {
        initDropdown(optType, [], (val) => {
            handleVehicleTypeChange(val);
            updatePendingWithVehicleData();
        }, "Select Type", { enableSearch: true, searchPlaceholder: "Type vehicle name here..." });
    }

    // Initialize Color Dropdown (static list)
    const optColor = DOM.optVehicleColor();
    if (optColor) {
        initDropdown(optColor, vehicleColors, (val) => {
            updatePendingWithVehicleData();
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

    updatePendingWithVehicleData(true);
}

function updatePendingWithVehicleData(clear = false) {
    const pendingItem = ensurePendingItem("Replace Background");

    if (pendingItem) {
        if (clear) {
            delete pendingItem.vehicleOptions;
        } else {
            const data = getVehicleOptionsValues();
            if (data) {
                pendingItem.vehicleOptions = data;
            }
        }
    }
}

export function checkVehicleVisibility() {
    // Strict Scope: Previously showed for "Replace Background", but now disabled as per requirement.
    // The "Optional: Add vehicle or objects" section should NOT appear for Replace Background.

    // We force it to be hidden always for now, or remove the condition.
    const container = DOM.vehicleOptionsContainer();
    if (container && !container.classList.contains('hidden')) {
        resetVehicleOptions();
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

    const types = vehicleData[category] || [];
    if (typeDropdown) {
        initDropdown(typeDropdown, types, (val) => {
            handleVehicleTypeChange(val);
            updatePendingWithVehicleData();
        }, "Select Type", { enableSearch: true, searchPlaceholder: "Type vehicle name here..." });
    }

    if (typeWrapper) typeWrapper.classList.remove('hidden');

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

    if (!cat) return null;

    return {
        category: cat,
        type: type,
        color: color
    };
}
