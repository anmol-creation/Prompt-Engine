export const qualitySharpenImageLanguagePools = {
    baseIntent: [
        "Sharpen the image to enhance fine details",
        "Improve image clarity by refining edges",
        "Enhance sharpness while maintaining realism"
    ],
    sharpenStrength: {
        "Soft": [
            "using gentle sharpening",
            "with minimal edge enhancement"
        ],
        "Balanced": [
            "with balanced sharpening",
            "enhancing details naturally"
        ],
        "Strong": [
            "with stronger sharpening applied carefully",
            "boosting edge clarity without harshness"
        ]
    },
    edgeFocus: {
        "Normal": [
            "focusing on primary edges",
            "sharpening main details"
        ],
        "Fine": [
            "enhancing fine edge details",
            "targeting subtle textures"
        ]
    },
    noiseProtection: {
        "On": [
            "while suppressing noise amplification",
            "preventing sharpening-related noise"
        ],
        "Off": [
            "without additional noise protection",
            "allowing full sharpening effect"
        ]
    },
    safety: [
        "Avoid halos, artifacts, or unnatural outlines.",
        "Preserve natural textures and realistic detail."
    ]
};
