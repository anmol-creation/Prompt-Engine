export const simpleBrainMap = {
    "Fix Background": {
        "Replace Background": {
            type: "group",
            options: {
                "Auto AI": {
                    type: "static",
                    prompt: "Identify the subject type (person, product, or object) and automatically generate a contextually appropriate, high-quality background that enhances the subject. Ensure lighting and color match the subject. Avoid repetitive or clashing backgrounds."
                },
                "Type": {
                    type: "input",
                    placeholder: "Eiffel Tower area, Paris",
                    generator: (input) => {
                        const cleanInput = input && input.trim() ? input.trim() : "suitable environment";
                        return `${cleanInput} environment background, appropriate to the subject in the image, realistic setting, balanced elements, natural lighting, clean composition, subject remains the main focus.`;
                    }
                },
                "Custom Image": {
                    type: "static",
                    prompt: "Blend the subject with the provided custom background image. Match lighting and color of the subject to the background. Ensure clean edges and realistic integration. (Note: Please provide the background image to the AI tool along with this prompt)"
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
                "Indoor": {
                    type: "static",
                    prompt: "Place the subject in a natural indoor room setting. Maintain harmony between subject and background with appropriate indoor lighting."
                }
            }
        },
        "Blur Background": {
             type: "static",
             prompt: "Identify main subject, apply natural depth blur to background, keeping background distinct but blurred, maintaining subject sharpness. No removal or replacement of background."
        },
        "Green Screen BG": {
            type: "static",
            prompt: "Replace background with a solid green screen. Ensure even lighting on the background, no texture, no gradients. Clean subject edges for easy keying."
        },
        "Remove BG": {
             type: "static",
             prompt: "Cleanly cut out the subject, preserving hair details and edges, leaving a transparent or neutral background. Maintain subject quality without degradation."
        },
        "Improve BG": {
             type: "static",
             prompt: "Improve the existing background by correcting colors, fixing lighting, adjusting sharpness, and removing noise or artifacts. Preserve the original background identity; do not remove or replace it."
        }
    },
    "Creative Image": {
        "Movies": {
            type: "group",
            options: {
                "Avatar": {
                    type: "static",
                    prompt: "Transform the subject into the Avatar universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality."
                },
                "Jurassic Park": {
                    type: "static",
                    prompt: "Transform the subject into the Jurassic Park universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality."
                },
                "Titanic": {
                    type: "static",
                    prompt: "Transform the subject into the Titanic universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality."
                },
                "Harry Potter": {
                    type: "static",
                    prompt: "Transform the subject into the Harry Potter universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality."
                },
                "Type Custom": {
                    type: "input",
                    placeholder: "Type movie name...",
                    generator: (input) => {
                        const cleanInput = input && input.trim() ? input.trim() : "cinematic";
                        return `Transform the subject into the ${cleanInput} universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality.`;
                    }
                }
            }
        },
        "Web Series": {
            type: "group",
            options: {
                "Money Heist": {
                    type: "static",
                    prompt: "Transform the subject into the Money Heist universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality."
                },
                "Stranger Things": {
                    type: "static",
                    prompt: "Transform the subject into the Stranger Things universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality."
                },
                "Breaking Bad": {
                    type: "static",
                    prompt: "Transform the subject into the Breaking Bad universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality."
                },
                "Game of Thrones": {
                    type: "static",
                    prompt: "Transform the subject into the Game of Thrones universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality."
                },
                "Type Custom": {
                    type: "input",
                    placeholder: "Type series name...",
                    generator: (input) => {
                        const cleanInput = input && input.trim() ? input.trim() : "cinematic series";
                        return `Transform the subject into the ${cleanInput} universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality.`;
                    }
                }
            }
        },
        "Cartoon": {
            type: "group",
            options: {
                "Classic Disney": {
                    type: "static",
                    prompt: "Transform the subject into a Classic Disney cartoon style. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality."
                },
                "Pixar Style": {
                    type: "static",
                    prompt: "Transform the subject into a Pixar animation style. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality."
                },
                "Looney Tunes": {
                    type: "static",
                    prompt: "Transform the subject into a Looney Tunes style. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality."
                },
                "Type Custom": {
                    type: "input",
                    placeholder: "Type cartoon style...",
                    generator: (input) => {
                         const cleanInput = input && input.trim() ? input.trim() : "cartoon";
                         return `Transform the subject into the ${cleanInput} universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality.`;
                    }
                }
            }
        },
        "Anime": {
            type: "group",
            options: {
                "Studio Ghibli": {
                    type: "static",
                    prompt: "Transform the subject into the Studio Ghibli universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality."
                },
                "Dragon Ball Z": {
                    type: "static",
                    prompt: "Transform the subject into the Dragon Ball Z universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality."
                },
                "Naruto": {
                    type: "static",
                    prompt: "Transform the subject into the Naruto universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality."
                },
                "Type Custom": {
                    type: "input",
                    placeholder: "Type anime name...",
                    generator: (input) => {
                        const cleanInput = input && input.trim() ? input.trim() : "anime";
                        return `Transform the subject into the ${cleanInput} universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality.`;
                    }
                }
            }
        },
        "Fiction World": {
            type: "group",
            options: {
                "Fantasy Kingdom": {
                    type: "static",
                    prompt: "Transform the subject into a Fantasy Kingdom universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality."
                },
                "Sci-fi World": {
                    type: "static",
                    prompt: "Transform the subject into a Sci-fi World universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality."
                },
                "Cyberpunk City": {
                    type: "static",
                    prompt: "Transform the subject into a Cyberpunk City universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality."
                },
                "Mythical Universe": {
                    type: "static",
                    prompt: "Transform the subject into a Mythical Universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality."
                },
                 "Type Custom": {
                    type: "input",
                    placeholder: "Type fiction world...",
                    generator: (input) => {
                        const cleanInput = input && input.trim() ? input.trim() : "fictional world";
                        return `Transform the subject into the ${cleanInput} universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality.`;
                    }
                }
            }
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
