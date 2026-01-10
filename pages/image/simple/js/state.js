// State Management
export const State = {
    selectedCategory: null,
    selectedLanguage: "English",
    selections: {}, // { 0: cat, 1: sub1, 2: sub2 ... }
    fixImageStack: [], // Array of objects. Renamed to generic stack concept in usage, but variable kept for compat or we can rename.

    reset() {
        this.selectedCategory = null;
        this.selections = {};
        this.fixImageStack = [];
    },

    setCategory(cat) {
        this.selectedCategory = cat;
        this.selections = {};
        this.fixImageStack = [];
    },

    setSelection(level, value) {
        this.selections[level] = value;
        // Clear deeper levels
        Object.keys(this.selections).forEach(key => {
            if (parseInt(key) > level) delete this.selections[key];
        });
    },

    getSelection(level) {
        return this.selections[level];
    },

    getAllSelections() {
        return Object.keys(this.selections).sort((a, b) => parseInt(a) - parseInt(b)).map(k => this.selections[k]);
    },

    getLastSelection() {
        const keys = Object.keys(this.selections).sort((a, b) => parseInt(a) - parseInt(b));
        if (keys.length === 0) return null;
        return this.selections[keys[keys.length - 1]];
    },

    // Stack Methods (Unified)
    // We treat fixImageStack as the main stack.

    addToStack(item) {
        // Validation: Unique check.
        // For Fix Image: Category + Option must be unique.
        // For Customization: Category (Part) + Option (Attribute) unique?

        // Let's use a simple deep comparison or key comparison.
        // If item has 'category' and 'option' (mapped in events.js), we use that.

        let exists = false;

        if (item.category && item.option) {
             const index = this.fixImageStack.findIndex(f => f.category === item.category && f.option === item.option);
             if (index >= 0) {
                 this.fixImageStack[index] = item; // Update (e.g. input value)
                 exists = true;
             }
        }

        if (!exists) {
            this.fixImageStack.push(item);
        }
    },

    removeFromStackByIndex(index) {
        if (index >= 0 && index < this.fixImageStack.length) {
            this.fixImageStack.splice(index, 1);
        }
    },

    removeFixFromStack(category, option) {
        this.fixImageStack = this.fixImageStack.filter(f => !(f.category === category && f.option === option));
    },

    getFixStack() {
        return this.fixImageStack;
    }
};
