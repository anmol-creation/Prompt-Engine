// Initialization
import { initMainCategory } from './dropdown-manager.js';
import { initEvents } from './events.js';
import { initFanOptions } from './fan-options.js';
import { initVehicleOptions } from './vehicle-options.js';
import { initHairOptions } from './hair-options.js';
import { initMustacheOptions } from './mustache-options.js';
import { DOM } from './dom.js';
import { initDropdown } from '../../shared/dropdown.js';

export function initSimpleMode() {
    console.log("Initializing Simple Mode (Refactored)");
    initMainCategory();
    initFanOptions();
    initVehicleOptions();
    initHairOptions();
    initMustacheOptions();
    initEvents();

    const langDrop = DOM.languageSelect();
    if (langDrop) {
        initDropdown(langDrop, ["English", "Hindi", "Hinglish"], (val) => {}, "English");
        const trigger = langDrop.querySelector('.selected-text');
        if(trigger) trigger.textContent = "English";
    }
}
