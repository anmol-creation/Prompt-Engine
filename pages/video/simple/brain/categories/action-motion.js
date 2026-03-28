// Video Simple Mode: Action & Motion Category Brain Map
export const actionMotionCategory = {
    id: "action_motion",
    title: "Action & Motion",
    type: "group",
    options: {
        "General Body Movement": {
            type: "group",
            options: {
                "Walking & Running": {
                    type: "group",
                    options: {
                        "Leisurely Walking": { type: "option", prompt: "walking leisurely with a relaxed posture and gentle, natural arm swing" },
                        "Power Walking": { type: "option", prompt: "power walking with a brisk, determined stride and purposeful arm movement" },
                        "Jogging": { type: "option", prompt: "jogging lightly with a steady, rhythmic pace and slight bounce" },
                        "Sprinting": { type: "option", prompt: "sprinting at high speed with an aggressive forward lean and powerful arm drive" },
                        "Sneaking/Tiptoeing": { type: "option", prompt: "sneaking cautiously on tiptoes with a low, stealthy profile and careful steps" }
                    }
                },
                "Jumping & Falling": {
                    type: "group",
                    options: {
                        "Leaping": { type: "option", prompt: "leaping forcefully into the air with limbs extended dynamically" },
                        "Free-falling": { type: "option", prompt: "free-falling rapidly with wind-blown clothes and flailing limbs" },
                        "Landing": { type: "option", prompt: "landing solidly on the ground, absorbing impact with bent knees and a steady stance" },
                        "Floating/Levitating": { type: "option", prompt: "floating or levitating weightlessly with gentle, suspended movements in mid-air" }
                    }
                },
                "Resting & Sitting": {
                    type: "group",
                    options: {
                        "Lounging": { type: "option", prompt: "lounging casually in a relaxed, reclined posture" },
                        "Sleeping": { type: "option", prompt: "sleeping peacefully with a still body and slow, rhythmic breathing" },
                        "Meditating": { type: "option", prompt: "meditating in a still, focused pose with eyes closed and serene expression" },
                        "Standing Still": { type: "option", prompt: "standing completely still with perfect posture and minimal movement" }
                    }
                }
            }
        },
        "Facial Expressions & Emotions": {
            type: "group",
            options: {
                "Happy & Joyful": {
                    type: "group",
                    options: {
                        "Smiling": { type: "option", prompt: "smiling warmly with relaxed facial muscles and soft eyes" },
                        "Laughing": { type: "option", prompt: "laughing heartily with mouth open, eyes crinkling, and shoulders shaking slightly" },
                        "Grinning": { type: "option", prompt: "grinning broadly from ear to ear with a gleeful, excited expression" },
                        "Tears of Joy": { type: "option", prompt: "smiling radiantly while tears of overwhelming joy streak down the face" }
                    }
                },
                "Sad & Upset": {
                    type: "group",
                    options: {
                        "Crying": { type: "option", prompt: "crying visibly with tears flowing, a trembling lip, and a sorrowful expression" },
                        "Frowning": { type: "option", prompt: "frowning deeply with a downturned mouth and furrowed brow expressing disappointment" },
                        "Pouting": { type: "option", prompt: "pouting sullenly with a pushed-out lower lip and a moody gaze" }
                    }
                },
                "Angry & Aggressive": {
                    type: "group",
                    options: {
                        "Shouting": { type: "option", prompt: "shouting angrily with a wide-open mouth, tense facial muscles, and flared nostrils" },
                        "Glaring": { type: "option", prompt: "glaring intensely with narrowed, piercing eyes and a stiff jaw" },
                        "Teeth Clenching": { type: "option", prompt: "clenching teeth tightly with a visibly tense jawline and a frustrated expression" }
                    }
                },
                "Surprise & Fear": {
                    type: "group",
                    options: {
                        "Gasping": { type: "option", prompt: "gasping in sudden shock with wide eyes and an open, intake-of-breath mouth" },
                        "Wide-eyed": { type: "option", prompt: "staring with completely wide, unblinking eyes expressing sheer astonishment" },
                        "Panicking": { type: "option", prompt: "looking around frantically with a panicked, erratic expression and rapid breathing" }
                    }
                }
            }
        },
        "Hand & Arm Gestures": {
            type: "group",
            options: {
                "Communication": {
                    type: "group",
                    options: {
                        "Waving": { type: "option", prompt: "waving a hand enthusiastically in greeting or farewell" },
                        "Pointing": { type: "option", prompt: "pointing a finger directly and firmly at a specific target or direction" },
                        "Thumbs Up/Down": { type: "option", prompt: "giving a clear thumbs up or down gesture with a decisive motion" },
                        "Clapping": { type: "option", prompt: "clapping hands together rhythmically in applause" }
                    }
                },
                "Interaction with Objects": {
                    type: "group",
                    options: {
                        "Grabbing": { type: "option", prompt: "reaching out and firmly grabbing an object with a sudden, deliberate motion" },
                        "Holding": { type: "option", prompt: "holding an object steadily and securely with a firm grip" },
                        "Throwing": { type: "option", prompt: "throwing an object forcefully with a full extension of the arm and follow-through" },
                        "Pushing/Pulling": { type: "option", prompt: "straining with effort while pushing or pulling heavily against resistance" }
                    }
                }
            }
        },
        "Combat & Action": {
            type: "group",
            options: {
                "Attacking": {
                    type: "group",
                    options: {
                        "Punching": { type: "option", prompt: "throwing a powerful, dynamic punch with full body rotation and aggressive momentum" },
                        "Kicking": { type: "option", prompt: "executing a swift, high-impact kick with precise form and explosive energy" },
                        "Shooting": { type: "option", prompt: "aiming and firing a weapon with a steady stance and recoil motion" },
                        "Swinging Weapon": { type: "option", prompt: "swinging a heavy weapon in a wide, forceful arc with intense effort" }
                    }
                },
                "Defending & Evading": {
                    type: "group",
                    options: {
                        "Blocking": { type: "option", prompt: "raising arms defensively in a tight, protective blocking stance" },
                        "Dodging": { type: "option", prompt: "dodging swiftly to the side with a rapid, evasive body shift" },
                        "Taking Cover": { type: "option", prompt: "ducking quickly and taking cover behind an obstacle with urgent, low movements" }
                    }
                }
            }
        },
        "Dance & Performance": {
            type: "group",
            options: {
                "Dancing Styles": {
                    type: "group",
                    options: {
                        "Ballet": { type: "option", prompt: "performing elegant ballet movements with graceful pirouettes and perfect poise" },
                        "Hip-Hop": { type: "option", prompt: "dancing energetic hip-hop with sharp popping, locking, and rhythmic bouncing" },
                        "Salsa": { type: "option", prompt: "dancing passionate salsa with quick, fluid footwork and expressive hip movements" },
                        "Contemporary": { type: "option", prompt: "performing expressive contemporary dance with emotional, sweeping, and fluid floorwork" }
                    }
                },
                "Performing Arts": {
                    type: "group",
                    options: {
                        "Singing": { type: "option", prompt: "singing passionately with an open mouth, expressive facial gestures, and emotional delivery" },
                        "Playing Instrument": { type: "option", prompt: "playing a musical instrument with rapid, focused hand movements and rhythmic body swaying" },
                        "Acting/Monologue": { type: "option", prompt: "delivering a dramatic acting performance with intense, changing facial expressions and broad gestures" }
                    }
                }
            }
        },
        "Cinematic Vehicle/Object Motion": {
            type: "group",
            options: {
                "Vehicles": {
                    type: "group",
                    options: {
                        "Speeding": { type: "option", prompt: "speeding recklessly fast with intense motion blur and trailing exhaust" },
                        "Drifting": { type: "option", prompt: "drifting aggressively around a corner with screeching tires and thick tire smoke" },
                        "Flying": { type: "option", prompt: "flying smoothly through the air with aerodynamic grace and banking maneuvers" },
                        "Crashing": { type: "option", prompt: "crashing violently with shattering debris, crumpling metal, and explosive impact" }
                    }
                },
                "Elements": {
                    type: "group",
                    options: {
                        "Exploding": { type: "option", prompt: "exploding dramatically outward with bright flashes, flying shrapnel, and billowing smoke" },
                        "Shattering": { type: "option", prompt: "shattering instantly into thousands of sharp, flying fragments" },
                        "Melting": { type: "option", prompt: "melting slowly into a viscous, dripping puddle under intense heat" },
                        "Swirling": { type: "option", prompt: "swirling dynamically in a fast, chaotic vortex or spiral pattern" }
                    }
                }
            }
        }
    }
};