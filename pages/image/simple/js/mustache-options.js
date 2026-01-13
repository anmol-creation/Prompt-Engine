// Mustache Options Manager
import { DOM } from './dom.js';
import { State } from './state.js';
import { initDropdown, setDropdownValue, getDropdownValue } from '../../shared/dropdown.js';

const mustacheColors = ["Black", "Brown", "Blonde", "Red", "Grey", "White"];

export function initMustacheOptions() {
    const optColor = DOM.optMustacheColor();
    if (!optColor) return;

    initDropdown(optColor, mustacheColors, () => updateStackWithMustacheData(), "Select Color");
}

export function resetMustacheOptions() {
    const container = DOM.mustacheOptionsContainer();
    if (!container) return;

    container.classList.add('hidden');

    if (DOM.optMustacheColor()) setDropdownValue(DOM.optMustacheColor(), "");

    updateStackWithMustacheData(true);
}

function updateStackWithMustacheData(clear = false) {
    if (clear) {
        State.updateStackItem("Mustache Style", { mustacheColor: null });
        return;
    }

    const val = getMustacheOptionsValues();
    if (val) {
        State.updateStackItem("Mustache Style", { mustacheColor: val });
    }
}

export function checkMustacheOptionsVisibility() {
    // Path: Customization -> Male -> Face -> Mustache Style -> [Option]

    const selections = State.getAllSelections();
    let isCorrectScope = false;

    if (selections.length > 4 && selections[3] === "Mustache Style") {
        isCorrectScope = true;
    }

    const container = DOM.mustacheOptionsContainer();
    if (container) {
        if (isCorrectScope) {
            container.classList.remove('hidden');
        } else {
            if (!container.classList.contains('hidden')) {
                resetMustacheOptions();
            }
        }
    }
}

export function getMustacheOptionsValues() {
    const container = DOM.mustacheOptionsContainer();
    if (!container || container.classList.contains('hidden')) return null;

    return getDropdownValue(DOM.optMustacheColor());
}
