export const faceGenerators = {
    eyes: (color) => `[generate_intent: eye_color=${color}]`,
    hair: (selection) => `[generate_intent: hair_change=${selection}]`,
    skin: (selection) => `[generate_intent: skin_change=${selection}]`,
    lips: (selection) => `[generate_intent: lip_change=${selection}]`,
    eyebrows: (selection) => `[generate_intent: eyebrow_change=${selection}]`,
    beard: (selection) => `[generate_intent: beard_change=${selection}]`,
    mustache: (selection) => `[generate_intent: mustache_change=${selection}]`
};

export const generateMaleFacePrompt = (category, selection) => {
    const generator = faceGenerators[category.toLowerCase()];
    if (generator) {
        return generator(selection);
    }
    return `[generate_intent: category=${category}, selection=${selection}]`;
};
