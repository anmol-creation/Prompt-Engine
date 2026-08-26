
export const fixImageCategory = {
    type: 'group',
    options: {
        "Aspect Ratio": {
            type: "group",
            options: {
                "1:1": { type: "static", prompt: "Set aspect ratio to 1:1." },
                "4:5": { type: "static", prompt: "Set aspect ratio to 4:5." },
                "9:16": { type: "static", prompt: "Set aspect ratio to 9:16." },
                "16:9": { type: "static", prompt: "Set aspect ratio to 16:9." }
            }
        },
        "Fix Background": {
            type: "group",
            options: {
                "Replace Background": {
                    type: "group",
                    // This tells the UI to look for a vehicle
                    vehicleEnabled: false,
                    options: {
                        "Type": {
                            type: "input",
                            prompt: "Background: ${input}"
                        },
                        "Auto AI": {
                            type: "static",
                            prompt: "Automatically optimize and enhance the image."
                        },
                        "Nature & Landscapes": {
                            type: "group",
                            options: {
                                "Type": {
                                    type: "input",
                                    prompt: "Background: ${input}"
                                },
                                "Dense Forest": { type: "static", prompt: "with a dense forest background having sunlight beams" },
                                "Tropical Beach": { type: "static", prompt: "with a tropical beach background featuring sand and palm trees" },
                                "Snowy Mountains": { type: "static", prompt: "with a snowy mountain background (Himalayas vibe)" },
                                "Flower Garden": { type: "static", prompt: "with a colorful flower garden background" },
                                "Desert Dunes": { type: "static", prompt: "with a desert dunes background" },
                                "Waterfall": { type: "static", prompt: "with a scenic waterfall background" },
                                "Sunset Horizon": { type: "static", prompt: "with an open sky sunset horizon background" }
                            }
                        },
                        "Urban & City Life": {
                            type: "group",
                            options: {
                                "Type": {
                                    type: "input",
                                    prompt: "Background: ${input}"
                                },
                                "Busy Street": { type: "static", prompt: "with a blurred busy city street background" },
                                "City Rooftop": { type: "static", prompt: "on a city rooftop with night lights in the background" },
                                "Cozy Cafe": { type: "static", prompt: "inside a cozy cafe setting" },
                                "Cyberpunk Street": { type: "static", prompt: "on a futuristic cyberpunk street with neon lights" },
                                "Highway": { type: "static", prompt: "on a long highway road background" },
                                "Graffiti Wall": { type: "static", prompt: "standing in front of a street art graffiti wall" }
                            }
                        },
                        "Indoors & Architecture": {
                            type: "group",
                            options: {
                                "Type": {
                                    type: "input",
                                    prompt: "Background: ${input}"
                                },
                                "Modern Living Room": { type: "static", prompt: "inside a modern living room" },
                                "Luxury Bedroom": { type: "static", prompt: "inside a luxury hotel-style bedroom" },
                                "Modern Kitchen": { type: "static", prompt: "inside a clean modern kitchen" },
                                "Classic Library": { type: "static", prompt: "inside a classic library with bookshelves" },
                                "Office Desk": { type: "static", prompt: "at a corporate office desk workspace" },
                                "Gym / Fitness Center": { type: "static", prompt: "inside a gym fitness center" }
                            }
                        },
                        "Studio & Professional": {
                            type: "group",
                            options: {
                                "Type": {
                                    type: "input",
                                    prompt: "Background: ${input}"
                                },
                                "Solid White": { type: "static", prompt: "with a clean solid white background" },
                                "Solid Black": { type: "static", prompt: "with a dramatic solid black background" },
                                "Grey Studio": { type: "static", prompt: "with a professional grey studio background" },
                                "Green Screen": { type: "static", prompt: "with a chroma key green screen background" },
                                "Abstract Gradient": { type: "static", prompt: "with a soft abstract color gradient background" },
                                "Bokeh Lights": { type: "static", prompt: "with a blurred golden bokeh lights background" },
                                "Textured Wall": { type: "static", prompt: "against a textured brick or concrete wall" }
                            }
                        },
                        "Luxury & Travel": {
                            type: "group",
                            options: {
                                "Type": {
                                    type: "input",
                                    prompt: "Background: ${input}"
                                },
                                "Private Jet Interior": { type: "static", prompt: "inside a luxury private jet" },
                                "Yacht Deck": { type: "static", prompt: "on a luxury yacht deck with sea view" },
                                "Poolside": { type: "static", prompt: "at a luxury resort poolside" },
                                "Royal Palace": { type: "static", prompt: "inside a royal palace with chandeliers" },
                                "Paris Eiffel Tower": { type: "static", prompt: "with the Eiffel Tower in the background" }
                            }
                        },
                        "Famous Places": {
                            type: "group",
                            options: {
                                "Type": {
                                    type: "input",
                                    prompt: "Background: ${input}"
                                },
                                "Taj Mahal": { type: "static", prompt: "background replaced with the majestic Taj Mahal, symmetry, golden hour sunlight, reflection in water" },
                                "Eiffel Tower": { type: "static", prompt: "background replaced with the Eiffel Tower, Paris, street view, romantic atmosphere" },
                                "Times Square": { type: "static", prompt: "background replaced with Times Square at night, neon billboards, glowing lights, busy city vibe" },
                                "Santorini": { type: "static", prompt: "background replaced with Santorini Greece, white buildings blue domes, bright ocean view" },
                                "Great Wall of China": { type: "static", prompt: "background replaced with the Great Wall of China, winding path on mountains, ancient stone" },
                                "Pyramids of Giza": { type: "static", prompt: "background replaced with the Pyramids of Giza, desert sand, clear blue sky" },
                                "Colosseum": { type: "static", prompt: "background replaced with the Roman Colosseum, ancient ruins, historic daylight scene" },
                                "Burj Khalifa": { type: "static", prompt: "background replaced with Dubai skyline featuring Burj Khalifa, modern luxury, sunset view" },
                                "Mount Fuji": { type: "static", prompt: "background replaced with Mount Fuji Japan, cherry blossoms in foreground, scenic view" },
                                "Statue of Liberty": { type: "static", prompt: "background replaced with the Statue of Liberty, NY harbor, wide angle cinematic shot" },
                                "London Bridge": { type: "static", prompt: "background replaced with Tower Bridge London, River Thames, cloudy dramatic sky" },
                                "Machu Picchu": { type: "static", prompt: "background replaced with Machu Picchu ruins, green mountains, misty clouds" }
                            }
                        },
                        "Public Space": {
                            type: "group",
                            options: {
                                "Type": {
                                    type: "input",
                                    prompt: "Background: ${input}"
                                },
                                "Shopping Mall": { type: "static", prompt: "background replaced with a luxury shopping mall interior, bright lighting, glass storefronts, bustling atmosphere" },
                                "Restaurant & Cafe": { type: "static", prompt: "background replaced with an aesthetic cafe interior, warm ambient fairy lights, wooden tables, window view" },
                                "Railway Station": { type: "static", prompt: "background replaced with a busy railway station platform, vintage train in background, cinematic lighting" },
                                "Airport Terminal": { type: "static", prompt: "background replaced with a modern airport terminal, large glass windows, airplanes on runway outside" },
                                "Museum / Art Gallery": { type: "static", prompt: "background replaced with a modern art museum interior, elegant gallery lighting, paintings on the wall" },
                                "Playground": { type: "static", prompt: "background replaced with an outdoor children's playground, green grass, slides and swings, sunny cheerful day" },
                                "Amusement Park": { type: "static", prompt: "background replaced with a colorful amusement park, giant ferris wheel in background, sunset sky" },
                                "Busy Crosswalk": { type: "static", prompt: "background replaced with a busy city crosswalk, zebra crossing, skyscrapers, cinematic depth of field" },
                                "Neon Alley": { type: "static", prompt: "background replaced with a narrow neon-lit alleyway, wet street reflection, moody night vibe" },
                                "City Park": { type: "static", prompt: "background replaced with a beautiful city park, large green trees, sunny afternoon, central park vibe" },
                                "Retro Arcade": { type: "static", prompt: "background replaced with a retro gaming arcade, glowing neon lights, vintage arcade machines" },
                                "Music Concert": { type: "static", prompt: "background replaced with a crowded music concert, stage lights, lasers, energetic festival atmosphere" },
                                "Gym": { type: "static", prompt: "background replaced with a modern gym interior, workout equipment, dark aesthetic, fitness lighting" },
                                "Library": { type: "static", prompt: "background replaced with a grand classic library, tall wooden bookshelves, reading tables, soft warm light" }
                            }
                        }
                    }
                },
                "Green Screen Background": {
                    type: "static",
                    prompt: "Replace background with a solid green screen. Ensure even lighting on the background, no texture, no gradients. Clean subject edges for easy keying."
                },
                "Improve Background": {
                    type: "static",
                    prompt: [
                        "Improve the existing background by correcting colors, fixing lighting, adjusting sharpness, and removing noise or artifacts. Preserve the original background identity; do not remove or replace it.",
                        "Enhance the quality of the current background. Fix noisy areas and balance lighting, but strictly maintain the original background elements and structure.",
                        "Refine background details and colors to look more professional. Remove visual artifacts while keeping the exact same background environment intact."
                    ]
                },
                "Blur Background": {
                    type: "static",
                    prompt: [
                        "Apply natural background blur only. Do not blur or alter the subject. Preserve original background structure and colors.",
                        "Add a realistic depth of field blur to the background environment. Keep the main subject perfectly sharp and unchanged.",
                        "Softly blur the surroundings while maintaining sharp focus on the subject. Ensure the original background hues and shapes remain recognizable."
                    ]
                }
            }
        },
        "Remove Distractions": {
            type: "static",
            prompt: [
                "Remove distracting background elements such as unnecessary people, clutter, wires, random objects, or visual noise that reduce image quality, while preserving the main subject and important scene elements.",
                "Clean up the environment by eliminating random background distractions and noise, ensuring the primary subject remains the absolute focus.",
                "Declutter the background. Erase photobombers, stray objects, and unnecessary details without modifying the original subject."
            ]
        },
        "Improve Quality": {
            type: "static",
            prompt: [
                "Improve overall clarity and sharpness. Reduce noise.",
                "Enhance the overall image resolution, making details crisper and eliminating visual grain.",
                "Boost image quality by sharpening soft areas and removing any pixelation or artifacts."
            ]
        },
        "Fix Face": {
            type: "group",
            options: {
                "Fix Clarity": {
                    type: "static",
                    prompt: [
                        "Improve face clarity. Preserve subject identity.",
                        "Sharpen facial features while keeping the exact likeness of the person.",
                        "Enhance facial details and clarity without morphing the original identity."
                    ]
                },
                "Fix Skin Tone": {
                    type: "static",
                    prompt: [
                        "Balance natural skin tone. Preserve subject identity.",
                        "Correct the skin coloration to look natural and even. Maintain the subject's true likeness.",
                        "Adjust skin hues for a realistic tone while preserving the original facial identity."
                    ]
                }
            }
        },
        "Fix Lighting": {
            type: "static",
            prompt: [
                "Balance exposure with respect to the subject.",
                "Correct the lighting and exposure to ensure the subject is well-lit and clearly visible.",
                "Adjust the light levels naturally so the main subject stands out without overexposure."
            ]
        },
        "Color Correction": {
            type: "static",
            prompt: [
                "Automatically balance the colors in this image. Fix any unnatural tints, adjust white balance, and ensure vibrant yet realistic and true-to-life colors.",
                "Restore the natural color palette of the image. Neutralize color casts and enhance overall color depth without oversaturating.",
                "Apply professional auto-color correction. Ensure skin tones and environmental colors appear completely natural and balanced."
            ]
        },
        "Restore Old Photo": {
            type: "static",
            prompt: [
                "Restore this old or damaged photo. Remove scratches, dust, and artifacts, and gently enhance clarity while preserving the original historical look and feel.",
                "Carefully repair this vintage photograph. Fix physical damage marks, reduce noise, and smoothly restore faded details without altering the subject's identity.",
                "Breathe new life into this old image. Auto-repair tears, scratches, and grain, bringing back original clarity and lost details seamlessly."
            ]
        },
        "Natural Body Structure": {
            type: "static",
            prompt: [
                "Fix and correct any AI-generated structural anomalies in the subject's body. Ensure perfect human anatomy, especially fixing distorted eyes, hands, and proportions naturally.",
                "Restore perfect anatomical correctness to the subject. Fix extra or missing fingers, asymmetrical facial features, and ensure the body structure looks 100% natural and realistic.",
                "Correct physical distortions in the image. Ensure the subject's hands, eyes, and overall posture obey natural human anatomy without introducing new artifacts."
            ]
        }
    }
};
