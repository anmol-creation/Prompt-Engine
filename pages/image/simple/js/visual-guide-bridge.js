// Visual Guide Bridge
import { DOM } from './dom.js';
import { State } from './state.js';
import { renderVisualGuide } from '../../default/js/visual-guide/renderer.js';
import { getSimpleVisualGuideData } from '../simple-visual-guide.js';

export function updateVisualGuide() {
    const container = DOM.visualGuideContainer();
    if (!container) return;

    const lastSelection = State.getLastSelection();
    if (!lastSelection) {
        container.classList.add('hidden');
        return;
    }

    const data = getSimpleVisualGuideData(State.selectedCategory, lastSelection);
    renderVisualGuide(container, data);
    container.classList.remove('hidden');
}
