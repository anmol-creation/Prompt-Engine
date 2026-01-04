// Categories list, Category → actions mapping, Static fallback prompt templates

export const categoriesData = {
    "Background": {
        actions: ["Blur", "Remove", "Replace", "Transparent", "Studio", "Outdoor", "Gradient", "Extend", "Shadow Adjust", "Light Match"],
        helperTexts: {
            "Blur": "Depth effect",
            "Remove": "Clean cut",
            "Replace": "Scene match",
            "Transparent": "PNG output",
            "Studio": "Studio look",
            "Outdoor": "Natural scene",
            "Gradient": "Smooth blend",
            "Extend": "Frame fill",
            "Shadow Adjust": "Natural shadow",
            "Light Match": "Light sync"
        },
        intensityAllowed: ["Blur"],
        templates: {
            "Blur": {
                "English": "Blur the background naturally while keeping the subject sharp and realistic.",
                "Hindi": "Background ko blur karein jabki subject ko saaf aur spasht rakhein.",
                "Hinglish": "Background ko naturally blur karein aur main subject ko sharp rakhein."
            },
            "Remove": {
                "English": "Remove the background completely, isolating the subject on a clean layer.",
                "Hindi": "Background ko puri tarah hata dein aur subject ko alag karein.",
                "Hinglish": "Background remove karein aur subject ko isolate karein."
            },
            "Replace": {
                "English": "Replace the background with a suitable context that matches the subject's lighting.",
                "Hindi": "Background ko ek nayi jagah se badlein jo subject ki lighting se match kare.",
                "Hinglish": "Background replace karein jo subject ke saath match kare."
            },
            "Transparent": {
                "English": "Make the background transparent for easy use in other designs.",
                "Hindi": "Background ko transparent banayein taaki ise kahin bhi use kiya ja sake.",
                "Hinglish": "Background ko transparent karein."
            },
            "Studio": {
                "English": "Change the background to a professional studio setting with controlled lighting.",
                "Hindi": "Background ko ek professional studio jaisa banayein.",
                "Hinglish": "Background ko studio look dein."
            },
            "Outdoor": {
                "English": "Change the background to a natural outdoor setting with ambient light.",
                "Hindi": "Background ko ek bahari prakritik drishya mein badlein.",
                "Hinglish": "Background ko outdoor natural setting mein change karein."
            },
            "Gradient": {
                "English": "Apply a smooth color gradient to the background.",
                "Hindi": "Background mein ek smooth rang ka gradient lagayein.",
                "Hinglish": "Background mein smooth gradient add karein."
            },
            "Extend": {
                "English": "Extend the background boundaries to fill the frame seamlessly.",
                "Hindi": "Background ko frame bharne ke liye badhayein.",
                "Hinglish": "Background extend karein taaki frame fill ho jaye."
            },
            "Shadow Adjust": {
                "English": "Adjust background shadows to look natural and consistent.",
                "Hindi": "Background ki parchhaiyon ko natural dikhne ke liye adjust karein.",
                "Hinglish": "Shadows adjust karein taaki natural look aaye."
            },
            "Light Match": {
                "English": "Sync the background lighting with the subject for a realistic composite.",
                "Hindi": "Background aur subject ki lighting ko ek jaisa karein.",
                "Hinglish": "Lighting match karein taaki realistic lage."
            }
        }
    },
    "Face": {
        actions: ["Skin Smooth", "Blemish Remove", "Light Retouch"],
        helperTexts: {},
        intensityAllowed: [],
        templates: {
            "Skin Smooth": {
                "English": "Smooth facial skin naturally while preserving texture and facial details.",
                "Hindi": "Chehre ki twacha ko natural tarike se chikna karein lekin texture banaye rakhein.",
                "Hinglish": "Face skin smooth karein par texture maintain rakhein."
            },
            "Blemish Remove": {
                "English": "Remove visible blemishes and imperfections from the face while keeping a natural skin tone.",
                "Hindi": "Chehre se daag-dhabbe hatayein aur natural rangat banaye rakhein.",
                "Hinglish": "Blemishes remove karein aur natural look rakhein."
            },
            "Light Retouch": {
                "English": "Apply a light retouch to the face to enhance appearance without losing natural characteristics.",
                "Hindi": "Chehre par halka retouch karein taaki sundarta badhe par asliyat na khoye.",
                "Hinglish": "Light retouch karein taaki face enhance ho jaye."
            }
        }
    },
    "Object / Subject": {
        actions: ["Remove Object", "Resize Subject"],
        helperTexts: {},
        intensityAllowed: ["Resize Subject"],
        templates: {
            "Remove Object": {
                "English": "Remove the specified object from the scene, filling the gap with context-aware details.",
                "Hindi": "Bataye gaye vastu ko hatayein aur khaali jagah ko natural tarike se bharein.",
                "Hinglish": "Object remove karein aur gap ko naturally fill karein."
            },
            "Resize Subject": {
                "English": "Adjust the size of the main subject to better fit the composition while maintaining proportions.",
                "Hindi": "Mukhya subject ka aakaar badlein taaki woh frame mein sahi fit ho.",
                "Hinglish": "Subject resize karein taaki composition better lage."
            }
        }
    },
    "Color & Light": {
        actions: ["Brightness & Exposure", "Color Correction"],
        helperTexts: {},
        intensityAllowed: [],
        templates: {
            "Brightness & Exposure": {
                "English": "Adjust the overall brightness to ensure a balanced exposure.",
                "Hindi": "Tasveer ki chamak ko adjust karein taaki woh santulit lage.",
                "Hinglish": "Brightness adjust karein taaki exposure balanced ho."
            },
            "Color Correction": {
                "English": "Correct the color balance to achieve natural skin tones and accurate colors.",
                "Hindi": "Rangon ko sudharein taaki twacha aur vatavaran natural lage.",
                "Hinglish": "Color correction karein for natural tones."
            }
        }
    },
    "Style": {
        actions: ["Artistic Style", "Cinematic Look"],
        helperTexts: {},
        intensityAllowed: [],
        templates: {
            "Artistic Style": {
                "English": "Apply an artistic style to the image, enhancing brush strokes and texture.",
                "Hindi": "Tasveer mein ek kalatmak style lagayein.",
                "Hinglish": "Artistic style apply karein."
            },
            "Cinematic Look": {
                "English": "Apply a cinematic color grade with dramatic lighting.",
                "Hindi": "Tasveer ko cinematic look dein dramatic lighting ke saath.",
                "Hinglish": "Cinematic look aur dramatic lighting dein."
            }
        }
    },
    "Quality": {
        actions: ["Enhance Quality", "Sharpen Image"],
        helperTexts: {},
        intensityAllowed: [],
        templates: {
            "Enhance Quality": {
                "English": "Upscale and enhance the overall image quality, reducing noise.",
                "Hindi": "Tasveer ki quality badhayein aur noise kam karein.",
                "Hinglish": "Quality enhance karein aur noise reduce karein."
            },
            "Sharpen Image": {
                "English": "Sharpen the fine details of the image to make it look crisp.",
                "Hindi": "Tasveer ki baarikiyon ko saaf aur teekha karein.",
                "Hinglish": "Image sharpen karein details ke liye."
            }
        }
    }
};
