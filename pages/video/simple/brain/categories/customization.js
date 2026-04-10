// Video Simple Mode: Customization Category Brain Map
export const customizationCategory = {
    id: "customization",
    title: "Customization",
    type: "group",
    options: {
        "Clothing & Outfits": {
            type: "group",
            options: {
                "Casual & Everyday": {
                    type: "group",
                    options: {
                        "Streetwear": { type: "option", prompt: "wearing trendy streetwear with a loose hoodie, cargo pants, and fresh sneakers" },
                        "Summer Casual": { type: "option", prompt: "wearing light summer casual clothes like a relaxed t-shirt and shorts" },
                        "Winter Wear": { type: "option", prompt: "wearing heavy winter clothing including a thick puffer jacket, scarf, and gloves" }
                    }
                },
                "Formal & Professional": {
                    type: "group",
                    options: {
                        "Business Suit": { type: "option", prompt: "wearing a sharp, tailored professional business suit with a crisp shirt and tie" },
                        "Evening Gown / Dress": { type: "option", prompt: "wearing an elegant, flowing evening gown perfect for a formal gala" },
                        "Uniform": { type: "option", prompt: "wearing a clean, standard professional uniform or work attire" }
                    }
                },
                "Fantasy, Sci-Fi & Period": {
                    type: "group",
                    options: {
                        "Cyberpunk Gear": { type: "option", prompt: "wearing high-tech cyberpunk gear with glowing neon accents and tactical armor" },
                        "Medieval Fantasy": { type: "option", prompt: "wearing medieval fantasy attire like leather armor or a rugged tunic" },
                        "Vintage / Retro": { type: "option", prompt: "wearing stylish retro clothing inspired by the 1970s or 80s fashion" }
                    }
                }
            }
        },
        "Accessories & Props": {
            type: "group",
            options: {
                "Headwear & Eyewear": {
                    type: "group",
                    options: {
                        "Sunglasses": { type: "option", prompt: "wearing stylish dark sunglasses reflecting the surrounding light" },
                        "Hats / Caps": { type: "option", prompt: "wearing a casual baseball cap or stylish fedora hat" },
                        "Helmet": { type: "option", prompt: "wearing a protective or futuristic helmet covering the head" }
                    }
                },
                "Jewelry & Wearables": {
                    type: "group",
                    options: {
                        "Watches / Smartwatches": { type: "option", prompt: "wearing a sleek, modern watch or glowing smartwatch on the wrist" },
                        "Necklaces / Chains": { type: "option", prompt: "wearing a prominent gold chain or elegant necklace" },
                        "Earrings": { type: "option", prompt: "wearing sparkling, eye-catching earrings that catch the light" }
                    }
                },
                "Handheld Props": {
                    type: "group",
                    options: {
                        "Smartphone / Gadget": { type: "option", prompt: "holding and interacting with a glowing smartphone or futuristic gadget" },
                        "Coffee Cup / Drink": { type: "option", prompt: "casually holding a steaming cup of coffee or a cold beverage" },
                        "Weapon / Tool": { type: "option", prompt: "firmly gripping a specific tool or weapon ready for action" }
                    }
                }
            }
        },
        "Character Details (Hair & Makeup)": {
            type: "group",
            options: {
                "Hairstyles": {
                    type: "group",
                    options: {
                        "Short & Neat": { type: "option", prompt: "with short, neatly styled hair perfectly combed" },
                        "Long & Flowing": { type: "option", prompt: "with long, flowing hair naturally blowing in the wind" },
                        "Curly / Textured": { type: "option", prompt: "with voluminous, textured curly hair" },
                        "Bald / Shaved": { type: "option", prompt: "with a completely bald or closely shaved head" }
                    }
                },
                "Makeup & Facial Features": {
                    type: "group",
                    options: {
                        "Natural / Minimal": { type: "option", prompt: "with minimal, natural-looking makeup highlighting natural features" },
                        "Heavy / Dramatic": { type: "option", prompt: "with heavy, dramatic makeup including dark eyeliner and bold lips" },
                        "Scars / Tattoos": { type: "option", prompt: "featuring visible facial tattoos or rugged, healed scars adding character" }
                    }
                }
            }
        }
    }
};