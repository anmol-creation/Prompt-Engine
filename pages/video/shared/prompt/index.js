import { getSimpleModeData } from './adapters/simple.js';
import { getAdvancedModeData } from './adapters/advanced.js';
import { deduplicatePrompts } from './dedupe.js';
import { sortPromptItems } from './order.js';
import { buildFinalPrompt } from './builder.js';

export const PromptEngine = {
    generate(mode = 'simple') {
        let data;

        if (mode === 'simple') {
            data = getSimpleModeData();
        } else {
            data = getAdvancedModeData();
        }

        // Handle specific Simple Mode validation logic here or return metadata?
        // Simple Mode controller handled alerts.
        // We should return the result + metadata so controller can alert.

        const rawItems = data.items;

        // 1. Sort
        const sortedItems = sortPromptItems(rawItems);

        // 2. Dedupe
        const uniqueItems = deduplicatePrompts(sortedItems);

        // 3. Build String
        const promptText = buildFinalPrompt(uniqueItems);

        return {
            text: promptText,
            metadata: {
                isValidSelection: data.isValidSelection,
                hasStack: data.hasStack,
                isFixImageOnly: data.isFixImageOnly
            }
        };
    }
};
