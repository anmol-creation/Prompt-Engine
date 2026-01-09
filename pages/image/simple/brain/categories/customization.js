// Category Data for Customization

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
                "Clothes": { type: "group", options: {} },
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
