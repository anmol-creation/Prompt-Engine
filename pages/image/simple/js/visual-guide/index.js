import { initVisualGuide, renderCategoryGuide, renderDefaultGuide } from './renderer.js';
import { visualGuideData } from './data.js';

/**
 * Visual Guide Controller
 * Manages the state and updates the Visual Guide based on user interaction.
 */

// Initialize the guide
export { initVisualGuide };

/**
 * Updates the Visual Guide based on the selected category.
 * Called by the Dropdown System.
 *
 * @param {string} categoryKey - The key of the category (e.g., "Hair", "Beard")
 */
export function updateVisualGuide(categoryKey) {
    // 1. Normalize Key (Handle potential case differences or sub-group logic)
    // Check if we have exact match in data
    let data = visualGuideData[categoryKey];

    // 2. Special Logic: "Clothes" often has sub-groups like "Top Color", "Bottom Color"
    // If the key is specific but we want to show general clothes guide
    if (!data && (categoryKey.includes("Clothes") || categoryKey.includes("Outfit"))) {
        data = visualGuideData["Clothes"];
    }

    // 3. Render appropriate view
    if (data && data.length > 0) {
        // We have dynamic data -> Render Grid
        renderCategoryGuide(categoryKey, data);
    } else {
        // No data -> Revert to Default Reference/Result view
        renderDefaultGuide();
    }
}
