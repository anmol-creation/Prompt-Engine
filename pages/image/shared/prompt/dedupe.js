// Prompt Deduplication Logic

export function deduplicatePrompts(promptItems) {
    const uniquePrompts = [];
    const seenTexts = new Set();

    promptItems.forEach(item => {
        const text = item.text;
        if (!text || text.trim() === "") return;

        // Simple check: Exact match
        // The original logic checked if the text is already included in the output.
        // But here we are building a list.
        // "If !currentStackPrompts.includes(categoryPrompt)"
        // This means if I have "A", and new one is "A", skip.
        // If I have "A with B", and new one is "A", skip?
        // Original logic: "if (!currentStackPrompts.includes(categoryPrompt))"
        // Yes, if the stack (joined) includes the new prompt, skip.

        // However, we are dealing with items now.
        // Let's iterate and build.

        let isDuplicate = false;
        for (const existing of uniquePrompts) {
            if (existing.text.includes(text)) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            uniquePrompts.push(item);
        }
    });

    return uniquePrompts;
}
