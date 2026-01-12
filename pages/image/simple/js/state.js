// State Management
export const State = {
    selectedCategory: null,
    selectedLanguage: "English",
    selections: {}, // { 0: cat, 1: sub1, 2: sub2 ... }
    actionStack: [], // Array of objects: { category: "Fix Background", option: "Add Blur", leafNode: ..., inputValue: ... }

    reset() {
        this.selectedCategory = null;
        this.selections = {};
        this.actionStack = [];
    },

    setCategory(cat) {
        this.selectedCategory = cat;
        this.selections = {};
        // Do NOT clear actionStack here to allow category switching
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

    getLastSelection() {
        const keys = Object.keys(this.selections).sort((a, b) => parseInt(a) - parseInt(b));
        if (keys.length === 0) return null;
        return this.selections[keys[keys.length - 1]];
    },

    // Stack Methods
    addToStack(itemObj) {
        // Uniqueness check: Same category AND same option?
        // We check for exact match of category AND option to prevent duplicates.
        // For Customization, "category" might be "Male" and option "Eyes".

        const index = this.actionStack.findIndex(f => f.category === itemObj.category && f.option === itemObj.option);
        if (index >= 0) {
            // Update existing (e.g. input value changed)
            this.actionStack[index] = itemObj;
        } else {
            // Add new
            this.actionStack.push(itemObj);
        }
    },

    // New method to update a specific property of an item in the stack, found by category
    updateStackItem(category, data) {
        // Find the item by Category (e.g., "Replace Background")
        const index = this.actionStack.findIndex(f => f.category === category);
        if (index >= 0) {
            this.actionStack[index] = { ...this.actionStack[index], ...data };
        }
    },

    removeFromStack(category, option) {
        this.actionStack = this.actionStack.filter(f => !(f.category === category && f.option === option));
    },

    getStack() {
        return this.actionStack;
    }
};
