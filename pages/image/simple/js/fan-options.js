// Fan Moment Options Manager
import { DOM } from './dom.js';
import { fanMomentOptions } from '../brain/index.js';
import { initDropdown, setDropdownValue, getDropdownValue } from '../../shared/dropdown.js';

export function initFanOptions() {
    const optPlace = DOM.optPlace();
    const optOutfit = DOM.optOutfit();
    const optMood = DOM.optMood();
    const optFraming = DOM.optFraming();

    if (optPlace) initDropdown(optPlace, fanMomentOptions.places, null, "Select Place", { enableSearch: true, searchPlaceholder: "Type place..." });
    if (optOutfit) initDropdown(optOutfit, fanMomentOptions.outfits, null, "Select Outfit", { enableSearch: true, searchPlaceholder: "Type outfit..." });
    if (optMood) initDropdown(optMood, fanMomentOptions.moods, null, "Select Mood");
    if (optFraming) initDropdown(optFraming, fanMomentOptions.framing, null, "Medium Shot");
}

export function resetFanMomentOptions() {
    const container = DOM.fanOptionsContainer();
    if (!container) return;

    container.classList.add('hidden');
    if (DOM.optPlace()) setDropdownValue(DOM.optPlace(), "");
    if (DOM.optOutfit()) setDropdownValue(DOM.optOutfit(), "");
    if (DOM.optMood()) setDropdownValue(DOM.optMood(), "");
    if (DOM.optFraming()) setDropdownValue(DOM.optFraming(), "Medium Shot");
}

export function checkFanMomentVisibility(category, selections) {
    if (category === "Fan Moment" && selections.length >= 2) {
         const container = DOM.fanOptionsContainer();
         if (container) container.classList.remove('hidden');
    }
}

export function getFanOptionsValues() {
    const container = DOM.fanOptionsContainer();
    if (!container || container.classList.contains('hidden')) return null;

    return {
        place: getDropdownValue(DOM.optPlace()),
        outfit: getDropdownValue(DOM.optOutfit()),
        mood: getDropdownValue(DOM.optMood()),
        framing: getDropdownValue(DOM.optFraming())
    };
}
