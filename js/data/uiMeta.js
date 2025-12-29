// Helper hints (1–2 words) and UI rules (intensity allowed, settings allowed)
// Data Structure for default settings of special actions

export const BLUR_DEFAULT_SETTINGS = [
    {
        label: "Intensity",
        type: "slider",
        min: 1,
        max: 10,
        val: 5,
        class: "blur-intensity"
    },
    {
        label: "Focus Type",
        type: "select",
        options: ["Auto", "Portrait"],
        val: "Auto",
        class: "blur-focus"
    },
    {
        label: "Blur Feel",
        type: "select",
        options: ["Natural", "Soft"],
        val: "Natural",
        class: "blur-feel"
    }
];

export const REMOVE_DEFAULT_SETTINGS = [
    {
        label: "Remove Strength",
        type: "select",
        options: ["Low", "Medium", "High"],
        val: "Medium",
        class: "remove-strength"
    },
    {
        label: "Edge Smoothness",
        type: "select",
        options: ["Soft", "Natural"],
        val: "Soft",
        class: "edge-smoothness"
    },
    {
        label: "Shadow Preserve",
        type: "select",
        options: ["On", "Off"],
        val: "On",
        class: "shadow-preserve"
    }
];
