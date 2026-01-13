import { simpleBrainMap } from '../../brain/index.js';
import { Validators } from './validators.js';

export const Traversal = {
    /**
     * Traverses the brain map based on current selections up to a specific level.
     * @param {string} rootCategory - The main category selected (Level 0).
     * @param {Object} state - The State object or interface to get selections.
     * @param {number} targetLevel - The level we want to resolve the node for.
     * @returns {Object|null} - The data node at the target level.
     */
    resolveNode(rootCategory, state, targetLevel) {
        if (!rootCategory || !simpleBrainMap[rootCategory]) return null;

        let currentNode = simpleBrainMap[rootCategory];

        // Level 0 is the root category itself.
        // If targetLevel is 0, we return the root node.
        // Wait, handleLevelSelection(0) in original code means "We just selected Level 0, prepare Level 1".
        // The loop in original code:
        // for (let i = 1; i <= level; i++) { ... }
        // If level=0, loop doesn't run. currentNode is simpleBrainMap[Category].

        for (let i = 1; i <= targetLevel; i++) {
            const selection = state.getSelection(i);
            if (Validators.isValidNode(currentNode) && currentNode.options && currentNode.options[selection]) {
                currentNode = currentNode.options[selection];
            } else {
                return null; // Broken path
            }
        }

        return currentNode;
    },

    /**
     * Prepares options for the dropdown.
     * @param {Object} node - The current data node (must be a group).
     * @returns {Array} - Array of option objects {label, value, icon}.
     */
    getOptionsForNextLevel(node) {
        if (!Validators.hasOptions(node)) return [];

        const keys = Object.keys(node.options);
        return keys.map(key => {
            const optData = node.options[key];
            const item = { label: key, value: key };
            if (optData && optData.icon) {
                item.icon = optData.icon;
            }
            return item;
        });
    }
};
