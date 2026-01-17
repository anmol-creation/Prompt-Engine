// Type Category (Temporary/Flexible)

export const typeCategory = {
    type: 'group',
    options: {
        "Custom Type": {
            type: 'input',
            prompt: "Type: ${input}"
        },
        "Cinematic": { type: 'option', prompt: "Type: Cinematic" },
        "Realistic": { type: 'option', prompt: "Type: Realistic" },
        "Animated": { type: 'option', prompt: "Type: Animated" },
        "3D Render": { type: 'option', prompt: "Type: 3D Render" }
    }
};
