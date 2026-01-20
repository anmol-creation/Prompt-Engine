// Visual Guide Bridge
// Connects the Dropdown/State system to the new Visual Guide Controller

import { updateVisualGuide as updateController } from './visual-guide/index.js';
import { State } from './state.js';

/**
 * Updates the Visual Guide based on the current state.
 * Uses the last selected item in the traversal chain as the key.
 */
export function updateVisualGuide() {
    // Get all selections (level 0 to N)
    const selections = State.getAllSelections();

    // Find the most relevant category key
    // Usually the last selected item that is NOT null
    // But we might want the parent category if we are selecting a leaf

    // Strategy: Look at the last non-null selection.
    // Level 0: Main Category (e.g. "Customization") - unlikely to have guide
    // Level 1: Sub Category (e.g. "Male")
    // Level 2: Feature (e.g. "Hair") -> This is what we want!

    let key = "Default";

    // Iterate backwards to find a meaningful key
    // We skip the last one if it's a specific option (Leaf) and look for its parent Group?
    // Actually, our data maps keys like "Hair", "Beard".
    // In "Customization > Male > Hair > [Option]", "Hair" is at Level 2.

    // Let's just try the last 2 selections and see which one hits.
    const validSelections = Object.values(selections).filter(v => v);

    if (validSelections.length > 0) {
        // Try the last selection
        key = validSelections[validSelections.length - 1];
    }

    updateController(key);
}
