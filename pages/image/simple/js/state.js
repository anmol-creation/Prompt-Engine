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
        // Uniqueness check: Same category AND same option?
        // Requirements say "Each fix can be added only once".
        // If "Fix Face" -> "Fix Clarity" is added, can I add "Fix Face" -> "Fix Skin Tone"?
        // Yes, likely. But can I add "Fix Face" -> "Fix Clarity" again? No.
        // So we should check for exact match of category AND option to prevent duplicates,
        // OR update if it exists.

        const index = this.fixImageStack.findIndex(f => f.category === fixObj.category && f.option === fixObj.option);
        if (index >= 0) {
            // Update existing (e.g. input value changed)
            this.fixImageStack[index] = fixObj;
        } else {
            // Add new
            this.fixImageStack.push(fixObj);
        }
    },

    removeFixFromStack(category, option) {
        this.fixImageStack = this.fixImageStack.filter(f => !(f.category === category && f.option === option));
    },

    getFixStack() {
        return this.fixImageStack;
    }
};
