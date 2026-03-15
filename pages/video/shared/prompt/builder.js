// Pure Prompt Builder

const AUTO_QUALITY_PROMPT = `\n\nPreserve the subject's identity and image quality.`;

export function buildFinalPrompt(promptItems) {
    if (!promptItems || promptItems.length === 0) {
        return "";
    }

    const texts = promptItems.map(item => item.text).filter(t => t && t.trim() !== "");

    if (texts.length === 0) return "";

    return texts.join(" ") + AUTO_QUALITY_PROMPT;
}
