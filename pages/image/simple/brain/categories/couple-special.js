import { getGenerator } from '../registry.js';

// Get the generator from registry
const generateCouplePrompt = getGenerator("couple_generate");

export const coupleSpecialCategory = {
    type: 'group',
    options: {
        "Romantic": { type: "option", prompt: () => generateCouplePrompt("Romantic") },
        "Wedding / Pre-Wedding": { type: "option", prompt: () => generateCouplePrompt("Wedding / Pre-Wedding") },
        "Casual / Lifestyle": { type: "option", prompt: () => generateCouplePrompt("Casual / Lifestyle") },
        "Cinematic": { type: "option", prompt: () => generateCouplePrompt("Cinematic") },
        "Travel / Adventure": { type: "option", prompt: () => generateCouplePrompt("Travel / Adventure") },
        "Royal / Luxury": { type: "option", prompt: () => generateCouplePrompt("Royal / Luxury") },
        "Fashion": { type: "option", prompt: () => generateCouplePrompt("Fashion") },
        "Fantasy / Creative": { type: "option", prompt: () => generateCouplePrompt("Fantasy / Creative") },
        "Moody Aesthetic": { type: "option", prompt: () => generateCouplePrompt("Moody Aesthetic") },
        "Fun / Cute": { type: "option", prompt: () => generateCouplePrompt("Fun / Cute") }
    }
};
