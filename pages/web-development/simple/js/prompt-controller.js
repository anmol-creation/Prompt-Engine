import { DOM } from './dom.js';
import { State } from './state.js';

export function generatePrompt() {
    const finalPromptEl = DOM.finalPrompt();
    const copyBtn = DOM.copyBtn();

    // Prepare structured data model
    const stack = State.getStack();
    const model = {
        field: null,
        targetAudience: null,
        goal: null,
        platform: null,
        complexity: null,
        monetization: null,
        technologyPreference: null,
        additionalRequirements: null,
        outputFormat: null
    };

    // Extract values based on category names
    stack.forEach(item => {
        if (item.category === "Field") model.field = item.option;
        if (item.category === "Target Audience") model.targetAudience = item.option;
        if (item.category === "Goal") model.goal = item.option;
        if (item.category === "Platform") model.platform = item.option;
        if (item.category === "Complexity") model.complexity = item.option;
        if (item.category === "Monetization") model.monetization = item.option;
        if (item.category === "Technology Preference") model.technologyPreference = item.option;
        if (item.category === "Additional Requirements") model.additionalRequirements = item.inputValue;
        if (item.category === "Output Format") model.outputFormat = item.option;
    });

    console.log("Structured Web Development Data Model Prepared:", model);

    if (finalPromptEl) {
        finalPromptEl.textContent = "Data model collected internally. Prompt generation is not implemented yet for Web Development mode.\n\n" + JSON.stringify(model, null, 2);
    }

    if (copyBtn) copyBtn.classList.remove('hidden');
}
