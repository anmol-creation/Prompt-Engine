// Video Simple Mode DOM Helper
export const DOM = {
    dropdownContainer: () => document.getElementById('simple-dropdown-container'),
    dynamicLevelsContainer: () => document.getElementById('simple-dynamic-levels'),
    mainCategorySelect: () => document.getElementById('simple-category-select'),
    addBtnContainer: () => document.getElementById('simple-add-btn-container'),
    addBtn: () => document.getElementById('simple-add-btn'),
    activeStack: () => document.getElementById('simple-active-stack'),

    // Dynamic Input Helper
    createInputContainer: () => {
        const div = document.createElement('div');
        div.className = 'input-container hidden';
        div.id = 'simple-dynamic-input-container';
        div.style.marginTop = '1rem';

        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'custom-input';
        input.id = 'simple-dynamic-input';
        input.placeholder = 'Type here...';

        div.appendChild(input);
        return { container: div, input: input };
    },

    dynamicInput: () => document.getElementById('simple-dynamic-input'),
    dynamicInputContainer: () => document.getElementById('simple-dynamic-input-container'),

    // Helper to create elements
    create: (tag, className, text) => {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (text) el.textContent = text;
        return el;
    }
};
