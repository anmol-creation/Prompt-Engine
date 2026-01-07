// State Management
export const State = {
    selectedCategory: null,
    selectedLanguage: "English",
    selections: {}, // { 0: cat, 1: sub1, 2: sub2 ... }

    reset() {
        this.selectedCategory = null;
        this.selections = {};
    },

    setCategory(cat) {
        this.selectedCategory = cat;
        this.selections = {};
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
        const keys = Object.keys(this.selections).sort();
        if (keys.length === 0) return null;
        return this.selections[keys[keys.length - 1]];
    }
};
