import { State } from './state.js';
import { coupleSpecialCategory } from '../brain/categories/couple-special.js';
import { Renderer } from './dropdown/renderer.js';
import { initDropdown, setDropdownValue } from '../../shared/dropdown.js';

export const CoupleManager = {
    isInitialized: false,

    init() {
        if (this.isInitialized) return;
        this.isInitialized = true;
    },

    _handleSelection(gender, value) {
        if (!value) return;

        State.setCoupleSelection(gender, value);

        // Construct pending item for the stack
        // value is already formatted as "Attribute: Option" by the dropdown value mapping

        // However, for display purposes in the pending item, we might want to be careful.
        // value from dropdown is e.g. "Face: Bearded".

        // Option string construction: "Face: Bearded (Male)"
        const optionString = `${value} (${gender === 'male' ? 'Male' : 'Female'})`;

        const pendingItem = {
            category: "Couple",
            option: optionString,
            leafNode: {
                type: 'static',
                prompt: `Couple: ${optionString}`
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

        const maleDropdown = document.getElementById('couple-male-select');
        const femaleDropdown = document.getElementById('couple-female-select');

        // Reset Selections in UI
        if (maleDropdown) setDropdownValue(maleDropdown, "");
        if (femaleDropdown) setDropdownValue(femaleDropdown, "");

        // Reset State for couple selection
        State.coupleSelection = { male: null, female: null };

        // Populate based on selected attribute
        const maleOptions = data.male ? data.male[attribute] : [];
        const femaleOptions = data.female ? data.female[attribute] : [];

        this.fillDropdown(maleDropdown, maleOptions, attribute, 'male');
        this.fillDropdown(femaleDropdown, femaleOptions, attribute, 'female');
    },

    fillDropdown(dropdownEl, optionsList, attributeName, gender) {
        if (!dropdownEl) return;

        const formattedOptions = [];

        if (Array.isArray(optionsList)) {
            optionsList.forEach(opt => {
                formattedOptions.push({
                    label: opt,
                    value: `${attributeName}: ${opt}`
                });
            });
        }

        initDropdown(
            dropdownEl,
            formattedOptions,
            (value) => this._handleSelection(gender, value),
            "Select details..."
        );
    }
};
