import { replaceBgTypeGenerator } from '../generators/replace-bg.js';

export const fixImageCategory = {
    type: 'group',
    options: {
        "Fix Background": {
            type: "group",
            options: {
                "Add Blur": {
                    type: "static",
                    prompt: "Identify main subject, apply natural depth blur to background, keeping background distinct but blurred, maintaining subject sharpness. No removal or replacement of background."
                },
                "Remove Background": {
                    type: "static",
                    prompt: "Cleanly cut out the subject, preserving hair details and edges, leaving a transparent or neutral background. Maintain subject quality without degradation."
                },
                "Replace Background": {
                    type: "group",
                    options: {
                        "Type": {
                            type: "option",
                            enableType: true,
                            placeholder: "Eiffel Tower area, Paris",
                            customGenerator: replaceBgTypeGenerator
                        },
                        "Auto AI": {
                            type: "static",
                            prompt: "Identify the subject type (person, product, or object) and automatically generate a contextually appropriate, high-quality background that enhances the subject. Ensure lighting and color match the subject. Avoid repetitive or clashing backgrounds."
                        },
                        "Nature": {
                            type: "static",
                            prompt: "Place the subject in a clean, non-distracting nature setting appropriate to the subject. Ensure natural lighting and harmony between subject and background."
                        },
                        "Urban": {
                            type: "static",
                            prompt: "Place the subject in an urban street lifestyle setting. Minimal clutter in the background, keeping priority focus on the subject."
                        },
                        "Studio": {
                            type: "static",
                            prompt: "Place the subject in a professional studio setting with neutral tones and controlled lighting. Keep the background clean and distraction-free."
                        },
                        "Office": {
                            type: "static",
                            prompt: "Place the subject in a professional office environment with a neutral, corporate feel. Keep the background clean and ensure the subject remains the clear focus."
                        },
                        "Street": {
                            type: "static",
                            prompt: "Place the subject in a realistic street setting. Capture the essence of city life with natural lighting and depth. Ensure the subject stands out clearly against the street background."
                        },
                        "Indoor": {
                            type: "static",
                            prompt: "Place the subject in a natural indoor room setting. Maintain harmony between subject and background with appropriate indoor lighting."
                        }
                    }
                },
                "Green Screen Background": {
                    type: "static",
                    prompt: "Replace background with a solid green screen. Ensure even lighting on the background, no texture, no gradients. Clean subject edges for easy keying."
                },
                "Improve Background": {
                    type: "static",
                    prompt: "Improve the existing background by correcting colors, fixing lighting, adjusting sharpness, and removing noise or artifacts. Preserve the original background identity; do not remove or replace it."
                }
            }
        },
        "Remove Distractions": {
            type: "static",
            prompt: "Keep subject sharp & untouched. Clean foreground + background. Remove unwanted objects / people automatically."
        },
        "Improve Quality": {
            type: "static",
            prompt: "Slightly improve sharpness. Reduce noise. Improve clarity. No face change. No background change."
        },
        "Fix Face": {
            type: "group",
            options: {
                "Fix Clarity": {
                    type: "static",
                    prompt: "Gently improve face clarity. Preserve subject identity. No beauty filter. No face reshape."
                },
                "Fix Skin Tone": {
                    type: "static",
                    prompt: "Balance natural skin tone. Preserve subject identity. No beauty filter. No face reshape."
                }
            }
        },
        "Fix Lighting": {
            type: "static",
            prompt: "Balance exposure. Fix shadows & highlights naturally. No cinematic grading. No mood change."
        }
    }
};
