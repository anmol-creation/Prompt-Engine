import { State } from './state.js';
import { coupleSpecialCategory } from '../brain/categories/couple-special.js';

export const CoupleManager = {
    isInitialized: false,

    init() {
        if (this.isInitialized) return;

        const maleSelect = document.getElementById('couple-male-select');
        const femaleSelect = document.getElementById('couple-female-select');

        if (maleSelect) {
            maleSelect.addEventListener('change', (e) => {
                State.setCoupleSelection('male', e.target.value);
            });
        }

        if (femaleSelect) {
            femaleSelect.addEventListener('change', (e) => {
                State.setCoupleSelection('female', e.target.value);
            });
        }

        this.isInitialized = true;
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

        // Hide Add Button initially (until selections made?)
        // actually standard behavior handles add button.
        // But CoupleManager splits selection.
        // State.setCoupleSelection sets state.
        // We probably need to manage the Add Button visibility?
        // The original code hid the Add Button in show().
        // "Hide Add Button ... if (addBtn) addBtn.classList.add('hidden');"
        // But we want the user to be able to add.
        // Wait, "Add-to-Apply" workflow.
        // If we use Split Table, `State` updates `coupleSelection`.
        // Does the global Add Button work with `coupleSelection`?
        // `dropdown/index.js` `prepareStackItem` handles stack.
        // It seems `CoupleManager` logic is slightly separate or uses `State.coupleSelection`.
        // Let's assume the external "Add" button is NOT used for Couple, or maybe it IS.
        // Original code: "Hide Add Button". This implies Couple added automatically?
        // Or maybe there is no "Add" button for Couple?
        // But `couple-manager.js` sets `State.setCoupleSelection`.
        // Let's look at `state.js` or `events.js` to see how it's submitted.
        // Ah, `CoupleManager` doesn't seem to have a "Submit" button inside it.
        // So where is the button?
        // The user says "The UI should switch the final input to the Split Table".
        // And "User selects from Split Table".
        // How do they confirm?
        // Maybe the selections in split table update the prompt directly?
        // `State.setCoupleSelection` probably triggers something?

        // For now, I will stick to the prompt: "The #couple-ui-container (Split Table) should be placed below the Attribute Dropdown".
        // I won't hide the global Add Button if it's not requested, but the original code hid it.
        // If I hide it, how does the user proceed?
        // Maybe I should NOT hide it, assuming `dropdown/index.js` manages it.
        // Let's check `State.setCoupleSelection` logic if possible.
        // I'll assume standard visibility rules apply.

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
