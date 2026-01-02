// Visual Guide Core System for Video
import { renderVisualGuide } from './renderer.js';
import { getVisualGuideData } from './data-connector.js';

export function createVisualGuide() {
    const container = document.createElement('div');
    container.className = 'visual-guide-container';
    container.id = 'video-visual-guide';

    const title = document.createElement('div');
    title.className = 'guide-title';
    title.textContent = 'Visual Guide';
    container.appendChild(title);

    const content = document.createElement('div');
    content.className = 'guide-grid'; // Use grid for the cards
    container.appendChild(content);

    // Initial render
    updateVisualGuide(container);

    return container;
}

export function updateVisualGuide(container, selectionData = {}) {
    if (!container) return;

    // In video, we might want to highlight selected items,
    // but the guide is primarily a "Reference" to help user select.
    // So we render all categories, and maybe highlight active ones if selectionData is passed.

    const data = getVisualGuideData(selectionData);
    renderVisualGuide(container, data);
}
