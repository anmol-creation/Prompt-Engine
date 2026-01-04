// Brain Mapping for Object / Subject -> Resize Subject
// Phase 1 - Level 6

export const objectResizeSubjectLanguagePools = {
    baseIntents: [
        "Adjust the size of the main subject",
        "Resize the primary subject in the image",
        "Modify the subject scale for better composition"
    ],
    resizeDirection: {
        "Increase": [
            "slightly enlarging the subject",
            "making the subject more prominent"
        ],
        "Decrease": [
            "slightly reducing the subject size",
            "making the subject less dominant"
        ]
    },
    resizeAmount: {
        "Small": [
            "with minimal size adjustment",
            "using subtle scaling"
        ],
        "Medium": [
            "with balanced resizing",
            "using moderate scaling"
        ],
        "Large": [
            "with significant size adjustment",
            "using strong scaling while maintaining realism"
        ]
    },
    proportionLock: {
        "On": [
            "while maintaining original proportions",
            "keeping natural shape and alignment"
        ],
        "Off": [
            "allowing flexible scaling",
            "with less strict proportion constraints"
        ]
    },
    safety: [
        "Ensure the subject remains natural and undistorted.",
        "Preserve image balance and realistic proportions."
    ]
};
