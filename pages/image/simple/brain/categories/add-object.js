// Category Data for Add Object
// Allows the user to insert specific tangible elements into the scene.

const ICONS = {
    object: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M574.1 280.37L528.75 98.66c-5.91-23.7-21.59-44.05-43-55.81-21.44-11.73-46.97-14.11-70.19-6.33l-15.25 5.08c-8.39 2.79-12.92 11.86-10.12 20.24l5.06 15.18c2.79 8.38 11.85 12.91 20.23 10.12l13.18-4.39c10.87-3.62 23-3.57 33.16 1.73 10.29 5.37 17.57 14.56 20.37 25.82l38.46 153.82c-22.19-6.81-49.79-12.46-81.2-12.46-34.77 0-73.98 7.02-114.85 26.74h-73.18c-40.87-19.74-80.08-26.75-114.86-26.75-31.42 0-59.02 5.65-81.21 12.46l38.46-153.83c2.79-11.25 10.09-20.45 20.38-25.81 10.16-5.3 22.28-5.35 33.15-1.73l13.17 4.39c8.38 2.79 17.44-1.74 20.23-10.12l5.06-15.18c2.8-8.38-1.73-17.45-10.12-20.24l-15.25-5.08c-23.22-7.78-48.75-5.41-70.19 6.33-21.41 11.77-37.09 32.11-43 55.8L1.9 280.37A64.218 64.218 0 0 0 0 295.86v70.25C0 429.01 51.58 480 115.2 480h37.12c60.28 0 110.37-45.94 114.88-105.37l2.93-38.63h35.75l2.93 38.63C313.31 434.06 363.4 480 423.68 480h37.12c63.62 0 115.2-50.99 115.2-113.88v-70.25c0-5.23-.64-10.43-1.9-15.5zm-370.72 89.42c-1.97 25.91-24.4 46.21-51.06 46.21H115.2C86.97 416 64 393.62 64 366.11v-37.54c18.12-6.49 43.42-12.92 72.58-12.92 23.86 0 47.26 4.33 69.93 12.92l-3.13 41.22zM512 366.12c0 27.51-22.97 49.88-51.2 49.88h-37.12c-26.67 0-49.1-20.3-51.06-46.21l-3.13-41.22c22.67-8.59 46.08-12.92 69.95-12.92 29.12 0 54.43 6.44 72.55 12.93v37.54z"/></svg>` // Generic Object/Accessory Icon
};

export const addObjectCategory = {
    type: 'group',
    options: {
        "Living Beings": {
            type: "group",
            icon: ICONS.object,
            options: {
                "Dog": {
                    type: "group",
                    options: {
                        "Gesture & Pose": {
                            type: "group",
                            options: {
                                "Shake Hands": { type: "option", prompt: "dog lifting paw to shake human hand, close up, cute interaction, trust" },
                                "High Five": { type: "option", prompt: "dog sitting on hind legs raising paw for a high five, enthusiastic pose" },
                                "Belly Rub": { type: "option", prompt: "dog lying on back exposing belly, happy expression, playful mode" },
                                "Begging / Paws Up": { type: "option", prompt: "dog sitting on hind legs with front paws joined, begging for treat, big puppy eyes" },
                                "Playing Fetch": { type: "option", prompt: "dog running back with a ball in mouth, grass background, playful energy" },
                                "Tug of War": { type: "option", prompt: "dog pulling a rope toy, dynamic action pose, growling expression" },
                                "Licking Face": { type: "option", prompt: "dog enthusiastically licking human face, blurry tail, pure joy, close up" },
                                "Head on Lap": { type: "option", prompt: "dog resting chin gently on person's lap, looking up with loving eyes, cozy atmosphere" },
                                "Sleeping Together": { type: "option", prompt: "dog sleeping soundly beside a person, peaceful, warm lighting" },
                                "Nose Boop": { type: "option", prompt: "close up macro shot of finger gently touching dog's wet nose, cute perspective" },
                                "Comforting": { type: "option", prompt: "dog resting head on sad person's shoulder, emotional support vibe" },
                                "Running (Zoomies)": { type: "option", prompt: "dog running towards camera at full speed, ears flopping in wind, tongue out, low angle action shot" },
                                "Catching Frisbee": { type: "option", prompt: "dog jumping mid-air catching a frisbee, athletic pose, sharp focus" },
                                "Swimming": { type: "option", prompt: "dog swimming in water, only head visible, splashing water, wet fur" },
                                "Head Tilt (Curious)": { type: "option", prompt: "dog looking directly at camera with head tilted to one side, curious and confused expression" },
                                "The Sploot (Funny)": { type: "option", prompt: "dog lying flat on stomach with hind legs stretched out behind like a frog" },
                                "Guarding / Alert": { type: "option", prompt: "dog standing tall, chest out, ears perked up, focused and protective stance" }
                            }
                        }
                    }
                },
                "Cat": {
                    type: "group",
                    options: {
                        "Gesture & Pose": {
                            type: "group",
                            options: {
                                "The Loaf": { type: "option", prompt: "cat sitting with all paws tucked underneath body, looking like a bread loaf, calm expression" },
                                "The Donut (Sleeping)": { type: "option", prompt: "cat curled up in a perfect circle sleeping, tail covering face, cozy" },
                                "Belly Up (Trust)": { type: "option", prompt: "cat lying on back with belly exposed, paws in air, cute and vulnerable pose" },
                                "Stretching": { type: "option", prompt: "cat stretching body long, front paws extended forward, arched back, yoga pose" },
                                "Grooming": { type: "option", prompt: "cat licking its own paw or fur, cleaning self, tongue visible" },
                                "Making Biscuits (Kneading)": { type: "option", prompt: "cat rhythmically pushing paws into a soft blanket, eyes half closed in pleasure, cute motion" },
                                "Pouncing": { type: "option", prompt: "cat mid-air jumping to catch prey, paws extended, dynamic action shot" },
                                "Batting / Swatting": { type: "option", prompt: "cat using paw to hit a toy, playful aggression, focused eyes" },
                                "Scratching Post": { type: "option", prompt: "cat standing on hind legs scratching a tree or post, stretching full body" },
                                "Head Bunting (Bonk)": { type: "option", prompt: "cat gently rubbing head against human face or hand, sign of affection, close up" },
                                "Shoulder Cat": { type: "option", prompt: "cat perched sitting on a person's shoulder like a parrot, tail hanging down, friendly" },
                                "Rubbing Legs": { type: "option", prompt: "cat weaving between person's legs while walking, tail up, seeking attention" },
                                "Sleeping on Laptop": { type: "option", prompt: "cat sitting directly on a computer keyboard while person tries to work, funny workplace scenario" },
                                "The Blep": { type: "option", prompt: "close up of cat face with tip of tongue sticking out, silly expression" },
                                "Judging You": { type: "option", prompt: "cat sitting tall looking down with narrowed eyes, judgmental expression, attitude" },
                                "If I Fits, I Sits": { type: "option", prompt: "cat squeezing itself into a cardboard box that is too small for it, funny composition" },
                                "Arched Back (Scared)": { type: "option", prompt: "black cat with arched back, fur standing up, hissing, Halloween vibe" }
                            }
                        }
                    }
                },
                "Lion": {
                    type: "group",
                    options: {
                        "Gesture & Pose": {
                            type: "group",
                            options: {
                                "The Royal Sit": { type: "option", prompt: "majestic lion sitting proudly on a high rock edge, chest out, overlooking the kingdom, golden hour lighting, cinematic" },
                                "Roaring": { type: "option", prompt: "close up of lion roaring ferociously, mouth wide open showing sharp teeth, aggressive expression, saliva droplets, dynamic" },
                                "Walking (Boss Vibe)": { type: "option", prompt: "lion walking confidently towards the camera, intense eye contact, slow motion feel, muscles flexing" },
                                "Windblown Mane": { type: "option", prompt: "portrait of a lion with magnificent mane blowing in the wind, heroic and stoic expression" },
                                "Stalking / Prowling": { type: "option", prompt: "lion crouching low in tall dry grass, focused predator eyes, sneaking body language, depth of field" },
                                "Pouncing": { type: "option", prompt: "lion mid-air jumping towards prey, claws extended, dynamic action blur, dust rising" },
                                "Running": { type: "option", prompt: "lion running at full speed, powerful strides, dust kicking up behind, aggressive chase" },
                                "Crouching (Ready)": { type: "option", prompt: "lion crouching down muscles tensed, tail twitching, ready to attack" },
                                "Sleeping": { type: "option", prompt: "lion sleeping peacefully under a shade tree, paws crossed, warm afternoon vibe" },
                                "Yawning": { type: "option", prompt: "lion yawning widely showing tongue and teeth, lazy and relaxed atmosphere" },
                                "Drinking Water": { type: "option", prompt: "lion bending down to drink water from a river, reflection visible in water, serene nature shot" },
                                "Walking Beside Human": { type: "option", prompt: "massive lion walking calmly beside a warrior, companionship, fantasy scale, epic atmosphere" },
                                "Guarding": { type: "option", prompt: "lion standing protectively in front of a person, growling at a threat, defensive stance" },
                                "Head Rub (Trust)": { type: "option", prompt: "lion gently rubbing its massive head against a human hand, sign of bonding and trust" }
                            }
                        }
                    }
                },
                "Wolf": { type: "option", prompt: "featuring a Wolf" },
                "Eagle": { type: "option", prompt: "featuring a Eagle" },
                "Owl": { type: "option", prompt: "featuring a Owl" },
                "Horse": {
                    type: "group",
                    options: {
                        "Gesture & Pose": {
                            type: "group",
                            options: {
                                "Casual Riding": { type: "option", prompt: "rider sitting relaxed on a walking horse, calm atmosphere" },
                                "Galloping (Fast)": { type: "option", prompt: "horse galloping at full speed, rider leaning forward, dust flying, dynamic motion blur, action shot" },
                                "Jumping": { type: "option", prompt: "horse jumping over a fence, mid-air suspension, athletic pose, hooves tucked" },
                                "Archery on Horse": { type: "option", prompt: "warrior riding a horse while shooting an arrow, dynamic combat pose, historical vibe" },
                                "Bareback Riding": { type: "option", prompt: "riding a horse without a saddle, wild and natural connection, tribal aesthetic" },
                                "Forehead to Forehead": { type: "option", prompt: "close-up of human and horse touching foreheads, deep emotional bond, soft lighting, bokeh background" },
                                "Hugging Neck": { type: "option", prompt: "person wrapping arms around the horse's neck, affectionate hug, love and trust" },
                                "Kissing Nose": { type: "option", prompt: "person gently kissing the horse's nose, cute and tender moment" },
                                "Resting Head": { type: "option", prompt: "person resting their head on the horse's shoulder, peaceful moment" },
                                "Walking Beside": { type: "option", prompt: "person walking side-by-side with a horse, holding reins loosely, companionship" },
                                "Running Beside": { type: "option", prompt: "person running alongside a free horse, high energy, sense of freedom" },
                                "Feeding": { type: "option", prompt: "person feeding an apple to a horse from hand, gentle interaction" },
                                "Grooming": { type: "option", prompt: "person brushing the horse's mane, taking care, stable setting" },
                                "Rearing Up (Heroic)": { type: "option", prompt: "majestic horse rearing up on two hind legs, powerful stance, low angle shot, dramatic sky" },
                                "Stopping Suddenly": { type: "option", prompt: "horse sliding to a stop, dust kicking up, dramatic brake" },
                                "Sleeping Together": { type: "option", prompt: "person sleeping while leaning against a laying down horse, trust and warmth" },
                                "Selfie with Horse": { type: "option", prompt: "wide angle selfie shot, person smiling, horse looking curiously into the lens from behind" }
                            }
                        }
                    }
                },
                "Butterfly": { type: "option", prompt: "featuring a Butterfly" },
                "Dolphin": { type: "option", prompt: "featuring a Dolphin" },
                "Dragon": { type: "option", prompt: "featuring a Dragon" }
            }
        },
        "Transport": {
            type: "group",
            icon: ICONS.object,
            options: {
                "Car": {
                    type: "group",
                    options: {
                        "Model & Type": {
                            type: "group",
                            options: {
                                "Hatchback": {
                                    type: "group",
                                    options: {
                                        "Mini Cooper": { type: "option", prompt: "Mini Cooper, distinctive round headlights, compact body, british racing green color" },
                                        "Maruti Swift": { type: "option", prompt: "Maruti Suzuki Swift, sporty hatchback, red color, dynamic angle" },
                                        "Volkswagen Golf": { type: "option", prompt: "Volkswagen Golf GTI, hot hatch, sharp lines, grey metallic color" },
                                        "Fiat 500 (Vintage)": { type: "option", prompt: "classic Fiat 500, vintage car, pastel yellow color, italian street background" }
                                    }
                                },
                                "Sedan": {
                                    type: "group",
                                    options: {
                                        "BMW 3 Series": { type: "option", prompt: "BMW 3 Series sedan, luxury car, kidney grille, angel eye headlights, executive vibe" },
                                        "Honda City": { type: "option", prompt: "Honda City sedan, modern design, silver color, urban setting" },
                                        "Tesla Model 3": { type: "option", prompt: "Tesla Model 3, electric car, no grille, aerodynamic wheels, futuristic white" },
                                        "Mercedes C-Class": { type: "option", prompt: "Mercedes-Benz C-Class, elegance, silver star logo on hood, premium look" }
                                    }
                                },
                                "SUV": {
                                    type: "group",
                                    options: {
                                        "Mahindra Thar": { type: "option", prompt: "Mahindra Thar, off-road SUV, boxy design, mud tires, rough terrain background" },
                                        "Mercedes G-Wagon": { type: "option", prompt: "Mercedes-Benz G-Class, G-Wagon, boxy shape, matte black, luxury urban SUV" },
                                        "Toyota Fortuner": { type: "option", prompt: "Toyota Fortuner, massive SUV, aggressive front grille, white color, road presence" },
                                        "Land Rover Defender": { type: "option", prompt: "Land Rover Defender, rugged adventure vehicle, boxy silhouette, wilderness background" }
                                    }
                                },
                                "Supercars & Sports": {
                                    type: "group",
                                    options: {
                                        "Ford Mustang": { type: "option", prompt: "Ford Mustang GT, muscle car, aggressive front, racing stripes, blue color" },
                                        "Porsche 911": { type: "option", prompt: "Porsche 911, iconic sports car, round headlights, sloping rear, carrera white" },
                                        "Lamborghini Huracan": { type: "option", prompt: "Lamborghini Huracan, sharp angular design, bright orange color, aggressive stance" },
                                        "Ferrari 488": { type: "option", prompt: "Ferrari 488, italian supercar, aerodynamic curves, rosso corsa red" }
                                    }
                                },
                                "Luxury & Classic": {
                                    type: "group",
                                    options: {
                                        "Rolls Royce Phantom": { type: "option", prompt: "Rolls Royce Phantom, massive chrome grille, spirit of ecstasy, ultimate luxury, black" },
                                        "Volkswagen Beetle (Classic)": { type: "option", prompt: "Classic Volkswagen Beetle, round shape, vintage vibes, peace symbol, light blue" }
                                    }
                                }
                            }
                        }
                    }
                },
                "Bike": {
                    type: "group",
                    options: {
                        "Poses": {
                            type: "group",
                            options: {
                                "Traffic Light Wait": { type: "option", prompt: "sitting on a stationary motorcycle at a red light, both feet on the ground, rear view, urban city night lights, cinematic lighting" },
                                "Helmet Under Arm": { type: "option", prompt: "standing next to a heavy bike, holding a full-face helmet under one arm, wearing a leather jacket, golden hour, cool attitude" },
                                "Tank Tuck (Racing)": { type: "option", prompt: "riding a superbike, leaning forward tucked in for aerodynamics, motion blur background, race track, high speed action" },
                                "Side Stand Lean": { type: "option", prompt: "leaning casually against a parked motorcycle, one leg crossed over the other, coffee shop background, relaxed urban vibe" },
                                "Looking Back": { type: "option", prompt: "sitting on the bike, turning head to look back over the shoulder, candid shot, street photography style, detailed helmet visor" },
                                "Putting on Gloves": { type: "option", prompt: "sitting on the bike, adjusting riding gloves, focus on hands and fuel tank, anticipation, close up shot" },
                                "Low Angle Beast": { type: "option", prompt: "low angle shot from the front wheel looking up at the rider, imposing stance, blue sky background, wide angle lens" },
                                "Motion Blur (Speed)": { type: "option", prompt: "side profile of a motorcycle speeding down a highway, panning shot, heavy motion blur on background, dynamic energy" },
                                "Checking Map (Travel)": { type: "option", prompt: "sitting on an adventure bike loaded with luggage bags, checking a paper map, mountain scenery background, travel photography" },
                                "Headlight Stare": { type: "option", prompt: "standing directly in front of the bike, arms crossed, headlights glowing behind, foggy atmosphere, moody and dark" }
                            }
                        }
                    }
                },
                "Bicycle": { type: "option", prompt: "featuring a Bicycle" },
                "Spaceship": { type: "option", prompt: "featuring a Spaceship" },
                "Helicopter": { type: "option", prompt: "featuring a Helicopter" },
                "Sailboat": { type: "option", prompt: "featuring a Sailboat" },
                "Cyberpunk Van": { type: "option", prompt: "featuring a Cyberpunk Van" },
                "Train": { type: "option", prompt: "featuring a Train" }
            }
        },
        "Instruments & Art": {
            type: "group",
            icon: ICONS.object,
            options: {
                "Acoustic Guitar": { type: "option", prompt: "featuring an Acoustic Guitar" },
                "Electric Guitar": { type: "option", prompt: "featuring an Electric Guitar" },
                "Piano": { type: "option", prompt: "featuring a Piano" },
                "Violin": { type: "option", prompt: "featuring a Violin" },
                "Drum Kit": { type: "option", prompt: "featuring a Drum Kit" },
                "Vintage Camera": { type: "option", prompt: "featuring a Vintage Camera" },
                "Easel & Canvas": { type: "option", prompt: "featuring an Easel & Canvas" }
            }
        },
        "Gadgets & Tech": {
            type: "group",
            icon: ICONS.object,
            options: {
                "Smartphone": { type: "option", prompt: "featuring a Smartphone" },
                "Laptop": { type: "option", prompt: "featuring a Laptop" },
                "Hologram Device": { type: "option", prompt: "featuring a Hologram Device" },
                "Retro TV": { type: "option", prompt: "featuring a Retro TV" },
                "Robot Companion": { type: "option", prompt: "featuring a Robot Companion" },
                "Floating Drone": { type: "option", prompt: "featuring a Floating Drone" }
            }
        },
        "Props (Handheld)": {
            type: "group",
            icon: ICONS.object,
            options: {
                "Sword": { type: "option", prompt: "holding a Sword" },
                "Magic Staff": { type: "option", prompt: "holding a Magic Staff" },
                "Shield": { type: "option", prompt: "holding a Shield" },
                "Old Book": { type: "option", prompt: "holding an Old Book" },
                "Lantern": { type: "option", prompt: "holding a Lantern" },
                "Umbrella": { type: "option", prompt: "holding an Umbrella" },
                "Gun/Blaster": { type: "option", prompt: "holding a Gun/Blaster" },
                "Bouquet of Flowers": { type: "option", prompt: "holding a Bouquet of Flowers" }
            }
        },
        "Food & Drink": {
            type: "group",
            icon: ICONS.object,
            options: {
                "Coffee Cup": { type: "option", prompt: "featuring a Coffee Cup" },
                "Pizza Box": { type: "option", prompt: "featuring a Pizza Box" },
                "Fancy Cake": { type: "option", prompt: "featuring a Fancy Cake" },
                "Wine Glass": { type: "option", prompt: "featuring a Wine Glass" },
                "Fruit Basket": { type: "option", prompt: "featuring a Fruit Basket" },
                "Burger": { type: "option", prompt: "featuring a Burger" }
            }
        },
        "Environment Assets": {
            type: "group",
            icon: ICONS.object,
            options: {
                "Large Rock": { type: "option", prompt: "featuring a Large Rock" },
                "Ancient Tree": { type: "option", prompt: "featuring an Ancient Tree" },
                "Street Bench": { type: "option", prompt: "featuring a Street Bench" },
                "Street Light": { type: "option", prompt: "featuring a Street Light" },
                "Campfire": { type: "option", prompt: "featuring a Campfire" },
                "Fountain": { type: "option", prompt: "featuring a Fountain" }
            }
        }
    }
};
