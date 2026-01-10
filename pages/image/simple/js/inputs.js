// Dynamic Inputs & Sentence Builder Manager
import { DOM } from './dom.js';
import { State } from './state.js';
import { SentenceEngine } from './utils/sentence-engine.js';
import { simpleBrainMap } from '../simple.brain.map.js';

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

    // Check for 'option' type with 'enableType' flag
    if ((dataNode.type === 'option' && dataNode.enableType) || dataNode.type === 'input') {
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

// --- Sentence Builder Logic ---

export function renderSentenceBuilder() {
    const row = document.querySelector('.simple-builder-row');
    if (!row) return;

    let sentenceContainer = document.getElementById('simple-sentence-container');
    if (!sentenceContainer) {
        sentenceContainer = document.createElement('span');
        sentenceContainer.id = 'simple-sentence-container';
        sentenceContainer.className = 'sentence-container';

        const staticText = row.querySelector('.static-text');
        if (staticText) {
            staticText.after(sentenceContainer);
        } else {
            row.prepend(sentenceContainer);
        }
    }

    sentenceContainer.innerHTML = SentenceEngine.generateHTML(State, simpleBrainMap);

    // Dropdown visibility handling
    // Ensure active dropdowns are visible
    // Hide selected ones

    toggleDropdown('simple-main-category', State.getSelection(0) !== undefined && State.getSelection(0) !== null);
    toggleDropdown('simple-sub-category', State.getSelection(1) !== undefined && State.getSelection(1) !== null);
    toggleDropdown('simple-sub-category-2', State.getSelection(2) !== undefined && State.getSelection(2) !== null);
    toggleDropdown('simple-sub-category-3', State.getSelection(3) !== undefined && State.getSelection(3) !== null);
    toggleDropdown('simple-sub-category-4', State.getSelection(4) !== undefined && State.getSelection(4) !== null);
    toggleDropdown('simple-sub-category-5', State.getSelection(5) !== undefined && State.getSelection(5) !== null);
}

function toggleDropdown(id, isSelected) {
    const el = document.getElementById(id);
    if (!el) return;

    if (isSelected) {
        // If selected, we hide it because the sentence text replaces it.
        el.classList.add('hidden-by-sentence');
        el.style.display = 'none';
    } else {
        el.classList.remove('hidden-by-sentence');
        // Only restore display if it wasn't hidden by logic (class 'hidden')
        if (!el.classList.contains('hidden')) {
            el.style.display = '';
        }
        // If it HAS class hidden, we keep it hidden.
    }
}
