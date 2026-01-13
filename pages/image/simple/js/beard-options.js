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
        updatePendingWithBeardData();
    }, "Select Color");
}

export function resetBeardOptions() {
    const container = DOM.beardOptionsContainer();
    if (!container) return;

    container.classList.add('hidden');
    const optColor = DOM.optBeardColor();
    if (optColor) setDropdownValue(optColor, "");

    updatePendingWithBeardData(true);
}

function updatePendingWithBeardData(clear = false) {
    const pendingItem = State.getPendingChange();
    if (pendingItem && pendingItem.category === "Beard Style") {
        if (clear) {
            delete pendingItem.beardColor;
        } else {
            const val = getBeardOptionsValues();
            if (val) {
                pendingItem.beardColor = val;
                const addBtn = document.getElementById('simple-add-btn');
                if (addBtn) addBtn.classList.remove('hidden');
            }
        }
    }
}

export function checkBeardVisibility() {
    let isCorrectScope = false;
    const selections = State.getAllSelections();

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
