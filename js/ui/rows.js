// Row management: Add row / clone row, Max 6 rows, AND label logic, Disable duplicate categories, Attach change listeners

import { categoriesData } from '../data/categories.js';
import { createVisualGuide, updateVisualGuide } from './visualGuide.js';
import { currentMode } from './mode.js';
import { BLUR_DEFAULT_SETTINGS, REMOVE_DEFAULT_SETTINGS, REPLACE_DEFAULT_SETTINGS, GRADIENT_DEFAULT_SETTINGS, TRANSPARENT_DEFAULT_SETTINGS, STUDIO_DEFAULT_SETTINGS } from '../data/uiMeta.js';

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

            // Clone the first row structure
            const templateRow = currentRows[0].cloneNode(true);
            // Reset values
            const selects = templateRow.querySelectorAll('select');
            selects.forEach(s => s.value = "");

            const actionSelect = templateRow.querySelector('.action-select');
            actionSelect.classList.add('hidden');
            actionSelect.innerHTML = '<option value="">Action</option>';

            const helperText = templateRow.querySelector('.helper-text');
            helperText.textContent = "";
            helperText.classList.add('hidden');

            const intensityWrapper = templateRow.querySelector('.intensity-wrapper');
            intensityWrapper.classList.add('hidden');
            const intensitySlider = templateRow.querySelector('.intensity-slider');
            if(intensitySlider) intensitySlider.value = 5;
            const intensityValue = templateRow.querySelector('.intensity-value');
            if(intensityValue) intensityValue.textContent = "5";

            // Label logic
            const label = templateRow.querySelector('.builder-static');
            if (label) label.textContent = "AND";

            templateRow.dataset.rowIndex = currentRows.length;
            builderRowsContainer.appendChild(templateRow);
            setupRow(templateRow);

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

export function setupRow(rowElement) {
    const categorySelect = rowElement.querySelector('.category-select');
    const actionSelect = rowElement.querySelector('.action-select');
    const intensityWrapper = rowElement.querySelector('.intensity-wrapper');
    const intensitySlider = rowElement.querySelector('.intensity-slider');
    const intensityValue = rowElement.querySelector('.intensity-value');
    const helperText = rowElement.querySelector('.helper-text');

    // Append Visual Guide if not exists
    let visualGuide = rowElement.querySelector('.visual-guide-container');
    if (!visualGuide) {
        visualGuide = createVisualGuide();
        rowElement.appendChild(visualGuide);
        updateVisualGuide(visualGuide, categorySelect.value, actionSelect.value, rowElement);
    }

    categorySelect.addEventListener('change', () => {
        const cat = categorySelect.value;
        // Reset Action
        actionSelect.innerHTML = '<option value="">Action</option>';
        actionSelect.classList.add('hidden');
        intensityWrapper.classList.add('hidden');
        helperText.classList.add('hidden');
        helperText.textContent = "";

        // Clear any advanced UI
        const existingExtra = rowElement.querySelector('.advanced-ui-container');
        if (existingExtra) existingExtra.remove();

        if (cat && categoriesData[cat]) {
            categoriesData[cat].actions.forEach(action => {
                const opt = document.createElement('option');
                opt.value = action;
                opt.textContent = action;
                actionSelect.appendChild(opt);
            });
            actionSelect.classList.remove('hidden');
        }
        updateCategoryOptions();
        updateVisualGuide(visualGuide, cat, "", rowElement);
    });

    actionSelect.addEventListener('change', () => {
        const cat = categorySelect.value;
        const act = actionSelect.value;

        if (act) {
            // Check if special UI needed
            if (cat === 'Background' && (act === 'Blur' || act === 'Remove' || act === 'Replace' || act === 'Gradient' || act === 'Transparent' || act === 'Studio')) {
                updateRowUI(rowElement, cat, act);
            } else {
                // Remove any advanced UI from previous selection
                const existingExtra = rowElement.querySelector('.advanced-ui-container');
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
            const existingExtra = rowElement.querySelector('.advanced-ui-container');
            if (existingExtra) existingExtra.remove();
        }

        // Update Visual Guide AFTER UI has been updated (so inputs exist)
        updateVisualGuide(visualGuide, cat, act, rowElement);
    });

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
        // Default Mode: Simple settings (Using BLUR_DEFAULT_SETTINGS or REMOVE_DEFAULT_SETTINGS)

        let settingsToUse = [];
        if (category === 'Background' && action === 'Blur') {
            settingsToUse = BLUR_DEFAULT_SETTINGS;
        } else if (category === 'Background' && action === 'Remove') {
            settingsToUse = REMOVE_DEFAULT_SETTINGS;
        } else if (category === 'Background' && action === 'Replace') {
            settingsToUse = REPLACE_DEFAULT_SETTINGS;
        } else if (category === 'Background' && action === 'Gradient') {
            settingsToUse = GRADIENT_DEFAULT_SETTINGS;
        } else if (category === 'Background' && action === 'Transparent') {
            settingsToUse = TRANSPARENT_DEFAULT_SETTINGS;
        } else if (category === 'Background' && action === 'Studio') {
            settingsToUse = STUDIO_DEFAULT_SETTINGS;
        }

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
                    const guide = rowElement.querySelector('.visual-guide-container');
                    if (guide) {
                        const cat = rowElement.querySelector('.category-select').value;
                        const act = rowElement.querySelector('.action-select').value;
                        updateVisualGuide(guide, cat, act, rowElement);
                    }
                });

                sliderContainer.appendChild(slider);
                sliderContainer.appendChild(valDisplay);
                wrapper.appendChild(sliderContainer);
            } else if (setting.type === 'select') {
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
                    const guide = rowElement.querySelector('.visual-guide-container');
                    if (guide) {
                        const cat = rowElement.querySelector('.category-select').value;
                        const act = rowElement.querySelector('.action-select').value;
                        updateVisualGuide(guide, cat, act, rowElement);
                    }
                });

                wrapper.appendChild(select);
            }

            extraContainer.appendChild(wrapper);
        });

    } else if (currentMode === 'advanced') {
        // Advanced Mode
        // Blur Type (Dropdown 10 options)
        // Then Advanced Settings (6 items)

        // Blur Type Dropdown
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
                // Simple checkbox for toggle
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

        // Event Listener for Blur Type
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
        .map(row => row.querySelector('.category-select').value)
        .filter(val => val !== "");

    rows.forEach(row => {
        const select = row.querySelector('.category-select');
        const currentValue = select.value;

        Array.from(select.options).forEach(option => {
            if (option.value === "") return;

            // If this option is selected in another row, disable it
            // Unless it is the current value of this row
            if (selectedCategories.includes(option.value) && option.value !== currentValue) {
                option.disabled = true;
            } else {
                option.disabled = false;
            }
        });
    });
}

// Global update UI function called by Mode system
export function updateAllRowsForMode() {
    if (!builderRowsContainer) return;

    const rows = builderRowsContainer.querySelectorAll('.builder-row');
    rows.forEach(row => {
         // Re-trigger change events to update specific UI for the new mode
         const catSelect = row.querySelector('.category-select');
         const actSelect = row.querySelector('.action-select');
         if (catSelect.value === 'Background' && (actSelect.value === 'Blur' || actSelect.value === 'Remove' || actSelect.value === 'Replace' || actSelect.value === 'Gradient' || actSelect.value === 'Transparent' || actSelect.value === 'Studio')) {
             // Force update row UI
             updateRowUI(row, 'Background', actSelect.value);
         } else {
             // Clear advanced UI if any (restoring standard look)
             const existingExtra = row.querySelector('.advanced-ui-container');
             if (existingExtra) existingExtra.remove();

             // Restore standard elements if hidden
             const intensityWrapper = row.querySelector('.intensity-wrapper');
             const helperText = row.querySelector('.helper-text');

             // Re-evaluate visibility based on standard logic
             if (actSelect.value) {
                 if (categoriesData[catSelect.value] && categoriesData[catSelect.value].intensityAllowed.includes(actSelect.value)) {
                     intensityWrapper.classList.remove('hidden');
                 }
                 if (categoriesData[catSelect.value] && categoriesData[catSelect.value].helperTexts[actSelect.value]) {
                     helperText.classList.remove('hidden');
                 }
             }
         }
    });

    // Pro Mode Overlay Logic
    const container = document.querySelector('.builder-line-container'); // Assuming this exists or using builderRowsContainer parent?
    // The original code used .builder-line-container for appending overlay

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
