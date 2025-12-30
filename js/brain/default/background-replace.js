// Language pools for background replace

export const replaceLanguagePools = {
    baseIntent: [
        "Replace the background with a new scene",
        "Change the existing background while keeping the subject intact",
        "Swap the background with a different environment"
    ],
    sceneType: {
        Natural: [
            "using a realistic natural environment",
            "with a nature-based background"
        ],
        Urban: [
            "using an urban or city-style background",
            "with a modern outdoor scene"
        ],
        Indoor: [
            "using an indoor environment",
            "with a controlled indoor setting"
        ]
    },
    lightingMatch: {
        Auto: [
            "automatically matching the subject’s lighting",
            "keeping lighting consistent with the subject"
        ],
        Soft: [
            "using soft and balanced lighting",
            "with gentle light blending"
        ],
        Strong: [
            "using stronger lighting contrast",
            "while keeping realistic light direction"
        ]
    },
    blendQuality: {
        Natural: [
            "with natural edge blending",
            "ensuring the subject fits naturally into the scene"
        ],
        Clean: [
            "with clean and defined edges",
            "avoiding rough cutout boundaries"
        ],
        Seamless: [
            "with seamless integration between subject and background",
            "avoiding visible separation completely"
        ]
    },
    safety: [
        "Maintain correct perspective, scale, and proportions.",
        "Avoid artifacts, lighting mismatch, or unrealistic composites."
    ]
};
