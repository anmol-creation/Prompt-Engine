import { State } from '../state.js';
import { Traversal } from './traversal.js';

export function ensurePendingItem(targetCategory) {
    let pending = State.getPendingChange();

    // If pending exists and matches, return it
    if (pending && pending.category === targetCategory) {
        return pending;
    }

    // Attempt to reconstruct from current selections
    const selections = State.getAllSelections();

    // Find where the targetCategory is in the selection chain.
    // e.g. ["Fix Image", "Fix Background", "Replace Background", "Nature"]
    // targetCategory = "Replace Background". Index = 2.
    // option = "Nature" (Index 3).

    // Note: State.getAllSelections() returns values.
    // But sometimes category names are keys?
    // In Simple Mode, usually values match structure.

    // We need to be careful. The "category" stored in stack item is usually the parent of the leaf.
    // e.g. "Replace Background".
    // And "option" is the leaf value.

    const catIndex = selections.indexOf(targetCategory);

    if (catIndex === -1 || catIndex >= selections.length - 1) {
        // Not found, or it is the leaf itself (unlikely for "Replace Background" which is a group)
        return null;
    }

    const option = selections[catIndex + 1];
    const level = catIndex + 1; // The level index of the option
    const rootCategory = selections[0];

    const leafNode = Traversal.resolveNode(rootCategory, State, level);

    if (!leafNode) return null;

    const newItem = {
        category: targetCategory,
        option: option,
        leafNode: leafNode,
        inputValue: null
    };

    State.setPendingChange(newItem);

    // Force Add Button Visibility
    const addBtn = document.getElementById('simple-add-btn');
    if (addBtn) addBtn.classList.remove('hidden');

    const plusBtn = document.getElementById('simple-fix-plus-btn');
    if (plusBtn) plusBtn.classList.add('hidden');

    return newItem;
}
