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
            enableType: true,
            searchPlaceholder: "Type movie name...",
            customGenerator: (input) => {
                const cleanInput = input && input.trim() ? input.trim() : "cinematic";
                return `Transform the subject into the ${cleanInput} universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality.`;
            },
            options: {
                "Avatar": { type: "static", prompt: "Transform the subject into the Avatar universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Jurassic Park": { type: "static", prompt: "Transform the subject into the Jurassic Park universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Titanic": { type: "static", prompt: "Transform the subject into the Titanic universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Toy Story": { type: "static", prompt: "Transform the subject into the Toy Story universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Baahubali": { type: "static", prompt: "Transform the subject into the Baahubali universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "RRR": { type: "static", prompt: "Transform the subject into the RRR universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Train to Busan": { type: "static", prompt: "Transform the subject into the Train to Busan universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Coco": { type: "static", prompt: "Transform the subject into the Coco universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Barbie": { type: "static", prompt: "Transform the subject into the Barbie universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Harry Potter": { type: "static", prompt: "Transform the subject into the Harry Potter universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "The Lord of the Rings": { type: "static", prompt: "Transform the subject into The Lord of the Rings universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Star Wars": { type: "static", prompt: "Transform the subject into the Star Wars universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "The Matrix": { type: "static", prompt: "Transform the subject into The Matrix universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Inception": { type: "static", prompt: "Transform the subject into the Inception universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Pirates of the Caribbean": { type: "static", prompt: "Transform the subject into the Pirates of the Caribbean universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Transformers": { type: "static", prompt: "Transform the subject into the Transformers universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Dune": { type: "static", prompt: "Transform the subject into the Dune universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Interstellar": { type: "static", prompt: "Transform the subject into the Interstellar universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Mad Max: Fury Road": { type: "static", prompt: "Transform the subject into the Mad Max: Fury Road universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Jumanji": { type: "static", prompt: "Transform the subject into the Jumanji universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." }
            }
        },
        "Web Series": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type series name...",
            customGenerator: (input) => {
                const cleanInput = input && input.trim() ? input.trim() : "cinematic series";
                return `Transform the subject into the ${cleanInput} universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality.`;
            },
            options: {
                "Stranger Things": { type: "static", prompt: "Transform the subject into the Stranger Things universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Money Heist": { type: "static", prompt: "Transform the subject into the Money Heist universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Game of Thrones": { type: "static", prompt: "Transform the subject into the Game of Thrones universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Breaking Bad": { type: "static", prompt: "Transform the subject into the Breaking Bad universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "The Walking Dead": { type: "static", prompt: "Transform the subject into The Walking Dead universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "The Witcher": { type: "static", prompt: "Transform the subject into The Witcher universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Peaky Blinders": { type: "static", prompt: "Transform the subject into the Peaky Blinders universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Dark": { type: "static", prompt: "Transform the subject into the Dark series universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "The Boys": { type: "static", prompt: "Transform the subject into The Boys universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Narcos": { type: "static", prompt: "Transform the subject into the Narcos universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Squid Game": { type: "static", prompt: "Transform the subject into the Squid Game universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "House of the Dragon": { type: "static", prompt: "Transform the subject into the House of the Dragon universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Vikings": { type: "static", prompt: "Transform the subject into the Vikings universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "The Last of Us": { type: "static", prompt: "Transform the subject into The Last of Us universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Mirzapur": { type: "static", prompt: "Transform the subject into the Mirzapur universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." }
            }
        },
        "Toons": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type cartoon name...",
            customGenerator: (input) => {
                 const cleanInput = input && input.trim() ? input.trim() : "cartoon";
                 return `Transform the subject into the ${cleanInput} animation style. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality.`;
            },
            options: {
                "Tom and Jerry": { type: "static", prompt: "Transform the subject into the Tom and Jerry animation style. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Doraemon": { type: "static", prompt: "Transform the subject into the Doraemon animation style. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Pokémon": { type: "static", prompt: "Transform the subject into the Pokémon animation style. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Ben 10": { type: "static", prompt: "Transform the subject into the Ben 10 animation style. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "SpongeBob SquarePants": { type: "static", prompt: "Transform the subject into the SpongeBob SquarePants animation style. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "The Simpsons": { type: "static", prompt: "Transform the subject into The Simpsons animation style. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Rick and Morty": { type: "static", prompt: "Transform the subject into the Rick and Morty animation style. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Scooby-Doo": { type: "static", prompt: "Transform the subject into the Scooby-Doo animation style. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "Frozen": { type: "static", prompt: "Transform the subject into the Frozen animation style. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." },
                "The Lion King": { type: "static", prompt: "Transform the subject into The Lion King animation style. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality." }
            }
        },
        "Universe": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type universe style...",
            customGenerator: (input) => {
                 const cleanInput = input && input.trim() ? input.trim() : "apocalyptic world";
                 return `Transform the environment into a ${cleanInput}. Adjust lighting, atmosphere, and visual style to match. Preserve subject identity and image quality.`;
            },
            options: {
                "World of Desert": { type: "static", prompt: "Transform the environment into a World of Desert. Adjust lighting, atmosphere, and visual style to match. Preserve subject identity and image quality." },
                "Zombie Apocalypse": { type: "static", prompt: "Transform the environment into a Zombie Apocalypse world. Adjust lighting, atmosphere, and visual style to match. Preserve subject identity and image quality." },
                "Post-Human World": { type: "static", prompt: "Transform the environment into a Post-Human World. Adjust lighting, atmosphere, and visual style to match. Preserve subject identity and image quality." },
                "Destroyed City World": { type: "static", prompt: "Transform the environment into a Destroyed City World. Adjust lighting, atmosphere, and visual style to match. Preserve subject identity and image quality." },
                "Nuclear Fallout World": { type: "static", prompt: "Transform the environment into a Nuclear Fallout World. Adjust lighting, atmosphere, and visual style to match. Preserve subject identity and image quality." },
                "Frozen Apocalypse World": { type: "static", prompt: "Transform the environment into a Frozen Apocalypse World. Adjust lighting, atmosphere, and visual style to match. Preserve subject identity and image quality." },
                "Flooded Earth World": { type: "static", prompt: "Transform the environment into a Flooded Earth World. Adjust lighting, atmosphere, and visual style to match. Preserve subject identity and image quality." },
                "Dark Survival World": { type: "static", prompt: "Transform the environment into a Dark Survival World. Adjust lighting, atmosphere, and visual style to match. Preserve subject identity and image quality." },
                "Abandoned Civilization World": { type: "static", prompt: "Transform the environment into an Abandoned Civilization World. Adjust lighting, atmosphere, and visual style to match. Preserve subject identity and image quality." },
                "Alien Invasion Aftermath World": { type: "static", prompt: "Transform the environment into an Alien Invasion Aftermath World. Adjust lighting, atmosphere, and visual style to match. Preserve subject identity and image quality." }
            }
        },
        "Mythology": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type mythology...",
            customGenerator: (input) => {
                const cleanInput = input && input.trim() ? input.trim() : "mythology";
                // Safety logic: Check for god/deity names in input is hard without a list.
                // Requirement: "If user types god/deity names: Ignore deity transformation. Convert subject into era-appropriate human."
                // "Prompt must reflect 'inspired by era', not deity identity."
                return `Transform the subject into a human figure from the era of ${cleanInput}. Adjust clothing, accessories, and environment to reflect the historical and cultural aesthetic. Do NOT depict as a god or deity. Preserve subject identity and image quality.`;
            },
            options: {
                "Hindu Mythology": { type: "static", prompt: "Transform the subject into a human figure inspired by the era of Hindu Mythology. Adjust clothing, accessories, and environment to reflect the historical and cultural aesthetic. Do NOT depict as a god or deity. Preserve subject identity and image quality." },
                "Greek Mythology": { type: "static", prompt: "Transform the subject into a human figure inspired by the era of Greek Mythology. Adjust clothing, accessories, and environment to reflect the historical and cultural aesthetic. Do NOT depict as a god or deity. Preserve subject identity and image quality." },
                "Egyptian Mythology": { type: "static", prompt: "Transform the subject into a human figure inspired by the era of Egyptian Mythology. Adjust clothing, accessories, and environment to reflect the historical and cultural aesthetic. Do NOT depict as a god or deity. Preserve subject identity and image quality." },
                "Norse Mythology": { type: "static", prompt: "Transform the subject into a human figure inspired by the era of Norse Mythology. Adjust clothing, accessories, and environment to reflect the historical and cultural aesthetic. Do NOT depict as a god or deity. Preserve subject identity and image quality." },
                "Roman Mythology": { type: "static", prompt: "Transform the subject into a human figure inspired by the era of Roman Mythology. Adjust clothing, accessories, and environment to reflect the historical and cultural aesthetic. Do NOT depict as a god or deity. Preserve subject identity and image quality." },
                "Chinese Mythology": { type: "static", prompt: "Transform the subject into a human figure inspired by the era of Chinese Mythology. Adjust clothing, accessories, and environment to reflect the historical and cultural aesthetic. Do NOT depict as a god or deity. Preserve subject identity and image quality." },
                "Japanese Mythology": { type: "static", prompt: "Transform the subject into a human figure inspired by the era of Japanese Mythology. Adjust clothing, accessories, and environment to reflect the historical and cultural aesthetic. Do NOT depict as a god or deity. Preserve subject identity and image quality." },
                "Mayan Mythology": { type: "static", prompt: "Transform the subject into a human figure inspired by the era of Mayan Mythology. Adjust clothing, accessories, and environment to reflect the historical and cultural aesthetic. Do NOT depict as a god or deity. Preserve subject identity and image quality." },
                "Aztec Mythology": { type: "static", prompt: "Transform the subject into a human figure inspired by the era of Aztec Mythology. Adjust clothing, accessories, and environment to reflect the historical and cultural aesthetic. Do NOT depict as a god or deity. Preserve subject identity and image quality." },
                "Mesopotamian Mythology": { type: "static", prompt: "Transform the subject into a human figure inspired by the era of Mesopotamian Mythology. Adjust clothing, accessories, and environment to reflect the historical and cultural aesthetic. Do NOT depict as a god or deity. Preserve subject identity and image quality." }
            }
        },
        "Role": {
             type: "group",
             enableType: true,
             searchPlaceholder: "Type role...",
             customGenerator: (input) => {
                 const cleanInput = input && input.trim() ? input.trim() : "character";
                 return `Transform the subject into the role of a ${cleanInput}. Adjust clothing, props, and environment to match. Preserve subject identity and image quality.`;
             },
             options: {
                 "Doctor": { type: "static", prompt: "Transform the subject into the role of a Doctor. Adjust clothing, props, and environment to match. Preserve subject identity and image quality." },
                 "Engineer": { type: "static", prompt: "Transform the subject into the role of an Engineer. Adjust clothing, props, and environment to match. Preserve subject identity and image quality." },
                 "Police Officer": { type: "static", prompt: "Transform the subject into the role of a Police Officer. Adjust clothing, props, and environment to match. Preserve subject identity and image quality." },
                 "Pilot": { type: "static", prompt: "Transform the subject into the role of a Pilot. Adjust clothing, props, and environment to match. Preserve subject identity and image quality." },
                 "Chef": { type: "static", prompt: "Transform the subject into the role of a Chef. Adjust clothing, props, and environment to match. Preserve subject identity and image quality." },
                 "Astronaut": { type: "static", prompt: "Transform the subject into the role of an Astronaut. Adjust clothing, props, and environment to match. Preserve subject identity and image quality." },
                 "Detective": { type: "static", prompt: "Transform the subject into the role of a Detective. Adjust clothing, props, and environment to match. Preserve subject identity and image quality." },
                 "Scientist": { type: "static", prompt: "Transform the subject into the role of a Scientist. Adjust clothing, props, and environment to match. Preserve subject identity and image quality." },
                 "Teacher": { type: "static", prompt: "Transform the subject into the role of a Teacher. Adjust clothing, props, and environment to match. Preserve subject identity and image quality." },
                 "Artist": { type: "static", prompt: "Transform the subject into the role of an Artist. Adjust clothing, props, and environment to match. Preserve subject identity and image quality." }
             }
        },
        "History": {
             type: "group",
             enableType: true,
             searchPlaceholder: "Type historical era...",
             customGenerator: (input) => {
                 const cleanInput = input && input.trim() ? input.trim() : "historical era";
                 return `Transform the subject into the ${cleanInput} historical era. Adjust clothing, environment, and visual style to match. Preserve subject identity and image quality.`;
             },
             options: {
                 "Ancient Egypt": { type: "static", prompt: "Transform the subject into the Ancient Egypt historical era. Adjust clothing, environment, and visual style to match. Preserve subject identity and image quality." },
                 "Victorian Era": { type: "static", prompt: "Transform the subject into the Victorian Era. Adjust clothing, environment, and visual style to match. Preserve subject identity and image quality." },
                 "Medieval Europe": { type: "static", prompt: "Transform the subject into Medieval Europe. Adjust clothing, environment, and visual style to match. Preserve subject identity and image quality." },
                 "Feudal Japan": { type: "static", prompt: "Transform the subject into Feudal Japan. Adjust clothing, environment, and visual style to match. Preserve subject identity and image quality." },
                 "Roaring Twenties": { type: "static", prompt: "Transform the subject into the Roaring Twenties (1920s). Adjust clothing, environment, and visual style to match. Preserve subject identity and image quality." },
                 "Wild West": { type: "static", prompt: "Transform the subject into the Wild West. Adjust clothing, environment, and visual style to match. Preserve subject identity and image quality." },
                 "Renaissance": { type: "static", prompt: "Transform the subject into the Renaissance era. Adjust clothing, environment, and visual style to match. Preserve subject identity and image quality." },
                 "Industrial Revolution": { type: "static", prompt: "Transform the subject into the Industrial Revolution era. Adjust clothing, environment, and visual style to match. Preserve subject identity and image quality." }
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
