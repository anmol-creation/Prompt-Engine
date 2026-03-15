// Initialization
import { initMainCategory } from './dropdown-manager.js';
import { initEvents } from './events.js';
// Removed specific image option initializers for video mode
import { DOM } from './dom.js';
import { initDropdown } from '../../shared/dropdown.js';

export function initSimpleMode() {
    console.log("Initializing Video Simple Mode (Refactored)");
    try {
        initMainCategory();
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
