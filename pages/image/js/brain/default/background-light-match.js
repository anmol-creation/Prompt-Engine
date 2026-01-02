// Language pools for background light match

export const lightMatchLanguagePools = {
    baseIntent: [
        "Match the lighting of the subject with the background",
        "Adjust lighting so the subject blends naturally with the scene",
        "Synchronize subject lighting with the environment"
    ],
    direction: {
        Auto: [
            "automatically aligning light direction with the background",
            "detecting and matching the scene’s light direction"
        ],
        Front: [
            "balancing lighting from the front",
            "ensuring frontal light consistency"
        ],
        Side: [
            "matching side lighting direction",
            "aligning directional light from the side"
        ]
    },
    intensity: {
        Soft: [
            "using soft and diffused lighting",
            "keeping light gentle and natural"
        ],
        Balanced: [
            "with balanced lighting intensity",
            "maintaining realistic brightness levels"
        ],
        Strong: [
            "with stronger light presence",
            "enhancing highlights while staying realistic"
        ]
    },
    colorTemperature: {
        Neutral: [
            "maintaining neutral color temperature",
            "keeping colors accurate and balanced"
        ],
        Warm: [
            "adding a warm color temperature",
            "matching warm ambient lighting"
        ],
        Cool: [
            "using cooler color tones",
            "matching cool ambient lighting"
        ]
    },
    safety: [
        "Preserve natural skin tones and material colors.",
        "Avoid overexposure, harsh highlights, or unnatural color shifts."
    ]
};
