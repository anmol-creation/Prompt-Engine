// Visual Guide Bridge
// Connects the Dropdown/State system to the new Visual Guide Controller

import { updateVisualGuide as updateController } from './visual-guide/index.js';
import { State } from './state.js';
import { Traversal } from './dropdown/traversal.js';
import { simpleBrainMap } from '../brain/index.js';
import { Validators } from './dropdown/validators.js';

/**
 * Updates the Visual Guide based on the current state and available options.
 * It determines if we are in "Navigation Mode" (showing next steps) or "Final Mode" (showing results).
 */
export function updateVisualGuide() {
    // 1. Get Current State
    const selectedCategory = State.selectedCategory;

    // If no category selected yet, show Level 0 (Main Categories)
    if (!selectedCategory) {
        // We need to manually construct Level 0 options because they aren't in a "node"
        const mainCategories = Object.keys(simpleBrainMap).map(key => ({ label: key, value: key }));
        updateController("Select Category", mainCategories, "navigation");
        return;
    }

    // 2. Find the Deepest Selected Node
    // We iterate to find the last valid selection made by the user
    let currentNode = simpleBrainMap[selectedCategory];
    let currentTitle = selectedCategory;
    let level = 0;

    // Check deep selections
    while (true) {
        const nextLevel = level + 1;
        const selection = State.getSelection(nextLevel);

        if (selection && currentNode.options && currentNode.options[selection]) {
            currentNode = currentNode.options[selection];
            currentTitle = selection;
            level = nextLevel;
        } else {
            break;
        }
    }

    // 3. Determine Mode & Content
    if (Validators.isGroup(currentNode)) {
        // --- NAVIGATION MODE ---
        // We are at a group (e.g. "Male"), show its children (e.g. "Face", "Clothes")
        const options = Traversal.getOptionsForNextLevel(currentNode);
        updateController(currentTitle, options, "navigation");
    } else {
        // --- FINAL MODE ---
        // We are at a leaf (e.g. "Hair"), show the visual examples for this feature
        // The controller will look up data.js for 'currentTitle' (e.g. "Hair")
        updateController(currentTitle, [], "final");
    }
}
