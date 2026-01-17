// Video Simple Mode DOM Helper
export const DOM = {
    dropdownContainer: () => document.getElementById('simple-dropdown-container'),
    dynamicLevelsContainer: () => document.getElementById('simple-dynamic-levels'),
    mainCategorySelect: () => document.getElementById('simple-category-select'),
    addBtnContainer: () => document.getElementById('simple-add-btn-container'),
    addBtn: () => document.getElementById('simple-add-btn'),
    activeStack: () => document.getElementById('simple-active-stack'),

    // Helper to create elements
    create: (tag, className, text) => {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (text) el.textContent = text;
        return el;
    }
};
