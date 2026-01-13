export const Validators = {
    isValidNode(node) {
        return node && typeof node === 'object';
    },

    hasOptions(node) {
        return node && node.options && Object.keys(node.options).length > 0;
    },

    isGroup(node) {
        return node && node.type === 'group';
    },

    isLeaf(node) {
        // If it's not a group, or explicit static/option type
        if (!node) return false;
        return node.type !== 'group';
        // Note: Some nodes might be missing 'type'.
        // Logic in original code: if (currentData.type === 'group') ... else ...
    }
};
