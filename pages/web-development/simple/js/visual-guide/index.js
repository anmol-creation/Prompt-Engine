import { initVisualGuide, renderCategoryGuide, renderDefaultGuide } from './renderer.js';
import { visualGuideData } from './data.js';

/**
 * Visual Guide Controller
 * Manages the state and updates the Visual Guide based on user interaction.
 */

// Initialize the guide
export { initVisualGuide };

/**
 * Updates the Visual Guide.
 *
 * @param {string} title - The title to display (e.g. "Select Category" or "Hair Styles").
 * @param {Array} options - The list of options available at this level.
 *                          Structure: [{ label, value, (optional) icon }]
 * @param {string} mode - "navigation" (intermediate steps) or "final" (leaf node).
 */
// Helper to provide better context for Pollinations AI
function getEnhancedPrompt(label) {
    const cleanLabel = label.replace(/[^a-zA-Z0-9 &]/g, '').trim();

    // Map ambiguous UI labels to highly specific AI prompts
    const promptMap = {
        "Male": "Portrait of a handsome adult man face",
        "Female": "Portrait of a beautiful adult woman face",
        "Couple Special": "A romantic couple, man and woman together holding hands",
        "Aspect Ratio": "Diagram showing different video frame crop sizes 16:9 4:3 1:1",
        "Remove Distractions": "A clean minimal studio photograph with a plain background",
        "Improve Quality": "Split screen showing blurry photo vs sharp 8k high resolution photo",
        "Fix Background": "A person standing in front of a beautiful scenic mountain background",
        "Fix Face": "Close up portrait of a perfectly symmetrical highly detailed human face",
        "Fix Lighting": "Cinematic studio lighting setup shining on a subject",
        "Customization": "A wardrobe rack full of different colorful clothes and accessories",
        "Add Object": "A table with various random objects like a coffee cup, phone, and keys",
        "Festival Special": "A colorful festive celebration with lights and fireworks",
        "Creative Image": "A highly creative abstract surrealist artistic masterpiece",
        "Fan Moment": "A crowd of cheering fans holding glow sticks at a concert",
        "Effects": "Cinematic lens flare and magical glowing sparkles effect",
        "Style & Vibe": "A stylish aesthetic moodboard with neon lighting",
        "Camera & Lighting": "A professional cinema camera on a tripod with studio lights",
        "Action & Motion": "A person running fast with motion blur effect"
    };

    return promptMap[label] || (cleanLabel ? `${cleanLabel} visual example photograph` : "Visual Image");
}

export function updateVisualGuide(title, options, mode = "navigation") {

    // 1. Prepare Data for Rendering
    let itemsToRender = [];

    if (mode === "final") {
        // --- FINAL MODE (Leaf Node) ---
        // Look up static visual data for this specific category (e.g., "Buzz Cut", "Pompadour")
        // The 'title' here is usually the category name like "Hair"

        // Try direct lookup
        let data = visualGuideData[title];

        // Fallback Logic (e.g. "Clothes" handling)
        if (!data && (title.includes("Clothes") || title.includes("Outfit"))) {
            data = visualGuideData["Clothes"];
        }

        if (data && data.length > 0) {
            itemsToRender = data;
        } else {
            // Fallback if no specific visuals exist for this final step -> Show Default
            renderDefaultGuide();
            return;
        }

    } else {
        // --- NAVIGATION MODE (Intermediate Steps) ---
        // We map the Dropdown Options to Visual Cards

        itemsToRender = options.map(opt => {
            // Check if we have a specific override image for this category option in our data map

            // Get a highly specific prompt mapped to this UI label
            let enhancedPrompt = getEnhancedPrompt(opt.label);

            // Use pollinations.ai for dynamic on-the-fly free image generation based on enhanced prompt
            let imgUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(enhancedPrompt)}?width=300&height=300&nologo=true`;

            // Check data.js for a thumbnail override
            // Example structure in data.js: "Romantic": { thumbnail: "url..." } OR "Romantic": [ ... ] (array doesn't help for thumbnail unless we pick first)
            // Let's support a "thumbnails" object in visualGuideData OR check if the key exists and has a 'thumbnail' prop.

            if (visualGuideData[opt.label]) {
                const entry = visualGuideData[opt.label];
                if (entry.thumbnail) {
                    imgUrl = entry.thumbnail;
                } else if (Array.isArray(entry) && entry.length > 0) {
                    // Optional: Use the first image of the result set as the card image?
                    // imgUrl = entry[0].img;
                    // Let's stick to explicit 'thumbnail' property to avoid confusion,
                    // or user can add a top-level key like "CategoryName_Thumb": "url" if needed.
                    // But simpler: If they defined the category array, we don't necessarily want to pick a random one.
                    // Let's look for a specialized "Thumbnails" section or just a property.
                }
            }

            // SIMPLER APPROACH FOR USER:
            // Check if there is a key called "CategoryThumbnails" or similar?
            // No, user wants to just add data.
            // Let's try: Check if visualGuideData[opt.label] is a string (URL) or object with thumbnail.

            // Better yet, let's look for a global "Thumbnails" object in data.js if it exists,
            // OR check if visualGuideData[opt.label] has a property `.thumbnail`.

            // Since visualGuideData structure is usually Arrays for leaf nodes, we can't easily add a property to an Array.
            // So we will look for a separate key: `visualGuideData["THUMB_" + opt.label]` ? No that's ugly.

            // Let's stick to: If visualGuideData[opt.label] is an Array (leaf), use the first item's image?
            // This is actually a very smart default. If you have "Romantic" images, show the first one on the "Romantic" card.
            if (Array.isArray(visualGuideData[opt.label]) && visualGuideData[opt.label].length > 0) {
                imgUrl = visualGuideData[opt.label][0].img;
            }

            // Also allow explicit override if they add a key like "Romantic_Thumb"
            if (visualGuideData[opt.label + "_Thumb"]) {
                 imgUrl = visualGuideData[opt.label + "_Thumb"];
            }

            return {
                name: opt.label,
                img: imgUrl
            };
        });
    }

    // 2. Render
    if (itemsToRender.length > 0) {
        renderCategoryGuide(title, itemsToRender);
    } else {
        renderDefaultGuide();
    }
}
