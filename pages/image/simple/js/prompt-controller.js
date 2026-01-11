// Prompt Controller
import { State } from './state.js';
import { DOM } from './dom.js';
import { simpleBrainMap } from '../brain/index.js';
import { getInputValue } from './inputs.js';
import { getFanOptionsValues } from './fan-options.js';
import { updateVisualGuide } from './visual-guide-bridge.js';

const AUTO_QUALITY_PROMPT = `\n\nPreserve the subject's identity and image quality.`;

// Execution Order Rule
const FIX_EXECUTION_ORDER = [
    "Remove Distractions",
    "Fix Background",
    "Fix Lighting",
    "Improve Quality",
    "Fix Face"
];

// Re-implement resolve logic locally to be self-contained
function resolvePromptForStackItem(item) {
    const leafNode = item.leafNode;
    const inputValue = item.inputValue;
    const optionName = item.option; // e.g. "Type" or "Add Blur"

    let promptText = "";

    if (!leafNode) return "";

    if (typeof leafNode === 'string') {
        promptText = leafNode;
    } else if (typeof leafNode === 'object') {
        if (leafNode.type === 'static' || (leafNode.type === 'option' && leafNode.prompt)) {
            promptText = leafNode.prompt;
        } else if (leafNode.type === 'input') {
            // Legacy input support
             if (inputValue) {
                if (leafNode.generator) {
                    promptText = leafNode.generator(inputValue);
                } else {
                    promptText = inputValue;
                }
             }
        } else if (leafNode.type === 'option' && leafNode.enableType) {
             // Example: "Replace Background" -> "Type"
             // leafNode is the node for "Type".
             // It has customGenerator.
             // It needs input.
             if (inputValue && leafNode.customGenerator) {
                 promptText = leafNode.customGenerator(inputValue);
             } else if (inputValue) {
                 promptText = inputValue;
             }
        } else if (leafNode.customGenerator) {
             // Usually group based generator?
             // In Fix Image, "Type" has customGenerator inside the option node.
             // We handled that above.
             // Are there other cases?
             // "Custom Images" is removed.
             // So mostly just static prompts.
        }
    }

    return promptText;
}


export function generatePrompt() {
    let promptParts = [];
    const stack = State.getFixStack();

    // 1. Process Fix Stack (Always include if present)
    if (stack.length > 0) {
        // Sort stack by execution order
        const sortedStack = [...stack].sort((a, b) => {
            return FIX_EXECUTION_ORDER.indexOf(a.category) - FIX_EXECUTION_ORDER.indexOf(b.category);
        });

        const stackPrompts = sortedStack.map(item => resolvePromptForStackItem(item)).filter(p => p && p.trim() !== "");
        if (stackPrompts.length > 0) {
            promptParts.push(stackPrompts.join(" "));
        }
    }

    // 2. Process Current Category (if NOT "Fix Image")
    // If selectedCategory IS "Fix Image", we rely solely on the stack (processed above).
    // If selectedCategory IS "Customization" (or others), we process it and append to prompt.

    if (State.selectedCategory && State.selectedCategory !== "Fix Image") {
        const category = State.selectedCategory;
        let categoryPrompt = "";

        let currentData = simpleBrainMap[category];
        const selections = State.getAllSelections();

        // Validation loop
        // Skip the first selection if it matches the category (Level 0)
        let startIndex = 0;
        if (selections.length > 0 && selections[0] === category) {
            startIndex = 1;
        }

        for (let i = startIndex; i < selections.length; i++) {
            const sel = selections[i];
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

        let leafNode = simpleBrainMap[category];
        let lastSelectionValue = null;

        for (let i = startIndex; i < selections.length; i++) {
            const sel = selections[i];
            lastSelectionValue = sel;
            if (leafNode && leafNode.options && leafNode.options[sel]) {
                leafNode = leafNode.options[sel];
            } else {
                // custom value
            }
        }

        if (typeof leafNode === 'string') {
            categoryPrompt = leafNode;
        } else if (leafNode && typeof leafNode === 'object') {
            if (leafNode.type === 'static' || (leafNode.type === 'option' && leafNode.prompt)) {
                categoryPrompt = leafNode.prompt;
            } else if (leafNode.type === 'input') {
                const userText = getInputValue();
                if (!userText || !userText.trim()) {
                    alert("Please enter text.");
                    return;
                }
                if (leafNode.generator) {
                    categoryPrompt = leafNode.generator(userText);
                } else {
                    categoryPrompt = userText;
                }
            } else if (leafNode.type === 'group' && leafNode.customGenerator && lastSelectionValue) {
                 categoryPrompt = leafNode.customGenerator(lastSelectionValue);
            }
        }

        const fanOptions = getFanOptionsValues();
        if (fanOptions) {
            let placeDefault = "Place: Neutral place";
            let outfitDefault = "Outfit: Neutral outfit";
            let moodDefault = "Mood: Natural pose";
            let framingDefault = "Framing: Medium Shot";

            // Check for Sports Stars specific defaults
            const selections = State.getAllSelections();
            // selections[0] is Main Category (Fan Moment)
            // selections[1] is Sub Category (e.g., Sports Stars)
            if (selections.length > 1 && selections[1] === "Sports Stars") {
                placeDefault = "Place: Neutral Stadium";
                outfitDefault = "Outfit: Casual Outfit";
                moodDefault = "Mood: Natural pose";
                framingDefault = "Framing: Medium Shot";
            }

            const placeStr = fanOptions.place ? `Place: ${fanOptions.place}` : placeDefault;
            const outfitStr = fanOptions.outfit ? `Outfit: ${fanOptions.outfit}` : outfitDefault;
            const moodStr = fanOptions.mood ? `Mood: ${fanOptions.mood}` : moodDefault;
            const framingStr = fanOptions.framing ? `Framing: ${fanOptions.framing}` : framingDefault;

            categoryPrompt += `\nDetails: ${placeStr}, ${outfitStr}, ${moodStr}, ${framingStr}.`;
        }

        if (categoryPrompt) {
            promptParts.push(categoryPrompt);
        }
    } else if (stack.length === 0) {
        // If Category IS "Fix Image" AND Stack is empty
        alert("Please select an option.");
        return;
    }

    const finalPromptText = promptParts.join(" ") + AUTO_QUALITY_PROMPT;

    const finalPromptEl = DOM.finalPrompt();
    const copyBtn = DOM.copyBtn();

    if (finalPromptEl) finalPromptEl.textContent = finalPromptText;
    if (copyBtn) copyBtn.classList.remove('hidden');

    updateVisualGuide();
}
