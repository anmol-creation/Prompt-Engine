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
             searchPlaceholder: "Type universe...",
             customGenerator: (input) => {
                 // Fallback if user types Universe but not character?
                 // Or maybe this is the Universes list level.
                 const cleanInput = input && input.trim() ? input.trim() : "universe";
                 // If user just types a universe, we ask them to select a character?
                 // But generation logic says "Inspired by Iron Man role from Marvel".
                 // If only Universe is typed... maybe generic role from that universe?
                 return `Inspired by a role from the ${cleanInput}, depict subject with inspired costume, posture, and environment. Preserve subject identity.`;
             },
             options: {
                 "Marvel Universe": {
                     type: "group",
                     enableType: true,
                     searchPlaceholder: "Type character...",
                     customGenerator: (input) => `Inspired by ${input} role from Marvel Universe, depict subject as a hero human. Inspired costume, posture, environment. Preserve subject identity.`,
                     options: {
                         "Iron Man": { type: "static", prompt: "Inspired by Iron Man role from Marvel Universe, depict subject as a tech-hero human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Captain America": { type: "static", prompt: "Inspired by Captain America role from Marvel Universe, depict subject as a patriotic hero human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Thor": { type: "static", prompt: "Inspired by Thor role from Marvel Universe, depict subject as a thunder-wielding hero human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Hulk": { type: "static", prompt: "Inspired by Hulk role from Marvel Universe, depict subject as a powerful hero human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Black Widow": { type: "static", prompt: "Inspired by Black Widow role from Marvel Universe, depict subject as a stealth agent human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Spider-Man": { type: "static", prompt: "Inspired by Spider-Man role from Marvel Universe, depict subject as a web-slinging hero human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Doctor Strange": { type: "static", prompt: "Inspired by Doctor Strange role from Marvel Universe, depict subject as a sorcerer human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Black Panther": { type: "static", prompt: "Inspired by Black Panther role from Marvel Universe, depict subject as a royal warrior human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Scarlet Witch": { type: "static", prompt: "Inspired by Scarlet Witch role from Marvel Universe, depict subject as a chaos magic user human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Wolverine": { type: "static", prompt: "Inspired by Wolverine role from Marvel Universe, depict subject as a clawed mutant human. Inspired costume, posture, environment. Preserve subject identity." }
                     }
                 },
                 "DC Universe": {
                     type: "group",
                     enableType: true,
                     searchPlaceholder: "Type character...",
                     customGenerator: (input) => `Inspired by ${input} role from DC Universe, depict subject as a hero human. Inspired costume, posture, environment. Preserve subject identity.`,
                     options: {
                         "Batman": { type: "static", prompt: "Inspired by Batman role from DC Universe, depict subject as a dark detective hero human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Superman": { type: "static", prompt: "Inspired by Superman role from DC Universe, depict subject as a kryptonian hero human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Wonder Woman": { type: "static", prompt: "Inspired by Wonder Woman role from DC Universe, depict subject as an amazon warrior human. Inspired costume, posture, environment. Preserve subject identity." },
                         "The Flash": { type: "static", prompt: "Inspired by The Flash role from DC Universe, depict subject as a speedster hero human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Aquaman": { type: "static", prompt: "Inspired by Aquaman role from DC Universe, depict subject as an atlantean hero human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Joker": { type: "static", prompt: "Inspired by Joker role from DC Universe, depict subject as a chaotic villain human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Harley Quinn": { type: "static", prompt: "Inspired by Harley Quinn role from DC Universe, depict subject as a chaotic anti-hero human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Green Lantern": { type: "static", prompt: "Inspired by Green Lantern role from DC Universe, depict subject as a lantern corps hero human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Cyborg": { type: "static", prompt: "Inspired by Cyborg role from DC Universe, depict subject as a cybernetic hero human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Catwoman": { type: "static", prompt: "Inspired by Catwoman role from DC Universe, depict subject as a cat burglar human. Inspired costume, posture, environment. Preserve subject identity." }
                     }
                 },
                 "Star Wars Universe": {
                     type: "group",
                     enableType: true,
                     searchPlaceholder: "Type character...",
                     customGenerator: (input) => `Inspired by ${input} role from Star Wars Universe, depict subject as a sci-fi warrior human. Inspired costume, posture, environment. Preserve subject identity.`,
                     options: {
                         "Darth Vader": { type: "static", prompt: "Inspired by Darth Vader role from Star Wars Universe, depict subject as a dark lord human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Luke Skywalker": { type: "static", prompt: "Inspired by Luke Skywalker role from Star Wars Universe, depict subject as a jedi knight human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Yoda": { type: "static", prompt: "Inspired by Yoda role from Star Wars Universe, depict subject as a jedi master human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Obi-Wan Kenobi": { type: "static", prompt: "Inspired by Obi-Wan Kenobi role from Star Wars Universe, depict subject as a wise jedi human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Princess Leia": { type: "static", prompt: "Inspired by Princess Leia role from Star Wars Universe, depict subject as a rebel leader human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Han Solo": { type: "static", prompt: "Inspired by Han Solo role from Star Wars Universe, depict subject as a smuggler hero human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Mandalorian": { type: "static", prompt: "Inspired by Mandalorian role from Star Wars Universe, depict subject as a bounty hunter human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Ahsoka Tano": { type: "static", prompt: "Inspired by Ahsoka Tano role from Star Wars Universe, depict subject as a dual-wielding jedi human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Kylo Ren": { type: "static", prompt: "Inspired by Kylo Ren role from Star Wars Universe, depict subject as a dark side warrior human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Rey": { type: "static", prompt: "Inspired by Rey role from Star Wars Universe, depict subject as a scavenger jedi human. Inspired costume, posture, environment. Preserve subject identity." }
                     }
                 },
                 "Harry Potter Universe": {
                     type: "group",
                     enableType: true,
                     searchPlaceholder: "Type character...",
                     customGenerator: (input) => `Inspired by ${input} role from Harry Potter Universe, depict subject as a wizard/witch human. Inspired costume, posture, environment. Preserve subject identity.`,
                     options: {
                         "Harry Potter": { type: "static", prompt: "Inspired by Harry Potter role from Harry Potter Universe, depict subject as a wizard student human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Hermione Granger": { type: "static", prompt: "Inspired by Hermione Granger role from Harry Potter Universe, depict subject as a brilliant witch human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Ron Weasley": { type: "static", prompt: "Inspired by Ron Weasley role from Harry Potter Universe, depict subject as a loyal wizard human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Dumbledore": { type: "static", prompt: "Inspired by Dumbledore role from Harry Potter Universe, depict subject as a wise headmaster human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Voldemort": { type: "static", prompt: "Inspired by Voldemort role from Harry Potter Universe, depict subject as a dark wizard human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Snape": { type: "static", prompt: "Inspired by Snape role from Harry Potter Universe, depict subject as a potions master human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Draco Malfoy": { type: "static", prompt: "Inspired by Draco Malfoy role from Harry Potter Universe, depict subject as a slytherin student human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Hagrid": { type: "static", prompt: "Inspired by Hagrid role from Harry Potter Universe, depict subject as a half-giant keeper human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Sirius Black": { type: "static", prompt: "Inspired by Sirius Black role from Harry Potter Universe, depict subject as a renegade wizard human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Dobby": { type: "static", prompt: "Inspired by Dobby role from Harry Potter Universe, depict subject as a house-elf inspired human. Inspired costume, posture, environment. Preserve subject identity." }
                     }
                 },
                 "Lord of the Rings Universe": {
                     type: "group",
                     enableType: true,
                     searchPlaceholder: "Type character...",
                     customGenerator: (input) => `Inspired by ${input} role from Lord of the Rings Universe, depict subject as a fantasy character human. Inspired costume, posture, environment. Preserve subject identity.`,
                     options: {
                         "Gandalf": { type: "static", prompt: "Inspired by Gandalf role from Lord of the Rings Universe, depict subject as a grey wizard human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Aragorn": { type: "static", prompt: "Inspired by Aragorn role from Lord of the Rings Universe, depict subject as a ranger king human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Legolas": { type: "static", prompt: "Inspired by Legolas role from Lord of the Rings Universe, depict subject as an elven archer human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Frodo": { type: "static", prompt: "Inspired by Frodo role from Lord of the Rings Universe, depict subject as a ring-bearer human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Gollum": { type: "static", prompt: "Inspired by Gollum role from Lord of the Rings Universe, depict subject as a corrupted creature inspired human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Sauron": { type: "static", prompt: "Inspired by Sauron role from Lord of the Rings Universe, depict subject as a dark lord armor human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Galadriel": { type: "static", prompt: "Inspired by Galadriel role from Lord of the Rings Universe, depict subject as an elven queen human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Gimli": { type: "static", prompt: "Inspired by Gimli role from Lord of the Rings Universe, depict subject as a dwarven warrior human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Samwise": { type: "static", prompt: "Inspired by Samwise role from Lord of the Rings Universe, depict subject as a loyal gardener human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Saruman": { type: "static", prompt: "Inspired by Saruman role from Lord of the Rings Universe, depict subject as a white wizard human. Inspired costume, posture, environment. Preserve subject identity." }
                     }
                 },
                 "Game of Thrones Universe": {
                     type: "group",
                     enableType: true,
                     searchPlaceholder: "Type character...",
                     customGenerator: (input) => `Inspired by ${input} role from Game of Thrones Universe, depict subject as a medieval fantasy human. Inspired costume, posture, environment. Preserve subject identity.`,
                     options: {
                         "Jon Snow": { type: "static", prompt: "Inspired by Jon Snow role from Game of Thrones Universe, depict subject as a night's watch warrior human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Daenerys": { type: "static", prompt: "Inspired by Daenerys role from Game of Thrones Universe, depict subject as a dragon queen human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Tyrion": { type: "static", prompt: "Inspired by Tyrion role from Game of Thrones Universe, depict subject as a wise nobleman human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Arya": { type: "static", prompt: "Inspired by Arya role from Game of Thrones Universe, depict subject as a faceless assassin human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Cersei": { type: "static", prompt: "Inspired by Cersei role from Game of Thrones Universe, depict subject as a westeros queen human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Jaime": { type: "static", prompt: "Inspired by Jaime role from Game of Thrones Universe, depict subject as a kingsguard knight human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Sansa": { type: "static", prompt: "Inspired by Sansa role from Game of Thrones Universe, depict subject as a lady of winterfell human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Night King": { type: "static", prompt: "Inspired by Night King role from Game of Thrones Universe, depict subject as a white walker leader human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Khal Drogo": { type: "static", prompt: "Inspired by Khal Drogo role from Game of Thrones Universe, depict subject as a dothraki warlord human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Ned Stark": { type: "static", prompt: "Inspired by Ned Stark role from Game of Thrones Universe, depict subject as a lord of winterfell human. Inspired costume, posture, environment. Preserve subject identity." }
                     }
                 },
                 "Assassin’s Creed Universe": {
                     type: "group",
                     enableType: true,
                     searchPlaceholder: "Type character...",
                     customGenerator: (input) => `Inspired by ${input} role from Assassin’s Creed Universe, depict subject as an assassin human. Inspired costume, posture, environment. Preserve subject identity.`,
                     options: {
                         "Ezio": { type: "static", prompt: "Inspired by Ezio role from Assassin’s Creed Universe, depict subject as a renaissance assassin human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Altair": { type: "static", prompt: "Inspired by Altair role from Assassin’s Creed Universe, depict subject as a master assassin human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Connor": { type: "static", prompt: "Inspired by Connor role from Assassin’s Creed Universe, depict subject as a colonial assassin human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Edward Kenway": { type: "static", prompt: "Inspired by Edward Kenway role from Assassin’s Creed Universe, depict subject as a pirate assassin human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Bayek": { type: "static", prompt: "Inspired by Bayek role from Assassin’s Creed Universe, depict subject as an egyptian medjay human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Kassandra": { type: "static", prompt: "Inspired by Kassandra role from Assassin’s Creed Universe, depict subject as a spartan mercenary human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Eivor": { type: "static", prompt: "Inspired by Eivor role from Assassin’s Creed Universe, depict subject as a viking raider human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Arno": { type: "static", prompt: "Inspired by Arno role from Assassin’s Creed Universe, depict subject as a french revolution assassin human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Evie Frye": { type: "static", prompt: "Inspired by Evie Frye role from Assassin’s Creed Universe, depict subject as a victorian assassin human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Desmond": { type: "static", prompt: "Inspired by Desmond role from Assassin’s Creed Universe, depict subject as a modern day assassin human. Inspired costume, posture, environment. Preserve subject identity." }
                     }
                 },
                 "Mortal Kombat Universe": {
                     type: "group",
                     enableType: true,
                     searchPlaceholder: "Type character...",
                     customGenerator: (input) => `Inspired by ${input} role from Mortal Kombat Universe, depict subject as a martial artist fighter human. Inspired costume, posture, environment. Preserve subject identity.`,
                     options: {
                         "Scorpion": { type: "static", prompt: "Inspired by Scorpion role from Mortal Kombat Universe, depict subject as a hellfire ninja human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Sub-Zero": { type: "static", prompt: "Inspired by Sub-Zero role from Mortal Kombat Universe, depict subject as an ice ninja human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Raiden": { type: "static", prompt: "Inspired by Raiden role from Mortal Kombat Universe, depict subject as a thunder god inspired human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Liu Kang": { type: "static", prompt: "Inspired by Liu Kang role from Mortal Kombat Universe, depict subject as a shaolin monk human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Kitana": { type: "static", prompt: "Inspired by Kitana role from Mortal Kombat Universe, depict subject as a fan-wielding princess human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Mileena": { type: "static", prompt: "Inspired by Mileena role from Mortal Kombat Universe, depict subject as a tarkatan clone inspired human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Johnny Cage": { type: "static", prompt: "Inspired by Johnny Cage role from Mortal Kombat Universe, depict subject as a hollywood action star human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Sonya Blade": { type: "static", prompt: "Inspired by Sonya Blade role from Mortal Kombat Universe, depict subject as a special forces officer human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Kano": { type: "static", prompt: "Inspired by Kano role from Mortal Kombat Universe, depict subject as a mercenary cyborg inspired human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Shang Tsung": { type: "static", prompt: "Inspired by Shang Tsung role from Mortal Kombat Universe, depict subject as a soul sorcerer human. Inspired costume, posture, environment. Preserve subject identity." }
                     }
                 },
                 "Cyberpunk Universe": {
                     type: "group",
                     enableType: true,
                     searchPlaceholder: "Type character...",
                     customGenerator: (input) => `Inspired by ${input} role from Cyberpunk Universe, depict subject as a futuristic cyberpunk human. Inspired costume, posture, environment. Preserve subject identity.`,
                     options: {
                         "V": { type: "static", prompt: "Inspired by V role from Cyberpunk Universe, depict subject as a mercenary edgerunner human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Johnny Silverhand": { type: "static", prompt: "Inspired by Johnny Silverhand role from Cyberpunk Universe, depict subject as a rockerboy rebel human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Jackie Welles": { type: "static", prompt: "Inspired by Jackie Welles role from Cyberpunk Universe, depict subject as a heywood solo human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Panam": { type: "static", prompt: "Inspired by Panam role from Cyberpunk Universe, depict subject as a nomad sniper human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Judy": { type: "static", prompt: "Inspired by Judy role from Cyberpunk Universe, depict subject as a braindance techie human. Inspired costume, posture, environment. Preserve subject identity." },
                         "David Martinez": { type: "static", prompt: "Inspired by David Martinez role from Cyberpunk Universe, depict subject as an edgerunner speedster human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Lucy": { type: "static", prompt: "Inspired by Lucy role from Cyberpunk Universe, depict subject as a netrunner human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Rebecca": { type: "static", prompt: "Inspired by Rebecca role from Cyberpunk Universe, depict subject as a gun-toting solo human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Adam Smasher": { type: "static", prompt: "Inspired by Adam Smasher role from Cyberpunk Universe, depict subject as a heavy cyborg inspired human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Rogue": { type: "static", prompt: "Inspired by Rogue role from Cyberpunk Universe, depict subject as a queen of the afterlife fixer human. Inspired costume, posture, environment. Preserve subject identity." }
                     }
                 },
                 "God of War Universe": {
                     type: "group",
                     enableType: true,
                     searchPlaceholder: "Type character...",
                     customGenerator: (input) => `Inspired by ${input} role from God of War Universe, depict subject as a mythological warrior human. Inspired costume, posture, environment. Preserve subject identity.`,
                     options: {
                         "Kratos": { type: "static", prompt: "Inspired by Kratos role from God of War Universe, depict subject as a spartan god of war inspired human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Atreus": { type: "static", prompt: "Inspired by Atreus role from God of War Universe, depict subject as a young archer human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Freya": { type: "static", prompt: "Inspired by Freya role from God of War Universe, depict subject as a vanir goddess inspired human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Baldur": { type: "static", prompt: "Inspired by Baldur role from God of War Universe, depict subject as a norse god inspired human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Thor": { type: "static", prompt: "Inspired by Thor role from God of War Universe, depict subject as a thunder god inspired human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Odin": { type: "static", prompt: "Inspired by Odin role from God of War Universe, depict subject as an all-father inspired human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Mimir": { type: "static", prompt: "Inspired by Mimir role from God of War Universe, depict subject as a wise head inspired human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Zeus": { type: "static", prompt: "Inspired by Zeus role from God of War Universe, depict subject as a king of gods inspired human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Ares": { type: "static", prompt: "Inspired by Ares role from God of War Universe, depict subject as a god of war inspired human. Inspired costume, posture, environment. Preserve subject identity." },
                         "Athena": { type: "static", prompt: "Inspired by Athena role from God of War Universe, depict subject as a goddess of wisdom inspired human. Inspired costume, posture, environment. Preserve subject identity." }
                     }
                 }
             }
        },
        "History": {
             type: "group",
             enableType: true,
             searchPlaceholder: "Type historical person...",
             customGenerator: (input) => {
                 const cleanInput = input && input.trim() ? input.trim() : "historical figure";
                 return `Depict the subject standing alongside ${cleanInput}. Subject has era-appropriate look. Historical figure reference presence only. Preserve subject identity.`;
             },
             options: {
                 "Mahatma Gandhi": { type: "static", prompt: "Depict the subject standing alongside Mahatma Gandhi in the Indian Independence era. Subject has era-appropriate look. Historical figure reference presence only. Preserve subject identity." },
                 "Nelson Mandela": { type: "static", prompt: "Depict the subject standing alongside Nelson Mandela in the Anti-Apartheid era. Subject has era-appropriate look. Historical figure reference presence only. Preserve subject identity." },
                 "Abraham Lincoln": { type: "static", prompt: "Depict the subject standing alongside Abraham Lincoln in the Civil War era. Subject has era-appropriate look. Historical figure reference presence only. Preserve subject identity." },
                 "Napoleon Bonaparte": { type: "static", prompt: "Depict the subject standing alongside Napoleon Bonaparte in the Napoleonic era. Subject has era-appropriate look. Historical figure reference presence only. Preserve subject identity." },
                 "Julius Caesar": { type: "static", prompt: "Depict the subject standing alongside Julius Caesar in the Roman Empire era. Subject has era-appropriate look. Historical figure reference presence only. Preserve subject identity." },
                 "Cleopatra": { type: "static", prompt: "Depict the subject standing alongside Cleopatra in the Ancient Egyptian era. Subject has era-appropriate look. Historical figure reference presence only. Preserve subject identity." },
                 "Alexander the Great": { type: "static", prompt: "Depict the subject standing alongside Alexander the Great in the Ancient Greek era. Subject has era-appropriate look. Historical figure reference presence only. Preserve subject identity." },
                 "Winston Churchill": { type: "static", prompt: "Depict the subject standing alongside Winston Churchill in the WWII era. Subject has era-appropriate look. Historical figure reference presence only. Preserve subject identity." },
                 "Leonardo da Vinci": { type: "static", prompt: "Depict the subject standing alongside Leonardo da Vinci in the Renaissance era. Subject has era-appropriate look. Historical figure reference presence only. Preserve subject identity." },
                 "Bhagat Singh": { type: "static", prompt: "Depict the subject standing alongside Bhagat Singh in the Indian Revolution era. Subject has era-appropriate look. Historical figure reference presence only. Preserve subject identity." }
             }
        }
    },
    "Fan Moment": {
        "Film Stars": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type role...",
            customGenerator: (input) => `Fan Moment with Film Star (${input}).`,
            options: {
                "Actors": { type: "group", enableType: true, searchPlaceholder: "Type actor...", customGenerator: (input) => `Fan Moment with Actor: ${input}`, options: {} },
                "Actresses": { type: "group", enableType: true, searchPlaceholder: "Type actress...", customGenerator: (input) => `Fan Moment with Actress: ${input}`, options: {} },
                "Directors": { type: "group", enableType: true, searchPlaceholder: "Type director...", customGenerator: (input) => `Fan Moment with Director: ${input}`, options: {} },
                "Producers": { type: "group", enableType: true, searchPlaceholder: "Type producer...", customGenerator: (input) => `Fan Moment with Producer: ${input}`, options: {} },
                "Screenwriters": { type: "group", enableType: true, searchPlaceholder: "Type screenwriter...", customGenerator: (input) => `Fan Moment with Screenwriter: ${input}`, options: {} },
                "Music Composers": { type: "group", enableType: true, searchPlaceholder: "Type composer...", customGenerator: (input) => `Fan Moment with Music Composer: ${input}`, options: {} },
                "Playback Singers": { type: "group", enableType: true, searchPlaceholder: "Type singer...", customGenerator: (input) => `Fan Moment with Playback Singer: ${input}`, options: {} },
                "Choreographers": { type: "group", enableType: true, searchPlaceholder: "Type choreographer...", customGenerator: (input) => `Fan Moment with Choreographer: ${input}`, options: {} },
                "Cinematographers": { type: "group", enableType: true, searchPlaceholder: "Type cinematographer...", customGenerator: (input) => `Fan Moment with Cinematographer: ${input}`, options: {} },
                "Editors": { type: "group", enableType: true, searchPlaceholder: "Type editor...", customGenerator: (input) => `Fan Moment with Editor: ${input}`, options: {} }
            }
        },
        "Sports Stars": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type role...",
            customGenerator: (input) => `Fan Moment with Sports Star (${input}).`,
            options: {
                "Professional Athletes": { type: "group", enableType: true, searchPlaceholder: "Type athlete...", customGenerator: (input) => `Fan Moment with Athlete: ${input}`, options: {} },
                "Team Players": { type: "group", enableType: true, searchPlaceholder: "Type player...", customGenerator: (input) => `Fan Moment with Team Player: ${input}`, options: {} },
                "Team Captains": { type: "group", enableType: true, searchPlaceholder: "Type captain...", customGenerator: (input) => `Fan Moment with Team Captain: ${input}`, options: {} },
                "Former Players / Legends": { type: "group", enableType: true, searchPlaceholder: "Type legend...", customGenerator: (input) => `Fan Moment with Legend: ${input}`, options: {} },
                "Coaches": { type: "group", enableType: true, searchPlaceholder: "Type coach...", customGenerator: (input) => `Fan Moment with Coach: ${input}`, options: {} },
                "Trainers": { type: "group", enableType: true, searchPlaceholder: "Type trainer...", customGenerator: (input) => `Fan Moment with Trainer: ${input}`, options: {} },
                "Sports Commentators": { type: "group", enableType: true, searchPlaceholder: "Type commentator...", customGenerator: (input) => `Fan Moment with Commentator: ${input}`, options: {} },
                "Sports Analysts": { type: "group", enableType: true, searchPlaceholder: "Type analyst...", customGenerator: (input) => `Fan Moment with Analyst: ${input}`, options: {} }
            }
        },
        "Singers & Musicians": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type role...",
            customGenerator: (input) => `Fan Moment with Singer/Musician (${input}).`,
            options: {
                "Singers": { type: "group", enableType: true, searchPlaceholder: "Type singer...", customGenerator: (input) => `Fan Moment with Singer: ${input}`, options: {} },
                "Rappers": { type: "group", enableType: true, searchPlaceholder: "Type rapper...", customGenerator: (input) => `Fan Moment with Rapper: ${input}`, options: {} },
                "Vocalists": { type: "group", enableType: true, searchPlaceholder: "Type vocalist...", customGenerator: (input) => `Fan Moment with Vocalist: ${input}`, options: {} },
                "Music Composers": { type: "group", enableType: true, searchPlaceholder: "Type composer...", customGenerator: (input) => `Fan Moment with Composer: ${input}`, options: {} },
                "Lyricists": { type: "group", enableType: true, searchPlaceholder: "Type lyricist...", customGenerator: (input) => `Fan Moment with Lyricist: ${input}`, options: {} },
                "Music Producers": { type: "group", enableType: true, searchPlaceholder: "Type producer...", customGenerator: (input) => `Fan Moment with Producer: ${input}`, options: {} },
                "Instrumental Artists": { type: "group", enableType: true, searchPlaceholder: "Type artist...", customGenerator: (input) => `Fan Moment with Artist: ${input}`, options: {} },
                "Band Members": { type: "group", enableType: true, searchPlaceholder: "Type member...", customGenerator: (input) => `Fan Moment with Band Member: ${input}`, options: {} },
                "DJs": { type: "group", enableType: true, searchPlaceholder: "Type DJ...", customGenerator: (input) => `Fan Moment with DJ: ${input}`, options: {} },
                "Live Performers": { type: "group", enableType: true, searchPlaceholder: "Type performer...", customGenerator: (input) => `Fan Moment with Performer: ${input}`, options: {} }
            }
        },
        "Politicians": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type role...",
            customGenerator: (input) => `Fan Moment with Politician (${input}).`,
            options: {
                "Presidents": { type: "group", enableType: true, searchPlaceholder: "Type president...", customGenerator: (input) => `Fan Moment with President: ${input}`, options: {} },
                "Prime Ministers": { type: "group", enableType: true, searchPlaceholder: "Type PM...", customGenerator: (input) => `Fan Moment with Prime Minister: ${input}`, options: {} },
                "Chief Ministers": { type: "group", enableType: true, searchPlaceholder: "Type CM...", customGenerator: (input) => `Fan Moment with Chief Minister: ${input}`, options: {} },
                "Ministers": { type: "group", enableType: true, searchPlaceholder: "Type minister...", customGenerator: (input) => `Fan Moment with Minister: ${input}`, options: {} },
                "Parliament Members": { type: "group", enableType: true, searchPlaceholder: "Type member...", customGenerator: (input) => `Fan Moment with Parliament Member: ${input}`, options: {} },
                "Party Leaders": { type: "group", enableType: true, searchPlaceholder: "Type leader...", customGenerator: (input) => `Fan Moment with Party Leader: ${input}`, options: {} },
                "Political Speakers": { type: "group", enableType: true, searchPlaceholder: "Type speaker...", customGenerator: (input) => `Fan Moment with Political Speaker: ${input}`, options: {} },
                "Social Reform Leaders": { type: "group", enableType: true, searchPlaceholder: "Type leader...", customGenerator: (input) => `Fan Moment with Social Reform Leader: ${input}`, options: {} }
            }
        },
        "Content Creators": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type role...",
            customGenerator: (input) => `Fan Moment with Content Creator (${input}).`,
            options: {
                "YouTubers": { type: "group", enableType: true, searchPlaceholder: "Type YouTuber...", customGenerator: (input) => `Fan Moment with YouTuber: ${input}`, options: {} },
                "Vloggers": { type: "group", enableType: true, searchPlaceholder: "Type vlogger...", customGenerator: (input) => `Fan Moment with Vlogger: ${input}`, options: {} },
                "Live Streamers": { type: "group", enableType: true, searchPlaceholder: "Type streamer...", customGenerator: (input) => `Fan Moment with Live Streamer: ${input}`, options: {} },
                "Gamers": { type: "group", enableType: true, searchPlaceholder: "Type gamer...", customGenerator: (input) => `Fan Moment with Gamer: ${input}`, options: {} },
                "Influencers": { type: "group", enableType: true, searchPlaceholder: "Type influencer...", customGenerator: (input) => `Fan Moment with Influencer: ${input}`, options: {} },
                "Short-form Creators": { type: "group", enableType: true, searchPlaceholder: "Type creator...", customGenerator: (input) => `Fan Moment with Short-form Creator: ${input}`, options: {} },
                "Educators": { type: "group", enableType: true, searchPlaceholder: "Type educator...", customGenerator: (input) => `Fan Moment with Educator: ${input}`, options: {} },
                "Tech Creators": { type: "group", enableType: true, searchPlaceholder: "Type creator...", customGenerator: (input) => `Fan Moment with Tech Creator: ${input}`, options: {} }
            }
        },
        "Business Leaders": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type role...",
            customGenerator: (input) => `Fan Moment with Business Leader (${input}).`,
            options: {
                "Entrepreneurs": { type: "group", enableType: true, searchPlaceholder: "Type entrepreneur...", customGenerator: (input) => `Fan Moment with Entrepreneur: ${input}`, options: {} },
                "Startup Founders": { type: "group", enableType: true, searchPlaceholder: "Type founder...", customGenerator: (input) => `Fan Moment with Startup Founder: ${input}`, options: {} },
                "CEOs": { type: "group", enableType: true, searchPlaceholder: "Type CEO...", customGenerator: (input) => `Fan Moment with CEO: ${input}`, options: {} },
                "Executives": { type: "group", enableType: true, searchPlaceholder: "Type executive...", customGenerator: (input) => `Fan Moment with Executive: ${input}`, options: {} },
                "Business Innovators": { type: "group", enableType: true, searchPlaceholder: "Type innovator...", customGenerator: (input) => `Fan Moment with Business Innovator: ${input}`, options: {} },
                "Industry Leaders": { type: "group", enableType: true, searchPlaceholder: "Type leader...", customGenerator: (input) => `Fan Moment with Industry Leader: ${input}`, options: {} },
                "Motivational Business Speakers": { type: "group", enableType: true, searchPlaceholder: "Type speaker...", customGenerator: (input) => `Fan Moment with Speaker: ${input}`, options: {} }
            }
        },
        "Public Speakers & Authors": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type role...",
            customGenerator: (input) => `Fan Moment with Speaker/Author (${input}).`,
            options: {
                "Motivational Speakers": { type: "group", enableType: true, searchPlaceholder: "Type speaker...", customGenerator: (input) => `Fan Moment with Motivational Speaker: ${input}`, options: {} },
                "Thought Leaders": { type: "group", enableType: true, searchPlaceholder: "Type leader...", customGenerator: (input) => `Fan Moment with Thought Leader: ${input}`, options: {} },
                "Authors": { type: "group", enableType: true, searchPlaceholder: "Type author...", customGenerator: (input) => `Fan Moment with Author: ${input}`, options: {} },
                "Book Writers": { type: "group", enableType: true, searchPlaceholder: "Type writer...", customGenerator: (input) => `Fan Moment with Book Writer: ${input}`, options: {} },
                "Professors": { type: "group", enableType: true, searchPlaceholder: "Type professor...", customGenerator: (input) => `Fan Moment with Professor: ${input}`, options: {} },
                "Educators": { type: "group", enableType: true, searchPlaceholder: "Type educator...", customGenerator: (input) => `Fan Moment with Educator: ${input}`, options: {} }
            }
        },
        "TV Personalities": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type role...",
            customGenerator: (input) => `Fan Moment with TV Personality (${input}).`,
            options: {
                "TV Show Hosts": { type: "group", enableType: true, searchPlaceholder: "Type host...", customGenerator: (input) => `Fan Moment with Host: ${input}`, options: {} },
                "Anchors": { type: "group", enableType: true, searchPlaceholder: "Type anchor...", customGenerator: (input) => `Fan Moment with Anchor: ${input}`, options: {} },
                "Reality Show Stars": { type: "group", enableType: true, searchPlaceholder: "Type star...", customGenerator: (input) => `Fan Moment with Star: ${input}`, options: {} },
                "Judges": { type: "group", enableType: true, searchPlaceholder: "Type judge...", customGenerator: (input) => `Fan Moment with Judge: ${input}`, options: {} },
                "News Anchors": { type: "group", enableType: true, searchPlaceholder: "Type anchor...", customGenerator: (input) => `Fan Moment with News Anchor: ${input}`, options: {} },
                "TV Journalists": { type: "group", enableType: true, searchPlaceholder: "Type journalist...", customGenerator: (input) => `Fan Moment with Journalist: ${input}`, options: {} }
            }
        },
        "Digital Celebrities": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type role...",
            customGenerator: (input) => `Fan Moment with Digital Celebrity (${input}).`,
            options: {
                "Social Media Personalities": { type: "group", enableType: true, searchPlaceholder: "Type personality...", customGenerator: (input) => `Fan Moment with Social Media Personality: ${input}`, options: {} },
                "Internet Celebrities": { type: "group", enableType: true, searchPlaceholder: "Type celebrity...", customGenerator: (input) => `Fan Moment with Internet Celebrity: ${input}`, options: {} },
                "Meme Creators": { type: "group", enableType: true, searchPlaceholder: "Type creator...", customGenerator: (input) => `Fan Moment with Meme Creator: ${input}`, options: {} },
                "Trend Creators": { type: "group", enableType: true, searchPlaceholder: "Type creator...", customGenerator: (input) => `Fan Moment with Trend Creator: ${input}`, options: {} }
            }
        },
        "Global Icons": {
            type: "group",
            enableType: true,
            searchPlaceholder: "Type role...",
            customGenerator: (input) => `Fan Moment with Global Icon (${input}).`,
            options: {
                "Cultural Icons": { type: "group", enableType: true, searchPlaceholder: "Type icon...", customGenerator: (input) => `Fan Moment with Cultural Icon: ${input}`, options: {} },
                "International Celebrities": { type: "group", enableType: true, searchPlaceholder: "Type celebrity...", customGenerator: (input) => `Fan Moment with International Celebrity: ${input}`, options: {} },
                "Multi-domain Personalities": { type: "group", enableType: true, searchPlaceholder: "Type personality...", customGenerator: (input) => `Fan Moment with Multi-domain Personality: ${input}`, options: {} }
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
