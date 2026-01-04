// Simple Mode Visual Guide Adapter
import { simpleBrainMap } from './simple.brain.map.js';

export function getSimpleVisualGuideData(category, subAction) {
    // Categories List
    const categories = Object.keys(simpleBrainMap).map(key => ({ name: key }));

    // Actions List (Sub-categories of the selected category)
    let actions = [];
    if (category && simpleBrainMap[category]) {
        actions = Object.keys(simpleBrainMap[category]);
    } else if (subAction) {
        actions = [subAction];
    }

    // Settings (None for Simple Mode)
    // "Same syncing behavior: Category → Action → Settings"
    // Since Simple Mode has no user-facing settings, we pass an empty array.
    // However, if we want to show that "Settings are auto-configured", we could pass a dummy.
    // The prompt says "No simplified / fake guide", but also "Simple Mode... no sliders".
    // So "Settings" column should ideally be empty or show "Auto".
    // Visual Guide renderer handles empty settings gracefully? We'll see.
    const settings = [];

    return {
        categories,
        actions,
        settings,
        selectedCategory: category,
        selectedAction: subAction
    };
}
