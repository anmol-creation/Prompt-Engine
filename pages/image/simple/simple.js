// Simple Mode Logic
import { simpleBrainMap } from './simple.brain.map.js';
import { initDropdown, getDropdownValue } from '../shared/dropdown.js';
import { renderVisualGuide } from '../default/js/visual-guide/renderer.js';
import { getSimpleVisualGuideData } from './simple-visual-guide.js';

export function initSimpleMode() {
    console.log("Initializing Simple Mode (Aligned Version)");

    const mainCategoryDropdown = document.getElementById('simple-main-category');
    const subCategoryDropdown = document.getElementById('simple-sub-category');
    const languageDropdown = document.getElementById('simple-language-select');

    const outputContainer = document.getElementById('simple-output-container'); // .output-area
    const finalPrompt = document.getElementById('simple-final-prompt');
    const copyBtn = document.getElementById('simple-copy-btn');
    const createBtn = document.getElementById('simple-create-btn');
    const visualGuideContainer = document.getElementById('simple-visual-guide-container');

    // State
    let selectedCategory = null;
    let selectedAction = null;
    let selectedLanguage = "English";

    // Setup Visual Guide
    // Create structure if empty (it is empty div in HTML)
    if (visualGuideContainer) {
        visualGuideContainer.innerHTML = `
            <div class="guide-title">Visual Guide</div>
            <div class="guide-content"></div>
        `;
        // Initial Render
        updateVisualGuide();
    }

    // Initialize Language Dropdown
    initDropdown(languageDropdown, ["English", "Hindi", "Hinglish"], (val) => {
        selectedLanguage = val;
    }, "English");
    // Set default value manually to update UI
    const langTrigger = languageDropdown.querySelector('.selected-text');
    if(langTrigger) langTrigger.textContent = "English";
    languageDropdown.dataset.value = "English";


    // Initialize Main Categories
    const categories = Object.keys(simpleBrainMap);
    initDropdown(mainCategoryDropdown, categories, (category) => {
        selectedCategory = category;
        selectedAction = null;

        // Reset Sub Category
        subCategoryDropdown.classList.add('hidden');

        // Populate Sub Category
        const subOptions = Object.keys(simpleBrainMap[category]);
        initDropdown(subCategoryDropdown, subOptions, (subAction) => {
            selectedAction = subAction;
            updateVisualGuide();
        }, "Select Option");

        // Show Sub Category
        subCategoryDropdown.classList.remove('hidden');

        // Auto-open logic (mimic inline expansion flow)
        // Wait a tick for UI update
        setTimeout(() => {
            const trigger = subCategoryDropdown.querySelector('.dropdown-trigger');
            if (trigger) trigger.click();
        }, 100);

        updateVisualGuide();
    }, "Select Category");


    // Create Prompt Button
    createBtn.addEventListener('click', () => {
        if (selectedCategory && selectedAction) {
            generatePrompt();
        } else {
            // Shake button or show error?
            createBtn.style.transform = "translateX(5px)";
            setTimeout(() => createBtn.style.transform = "translateX(0)", 100);
            alert("Please select a category and option first.");
        }
    });

    function generatePrompt() {
        let promptText = simpleBrainMap[selectedCategory][selectedAction];

        // Basic language suffix logic (Placeholder logic as real logic is in Brain)
        // Simple Mode map keys are English.
        // If Hindi/Hinglish, we assume backend/brain handles translation.
        // Since "Brain mapping, prompt generation logic mein koi बदलाव नहीं", we stick to what we have.
        // Simple Mode map values are English strings.
        // If user selects Hindi, we should probably append a instruction or if the simple map supports it?
        // Memory says: "Prompt generation is simulated client-side... predefined templates (supporting English, Hindi, and Hinglish)".
        // `simple.brain.map.js` only has English strings.
        // I will just append " [Language: ${selectedLanguage}]" if not English, or leave as is if no translation data available.
        // The prompt says "Same logic reuse". Default mode uses `buildDefaultPrompt` which handles language.
        // Simple Mode uses `simpleBrainMap`.
        // I will just output the English text for now to avoid inventing new features/translations not present.

        if (selectedLanguage !== "English") {
            // Simulate language instruction if not mapped
            // promptText += ` (Output in ${selectedLanguage})`;
        }

        finalPrompt.textContent = promptText;
        copyBtn.classList.remove('hidden');

        // Visual Guide should be visible (it is, since we update it)
        visualGuideContainer.classList.remove('hidden');
    }

    function updateVisualGuide() {
        if (!visualGuideContainer) return;
        const data = getSimpleVisualGuideData(selectedCategory, selectedAction);
        renderVisualGuide(visualGuideContainer, data);
        visualGuideContainer.classList.remove('hidden');
    }

    // Copy Button
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(finalPrompt.textContent).then(() => {
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                setTimeout(() => copyBtn.textContent = originalText, 2000);
            });
        });
    }
}
