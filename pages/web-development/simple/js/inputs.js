// Dynamic Inputs Manager
import { DOM } from './dom.js';
import { PlaceholderAnimator } from './animator.js';

let currentAnimator = null;

export function resetDynamicInputs() {
    const container = DOM.dynamicInputsContainer();
    const textInput = DOM.textInput();

    if (container) container.classList.add('hidden');
    if (textInput) {
        textInput.classList.add('hidden');
        if (currentAnimator) {
            currentAnimator.stop();
            currentAnimator = null;
        }
    }
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
    }
}

export function getInputValue() {
    const textInput = DOM.textInput();
    if (textInput && !textInput.classList.contains('hidden')) {
        return textInput.value;
    }
    return null;
}
