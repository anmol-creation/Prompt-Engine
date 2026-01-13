// Mustache Options Manager
import { DOM } from './dom.js';
import { initDropdown, setDropdownValue, getDropdownValue } from '../../shared/dropdown.js';

const mustacheOptions = {
    colors: ["Black", "Dark Brown", "Brown", "Light Brown", "Grey", "White", "Salt & Pepper", "Fashion Colors"]
};

export function initMustacheOptions() {
    const optColor = DOM.optMustacheColor();

    if (optColor) initDropdown(optColor, mustacheOptions.colors, null, "Select Color");
}

export function resetMustacheOptions() {
    const container = DOM.mustacheOptionsContainer();
    if (!container) return;

    container.classList.add('hidden');
    if (DOM.optMustacheColor()) setDropdownValue(DOM.optMustacheColor(), "");
}

export function checkMustacheOptionsVisibility(category, selections) {
    // "Mustache Style" is at level 3: Customization -> Male -> Face -> Mustache Style
    if (selections.includes("Mustache Style")) {
         const container = DOM.mustacheOptionsContainer();
         if (container) container.classList.remove('hidden');
    }
}

export function getMustacheOptionsValues() {
    const container = DOM.mustacheOptionsContainer();
    if (!container || container.classList.contains('hidden')) return null;

    const color = getDropdownValue(DOM.optMustacheColor());

    if (!color) return null;

    return {
        color: color
    };
}
