// Category Data for Customization

import { fullOutfitColorGenerator, generateMaleClothesDefault } from '../generators/customization-clothes.js';
import { faceGenerators, generateMaleFaceDefault } from '../../generate/customization/male/face.js';
import { getFootwearColors } from '../generators/customization-footwear.js';
import { gesturePoseOptions } from '../generators/customization-gestures.js';

// --- Icons (SVG Strings) ---
const ICONS = {
    user: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/></svg>`,
    face: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"/></svg>`, // user-circle
    clothes: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M631.2 96.5L436.5 0C416.4 27.8 371.9 47.2 320 47.2S223.6 27.8 203.5 0L8.8 96.5c-7.9 4-11.1 13.6-7.2 21.5l57.2 114.5c4 7.9 13.6 11.1 21.5 7.2l56.6-27.7c10.6-5.2 23 2.5 23 14.4V480c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V226.3c0-11.8 12.4-19.6 23-14.4l56.6 27.7c7.9 4 17.5.8 21.5-7.2L638.3 118c4-7.9.8-17.6-7.1-21.5z"/></svg>`, // tshirt
    accessories: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M574.1 280.37L528.75 98.66c-5.91-23.7-21.59-44.05-43-55.81-21.44-11.73-46.97-14.11-70.19-6.33l-15.25 5.08c-8.39 2.79-12.92 11.86-10.12 20.24l5.06 15.18c2.79 8.38 11.85 12.91 20.23 10.12l13.18-4.39c10.87-3.62 23-3.57 33.16 1.73 10.29 5.37 17.57 14.56 20.37 25.82l38.46 153.82c-22.19-6.81-49.79-12.46-81.2-12.46-34.77 0-73.98 7.02-114.85 26.74h-73.18c-40.87-19.74-80.08-26.75-114.86-26.75-31.42 0-59.02 5.65-81.21 12.46l38.46-153.83c2.79-11.25 10.09-20.45 20.38-25.81 10.16-5.3 22.28-5.35 33.15-1.73l13.17 4.39c8.38 2.79 17.44-1.74 20.23-10.12l5.06-15.18c2.8-8.38-1.73-17.45-10.12-20.24l-15.25-5.08c-23.22-7.78-48.75-5.41-70.19 6.33-21.41 11.77-37.09 32.11-43 55.8L1.9 280.37A64.218 64.218 0 0 0 0 295.86v70.25C0 429.01 51.58 480 115.2 480h37.12c60.28 0 110.37-45.94 114.88-105.37l2.93-38.63h35.75l2.93 38.63C313.31 434.06 363.4 480 423.68 480h37.12c63.62 0 115.2-50.99 115.2-113.88v-70.25c0-5.23-.64-10.43-1.9-15.5zm-370.72 89.42c-1.97 25.91-24.4 46.21-51.06 46.21H115.2C86.97 416 64 393.62 64 366.11v-37.54c18.12-6.49 43.42-12.92 72.58-12.92 23.86 0 47.26 4.33 69.93 12.92l-3.13 41.22zM512 366.12c0 27.51-22.97 49.88-51.2 49.88h-37.12c-26.67 0-49.1-20.3-51.06-46.21l-3.13-41.22c22.67-8.59 46.08-12.92 69.95-12.92 29.12 0 54.43 6.44 72.55 12.93v37.54z"/></svg>`, // glasses
    footwear: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M192 160h32V32h-32c-35.35 0-64 28.65-64 64s28.65 64 64 64zM0 416c0 35.35 28.65 64 64 64h32V352H64c-35.35 0-64 28.65-64 64zm337.46-128c-34.91 0-76.16 13.12-104.73 32-24.79 16.38-44.52 32-104.73 32v128l57.53 15.97c26.21 7.28 53.01 13.12 80.31 15.05 32.69 2.31 65.6.67 97.58-6.2C472.9 481.3 512 429.22 512 384c0-64-84.18-96-174.54-96zM491.42 7.19C459.44.32 426.53-1.33 393.84.99c-27.3 1.93-54.1 7.77-80.31 15.04L256 32v128c60.2 0 79.94 15.62 104.73 32 28.57 18.88 69.82 32 104.73 32C555.82 224 640 192 640 128c0-45.22-39.1-97.3-148.58-120.81z"/></svg>`, // shoe-prints
    expressions: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"/></svg>`, // smile
    emotions: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/></svg>`, // heart
    gestures: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M408.781 128.007C386.356 127.578 368 146.36 368 168.79V256h-8V79.79c0-22.43-18.356-41.212-40.781-40.783C297.488 39.423 280 57.169 280 79v177h-8V40.79C272 18.36 253.644-.422 231.219.007 209.488.423 192 18.169 192 40v216h-8V80.79c0-22.43-18.356-41.212-40.781-40.783C121.488 40.423 104 58.169 104 80v235.992l-31.648-43.519c-12.993-17.866-38.009-21.817-55.877-8.823-17.865 12.994-21.815 38.01-8.822 55.877l125.601 172.705A48 48 0 0 0 172.073 512h197.59c22.274 0 41.622-15.324 46.724-37.006l26.508-112.66a192.011 192.011 0 0 0 5.104-43.975V168c.001-21.831-17.487-39.577-39.218-39.993z"/></svg>`, // hand-paper
    lookfeel: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/></svg>`, // palette
    hat: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M490 296.9C480.51 239.51 450.51 64 392.3 64c-14 0-26.49 5.93-37 14a58.21 58.21 0 0 1-70.58 0c-10.51-8-23-14-37-14-58.2 0-88.2 175.47-97.71 232.88C188.81 309.47 243.73 320 320 320s131.23-10.51 170-23.1zm142.9-37.18a16 16 0 0 0-19.75 1.5c-1 .9-101.27 90.78-293.16 90.78-190.82 0-292.22-89.94-293.24-90.84A16 16 0 0 0 1 278.53C1.73 280.55 78.32 480 320 480s318.27-199.45 319-201.47a16 16 0 0 0-6.09-18.81z"/></svg>`, // hat-cowboy
    tie: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"/></svg>`, // user-tie
    beard: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M320 192h14.1c12.3 0 22.8-8.2 26.2-19.9l12-42c2-7.2-2.1-14.6-9.2-16.6l-20.4-5.8c-10.4-3-21.6 1.9-26.6 11.5L304 144h-96l-12.1-24.9c-5-9.6-16.2-14.5-26.6-11.5l-20.4 5.8c-7.1 2-11.2 9.4-9.2 16.6l12 42c3.4 11.7 13.9 19.9 26.2 19.9H192c-17.7 0-32 14.3-32 32v16c0 70.7 57.3 128 128 128s128-57.3 128-128v-16c0-17.7-14.3-32-32-32z"/></svg>` // face-beard
};

export const customizationCategory = {
    type: 'group',
    options: {
        "Male": {
            type: "group",
            icon: ICONS.user,
            options: {
                "Face": {
                    type: "group",
                    icon: ICONS.face,
                    customGenerator: generateMaleFaceDefault,
                    options: {
                        "Eyes": {
                            type: "group",
                            icon: ICONS.face,
                            options: {
                                "Black": { type: "option", prompt: faceGenerators.eyes("Black") },
                                "Dark Brown": { type: "option", prompt: faceGenerators.eyes("Dark Brown") },
                                "Brown": { type: "option", prompt: faceGenerators.eyes("Brown") },
                                "Light Brown": { type: "option", prompt: faceGenerators.eyes("Light Brown") },
                                "Hazel": { type: "option", prompt: faceGenerators.eyes("Hazel") },
                                "Green": { type: "option", prompt: faceGenerators.eyes("Green") },
                                "Grey": { type: "option", prompt: faceGenerators.eyes("Grey") },
                                "Natural Contact Lens": { type: "option", prompt: faceGenerators.eyes("Natural Contact Lens") }
                            }
                        },
                        "Hair": {
                            type: "group",
                            icon: ICONS.user,
                            options: {
                                "Style": {
                                    type: "group",
                                    icon: ICONS.user,
                                    options: {
                                        // Length
                                        "Very Short": { type: "option", prompt: faceGenerators.hair("Very Short") },
                                        "Short": { type: "option", prompt: faceGenerators.hair("Short") },
                                        "Medium": { type: "option", prompt: faceGenerators.hair("Medium") },
                                        "Long": { type: "option", prompt: faceGenerators.hair("Long") },
                                        // Type
                                        "Straight": { type: "option", prompt: faceGenerators.hair("Straight") },
                                        "Wavy": { type: "option", prompt: faceGenerators.hair("Wavy") },
                                        "Curly": { type: "option", prompt: faceGenerators.hair("Curly") },
                                        "Coily": { type: "option", prompt: faceGenerators.hair("Coily") },
                                        // Cuts
                                        "Side Part": { type: "option", prompt: faceGenerators.hair("Side Part") },
                                        "Middle Part": { type: "option", prompt: faceGenerators.hair("Middle Part") },
                                        "Undercut": { type: "option", prompt: faceGenerators.hair("Undercut") },
                                        "Fade": { type: "option", prompt: faceGenerators.hair("Fade") },
                                        "Taper": { type: "option", prompt: faceGenerators.hair("Taper") },
                                        "Messy": { type: "option", prompt: faceGenerators.hair("Messy") },
                                        "Slick Back": { type: "option", prompt: faceGenerators.hair("Slick Back") },
                                        "Quiff": { type: "option", prompt: faceGenerators.hair("Quiff") },
                                        "Pompadour": { type: "option", prompt: faceGenerators.hair("Pompadour") },
                                        "Crew Cut": { type: "option", prompt: faceGenerators.hair("Crew Cut") },
                                        "Buzz Cut": { type: "option", prompt: faceGenerators.hair("Buzz Cut") },
                                        "Long Flow": { type: "option", prompt: faceGenerators.hair("Long Flow") },
                                        "Man Bun": { type: "option", prompt: faceGenerators.hair("Man Bun") }
                                    }
                                },
                                "Color": {
                                    type: "group",
                                    icon: ICONS.lookfeel,
                                    options: {
                                        "Black": { type: "option", prompt: faceGenerators.hair("Black") },
                                        "Dark Brown": { type: "option", prompt: faceGenerators.hair("Dark Brown") },
                                        "Brown": { type: "option", prompt: faceGenerators.hair("Brown") },
                                        "Light Brown": { type: "option", prompt: faceGenerators.hair("Light Brown") },
                                        "Blonde": { type: "option", prompt: faceGenerators.hair("Blonde") },
                                        "Grey": { type: "option", prompt: faceGenerators.hair("Grey") },
                                        "White": { type: "option", prompt: faceGenerators.hair("White") },
                                        "Fashion Colors": { type: "option", prompt: faceGenerators.hair("Fashion Colors") }
                                    }
                                }
                            }
                        },
                        "Skin": {
                            type: "group",
                            icon: ICONS.face,
                            options: {
                                "Tone": {
                                    type: "group",
                                    icon: ICONS.lookfeel,
                                    options: {
                                        "Very Fair": { type: "option", prompt: faceGenerators.skin("Very Fair") },
                                        "Fair": { type: "option", prompt: faceGenerators.skin("Fair") },
                                        "Light Wheatish": { type: "option", prompt: faceGenerators.skin("Light Wheatish") },
                                        "Wheatish": { type: "option", prompt: faceGenerators.skin("Wheatish") },
                                        "Medium": { type: "option", prompt: faceGenerators.skin("Medium") },
                                        "Dusky": { type: "option", prompt: faceGenerators.skin("Dusky") },
                                        "Deep / Dark": { type: "option", prompt: faceGenerators.skin("Deep / Dark") }
                                    }
                                },
                                "Finish": {
                                    type: "group",
                                    icon: ICONS.face,
                                    options: {
                                        "Natural": { type: "option", prompt: faceGenerators.skin("Natural") },
                                        "Smooth": { type: "option", prompt: faceGenerators.skin("Smooth") },
                                        "Matte": { type: "option", prompt: faceGenerators.skin("Matte") },
                                        "Slight Glow": { type: "option", prompt: faceGenerators.skin("Slight Glow") }
                                    }
                                }
                            }
                        },
                        "Lips": {
                            type: "group",
                            icon: ICONS.face,
                            options: {
                                "Natural Pink": { type: "option", prompt: faceGenerators.lips("Natural Pink") },
                                "Natural Brown": { type: "option", prompt: faceGenerators.lips("Natural Brown") },
                                "Natural Nude": { type: "option", prompt: faceGenerators.lips("Natural Nude") },
                                "Slight Rosy Tone": { type: "option", prompt: faceGenerators.lips("Slight Rosy Tone") }
                            }
                        },
                        "Eyebrows": {
                            type: "group",
                            icon: ICONS.face,
                            options: {
                                "Thin": { type: "option", prompt: faceGenerators.eyebrows("Thin") },
                                "Medium": { type: "option", prompt: faceGenerators.eyebrows("Medium") },
                                "Thick": { type: "option", prompt: faceGenerators.eyebrows("Thick") },
                                "Natural": { type: "option", prompt: faceGenerators.eyebrows("Natural") },
                                "Groomed": { type: "option", prompt: faceGenerators.eyebrows("Groomed") },
                                "Sharp": { type: "option", prompt: faceGenerators.eyebrows("Sharp") }
                            }
                        },
                        "Beard Style": {
                            type: "group",
                            icon: ICONS.beard,
                            options: {
                                "Clean Shave": { type: "option", icon: ICONS.beard, prompt: faceGenerators.beard("Clean Shave") },
                                "Light Stubble": { type: "option", icon: ICONS.beard, prompt: faceGenerators.beard("Light Stubble") },
                                "Heavy Stubble": { type: "option", icon: ICONS.beard, prompt: faceGenerators.beard("Heavy Stubble") },
                                "Short Beard": { type: "option", icon: ICONS.beard, prompt: faceGenerators.beard("Short Beard") },
                                "Medium Beard": { type: "option", icon: ICONS.beard, prompt: faceGenerators.beard("Medium Beard") },
                                "Long Beard": { type: "option", icon: ICONS.beard, prompt: faceGenerators.beard("Long Beard") },
                                "French Beard": { type: "option", icon: ICONS.beard, prompt: faceGenerators.beard("French Beard") },
                                "Goatee": { type: "option", icon: ICONS.beard, prompt: faceGenerators.beard("Goatee") },
                                "Ducktail": { type: "option", icon: ICONS.beard, prompt: faceGenerators.beard("Ducktail") },
                                "Boxed Beard": { type: "option", icon: ICONS.beard, prompt: faceGenerators.beard("Boxed Beard") },
                                "Corporate Beard": { type: "option", icon: ICONS.beard, prompt: faceGenerators.beard("Corporate Beard") },
                                "Full Beard": { type: "option", icon: ICONS.beard, prompt: faceGenerators.beard("Full Beard") },
                                "Van Dyke": { type: "option", icon: ICONS.beard, prompt: faceGenerators.beard("Van Dyke") }
                            }
                        },
                        "Mustache": {
                            type: "group",
                            icon: ICONS.user,
                            options: {
                                "Style": {
                                    type: "group",
                                    icon: ICONS.user,
                                    options: {
                                        "Clean": { type: "option", prompt: faceGenerators.mustache("Clean") },
                                        "Light Mustache": { type: "option", prompt: faceGenerators.mustache("Light Mustache") },
                                        "Thick Mustache": { type: "option", prompt: faceGenerators.mustache("Thick Mustache") },
                                        "Handlebar": { type: "option", prompt: faceGenerators.mustache("Handlebar") },
                                        "Chevron": { type: "option", prompt: faceGenerators.mustache("Chevron") },
                                        "Pencil": { type: "option", prompt: faceGenerators.mustache("Pencil") },
                                        "English": { type: "option", prompt: faceGenerators.mustache("English") },
                                        "Walrus": { type: "option", prompt: faceGenerators.mustache("Walrus") },
                                        "Horseshoe": { type: "option", prompt: faceGenerators.mustache("Horseshoe") }
                                    }
                                },
                                "Color": {
                                    type: "group",
                                    icon: ICONS.lookfeel,
                                    options: {
                                        "Black": { type: "option", prompt: faceGenerators.mustache("Black") },
                                        "Dark Brown": { type: "option", prompt: faceGenerators.mustache("Dark Brown") },
                                        "Brown": { type: "option", prompt: faceGenerators.mustache("Brown") },
                                        "Light Brown": { type: "option", prompt: faceGenerators.mustache("Light Brown") },
                                        "Grey": { type: "option", prompt: faceGenerators.mustache("Grey") },
                                        "White": { type: "option", prompt: faceGenerators.mustache("White") },
                                        "Salt & Pepper": { type: "option", prompt: faceGenerators.mustache("Salt & Pepper") },
                                        "Fashion Colors": { type: "option", prompt: faceGenerators.mustache("Fashion Colors") }
                                    }
                                }
                            }
                        }
                    }
                },
                "Clothes": {
                    type: "group",
                    customGenerator: generateMaleClothesDefault,
                    icon: ICONS.clothes,
                    options: {
                        "Top Wear": {
                            type: "group",
                            icon: ICONS.clothes,
                            options: {
                                "T-Shirt": {
                                    type: "group",
                                    icon: ICONS.clothes,
                                    options: {
                                        "White": { type: "option", prompt: "wearing white T-Shirt" },
                                        "Black": { type: "option", prompt: "wearing black T-Shirt" },
                                        "Grey": { type: "option", prompt: "wearing grey T-Shirt" },
                                        "Blue": { type: "option", prompt: "wearing blue T-Shirt" },
                                        "Red": { type: "option", prompt: "wearing red T-Shirt" },
                                        "Green": { type: "option", prompt: "wearing green T-Shirt" },
                                        "Yellow": { type: "option", prompt: "wearing yellow T-Shirt" },
                                        "Neutral": { type: "option", prompt: "wearing T-Shirt in neutral color" }
                                    }
                                },
                                "Shirt": {
                                    type: "group",
                                    icon: ICONS.clothes,
                                    options: {
                                        "White": { type: "option", prompt: "wearing white Shirt" },
                                        "Black": { type: "option", prompt: "wearing black Shirt" },
                                        "Blue": { type: "option", prompt: "wearing blue Shirt" },
                                        "Grey": { type: "option", prompt: "wearing grey Shirt" },
                                        "Light Blue": { type: "option", prompt: "wearing light blue Shirt" },
                                        "Neutral": { type: "option", prompt: "wearing Shirt in neutral color" }
                                    }
                                },
                                "Polo T-Shirt": {
                                    type: "group",
                                    icon: ICONS.clothes,
                                    options: {
                                        "White": { type: "option", prompt: "wearing white Polo T-Shirt" },
                                        "Black": { type: "option", prompt: "wearing black Polo T-Shirt" },
                                        "Blue": { type: "option", prompt: "wearing blue Polo T-Shirt" },
                                        "Red": { type: "option", prompt: "wearing red Polo T-Shirt" },
                                        "Neutral": { type: "option", prompt: "wearing Polo T-Shirt in neutral color" }
                                    }
                                },
                                "Kurta": {
                                    type: "group",
                                    icon: ICONS.clothes,
                                    options: {
                                        "White": { type: "option", prompt: "wearing white Kurta" },
                                        "Black": { type: "option", prompt: "wearing black Kurta" },
                                        "Yellow": { type: "option", prompt: "wearing yellow Kurta" },
                                        "Blue": { type: "option", prompt: "wearing blue Kurta" },
                                        "Neutral": { type: "option", prompt: "wearing Kurta in neutral color" }
                                    }
                                },
                                "Hoodie": {
                                    type: "group",
                                    icon: ICONS.clothes,
                                    options: {
                                        "Black": { type: "option", prompt: "wearing black Hoodie" },
                                        "Grey": { type: "option", prompt: "wearing grey Hoodie" },
                                        "White": { type: "option", prompt: "wearing white Hoodie" },
                                        "Blue": { type: "option", prompt: "wearing blue Hoodie" },
                                        "Neutral": { type: "option", prompt: "wearing Hoodie in neutral color" }
                                    }
                                },
                                "Sweater": {
                                    type: "group",
                                    icon: ICONS.clothes,
                                    options: {
                                        "Black": { type: "option", prompt: "wearing black Sweater" },
                                        "Grey": { type: "option", prompt: "wearing grey Sweater" },
                                        "White": { type: "option", prompt: "wearing white Sweater" },
                                        "Blue": { type: "option", prompt: "wearing blue Sweater" },
                                        "Beige": { type: "option", prompt: "wearing beige Sweater" },
                                        "Neutral": { type: "option", prompt: "wearing Sweater in neutral color" }
                                    }
                                },
                                "Jacket": {
                                    type: "group",
                                    icon: ICONS.clothes,
                                    options: {
                                        "Black": { type: "option", prompt: "wearing black Jacket" },
                                        "Brown": { type: "option", prompt: "wearing brown Jacket" },
                                        "Denim Blue": { type: "option", prompt: "wearing denim blue Jacket" },
                                        "Grey": { type: "option", prompt: "wearing grey Jacket" },
                                        "Neutral": { type: "option", prompt: "wearing Jacket in neutral color" }
                                    }
                                },
                                "Blazer": {
                                    type: "group",
                                    icon: ICONS.tie,
                                    options: {
                                        "Black": { type: "option", prompt: "wearing black Blazer" },
                                        "Navy Blue": { type: "option", prompt: "wearing navy blue Blazer" },
                                        "Grey": { type: "option", prompt: "wearing grey Blazer" },
                                        "Neutral": { type: "option", prompt: "wearing Blazer in neutral color" }
                                    }
                                }
                            }
                        },
                        "Bottom Wear": {
                            type: "group",
                            icon: ICONS.clothes,
                            options: {
                                "Jeans": {
                                    type: "group",
                                    icon: ICONS.clothes,
                                    options: {
                                        "Blue": { type: "option", prompt: "wearing blue Jeans" },
                                        "Black": { type: "option", prompt: "wearing black Jeans" },
                                        "Grey": { type: "option", prompt: "wearing grey Jeans" },
                                        "Light Blue": { type: "option", prompt: "wearing light blue Jeans" },
                                        "Neutral": { type: "option", prompt: "wearing Jeans in neutral color" }
                                    }
                                },
                                "Trousers": {
                                    type: "group",
                                    icon: ICONS.clothes,
                                    options: {
                                        "Black": { type: "option", prompt: "wearing black Trousers" },
                                        "Grey": { type: "option", prompt: "wearing grey Trousers" },
                                        "Beige": { type: "option", prompt: "wearing beige Trousers" },
                                        "Navy Blue": { type: "option", prompt: "wearing navy blue Trousers" },
                                        "Neutral": { type: "option", prompt: "wearing Trousers in neutral color" }
                                    }
                                },
                                "Chinos": {
                                    type: "group",
                                    icon: ICONS.clothes,
                                    options: {
                                        "Beige": { type: "option", prompt: "wearing beige Chinos" },
                                        "Khaki": { type: "option", prompt: "wearing khaki Chinos" },
                                        "Navy Blue": { type: "option", prompt: "wearing navy blue Chinos" },
                                        "Black": { type: "option", prompt: "wearing black Chinos" },
                                        "Neutral": { type: "option", prompt: "wearing Chinos in neutral color" }
                                    }
                                },
                                "Formal Pants": {
                                    type: "group",
                                    icon: ICONS.tie,
                                    options: {
                                        "Black": { type: "option", prompt: "wearing black Formal Pants" },
                                        "Grey": { type: "option", prompt: "wearing grey Formal Pants" },
                                        "Navy Blue": { type: "option", prompt: "wearing navy blue Formal Pants" },
                                        "Neutral": { type: "option", prompt: "wearing Formal Pants in neutral color" }
                                    }
                                },
                                "Shorts": {
                                    type: "group",
                                    icon: ICONS.clothes,
                                    options: {
                                        "Black": { type: "option", prompt: "wearing black Shorts" },
                                        "Blue": { type: "option", prompt: "wearing blue Shorts" },
                                        "Grey": { type: "option", prompt: "wearing grey Shorts" },
                                        "Beige": { type: "option", prompt: "wearing beige Shorts" },
                                        "Neutral": { type: "option", prompt: "wearing Shorts in neutral color" }
                                    }
                                },
                                "Joggers": {
                                    type: "group",
                                    icon: ICONS.clothes,
                                    options: {
                                        "Black": { type: "option", prompt: "wearing black Joggers" },
                                        "Grey": { type: "option", prompt: "wearing grey Joggers" },
                                        "Blue": { type: "option", prompt: "wearing blue Joggers" },
                                        "Neutral": { type: "option", prompt: "wearing Joggers in neutral color" }
                                    }
                                },
                                "Pyjama / Lounge Pants": {
                                    type: "group",
                                    icon: ICONS.clothes,
                                    options: {
                                        "Plaid": { type: "option", prompt: "wearing plaid Pyjama" },
                                        "Grey": { type: "option", prompt: "wearing grey Lounge Pants" },
                                        "Black": { type: "option", prompt: "wearing black Lounge Pants" },
                                        "Blue": { type: "option", prompt: "wearing blue Lounge Pants" },
                                        "Neutral": { type: "option", prompt: "wearing Lounge Pants in neutral color" }
                                    }
                                }
                            }
                        },
                        "Full Outfit": {
                            type: "group",
                            icon: ICONS.clothes,
                            options: {
                                "Casual Outfit": {
                                    type: "group",
                                    enableType: true,
                                    icon: ICONS.clothes,
                                    customGenerator: fullOutfitColorGenerator,
                                    options: {
                                        "White + Blue": { type: "option", prompt: "wearing Casual Outfit, white top and blue bottom" },
                                        "Black + Blue": { type: "option", prompt: "wearing Casual Outfit, black top and blue bottom" },
                                        "Grey + Black": { type: "option", prompt: "wearing Casual Outfit, grey top and black bottom" },
                                        "White + Black": { type: "option", prompt: "wearing Casual Outfit, white top and black bottom" },
                                        "Beige + Blue": { type: "option", prompt: "wearing Casual Outfit, beige top and blue bottom" },
                                        "Olive Green + Black": { type: "option", prompt: "wearing Casual Outfit, olive green top and black bottom" },
                                        "Navy Blue + Grey": { type: "option", prompt: "wearing Casual Outfit, navy blue top and grey bottom" },
                                        "Brown + Beige": { type: "option", prompt: "wearing Casual Outfit, brown top and beige bottom" },
                                        "Maroon + Black": { type: "option", prompt: "wearing Casual Outfit, maroon top and black bottom" },
                                        "Light Blue + White": { type: "option", prompt: "wearing Casual Outfit, light blue top and white bottom" }
                                    }
                                },
                                "Formal Outfit": {
                                    type: "group",
                                    enableType: true,
                                    icon: ICONS.tie,
                                    customGenerator: fullOutfitColorGenerator,
                                    options: {
                                        "White + Black": { type: "option", prompt: "wearing Formal Outfit, white top and black bottom" },
                                        "Light Blue + Navy Blue": { type: "option", prompt: "wearing Formal Outfit, light blue top and navy blue bottom" },
                                        "White + Grey": { type: "option", prompt: "wearing Formal Outfit, white top and grey bottom" },
                                        "Black + Black": { type: "option", prompt: "wearing Formal Outfit, black top and black bottom" },
                                        "Pink + Grey": { type: "option", prompt: "wearing Formal Outfit, light pink top and grey bottom" }
                                    }
                                },
                                "Semi-Formal Outfit": {
                                    type: "group",
                                    enableType: true,
                                    icon: ICONS.clothes,
                                    customGenerator: fullOutfitColorGenerator,
                                    options: {
                                        "Blue + Beige": { type: "option", prompt: "wearing Semi-Formal Outfit, blue top and beige bottom" },
                                        "Black + Grey": { type: "option", prompt: "wearing Semi-Formal Outfit, black top and grey bottom" },
                                        "White + Blue": { type: "option", prompt: "wearing Semi-Formal Outfit, white top and blue bottom" }
                                    }
                                },
                                "Traditional Outfit": {
                                    type: "group",
                                    enableType: true,
                                    icon: ICONS.clothes,
                                    customGenerator: fullOutfitColorGenerator,
                                    options: {
                                        "White + White": { type: "option", prompt: "wearing Traditional Outfit, white top and white bottom" },
                                        "Yellow + White": { type: "option", prompt: "wearing Traditional Outfit, yellow top and white bottom" },
                                        "Blue + White": { type: "option", prompt: "wearing Traditional Outfit, blue top and white bottom" }
                                    }
                                },
                                "Party Outfit": {
                                    type: "group",
                                    enableType: true,
                                    icon: ICONS.clothes,
                                    customGenerator: fullOutfitColorGenerator,
                                    options: {
                                        "Black + Black": { type: "option", prompt: "wearing Party Outfit, black top and black bottom" },
                                        "Red + Black": { type: "option", prompt: "wearing Party Outfit, red top and black bottom" },
                                        "White + Black": { type: "option", prompt: "wearing Party Outfit, white top and black bottom" }
                                    }
                                },
                                "Street Style": {
                                    type: "group",
                                    enableType: true,
                                    icon: ICONS.clothes,
                                    customGenerator: fullOutfitColorGenerator,
                                    options: {
                                        "Black + Black": { type: "option", prompt: "wearing Street Style Outfit, black top and black bottom" },
                                        "Oversized + Baggy": { type: "option", prompt: "wearing Street Style Outfit, oversized top and baggy bottom" },
                                        "White + Blue": { type: "option", prompt: "wearing Street Style Outfit, white top and blue bottom" }
                                    }
                                }
                            }
                        },
                        "Layering (Optional)": {
                            type: "group",
                            icon: ICONS.clothes,
                            options: {
                                "Shirt over T-Shirt": { type: "option", prompt: "wearing Shirt over T-Shirt" },
                                "Jacket over T-Shirt": { type: "option", prompt: "wearing Jacket over T-Shirt" },
                                "Hoodie over Shirt": { type: "option", prompt: "wearing Hoodie over Shirt" },
                                "Blazer over Shirt": { type: "option", prompt: "wearing Blazer over Shirt" }
                            }
                        }
                    }
                },
                "Accessories": {
                    type: "group",
                    icon: ICONS.accessories,
                    options: {
                        "Headwear": {
                            type: "group",
                            icon: ICONS.hat,
                            options: {
                                "Baseball Cap": { type: "option", prompt: "wearing a baseball cap" },
                                "Snapback Cap": { type: "option", prompt: "wearing a snapback cap" },
                                "Beanie": { type: "option", prompt: "wearing a beanie" },
                                "Fedora Hat": { type: "option", prompt: "wearing a fedora hat" },
                                "Cowboy Hat": { type: "option", prompt: "wearing a cowboy hat" },
                                "Bucket Hat": { type: "option", prompt: "wearing a bucket hat" },
                                "Beret": { type: "option", prompt: "wearing a beret" },
                                "Bandana": { type: "option", prompt: "wearing a bandana on head" },
                                "Turban": { type: "option", prompt: "wearing a turban" }
                            }
                        },
                        "Eyewear": {
                            type: "group",
                            icon: ICONS.accessories,
                            options: {
                                "Aviator Sunglasses": { type: "option", prompt: "wearing aviator sunglasses" },
                                "Wayfarer Sunglasses": { type: "option", prompt: "wearing wayfarer sunglasses" },
                                "Round Sunglasses": { type: "option", prompt: "wearing round sunglasses" },
                                "Reading Glasses": { type: "option", prompt: "wearing reading glasses" },
                                "Thick-rimmed Glasses": { type: "option", prompt: "wearing thick-rimmed glasses" },
                                "Rimless Glasses": { type: "option", prompt: "wearing rimless glasses" },
                                "Monocle": { type: "option", prompt: "wearing a monocle" },
                                "Eye Patch": { type: "option", prompt: "wearing an eye patch" }
                            }
                        },
                        "Neckwear": {
                            type: "group",
                            icon: ICONS.tie,
                            options: {
                                "Gold Chain": { type: "option", prompt: "wearing a gold chain" },
                                "Silver Chain": { type: "option", prompt: "wearing a silver chain" },
                                "Pendant Necklace": { type: "option", prompt: "wearing a pendant necklace" },
                                "Beaded Necklace": { type: "option", prompt: "wearing a beaded necklace" },
                                "Scarf": { type: "option", prompt: "wearing a scarf" },
                                "Bandana (Neck)": { type: "option", prompt: "wearing a bandana around neck" },
                                "Bow Tie": { type: "option", prompt: "wearing a bow tie" },
                                "Necktie": { type: "option", prompt: "wearing a necktie" }
                            }
                        },
                        "Wrist & Hand": {
                            type: "group",
                            icon: ICONS.gestures,
                            options: {
                                "Analog Watch": { type: "option", prompt: "wearing an analog watch" },
                                "Digital Watch": { type: "option", prompt: "wearing a digital watch" },
                                "Smartwatch": { type: "option", prompt: "wearing a smartwatch" },
                                "Leather Wristband": { type: "option", prompt: "wearing a leather wristband" },
                                "Metal Bracelet": { type: "option", prompt: "wearing a metal bracelet" },
                                "Beaded Bracelet": { type: "option", prompt: "wearing a beaded bracelet" },
                                "Signet Ring": { type: "option", prompt: "wearing a signet ring" },
                                "Leather Gloves": { type: "option", prompt: "wearing leather gloves" },
                                "Fingerless Gloves": { type: "option", prompt: "wearing fingerless gloves" }
                            }
                        },
                        "Suit Accessories": {
                            type: "group",
                            icon: ICONS.tie,
                            options: {
                                "Tie Clip": { type: "option", prompt: "wearing a tie clip" },
                                "Cufflinks": { type: "option", prompt: "wearing cufflinks" },
                                "Pocket Square": { type: "option", prompt: "wearing a pocket square" },
                                "Lapel Pin": { type: "option", prompt: "wearing a lapel pin" },
                                "Suspenders": { type: "option", prompt: "wearing suspenders" },
                                "Leather Belt": { type: "option", prompt: "wearing a leather belt" }
                            }
                        },
                        "Bags": {
                            type: "group",
                            icon: ICONS.accessories,
                            options: {
                                "Backpack": { type: "option", prompt: "carrying a backpack" },
                                "Leather Briefcase": { type: "option", prompt: "carrying a leather briefcase" },
                                "Messenger Bag": { type: "option", prompt: "carrying a messenger bag" },
                                "Crossbody Bag": { type: "option", prompt: "wearing a crossbody bag" },
                                "Fanny Pack": { type: "option", prompt: "wearing a fanny pack" },
                                "Duffle Bag": { type: "option", prompt: "carrying a duffle bag" }
                            }
                        },
                        "Tech": {
                            type: "group",
                            icon: ICONS.accessories,
                            options: {
                                "Over-ear Headphones": { type: "option", prompt: "wearing over-ear headphones" },
                                "Earbuds": { type: "option", prompt: "wearing earbuds" },
                                "Smart Glasses": { type: "option", prompt: "wearing smart glasses" },
                                "VR Headset": { type: "option", prompt: "wearing a VR headset" }
                            }
                        },
                        "Piercing": {
                            type: "group",
                            icon: ICONS.face,
                            options: {
                                "Ear Stud": { type: "option", prompt: "wearing an ear stud" },
                                "Ear Hoop": { type: "option", prompt: "wearing an ear hoop" },
                                "Nose Ring": { type: "option", prompt: "wearing a nose ring" },
                                "Eyebrow Ring": { type: "option", prompt: "wearing an eyebrow ring" },
                                "Lip Ring": { type: "option", prompt: "wearing a lip ring" }
                            }
                        }
                    }
                },
                "Footwear": {
                    type: "group",
                    icon: ICONS.footwear,
                    options: {
                        "Casual Footwear": {
                            type: "group",
                            icon: ICONS.footwear,
                            options: {
                                "Low-top Sneakers": { type: "group", options: getFootwearColors("Low-top Sneakers") },
                                "High-top Sneakers": { type: "group", options: getFootwearColors("High-top Sneakers") },
                                "Chunky Sneakers": { type: "group", options: getFootwearColors("Chunky Sneakers") },
                                "Canvas Shoes": { type: "group", options: getFootwearColors("Canvas Shoes") },
                                "Slip-on Sneakers": { type: "group", options: getFootwearColors("Slip-on Sneakers") },
                                "Espadrilles": { type: "group", options: getFootwearColors("Espadrilles") }
                            }
                        },
                        "Formal Footwear": {
                            type: "group",
                            icon: ICONS.footwear,
                            options: {
                                "Oxford Shoes": { type: "group", options: getFootwearColors("Oxford Shoes") },
                                "Derby Shoes": { type: "group", options: getFootwearColors("Derby Shoes") },
                                "Brogues": { type: "group", options: getFootwearColors("Brogues") },
                                "Monk Strap Shoes": { type: "group", options: getFootwearColors("Monk Strap Shoes") },
                                "Penny Loafers": { type: "group", options: getFootwearColors("Penny Loafers") },
                                "Tassel Loafers": { type: "group", options: getFootwearColors("Tassel Loafers") }
                            }
                        },
                        "Boots": {
                            type: "group",
                            icon: ICONS.footwear,
                            options: {
                                "Chelsea Boots": { type: "group", options: getFootwearColors("Chelsea Boots") },
                                "Combat Boots": { type: "group", options: getFootwearColors("Combat Boots") },
                                "Chukka Boots": { type: "group", options: getFootwearColors("Chukka Boots") },
                                "Work Boots": { type: "group", options: getFootwearColors("Work Boots") },
                                "Hiking Boots": { type: "group", options: getFootwearColors("Hiking Boots") },
                                "Cowboy Boots": { type: "group", options: getFootwearColors("Cowboy Boots") }
                            }
                        },
                        "Sandals & Summer": {
                            type: "group",
                            icon: ICONS.footwear,
                            options: {
                                "Leather Sandals": { type: "group", options: getFootwearColors("Leather Sandals") },
                                "Slides": { type: "group", options: getFootwearColors("Slides") },
                                "Flip-Flops": { type: "group", options: getFootwearColors("Flip-Flops") },
                                "Clogs": { type: "group", options: getFootwearColors("Clogs") },
                                "Mules": { type: "group", options: getFootwearColors("Mules") }
                            }
                        },
                        "Sports Footwear": {
                            type: "group",
                            icon: ICONS.footwear,
                            options: {
                                "Running Shoes": { type: "group", options: getFootwearColors("Running Shoes") },
                                "Basketball Shoes": { type: "group", options: getFootwearColors("Basketball Shoes") },
                                "Training Shoes": { type: "group", options: getFootwearColors("Training Shoes") },
                                "Tennis Shoes": { type: "group", options: getFootwearColors("Tennis Shoes") },
                                "Football Cleats": { type: "group", options: getFootwearColors("Football Cleats") }
                            }
                        },
                        "Traditional Footwear": {
                            type: "group",
                            icon: ICONS.footwear,
                            options: {
                                "Mojari / Jutti": { type: "group", options: getFootwearColors("Mojari / Jutti") },
                                "Kolhapuri Chappal": { type: "group", options: getFootwearColors("Kolhapuri Chappal") },
                                "Peshawari Sandals": { type: "group", options: getFootwearColors("Peshawari Sandals") }
                            }
                        }
                    }
                },
                "Expressions": {
                    type: "group",
                    icon: ICONS.expressions,
                    options: {
                        "Happy & Cheerful": {
                            type: "group",
                            icon: ICONS.expressions,
                            options: {
                                "Smile": { type: "option", prompt: "with a Smile expression" },
                                "Grin": { type: "option", prompt: "with a Grin expression" },
                                "Laughing": { type: "option", prompt: "with a Laughing expression" },
                                "Confident Smile": { type: "option", prompt: "with a Confident Smile expression" },
                                "Content": { type: "option", prompt: "with a Content expression" },
                                "Excited": { type: "option", prompt: "with a Excited expression" }
                            }
                        },
                        "Serious & Focused": {
                            type: "group",
                            icon: ICONS.expressions,
                            options: {
                                "Neutral": { type: "option", prompt: "with a Neutral expression" },
                                "Serious": { type: "option", prompt: "with a Serious expression" },
                                "Intense Gaze": { type: "option", prompt: "with a Intense Gaze expression" },
                                "Suspicious": { type: "option", prompt: "with a Suspicious expression" },
                                "Determined": { type: "option", prompt: "with a Determined expression" }
                            }
                        },
                        "Angry & Aggressive": {
                            type: "group",
                            icon: ICONS.expressions,
                            options: {
                                "Angry": { type: "option", prompt: "with a Angry expression" },
                                "Furious": { type: "option", prompt: "with a Furious expression" },
                                "Shouting": { type: "option", prompt: "with a Shouting expression" },
                                "Gritting Teeth": { type: "option", prompt: "with a Gritting Teeth expression" },
                                "Annoyed": { type: "option", prompt: "with a Annoyed expression" },
                                "Disgusted": { type: "option", prompt: "with a Disgusted expression" }
                            }
                        },
                        "Sad & Emotional": {
                            type: "group",
                            icon: ICONS.expressions,
                            options: {
                                "Sad": { type: "option", prompt: "with a Sad expression" },
                                "Crying": { type: "option", prompt: "with a Crying expression" },
                                "Teary-eyed": { type: "option", prompt: "with a Teary-eyed expression" },
                                "Depressed": { type: "option", prompt: "with a Depressed expression" },
                                "Scared": { type: "option", prompt: "with a Scared expression" },
                                "Nervous": { type: "option", prompt: "with a Nervous expression" }
                            }
                        },
                        "Charming & Attitude": {
                            type: "group",
                            icon: ICONS.expressions,
                            options: {
                                "Smirk": { type: "option", prompt: "with a Smirk expression" },
                                "Wink": { type: "option", prompt: "with a Wink expression" },
                                "Seductive": { type: "option", prompt: "with a Seductive expression" },
                                "Arrogant": { type: "option", prompt: "with a Arrogant expression" },
                                "Proud": { type: "option", prompt: "with a Proud expression" }
                            }
                        },
                        "Surprised & Thoughtful": {
                            type: "group",
                            icon: ICONS.expressions,
                            options: {
                                "Surprised": { type: "option", prompt: "with a Surprised expression" },
                                "Shocked": { type: "option", prompt: "with a Shocked expression" },
                                "Confused": { type: "option", prompt: "with a Confused expression" },
                                "Thinking": { type: "option", prompt: "with a Thinking expression" },
                                "Curious": { type: "option", prompt: "with a Curious expression" }
                            }
                        }
                    }
                },
                "Emotions": {
                    type: "group",
                    icon: ICONS.emotions,
                    options: {
                        "Love & Romance": {
                            type: "group",
                            icon: ICONS.emotions,
                            options: {
                                "Romantic": { type: "option", prompt: "evoking a Romantic vibe" },
                                "Passionate": { type: "option", prompt: "evoking a Passionate vibe" },
                                "Affectionate": { type: "option", prompt: "evoking a Affectionate vibe" },
                                "Flirty": { type: "option", prompt: "evoking a Flirty vibe" },
                                "Shy": { type: "option", prompt: "evoking a Shy vibe" },
                                "Heartbroken": { type: "option", prompt: "evoking a Heartbroken vibe" }
                            }
                        },
                        "Joy & Positivity": {
                            type: "group",
                            icon: ICONS.emotions,
                            options: {
                                "Euphoric": { type: "option", prompt: "evoking a Euphoric vibe" },
                                "Blissful": { type: "option", prompt: "evoking a Blissful vibe" },
                                "Grateful": { type: "option", prompt: "evoking a Grateful vibe" },
                                "Hopeful": { type: "option", prompt: "evoking a Hopeful vibe" },
                                "Playful": { type: "option", prompt: "evoking a Playful vibe" },
                                "Excited": { type: "option", prompt: "evoking a Excited vibe" }
                            }
                        },
                        "Sadness & Melancholy": {
                            type: "group",
                            icon: ICONS.emotions,
                            options: {
                                "Melancholic": { type: "option", prompt: "evoking a Melancholic vibe" },
                                "Lonely": { type: "option", prompt: "evoking a Lonely vibe" },
                                "Grief": { type: "option", prompt: "evoking a Grief vibe" },
                                "Despair": { type: "option", prompt: "evoking a Despair vibe" },
                                "Regretful": { type: "option", prompt: "evoking a Regretful vibe" },
                                "Numb": { type: "option", prompt: "evoking a Numb vibe" }
                            }
                        },
                        "Fear & Anxiety": {
                            type: "group",
                            icon: ICONS.emotions,
                            options: {
                                "Anxious": { type: "option", prompt: "evoking a Anxious vibe" },
                                "Terrified": { type: "option", prompt: "evoking a Terrified vibe" },
                                "Paranoid": { type: "option", prompt: "evoking a Paranoid vibe" },
                                "Shocked": { type: "option", prompt: "evoking a Shocked vibe" },
                                "Stressed": { type: "option", prompt: "evoking a Stressed vibe" }
                            }
                        },
                        "Anger & Intensity": {
                            type: "group",
                            icon: ICONS.emotions,
                            options: {
                                "Rage": { type: "option", prompt: "evoking a Rage vibe" },
                                "Bitter": { type: "option", prompt: "evoking a Bitter vibe" },
                                "Jealous": { type: "option", prompt: "evoking a Jealous vibe" },
                                "Rebellious": { type: "option", prompt: "evoking a Rebellious vibe" },
                                "Heroic": { type: "option", prompt: "evoking a Heroic vibe" }
                            }
                        },
                        "Calm & Peace": {
                            type: "group",
                            icon: ICONS.emotions,
                            options: {
                                "Serene": { type: "option", prompt: "evoking a Serene vibe" },
                                "Meditative": { type: "option", prompt: "evoking a Meditative vibe" },
                                "Relieved": { type: "option", prompt: "evoking a Relieved vibe" },
                                "Nostalgic": { type: "option", prompt: "evoking a Nostalgic vibe" },
                                "Dreamy": { type: "option", prompt: "evoking a Dreamy vibe" }
                            }
                        }
                    }
                },
                "Gesture & Pose": { type: "group", icon: ICONS.gestures, options: gesturePoseOptions },
                "Vibe & Feel": {
                    type: "group",
                    icon: ICONS.lookfeel,
                    options: {
                        "Sad & Melancholic": {
                            type: "group",
                            icon: ICONS.emotions,
                            options: {
                                "Rainy Mood": { type: "option", prompt: "cinematic atmosphere, rainy day, wet window glass, gloomy lighting, melancholic" },
                                "Dark & Blue Tone": { type: "option", prompt: "dark and moody lighting, dominant blue tones, cinematic, isolated feel" },
                                "Lonely Spotlight": { type: "option", prompt: "dramatic spotlight on subject, surrounding darkness, high contrast, lonely atmosphere" },
                                "Grey Scale / Desaturated": { type: "option", prompt: "desaturated colors, muted tones, bleak atmosphere, almost black and white" },
                                "Foggy / Misty": { type: "option", prompt: "heavy fog and mist, mysterious atmosphere, diffused lighting, cinematic" }
                            }
                        },
                        "Romantic & Dreamy": {
                            type: "group",
                            icon: ICONS.emotions,
                            options: {
                                "Soft Warm Glow": { type: "option", prompt: "bathed in soft warm golden hour light, intimate atmosphere, dreamy, cinematic romance" },
                                "Dreamy Pastel": { type: "option", prompt: "soft pastel color palette, dreamy aesthetic, gentle lighting, ethereal" },
                                "Candlelight Vibe": { type: "option", prompt: "lit by warm candlelight, deep shadows, cozy and romantic atmosphere" },
                                "Bokeh Effect": { type: "option", prompt: "heavy background blur bokeh, subject focus, dreamy lights, beautiful aesthetic" },
                                "Fairy Tale": { type: "option", prompt: "magical fairy tale atmosphere, sparkling lights, whimsical, enchanting" }
                            }
                        },
                        "Attitude & Bold": {
                            type: "group",
                            icon: ICONS.expressions,
                            options: {
                                "High Contrast / Gritty": { type: "option", prompt: "dramatic high contrast lighting, gritty texture, deep shadows, sharp details, cinematic" },
                                "Neon Noir": { type: "option", prompt: "cyberpunk neon lighting (red and blue), night scene, reflective wet streets, edgy vibe" },
                                "Dramatic Shadows": { type: "option", prompt: "harsh side lighting, half face in shadow, intense look, dramatic" },
                                "Cold & Sharp": { type: "option", prompt: "cold color grading, sharp focus, serious tone, matrix style aesthetic" },
                                "Red Alert": { type: "option", prompt: "intense red lighting hue, danger vibe, dramatic and bold" }
                            }
                        },
                        "Nostalgic & Retro": {
                            type: "group",
                            icon: ICONS.lookfeel,
                            options: {
                                "90s Film Grain": { type: "option", prompt: "90s vintage film look, heavy film grain, retro color grading, analog photo" },
                                "Sepia Tone": { type: "option", prompt: "sepia tone filter, old photograph look, vintage, historical vibe" },
                                "Polaroid Style": { type: "option", prompt: "polaroid photo aesthetic, faded colors, flash photography look, retro" },
                                "VHS Glitch": { type: "option", prompt: "VHS tape aesthetic, slight tracking glitch lines, retro video look" },
                                "Black & White Classic": { type: "option", prompt: "classic black and white photography, timeless look, high contrast" }
                            }
                        },
                        "Chill & Aesthetic": {
                            type: "group",
                            icon: ICONS.lookfeel,
                            options: {
                                "Golden Hour": { type: "option", prompt: "beautiful golden hour sunset lighting, warm and peaceful atmosphere, cinematic" },
                                "Lo-Fi Vibe": { type: "option", prompt: "lo-fi aesthetic, muted purple and blue tones, relaxing atmosphere, soft lighting" },
                                "Nature Fresh": { type: "option", prompt: "bright natural daylight, fresh green colors, airy atmosphere, organic" },
                                "Minimalist": { type: "option", prompt: "minimalist composition, clean background, soft neutral lighting, modern aesthetic" }
                            }
                        }
                    }
                }
            }
        },
        "Female": {
            type: "group",
            icon: ICONS.user,
            options: {
                "Face": {
                    type: "group",
                    icon: ICONS.face,
                    options: {
                        "Hair Styles": {
                            type: "group",
                            icon: ICONS.user,
                            options: {
                                "Open Straight Hair": { type: "option", prompt: "with Open Straight Hair hairstyle" },
                                "Wavy / Curls": { type: "option", prompt: "with Wavy / Curls hairstyle" },
                                "Ponytail": { type: "option", prompt: "with Ponytail hairstyle" },
                                "Messy Bun": { type: "option", prompt: "with Messy Bun hairstyle" },
                                "Braids": { type: "option", prompt: "with Braids hairstyle" },
                                "Bob Cut": { type: "option", prompt: "with Bob Cut hairstyle" },
                                "Pixie Cut": { type: "option", prompt: "with Pixie Cut hairstyle" },
                                "Bangs / Fringes": { type: "option", prompt: "with Bangs / Fringes hairstyle" }
                            }
                        },
                        "Makeup": {
                            type: "group",
                            icon: ICONS.face,
                            options: {
                                "Natural No-Makeup Look": { type: "option", prompt: "wearing Natural No-Makeup Look" },
                                "Glam Party Makeup": { type: "option", prompt: "wearing Glam Party Makeup" },
                                "Smokey Eyes": { type: "option", prompt: "wearing Smokey Eyes" },
                                "Red Lipstick": { type: "option", prompt: "wearing Red Lipstick" },
                                "Gothic Makeup": { type: "option", prompt: "wearing Gothic Makeup" },
                                "Dewy Skin Look": { type: "option", prompt: "wearing Dewy Skin Look" }
                            }
                        }
                    }
                },
                "Clothes": {
                    type: "group",
                    icon: ICONS.clothes,
                    options: {
                        "Indian Traditional": {
                            type: "group",
                            icon: ICONS.clothes,
                            options: {
                                "Saree": { type: "option", prompt: "wearing a Saree" },
                                "Lehenga Choli": { type: "option", prompt: "wearing a Lehenga Choli" },
                                "Kurti with Jeans": { type: "option", prompt: "wearing a Kurti with Jeans" },
                                "Salwar Kameez": { type: "option", prompt: "wearing a Salwar Kameez" },
                                "Anarkali Suit": { type: "option", prompt: "wearing a Anarkali Suit" }
                            }
                        },
                        "Western Casual": {
                            type: "group",
                            icon: ICONS.clothes,
                            options: {
                                "T-Shirt & Jeans": { type: "option", prompt: "wearing T-Shirt & Jeans" },
                                "Crop Top & Shorts": { type: "option", prompt: "wearing Crop Top & Shorts" },
                                "Hoodie & Sweatpants": { type: "option", prompt: "wearing Hoodie & Sweatpants" },
                                "Oversized T-Shirt": { type: "option", prompt: "wearing Oversized T-Shirt" },
                                "Dungarees": { type: "option", prompt: "wearing Dungarees" }
                            }
                        },
                        "Dresses & Glam": {
                            type: "group",
                            icon: ICONS.clothes,
                            options: {
                                "Sundress": { type: "option", prompt: "wearing a Sundress" },
                                "Evening Gown": { type: "option", prompt: "wearing an Evening Gown" },
                                "Bodycon Dress": { type: "option", prompt: "wearing a Bodycon Dress" },
                                "Mini Skirt & Top": { type: "option", prompt: "wearing Mini Skirt & Top" },
                                "Cocktail Dress": { type: "option", prompt: "wearing a Cocktail Dress" }
                            }
                        },
                        "Formal / Office": {
                            type: "group",
                            icon: ICONS.tie,
                            options: {
                                "Blazer & Trousers": { type: "option", prompt: "wearing Blazer & Trousers" },
                                "Formal Shirt & Pencil Skirt": { type: "option", prompt: "wearing Formal Shirt & Pencil Skirt" },
                                "Turtleneck & Coat": { type: "option", prompt: "wearing Turtleneck & Coat" }
                            }
                        }
                    }
                },
                "Accessories": {
                    type: "group",
                    icon: ICONS.accessories,
                    options: {
                        "Jewelry": {
                            type: "group",
                            icon: ICONS.accessories,
                            options: {
                                "Earrings": { type: "option", prompt: "wearing Earrings" },
                                "Necklace": { type: "option", prompt: "wearing Necklace" },
                                "Nose Ring": { type: "option", prompt: "wearing Nose Ring" },
                                "Bangles": { type: "option", prompt: "wearing Bangles" },
                                "Maang Tikka": { type: "option", prompt: "wearing Maang Tikka" }
                            }
                        },
                        "Eyewear": {
                            type: "group",
                            icon: ICONS.accessories,
                            options: {
                                "Sunglasses": { type: "option", prompt: "wearing Sunglasses" },
                                "Cat-eye Glasses": { type: "option", prompt: "wearing Cat-eye Glasses" },
                                "Spectacles": { type: "option", prompt: "wearing Spectacles" }
                            }
                        },
                        "Bags": {
                            type: "group",
                            icon: ICONS.accessories,
                            options: {
                                "Handbag": { type: "option", prompt: "carrying a Handbag" },
                                "Clutch": { type: "option", prompt: "carrying a Clutch" },
                                "Sling Bag": { type: "option", prompt: "carrying a Sling Bag" },
                                "Backpack": { type: "option", prompt: "carrying a Backpack" }
                            }
                        },
                        "Headwear": {
                            type: "group",
                            icon: ICONS.hat,
                            options: {
                                "Sun Hat": { type: "option", prompt: "wearing a Sun Hat" },
                                "Beanie": { type: "option", prompt: "wearing a Beanie" },
                                "Bandana": { type: "option", prompt: "wearing a Bandana" }
                            }
                        }
                    }
                },
                "Footwear": {
                    type: "group",
                    icon: ICONS.footwear,
                    options: {
                        "High Heels": { type: "option", prompt: "wearing High Heels" },
                        "Block Heels": { type: "option", prompt: "wearing Block Heels" },
                        "Flat Ballerinas": { type: "option", prompt: "wearing Flat Ballerinas" },
                        "Sneakers": { type: "option", prompt: "wearing Sneakers" },
                        "Ankle Boots": { type: "option", prompt: "wearing Ankle Boots" },
                        "Strappy Sandals": { type: "option", prompt: "wearing Strappy Sandals" },
                        "Traditional Jutti": { type: "option", prompt: "wearing Traditional Jutti" }
                    }
                },
                "Gesture & Pose": {
                    type: "group",
                    icon: ICONS.gestures,
                    options: {
                        "Standing": {
                            type: "group",
                            icon: ICONS.gestures,
                            options: {
                                "Hand on Hip": { type: "option", prompt: "standing with hand on hip" },
                                "Leaning Against Wall": { type: "option", prompt: "standing leaning against wall" },
                                "Playing with Hair": { type: "option", prompt: "standing playing with hair" },
                                "Model Pose": { type: "option", prompt: "standing in a model pose" },
                                "Back to Camera": { type: "option", prompt: "standing with back to camera" }
                            }
                        },
                        "Sitting": {
                            type: "group",
                            icon: ICONS.gestures,
                            options: {
                                "Legs Crossed Elegantly": { type: "option", prompt: "sitting with legs crossed elegantly" },
                                "Relaxed on Chair": { type: "option", prompt: "sitting relaxed on chair" },
                                "Sitting on Ground": { type: "option", prompt: "sitting on ground" }
                            }
                        },
                        "Gestures": {
                            type: "group",
                            icon: ICONS.gestures,
                            options: {
                                "Heart Hands": { type: "option", prompt: "making a Heart Hands gesture" },
                                "Blowing a Kiss": { type: "option", prompt: "making a Blowing a Kiss gesture" },
                                "Peace Sign": { type: "option", prompt: "making a Peace Sign gesture" },
                                "Waving": { type: "option", prompt: "making a Waving gesture" }
                            }
                        }
                    }
                },
                "Expressions": {
                    type: "group",
                    icon: ICONS.expressions,
                    options: {
                        "Happy": {
                            type: "group",
                            icon: ICONS.expressions,
                            options: {
                                "Smile": { type: "option", prompt: "with a Smile expression" },
                                "Laughing": { type: "option", prompt: "with a Laughing expression" }
                            }
                        },
                        "Serious": {
                            type: "group",
                            icon: ICONS.expressions,
                            options: {
                                "Neutral": { type: "option", prompt: "with a Neutral expression" },
                                "Intense": { type: "option", prompt: "with a Intense expression" }
                            }
                        },
                        "Sad": {
                            type: "group",
                            icon: ICONS.expressions,
                            options: {
                                "Crying": { type: "option", prompt: "with a Crying expression" },
                                "Moody": { type: "option", prompt: "with a Moody expression" }
                            }
                        },
                        "Charming": {
                            type: "group",
                            icon: ICONS.expressions,
                            options: {
                                "Wink": { type: "option", prompt: "with a Wink expression" },
                                "Pout": { type: "option", prompt: "with a Pout expression" }
                            }
                        }
                    }
                },
                "Emotions": {
                    type: "group",
                    icon: ICONS.emotions,
                    options: {
                        "Romantic": { type: "option", prompt: "evoking a Romantic vibe" },
                        "Melancholic": { type: "option", prompt: "evoking a Melancholic vibe" },
                        "Dreamy": { type: "option", prompt: "evoking a Dreamy vibe" },
                        "Bold": { type: "option", prompt: "evoking a Bold vibe" },
                        "Joyful": { type: "option", prompt: "evoking a Joyful vibe" }
                    }
                },
                "Vibe & Feel": {
                    type: "group",
                    icon: ICONS.lookfeel,
                    options: {
                        "Rainy Mood": { type: "option", prompt: "cinematic atmosphere, rainy day, wet window glass, gloomy lighting, melancholic" },
                        "Golden Hour": { type: "option", prompt: "beautiful golden hour sunset lighting, warm and peaceful atmosphere, cinematic" },
                        "Neon Noir": { type: "option", prompt: "cyberpunk neon lighting (red and blue), night scene, reflective wet streets, edgy vibe" },
                        "Vintage Sepia": { type: "option", prompt: "sepia tone filter, old photograph look, vintage, historical vibe" },
                        "Soft Pastel": { type: "option", prompt: "soft pastel color palette, dreamy aesthetic, gentle lighting, ethereal" }
                    }
                }
            }
        }
    }
};
