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

export const getFemaleClothingColors = (itemName, type) => {
    const singleColors = [
        "Red", "Black", "White", "Royal Blue", "Pink", "Yellow", "Emerald Green",
        "Golden", "Silver", "Purple", "Maroon", "Neon Green", "Floral Pattern",
        "Pastel Pink", "Beige"
    ];

    const comboColors = {
        "White Top + Blue Bottom": "wearing a White top and Blue bottom",
        "Black + Black (All Black)": "wearing a full Black outfit",
        "Pink Top + White Bottom": "wearing a Pink top and White bottom",
        "Red Top + Black Bottom": "wearing a Red top and Black bottom",
        "Yellow Top + Blue Bottom": "wearing a Yellow top and Blue bottom",
        "White Top + Black Bottom": "wearing a White top and Black bottom",
        "Black Top + Blue Bottom": "wearing a Black top and Blue denim bottom",
        "Beige Top + Brown Bottom": "wearing a Beige top and Brown bottom",
        "Neon + Black": "wearing a Neon top and Black bottom"
    };

    const options = {};

    if (type === 'single') {
        singleColors.forEach(color => {
            options[color] = {
                type: "option",
                prompt: `wearing a ${color} ${itemName}`
            };
        });
    } else if (type === 'combo') {
        Object.entries(comboColors).forEach(([label, promptFragment]) => {
            options[label] = {
                type: "option",
                prompt: `wearing ${itemName}, ${promptFragment}`
            };
        });
    }

    return {
        "Color": {
            type: "group",
            options: options
        }
    };
};
