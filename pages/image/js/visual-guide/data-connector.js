// Visual Guide Data Connector
// Bridges the gap between raw data and the renderer
import { categoriesData } from '../data/categories.js';
import * as uiMeta from '../data/uiMeta.js';
import { currentMode } from '../ui/mode.js';

export function getVisualGuideData(category, action, rowElement) {
    const categories = Object.keys(categoriesData).map(key => ({ name: key }));
    let actions = [];
    let settings = [];

    // Fetch Actions
    if (category && categoriesData[category]) {
        actions = categoriesData[category].actions;
    } else if (!category && action) {
        // Fallback or specific case if needed, but usually category is required for action list
        // If we want to show just the selected action if no category (unlikely in this UI flow)
        actions = [action];
    }

    // Fetch Settings
    if (currentMode === 'default' && category && action) {
        // Construct the expected settings constant name, e.g., 'BLUR_DEFAULT_SETTINGS'
        // Convention: ACTION_NAME_DEFAULT_SETTINGS (spaces replaced by underscores, uppercase)
        // Adjust for specific naming conventions in uiMeta.js

        let settingsKey = "";

        // Special case handling or naming convention matching
        if (category === 'Background') {
             // Example: "Shadow Adjust" -> "SHADOW_ADJUST"
             const formattedAction = action.toUpperCase().replace(/ /g, '_');
             settingsKey = `${formattedAction}_DEFAULT_SETTINGS`;
        }

        if (settingsKey && uiMeta[settingsKey]) {
            const metaSettings = uiMeta[settingsKey];
            settings = metaSettings.map(setting => {
                let currentVal = setting.val;
                if (rowElement) {
                    const input = rowElement.querySelector(`.${setting.class}`);
                    if (input) {
                        currentVal = input.value;
                    }
                }

                // Normalizing types
                if (setting.type === 'slider') currentVal = parseInt(currentVal);

                return {
                    ...setting,
                    value: currentVal
                };
            });
        }
    }

    return {
        categories,
        actions,
        settings,
        selectedCategory: category,
        selectedAction: action
    };
}
