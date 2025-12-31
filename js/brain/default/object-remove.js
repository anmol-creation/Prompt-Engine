// Brain Mapping for Object / Subject -> Remove Object
// Phase 1 - Level 6

export const objectRemoveLanguagePools = {
    baseIntents: [
        "Remove the selected object from the image",
        "Cleanly remove unwanted elements from the scene",
        "Eliminate the specified object without damaging the image"
    ],
    objectType: {
        "Small Object": [
            "focusing on small distracting elements",
            "targeting minor objects in the scene"
        ],
        "Large Object": [
            "removing larger objects carefully",
            "handling large object removal smoothly"
        ],
        "Person": [
            "removing a person from the scene",
            "cleanly eliminating a human subject"
        ]
    },
    removalAccuracy: {
        "Standard": [
            "using balanced object removal",
            "with natural edge blending"
        ],
        "Precise": [
            "with high-precision removal",
            "ensuring clean edges and minimal artifacts"
        ]
    },
    backgroundFill: {
        "Auto": [
            "automatically filling the background",
            "blending the area naturally"
        ],
        "Context Aware": [
            "reconstructing the background based on surrounding context",
            "using scene-aware background filling"
        ]
    },
    safety: [
        "Preserve surrounding details and textures.",
        "Avoid visible artifacts or unnatural patches."
    ]
};
