// Video Simple Mode: Style & Vibe Category Brain Map
export const styleVibeCategory = {
    id: "style_vibe",
    title: "Style & Vibe",
    type: "group",
    options: {
        "Art & Visual Styles": {
            type: "group",
            options: {
                "Animation & 3D": {
                    type: "group",
                    options: {
                        "3D Pixar/Disney Style": { type: "option", prompt: "rendered in high-quality 3D animation with soft lighting and expressive, stylized features" },
                        "Anime / Manga Style": { type: "option", prompt: "animated in classic Japanese anime style with vibrant colors, dynamic lines, and cel-shaded lighting" },
                        "Stop-Motion (Claymation)": { type: "option", prompt: "animated in a choppy, tactile stop-motion style with visible textures like clay or paper" }
                    }
                },
                "Traditional & Painted": {
                    type: "group",
                    options: {
                        "Oil Painting / Impasto": { type: "option", prompt: "rendered with thick, expressive oil paint brushstrokes that swirl and blend" },
                        "Watercolor / Pastel": { type: "option", prompt: "styled with soft, bleeding watercolor washes and gentle, translucent pastel tones" },
                        "Pencil Sketch / Charcoal": { type: "option", prompt: "drawn in a raw, monochrome pencil or charcoal sketch style with visible hatching" }
                    }
                },
                "Futuristic & Surreal": {
                    type: "group",
                    options: {
                        "Cyberpunk / Synthwave": { type: "option", prompt: "styled with a dark, gritty cyberpunk aesthetic featuring glowing neon grids and retro-futuristic elements" },
                        "Surreal / Dreamscape": { type: "option", prompt: "rendered in a bizarre, surreal dreamscape with floating elements and impossible physics" }
                    }
                }
            }
        },
        "Video & Camera Effects": {
            type: "group",
            options: {
                "Time Alteration": {
                    type: "group",
                    options: {
                        "Slow Motion (Slo-Mo)": { type: "option", prompt: "rendered in ultra-smooth slow motion, emphasizing every detail of the movement" },
                        "Time-Lapse (Fast Forward)": { type: "option", prompt: "shot as a rapid time-lapse, showing the passage of time quickly with blurred motion" },
                        "Boomerang / Looping": { type: "option", prompt: "featuring a seamless, repeating boomerang loop motion" }
                    }
                },
                "Retro & Vintage": {
                    type: "group",
                    options: {
                        "VHS / Glitch Effect": { type: "option", prompt: "styled with retro 90s VHS tape artifacts, scanlines, color bleeding, and digital glitches" },
                        "Super 8mm / Old Film": { type: "option", prompt: "rendered with a vintage Super 8mm film look, including heavy film grain, scratches, and warm faded colors" },
                        "Black & White Noir": { type: "option", prompt: "shot in high-contrast classic black and white film noir style with deep shadows" }
                    }
                },
                "Optical Effects": {
                    type: "group",
                    options: {
                        "Lens Flare / Light Leaks": { type: "option", prompt: "featuring intense, cinematic lens flares and organic light leaks washing over the lens" },
                        "Motion Blur": { type: "option", prompt: "rendered with heavy, stylized motion blur to emphasize extreme speed and movement" }
                    }
                }
            }
        },
        "Cinematic Tones & Color Grading": {
            type: "group",
            options: {
                "Mood & Atmosphere": {
                    type: "group",
                    options: {
                        "Dark & Gritty": { type: "option", prompt: "color graded with a dark, desaturated, and gritty tone, emphasizing shadows and contrast" },
                        "Ethereal & Magical": { type: "option", prompt: "styled with a soft, glowing, and ethereal atmosphere featuring magical floating particles" },
                        "Vibrant & Pop": { type: "option", prompt: "color graded with hyper-vibrant, highly saturated pop colors that jump off the screen" },
                        "Muted & Melancholic": { type: "option", prompt: "color graded with soft, muted, and desaturated tones creating a sad, melancholic vibe" }
                    }
                }
            }
        }
    }
};