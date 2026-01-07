// Prompt Controller
import { State } from './state.js';
import { DOM } from './dom.js';
import { simpleBrainMap } from '../brain/index.js';
import { getInputValue } from './inputs.js';
import { getFanOptionsValues } from './fan-options.js';
import { updateVisualGuide } from './visual-guide-bridge.js';

const AUTO_QUALITY_PROMPT = `\n\nPreserve the subject's identity and image quality.`;

export function generatePrompt() {
    const category = State.selectedCategory;
    if (!category) {
        alert("Please select a category.");
        return;
    }

    let currentData = simpleBrainMap[category];
    const selections = State.getAllSelections();

    for (const sel of selections) {
        if (currentData && currentData.options && currentData.options[sel]) {
            currentData = currentData.options[sel];
        } else {
             break;
        }
    }

    if (currentData && currentData.type === 'group' && !currentData.customGenerator) {
        alert("Please select or type the final option.");
        return;
    }

    let promptText = "";

    let leafNode = simpleBrainMap[category];
    let lastSelectionValue = null;

    for (const sel of selections) {
        lastSelectionValue = sel;
        if (leafNode && leafNode.options && leafNode.options[sel]) {
            leafNode = leafNode.options[sel];
        } else {
            // custom value
        }
    }

    if (typeof leafNode === 'string') {
        promptText = leafNode;
    } else if (leafNode && typeof leafNode === 'object') {
        if (leafNode.type === 'static') {
            promptText = leafNode.prompt;
        } else if (leafNode.type === 'input') {
            const userText = getInputValue();
            if (!userText || !userText.trim()) {
                alert("Please enter text.");
                return;
            }
            if (leafNode.generator) {
                promptText = leafNode.generator(userText);
            } else {
                promptText = userText;
            }
        } else if (leafNode.type === 'group' && leafNode.customGenerator && lastSelectionValue) {
             promptText = leafNode.customGenerator(lastSelectionValue);
        }
    }

    const fanOptions = getFanOptionsValues();
    if (fanOptions) {
        const placeStr = fanOptions.place ? `Place: ${fanOptions.place}` : "Place: Neutral place";
        const outfitStr = fanOptions.outfit ? `Outfit: ${fanOptions.outfit}` : "Outfit: Neutral outfit";
        const moodStr = fanOptions.mood ? `Mood: ${fanOptions.mood}` : "Mood: Natural pose";
        const framingStr = fanOptions.framing ? `Framing: ${fanOptions.framing}` : "Framing: Medium Shot";

        promptText += `\nDetails: ${placeStr}, ${outfitStr}, ${moodStr}, ${framingStr}.`;
    }

    promptText += AUTO_QUALITY_PROMPT;

    const finalPromptEl = DOM.finalPrompt();
    const copyBtn = DOM.copyBtn();

    if (finalPromptEl) finalPromptEl.textContent = promptText;
    if (copyBtn) copyBtn.classList.remove('hidden');

    updateVisualGuide();
}
