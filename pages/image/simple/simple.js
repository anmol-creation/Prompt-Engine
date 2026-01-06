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
    const subCategoryDropdown3 = document.getElementById('simple-sub-category-3'); // Fourth level
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
    let selectedSubAction2 = null; // For 4th level
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
        selectedSubAction2 = null;
        clearPrompt();

        // Reset Sub Categories
        subCategoryDropdown.classList.add('hidden');
        if (subCategoryDropdown2) {
            subCategoryDropdown2.classList.add('hidden');
            subCategoryDropdown2.dataset.value = "";
            subCategoryDropdown2.dataset.customValue = "";
        }
        if (subCategoryDropdown3) {
            subCategoryDropdown3.classList.add('hidden');
            subCategoryDropdown3.dataset.value = "";
            subCategoryDropdown3.dataset.customValue = "";
        }
        resetDynamicInputs();

        // Populate Sub Category 1
        const subOptions = Object.keys(simpleBrainMap[category]);
        initDropdown(subCategoryDropdown, subOptions, (subAction) => {
            selectedAction = subAction;
            selectedSubAction = null;
            selectedSubAction2 = null;
            clearPrompt();

            // Reset deeper levels
            if (subCategoryDropdown3) subCategoryDropdown3.classList.add('hidden');

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
                        selectedSubAction2 = null;
                        clearPrompt();

                        // Check if THIS nested action is also a group (Level 3 -> 4)
                        let nestedData = actionData.options[nestedAction];
                        // If it's a custom typed value, we don't have object data immediately,
                        // but if it matches a key, we do.
                        // Assuming strict lists for group expansion.

                        // Handle potential custom value overriding list
                        if (!nestedData && actionData.customGenerator) {
                            // Custom value, no deeper levels
                            if (subCategoryDropdown3) subCategoryDropdown3.classList.add('hidden');
                        } else if (nestedData && nestedData.type === 'group') {
                            // Expand to Sub Category 3
                             if (subCategoryDropdown3) {
                                subCategoryDropdown3.classList.remove('hidden');
                                const deepOptions = Object.keys(nestedData.options);
                                const deepConfig = {
                                    enableSearch: nestedData.enableType || false,
                                    searchPlaceholder: nestedData.searchPlaceholder || "Type option..."
                                };

                                initDropdown(subCategoryDropdown3, deepOptions, (deepAction) => {
                                    selectedSubAction2 = deepAction;
                                    clearPrompt();
                                    handleSubActionSelection(category, subAction, nestedAction, deepAction);
                                    updateVisualGuide();
                                }, "Select Option", deepConfig);

                                // Auto open 4th level
                                setTimeout(() => {
                                    const trigger = subCategoryDropdown3.querySelector('.dropdown-trigger');
                                    if (trigger) trigger.click();
                                }, 100);
                             }
                        } else {
                            if (subCategoryDropdown3) subCategoryDropdown3.classList.add('hidden');
                            handleSubActionSelection(category, subAction, nestedAction, null);
                        }

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
                if (subCategoryDropdown3) subCategoryDropdown3.classList.add('hidden');
                handleSubActionSelection(category, subAction, null, null);
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

    function handleSubActionSelection(category, action, subAction, subAction2) {
        resetDynamicInputs();

        let actionData = simpleBrainMap[category][action];

        // Traverse level 2
        if (subAction && actionData.type === 'group') {
             if (actionData.options[subAction]) {
                 actionData = actionData.options[subAction];
             } else {
                 return; // Custom input
             }
        }

        // Traverse level 3
        if (subAction2 && actionData.type === 'group') {
             if (actionData.options[subAction2]) {
                 actionData = actionData.options[subAction2];
             } else {
                 return; // Custom input
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
             // Refresh values
             if (subCategoryDropdown2 && !subCategoryDropdown2.classList.contains('hidden')) {
                 selectedSubAction = getDropdownValue(subCategoryDropdown2);
             }
             if (subCategoryDropdown3 && !subCategoryDropdown3.classList.contains('hidden')) {
                 selectedSubAction2 = getDropdownValue(subCategoryDropdown3);
             }

             // Validation
             const actionData = simpleBrainMap[selectedCategory][selectedAction];
             if (actionData && actionData.type === 'group') {
                 if (!selectedSubAction) {
                     alert("Please select or type an option.");
                     return;
                 }
                 // Check deep nesting
                 let nestedData = actionData.options[selectedSubAction];
                 // If selectedSubAction is custom, nestedData is undefined, which is fine if logic handles it
                 // But if nestedData IS a group (like Role -> Marvel), we MUST have selectedSubAction2
                 if (nestedData && nestedData.type === 'group' && !selectedSubAction2) {
                     alert("Please select or type the final option.");
                     return;
                 }
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

        // L1 -> L2
        if (selectedSubAction && actionData.type === 'group') {
            if (actionData.options[selectedSubAction]) {
                 actionData = actionData.options[selectedSubAction];
            } else if (actionData.enableType && actionData.customGenerator) {
                 const customPrompt = actionData.customGenerator(selectedSubAction);
                 actionData = customPrompt;
            }
        }

        // L2 -> L3 (if applicable and actionData is still an object/group)
        if (selectedSubAction2 && typeof actionData === 'object' && actionData.type === 'group') {
            if (actionData.options[selectedSubAction2]) {
                actionData = actionData.options[selectedSubAction2];
            } else if (actionData.enableType && actionData.customGenerator) {
                const customPrompt = actionData.customGenerator(selectedSubAction2);
                actionData = customPrompt;
            }
        }

        let promptText = "";

        if (typeof actionData === 'string') {
            promptText = actionData;
        } else if (typeof actionData === 'object') {
            if (actionData.type === 'static' || actionData.type === 'group') {
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

        let currentSub = selectedSubAction;
        if (subCategoryDropdown2 && !subCategoryDropdown2.classList.contains('hidden')) {
             currentSub = getDropdownValue(subCategoryDropdown2);
        }

        // We probably should pass deep selection too, but simple visual guide logic might need update.
        // For now, passing the deepest valid selection helps.
        let deepSub = selectedSubAction2;
         if (subCategoryDropdown3 && !subCategoryDropdown3.classList.contains('hidden')) {
             deepSub = getDropdownValue(subCategoryDropdown3);
        }

        const effectiveAction = deepSub || currentSub || selectedAction;

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
