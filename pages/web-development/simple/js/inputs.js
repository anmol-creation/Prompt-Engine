// Dynamic Inputs Manager
import { DOM } from './dom.js';
import { PlaceholderAnimator } from './animator.js';

let currentAnimator = null;

export function resetDynamicInputs() {
    const container = DOM.dynamicInputsContainer();
    const textInput = DOM.textInput();
    const labelInput = document.getElementById('simple-dynamic-input-label');

    if (container) container.classList.add('hidden');
    if (textInput) {
        textInput.classList.add('hidden');
        if (currentAnimator) {
            currentAnimator.stop();
            currentAnimator = null;
        }
    }
    if (labelInput) {
        labelInput.classList.add('hidden');
        labelInput.textContent = '';
    }
}

export function handleDynamicInputs(dataNode) {
    if (!dataNode) return;

    const container = DOM.dynamicInputsContainer();
    const textInput = DOM.textInput();
    const labelInput = document.getElementById('simple-dynamic-input-label');

    // Check for standard format: node.dynamicInput object
    const dynamicConfig = dataNode.dynamicInput;

    if (dynamicConfig) {
        if (container) container.classList.remove('hidden');
        if (textInput) {
            textInput.classList.remove('hidden');

            if (currentAnimator) currentAnimator.stop();

            if (dynamicConfig.placeholder) {
                 textInput.placeholder = dynamicConfig.placeholder;
            } else {
                 textInput.placeholder = "Type here...";
            }

            if (dynamicConfig.label && labelInput) {
                 labelInput.textContent = dynamicConfig.label;
                 labelInput.classList.remove('hidden');
            } else if (labelInput) {
                 labelInput.classList.add('hidden');
                 labelInput.textContent = '';
            }

            textInput.value = "";
        }
    } else if ((dataNode.type === 'option' && dataNode.enableType) || dataNode.type === 'input') {
        // Fallback to legacy
        if (container) container.classList.remove('hidden');
        if (textInput) {
            textInput.classList.remove('hidden');
            if (labelInput) labelInput.classList.add('hidden');

            if (currentAnimator) currentAnimator.stop();

            const examples = dataNode.examples || [
                "Example 1", "Example 2"
            ];

            currentAnimator = new PlaceholderAnimator(textInput, examples, {
                defaultPlaceholder: dataNode.placeholder || "Type here..."
            });

            textInput.value = "";
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
