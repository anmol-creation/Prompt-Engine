document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle Logic ---
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const iconSpan = toggleButton.querySelector('.icon');
    const textSpan = toggleButton.querySelector('.text');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateButtonState(savedTheme === 'dark-mode');
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        if (isDarkMode) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.setItem('theme', 'light-mode');
        }
        updateButtonState(isDarkMode);
    });

    function updateButtonState(isDarkMode) {
        if (isDarkMode) {
            iconSpan.textContent = '☀️';
            textSpan.textContent = 'Light Mode';
        } else {
            iconSpan.textContent = '🌙';
            textSpan.textContent = 'Dark Mode';
        }
    }

    // --- Image Page Logic ---
    // Only run if we are on the image page
    const builderRowsContainer = document.getElementById('builder-rows');
    if (!builderRowsContainer) return;

    // --- Mode System ---
    let currentMode = 'default'; // default, advanced, pro
    const modeToggleContainer = document.querySelector('.mode-toggle-container');
    const modeSlider = document.querySelector('.mode-slider');
    const modeOptions = document.querySelectorAll('.mode-option');

    // Mode Toggle Logic (Vertical Slide)
    if (modeToggleContainer && modeSlider) {
        modeToggleContainer.addEventListener('click', () => {
            if (currentMode === 'default') {
                setMode('advanced');
            } else if (currentMode === 'advanced') {
                setMode('pro');
            } else {
                setMode('default');
            }
        });
    }

    function setMode(mode) {
        currentMode = mode;
        const index = mode === 'default' ? 0 : mode === 'advanced' ? 1 : 2;
        modeSlider.style.transform = `translateY(-${index * 40}px)`;

        modeOptions.forEach(opt => opt.classList.remove('active'));
        modeOptions[index].classList.add('active');

        updateUIForMode();
    }

    function updateUIForMode() {
        const rows = document.querySelectorAll('.builder-row');
        rows.forEach(row => {
             // Re-trigger change events to update specific UI for the new mode
             const catSelect = row.querySelector('.category-select');
             const actSelect = row.querySelector('.action-select');
             if (catSelect.value === 'Background' && actSelect.value === 'Blur') {
                 // Force update row UI
                 updateRowUI(row, 'Background', 'Blur');
             } else {
                 // Clear advanced UI if any (restoring standard look)
                 const existingExtra = row.querySelector('.advanced-ui-container');
                 if (existingExtra) existingExtra.remove();

                 // Restore standard elements if hidden
                 const intensityWrapper = row.querySelector('.intensity-wrapper');
                 const helperText = row.querySelector('.helper-text');

                 // Re-evaluate visibility based on standard logic
                 if (actSelect.value) {
                     if (data[catSelect.value] && data[catSelect.value].intensityAllowed.includes(actSelect.value)) {
                         intensityWrapper.classList.remove('hidden');
                     }
                     if (data[catSelect.value] && data[catSelect.value].helperTexts[actSelect.value]) {
                         helperText.classList.remove('hidden');
                     }
                 }
             }
        });

        if (currentMode === 'pro') {
            builderRowsContainer.style.opacity = '0.3';
            builderRowsContainer.style.pointerEvents = 'none';
            // Show Coming Soon? - Or just overlay
            // Actually instructions say: "Pro mode appears in the slide toggle... Pro exists only as a locked mode placeholder."
            // "UI visible ONLY (no features implemented)"
            // "Pro Mode (Coming Soon)"
            // I should probably add an overlay or simple text if in Pro mode.
            // For now, disabling interaction is good.
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
                document.querySelector('.builder-line-container').appendChild(overlay);
                document.querySelector('.builder-line-container').style.position = 'relative'; // ensure overlay positioning
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


    const addRowBtn = document.getElementById('add-row-btn');
    const createPromptBtn = document.getElementById('create-prompt-btn');
    const promptOutput = document.getElementById('prompt-output');
    const copyBtn = document.getElementById('copy-btn');
    const languageSelect = document.getElementById('language-select');

    // Data Structure
    const data = {
        "Background": {
            actions: ["Blur", "Remove", "Replace", "Transparent", "Studio", "Outdoor", "Gradient", "Extend", "Shadow Adjust", "Light Match"],
            helperTexts: {
                "Blur": "Depth effect",
                "Remove": "Clean cut",
                "Replace": "Scene match",
                "Transparent": "PNG output",
                "Studio": "Studio look",
                "Outdoor": "Natural scene",
                "Gradient": "Smooth blend",
                "Extend": "Frame fill",
                "Shadow Adjust": "Natural shadow",
                "Light Match": "Light sync"
            },
            intensityAllowed: ["Blur"],
            templates: {
                "Blur": {
                    "English": "Blur the background naturally while keeping the subject sharp and realistic.",
                    "Hindi": "Background ko blur karein jabki subject ko saaf aur spasht rakhein.",
                    "Hinglish": "Background ko naturally blur karein aur main subject ko sharp rakhein."
                },
                "Remove": {
                    "English": "Remove the background completely, isolating the subject on a clean layer.",
                    "Hindi": "Background ko puri tarah hata dein aur subject ko alag karein.",
                    "Hinglish": "Background remove karein aur subject ko isolate karein."
                },
                "Replace": {
                    "English": "Replace the background with a suitable context that matches the subject's lighting.",
                    "Hindi": "Background ko ek nayi jagah se badlein jo subject ki lighting se match kare.",
                    "Hinglish": "Background replace karein jo subject ke saath match kare."
                },
                "Transparent": {
                    "English": "Make the background transparent for easy use in other designs.",
                    "Hindi": "Background ko transparent banayein taaki ise kahin bhi use kiya ja sake.",
                    "Hinglish": "Background ko transparent karein."
                },
                "Studio": {
                    "English": "Change the background to a professional studio setting with controlled lighting.",
                    "Hindi": "Background ko ek professional studio jaisa banayein.",
                    "Hinglish": "Background ko studio look dein."
                },
                "Outdoor": {
                    "English": "Change the background to a natural outdoor setting with ambient light.",
                    "Hindi": "Background ko ek bahari prakritik drishya mein badlein.",
                    "Hinglish": "Background ko outdoor natural setting mein change karein."
                },
                "Gradient": {
                    "English": "Apply a smooth color gradient to the background.",
                    "Hindi": "Background mein ek smooth rang ka gradient lagayein.",
                    "Hinglish": "Background mein smooth gradient add karein."
                },
                "Extend": {
                    "English": "Extend the background boundaries to fill the frame seamlessly.",
                    "Hindi": "Background ko frame bharne ke liye badhayein.",
                    "Hinglish": "Background extend karein taaki frame fill ho jaye."
                },
                "Shadow Adjust": {
                    "English": "Adjust background shadows to look natural and consistent.",
                    "Hindi": "Background ki parchhaiyon ko natural dikhne ke liye adjust karein.",
                    "Hinglish": "Shadows adjust karein taaki natural look aaye."
                },
                "Light Match": {
                    "English": "Sync the background lighting with the subject for a realistic composite.",
                    "Hindi": "Background aur subject ki lighting ko ek jaisa karein.",
                    "Hinglish": "Lighting match karein taaki realistic lage."
                }
            }
        },
        "Face": {
            actions: ["Skin Smooth", "Blemish Remove", "Light Retouch"],
            helperTexts: {},
            intensityAllowed: [],
            templates: {
                "Skin Smooth": {
                    "English": "Smooth facial skin naturally while preserving texture and facial details.",
                    "Hindi": "Chehre ki twacha ko natural tarike se chikna karein lekin texture banaye rakhein.",
                    "Hinglish": "Face skin smooth karein par texture maintain rakhein."
                },
                "Blemish Remove": {
                    "English": "Remove visible blemishes and imperfections from the face while keeping a natural skin tone.",
                    "Hindi": "Chehre se daag-dhabbe hatayein aur natural rangat banaye rakhein.",
                    "Hinglish": "Blemishes remove karein aur natural look rakhein."
                },
                "Light Retouch": {
                    "English": "Apply a light retouch to the face to enhance appearance without losing natural characteristics.",
                    "Hindi": "Chehre par halka retouch karein taaki sundarta badhe par asliyat na khoye.",
                    "Hinglish": "Light retouch karein taaki face enhance ho jaye."
                }
            }
        },
        "Object / Subject": {
            actions: ["Remove Object", "Resize Subject"],
            helperTexts: {},
            intensityAllowed: ["Resize Subject"],
            templates: {
                "Remove Object": {
                    "English": "Remove the specified object from the scene, filling the gap with context-aware details.",
                    "Hindi": "Bataye gaye vastu ko hatayein aur khaali jagah ko natural tarike se bharein.",
                    "Hinglish": "Object remove karein aur gap ko naturally fill karein."
                },
                "Resize Subject": {
                    "English": "Adjust the size of the main subject to better fit the composition while maintaining proportions.",
                    "Hindi": "Mukhya subject ka aakaar badlein taaki woh frame mein sahi fit ho.",
                    "Hinglish": "Subject resize karein taaki composition better lage."
                }
            }
        },
        "Color & Light": {
            actions: ["Brightness Adjust", "Color Correction"],
            helperTexts: {},
            intensityAllowed: ["Brightness Adjust"],
            templates: {
                "Brightness Adjust": {
                    "English": "Adjust the overall brightness to ensure a balanced exposure.",
                    "Hindi": "Tasveer ki chamak ko adjust karein taaki woh santulit lage.",
                    "Hinglish": "Brightness adjust karein taaki exposure balanced ho."
                },
                "Color Correction": {
                    "English": "Correct the color balance to achieve natural skin tones and accurate colors.",
                    "Hindi": "Rangon ko sudharein taaki twacha aur vatavaran natural lage.",
                    "Hinglish": "Color correction karein for natural tones."
                }
            }
        },
        "Style": {
            actions: ["Artistic Style", "Cinematic Look"],
            helperTexts: {},
            intensityAllowed: [],
            templates: {
                "Artistic Style": {
                    "English": "Apply an artistic style to the image, enhancing brush strokes and texture.",
                    "Hindi": "Tasveer mein ek kalatmak style lagayein.",
                    "Hinglish": "Artistic style apply karein."
                },
                "Cinematic Look": {
                    "English": "Apply a cinematic color grade with dramatic lighting.",
                    "Hindi": "Tasveer ko cinematic look dein dramatic lighting ke saath.",
                    "Hinglish": "Cinematic look aur dramatic lighting dein."
                }
            }
        },
        "Quality": {
            actions: ["Enhance Quality", "Sharpen Image"],
            helperTexts: {},
            intensityAllowed: [],
            templates: {
                "Enhance Quality": {
                    "English": "Upscale and enhance the overall image quality, reducing noise.",
                    "Hindi": "Tasveer ki quality badhayein aur noise kam karein.",
                    "Hinglish": "Quality enhance karein aur noise reduce karein."
                },
                "Sharpen Image": {
                    "English": "Sharpen the fine details of the image to make it look crisp.",
                    "Hindi": "Tasveer ki baarikiyon ko saaf aur teekha karein.",
                    "Hinglish": "Image sharpen karein details ke liye."
                }
            }
        }
    };

    // Initialize first row
    setupRow(builderRowsContainer.querySelector('.builder-row'));

    // Add Row Logic
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
        templateRow.querySelector('.intensity-slider').value = 5;
        templateRow.querySelector('.intensity-value').textContent = "5";

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

    function setupRow(rowElement) {
        const categorySelect = rowElement.querySelector('.category-select');
        const actionSelect = rowElement.querySelector('.action-select');
        const intensityWrapper = rowElement.querySelector('.intensity-wrapper');
        const intensitySlider = rowElement.querySelector('.intensity-slider');
        const intensityValue = rowElement.querySelector('.intensity-value');
        const helperText = rowElement.querySelector('.helper-text');

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

            if (cat && data[cat]) {
                data[cat].actions.forEach(action => {
                    const opt = document.createElement('option');
                    opt.value = action;
                    opt.textContent = action;
                    actionSelect.appendChild(opt);
                });
                actionSelect.classList.remove('hidden');
            }
            updateCategoryOptions();
        });

        actionSelect.addEventListener('change', () => {
            const cat = categorySelect.value;
            const act = actionSelect.value;

            if (act) {
                // Check if special UI needed
                if (cat === 'Background' && act === 'Blur') {
                    updateRowUI(rowElement, cat, act);
                } else {
                    // Remove any advanced UI from previous selection
                    const existingExtra = rowElement.querySelector('.advanced-ui-container');
                    if (existingExtra) existingExtra.remove();

                    // Standard Logic
                    // Show intensity if allowed
                    if (data[cat].intensityAllowed.includes(act)) {
                        intensityWrapper.classList.remove('hidden');
                    } else {
                        intensityWrapper.classList.add('hidden');
                    }

                    // Show Helper Text
                    if (data[cat].helperTexts && data[cat].helperTexts[act]) {
                        helperText.textContent = data[cat].helperTexts[act];
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
        });

        intensitySlider.addEventListener('input', () => {
            intensityValue.textContent = intensitySlider.value;
        });
    }

    function updateRowUI(rowElement, category, action) {
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
            // Intensity (Slider 1-10, Default 5)
            // Focus Type (Auto, Portrait)
            // Blur Feel (Natural, Soft)

            const settings = [
                {
                    label: "Intensity",
                    type: "slider",
                    min: 1,
                    max: 10,
                    val: 5
                },
                {
                    label: "Focus Type",
                    type: "select",
                    options: ["Auto", "Portrait"],
                    val: "Auto"
                },
                {
                    label: "Blur Feel",
                    type: "select",
                    options: ["Natural", "Soft"],
                    val: "Natural"
                }
            ];

            settings.forEach(setting => {
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

                    const valDisplay = document.createElement('span');
                    valDisplay.textContent = setting.val;
                    valDisplay.style.minWidth = '20px';

                    slider.addEventListener('input', () => {
                        valDisplay.textContent = slider.value;
                    });

                    sliderContainer.appendChild(slider);
                    sliderContainer.appendChild(valDisplay);
                    wrapper.appendChild(sliderContainer);
                } else if (setting.type === 'select') {
                    const select = document.createElement('select');
                    select.className = 'builder-dropdown';
                    select.style.minWidth = '120px';
                    select.style.padding = '6px 12px';

                    setting.options.forEach(opt => {
                        const option = document.createElement('option');
                        option.value = opt;
                        option.textContent = opt;
                        if(opt === setting.val) option.selected = true;
                        select.appendChild(option);
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
                    // Auto-apply defaults? (Simulated by just showing pre-filled values)
                    // Requirements: "Selecting a blur auto-applies recommended defaults"
                    // We'll leave them at initial defaults or randomise slightly to simulate
                } else {
                    advSettingsContainer.style.display = 'none';
                }
            });
        }

        rowElement.appendChild(extraContainer);
    }

    function updateCategoryOptions() {
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
                    // If disabled, maybe style it? Default browser disabled style is usually fine.
                } else {
                    option.disabled = false;
                }
            });
        });
    }

    // Create Prompt Logic
    createPromptBtn.addEventListener('click', () => {
        const rows = builderRowsContainer.querySelectorAll('.builder-row');
        const language = languageSelect.value;
        let promptParts = [];

        rows.forEach(row => {
            const cat = row.querySelector('.category-select').value;
            const act = row.querySelector('.action-select').value;
            const intensity = row.querySelector('.intensity-slider').value;

            if (cat && act && data[cat] && data[cat].templates[act]) {
                let text = data[cat].templates[act][language] || data[cat].templates[act]["English"];

                // Intensity Logic
                // Only if intensity is allowed and visible (meaning user can control it)
                if (data[cat].intensityAllowed.includes(act)) {
                     // Simple logic: if extreme, maybe add a note?
                     // Plan said: "Generate a clean, AI-agnostic prompt... No technical jargon"
                     // The user prompt examples: "Background -> Blur -> 5 => Blur the background naturally..."
                     // It doesn't explicitly ask to output the number "5".
                     // So we might stick to the template text which is "naturally".
                     // If user selects 10, maybe we say "strongly"?
                     // But the request says "Prompt must protect image quality".
                     // Let's keep it simple as per examples.
                     // Examples didn't show intensity number in output text.
                }

                promptParts.push(text);
            }
        });

        if (promptParts.length === 0) {
            promptOutput.textContent = "Please select at least one category and action.";
            promptOutput.style.color = "var(--footer-text)";
            copyBtn.classList.add('hidden');
        } else {
            promptOutput.textContent = promptParts.join("\n\n");
            promptOutput.style.color = "var(--text-color)";
            copyBtn.classList.remove('hidden');
        }
    });

    // Copy Logic
    copyBtn.addEventListener('click', () => {
        const text = promptOutput.textContent;
        navigator.clipboard.writeText(text).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = "Copied!";
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 2000);
        });
    });

});
