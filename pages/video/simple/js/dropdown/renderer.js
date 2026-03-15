import { DOM } from '../dom.js';
import { initDropdown, setDropdownValue } from '../../../shared/dropdown.js';

export const Renderer = {
    /**
     * Initializes a dropdown element with options.
     * @param {number} level - The level of the dropdown (1-8).
     * @param {Array} options - Options to render.
     * @param {Object} config - Config for dropdown (search, etc).
     * @param {Function} onSelect - Callback when an option is selected.
     */
    renderDropdown(level, options, config, onSelect) {
        const dropdownEl = this.getDropdownElement(level);
        if (!dropdownEl) return;

        dropdownEl.classList.remove('hidden');

        initDropdown(dropdownEl, options, onSelect, "Select Option", config);
    },

    getDropdownElement(level) {
        if (level === 1) return DOM.subCategory1();
        if (level === 2) return DOM.subCategory2();
        if (level === 3) return DOM.subCategory3();
        if (level === 4) return DOM.subCategory4();
        if (level === 5) return DOM.subCategory5();
        if (level === 6) return DOM.subCategory6();
        if (level === 7) return DOM.subCategory7();
        if (level === 8) return DOM.subCategory8();
        return null;
    },

    clearSubDropdowns(fromLevel = 0) {
        const all = DOM.getAllSubDropdowns();
        all.forEach(el => {
            let level = -1;
            if (el.id === 'simple-sub-category') level = 1;
            else if (el.id.startsWith('simple-sub-category-')) {
                const parts = el.id.split('-');
                level = parseInt(parts[parts.length - 1]);
            }

            if (level >= fromLevel + 1) {
                el.classList.add('hidden');
                setDropdownValue(el, "");
            }
        });
    },

    initMain(categories, onSelect) {
        const mainDropdown = DOM.mainCategory();
        if (!mainDropdown) return;
        initDropdown(mainDropdown, categories, onSelect, "Select Category");
    },

    hideAddButton() {
        const addBtn = document.getElementById('simple-add-btn');
        if (addBtn) addBtn.classList.add('hidden');
    },

    showAddButton() {
        const addBtn = document.getElementById('simple-add-btn');
        if (addBtn) addBtn.classList.remove('hidden');
    },

    hidePlusButton() {
        const plusBtn = document.getElementById('simple-fix-plus-btn');
        if (plusBtn) plusBtn.classList.add('hidden');
    },

    resetPromptUI() {
        const finalPrompt = DOM.finalPrompt();
        if (finalPrompt) finalPrompt.textContent = "Your generated prompt will appear here...";

        const copyBtn = DOM.copyBtn();
        if (copyBtn) copyBtn.classList.add('hidden');
    }
};
