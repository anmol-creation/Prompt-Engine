import { initMainCategory } from './dropdown-manager.js';
import { initEvents } from './events.js';
import { initVisualGuide } from './visual-guide/index.js';
import { DOM } from './dom.js';
import { initDropdown } from '../../shared/dropdown.js';

export function initSimpleMode() {
    console.log("Initializing Web Development Simple Mode");
    try {
        initMainCategory();
        initVisualGuide();
        initEvents();

        const langDrop = DOM.languageSelect();
        if (langDrop) {
            initDropdown(langDrop, ["English", "Hindi", "Hinglish"], (val) => {}, "English");
            const trigger = langDrop.querySelector('.selected-text');
            if(trigger) trigger.textContent = "English";
        }
    } catch (e) {
        console.error("CRITICAL: Failed to initialize Simple Mode components.", e);
        throw e;
    }
}
