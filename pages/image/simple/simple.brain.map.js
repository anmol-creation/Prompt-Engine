export const simpleBrainMap = {
    "Fix Background": {
        "Add Blur": {
            type: "static",
            prompt: "Identify main subject, apply natural depth blur to background, keeping background distinct but blurred, maintaining subject sharpness. No removal or replacement of background."
        },
        "Remove BG": {
            type: "static",
            prompt: "Cleanly cut out the subject, preserving hair details and edges, leaving a transparent or neutral background. Maintain subject quality without degradation."
        },
        "Replace BG (Auto AI)": {
            type: "static",
            prompt: "Identify the subject type (person, product, or object) and automatically generate a contextually appropriate, high-quality background that enhances the subject. Ensure lighting and color match the subject. Avoid repetitive or clashing backgrounds."
        },
        "Replace BG (Type)": {
            type: "input",
            placeholder: "Type a background (e.g. Railway station)",
            generator: (input) => {
                const cleanInput = input && input.trim() ? input.trim() : "suitable environment";
                return `${cleanInput} environment background, appropriate to the subject in the image, realistic setting, balanced elements, natural lighting, clean composition, subject remains the main focus.`;
            }
        },
        "Replace BG (Custom Image)": {
            type: "file",
            prompt: "Blend the subject with the provided custom background image. Match lighting and color of the subject to the background. Ensure clean edges and realistic integration."
        },
        "Replace BG (Nature)": {
            type: "static",
            prompt: "Place the subject in a clean, non-distracting nature setting appropriate to the subject. Ensure natural lighting and harmony between subject and background."
        },
        "Replace BG (Office)": {
            type: "static",
            prompt: "Place the subject in a professional office environment with a neutral, corporate feel. Keep the background clean and ensure the subject remains the clear focus."
        },
        "Replace BG (Street)": {
            type: "static",
            prompt: "Place the subject in an urban street lifestyle setting. Minimal clutter in the background, keeping priority focus on the subject."
        },
        "Replace BG (Indoor)": {
            type: "static",
            prompt: "Place the subject in a natural indoor room setting. Maintain harmony between subject and background with appropriate indoor lighting."
        },
        "Green Screen BG": {
            type: "static",
            prompt: "Replace background with a solid green screen. Ensure even lighting on the background, no texture, no gradients. Clean subject edges for easy keying."
        },
        "Improve BG": {
            type: "static",
            prompt: "Improve the existing background by correcting colors, fixing lighting, adjusting sharpness, and removing noise or artifacts. Preserve the original background identity; do not remove or replace it."
        }
    },
    "Make Photo Clear": {
        "Remove Blur": "Enhance overall image clarity, removing motion blur and sharpening details to make the photo crisp and high-definition."
    },
    "Improve Face": {
        "Natural Enhance": "Subtly smooth skin texture and enhance facial features while maintaining a natural, realistic appearance."
    },
    "Profile Photo Ready": {
        "Professional Look": "Optimize the image for a professional profile, ensuring balanced lighting, clear focus, and a clean, distraction-free aesthetic."
    },
    "Change Style": {
        "Cartoon / Art Style": "Transform the photo into a stylized cartoon or digital art piece, emphasizing bold lines and vibrant colors."
    },
    "Restore Old Photo": {
        "Auto Restore": "Automatically repair damage, reduce noise, and correct color fading to restore the old photograph to its original quality."
    },
    "Product Photo": {
        "Clean Product Look": "Enhance the product presentation with clean lighting and a neutral look to make the item stand out."
    },
    "Social Media Image": {
        "Auto Post Design": "Adjust colors and contrast for a vibrant, eye-catching look suitable for social media sharing."
    }
};
