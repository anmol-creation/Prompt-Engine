// Adapter for Simple Mode
import { State } from '../../../simple/js/state.js';
import { simpleBrainMap } from '../../../simple/brain/index.js';
import { getInputValue } from '../../../simple/js/inputs.js';
import { getFanOptionsValues } from '../../../simple/js/fan-options.js';
import { getVehicleOptionsValues } from '../../../simple/js/vehicle-options.js';
import { getBeardOptionsValues } from '../../../simple/js/beard-options.js';
import { getHairOptionsValues } from '../../../simple/js/hair-options.js';
import { getMustacheOptionsValues } from '../../../simple/js/mustache-options.js';
import { getGenerator } from '../../../simple/brain/registry.js'; // Import Registry

function resolvePromptForStackItem(item) {
    const leafNode = item.leafNode;
    const inputValue = item.inputValue;
    let promptText = "";

    if (!leafNode) return "";

    // 1. Resolve Generator from ID if present
    let generatorFunc = null;
    if (leafNode.generatorID) {
        generatorFunc = getGenerator(leafNode.generatorID);
    } else if (leafNode.generator) {
        // Fallback for legacy objects not yet updated (though we cleaned most)
        generatorFunc = leafNode.generator;
    } else if (leafNode.customGenerator) {
        generatorFunc = leafNode.customGenerator;
    }

    if (typeof leafNode === 'string') {
        promptText = leafNode;
    } else if (typeof leafNode === 'object') {
        const promptSource = leafNode.promptTemplate || leafNode.prompt;
        if (leafNode.type === 'static' || leafNode.type === 'category' || (leafNode.type === 'option' && promptSource)) {
            if (typeof promptSource === 'function') {
                promptText = promptSource();
            } else if (Array.isArray(promptSource)) {
                // Feature: Random variations for static/option prompts
                const randomIndex = Math.floor(Math.random() * promptSource.length);
                promptText = promptSource[randomIndex];
            } else {
                promptText = promptSource;
            }
        } else if (leafNode.type === 'input') {
             if (inputValue) {
                if (generatorFunc) {
                    promptText = generatorFunc(inputValue);
                } else if (promptSource) {
                    // Simple substitution
                    promptText = promptSource.replace('${input}', inputValue);
                } else {
                    promptText = inputValue;
                }
             }
        } else if (leafNode.type === 'option' && leafNode.enableType) {
             if (inputValue && generatorFunc) {
                 promptText = generatorFunc(inputValue);
             } else if (inputValue) {
                 promptText = inputValue;
             }
        }
    }
    return promptText;
}

export function getSimpleModeData() {
    const stackItems = [];

    // 1. Process Stack
    const stack = State.getStack();
    stack.forEach(item => {
        let p = resolvePromptForStackItem(item);

        // Feature: Vehicle
        if (item.category === "Replace Background" && p) {
            const vehicleOpts = item.vehicleOptions || getVehicleOptionsValues();
            if (vehicleOpts && vehicleOpts.category) {
                let vehicleStr = " with a";
                if (vehicleOpts.color) vehicleStr += ` ${vehicleOpts.color}`;
                if (vehicleOpts.type) vehicleStr += ` ${vehicleOpts.type}`;
                else vehicleStr += ` ${vehicleOpts.category}`;

                const cat = vehicleOpts.category;
                if (cat === "Bike") vehicleStr += " parked nearby";
                else if (cat === "Cycle") vehicleStr += " nearby";
                else if (cat === "Public Transport") vehicleStr += " passing by";
                else vehicleStr += " in the background";

                p += vehicleStr;
            }
        }

        // Feature: Beard
        if (item.category === "Beard Style" && p) {
            const beardColor = item.beardColor || getBeardOptionsValues();
            if (beardColor) {
                if (p.endsWith('.')) p = p.slice(0, -1);
                p += `. The beard is ${beardColor}.`;
            }
        }

        // Feature: Hair
        if (item.category === "Hair Style" && p) {
            const hairOpts = item.hairOptions || getHairOptionsValues();
            if (hairOpts) {
                let hairDetails = [];
                if (hairOpts.length) hairDetails.push(hairOpts.length);
                if (hairOpts.type) hairDetails.push(hairOpts.type);
                if (hairOpts.color) hairDetails.push(hairOpts.color);

                if (hairDetails.length > 0) {
                    if (p.endsWith('.')) p = p.slice(0, -1);
                    p += `. Hair details: ${hairDetails.join(', ')}.`;
                }
            }
        }

        // Feature: Mustache
        if (item.category === "Mustache Style" && p) {
            const mustacheColor = item.mustacheColor || getMustacheOptionsValues();
            if (mustacheColor) {
                if (p.endsWith('.')) p = p.slice(0, -1);
                p += `. The mustache is ${mustacheColor}.`;
            }
        }

        if (p && p.trim() !== "") {
            stackItems.push({
                category: item.category,
                text: p,
                isStack: true
            });
        }
    });

    // 2. Process Current Pending Category
    const currentItems = [];
    if (State.selectedCategory && State.selectedCategory !== "Fix Image") {

        // Couple Mode Handling (Customization -> Couple)
        if (State.selectedCategory === "Customization" && State.getSelection(1) === "Couple") {
            // If "Gesture & Pose" (standard attribute), fall through to standard processing
            if (State.getSelection(2) !== "Gesture & Pose") {
                const coupleData = State.getCoupleSelection();
                const parts = [];

                if (coupleData && coupleData.male) {
                    parts.push(`${coupleData.male} (Male)`);
                }
                if (coupleData && coupleData.female) {
                    parts.push(`${coupleData.female} (Female)`);
                }

                if (parts.length > 0) {
                    const text = `Couple: ${parts.join(' & ')}`;
                    currentItems.push({
                        category: "Couple",
                        text: text,
                        isStack: false
                    });
                }

                return {
                    items: stackItems.concat(currentItems),
                    isValidSelection: parts.length > 0,
                    hasStack: stack.length > 0
                };
            }
        }

        const category = State.selectedCategory;
        let categoryPrompt = "";
        let isValid = false;

        const selections = State.getAllSelections();
        let currentData = simpleBrainMap[category];

        let startIndex = 0;
        if (selections.length > 0 && selections[0] === category) {
            startIndex = 1;
        }

        // Validate selection path
        for (let i = startIndex; i < selections.length; i++) {
            const sel = selections[i];
            if (currentData && currentData.children && currentData.children[sel]) {
                currentData = currentData.children[sel];
            } else if (currentData && currentData.options && currentData.options[sel]) {
                currentData = currentData.options[sel];
            } else {
                 break;
            }
        }

        // Resolve leaf
        let leafNode = simpleBrainMap[category];
        let lastSelectionValue = null;
        for (let i = startIndex; i < selections.length; i++) {
            const sel = selections[i];
            lastSelectionValue = sel;
            if (leafNode && leafNode.children && leafNode.children[sel]) {
                leafNode = leafNode.children[sel];
            } else if (leafNode && leafNode.options && leafNode.options[sel]) {
                leafNode = leafNode.options[sel];
            }
        }

        if (currentData && currentData.type === 'group' && !currentData.customGenerator && !currentData.generatorID) {
            // Invalid/Incomplete
        } else {
            isValid = true;

            // Resolve Generator
            let generatorFunc = null;
            if (leafNode.generatorID) {
                generatorFunc = getGenerator(leafNode.generatorID);
            } else if (leafNode.customGenerator) {
                generatorFunc = leafNode.customGenerator;
            }

            if (typeof leafNode === 'string') {
                categoryPrompt = leafNode;
            } else if (leafNode && typeof leafNode === 'object') {
                const promptSource = leafNode.promptTemplate || leafNode.prompt;
                if (leafNode.type === 'static' || leafNode.type === 'category' || (leafNode.type === 'option' && promptSource)) {
                    if (typeof promptSource === 'function') {
                        categoryPrompt = promptSource();
                    } else if (Array.isArray(promptSource)) {
                        // Feature: Random variations for static/option prompts
                        const randomIndex = Math.floor(Math.random() * promptSource.length);
                        categoryPrompt = promptSource[randomIndex];
                    } else {
                        categoryPrompt = promptSource;
                    }
                } else if (leafNode.type === 'input') {
                    const userText = getInputValue();
                    if (userText && userText.trim()) {
                        if (generatorFunc) {
                            categoryPrompt = generatorFunc(userText);
                        } else if (promptSource) {
                            categoryPrompt = promptSource.replace('${input}', userText);
                        } else {
                            categoryPrompt = userText;
                        }
                    }
                } else if (leafNode.type === 'group' && generatorFunc && lastSelectionValue) {
                     categoryPrompt = generatorFunc(lastSelectionValue);
                }
            }
        }

        // Fan Options
        const fanOptions = getFanOptionsValues();
        if (fanOptions) {
            let placeDefault = "Place: Neutral place";
            let outfitDefault = "Outfit: Neutral outfit";
            let moodDefault = "Mood: Natural pose";
            let framingDefault = "Framing: Medium Shot";

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
            currentItems.push({
                category: category,
                text: categoryPrompt,
                isStack: false
            });
        }

        // Return validity info for UI alerts
        return {
            items: stackItems.concat(currentItems),
            isValidSelection: isValid,
            hasStack: stack.length > 0
        };
    }

    return {
        items: stackItems,
        isValidSelection: false,
        hasStack: stack.length > 0,
        isFixImageOnly: State.selectedCategory === "Fix Image"
    };
}
