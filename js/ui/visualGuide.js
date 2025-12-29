// Visual Guide Logic

import { categoriesData } from '../data/categories.js';
import { BLUR_DEFAULT_SETTINGS, REMOVE_DEFAULT_SETTINGS } from '../data/uiMeta.js';
import { currentMode } from './mode.js';

export function createVisualGuide() {
    const container = document.createElement('div');
    container.className = 'visual-guide-container';
    // Inline styles moved to CSS class, but ensuring structural properties here
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
    const content = container.querySelector('.guide-content');
    if (!content) return;

    let html = '';

    // --- Level 1: Categories ---
    const categories = ["Background", "Face", "Object / Subject", "Color & Light", "Style", "Quality"];
    html += '<div class="guide-list-box">';
    categories.forEach(cat => {
        const isSelected = cat === category;
        const opacity = isSelected ? '1' : '0.4';
        const color = isSelected ? 'var(--primary-color)' : 'var(--text-color)';
        const weight = isSelected ? '700' : '400';
        html += `<span style="opacity: ${opacity}; color: ${color}; font-weight: ${weight}; transition: all 0.2s;">${cat}</span>`;
    });
    html += '</div>';

    // --- Level 2: Actions ---
    if (category === 'Background' && categoriesData["Background"]) {
        html += '<div class="guide-list-box">';
        categoriesData["Background"].actions.forEach(act => {
            const isSelected = act === action;
            const opacity = isSelected ? '1' : '0.4';
            const color = isSelected ? 'var(--primary-color)' : 'var(--text-color)';
            const weight = isSelected ? '700' : '400';
            html += `<span style="opacity: ${opacity}; color: ${color}; font-weight: ${weight}; transition: all 0.2s;">${act}</span>`;
        });
        html += '</div>';
    } else if (category && action) {
         // For non-Background categories
         html += `<div class="guide-list-box">`;
         html += `<span style="opacity: 1; color: var(--primary-color); font-weight: 700;">${action}</span>`;
         html += `</div>`;
    }

    // --- Level 3: Settings (Default Mode + Background + Blur/Remove) ---
    if (category === 'Background' && (action === 'Blur' || action === 'Remove') && currentMode === 'default') {
         html += '<div class="guide-list-box">';

         let settingsToUse = [];
         if (action === 'Blur') settingsToUse = BLUR_DEFAULT_SETTINGS;
         else if (action === 'Remove') settingsToUse = REMOVE_DEFAULT_SETTINGS;

         settingsToUse.forEach(setting => {
             let settingHtml = `<div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;"><span style="font-weight: 600; font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.5px;">${setting.label}</span>`;
             settingHtml += `<div style="display: flex; gap: 4px; flex-wrap: wrap;">`;

             // Get current value
             let currentVal = setting.val; // default
             if (rowElement) {
                 const input = rowElement.querySelector(`.${setting.class}`);
                 if (input) {
                     currentVal = input.value;
                 }
             }
             // Normalizing types
             if (setting.type === 'slider') currentVal = parseInt(currentVal);

             if (setting.type === 'slider') {
                 // Display range numbers
                 for (let i = setting.min; i <= setting.max; i++) {
                     const isMatch = i == currentVal;
                     const weight = isMatch ? '700' : '400';
                     const opacity = isMatch ? '1' : '0.3';
                     const color = isMatch ? 'var(--primary-color)' : 'var(--text-color)';
                     settingHtml += `<span style="font-weight: ${weight}; opacity: ${opacity}; color: ${color}; font-size: 0.9em;">${i}</span>`;
                 }
             } else if (setting.type === 'select') {
                 setting.options.forEach(opt => {
                     const isMatch = opt == currentVal;
                     const weight = isMatch ? '700' : '400';
                     const opacity = isMatch ? '1' : '0.3';
                     const color = isMatch ? 'var(--primary-color)' : 'var(--text-color)';
                     settingHtml += `<span style="font-weight: ${weight}; opacity: ${opacity}; color: ${color}; font-size: 0.9em;">${opt}</span>`;
                 });
             }
             settingHtml += `</div></div>`;
             html += settingHtml;
         });

         html += '</div>';
    }

    content.innerHTML = html;
}
