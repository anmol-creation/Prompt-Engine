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
    "Text → Video": {
        type: 'group',
        options: {
            "Lifestyle & Daily Life": {
                type: 'group',
                options: {
                    "Morning routine": { type: 'option', prompt: "Category: Lifestyle & Daily Life. Title: Morning routine" },
                    "Coffee shop vlog": { type: 'option', prompt: "Category: Lifestyle & Daily Life. Title: Coffee shop vlog" },
                    "Working from home": { type: 'option', prompt: "Category: Lifestyle & Daily Life. Title: Working from home" },
                    "Gym / Workout": { type: 'option', prompt: "Category: Lifestyle & Daily Life. Title: Gym / Workout" },
                    "Cooking / Meal Prep": { type: 'option', prompt: "Category: Lifestyle & Daily Life. Title: Cooking / Meal Prep" },
                    "Shopping Haul": { type: 'option', prompt: "Category: Lifestyle & Daily Life. Title: Shopping Haul" },
                    "Night Routine": { type: 'option', prompt: "Category: Lifestyle & Daily Life. Title: Night Routine" },
                    "Study with Me": { type: 'option', prompt: "Category: Lifestyle & Daily Life. Title: Study with Me" }
                }
            },
            "Romantic / Love": {
                type: 'group',
                options: {
                    "Couple walking on beach": { type: 'option', prompt: "Category: Romantic / Love. Title: Couple walking on beach" },
                    "Proposal scene": { type: 'option', prompt: "Category: Romantic / Love. Title: Proposal scene" },
                    "Dinner date": { type: 'option', prompt: "Category: Romantic / Love. Title: Dinner date" },
                    "Wedding Highlight": { type: 'option', prompt: "Category: Romantic / Love. Title: Wedding Highlight" },
                    "First Date": { type: 'option', prompt: "Category: Romantic / Love. Title: First Date" },
                    "Holding Hands": { type: 'option', prompt: "Category: Romantic / Love. Title: Holding Hands" },
                    "Sunset Kiss": { type: 'option', prompt: "Category: Romantic / Love. Title: Sunset Kiss" }
                }
            },
            "Cinematic / Movie Style": {
                type: 'group',
                options: {
                    "Action chase": { type: 'option', prompt: "Category: Cinematic / Movie Style. Title: Action chase" },
                    "Dramatic dialogue": { type: 'option', prompt: "Category: Cinematic / Movie Style. Title: Dramatic dialogue" },
                    "Sci-fi opening": { type: 'option', prompt: "Category: Cinematic / Movie Style. Title: Sci-fi opening" },
                    "Slow Motion Walk": { type: 'option', prompt: "Category: Cinematic / Movie Style. Title: Slow Motion Walk" },
                    "Epic Landscape Reveal": { type: 'option', prompt: "Category: Cinematic / Movie Style. Title: Epic Landscape Reveal" },
                    "Mystery Thriller": { type: 'option', prompt: "Category: Cinematic / Movie Style. Title: Mystery Thriller" },
                    "Noir Detective": { type: 'option', prompt: "Category: Cinematic / Movie Style. Title: Noir Detective" }
                }
            },
            "Fashion & Style": {
                type: 'group',
                options: {
                    "Runway walk": { type: 'option', prompt: "Category: Fashion & Style. Title: Runway walk" },
                    "Outfit showcase": { type: 'option', prompt: "Category: Fashion & Style. Title: Outfit showcase" },
                    "Makeup tutorial": { type: 'option', prompt: "Category: Fashion & Style. Title: Makeup tutorial" },
                    "Streetwear Posing": { type: 'option', prompt: "Category: Fashion & Style. Title: Streetwear Posing" },
                    "Photoshoot Behind Scenes": { type: 'option', prompt: "Category: Fashion & Style. Title: Photoshoot Behind Scenes" },
                    "Get Ready With Me": { type: 'option', prompt: "Category: Fashion & Style. Title: Get Ready With Me" }
                }
            },
            "Travel & Adventure": {
                type: 'group',
                options: {
                    "Mountain hiking": { type: 'option', prompt: "Category: Travel & Adventure. Title: Mountain hiking" },
                    "City tour": { type: 'option', prompt: "Category: Travel & Adventure. Title: City tour" },
                    "Road trip": { type: 'option', prompt: "Category: Travel & Adventure. Title: Road trip" },
                    "Beach Vacation": { type: 'option', prompt: "Category: Travel & Adventure. Title: Beach Vacation" },
                    "Jungle Safari": { type: 'option', prompt: "Category: Travel & Adventure. Title: Jungle Safari" },
                    "Airport Vibes": { type: 'option', prompt: "Category: Travel & Adventure. Title: Airport Vibes" },
                    "Camping Night": { type: 'option', prompt: "Category: Travel & Adventure. Title: Camping Night" }
                }
            },
            "Royal / Luxury": {
                type: 'group',
                options: {
                    "Luxury car drive": { type: 'option', prompt: "Category: Royal / Luxury. Title: Luxury car drive" },
                    "Mansion tour": { type: 'option', prompt: "Category: Royal / Luxury. Title: Mansion tour" },
                    "Golden hour yacht": { type: 'option', prompt: "Category: Royal / Luxury. Title: Golden hour yacht" },
                    "Royal Palace Walk": { type: 'option', prompt: "Category: Royal / Luxury. Title: Royal Palace Walk" },
                    "Champagne Toast": { type: 'option', prompt: "Category: Royal / Luxury. Title: Champagne Toast" },
                    "Private Jet": { type: 'option', prompt: "Category: Royal / Luxury. Title: Private Jet" },
                    "Jewelry Showcase": { type: 'option', prompt: "Category: Royal / Luxury. Title: Jewelry Showcase" }
                }
            },
            "Fantasy / Creative": {
                type: 'group',
                options: {
                    "Magical forest": { type: 'option', prompt: "Category: Fantasy / Creative. Title: Magical forest" },
                    "Cyberpunk city": { type: 'option', prompt: "Category: Fantasy / Creative. Title: Cyberpunk city" },
                    "Flying cars": { type: 'option', prompt: "Category: Fantasy / Creative. Title: Flying cars" },
                    "Underwater World": { type: 'option', prompt: "Category: Fantasy / Creative. Title: Underwater World" },
                    "Space Station": { type: 'option', prompt: "Category: Fantasy / Creative. Title: Space Station" },
                    "Dragon Flight": { type: 'option', prompt: "Category: Fantasy / Creative. Title: Dragon Flight" },
                    "Dream Sequence": { type: 'option', prompt: "Category: Fantasy / Creative. Title: Dream Sequence" }
                }
            },
            "Moody / Aesthetic": {
                type: 'group',
                options: {
                    "Rainy window": { type: 'option', prompt: "Category: Moody / Aesthetic. Title: Rainy window" },
                    "Neon lights": { type: 'option', prompt: "Category: Moody / Aesthetic. Title: Neon lights" },
                    "Foggy street": { type: 'option', prompt: "Category: Moody / Aesthetic. Title: Foggy street" },
                    "Sunset Silhouette": { type: 'option', prompt: "Category: Moody / Aesthetic. Title: Sunset Silhouette" },
                    "Old Library": { type: 'option', prompt: "Category: Moody / Aesthetic. Title: Old Library" },
                    "Candlelight": { type: 'option', prompt: "Category: Moody / Aesthetic. Title: Candlelight" },
                    "Abstract Visuals": { type: 'option', prompt: "Category: Moody / Aesthetic. Title: Abstract Visuals" }
                }
            },
            "Fun / Cute": {
                type: 'group',
                options: {
                    "Puppies playing": { type: 'option', prompt: "Category: Fun / Cute. Title: Puppies playing" },
                    "Baby laughing": { type: 'option', prompt: "Category: Fun / Cute. Title: Baby laughing" },
                    "Funny dance": { type: 'option', prompt: "Category: Fun / Cute. Title: Funny dance" },
                    "Cat fails": { type: 'option', prompt: "Category: Fun / Cute. Title: Cat fails" },
                    "Friends Laughing": { type: 'option', prompt: "Category: Fun / Cute. Title: Friends Laughing" },
                    "Birthday Surprise": { type: 'option', prompt: "Category: Fun / Cute. Title: Birthday Surprise" }
                }
            },
            "Motivational / Inspirational": {
                type: 'group',
                options: {
                    "Workout montage": { type: 'option', prompt: "Category: Motivational / Inspirational. Title: Workout montage" },
                    "Sunrise yoga": { type: 'option', prompt: "Category: Motivational / Inspirational. Title: Sunrise yoga" },
                    "Studying hard": { type: 'option', prompt: "Category: Motivational / Inspirational. Title: Studying hard" },
                    "Speech on Stage": { type: 'option', prompt: "Category: Motivational / Inspirational. Title: Speech on Stage" },
                    "Climbing Mountain Top": { type: 'option', prompt: "Category: Motivational / Inspirational. Title: Climbing Mountain Top" },
                    "Team Success": { type: 'option', prompt: "Category: Motivational / Inspirational. Title: Team Success" }
                }
            },
            "Story / Narrative": {
                type: 'group',
                options: {
                    "Short film intro": { type: 'option', prompt: "Category: Story / Narrative. Title: Short film intro" },
                    "Flashback sequence": { type: 'option', prompt: "Category: Story / Narrative. Title: Flashback sequence" },
                    "Character backstory": { type: 'option', prompt: "Category: Story / Narrative. Title: Character backstory" },
                    "Unexpected Twist": { type: 'option', prompt: "Category: Story / Narrative. Title: Unexpected Twist" },
                    "Hero's Journey": { type: 'option', prompt: "Category: Story / Narrative. Title: Hero's Journey" },
                    "Ending Scene": { type: 'option', prompt: "Category: Story / Narrative. Title: Ending Scene" }
                }
            },
            "Business / Professional": {
                type: 'group',
                options: {
                    "Office meeting": { type: 'option', prompt: "Category: Business / Professional. Title: Office meeting" },
                    "Handshake": { type: 'option', prompt: "Category: Business / Professional. Title: Handshake" },
                    "Presentation": { type: 'option', prompt: "Category: Business / Professional. Title: Presentation" },
                    "Laptop Working": { type: 'option', prompt: "Category: Business / Professional. Title: Laptop Working" },
                    "Modern Office Tour": { type: 'option', prompt: "Category: Business / Professional. Title: Modern Office Tour" },
                    "Team Brainstorming": { type: 'option', prompt: "Category: Business / Professional. Title: Team Brainstorming" }
                }
            },
            "Product / Brand": {
                type: 'group',
                options: {
                    "Product reveal": { type: 'option', prompt: "Category: Product / Brand. Title: Product reveal" },
                    "Unboxing": { type: 'option', prompt: "Category: Product / Brand. Title: Unboxing" },
                    "Commercial shot": { type: 'option', prompt: "Category: Product / Brand. Title: Commercial shot" },
                    "360 Product View": { type: 'option', prompt: "Category: Product / Brand. Title: 360 Product View" },
                    "Close-up Details": { type: 'option', prompt: "Category: Product / Brand. Title: Close-up Details" },
                    "Luxury Watch": { type: 'option', prompt: "Category: Product / Brand. Title: Luxury Watch" }
                }
            },
            "Social Media Specific": {
                type: 'group',
                options: {
                    "TikTok trend": { type: 'option', prompt: "Category: Social Media Specific. Title: TikTok trend" },
                    "Instagram reel": { type: 'option', prompt: "Category: Social Media Specific. Title: Instagram reel" },
                    "Viral challenge": { type: 'option', prompt: "Category: Social Media Specific. Title: Viral challenge" },
                    "Youtube Intro": { type: 'option', prompt: "Category: Social Media Specific. Title: Youtube Intro" },
                    "Transition Effect": { type: 'option', prompt: "Category: Social Media Specific. Title: Transition Effect" },
                    "Looping Background": { type: 'option', prompt: "Category: Social Media Specific. Title: Looping Background" }
                }
            },
            "Festival / Culture": {
                type: 'group',
                options: {
                    "Diwali celebration": { type: 'option', prompt: "Category: Festival / Culture. Title: Diwali celebration" },
                    "Christmas market": { type: 'option', prompt: "Category: Festival / Culture. Title: Christmas market" },
                    "Traditional dance": { type: 'option', prompt: "Category: Festival / Culture. Title: Traditional dance" },
                    "Holi Colors": { type: 'option', prompt: "Category: Festival / Culture. Title: Holi Colors" },
                    "Eid Feast": { type: 'option', prompt: "Category: Festival / Culture. Title: Eid Feast" },
                    "New Year Fireworks": { type: 'option', prompt: "Category: Festival / Culture. Title: New Year Fireworks" },
                    "Cultural Parade": { type: 'option', prompt: "Category: Festival / Culture. Title: Cultural Parade" }
                }
            },
            "Nature / Environment": {
                type: 'group',
                options: {
                    "Waterfall": { type: 'option', prompt: "Category: Nature / Environment. Title: Waterfall" },
                    "Forest drone shot": { type: 'option', prompt: "Category: Nature / Environment. Title: Forest drone shot" },
                    "Blooming flowers": { type: 'option', prompt: "Category: Nature / Environment. Title: Blooming flowers" },
                    "Snowy Mountains": { type: 'option', prompt: "Category: Nature / Environment. Title: Snowy Mountains" },
                    "Desert Dunes": { type: 'option', prompt: "Category: Nature / Environment. Title: Desert Dunes" },
                    "Thunderstorm": { type: 'option', prompt: "Category: Nature / Environment. Title: Thunderstorm" },
                    "Autumn Leaves": { type: 'option', prompt: "Category: Nature / Environment. Title: Autumn Leaves" }
                }
            },
            "Action": {
                type: 'group',
                options: {
                    "Parkour": { type: 'option', prompt: "Category: Action. Title: Parkour" },
                    "Car drift": { type: 'option', prompt: "Category: Action. Title: Car drift" },
                    "Fight scene": { type: 'option', prompt: "Category: Action. Title: Fight scene" },
                    "Explosion Run": { type: 'option', prompt: "Category: Action. Title: Explosion Run" },
                    "Sword Fight": { type: 'option', prompt: "Category: Action. Title: Sword Fight" },
                    "Skydiving": { type: 'option', prompt: "Category: Action. Title: Skydiving" }
                }
            },
            "Horror": {
                type: 'group',
                options: {
                    "Haunted house": { type: 'option', prompt: "Category: Horror. Title: Haunted house" },
                    "Shadowy figure": { type: 'option', prompt: "Category: Horror. Title: Shadowy figure" },
                    "Eerie forest": { type: 'option', prompt: "Category: Horror. Title: Eerie forest" },
                    "Ghost in Mirror": { type: 'option', prompt: "Category: Horror. Title: Ghost in Mirror" },
                    "Zombie Chase": { type: 'option', prompt: "Category: Horror. Title: Zombie Chase" },
                    "Creepy Doll": { type: 'option', prompt: "Category: Horror. Title: Creepy Doll" }
                }
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
