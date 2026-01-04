// Row management: Add row / clone row, Max 6 rows, AND label logic, Disable duplicate categories, Attach change listeners

import { categoriesData } from '../data/categories.js';
import { createVisualGuide, updateVisualGuide } from '../visual-guide/index.js';
import { currentMode } from './mode.js';
import { initDropdown, updateDropdownOptions, getDropdownValue, setDropdownValue, resetDropdown, disableDropdown } from '../../../shared/dropdown.js';
import { BLUR_DEFAULT_SETTINGS, REMOVE_DEFAULT_SETTINGS, REPLACE_DEFAULT_SETTINGS, GRADIENT_DEFAULT_SETTINGS, EXTEND_DEFAULT_SETTINGS, OUTDOOR_DEFAULT_SETTINGS, SHADOW_ADJUST_DEFAULT_SETTINGS, LIGHT_MATCH_DEFAULT_SETTINGS, TRANSPARENT_DEFAULT_SETTINGS, STUDIO_DEFAULT_SETTINGS, FACE_SKIN_SMOOTH_DEFAULT_SETTINGS, BLEMISH_REMOVE_DEFAULT_SETTINGS, LIGHT_RETOUCH_DEFAULT_SETTINGS, REMOVE_OBJECT_DEFAULT_SETTINGS, RESIZE_SUBJECT_DEFAULT_SETTINGS, COLOR_LIGHT_BRIGHTNESS_EXPOSURE_SETTINGS, COLOR_LIGHT_COLOR_CORRECTION_SETTINGS, QUALITY_ENHANCE_DEFAULT_SETTINGS, QUALITY_SHARPEN_IMAGE_DEFAULT_SETTINGS } from '../data/uiMeta.js';

let builderRowsContainer;

export function initRows(container) {
    builderRowsContainer = container;

    const addRowBtn = document.getElementById('add-row-btn');
    if (addRowBtn) {
        addRowBtn.addEventListener('click', () => {
            const currentRows = builderRowsContainer.querySelectorAll('.builder-row');
            if (currentRows.length >= 6) {
                alert("Maximum 6 edits allowed.");
                return;
            }

            // Create new row instead of clone to ensure clean event binding
            const newRowIndex = currentRows.length;
            const newRow = createRowElement(newRowIndex, true);

            builderRowsContainer.appendChild(newRow);
            setupRow(newRow);

            updateCategoryOptions();

            // Hide add button if max reached
            if (currentRows.length + 1 >= 6) {
                addRowBtn.style.display = 'none';
            }
        });
    }

    // Initialize first row
    const firstRow = builderRowsContainer.querySelector('.builder-row');
    if(firstRow) setupRow(firstRow);
}

function createRowElement(index, isAnd = false) {
    const div = document.createElement('div');
    div.className = 'builder-row';
    div.dataset.rowIndex = index;

    div.innerHTML = `
        <span class="builder-static">${isAnd ? 'AND' : 'Create Prompt'}</span>

        <!-- Custom UI -->
        <div class="custom-dropdown category-dropdown" data-name="category"></div>
        <div class="custom-dropdown action-dropdown hidden" data-name="action"></div>

        <!-- Hidden Legacy Inputs for Connector Logic -->
        <select class="category-select hidden" style="display:none;"></select>
        <select class="action-select hidden" style="display:none;"></select>

        <span class="helper-text hidden"></span>
        <div class="intensity-wrapper hidden">
            <label>Intensity: <span class="intensity-value">5</span></label>
            <input type="range" min="1" max="10" value="5" class="intensity-slider">
        </div>
    `;
    return div;
}

export function setupRow(rowElement) {
    const categoryDropdown = rowElement.querySelector('.category-dropdown');
    const actionDropdown = rowElement.querySelector('.action-dropdown');

    // Legacy Sync Elements
    // Use getElementsByClassName or querySelector. Since we might have replaced innerHTML of existing row in Default.html?
    // Wait, default.html needs to be updated too to include these hidden selects initially!
    let categorySelect = rowElement.querySelector('.category-select');
    let actionSelect = rowElement.querySelector('.action-select');

    // If missing (e.g. from existing HTML that wasn't updated via createRowElement), create them
    if (!categorySelect) {
        categorySelect = document.createElement('select');
        categorySelect.className = 'category-select hidden';
        categorySelect.style.display = 'none';
        rowElement.appendChild(categorySelect);
    }
    if (!actionSelect) {
        actionSelect = document.createElement('select');
        actionSelect.className = 'action-select hidden';
        actionSelect.style.display = 'none';
        rowElement.appendChild(actionSelect);
    }

    const intensityWrapper = rowElement.querySelector('.intensity-wrapper');
    const intensitySlider = rowElement.querySelector('.intensity-slider');
    const intensityValue = rowElement.querySelector('.intensity-value');
    const helperText = rowElement.querySelector('.helper-text');

    const visualGuideContainer = document.getElementById('global-visual-guide');

    // Populate Category Dropdown
    const categories = Object.keys(categoriesData);

    initDropdown(categoryDropdown, categories, (cat) => {
        // Sync Legacy
        categorySelect.innerHTML = `<option value="${cat}" selected>${cat}</option>`;
        categorySelect.value = cat;

        // Reset Action
        resetDropdown(actionDropdown, "Action");
        actionSelect.innerHTML = '<option value="">Action</option>';
        actionSelect.value = "";

        actionDropdown.classList.add('hidden');
        intensityWrapper.classList.add('hidden');
        helperText.classList.add('hidden');
        helperText.textContent = "";

        // Clear any advanced UI
        const existingExtra = rowElement.querySelector('.advanced-ui-container');
        if (existingExtra) existingExtra.remove();

        if (cat && categoriesData[cat]) {
            const actions = categoriesData[cat].actions;
            updateDropdownOptions(actionDropdown, actions, (act) => {
                 // Sync Legacy Action
                 actionSelect.innerHTML = `<option value="${act}" selected>${act}</option>`;
                 actionSelect.value = act;

                 handleActionSelect(rowElement, cat, act);
            });

            // Show Action Dropdown
            actionDropdown.classList.remove('hidden');
            // Auto open action dropdown
            setTimeout(() => {
                const trigger = actionDropdown.querySelector('.dropdown-trigger');
                if(trigger) trigger.click();
            }, 100);
        }

        updateCategoryOptions();

        if (visualGuideContainer) {
            updateVisualGuide(visualGuideContainer, cat, "", rowElement);
        }
    }, "Category");

    // Initialize Action Dropdown (Empty initially)
    initDropdown(actionDropdown, [], (act) => {
         // This callback won't be called directly usually, as we override it in updateDropdownOptions
    }, "Action");


    function handleActionSelect(row, cat, act) {
        if (act) {
            // Check if special UI needed
            if ((cat === 'Background' && (act === 'Blur' || act === 'Remove' || act === 'Replace' || act === 'Gradient' || act === 'Extend' || act === 'Outdoor' || act === 'Shadow Adjust' || act === 'Light Match' || act === 'Transparent' || act === 'Studio')) ||
                (cat === 'Face' && (act === 'Skin Smooth' || act === 'Blemish Remove' || act === 'Light Retouch')) ||
                (cat === 'Object / Subject' && (act === 'Remove Object' || act === 'Resize Subject')) ||
                (cat === 'Color & Light' && (act === 'Brightness & Exposure' || act === 'Color Correction')) ||
                (cat === 'Quality' && (act === 'Enhance Quality' || act === 'Sharpen Image'))) {
                updateRowUI(row, cat, act);
            } else {
                // Remove any advanced UI from previous selection
                const existingExtra = row.querySelector('.advanced-ui-container');
                if (existingExtra) existingExtra.remove();

                // Standard Logic
                // Show intensity if allowed
                if (categoriesData[cat].intensityAllowed.includes(act)) {
                    intensityWrapper.classList.remove('hidden');
                } else {
                    intensityWrapper.classList.add('hidden');
                }

                // Show Helper Text
                if (categoriesData[cat].helperTexts && categoriesData[cat].helperTexts[act]) {
                    helperText.textContent = categoriesData[cat].helperTexts[act];
                    helperText.classList.remove('hidden');
                } else {
                    helperText.classList.add('hidden');
                    helperText.textContent = "";
                }
            }

        } else {
            intensityWrapper.classList.add('hidden');
            helperText.classList.add('hidden');
            const existingExtra = row.querySelector('.advanced-ui-container');
            if (existingExtra) existingExtra.remove();
        }

        // Update Visual Guide
        if (visualGuideContainer) {
            updateVisualGuide(visualGuideContainer, cat, act, row);
        }
    }


    if (intensitySlider) {
        intensitySlider.addEventListener('input', () => {
            if(intensityValue) intensityValue.textContent = intensitySlider.value;
        });
    }
}

export function updateRowUI(rowElement, category, action) {
    // Clear standard UI elements that might conflict or be redundant
    const intensityWrapper = rowElement.querySelector('.intensity-wrapper');
    const helperText = rowElement.querySelector('.helper-text');

    intensityWrapper.classList.add('hidden');
    helperText.classList.add('hidden');

    // Remove existing advanced UI to avoid duplicates
    let extraContainer = rowElement.querySelector('.advanced-ui-container');
    if (extraContainer) extraContainer.remove();

    // Create container for new UI
    extraContainer = document.createElement('div');
    extraContainer.className = 'advanced-ui-container';
    extraContainer.style.flexBasis = '100%'; // Force new line
    extraContainer.style.marginTop = '15px';
    extraContainer.style.display = 'flex';
    extraContainer.style.flexWrap = 'wrap';
    extraContainer.style.gap = '20px';
    extraContainer.style.backgroundColor = 'var(--bg-color)';
    extraContainer.style.padding = '20px';
    extraContainer.style.borderRadius = '12px';

    if (currentMode === 'default') {
        // Default Mode: Simple settings

        let settingsToUse = [];
        // ... (Mapping logic remains same, reusing existing map) ...
        const map = {
            'Background_Blur': BLUR_DEFAULT_SETTINGS,
            'Background_Remove': REMOVE_DEFAULT_SETTINGS,
            'Background_Replace': REPLACE_DEFAULT_SETTINGS,
            'Background_Gradient': GRADIENT_DEFAULT_SETTINGS,
            'Background_Extend': EXTEND_DEFAULT_SETTINGS,
            'Background_Outdoor': OUTDOOR_DEFAULT_SETTINGS,
            'Background_Shadow Adjust': SHADOW_ADJUST_DEFAULT_SETTINGS,
            'Background_Light Match': LIGHT_MATCH_DEFAULT_SETTINGS,
            'Background_Transparent': TRANSPARENT_DEFAULT_SETTINGS,
            'Background_Studio': STUDIO_DEFAULT_SETTINGS,
            'Face_Skin Smooth': FACE_SKIN_SMOOTH_DEFAULT_SETTINGS,
            'Face_Blemish Remove': BLEMISH_REMOVE_DEFAULT_SETTINGS,
            'Face_Light Retouch': LIGHT_RETOUCH_DEFAULT_SETTINGS,
            'Object / Subject_Remove Object': REMOVE_OBJECT_DEFAULT_SETTINGS,
            'Object / Subject_Resize Subject': RESIZE_SUBJECT_DEFAULT_SETTINGS,
            'Color & Light_Brightness & Exposure': COLOR_LIGHT_BRIGHTNESS_EXPOSURE_SETTINGS,
            'Color & Light_Color Correction': COLOR_LIGHT_COLOR_CORRECTION_SETTINGS,
            'Quality_Enhance Quality': QUALITY_ENHANCE_DEFAULT_SETTINGS,
            'Quality_Sharpen Image': QUALITY_SHARPEN_IMAGE_DEFAULT_SETTINGS
        };
        const key = `${category}_${action}`;
        if (map[key]) settingsToUse = map[key];

        settingsToUse.forEach(setting => {
            const wrapper = document.createElement('div');
            wrapper.style.display = 'flex';
            wrapper.style.flexDirection = 'column';
            wrapper.style.gap = '5px';

            const label = document.createElement('label');
            label.textContent = setting.label;
            label.style.fontSize = '0.9rem';
            label.style.fontWeight = '500';

            wrapper.appendChild(label);

            if (setting.type === 'slider') {
                const sliderContainer = document.createElement('div');
                sliderContainer.style.display = 'flex';
                sliderContainer.style.alignItems = 'center';
                sliderContainer.style.gap = '10px';

                const slider = document.createElement('input');
                slider.type = 'range';
                slider.min = setting.min;
                slider.max = setting.max;
                slider.value = setting.val;
                slider.className = 'intensity-slider'; // Reuse style
                slider.classList.add(setting.class);

                const valDisplay = document.createElement('span');
                valDisplay.textContent = setting.val;
                valDisplay.style.minWidth = '20px';

                slider.addEventListener('input', () => {
                    valDisplay.textContent = slider.value;
                    // Trigger visual guide update
                    const guide = document.getElementById('global-visual-guide');
                    if (guide) {
                        const cat = getDropdownValue(rowElement.querySelector('.category-dropdown'));
                        const act = getDropdownValue(rowElement.querySelector('.action-dropdown'));
                        updateVisualGuide(guide, cat, act, rowElement);
                    }
                });

                sliderContainer.appendChild(slider);
                sliderContainer.appendChild(valDisplay);
                wrapper.appendChild(sliderContainer);
            } else if (setting.type === 'select') {
                // Using Native Select for Sub-Settings to ensure compatibility with prompt generators if they look for it?
                // The prompt generator `connector.js` -> `promptBuilder.js` uses `row.querySelector('.' + setting.class)`.
                // If it expects `.value` from it, native select is safest.
                // My earlier decision to use native select for sub-settings holds.

                const select = document.createElement('select');
                select.className = 'builder-dropdown';
                select.style.minWidth = '120px';
                select.style.padding = '6px 12px';
                select.classList.add(setting.class);

                setting.options.forEach(opt => {
                    const option = document.createElement('option');
                    option.value = opt;
                    option.textContent = opt;
                    if(opt === setting.val) option.selected = true;
                    select.appendChild(option);
                });

                select.addEventListener('change', () => {
                     // Trigger visual guide update
                    const guide = document.getElementById('global-visual-guide');
                    if (guide) {
                        const cat = getDropdownValue(rowElement.querySelector('.category-dropdown'));
                        const act = getDropdownValue(rowElement.querySelector('.action-dropdown'));
                        updateVisualGuide(guide, cat, act, rowElement);
                    }
                });

                wrapper.appendChild(select);
            }

            extraContainer.appendChild(wrapper);
        });

    } else if (currentMode === 'advanced') {
        // Advanced Mode Logic (Preserved)
        const blurTypes = [
            "Gaussian", "Depth / Portrait", "Lens (DSLR)", "Bokeh", "Motion",
            "Radial", "Selective", "Soft", "Multi-Depth", "Directional"
        ];

        const typeWrapper = document.createElement('div');
        typeWrapper.style.display = 'flex';
        typeWrapper.style.flexDirection = 'column';
        typeWrapper.style.gap = '5px';
        typeWrapper.style.width = '100%';
        typeWrapper.style.maxWidth = '300px';
        typeWrapper.style.marginBottom = '15px';

        const typeLabel = document.createElement('label');
        typeLabel.textContent = "Blur Type";
        typeLabel.style.fontSize = '0.9rem';
        typeLabel.style.fontWeight = '500';

        const typeSelect = document.createElement('select');
        typeSelect.className = 'builder-dropdown';
        typeSelect.innerHTML = '<option value="">Select Blur Type</option>';
        blurTypes.forEach(bt => {
            const opt = document.createElement('option');
            opt.value = bt;
            opt.textContent = bt;
            typeSelect.appendChild(opt);
        });

        typeWrapper.appendChild(typeLabel);
        typeWrapper.appendChild(typeSelect);
        extraContainer.appendChild(typeWrapper);

        // Container for advanced settings (hidden initially)
        const advSettingsContainer = document.createElement('div');
        advSettingsContainer.style.display = 'none'; // Hidden until type selected
        advSettingsContainer.style.flexWrap = 'wrap';
        advSettingsContainer.style.gap = '20px';
        advSettingsContainer.style.width = '100%';

        // Advanced Settings Data
        const advSettings = [
            { label: "Intensity", type: "slider", min: 1, max: 10, val: 5 },
            { label: "Blur Radius", type: "slider", min: 1, max: 100, val: 50 },
            { label: "Edge Protection", type: "toggle", val: true },
            { label: "Depth Level", type: "slider", min: 1, max: 10, val: 5 },
            { label: "Focus Area", type: "slider", min: 0, max: 100, val: 50 }, // Abstract representation
            { label: "Falloff Smoothness", type: "slider", min: 1, max: 10, val: 7 }
        ];

        advSettings.forEach(setting => {
            const wrapper = document.createElement('div');
            wrapper.style.display = 'flex';
            wrapper.style.flexDirection = 'column';
            wrapper.style.gap = '5px';
            wrapper.style.flex = '1 1 150px'; // Responsive grid

            const label = document.createElement('label');
            label.textContent = setting.label;
            label.style.fontSize = '0.85rem';
            label.style.color = 'var(--text-color)';

            wrapper.appendChild(label);

            if (setting.type === 'slider') {
                const sliderContainer = document.createElement('div');
                sliderContainer.style.display = 'flex';
                sliderContainer.style.alignItems = 'center';
                sliderContainer.style.gap = '10px';

                const slider = document.createElement('input');
                slider.type = 'range';
                slider.min = setting.min;
                slider.max = setting.max;
                slider.value = setting.val;
                slider.style.flex = '1';

                const valDisplay = document.createElement('span');
                valDisplay.textContent = setting.val;
                valDisplay.style.minWidth = '20px';
                valDisplay.style.fontSize = '0.8rem';

                slider.addEventListener('input', () => {
                    valDisplay.textContent = slider.value;
                });

                sliderContainer.appendChild(slider);
                sliderContainer.appendChild(valDisplay);
                wrapper.appendChild(sliderContainer);
            } else if (setting.type === 'toggle') {
                const toggleLabel = document.createElement('label');
                toggleLabel.style.display = 'flex';
                toggleLabel.style.alignItems = 'center';
                toggleLabel.style.gap = '10px';
                toggleLabel.style.cursor = 'pointer';

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = setting.val;

                const statusSpan = document.createElement('span');
                statusSpan.textContent = setting.val ? "ON" : "OFF";
                statusSpan.style.fontSize = '0.85rem';
                statusSpan.style.fontWeight = 'bold';

                checkbox.addEventListener('change', () => {
                    statusSpan.textContent = checkbox.checked ? "ON" : "OFF";
                });

                toggleLabel.appendChild(checkbox);
                toggleLabel.appendChild(statusSpan);
                wrapper.appendChild(toggleLabel);
            }

            advSettingsContainer.appendChild(wrapper);
        });

        extraContainer.appendChild(advSettingsContainer);

        typeSelect.addEventListener('change', () => {
            if (typeSelect.value) {
                advSettingsContainer.style.display = 'flex';
            } else {
                advSettingsContainer.style.display = 'none';
            }
        });
    }

    rowElement.appendChild(extraContainer);
}

export function updateCategoryOptions() {
    if (!builderRowsContainer) return;

    const rows = builderRowsContainer.querySelectorAll('.builder-row');
    const selectedCategories = Array.from(rows)
        .map(row => getDropdownValue(row.querySelector('.category-dropdown')))
        .filter(val => val !== "" && val !== undefined && val !== null);

    rows.forEach(row => {
        const dropdown = row.querySelector('.category-dropdown');
        const currentValue = getDropdownValue(dropdown);

        const menu = dropdown.querySelector('.dropdown-menu');
        if(menu) {
            Array.from(menu.children).forEach(item => {
                const val = item.dataset.value;
                if (selectedCategories.includes(val) && val !== currentValue) {
                    item.classList.add('disabled');
                } else {
                    item.classList.remove('disabled');
                }
            });
        }
    });
}

// Global update UI function called by Mode system
export function updateAllRowsForMode() {
    if (!builderRowsContainer) return;

    const rows = builderRowsContainer.querySelectorAll('.builder-row');
    rows.forEach(row => {
         // Re-trigger change events to update specific UI for the new mode
         const catDropdown = row.querySelector('.category-dropdown');
         const actDropdown = row.querySelector('.action-dropdown');
         const cat = getDropdownValue(catDropdown);
         const act = getDropdownValue(actDropdown);

         if (cat && act) {
             // Force update row UI
             updateRowUI(row, cat, act);
         }
    });

    // Pro Mode Overlay Logic (Same as before)
    const container = document.querySelector('.builder-line-container');

    if (currentMode === 'pro') {
        builderRowsContainer.style.opacity = '0.3';
        builderRowsContainer.style.pointerEvents = 'none';

        if (!document.getElementById('pro-overlay')) {
            const overlay = document.createElement('div');
            overlay.id = 'pro-overlay';
            overlay.style.position = 'absolute';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.style.background = 'rgba(255,255,255,0.7)';
            overlay.style.zIndex = '10';
            overlay.style.fontSize = '1.5rem';
            overlay.style.fontWeight = 'bold';
            overlay.style.color = 'var(--text-color)';
            overlay.innerText = "Pro Mode (Coming Soon)";

            if (container) {
                 container.appendChild(overlay);
                 container.style.position = 'relative';
            }
        } else {
            document.getElementById('pro-overlay').style.display = 'flex';
        }
    } else {
        builderRowsContainer.style.opacity = '1';
        builderRowsContainer.style.pointerEvents = 'auto';
        const overlay = document.getElementById('pro-overlay');
        if (overlay) overlay.style.display = 'none';
    }
}
