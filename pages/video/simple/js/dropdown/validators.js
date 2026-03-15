export const Validators = {
    isValidNode(node) {
        return node !== null && typeof node === 'object';
    },

    isGroup(node) {
        return this.isValidNode(node) && node.type === 'group';
    },

    isLeaf(node) {
        return this.isValidNode(node) && (node.type === 'category');
    },

    hasOptions(node) {
        return this.isValidNode(node) && ((node.type === 'group' && node.children) || (node.type === 'category' && node.generator));
    }
};
