import { PROMPTS } from '../../../../shared/constants.js';
import { replaceBgTypeGenerator } from '../../../../shared/prompt/generators.js';

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
                    vehicleEnabled: true,
                    options: {
                        "Type": {
                            type: "option",
                            enableType: true,
                            placeholder: "Eiffel Tower area, Paris",
                            customGenerator: replaceBgTypeGenerator
                        },
                        "Auto AI": {
                            type: "static",
                            prompt: PROMPTS.AUTO_AI
                        },
                        "Nature & Landscapes": {
                            type: "group",
                            options: {
                                "Type": {
                                    type: "option",
                                    enableType: true,
                                    placeholder: "Specific nature setting...",
                                    customGenerator: replaceBgTypeGenerator
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
                                    type: "option",
                                    enableType: true,
                                    placeholder: "Specific urban setting...",
                                    customGenerator: replaceBgTypeGenerator
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
                                    type: "option",
                                    enableType: true,
                                    placeholder: "Specific indoor setting...",
                                    customGenerator: replaceBgTypeGenerator
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
                                    type: "option",
                                    enableType: true,
                                    placeholder: "Specific studio setting...",
                                    customGenerator: replaceBgTypeGenerator
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
                                    type: "option",
                                    enableType: true,
                                    placeholder: "Specific luxury setting...",
                                    customGenerator: replaceBgTypeGenerator
                                },
                                "Private Jet Interior": { type: "static", prompt: "inside a luxury private jet" },
                                "Yacht Deck": { type: "static", prompt: "on a luxury yacht deck with sea view" },
                                "Poolside": { type: "static", prompt: "at a luxury resort poolside" },
                                "Royal Palace": { type: "static", prompt: "inside a royal palace with chandeliers" },
                                "Paris Eiffel Tower": { type: "static", prompt: "with the Eiffel Tower in the background" }
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
                    prompt: "Improve the existing background by correcting colors, fixing lighting, adjusting sharpness, and removing noise or artifacts. Preserve the original background identity; do not remove or replace it."
                }
            }
        },
        "Remove Distractions": {
            type: "static",
            prompt: "Remove distracting background elements such as unnecessary people, clutter, wires, random objects, or visual noise that reduce image quality, while preserving the main subject and important scene elements."
        },
        "Improve Quality": {
            type: "static",
            prompt: "Improve overall clarity and sharpness. Reduce noise."
        },
        "Fix Face": {
            type: "group",
            options: {
                "Fix Clarity": {
                    type: "static",
                    prompt: "Improve face clarity. Preserve subject identity."
                },
                "Fix Skin Tone": {
                    type: "static",
                    prompt: "Balance natural skin tone. Preserve subject identity."
                }
            }
        },
        "Fix Lighting": {
            type: "static",
            prompt: "Balance exposure with respect to the subject."
        }
    }
};
