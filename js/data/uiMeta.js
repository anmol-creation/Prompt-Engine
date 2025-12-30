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

export const TRANSPARENT_DEFAULT_SETTINGS = [
    {
        label: "Edge Quality",
        type: "select",
        options: ["Clean", "Natural", "Smooth"],
        val: "Natural",
        class: "edge-quality"
    },
    {
        label: "Detail Preservation",
        type: "select",
        options: ["Standard", "High"],
        val: "Standard",
        class: "detail-preservation"
    },
    {
        label: "Shadow Handling",
        type: "select",
        options: ["Remove", "Soft Shadow"],
        val: "Remove",
        class: "shadow-handling"
    }
];

export const STUDIO_DEFAULT_SETTINGS = [
    {
        label: "Studio Type",
        type: "select",
        options: ["Neutral", "Soft Light", "High Key"],
        val: "Neutral",
        class: "studio-type"
    },
    {
        label: "Background Tone",
        type: "select",
        options: ["White", "Light Gray", "Dark Gray"],
        val: "White",
        class: "background-tone"
    },
    {
        label: "Light Balance",
        type: "select",
        options: ["Even", "Soft Shadow"],
        val: "Even",
        class: "light-balance"
    }
];

export const REPLACE_DEFAULT_SETTINGS = [
    {
        label: "Scene Type",
        type: "select",
        options: ["Natural", "Urban", "Indoor"],
        val: "Natural",
        class: "scene-type"
    },
    {
        label: "Lighting Match",
        type: "select",
        options: ["Auto", "Soft", "Strong"],
        val: "Auto",
        class: "lighting-match"
    },
    {
        label: "Blend Quality",
        type: "select",
        options: ["Natural", "Clean", "Seamless"],
        val: "Natural",
        class: "blend-quality"
    }
];

export const GRADIENT_DEFAULT_SETTINGS = [
    {
        label: "Gradient Type",
        type: "select",
        options: ["Linear", "Radial", "Soft Blend"],
        val: "Linear",
        class: "gradient-type"
    },
    {
        label: "Color Style",
        type: "select",
        options: ["Light", "Vibrant", "Dark"],
        val: "Light",
        class: "color-style"
    },
    {
        label: "Blend Smoothness",
        type: "select",
        options: ["Soft", "Balanced", "Smooth"],
        val: "Balanced",
        class: "blend-smoothness"
    }
];

export const EXTEND_DEFAULT_SETTINGS = [
    {
        label: "Extend Direction",
        type: "select",
        options: ["All Sides", "Horizontal", "Vertical"],
        val: "All Sides",
        class: "extend-direction"
    },
    {
        label: "Fill Style",
        type: "select",
        options: ["Natural", "Context Aware", "Smooth"],
        val: "Natural",
        class: "fill-style"
    },
    {
        label: "Edge Continuity",
        type: "select",
        options: ["Seamless", "Soft", "Clean"],
        val: "Seamless",
        class: "edge-continuity"
    }
];

export const OUTDOOR_DEFAULT_SETTINGS = [
    {
        label: "Outdoor Scene Type",
        type: "select",
        options: ["Nature", "Urban", "Open Area"],
        val: "Nature",
        class: "outdoor-scene-type"
    },
    {
        label: "Lighting Condition",
        type: "select",
        options: ["Daylight", "Golden Hour", "Overcast"],
        val: "Daylight",
        class: "lighting-condition"
    },
    {
        label: "Depth Feel",
        type: "select",
        options: ["Natural", "Soft Depth"],
        val: "Natural",
        class: "depth-feel"
    }
];

export const SHADOW_ADJUST_DEFAULT_SETTINGS = [
    {
        label: "Shadow Type",
        type: "select",
        options: ["Natural", "Soft", "Contact"],
        val: "Natural",
        class: "shadow-type"
    },
    {
        label: "Shadow Intensity",
        type: "select",
        options: ["Low", "Medium", "High"],
        val: "Medium",
        class: "shadow-intensity"
    },
    {
        label: "Shadow Spread",
        type: "select",
        options: ["Tight", "Balanced", "Wide"],
        val: "Balanced",
        class: "shadow-spread"
    }
];
