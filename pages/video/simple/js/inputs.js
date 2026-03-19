// Dynamic Inputs Manager
import { DOM } from './dom.js';
import { PlaceholderAnimator } from './animator.js';

let currentAnimator = null;

export function resetDynamicInputs() {
    const container = DOM.dynamicInputsContainer();
    const textInput = DOM.textInput();
    const fileWrapper = DOM.fileUploadWrapper();
    const fileInput = DOM.fileInput();
    const fileName = DOM.fileNameDisplay();

    if (container) container.classList.add('hidden');
    if (textInput) {
        textInput.classList.add('hidden');
        if (currentAnimator) {
            currentAnimator.stop();
            currentAnimator = null;
        }
    }

    if (fileWrapper) fileWrapper.classList.add('hidden');
    if (fileInput) fileInput.value = "";
    if (fileName) fileName.textContent = "No file chosen";
}

export function handleDynamicInputs(dataNode) {
    if (!dataNode) return;

    const container = DOM.dynamicInputsContainer();
    const textInput = DOM.textInput();

    // Check for 'option' type with 'enableType' flag (Standardized format)
    // Also support legacy 'input' type just in case, though we migrated away from it.
    if ((dataNode.type === 'option' && dataNode.enableType) || dataNode.type === 'input') {
        if (container) container.classList.remove('hidden');
        if (textInput) {
            textInput.classList.remove('hidden');

            // Setup Animator
            if (currentAnimator) currentAnimator.stop();

            const examples = dataNode.examples || [
                "Portrait of a Cyberpunk Hero",
                "Sunset over a Digital Landscape",
                "Watercolor painting of a Cat",
                "Futuristic City Skyline",
                "Abstract Geometric Patterns"
            ];

            currentAnimator = new PlaceholderAnimator(textInput, examples, {
                defaultPlaceholder: dataNode.placeholder || "Type here..."
            });

            textInput.value = "";
            // Removed auto-focus to allow animation to play
            // textInput.focus();
        }
    } else if (dataNode.type === 'upload' || dataNode.enableUpload) {
        const fileWrapper = DOM.fileUploadWrapper();
        const fileInput = DOM.fileInput();

        if (container) container.classList.remove('hidden');
        if (fileWrapper) {
            fileWrapper.classList.remove('hidden');

            // Attach listener to update file name if not already attached
            if (fileInput && !fileInput.dataset.listenerAttached) {
                fileInput.addEventListener('change', (e) => {
                    const fileNameDisplay = DOM.fileNameDisplay();
                    if (e.target.files && e.target.files.length > 0) {
                        const fileNames = Array.from(e.target.files).map(f => f.name).join(', ');
                        if (fileNameDisplay) fileNameDisplay.textContent = fileNames;
                    } else {
                        if (fileNameDisplay) fileNameDisplay.textContent = "No file chosen";
                    }
                });
                fileInput.dataset.listenerAttached = 'true';
            }
        }
    }
}

export function getInputValue() {
    const textInput = DOM.textInput();
    const fileWrapper = DOM.fileUploadWrapper();
    const fileInput = DOM.fileInput();

    if (textInput && !textInput.classList.contains('hidden')) {
        return textInput.value;
    }

    if (fileWrapper && !fileWrapper.classList.contains('hidden') && fileInput) {
        if (fileInput.files && fileInput.files.length > 0) {
            return Array.from(fileInput.files).map(f => f.name).join(', ');
        }
    }

    return null;
}
