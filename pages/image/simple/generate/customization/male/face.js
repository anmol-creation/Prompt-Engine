export const faceGenerators = {
    eyes: (color) => `Subject has ${color.toLowerCase()} eyes.`,
    hair: (selection) => `Subject has a ${selection.toLowerCase()} hairstyle.`,
    skin: (selection) => `Subject has ${selection.toLowerCase()} skin tone.`,
    lips: (selection) => `Subject has ${selection.toLowerCase()} lips.`,
    eyebrows: (selection) => `Subject has ${selection.toLowerCase()} eyebrows.`,
    beard: (selection) => `Subject has a ${selection.toLowerCase()} beard style.`,
    mustache: (selection) => `Subject has a ${selection.toLowerCase()} mustache.`
};

export const generateMaleFacePrompt = (category, selection) => {
    const generator = faceGenerators[category.toLowerCase()];
    if (generator) {
        return generator(selection);
    }
    return `Subject has ${selection.toLowerCase()} ${category.toLowerCase()}.`;
};

export const generateMaleFaceDefault = () => "Subject has detailed, natural facial features.";
