export const videoCategories = {
    "Fix Video": {
        type: 'group',
        options: {
            "Fix Background": {
                type: 'group',
                options: {
                    "Blur Background": { type: 'option', prompt: "Fix Background: Blur Background" },
                    "Remove Background": { type: 'option', prompt: "Fix Background: Remove Background" },
                    "Green Screen": { type: 'option', prompt: "Fix Background: Green Screen" },
                    "Replace Background": {
                        type: 'input',
                        prompt: "Fix Background: Replace with ${input}",
                        examples: ["Beach", "Office", "Space"]
                    }
                }
            },
            "Remove Distractions": { type: 'option', prompt: "Fix Video: Remove Distractions" },
            "Improve Quality": { type: 'option', prompt: "Fix Video: Improve Quality" },
            "Fix Face": { type: 'option', prompt: "Fix Video: Fix Face" },
            "Fix Lighting": { type: 'option', prompt: "Fix Video: Fix Lighting" }
        }
    },
    "Create Video": {
        type: 'input',
        prompt: "${input}",
        examples: ["A futuristic city", "A cat playing piano", "A drone shot of mountains"]
    },
    "Text → Video": {
        type: 'group',
        options: {
            "Lifestyle & Daily Life": {
                type: 'input',
                prompt: "Category: Lifestyle & Daily Life. Scene: ${input}",
                examples: ["Morning routine", "Coffee shop vlog", "Working from home"]
            },
            "Romantic / Love": {
                type: 'input',
                prompt: "Category: Romantic / Love. Scene: ${input}",
                examples: ["Couple walking on beach", "Proposal scene", "Dinner date"]
            },
            "Cinematic / Movie Style": {
                type: 'input',
                prompt: "Category: Cinematic / Movie Style. Scene: ${input}",
                examples: ["Action chase", "Dramatic dialogue", "Sci-fi opening"]
            },
            "Fashion & Style": {
                type: 'input',
                prompt: "Category: Fashion & Style. Scene: ${input}",
                examples: ["Runway walk", "Outfit showcase", "Makeup tutorial"]
            },
            "Travel & Adventure": {
                type: 'input',
                prompt: "Category: Travel & Adventure. Scene: ${input}",
                examples: ["Mountain hiking", "City tour", "Road trip"]
            },
            "Royal / Luxury": {
                type: 'input',
                prompt: "Category: Royal / Luxury. Scene: ${input}",
                examples: ["Luxury car drive", "Mansion tour", "Golden hour yacht"]
            },
            "Fantasy / Creative": {
                type: 'input',
                prompt: "Category: Fantasy / Creative. Scene: ${input}",
                examples: ["Magical forest", "Cyberpunk city", "Flying cars"]
            },
            "Moody / Aesthetic": {
                type: 'input',
                prompt: "Category: Moody / Aesthetic. Scene: ${input}",
                examples: ["Rainy window", "Neon lights", "Foggy street"]
            },
            "Fun / Cute": {
                type: 'input',
                prompt: "Category: Fun / Cute. Scene: ${input}",
                examples: ["Puppies playing", "Baby laughing", "Funny dance"]
            },
            "Motivational / Inspirational": {
                type: 'input',
                prompt: "Category: Motivational / Inspirational. Scene: ${input}",
                examples: ["Workout montage", "Sunrise yoga", "Studying hard"]
            },
            "Story / Narrative": {
                type: 'input',
                prompt: "Category: Story / Narrative. Scene: ${input}",
                examples: ["Short film intro", "Flashback sequence", "Character backstory"]
            },
            "Business / Professional": {
                type: 'input',
                prompt: "Category: Business / Professional. Scene: ${input}",
                examples: ["Office meeting", "Handshake", "Presentation"]
            },
            "Product / Brand": {
                type: 'input',
                prompt: "Category: Product / Brand. Scene: ${input}",
                examples: ["Product reveal", "Unboxing", "Commercial shot"]
            },
            "Social Media Specific": {
                type: 'input',
                prompt: "Category: Social Media Specific. Scene: ${input}",
                examples: ["TikTok trend", "Instagram reel", "Viral challenge"]
            },
            "Festival / Culture": {
                type: 'input',
                prompt: "Category: Festival / Culture. Scene: ${input}",
                examples: ["Diwali celebration", "Christmas market", "Traditional dance"]
            },
            "Nature / Environment": {
                type: 'input',
                prompt: "Category: Nature / Environment. Scene: ${input}",
                examples: ["Waterfall", "Forest drone shot", "Blooming flowers"]
            },
            "Action": {
                type: 'input',
                prompt: "Category: Action. Scene: ${input}",
                examples: ["Parkour", "Car drift", "Fight scene"]
            },
            "Horror": {
                type: 'input',
                prompt: "Category: Horror. Scene: ${input}",
                examples: ["Haunted house", "Shadowy figure", "Eerie forest"]
            }
        }
    },
    "Image → Video": {
        type: 'input',
        prompt: "Video from image: ${input}",
        examples: ["Paste image URL...", "Describe the reference image..."]
    },
    "Video Style": {
        type: 'group',
        options: {
            "Cinematic": { type: 'option', prompt: "Style: Cinematic" },
            "Realistic": { type: 'option', prompt: "Style: Realistic" },
            "Animation": { type: 'option', prompt: "Style: Animation" },
            "Social Media": { type: 'option', prompt: "Style: Social Media" }
        }
    },
    "Speed / Motion": {
        type: 'group',
        options: {
            "Slow": { type: 'option', prompt: "Speed: Slow" },
            "Normal": { type: 'option', prompt: "Speed: Normal" },
            "Fast": { type: 'option', prompt: "Speed: Fast" }
        }
    },
    "Audio": {
        type: 'group',
        options: {
            "Background Music": {
                type: 'group',
                options: {
                    "On": { type: 'option', prompt: "Background Music: On" },
                    "Off": { type: 'option', prompt: "Background Music: Off" }
                }
            },
            "Voice-over": {
                type: 'group',
                options: {
                    "AI": { type: 'option', prompt: "Voice-over: AI" },
                    "None": { type: 'option', prompt: "Voice-over: None" }
                }
            }
        }
    },
    "Text on Video": {
        type: 'group',
        options: {
            "Title": {
                type: 'input',
                prompt: "Title: ${input}",
                examples: ["My Awesome Video", "Summer 2024", "The Beginning"]
            },
            "Caption": {
                type: 'input',
                prompt: "Caption: ${input}",
                examples: ["Subtitle text here...", "Explanation...", "Funny comment"]
            }
        }
    },
    "Filters / Look": {
        type: 'group',
        options: {
            "Warm": { type: 'option', prompt: "Filter: Warm" },
            "Cool": { type: 'option', prompt: "Filter: Cool" },
            "Dark": { type: 'option', prompt: "Filter: Dark" },
            "Bright": { type: 'option', prompt: "Filter: Bright" },
            "Vintage": { type: 'option', prompt: "Filter: Vintage" }
        }
    },
    "Presets (One Tap)": {
        type: 'group',
        options: {
            "Reel Ready": { type: 'option', prompt: "Preset: Reel Ready" },
            "Cinematic Look": { type: 'option', prompt: "Preset: Cinematic Look" },
            "Story Mode": { type: 'option', prompt: "Preset: Story Mode" },
            "Promo Video": { type: 'option', prompt: "Preset: Promo Video" }
        }
    },
    "Transitions": {
        type: 'group',
        options: {
            "Smooth": { type: 'option', prompt: "Transition: Smooth" },
            "Fade": { type: 'option', prompt: "Transition: Fade" },
            "None": { type: 'option', prompt: "Transition: None" }
        }
    }
};
