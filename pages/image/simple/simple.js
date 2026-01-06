// Simple Mode Logic
import { simpleBrainMap } from './simple.brain.map.js';
import { initDropdown, getDropdownValue } from '../shared/dropdown.js';
import { renderVisualGuide } from '../default/js/visual-guide/renderer.js';
import { getSimpleVisualGuideData } from './simple-visual-guide.js';

export function initSimpleMode() {
    console.log("Initializing Simple Mode (Aligned Version)");

    const mainCategoryDropdown = document.getElementById('simple-main-category');
    const subCategoryDropdown = document.getElementById('simple-sub-category');
    const subCategoryDropdown2 = document.getElementById('simple-sub-category-2'); // Third level
    const languageDropdown = document.getElementById('simple-language-select');

    const outputContainer = document.getElementById('simple-output-container'); // .output-area
    const finalPrompt = document.getElementById('simple-final-prompt');
    const copyBtn = document.getElementById('simple-copy-btn');
    const createBtn = document.getElementById('simple-create-btn');
    const visualGuideContainer = document.getElementById('simple-visual-guide-container');

    // State
    let selectedCategory = null;
    let selectedAction = null;
    let selectedSubAction = null; // For 3rd level
    let selectedLanguage = "English";

    // Setup Visual Guide
    if (visualGuideContainer) {
        visualGuideContainer.innerHTML = `
            <div class="guide-title">Visual Guide</div>
            <div class="guide-content"></div>
        `;
        updateVisualGuide();
    }

    // Initialize Language Dropdown
    initDropdown(languageDropdown, ["English", "Hindi", "Hinglish"], (val) => {
        selectedLanguage = val;
    }, "English");
    const langTrigger = languageDropdown.querySelector('.selected-text');
    if(langTrigger) langTrigger.textContent = "English";
    languageDropdown.dataset.value = "English";


    function clearPrompt() {
        if (finalPrompt) finalPrompt.textContent = "Your generated prompt will appear here...";
        if (copyBtn) copyBtn.classList.add('hidden');
        if (visualGuideContainer) visualGuideContainer.classList.add('hidden');
    }

    // Initialize Main Categories
    const categories = Object.keys(simpleBrainMap);
    initDropdown(mainCategoryDropdown, categories, (category) => {
        selectedCategory = category;
        selectedAction = null;
        selectedSubAction = null;
        clearPrompt();

        // Reset Sub Categories
        subCategoryDropdown.classList.add('hidden');
        if (subCategoryDropdown2) {
            subCategoryDropdown2.classList.add('hidden');
            // Clear previous config/state
            subCategoryDropdown2.dataset.value = "";
            subCategoryDropdown2.dataset.customValue = "";
        }
        resetDynamicInputs();

        // Populate Sub Category 1
        const subOptions = Object.keys(simpleBrainMap[category]);
        initDropdown(subCategoryDropdown, subOptions, (subAction) => {
            selectedAction = subAction;
            selectedSubAction = null;
            clearPrompt();

            // Check if this action has children (is a group)
            const actionData = simpleBrainMap[category][subAction];

            if (actionData && actionData.type === 'group') {
                // Show Sub Category 2
                if (subCategoryDropdown2) {
                    subCategoryDropdown2.classList.remove('hidden');
                    const nestedOptions = Object.keys(actionData.options);

                    // Check for Universal Type configuration
                    const dropdownConfig = {
                        enableSearch: actionData.enableType || false,
                        searchPlaceholder: actionData.searchPlaceholder || "Type option..."
                    };

                    initDropdown(subCategoryDropdown2, nestedOptions, (nestedAction) => {
                        selectedSubAction = nestedAction;
                        clearPrompt();
                        handleSubActionSelection(category, subAction, nestedAction);
                        updateVisualGuide();
                    }, "Select Option", dropdownConfig);

                    // Auto open 3rd level
                     setTimeout(() => {
                        const trigger = subCategoryDropdown2.querySelector('.dropdown-trigger');
                        if (trigger) trigger.click();
                    }, 100);
                }
                resetDynamicInputs(); // Hide inputs until final selection
            } else {
                // It's a leaf node
                if (subCategoryDropdown2) subCategoryDropdown2.classList.add('hidden');
                handleSubActionSelection(category, subAction, null);
            }

            updateVisualGuide();
        }, "Select Option");

        // Show Sub Category
        subCategoryDropdown.classList.remove('hidden');

        // Auto-open logic
        setTimeout(() => {
            const trigger = subCategoryDropdown.querySelector('.dropdown-trigger');
            if (trigger) trigger.click();
        }, 100);

        updateVisualGuide();
    }, "Select Category");

    // Dynamic Input Elements
    const dynamicInputsContainer = document.getElementById('simple-dynamic-inputs');
    const textInput = document.getElementById('simple-text-input');
    const fileWrapper = document.getElementById('simple-file-wrapper');
    const fileInput = document.getElementById('simple-file-input');
    const fileNameDisplay = document.getElementById('simple-file-name');

    // Handle File Input Change
    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                fileNameDisplay.textContent = e.target.files[0].name;
            } else {
                fileNameDisplay.textContent = "";
            }
        });
    }

    function resetDynamicInputs() {
        dynamicInputsContainer.classList.add('hidden');
        textInput.classList.add('hidden');
        fileWrapper.classList.add('hidden');
    }

    function handleSubActionSelection(category, action, subAction) {
        resetDynamicInputs();

        let actionData = simpleBrainMap[category][action];

        // Traverse if nested
        // Handle custom value in subAction
        if (subAction && actionData.type === 'group') {
             if (actionData.options[subAction]) {
                 actionData = actionData.options[subAction];
             } else {
                 // It's a custom value, we don't need to show dynamic inputs usually
                 // because the input IS the dropdown search box.
                 // Unless the specific option (Type Custom) was selected, but we removed that in favor of universal type.
                 return;
             }
        }

        if (actionData && typeof actionData === 'object') {
            if (actionData.type === 'input') {
                dynamicInputsContainer.classList.remove('hidden');
                textInput.classList.remove('hidden');
                textInput.placeholder = actionData.placeholder || "Type here...";
                textInput.value = ""; // Clear previous value
                textInput.focus();
            } else if (actionData.type === 'file') {
                dynamicInputsContainer.classList.remove('hidden');
                fileWrapper.classList.remove('hidden');
                fileNameDisplay.textContent = ""; // Clear previous file name
                fileInput.value = ""; // Clear previous file
            }
            // Note: 'static' types don't need inputs
        }
    }


    // AUTO_QUALITY_ENHANCEMENT_LAYER (Universal Quality Rule)
    const AUTO_QUALITY_PROMPT = `

Apply ultra-high quality rendering as a default baseline.

Ensure maximum clarity, sharpness, and detail density
while maintaining realism.

Use photorealistic camera-level rendering:
- crisp edges
- clear facial features
- visible skin and fabric texture
- no artificial smoothing
- no painterly or cinematic blur
- no diffusion haze

The subject must appear sharp and well-defined,
with natural depth and realistic optics.

Preserve identity, proportions, and structure exactly.
Enhance fine details without altering facial features.

Render as a high-end professional camera capture
with natural sharpness and clean detail,
avoiding any AI-generated softness.

This quality enhancement applies only when
the user has not manually adjusted texture,
detail, sharpness, or quality settings.`;

    // Create Prompt Button
    createBtn.addEventListener('click', () => {
        if (selectedCategory && selectedAction) {
             // Refresh selectedSubAction from dropdown value just in case user typed but didn't hit Enter
             if (subCategoryDropdown2 && !subCategoryDropdown2.classList.contains('hidden')) {
                 selectedSubAction = getDropdownValue(subCategoryDropdown2);
             }

             // Check if we need 3rd level selection
             const actionData = simpleBrainMap[selectedCategory][selectedAction];
             if (actionData && actionData.type === 'group' && !selectedSubAction) {
                 alert("Please select or type an option.");
                 return;
             }
            generatePrompt();
        } else {
            createBtn.style.transform = "translateX(5px)";
            setTimeout(() => createBtn.style.transform = "translateX(0)", 100);
            alert("Please select a category and option first.");
        }
    });

    function generatePrompt() {
        let actionData = simpleBrainMap[selectedCategory][selectedAction];

        if (selectedSubAction && actionData.type === 'group') {
            // Check if selectedSubAction matches a defined option
            if (actionData.options[selectedSubAction]) {
                 actionData = actionData.options[selectedSubAction];
            } else if (actionData.enableType && actionData.customGenerator) {
                 // It's a custom typed value
                 // Use the custom generator
                 const customPrompt = actionData.customGenerator(selectedSubAction);
                 actionData = customPrompt; // Treat as string result
            }
        }

        let promptText = "";

        if (typeof actionData === 'string') {
            promptText = actionData;
        } else if (typeof actionData === 'object') {
            if (actionData.type === 'static' || actionData.type === 'group') {
                // Group type shouldn't happen here if logic is correct, but 'static' does
                promptText = actionData.prompt;
            } else if (actionData.type === 'input') {
                const userText = textInput.value;
                if (!userText.trim()) {
                     alert("Please enter text.");
                     return;
                }
                if (actionData.generator) {
                    promptText = actionData.generator(userText);
                } else {
                    promptText = userText;
                }
            } else if (actionData.type === 'file') {
                 // Logic for file type (if we kept it, but we removed it for 'Custom Image' mostly)
                promptText = actionData.prompt;
            }
        }

        // Apply Universal Quality Rule (Simple Mode always ON)
        promptText += AUTO_QUALITY_PROMPT;

        if (selectedLanguage !== "English") {
            // Simulate language instruction
        }

        finalPrompt.textContent = promptText;
        copyBtn.classList.remove('hidden');
        visualGuideContainer.classList.remove('hidden');
    }

    function updateVisualGuide() {
        if (!visualGuideContainer) return;

        // Refresh selectedSubAction from dropdown value if needed
        let currentSub = selectedSubAction;
        if (subCategoryDropdown2 && !subCategoryDropdown2.classList.contains('hidden')) {
             currentSub = getDropdownValue(subCategoryDropdown2);
        }

        // visual guide might need update to handle 3 levels or just flatten it visually
        // For simplicity, passing selectedAction or selectedSubAction as the 'Action'
        const effectiveAction = currentSub ? currentSub : selectedAction;

        // Note: effectiveAction might be a custom string now.
        // getSimpleVisualGuideData needs to handle that or fallback gracefully.

        const data = getSimpleVisualGuideData(selectedCategory, effectiveAction);
        renderVisualGuide(visualGuideContainer, data);
        visualGuideContainer.classList.remove('hidden');
    }

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
