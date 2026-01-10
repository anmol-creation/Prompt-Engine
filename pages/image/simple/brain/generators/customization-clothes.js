export const fullOutfitColorGenerator = (input) => {
    // "type + type" logic
    // System Interpretation:
    // First value -> Top color
    // Second value -> Bottom color
    // Edge Cases:
    // Single color -> Top = color, Bottom = auto-matched neutral
    // No input -> System neutral colors assume

    let topColor = "";
    let bottomColor = "";

    if (!input || input.trim() === "") {
        return "wearing outfit with neutral colors"; // Or let the AI decide
    }

    const parts = input.split('+').map(s => s.trim());

    if (parts.length >= 2) {
        topColor = parts[0];
        bottomColor = parts[1];
        return `wearing outfit with ${topColor} top and ${bottomColor} bottom`;
    } else if (parts.length === 1) {
        topColor = parts[0];
        return `wearing outfit with ${topColor} top and neutral bottom`;
    }

    return `wearing outfit in ${input} colors`; // Fallback
};

export const generateMaleClothesDefault = () => "wearing casual modern outfit";
