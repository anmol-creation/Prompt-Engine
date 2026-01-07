// Dynamic Inputs Manager
import { DOM } from './dom.js';

export function resetDynamicInputs() {
    const container = DOM.dynamicInputsContainer();
    const textInput = DOM.textInput();

    if (container) container.classList.add('hidden');
    if (textInput) textInput.classList.add('hidden');
}

export function handleDynamicInputs(dataNode) {
    if (!dataNode) return;

    const container = DOM.dynamicInputsContainer();
    const textInput = DOM.textInput();

    if (dataNode.type === 'input') {
        if (container) container.classList.remove('hidden');
        if (textInput) {
            textInput.classList.remove('hidden');
            textInput.placeholder = dataNode.placeholder || "Type here...";
            textInput.value = "";
            textInput.focus();
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
