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
        type: 'input',
        prompt: "Video based on text: ${input}",
        examples: ["Describe your video scene...", "Story about a hero...", "Abstract concept..."]
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
