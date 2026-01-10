// Initialization
import { initMainCategory } from './dropdown-manager.js';
import { initEvents } from './events.js';
import { initFanOptions } from './fan-options.js';
import { DOM } from './dom.js';
import { initDropdown } from '../../shared/dropdown.js';
import { renderSentenceBuilder } from './inputs.js';

export function initSimpleMode() {
    console.log("Initializing Simple Mode (Refactored)");
    initMainCategory();
    initFanOptions();
    initEvents();

    const langDrop = DOM.languageSelect();
    if (langDrop) {
        initDropdown(langDrop, ["English", "Hindi", "Hinglish"], (val) => {}, "English");
        const trigger = langDrop.querySelector('.selected-text');
        if(trigger) trigger.textContent = "English";
    }

    // Ensure the sentence builder is rendered initially (e.g. "I want to...")
    renderSentenceBuilder();
}
