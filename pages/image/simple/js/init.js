// Initialization
import { initMainCategory } from './dropdown-manager.js';
import { initEvents } from './events.js';
import { initFanOptions } from './fan-options.js';
import { initVehicleOptions } from './vehicle-options.js';
import { initBeardOptions } from './beard-options.js';
import { initHairOptions } from './hair-options.js';
import { initMustacheOptions } from './mustache-options.js';
import { DOM } from './dom.js';
import { initDropdown } from '../../shared/dropdown.js';

export function initSimpleMode() {
    console.log("Initializing Simple Mode (Refactored)");
    try {
        initMainCategory();
        initFanOptions();
        initVehicleOptions();
        initBeardOptions();
        initHairOptions();
        initMustacheOptions();
        initEvents();

        const langDrop = DOM.languageSelect();
        if (langDrop) {
            initDropdown(langDrop, ["English", "Hindi", "Hinglish"], (val) => {}, "English");
            const trigger = langDrop.querySelector('.selected-text');
            if(trigger) trigger.textContent = "English";
        }
    } catch (e) {
        console.error("CRITICAL: Failed to initialize Simple Mode components.", e);
        // We can throw further or let the UI stay partially loaded.
        // Throwing allows the root loader to show the error message.
        throw e;
    }
}
