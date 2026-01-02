// Language pools for background blur

export const blurLanguagePools = {
    baseIntent: [
        "Apply a background blur",
        "Blur the background area",
        "Create a soft background blur effect"
    ],
    intensity: {
        low: [
            "with a subtle blur strength",
            "using a light depth effect"
        ],
        medium: [
            "with medium blur strength",
            "using a balanced depth effect",
            "with a natural level of blur"
        ],
        high: [
            "with strong background separation",
            "using a pronounced depth effect"
        ]
    },
    focus: {
        Auto: [
            "while automatically keeping the main subject in focus",
            "ensuring the subject remains sharp automatically"
        ],
        Portrait: [
            "with portrait-style subject focus",
            "keeping the subject clearly defined like a portrait"
        ]
    },
    blurFeel: {
        Natural: [
            "using a natural depth-based effect",
            "with realistic background separation"
        ],
        Soft: [
            "using a soft and gentle blur transition",
            "with smooth and pleasing blur softness"
        ]
    },
    safety: [
        "Preserve clean edges and realistic details.",
        "Avoid artifacts and maintain natural image quality."
    ]
};
