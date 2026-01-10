// Category Data for Customization

import { fullOutfitColorGenerator } from '../generators/customization-clothes.js';

export const customizationCategory = {
    type: 'group',
    options: {
        "Male": {
            type: "group",
            options: {
                "Face": {
                    type: "group",
                    options: {
                        "Eyes": {
                            type: "group",
                            options: {
                                "Black": { type: "option", prompt: "with black eyes, keeping natural look" },
                                "Dark Brown": { type: "option", prompt: "with dark brown eyes, keeping natural look" },
                                "Brown": { type: "option", prompt: "with brown eyes, keeping natural look" },
                                "Light Brown": { type: "option", prompt: "with light brown eyes, keeping natural look" },
                                "Hazel": { type: "option", prompt: "with hazel eyes, keeping natural look" },
                                "Green": { type: "option", prompt: "with green eyes, keeping natural look" },
                                "Grey": { type: "option", prompt: "with grey eyes, keeping natural look" },
                                "Natural Contact Lens": { type: "option", prompt: "with natural contact-lens style eyes" }
                            }
                        },
                        "Hair": {
                            type: "group",
                            options: {
                                // Length
                                "Very Short": { type: "option", prompt: "with very short hair" },
                                "Short": { type: "option", prompt: "with short hair" },
                                "Medium": { type: "option", prompt: "with medium length hair" },
                                "Long": { type: "option", prompt: "with long hair" },
                                // Type
                                "Straight": { type: "option", prompt: "with straight hair texture" },
                                "Wavy": { type: "option", prompt: "with wavy hair texture" },
                                "Curly": { type: "option", prompt: "with curly hair texture" },
                                "Coily": { type: "option", prompt: "with coily hair texture" },
                                // Style
                                "Side Part": { type: "option", prompt: "with side part hairstyle" },
                                "Middle Part": { type: "option", prompt: "with middle part hairstyle" },
                                "Undercut": { type: "option", prompt: "with undercut hairstyle" },
                                "Fade": { type: "option", prompt: "with fade hairstyle" },
                                "Taper": { type: "option", prompt: "with taper hairstyle" },
                                "Messy": { type: "option", prompt: "with messy hairstyle" },
                                "Slick Back": { type: "option", prompt: "with slick back hairstyle" },
                                "Quiff": { type: "option", prompt: "with quiff hairstyle" },
                                "Pompadour": { type: "option", prompt: "with pompadour hairstyle" },
                                "Crew Cut": { type: "option", prompt: "with crew cut hairstyle" },
                                "Buzz Cut": { type: "option", prompt: "with buzz cut hairstyle" },
                                "Long Flow": { type: "option", prompt: "with long flow hairstyle" },
                                "Man Bun": { type: "option", prompt: "with man bun hairstyle" },
                                // Color
                                "Black": { type: "option", prompt: "with black hair color" },
                                "Dark Brown": { type: "option", prompt: "with dark brown hair color" },
                                "Brown": { type: "option", prompt: "with brown hair color" },
                                "Light Brown": { type: "option", prompt: "with light brown hair color" },
                                "Blonde": { type: "option", prompt: "with blonde hair color" },
                                "Grey": { type: "option", prompt: "with grey hair color" },
                                "White": { type: "option", prompt: "with white hair color" },
                                "Fashion Colors": { type: "option", prompt: "with fashion colored hair" }
                            }
                        },
                        "Skin": {
                            type: "group",
                            options: {
                                // Tone
                                "Very Fair": { type: "option", prompt: "with very fair skin tone" },
                                "Fair": { type: "option", prompt: "with fair skin tone" },
                                "Light Wheatish": { type: "option", prompt: "with light wheatish skin tone" },
                                "Wheatish": { type: "option", prompt: "with wheatish skin tone" },
                                "Medium": { type: "option", prompt: "with medium skin tone" },
                                "Dusky": { type: "option", prompt: "with dusky skin tone" },
                                "Deep / Dark": { type: "option", prompt: "with deep dark skin tone" },
                                // Finish
                                "Natural": { type: "option", prompt: "with natural skin texture" },
                                "Smooth": { type: "option", prompt: "with smooth skin texture" },
                                "Matte": { type: "option", prompt: "with matte skin finish" },
                                "Slight Glow": { type: "option", prompt: "with slight glow on skin" }
                            }
                        },
                        "Lips": {
                            type: "group",
                            options: {
                                "Natural Pink": { type: "option", prompt: "with natural pink lips" },
                                "Natural Brown": { type: "option", prompt: "with natural brown lips" },
                                "Natural Nude": { type: "option", prompt: "with natural nude lips" },
                                "Slight Rosy Tone": { type: "option", prompt: "with slight rosy tone lips" }
                            }
                        },
                        "Eyebrows": {
                            type: "group",
                            options: {
                                "Thin": { type: "option", prompt: "with thin eyebrows" },
                                "Medium": { type: "option", prompt: "with medium thickness eyebrows" },
                                "Thick": { type: "option", prompt: "with thick eyebrows" },
                                "Natural": { type: "option", prompt: "with natural eyebrows" },
                                "Groomed": { type: "option", prompt: "with groomed eyebrows" },
                                "Sharp": { type: "option", prompt: "with sharp eyebrows" }
                            }
                        },
                        "Beard": {
                            type: "group",
                            options: {
                                // Styles
                                "Clean Shave": { type: "option", prompt: "clean shaven face" },
                                "Light Stubble": { type: "option", prompt: "with light stubble beard" },
                                "Heavy Stubble": { type: "option", prompt: "with heavy stubble beard" },
                                "Short Beard": { type: "option", prompt: "with short beard" },
                                "Medium Beard": { type: "option", prompt: "with medium length beard" },
                                "Long Beard": { type: "option", prompt: "with long beard" },
                                "French Beard": { type: "option", prompt: "with french beard" },
                                "Goatee": { type: "option", prompt: "with goatee beard" },
                                "Ducktail": { type: "option", prompt: "with ducktail beard" },
                                "Boxed Beard": { type: "option", prompt: "with boxed beard" },
                                "Corporate Beard": { type: "option", prompt: "with corporate beard" },
                                "Full Beard": { type: "option", prompt: "with full beard" },
                                // Colors
                                "Black": { type: "option", prompt: "with black beard" },
                                "Dark Brown": { type: "option", prompt: "with dark brown beard" },
                                "Brown": { type: "option", prompt: "with brown beard" },
                                "Light Brown": { type: "option", prompt: "with light brown beard" },
                                "Grey": { type: "option", prompt: "with grey beard" },
                                "White": { type: "option", prompt: "with white beard" },
                                "Salt & Pepper": { type: "option", prompt: "with salt and pepper beard" },
                                "Fashion Colors": { type: "option", prompt: "with fashion colored beard" }
                            }
                        },
                        "Mustache": {
                            type: "group",
                            options: {
                                // Styles
                                "Clean": { type: "option", prompt: "without mustache" },
                                "Light Mustache": { type: "option", prompt: "with light mustache" },
                                "Thick Mustache": { type: "option", prompt: "with thick mustache" },
                                "Handlebar": { type: "option", prompt: "with handlebar mustache" },
                                "Chevron": { type: "option", prompt: "with chevron mustache" },
                                "Pencil": { type: "option", prompt: "with pencil mustache" },
                                "English": { type: "option", prompt: "with english style mustache" },
                                "Walrus": { type: "option", prompt: "with walrus mustache" },
                                "Horseshoe": { type: "option", prompt: "with horseshoe mustache" },
                                // Colors (Synced with Beard)
                                "Black": { type: "option", prompt: "with black mustache" },
                                "Dark Brown": { type: "option", prompt: "with dark brown mustache" },
                                "Brown": { type: "option", prompt: "with brown mustache" },
                                "Light Brown": { type: "option", prompt: "with light brown mustache" },
                                "Grey": { type: "option", prompt: "with grey mustache" },
                                "White": { type: "option", prompt: "with white mustache" },
                                "Salt & Pepper": { type: "option", prompt: "with salt and pepper mustache" },
                                "Fashion Colors": { type: "option", prompt: "with fashion colored mustache" }
                            }
                        }
                    }
                },
                "Clothes": {
                    type: "group",
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
                "Accessories": { type: "group", options: {} },
                "Footwear": { type: "group", options: {} },
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
