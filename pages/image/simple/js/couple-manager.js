import { State } from './state.js';
import { coupleSpecialCategory } from '../brain/categories/couple-special.js';
import { Renderer } from './dropdown/renderer.js';

export const CoupleManager = {
    isInitialized: false,

    init() {
        if (this.isInitialized) return;

        const maleSelect = document.getElementById('couple-male-select');
        const femaleSelect = document.getElementById('couple-female-select');

        if (maleSelect) {
            maleSelect.addEventListener('change', (e) => {
                this._handleSelection('male', e.target.value);
            });
        }

        if (femaleSelect) {
            femaleSelect.addEventListener('change', (e) => {
                this._handleSelection('female', e.target.value);
            });
        }

        this.isInitialized = true;
    },

    _handleSelection(gender, value) {
        if (!value) return;

        State.setCoupleSelection(gender, value);

        // Construct pending item for the stack
        // value format is "Attribute: Option" (e.g., "Face: Bearded")
        const pendingItem = {
            category: "Couple",
            option: `${value} (${gender === 'male' ? 'Male' : 'Female'})`,
            leafNode: {
                type: 'static',
                prompt: `Couple: ${value} (${gender === 'male' ? 'Male' : 'Female'})`
            },
            inputValue: null
        };

        State.setPendingChange(pendingItem);
        Renderer.showAddButton();
        Renderer.hidePlusButton();
    },

    getAttributes() {
        if (!coupleSpecialCategory || !coupleSpecialCategory.male) return [];
        // Return array of option objects for the renderer
        return Object.keys(coupleSpecialCategory.male).map(key => ({
            label: key,
            value: key
        }));
    },

    show(attribute) {
        // Ensure the Couple Container is visible
        const container = document.getElementById('couple-ui-container');
        if (container) container.classList.remove('hidden');

        // Hide standard final value dropdown (Level 3) if it exists, as we replace it
        const level3 = document.getElementById('simple-sub-category-3');
        if (level3) level3.classList.add('hidden');

        // Also hide Level 4+ just in case
        for(let i=4; i<=8; i++) {
             const el = document.getElementById(`simple-sub-category-${i}`);
             if(el) el.classList.add('hidden');
        }

        this.populateOptions(attribute);
    },

    hide() {
        const container = document.getElementById('couple-ui-container');
        if (container) container.classList.add('hidden');
    },

    populateOptions(attribute) {
        // Use imported data directly
        const data = coupleSpecialCategory;
        if (!data || data.type !== 'split-couple' || !attribute) {
            console.warn("Couple data not found, incorrect type, or missing attribute");
            return;
        }

        const maleSelect = document.getElementById('couple-male-select');
        const femaleSelect = document.getElementById('couple-female-select');

        // Reset Selections in UI
        if (maleSelect) maleSelect.value = "";
        if (femaleSelect) femaleSelect.value = "";

        // Reset State for couple selection
        State.coupleSelection = { male: null, female: null };

        // Populate based on selected attribute
        const maleOptions = data.male ? data.male[attribute] : [];
        const femaleOptions = data.female ? data.female[attribute] : [];

        this.fillSelect(maleSelect, maleOptions, attribute);
        this.fillSelect(femaleSelect, femaleOptions, attribute);
    },

    fillSelect(selectEl, optionsList, attributeName) {
        if (!selectEl) return;

        // Clear existing options (keep the first one - placeholder)
        while (selectEl.options.length > 1) {
            selectEl.remove(1);
        }

        if (Array.isArray(optionsList)) {
            optionsList.forEach(opt => {
                const optionEl = document.createElement('option');
                // Value format: "Face: Bearded"
                optionEl.value = `${attributeName}: ${opt}`;
                optionEl.textContent = opt;
                selectEl.appendChild(optionEl);
            });
        }
    }
};
