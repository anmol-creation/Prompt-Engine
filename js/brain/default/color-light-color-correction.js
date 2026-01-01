// Brain Language Pools for Color & Light -> Color Correction

export const colorLightColorCorrectionLanguagePools = {
    // 1. Base Intent
    baseIntent: [
        "Correct the overall color balance of the image",
        "Adjust image colors for natural and accurate tones",
        "Fix color inconsistencies to achieve realistic appearance"
    ],

    // 2. Color Balance Mapping
    colorBalance: {
        "Cool": [
            "slightly cooling down color tones",
            "reducing warm color cast"
        ],
        "Neutral": [
            "maintaining neutral color balance",
            "keeping colors accurate and natural"
        ],
        "Warm": [
            "adding gentle warmth to the image",
            "reducing cool color cast"
        ]
    },

    // 3. White Balance Mapping
    whiteBalance: {
        "Auto": [
            "automatically correcting white balance",
            "balancing whites based on scene lighting"
        ],
        "Daylight": [
            "optimizing colors for daylight conditions",
            "correcting tones under natural light"
        ],
        "Indoor": [
            "adjusting colors for indoor lighting",
            "reducing artificial light color shifts"
        ]
    },

    // 4. Skin Tone Priority Mapping
    skinTonePriority: {
        "On": [
            "prioritizing natural skin tones",
            "ensuring realistic skin color accuracy"
        ],
        "Off": [
            "applying general color correction",
            "without skin tone prioritization"
        ]
    },

    // 5. Safety / Realism Lines
    safety: [
        "Preserve realistic colors and natural skin tones.",
        "Avoid oversaturation or artificial color shifts."
    ]
};
