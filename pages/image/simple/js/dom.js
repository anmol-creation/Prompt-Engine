// DOM Selectors
export const DOM = {
    // Mode Container
    container: () => document.getElementById('simple-builder-container'),

    // Dropdowns
    mainCategory: () => document.getElementById('simple-main-category'),
    subCategoryContainer: () => document.querySelector('.simple-builder-row'),

    // Hardcoded dropdowns (legacy support)
    subCategory1: () => document.getElementById('simple-sub-category'),
    subCategory2: () => document.getElementById('simple-sub-category-2'),
    subCategory3: () => document.getElementById('simple-sub-category-3'),
    subCategory4: () => document.getElementById('simple-sub-category-4'),
    subCategory5: () => document.getElementById('simple-sub-category-5'),
    subCategory6: () => document.getElementById('simple-sub-category-6'),
    subCategory7: () => document.getElementById('simple-sub-category-7'),
    subCategory8: () => document.getElementById('simple-sub-category-8'),

    languageSelect: () => document.getElementById('simple-language-select'),

    // Dynamic Inputs
    dynamicInputsContainer: () => document.getElementById('simple-dynamic-inputs'),
    textInput: () => document.getElementById('simple-text-input'),
    // File inputs removed

    // Optional Vehicle Options
    vehicleOptionsContainer: () => document.getElementById('simple-vehicle-options'),
    optVehicleCat: () => document.getElementById('opt-vehicle-cat'),
    optVehicleTypeWrapper: () => document.getElementById('opt-vehicle-type-wrapper'),
    optVehicleType: () => document.getElementById('opt-vehicle-type'),
    optVehicleColorWrapper: () => document.getElementById('opt-vehicle-color-wrapper'),
    optVehicleColor: () => document.getElementById('opt-vehicle-color'),

    // Optional Beard Options
    beardOptionsContainer: () => document.getElementById('simple-beard-options'),
    optBeardColor: () => document.getElementById('opt-beard-color'),

    // Optional Fan Moment
    fanOptionsContainer: () => document.getElementById('simple-fan-moment-options'),
    optPlace: () => document.getElementById('opt-place'),
    optOutfit: () => document.getElementById('opt-outfit'),
    optMood: () => document.getElementById('opt-mood'),
    optFraming: () => document.getElementById('opt-framing'),

    // Optional Hair Options
    hairOptionsContainer: () => document.getElementById('simple-hair-options'),
    optHairLength: () => document.getElementById('opt-hair-length'),
    optHairType: () => document.getElementById('opt-hair-type'),
    optHairColor: () => document.getElementById('opt-hair-color'),

    // Optional Mustache Options
    mustacheOptionsContainer: () => document.getElementById('simple-mustache-options'),
    optMustacheColor: () => document.getElementById('opt-mustache-color'),

    // Output
    outputContainer: () => document.getElementById('simple-output-container'),
    finalPrompt: () => document.getElementById('simple-final-prompt'),
    copyBtn: () => document.getElementById('simple-copy-btn'),
    createBtn: () => document.getElementById('simple-create-btn'),
    visualGuideContainer: () => document.getElementById('simple-visual-guide-container'),

    // Helper to find all current sub-category dropdowns
    getAllSubDropdowns: () => {
        return Array.from(document.querySelectorAll('.custom-dropdown')).filter(el =>
            el.id !== 'simple-main-category' &&
            el.id.startsWith('simple-sub-category')
        );
    }
};
