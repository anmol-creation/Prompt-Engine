// State Management
export const State = {
    selectedCategory: null,
    selectedLanguage: "English",
    selections: {}, // { 0: cat, 1: sub1, 2: sub2 ... }
    fixImageStack: [], // Array of objects: { category: "Fix Background", option: "Add Blur", leafNode: ..., inputValue: ... }

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
        Object.keys(this.selections).forEach(key => {
            if (parseInt(key) > level) delete this.selections[key];
        });
    },

    getSelection(level) {
        return this.selections[level];
    },

    getAllSelections() {
        return Object.keys(this.selections).sort().map(k => this.selections[k]);
    },

    // Fix Image Stack Methods
    updateFixStack(fixObj) {
        const index = this.fixImageStack.findIndex(f => f.category === fixObj.category);
        if (index >= 0) {
            // Update existing
            this.fixImageStack[index] = fixObj;
        } else {
            // Add new
            this.fixImageStack.push(fixObj);
        }
    },

    getFixStack() {
        return this.fixImageStack;
    }
};
