// Beard Options Manager
import { DOM } from './dom.js';
import { State } from './state.js';
import { initDropdown, setDropdownValue, getDropdownValue } from '../../shared/dropdown.js';

const beardColors = [
    "Black",
    "Dark Brown",
    "Brown",
    "Light Brown",
    "Grey",
    "White",
    "Salt & Pepper",
    "Fashion Colors"
];

export function initBeardOptions() {
    const optColor = DOM.optBeardColor();
    if (!optColor) return;

    initDropdown(optColor, beardColors, (val) => {
        updateStackWithBeardData();
    }, "Select Color");
}

export function resetBeardOptions() {
    const container = DOM.beardOptionsContainer();
    if (!container) return;

    container.classList.add('hidden');
    const optColor = DOM.optBeardColor();
    if (optColor) setDropdownValue(optColor, "");

    // Clear from stack
    updateStackWithBeardData(true);
}

function updateStackWithBeardData(clear = false) {
    if (clear) {
        State.updateStackItem("Beard Style", { beardColor: null });
        return;
    }

    const val = getBeardOptionsValues();
    if (val) {
        State.updateStackItem("Beard Style", { beardColor: val });
    }
}

export function checkBeardVisibility() {
    // Path: Customization -> Male -> Face -> Beard Style -> [Option]
    // Level 0: Customization
    // Level 1: Male
    // Level 2: Face
    // Level 3: Beard Style
    // Level 4: [Option] (Leaf)

    let isCorrectScope = false;
    const selections = State.getAllSelections();

    // Check if "Beard Style" is in the selections at the expected level
    // selections[3] should be "Beard Style"
    // And we must have selected a leaf (selections.length > 4)
    // Or if checking active stack item is better?
    // Using selections is consistent with other checks.

    if (selections.length > 4 && selections[3] === "Beard Style") {
        isCorrectScope = true;
    }

    const container = DOM.beardOptionsContainer();
    if (container) {
        if (isCorrectScope) {
            container.classList.remove('hidden');
        } else {
            if (!container.classList.contains('hidden')) {
                resetBeardOptions();
            }
        }
    }
}

export function getBeardOptionsValues() {
    const container = DOM.beardOptionsContainer();
    if (!container || container.classList.contains('hidden')) return null;

    return getDropdownValue(DOM.optBeardColor());
}
