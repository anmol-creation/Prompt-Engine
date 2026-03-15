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

        for (let i = 1; i <= targetLevel; i++) {
            const selection = state.getSelection(i);

            // For new structure using 'children' instead of 'options'
            if (currentNode.children && currentNode.children[selection]) {
                currentNode = currentNode.children[selection];
            }
            // Fallback for flat generators array check (if needed in traversal)
            else if (currentNode.generator) {
                // Leaf node reached
                break;
            }
            else {
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
        // If it's a group with children
        if (node.type === 'group' && node.children) {
            return Object.values(node.children).map(child => ({
                label: child.title,
                value: child.id
            }));
        }

        // If it's a category with a generator
        if (node.type === 'category' && node.generator) {
            const optionsArray = getGenerator(node.generator);
            if (Array.isArray(optionsArray)) {
                return optionsArray.map(opt => ({
                    label: opt.label,
                    value: opt.id,
                    icon: opt.icon,
                    hex: opt.hex
                }));
            }
        }

        return [];
    }
};
