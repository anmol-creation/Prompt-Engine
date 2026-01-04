// Language pools for background remove

export const removeLanguagePools = {
    baseIntent: [
        "Remove the background cleanly",
        "Isolate the main subject by removing the background",
        "Cut out the subject from the background"
    ],
    strength: {
        Low: [
            "with gentle separation",
            "using a light removal approach"
        ],
        Medium: [
            "with balanced and clean separation",
            "using a natural removal strength"
        ],
        High: [
            "with strong subject separation",
            "ensuring a clear and precise cutout"
        ]
    },
    edge: {
        Soft: [
            "with soft and smooth edges",
            "avoiding harsh edge transitions"
        ],
        Natural: [
            "maintaining natural-looking edges",
            "keeping realistic edge flow"
        ]
    },
    shadow: {
        On: [
            "while preserving natural shadows under the subject",
            "keeping realistic grounding shadows"
        ],
        Off: [
            "without retaining background shadows",
            "with a flat cutout appearance"
        ]
    },
    safety: [
        "Avoid artifacts and maintain realistic image quality.",
        "Ensure the subject looks natural and clean after removal."
    ]
};
