// Language pools for background shadow adjust

export const shadowAdjustLanguagePools = {
    baseIntent: [
        "Adjust the subject’s shadow to look natural and grounded",
        "Add realistic grounding shadows under the subject",
        "Refine shadows to match the scene lighting"
    ],
    shadowType: {
        Natural: [
            "using natural-looking grounding shadows",
            "with realistic shadow softness"
        ],
        Soft: [
            "using soft and diffused shadows",
            "with gentle shadow transitions"
        ],
        Contact: [
            "adding close contact shadows under the subject",
            "enhancing contact points with subtle shadows"
        ]
    },
    intensity: {
        Low: [
            "with subtle shadow intensity",
            "keeping shadows light and minimal"
        ],
        Medium: [
            "with balanced shadow strength",
            "ensuring visible but natural shadows"
        ],
        High: [
            "with stronger shadow presence",
            "while avoiding harsh darkness"
        ]
    },
    spread: {
        Tight: [
            "keeping shadows close to the subject",
            "with minimal shadow spread"
        ],
        Balanced: [
            "with balanced shadow spread",
            "maintaining natural shadow falloff"
        ],
        Wide: [
            "allowing shadows to spread wider",
            "creating a broader grounding effect"
        ]
    },
    safety: [
        "Match shadow direction and softness with the existing lighting.",
        "Avoid unnatural dark patches or floating appearance."
    ]
};
