// Couple Special Category - Split Structure
export const coupleSpecialCategory = {
    type: 'split-couple',
    male: {
        "Face": ["Bearded", "Clean Shaven", "Stubble", "Goatee", "Mustache"],
        "Clothes": ["Formal Suit", "Casual T-Shirt & Jeans", "Crisp White Shirt", "Leather Jacket", "Traditional Sherwani", "Winter Coat", "Hoodie"],
        "Accessories": ["None", "Wristwatch", "Sunglasses", "Cap", "Beanie", "Scarf"],
        "Footwear": ["Formal Shoes", "White Sneakers", "Leather Boots", "Loafers", "Sandals"],
        "Expressions": ["Warm Smile", "Serious", "Laughing", "Neutral", "Romantic Gaze", "Winking"]
    },
    female: {
        "Face": ["Natural Look", "Light Makeup", "Glamorous Makeup", "Red Lipstick", "No Makeup"],
        "Clothes": ["Elegant Evening Gown", "Floral Summer Dress", "Casual Jeans & Top", "Traditional Saree", "Business Suit", "Boho Chic Outfit", "Winter Jacket"],
        "Accessories": ["None", "Diamond Necklace", "Gold Earrings", "Handbag", "Hairband", "Sunglasses"],
        "Footwear": ["High Heels", "Comfortable Flats", "White Sneakers", "Ankle Boots", "Sandals"],
        "Expressions": ["Bright Smile", "Laughing", "Shy Smile", "Neutral", "Romantic Gaze", "Pouting"]
    },
    options: {
        "Gesture & Pose": {
            type: "group", // Explicitly NOT 'dual'
            options: {
                // --- ROMANTIC ---
                "Forehead Touch": "couple touching foreheads gently, deep emotional connection, close up",
                "Back Hug": "male hugging female from behind, wrapping arms around waist, protective vibe",
                "Nose to Nose": "couple touching noses, eskimo kiss, intimate close up",
                "Looking into Eyes": "couple gazing deeply into each other's eyes, romantic tension",
                "Kissing": "romantic kiss, soft lighting, emotional moment",
                "Head on Shoulder": "female resting head on male's shoulder, peaceful expression",

                // --- FUN & ACTION ---
                "Piggyback Ride": "man giving woman a piggyback ride, laughing, playful moment",
                "Lifting Up": "man lifting woman up in arms, spinning, pure joy",
                "Selfie Pose": "couple holding phone taking a wide-angle selfie, funny faces",
                "Walking Hand-in-Hand": "couple walking away holding hands, scenic background",
                "Dancing": "couple dancing together, elegant posture, romantic atmosphere",
                "Chasing": "couple chasing each other playfully, dynamic motion",

                // --- STATIC ---
                "Sitting on Bench": "couple sitting close on a park bench, calm conversation",
                "Back to Back": "couple standing back-to-back, arms crossed, cool attitude",
                "Sitting on Car Bonnet": "couple sitting on car hood watching sunset, travel vibes"
            }
        }
    }
};
