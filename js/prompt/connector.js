// Main Prompt Routing Logic

import { currentMode } from '../ui/mode.js';
import { buildDefaultPrompt } from './default/promptBuilder.js';
import { getFallbackTemplate } from './fallbackTemplates.js';
import { categoriesData } from '../data/categories.js';

export function setupPromptGeneration(createBtn, promptOutput, rowsContainer, copyBtn, languageSelect) {
    if (!createBtn) return;

    createBtn.addEventListener('click', () => {
        const rows = rowsContainer.querySelectorAll('.builder-row');
        const language = languageSelect.value;
        let promptParts = [];

        rows.forEach(row => {
            const cat = row.querySelector('.category-select').value;
            const act = row.querySelector('.action-select').value;

            if (cat && act) {
                // Feature: Brain Language Mapping for Background -> Blur/Remove/Transparent/Studio (Default Mode)
                if (currentMode === 'default' &&
                   ((cat === 'Background' && (act === 'Blur' || act === 'Remove' || act === 'Replace' || act === 'Gradient' || act === 'Extend' || act === 'Outdoor' || act === 'Shadow Adjust' || act === 'Light Match' || act === 'Transparent' || act === 'Studio')) ||
                   (cat === 'Face' && (act === 'Skin Smooth' || act === 'Blemish Remove')) ||
                   (cat === 'Object / Subject' && (act === 'Remove Object' || act === 'Resize Subject')) ||
                   (cat === 'Color & Light' && (act === 'Brightness & Exposure' || act === 'Color Correction')))) {
                    const result = buildDefaultPrompt(row, cat, act);
                    if (result) promptParts.push(result);
                } else {
                    // Standard Logic for other categories or modes
                    const text = getFallbackTemplate(categoriesData, cat, act, language);
                    if (text) promptParts.push(text);
                }
            }
        });

        if (promptParts.length === 0) {
            promptOutput.textContent = "Please select at least one category and action.";
            promptOutput.style.color = "var(--footer-text)";
            if(copyBtn) copyBtn.classList.add('hidden');
        } else {
            promptOutput.textContent = promptParts.join("\n\n");
            promptOutput.style.color = "var(--text-color)";
            if(copyBtn) copyBtn.classList.remove('hidden');
        }
    });
}
