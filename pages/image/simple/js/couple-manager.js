import { State } from './state.js';
import { simpleBrainMap } from '../brain/index.js';

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

    show() {
        // Hide standard sub-dropdowns
        // We use the helper class or IDs. The DOM structure uses .custom-dropdown for them.
        const subDropdowns = document.querySelectorAll('.custom-dropdown');
        subDropdowns.forEach(el => {
            if (el.id !== 'simple-main-category') {
                el.classList.add('hidden');
            }
        });

        // Hide dynamic inputs just in case
        const dynInputs = document.getElementById('simple-dynamic-inputs');
        if (dynInputs) dynInputs.classList.add('hidden');

        // Hide Add Button
        const addBtn = document.getElementById('simple-add-btn');
        if (addBtn) addBtn.classList.add('hidden');

        // Show Couple Container
        const container = document.getElementById('couple-ui-container');
        if (container) container.classList.remove('hidden');

        // Populate Options
        this.populateOptions();
    },

    hide() {
        const container = document.getElementById('couple-ui-container');
        if (container) container.classList.add('hidden');
    },

    populateOptions() {
        const data = simpleBrainMap["Couple special"];
        if (!data || data.type !== 'split-couple') {
            console.warn("Couple data not found or incorrect type");
            return;
        }

        const maleSelect = document.getElementById('couple-male-select');
        const femaleSelect = document.getElementById('couple-female-select');

        // Reset Selections in UI
        if (maleSelect) maleSelect.value = "";
        if (femaleSelect) femaleSelect.value = "";

        // Reset State
        State.coupleSelection = { male: null, female: null };

        this.fillSelect(maleSelect, data.male);
        this.fillSelect(femaleSelect, data.female);
    },

    fillSelect(selectEl, dataObj) {
        if (!selectEl || !dataObj) return;

        // Clear existing options (keep the first one - placeholder)
        while (selectEl.options.length > 1) {
            selectEl.remove(1);
        }

        Object.keys(dataObj).forEach(groupName => {
            const optGroup = document.createElement('optgroup');
            optGroup.label = groupName;

            const options = dataObj[groupName];
            if (Array.isArray(options)) {
                options.forEach(opt => {
                    const optionEl = document.createElement('option');
                    // Value format: "Face: Bearded"
                    optionEl.value = `${groupName}: ${opt}`;
                    optionEl.textContent = opt;
                    optGroup.appendChild(optionEl);
                });
            }
            selectEl.appendChild(optGroup);
        });
    }
};
