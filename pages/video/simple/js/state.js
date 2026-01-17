// Video Simple Mode State
export const State = {
    selectedCategory: null,
    aspectRatio: "9:16 (Reels / Shorts)", // Default
    selections: {}, // level -> value
    pendingChange: null,
    stack: [],

    setAspectRatio(val) {
        this.aspectRatio = val;
    },

    getAspectRatio() {
        return this.aspectRatio;
    },

    setCategory(cat) {
        this.selectedCategory = cat;
        this.selections = {};
        this.pendingChange = null;
    },

    setSelection(level, value) {
        this.selections[level] = value;
        // Clear deeper levels
        Object.keys(this.selections).forEach(k => {
            if (parseInt(k) > level) delete this.selections[k];
        });
    },

    getAllSelections() {
        return this.selections;
    },

    setPendingChange(change) {
        this.pendingChange = change;
    },

    getPendingChange() {
        return this.pendingChange;
    },

    addToStack(item) {
        this.stack.push(item);
        // Dispatch event
        document.dispatchEvent(new CustomEvent('stack-updated', { detail: this.stack }));
    },

    removeFromStack(index) {
        this.stack.splice(index, 1);
        document.dispatchEvent(new CustomEvent('stack-updated', { detail: this.stack }));
    },

    getStack() {
        return this.stack;
    }
};
