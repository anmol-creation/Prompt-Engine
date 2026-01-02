// Visual Guide Core System
import { renderVisualGuide } from './renderer.js';
import { getVisualGuideData } from './data-connector.js';

export function createVisualGuide() {
    const container = document.createElement('div');
    container.className = 'visual-guide-container';

    // Structural styles can be kept here or moved to CSS
    container.style.flexBasis = '100%';
    container.style.width = '100%';

    const title = document.createElement('div');
    title.className = 'guide-title';
    title.textContent = 'Visual Guide';
    container.appendChild(title);

    const content = document.createElement('div');
    content.className = 'guide-content';
    container.appendChild(content);

    return container;
}

export function updateVisualGuide(container, category, action, rowElement) {
    if (!container) return;

    const data = getVisualGuideData(category, action, rowElement);
    renderVisualGuide(container, data);
}
