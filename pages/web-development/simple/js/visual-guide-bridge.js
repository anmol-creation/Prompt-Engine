import { updateVisualGuide as updateController } from './visual-guide/index.js';
import { State } from './state.js';
import { Traversal } from './dropdown/traversal.js';
import { simpleBrainMap } from '../brain/index.js';
import { Validators } from './dropdown/validators.js';

export function updateVisualGuide() {
    const selectedCategory = State.selectedCategory;

    if (!selectedCategory) {
        const mainCategories = Object.keys(simpleBrainMap).map(key => ({ label: key, value: key }));
        updateController("Select Category", mainCategories, "navigation");
        return;
    }

    let currentNode = simpleBrainMap[selectedCategory];
    let currentTitle = selectedCategory;
    let level = 0;

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

    if (Validators.isGroup(currentNode)) {
        const options = Traversal.getOptionsForNextLevel(currentNode);
        updateController(currentTitle, options, "navigation");
    } else {
        updateController(currentTitle, [], "final");
    }
}
