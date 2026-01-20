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
            // e.g. "Customization" -> look for visualGuideData["Customization"] (which might be a single image or object)
            // But here we want the image FOR "Customization".

            // Let's assume visualGuideData can also hold "thumbnails" for categories.
            // visualGuideData["Categories"] = { "Customization": "url", "Fix Image": "url" }

            // For now, use placeholder generator with the Label
            const imgUrl = `https://placehold.co/300x300/333/fff?text=${encodeURIComponent(opt.label)}`;

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
