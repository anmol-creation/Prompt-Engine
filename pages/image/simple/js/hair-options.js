// Hair Options Manager
import { DOM } from './dom.js';
import { initDropdown, setDropdownValue, getDropdownValue } from '../../shared/dropdown.js';

const hairOptions = {
    lengths: ["Very Short", "Short", "Medium", "Long", "Very Long", "Bald"],
    types: ["Straight", "Wavy", "Curly", "Coily", "Afro", "Messy", "Slicked"],
    colors: ["Black", "Dark Brown", "Brown", "Light Brown", "Blonde", "Platinum Blonde", "Red", "Auburn", "Grey", "White", "Silver", "Dyed Green", "Dyed Blue", "Dyed Pink", "Dyed Purple"]
};

export function initHairOptions() {
    const optLength = DOM.optHairLength();
    const optType = DOM.optHairType();
    const optColor = DOM.optHairColor();

    if (optLength) initDropdown(optLength, hairOptions.lengths, null, "Select Length");
    if (optType) initDropdown(optType, hairOptions.types, null, "Select Type");
    if (optColor) initDropdown(optColor, hairOptions.colors, null, "Select Color");
}

export function resetHairOptions() {
    const container = DOM.hairOptionsContainer();
    if (!container) return;

    container.classList.add('hidden');
    if (DOM.optHairLength()) setDropdownValue(DOM.optHairLength(), "");
    if (DOM.optHairType()) setDropdownValue(DOM.optHairType(), "");
    if (DOM.optHairColor()) setDropdownValue(DOM.optHairColor(), "");
}

export function checkHairOptionsVisibility(category, selections) {
    // "Hair Style" is now at level 3: Customization -> Male -> Face -> Hair Style
    // selections[0] = Customization
    // selections[1] = Male
    // selections[2] = Face
    // selections[3] = Hair Style

    // Check if the current selection path leads to Hair Style
    if (selections.includes("Hair Style")) {
         const container = DOM.hairOptionsContainer();
         if (container) container.classList.remove('hidden');
    }
}

export function getHairOptionsValues() {
    const container = DOM.hairOptionsContainer();
    if (!container || container.classList.contains('hidden')) return null;

    const length = getDropdownValue(DOM.optHairLength());
    const type = getDropdownValue(DOM.optHairType());
    const color = getDropdownValue(DOM.optHairColor());

    // Only return object if at least one option is selected
    if (!length && !type && !color) return null;

    return {
        length: length,
        type: type,
        color: color
    };
}
