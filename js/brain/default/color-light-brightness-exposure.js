// Brain Language Pools for Color & Light -> Brightness & Exposure

export const colorLightBrightnessExposureLanguagePools = {
    // 1. Base Intent
    baseIntent: [
        "Adjust the overall brightness and exposure of the image",
        "Balance image brightness for natural exposure",
        "Correct lighting levels to achieve proper exposure"
    ],

    // 2. Brightness Mapping
    brightness: {
        "Low": [
            "slightly reducing brightness",
            "lowering overall brightness gently"
        ],
        "Normal": [
            "maintaining balanced brightness",
            "keeping natural light levels"
        ],
        "High": [
            "increasing brightness carefully",
            "brightening the image without losing detail"
        ]
    },

    // 3. Exposure Mapping
    exposure: {
        "Underexposed": [
            "correcting dark exposure",
            "lifting shadow details carefully"
        ],
        "Balanced": [
            "maintaining balanced exposure",
            "keeping highlights and shadows natural"
        ],
        "Overexposed": [
            "reducing excessive exposure",
            "recovering highlight details"
        ]
    },

    // 4. Highlight Protection Mapping
    highlightProtection: {
        "On": [
            "while protecting highlight details",
            "avoiding blown-out highlights"
        ],
        "Off": [
            "without additional highlight protection",
            "allowing free exposure adjustment"
        ]
    },

    // 5. Safety Lines
    safety: [
        "Preserve natural colors and realistic lighting.",
        "Avoid harsh contrast or artificial lighting effects."
    ]
};
