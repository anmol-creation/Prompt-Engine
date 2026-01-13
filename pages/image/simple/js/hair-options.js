// Hair Options Manager
import { DOM } from './dom.js';
import { State } from './state.js';
import { initDropdown, setDropdownValue, getDropdownValue } from '../../shared/dropdown.js';

const hairLengths = ["Short", "Medium", "Long", "Bald", "Buzz Cut"];
const hairTypes = ["Straight", "Wavy", "Curly", "Coily", "Afro"];
const hairColors = ["Black", "Brown", "Blonde", "Red", "Grey", "White", "Dyed"];

export function initHairOptions() {
    const optLength = DOM.optHairLength();
    const optType = DOM.optHairType();
    const optColor = DOM.optHairColor();

    if (optLength) {
        initDropdown(optLength, hairLengths, () => updateStackWithHairData(), "Select Length");
    }
    if (optType) {
        initDropdown(optType, hairTypes, () => updateStackWithHairData(), "Select Type");
    }
    if (optColor) {
        initDropdown(optColor, hairColors, () => updateStackWithHairData(), "Select Color");
    }
}

export function resetHairOptions() {
    const container = DOM.hairOptionsContainer();
    if (!container) return;

    container.classList.add('hidden');

    if (DOM.optHairLength()) setDropdownValue(DOM.optHairLength(), "");
    if (DOM.optHairType()) setDropdownValue(DOM.optHairType(), "");
    if (DOM.optHairColor()) setDropdownValue(DOM.optHairColor(), "");

    updateStackWithHairData(true);
}

function updateStackWithHairData(clear = false) {
    if (clear) {
        State.updateStackItem("Hair Style", { hairOptions: null });
        return;
    }

    const val = getHairOptionsValues();
    if (val) {
        State.updateStackItem("Hair Style", { hairOptions: val });
    }
}

export function checkHairOptionsVisibility() {
    // Path: Customization -> Male -> Face -> Hair Style -> [Option]
    // Selections logic:
    // 0: Customization
    // 1: Male (or similar)
    // 2: Face
    // 3: Hair Style
    // 4: [Option]

    const selections = State.getAllSelections();
    let isCorrectScope = false;

    if (selections.length > 4 && selections[3] === "Hair Style") {
        isCorrectScope = true;
    }

    const container = DOM.hairOptionsContainer();
    if (container) {
        if (isCorrectScope) {
            container.classList.remove('hidden');
        } else {
            if (!container.classList.contains('hidden')) {
                resetHairOptions();
            }
        }
    }
}

export function getHairOptionsValues() {
    const container = DOM.hairOptionsContainer();
    if (!container || container.classList.contains('hidden')) return null;

    const length = getDropdownValue(DOM.optHairLength());
    const type = getDropdownValue(DOM.optHairType());
    const color = getDropdownValue(DOM.optHairColor());

    // Only return object if at least one value is selected
    if (!length && !type && !color) return null;

    return {
        length: length,
        type: type,
        color: color
    };
}
