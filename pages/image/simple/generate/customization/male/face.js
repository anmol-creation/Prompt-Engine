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

export const generateMaleHairStyle = (cut, optional) => {
    // "Subject has a [Length] [Type] [Color] [Cut] hairstyle."
    // optional: { length, type, color }
    // If optional values are missing, skip them.

    let parts = ["Subject has a"];

    if (optional && optional.length) parts.push(optional.length.toLowerCase());
    if (optional && optional.type) parts.push(optional.type.toLowerCase());
    if (optional && optional.color) parts.push(optional.color.toLowerCase());

    parts.push(cut.toLowerCase());

    // If it ends with "cut", we don't necessarily need "hairstyle" but "hairstyle" is safe.
    // If cut is "Bald", structure might be weird: "Subject has a Bald hairstyle". Acceptable.

    parts.push("hairstyle.");

    return parts.join(" ");
};

export const generateMaleMustacheStyle = (style, optional) => {
    // "Subject has a [Color] [Style] mustache."
    // optional: { color }

    let parts = ["Subject has a"];

    if (optional && optional.color) parts.push(optional.color.toLowerCase());

    // Ensure "mustache" is not duplicated if style includes it
    let styleStr = style.toLowerCase();
    if (styleStr.includes("mustache")) {
        // e.g., "clean mustache" -> "Subject has a clean mustache"
    } else {
        // e.g., "handlebar" -> "Subject has a handlebar" (might need "mustache" appended?)
        // Usually "Handlebar" implies mustache. "Handlebar mustache".
        // Let's verify style names: "Handlebar", "Chevron", "Pencil", "English", "Walrus", "Horseshoe"
        // Most benefit from appending "mustache" if not present.
        styleStr += " mustache";
    }

    parts.push(styleStr + ".");

    return parts.join(" ");
};
