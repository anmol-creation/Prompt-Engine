// Prompt Controller
import { State } from './state.js';
import { DOM } from './dom.js';
import { simpleBrainMap } from '../brain/index.js';
import { getInputValue } from './inputs.js';
import { getFanOptionsValues } from './fan-options.js';
import { getVehicleOptionsValues } from './vehicle-options.js';
import { getHairOptionsValues } from './hair-options.js';
import { getMustacheOptionsValues } from './mustache-options.js';
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
    const stack = State.getStack();

    // 1. Process Stack (Always include if present)
    // The stack can contain both "Fix Image" items and "Customization" items.
    // We should process them all.
    if (stack.length > 0) {
        // Sort stack by execution order (mainly for Fix Image, Customization order matters less but can be appended)
        // Items not in FIX_EXECUTION_ORDER will have index -1.
        // We can place them after Fix Image items.

        const sortedStack = [...stack].sort((a, b) => {
            const idxA = FIX_EXECUTION_ORDER.indexOf(a.category);
            const idxB = FIX_EXECUTION_ORDER.indexOf(b.category);

            // If both are Fix Image items, sort by defined order
            if (idxA !== -1 && idxB !== -1) return idxA - idxB;

            // If A is Fix Image, put it first
            if (idxA !== -1) return -1;

            // If B is Fix Image, put it first
            if (idxB !== -1) return 1;

            // Otherwise (both Customization), keep original order (assumed insertion order)
            return 0;
        });

        const stackPrompts = sortedStack.map(item => {
            let p = resolvePromptForStackItem(item);

            // Append Vehicle Options if applicable (Replace Background item)
            // item.category is usually "Fix Background" (Group) or "Replace Background" (Parent of leaf)?
            // The logic in handleLevelSelection was: stackCategory = "Replace Background", stackOption = "Nature".
            // So we check if item.category === "Replace Background".

            if (item.category === "Replace Background" && p) {
                // Try getting vehicle options from the stack item first (robust way)
                // Fallback to DOM reader (getVehicleOptionsValues) only if not in stack (legacy/safety)

                const vehicleOpts = item.vehicleOptions || getVehicleOptionsValues();

                if (vehicleOpts && vehicleOpts.category) {
                    // Format: " with a [Color] [Type/Cat] in the background"
                    let vehicleStr = " with a";
                    if (vehicleOpts.color) vehicleStr += ` ${vehicleOpts.color}`;

                    if (vehicleOpts.type) {
                        vehicleStr += ` ${vehicleOpts.type}`;
                    } else {
                        vehicleStr += ` ${vehicleOpts.category}`;
                    }

                    const cat = vehicleOpts.category;
                    if (cat === "Bike") vehicleStr += " parked nearby";
                    else if (cat === "Cycle") vehicleStr += " nearby";
                    else if (cat === "Public Transport") vehicleStr += " passing by";
                    else vehicleStr += " in the background"; // Car

                    p += vehicleStr;
                }
            }

            // Handle Beard Color
            if (item.category === "Beard Style" && p) {
                const beardColor = item.beardColor || getBeardOptionsValues();
                if (beardColor) {
                    // "Subject has a goatee beard style." -> "Subject has a Black goatee beard style."?
                    // Or append " It is Black."
                    // Let's modify logic to inject color if possible, or append.
                    // The generator is: `Subject has a ${selection} beard style.`
                    // Simple replacement: "beard style" -> "beard style. It is Black."

                    if (p.endsWith('.')) p = p.slice(0, -1); // Remove trailing dot
                    p += `. The beard is ${beardColor}.`;
                }
            }

            return p;
        }).filter(p => p && p.trim() !== "");

        if (stackPrompts.length > 0) {
            promptParts.push(stackPrompts.join(" "));
        }
    }

    // 2. Process Current Category (if NOT "Fix Image" AND NOT empty)
    // If selectedCategory IS "Fix Image", we rely solely on the stack.
    // If selectedCategory IS "Customization", we ALSO check if there's a current pending selection that isn't in stack?
    // Actually, if the user clicked "Create Prompt" without clicking "+", we should include the current selection.

    if (State.selectedCategory && State.selectedCategory !== "Fix Image") {
        const category = State.selectedCategory;
        let categoryPrompt = "";
        let isValidSelection = false;

        let currentData = simpleBrainMap[category];
        const selections = State.getAllSelections();

        // Validation loop
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

        // Check if current selection is valid (complete)
        // Refactored Logic: Check if we are deep enough.

        let leafNode = simpleBrainMap[category];
        let lastSelectionValue = null;
        let parentNode = null;

        for (let i = startIndex; i < selections.length; i++) {
            const sel = selections[i];
            lastSelectionValue = sel;
            parentNode = leafNode;
            if (leafNode && leafNode.options && leafNode.options[sel]) {
                leafNode = leafNode.options[sel];
            } else {
                // custom value
            }
        }

        // Logic to determine if we should generate a prompt
        if (leafNode) {
            if (typeof leafNode === 'string') {
                 categoryPrompt = leafNode;
                 isValidSelection = true;
            } else if (typeof leafNode === 'object') {
                 // CASE: Option with static prompt
                 if (leafNode.type === 'static' || (leafNode.type === 'option' && leafNode.prompt)) {
                     categoryPrompt = leafNode.prompt;
                     isValidSelection = true;
                 }
                 // CASE: Input node
                 else if (leafNode.type === 'input') {
                     const userText = getInputValue();
                     if (userText && userText.trim()) {
                         if (leafNode.generator) {
                             categoryPrompt = leafNode.generator(userText);
                         } else {
                             categoryPrompt = userText;
                         }
                         isValidSelection = true;
                     }
                 }
                 // CASE: Option with custom generator needing input (Enable Type)
                 else if (leafNode.type === 'option' && leafNode.enableType) {
                     const userText = getInputValue();
                     if (userText && userText.trim()) {
                         if (leafNode.customGenerator) {
                             categoryPrompt = leafNode.customGenerator(userText);
                         } else {
                             categoryPrompt = userText;
                         }
                         isValidSelection = true;
                     }
                 }
                 // CASE: Group with custom generator (e.g., Hair Style / Mustache Style)
                 // Check if parent has customGenerator and we are in the correct context
                 if (parentNode && parentNode.customGenerator) {
                     if (selections.includes("Hair Style")) {
                         const hairOpts = getHairOptionsValues();
                         categoryPrompt = parentNode.customGenerator(lastSelectionValue, hairOpts);
                         isValidSelection = true;
                     } else if (selections.includes("Mustache Style")) {
                         const mustacheOpts = getMustacheOptionsValues();
                         categoryPrompt = parentNode.customGenerator(lastSelectionValue, mustacheOpts);
                         isValidSelection = true;
                     }
                 }
            }
        }

        // Handle Fan Options
        const fanOptions = getFanOptionsValues();
        if (fanOptions) {
            let placeDefault = "Place: Neutral place";
            let outfitDefault = "Outfit: Neutral outfit";
            let moodDefault = "Mood: Natural pose";
            let framingDefault = "Framing: Medium Shot";

            const selections = State.getAllSelections();
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
        } else if (stack.length === 0 && !isValidSelection) {
             // Only alert if we have NO stack and NO valid selection
             alert("Please select or type the final option.");
             return;
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
