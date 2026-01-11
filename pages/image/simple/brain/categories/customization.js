// Category Data for Customization

import { fullOutfitColorGenerator, generateMaleClothesDefault } from '../generators/customization-clothes.js';
import { faceGenerators, generateMaleFaceDefault } from '../../generate/customization/male/face.js';

export const customizationCategory = {
    type: 'group',
    options: {
        "Male": {
            type: "group",
            options: {
                "Face": {
                    type: "group",
                    customGenerator: generateMaleFaceDefault,
                    options: {
                        "Eyes": {
                            type: "group",
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
                            options: {
                                "Style": {
                                    type: "group",
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
                            options: {
                                "Tone": {
                                    type: "group",
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
                            options: {
                                "Natural Pink": { type: "option", prompt: faceGenerators.lips("Natural Pink") },
                                "Natural Brown": { type: "option", prompt: faceGenerators.lips("Natural Brown") },
                                "Natural Nude": { type: "option", prompt: faceGenerators.lips("Natural Nude") },
                                "Slight Rosy Tone": { type: "option", prompt: faceGenerators.lips("Slight Rosy Tone") }
                            }
                        },
                        "Eyebrows": {
                            type: "group",
                            options: {
                                "Thin": { type: "option", prompt: faceGenerators.eyebrows("Thin") },
                                "Medium": { type: "option", prompt: faceGenerators.eyebrows("Medium") },
                                "Thick": { type: "option", prompt: faceGenerators.eyebrows("Thick") },
                                "Natural": { type: "option", prompt: faceGenerators.eyebrows("Natural") },
                                "Groomed": { type: "option", prompt: faceGenerators.eyebrows("Groomed") },
                                "Sharp": { type: "option", prompt: faceGenerators.eyebrows("Sharp") }
                            }
                        },
                        "Beard": {
                            type: "group",
                            options: {
                                "Style": {
                                    type: "group",
                                    options: {
                                        "Clean Shave": { type: "option", prompt: faceGenerators.beard("Clean Shave") },
                                        "Light Stubble": { type: "option", prompt: faceGenerators.beard("Light Stubble") },
                                        "Heavy Stubble": { type: "option", prompt: faceGenerators.beard("Heavy Stubble") },
                                        "Short Beard": { type: "option", prompt: faceGenerators.beard("Short Beard") },
                                        "Medium Beard": { type: "option", prompt: faceGenerators.beard("Medium Beard") },
                                        "Long Beard": { type: "option", prompt: faceGenerators.beard("Long Beard") },
                                        "French Beard": { type: "option", prompt: faceGenerators.beard("French Beard") },
                                        "Goatee": { type: "option", prompt: faceGenerators.beard("Goatee") },
                                        "Ducktail": { type: "option", prompt: faceGenerators.beard("Ducktail") },
                                        "Boxed Beard": { type: "option", prompt: faceGenerators.beard("Boxed Beard") },
                                        "Corporate Beard": { type: "option", prompt: faceGenerators.beard("Corporate Beard") },
                                        "Full Beard": { type: "option", prompt: faceGenerators.beard("Full Beard") }
                                    }
                                },
                                "Color": {
                                    type: "group",
                                    options: {
                                        "Black": { type: "option", prompt: faceGenerators.beard("Black") },
                                        "Dark Brown": { type: "option", prompt: faceGenerators.beard("Dark Brown") },
                                        "Brown": { type: "option", prompt: faceGenerators.beard("Brown") },
                                        "Light Brown": { type: "option", prompt: faceGenerators.beard("Light Brown") },
                                        "Grey": { type: "option", prompt: faceGenerators.beard("Grey") },
                                        "White": { type: "option", prompt: faceGenerators.beard("White") },
                                        "Salt & Pepper": { type: "option", prompt: faceGenerators.beard("Salt & Pepper") },
                                        "Fashion Colors": { type: "option", prompt: faceGenerators.beard("Fashion Colors") }
                                    }
                                }
                            }
                        },
                        "Mustache": {
                            type: "group",
                            options: {
                                "Style": {
                                    type: "group",
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
                    options: {
                        "Top Wear": {
                            type: "group",
                            options: {
                                "T-Shirt": {
                                    type: "group",
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
                            options: {
                                "Jeans": {
                                    type: "group",
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
                                    options: {
                                        "Black": { type: "option", prompt: "wearing black Formal Pants" },
                                        "Grey": { type: "option", prompt: "wearing grey Formal Pants" },
                                        "Navy Blue": { type: "option", prompt: "wearing navy blue Formal Pants" },
                                        "Neutral": { type: "option", prompt: "wearing Formal Pants in neutral color" }
                                    }
                                },
                                "Shorts": {
                                    type: "group",
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
                                    options: {
                                        "Black": { type: "option", prompt: "wearing black Joggers" },
                                        "Grey": { type: "option", prompt: "wearing grey Joggers" },
                                        "Blue": { type: "option", prompt: "wearing blue Joggers" },
                                        "Neutral": { type: "option", prompt: "wearing Joggers in neutral color" }
                                    }
                                },
                                "Pyjama / Lounge Pants": {
                                    type: "group",
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
                            options: {
                                "Casual Outfit": {
                                    type: "group",
                                    enableType: true,
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
                    options: {
                        "Headwear": {
                            type: "group",
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
                            options: {
                                "Over-ear Headphones": { type: "option", prompt: "wearing over-ear headphones" },
                                "Earbuds": { type: "option", prompt: "wearing earbuds" },
                                "Smart Glasses": { type: "option", prompt: "wearing smart glasses" },
                                "VR Headset": { type: "option", prompt: "wearing a VR headset" }
                            }
                        },
                        "Piercing": {
                            type: "group",
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
                    options: {
                        "Type": {
                            type: "group",
                            options: {
                                "Casual Footwear": {
                                    type: "group",
                                    options: {
                                        "Low-top Sneakers": { type: "option", prompt: "wearing Low-top Sneakers" },
                                        "High-top Sneakers": { type: "option", prompt: "wearing High-top Sneakers" },
                                        "Chunky Sneakers": { type: "option", prompt: "wearing Chunky Sneakers" },
                                        "Canvas Shoes": { type: "option", prompt: "wearing Canvas Shoes" },
                                        "Slip-on Sneakers": { type: "option", prompt: "wearing Slip-on Sneakers" },
                                        "Espadrilles": { type: "option", prompt: "wearing Espadrilles" }
                                    }
                                },
                                "Formal Footwear": {
                                    type: "group",
                                    options: {
                                        "Oxford Shoes": { type: "option", prompt: "wearing Oxford Shoes" },
                                        "Derby Shoes": { type: "option", prompt: "wearing Derby Shoes" },
                                        "Brogues": { type: "option", prompt: "wearing Brogues" },
                                        "Monk Strap Shoes": { type: "option", prompt: "wearing Monk Strap Shoes" },
                                        "Penny Loafers": { type: "option", prompt: "wearing Penny Loafers" },
                                        "Tassel Loafers": { type: "option", prompt: "wearing Tassel Loafers" }
                                    }
                                },
                                "Boots": {
                                    type: "group",
                                    options: {
                                        "Chelsea Boots": { type: "option", prompt: "wearing Chelsea Boots" },
                                        "Combat Boots": { type: "option", prompt: "wearing Combat Boots" },
                                        "Chukka Boots": { type: "option", prompt: "wearing Chukka Boots" },
                                        "Work Boots": { type: "option", prompt: "wearing Work Boots" },
                                        "Hiking Boots": { type: "option", prompt: "wearing Hiking Boots" },
                                        "Cowboy Boots": { type: "option", prompt: "wearing Cowboy Boots" }
                                    }
                                },
                                "Sandals & Summer": {
                                    type: "group",
                                    options: {
                                        "Leather Sandals": { type: "option", prompt: "wearing Leather Sandals" },
                                        "Slides": { type: "option", prompt: "wearing Slides" },
                                        "Flip-Flops": { type: "option", prompt: "wearing Flip-Flops" },
                                        "Clogs": { type: "option", prompt: "wearing Clogs" },
                                        "Mules": { type: "option", prompt: "wearing Mules" }
                                    }
                                },
                                "Sports Footwear": {
                                    type: "group",
                                    options: {
                                        "Running Shoes": { type: "option", prompt: "wearing Running Shoes" },
                                        "Basketball Shoes": { type: "option", prompt: "wearing Basketball Shoes" },
                                        "Training Shoes": { type: "option", prompt: "wearing Training Shoes" },
                                        "Tennis Shoes": { type: "option", prompt: "wearing Tennis Shoes" },
                                        "Football Cleats": { type: "option", prompt: "wearing Football Cleats" }
                                    }
                                },
                                "Traditional Footwear": {
                                    type: "group",
                                    options: {
                                        "Mojari / Jutti": { type: "option", prompt: "wearing Mojari / Jutti" },
                                        "Kolhapuri Chappal": { type: "option", prompt: "wearing Kolhapuri Chappal" },
                                        "Peshawari Sandals": { type: "option", prompt: "wearing Peshawari Sandals" }
                                    }
                                }
                            }
                        },
                        "Color": {
                            type: "group",
                            options: {
                                "Black": { type: "option", prompt: "in Black color" },
                                "White": { type: "option", prompt: "in White color" },
                                "Brown": { type: "option", prompt: "in Brown color" },
                                "Tan": { type: "option", prompt: "in Tan color" },
                                "Dark Brown": { type: "option", prompt: "in Dark Brown color" },
                                "Grey": { type: "option", prompt: "in Grey color" },
                                "Navy Blue": { type: "option", prompt: "in Navy Blue color" },
                                "Beige": { type: "option", prompt: "in Beige color" },
                                "Red": { type: "option", prompt: "in Red color" },
                                "Multi-colored": { type: "option", prompt: "in Multi-colored color" }
                            }
                        }
                    }
                },
                "Expressions": { type: "group", options: {} },
                "Emotions": { type: "group", options: {} },
                "Body Gesture": { type: "group", options: {} },
                "Look & Feel": { type: "group", options: {} }
            }
        },
        "Female": {
            type: "group",
            options: {
                "Face": { type: "group", options: {} },
                "Clothes": { type: "group", options: {} },
                "Accessories": { type: "group", options: {} },
                "Footwear": { type: "group", options: {} },
                "Expressions": { type: "group", options: {} },
                "Emotions": { type: "group", options: {} },
                "Body Gesture": { type: "group", options: {} },
                "Look & Feel": { type: "group", options: {} }
            }
        }
    }
};
