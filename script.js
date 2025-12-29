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
             const cat = catSelect.value;
             const act = actSelect.value;

             if (cat === 'Background' && BACKGROUND_SETTINGS[act]) {
                 // Force update row UI for actions with custom settings
                 updateRowUI(row, 'Background', act);
             } else {
                 // Clear advanced UI if any (restoring standard look)
                 const existingExtra = row.querySelector('.advanced-ui-container');
                 if (existingExtra) existingExtra.remove();

                 // Restore standard elements if hidden
                 const intensityWrapper = row.querySelector('.intensity-wrapper');
                 const helperText = row.querySelector('.helper-text');

                 // Re-evaluate visibility based on standard logic
                 if (act) {
                     if (data[cat] && data[cat].intensityAllowed.includes(act)) {
                         intensityWrapper.classList.remove('hidden');
                     }
                     if (data[cat] && data[cat].helperTexts[act]) {
                         helperText.classList.remove('hidden');
                     }
                 }
             }
        });

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
                document.querySelector('.builder-line-container').appendChild(overlay);
                document.querySelector('.builder-line-container').style.position = 'relative';
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

    // Data Structure for Settings
    const BACKGROUND_SETTINGS = {
        "Blur": [
            { label: "Intensity", type: "slider", min: 1, max: 10, val: 5, class: "blur-intensity" },
            { label: "Focus Type", type: "select", options: ["Auto", "Portrait"], val: "Auto", class: "blur-focus" },
            { label: "Blur Feel", type: "select", options: ["Natural", "Soft"], val: "Natural", class: "blur-feel" }
        ],
        "Replace": [
            { label: "Environment Type", type: "select", options: ["Natural", "Urban", "Studio"], val: "Natural", class: "replace-env" },
            { label: "Lighting Match", type: "select", options: ["Auto", "Soft", "Dramatic"], val: "Auto", class: "replace-lighting" },
            { label: "Blend Quality", type: "select", options: ["Natural", "Clean", "Seamless"], val: "Natural", class: "replace-blend" }
        ],
        "Transparent": [
            { label: "Edge Style", type: "select", options: ["Soft", "Clean"], val: "Soft", class: "trans-edge" },
            { label: "Shadow Keep", type: "select", options: ["On", "Off"], val: "On", class: "trans-shadow" },
            { label: "Cut Accuracy", type: "select", options: ["Balanced", "Sharp"], val: "Balanced", class: "trans-cut" }
        ],
        "Studio": [
            { label: "Studio Style", type: "select", options: ["Plain", "Gradient"], val: "Plain", class: "studio-style" },
            { label: "Light Mood", type: "select", options: ["Soft", "Balanced"], val: "Soft", class: "studio-light" },
            { label: "Background Tone", type: "select", options: ["Neutral", "Bright"], val: "Neutral", class: "studio-tone" }
        ],
        "Extend / Expand": [
            { label: "Extend Direction", type: "select", options: ["Auto", "Horizontal", "Vertical"], val: "Auto", class: "extend-dir" },
            { label: "Fill Style", type: "select", options: ["Natural", "Simple"], val: "Natural", class: "extend-fill" },
            { label: "Edge Continuity", type: "select", options: ["Smooth", "Clean"], val: "Smooth", class: "extend-edge" }
        ],
        "Clean / Remove Distractions": [
            { label: "Cleanup Level", type: "select", options: ["Light", "Medium", "Strong"], val: "Medium", class: "clean-level" },
            { label: "Area Scope", type: "select", options: ["Auto", "Background Only"], val: "Auto", class: "clean-scope" },
            { label: "Detail Safety", type: "select", options: ["On", "Off"], val: "On", class: "clean-safety" }
        ],
        "Lighting Adjust": [
            { label: "Brightness Level", type: "select", options: ["Soft", "Balanced", "Bright"], val: "Soft", class: "light-bright" },
            { label: "Light Style", type: "select", options: ["Natural", "Dramatic"], val: "Natural", class: "light-style" },
            { label: "Subject Protection", type: "select", options: ["On", "Off"], val: "On", class: "light-protect" }
        ],
        "Color Adjust": [
            { label: "Color Tone", type: "select", options: ["Neutral", "Warm", "Cool"], val: "Neutral", class: "color-tone" },
            { label: "Saturation Level", type: "select", options: ["Balanced", "Soft"], val: "Balanced", class: "color-sat" },
            { label: "Color Accuracy", type: "select", options: ["On", "Off"], val: "On", class: "color-acc" }
        ],
        "Shadow / Depth Fix": [
            { label: "Shadow Strength", type: "select", options: ["Soft", "Natural"], val: "Soft", class: "shadow-str" },
            { label: "Depth Balance", type: "select", options: ["Auto", "Enhanced"], val: "Auto", class: "shadow-depth" },
            { label: "Ground Contact", type: "select", options: ["On", "Off"], val: "On", class: "shadow-contact" }
        ]
    };

    const data = {
        "Background": {
            actions: ["Blur", "Remove", "Replace", "Transparent", "Studio", "Extend / Expand", "Clean / Remove Distractions", "Lighting Adjust", "Color Adjust", "Shadow / Depth Fix"],
            helperTexts: {
                "Blur": "Depth effect",
                "Remove": "Clean cut",
                "Replace": "Scene match",
                "Transparent": "PNG output",
                "Studio": "Studio look",
                "Extend / Expand": "Frame fill",
                "Clean / Remove Distractions": "Declutter",
                "Lighting Adjust": "Light sync",
                "Color Adjust": "Color grade",
                "Shadow / Depth Fix": "Natural shadow"
            },
            intensityAllowed: ["Blur"],
            templates: {
                "Blur": { "English": "Blur the background naturally." },
                "Remove": { "English": "Remove the background completely, isolating the subject on a clean layer." },
                // Other templates are replaced by Brain Language Mapping in Default Mode
            }
        },
        "Face": {
            actions: ["Skin Smooth", "Blemish Remove", "Light Retouch"],
            helperTexts: {},
            intensityAllowed: [],
            templates: {
                "Skin Smooth": { "English": "Smooth facial skin naturally while preserving texture and facial details." },
                "Blemish Remove": { "English": "Remove visible blemishes and imperfections from the face while keeping a natural skin tone." },
                "Light Retouch": { "English": "Apply a light retouch to the face to enhance appearance without losing natural characteristics." }
            }
        },
        "Object / Subject": {
            actions: ["Remove Object", "Resize Subject"],
            helperTexts: {},
            intensityAllowed: ["Resize Subject"],
            templates: {
                "Remove Object": { "English": "Remove the specified object from the scene, filling the gap with context-aware details." },
                "Resize Subject": { "English": "Adjust the size of the main subject to better fit the composition while maintaining proportions." }
            }
        },
        "Color & Light": {
            actions: ["Brightness Adjust", "Color Correction"],
            helperTexts: {},
            intensityAllowed: ["Brightness Adjust"],
            templates: {
                "Brightness Adjust": { "English": "Adjust the overall brightness to ensure a balanced exposure." },
                "Color Correction": { "English": "Correct the color balance to achieve natural skin tones and accurate colors." }
            }
        },
        "Style": {
            actions: ["Artistic Style", "Cinematic Look"],
            helperTexts: {},
            intensityAllowed: [],
            templates: {
                "Artistic Style": { "English": "Apply an artistic style to the image, enhancing brush strokes and texture." },
                "Cinematic Look": { "English": "Apply a cinematic color grade with dramatic lighting." }
            }
        },
        "Quality": {
            actions: ["Enhance Quality", "Sharpen Image"],
            helperTexts: {},
            intensityAllowed: [],
            templates: {
                "Enhance Quality": { "English": "Upscale and enhance the overall image quality, reducing noise." },
                "Sharpen Image": { "English": "Sharpen the fine details of the image to make it look crisp." }
            }
        }
    };

    // --- Brain Language Mapping Pools ---
    // Note: 'Replace' is now handled via window.REPLACE_BRAIN from brain/default/background-replace.js
    const backgroundLanguagePools = {
        "Blur": {
            baseIntent: ["Apply a background blur", "Blur the background area", "Create a soft background blur effect"],
            intensity: {
                low: ["with a subtle blur strength", "using a light depth effect"],
                medium: ["with medium blur strength", "using a balanced depth effect", "with a natural level of blur"],
                high: ["with strong background separation", "using a pronounced depth effect"]
            },
            focus: {
                Auto: ["while automatically keeping the main subject in focus", "ensuring the subject remains sharp automatically"],
                Portrait: ["with portrait-style subject focus", "keeping the subject clearly defined like a portrait"]
            },
            blurFeel: {
                Natural: ["using a natural depth-based effect", "with realistic background separation"],
                Soft: ["using a soft and gentle blur transition", "with smooth and pleasing blur softness"]
            },
            safety: ["Preserve clean edges and realistic details.", "Avoid artifacts and maintain natural image quality."]
        },
        // 'Replace' removed here, used globally
        "Transparent": {
            intent: ["Make the background transparent", "Remove the background for a cutout", "Isolate the subject on a transparent layer"],
            edge: {
                "Soft": ["with soft, feathered edges", "using a gentle edge transition"],
                "Clean": ["with crisp, clean edges", "using distinct edge definition"]
            },
            shadow: {
                "On": ["while preserving natural cast shadows", "keeping the ground shadows visible"],
                "Off": ["removing all shadows for a flat look", "without any residual shadows"]
            },
            cut: {
                "Balanced": ["balancing precision and smoothness", "optimized for general use"],
                "Sharp": ["prioritizing sharp, precise cutouts", "ensuring every detail is cut accurately"]
            }
        },
        "Studio": {
            intent: ["Apply a studio background", "Set a professional studio backdrop", "Create a studio photography look"],
            style: {
                "Plain": ["using a solid, plain backdrop", "with a simple, distraction-free background"],
                "Gradient": ["using a smooth gradient backdrop", "with a graduated color background"]
            },
            light: {
                "Soft": ["lit by soft studio lights", "with gentle studio illumination"],
                "Balanced": ["with balanced professional lighting", "under even studio lighting"]
            },
            tone: {
                "Neutral": ["in a neutral color tone", "using a muted background shade"],
                "Bright": ["in a bright, high-key tone", "using a vibrant background shade"]
            }
        },
        "Extend / Expand": {
            intent: ["Extend the image boundaries", "Expand the canvas size", "Widen the frame"],
            direction: {
                "Auto": ["automatically in the best direction", "adjusting dimensions intelligently"],
                "Horizontal": ["horizontally to the sides", "expanding the width"],
                "Vertical": ["vertically top and bottom", "expanding the height"]
            },
            fill: {
                "Natural": ["filling with generative content that matches the scene", "extending the scenery naturally"],
                "Simple": ["filling with simple context-aware textures", "using basic scene extension"]
            },
            edge: {
                "Smooth": ["with seamless transitions", "blending the new areas smoothly"],
                "Clean": ["keeping the extension distinct", "maintaining structural lines"]
            }
        },
        "Clean / Remove Distractions": {
            intent: ["Clean up the background", "Remove distractions from the scene", "Declutter the image"],
            level: {
                "Light": ["removing only minor specks", "with a subtle cleanup pass"],
                "Medium": ["removing noticeable distractions", "cleaning up standard clutter"],
                "Strong": ["removing all possible distractions", "aggressively cleaning the scene"]
            },
            scope: {
                "Auto": ["across the entire image automatically", "detecting distractions everywhere"],
                "Background Only": ["focusing only on the background area", "leaving the subject untouched"]
            },
            safety: {
                "On": ["while preserving important details", "ensuring no key elements are lost"],
                "Off": ["prioritizing maximum cleanliness", "clearing everything necessary"]
            }
        },
        "Lighting Adjust": {
            intent: ["Adjust the background lighting", "Relight the scene", "Modify the ambient light"],
            brightness: {
                "Soft": ["to a soft, dim level", "creating a low-light atmosphere"],
                "Balanced": ["to a well-lit, balanced level", "ensuring even exposure"],
                "Bright": ["to a bright, airy level", "maximizing luminosity"]
            },
            style: {
                "Natural": ["maintaining a natural look", "mimicking realistic light sources"],
                "Dramatic": ["creating a dramatic, cinematic look", "adding contrast and depth"]
            },
            protect: {
                "On": ["without affecting the subject's lighting", "keeping the subject consistent"],
                "Off": ["allowing changes to affect the subject", "integrating the subject into the new light"]
            }
        },
        "Color Adjust": {
            intent: ["Adjust the background colors", "Grade the background color tones", "Modify the scene's palette"],
            tone: {
                "Neutral": ["towards neutral, balanced tones", "removing color casts"],
                "Warm": ["adding warmth to the scene", "shifting towards golden hues"],
                "Cool": ["adding a cool atmosphere", "shifting towards blueish hues"]
            },
            saturation: {
                "Balanced": ["maintaining natural saturation", "keeping colors vibrant but real"],
                "Soft": ["desaturating slightly for a soft look", "muting the colors gently"]
            },
            accuracy: {
                "On": ["preserving true-to-life colors", "ensuring color fidelity"],
                "Off": ["allowing for creative color shifts", "prioritizing mood over accuracy"]
            }
        },
        "Shadow / Depth Fix": {
            intent: ["Fix the background shadows", "Adjust shadow and depth", "Enhance the sense of depth"],
            strength: {
                "Soft": ["making shadows soft and diffused", "reducing shadow harshness"],
                "Natural": ["creating realistic, natural shadows", "mimicking real-world occlusion"]
            },
            balance: {
                "Auto": ["automatically balancing depth perception", "adjusting depth cues"],
                "Enhanced": ["enhancing the depth of field", "deepening the scene"]
            },
            contact: {
                "On": ["ensuring the subject feels grounded", "fixing contact shadows"],
                "Off": ["focusing purely on ambient shadows", "ignoring ground contact"]
            }
        }
    };

    function getRandom(arr) {
        if (!arr || arr.length === 0) return "";
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function createVisualGuide() {
        const container = document.createElement('div');
        container.className = 'visual-guide-container';
        container.style.flexBasis = '100%';
        container.style.width = '100%';

        const title = document.createElement('div');
        title.className = 'guide-title';
        title.textContent = 'Visual Guide';
        container.appendChild(title);

        const content = document.createElement('div');
        content.className = 'guide-content';
        container.appendChild(content);

        return container;
    }

    function updateVisualGuide(container, category, action, rowElement) {
        if (!container) return;
        const content = container.querySelector('.guide-content');
        if (!content) return;

        let html = '';

        // --- Level 1: Categories ---
        const categories = ["Background", "Face", "Object / Subject", "Color & Light", "Style", "Quality"];
        html += '<div class="guide-list-box">';
        categories.forEach(cat => {
            const isSelected = cat === category;
            const opacity = isSelected ? '1' : '0.4';
            const color = isSelected ? 'var(--primary-color)' : 'var(--text-color)';
            const weight = isSelected ? '700' : '400';
            html += `<span style="opacity: ${opacity}; color: ${color}; font-weight: ${weight}; transition: all 0.2s;">${cat}</span>`;
        });
        html += '</div>';

        // --- Level 2: Actions ---
        if (category === 'Background' && data["Background"]) {
            html += '<div class="guide-list-box">';
            data["Background"].actions.forEach(act => {
                const isSelected = act === action;
                const opacity = isSelected ? '1' : '0.4';
                const color = isSelected ? 'var(--primary-color)' : 'var(--text-color)';
                const weight = isSelected ? '700' : '400';
                html += `<span style="opacity: ${opacity}; color: ${color}; font-weight: ${weight}; transition: all 0.2s;">${act}</span>`;
            });
            html += '</div>';
        } else if (category && action) {
             html += `<div class="guide-list-box">`;
             html += `<span style="opacity: 1; color: var(--primary-color); font-weight: 700;">${action}</span>`;
             html += `</div>`;
        }

        // --- Level 3: Settings ---
        if (category === 'Background' && currentMode === 'default' && BACKGROUND_SETTINGS[action]) {
             html += '<div class="guide-list-box">';

             BACKGROUND_SETTINGS[action].forEach(setting => {
                 let settingHtml = `<div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;"><span style="font-weight: 600; font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.5px;">${setting.label}</span>`;
                 settingHtml += `<div style="display: flex; gap: 4px; flex-wrap: wrap;">`;

                 // Get current value
                 let currentVal = setting.val;
                 if (rowElement) {
                     const input = rowElement.querySelector(`.${setting.class}`);
                     if (input) currentVal = input.value;
                 }
                 // Normalizing types
                 if (setting.type === 'slider') currentVal = parseInt(currentVal);

                 if (setting.type === 'slider') {
                     // Display range numbers
                     for (let i = setting.min; i <= setting.max; i++) {
                         const isMatch = i == currentVal;
                         const weight = isMatch ? '700' : '400';
                         const opacity = isMatch ? '1' : '0.3';
                         const color = isMatch ? 'var(--primary-color)' : 'var(--text-color)';
                         settingHtml += `<span style="font-weight: ${weight}; opacity: ${opacity}; color: ${color}; font-size: 0.9em;">${i}</span>`;
                     }
                 } else if (setting.type === 'select') {
                     setting.options.forEach(opt => {
                         const isMatch = opt == currentVal;
                         const weight = isMatch ? '700' : '400';
                         const opacity = isMatch ? '1' : '0.3';
                         const color = isMatch ? 'var(--primary-color)' : 'var(--text-color)';
                         settingHtml += `<span style="font-weight: ${weight}; opacity: ${opacity}; color: ${color}; font-size: 0.9em;">${opt}</span>`;
                     });
                 }
                 settingHtml += `</div></div>`;
                 html += settingHtml;
             });

             html += '</div>';
        }

        content.innerHTML = html;
    }

    // Initialize first row
    setupRow(builderRowsContainer.querySelector('.builder-row'));

    // Add Row Logic
    addRowBtn.addEventListener('click', () => {
        const currentRows = builderRowsContainer.querySelectorAll('.builder-row');
        if (currentRows.length >= 6) {
            alert("Maximum 6 edits allowed.");
            return;
        }

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

        const label = templateRow.querySelector('.builder-static');
        if (label) label.textContent = "AND";

        templateRow.dataset.rowIndex = currentRows.length;
        builderRowsContainer.appendChild(templateRow);
        setupRow(templateRow);

        updateCategoryOptions();

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

        let visualGuide = rowElement.querySelector('.visual-guide');
        if (!visualGuide) {
            visualGuide = createVisualGuide();
            rowElement.appendChild(visualGuide);
            updateVisualGuide(visualGuide, categorySelect.value, actionSelect.value, rowElement);
        }

        categorySelect.addEventListener('change', () => {
            const cat = categorySelect.value;
            actionSelect.innerHTML = '<option value="">Action</option>';
            actionSelect.classList.add('hidden');
            intensityWrapper.classList.add('hidden');
            helperText.classList.add('hidden');
            helperText.textContent = "";

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
            updateVisualGuide(visualGuide, cat, "", rowElement);
        });

        actionSelect.addEventListener('change', () => {
            const cat = categorySelect.value;
            const act = actionSelect.value;

            if (act) {
                if (cat === 'Background' && BACKGROUND_SETTINGS[act]) {
                    updateRowUI(rowElement, cat, act);
                } else {
                    const existingExtra = rowElement.querySelector('.advanced-ui-container');
                    if (existingExtra) existingExtra.remove();

                    if (data[cat].intensityAllowed.includes(act)) {
                        intensityWrapper.classList.remove('hidden');
                    } else {
                        intensityWrapper.classList.add('hidden');
                    }

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

            updateVisualGuide(visualGuide, cat, act, rowElement);
        });

        intensitySlider.addEventListener('input', () => {
            intensityValue.textContent = intensitySlider.value;
        });
    }

    function updateRowUI(rowElement, category, action) {
        const intensityWrapper = rowElement.querySelector('.intensity-wrapper');
        const helperText = rowElement.querySelector('.helper-text');

        intensityWrapper.classList.add('hidden');
        helperText.classList.add('hidden');

        let extraContainer = rowElement.querySelector('.advanced-ui-container');
        if (extraContainer) extraContainer.remove();

        extraContainer = document.createElement('div');
        extraContainer.className = 'advanced-ui-container';
        extraContainer.style.flexBasis = '100%';
        extraContainer.style.marginTop = '15px';
        extraContainer.style.display = 'flex';
        extraContainer.style.flexWrap = 'wrap';
        extraContainer.style.gap = '20px';
        extraContainer.style.backgroundColor = 'var(--bg-color)';
        extraContainer.style.padding = '20px';
        extraContainer.style.borderRadius = '12px';

        if (currentMode === 'default' && BACKGROUND_SETTINGS[action]) {
            BACKGROUND_SETTINGS[action].forEach(setting => {
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
                    slider.className = 'intensity-slider';
                    slider.classList.add(setting.class);

                    const valDisplay = document.createElement('span');
                    valDisplay.textContent = setting.val;
                    valDisplay.style.minWidth = '20px';

                    slider.addEventListener('input', () => {
                        valDisplay.textContent = slider.value;
                        const guide = rowElement.querySelector('.visual-guide');
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
                        const guide = rowElement.querySelector('.visual-guide');
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
            // Advanced Mode Logic (Placeholder or Partial)
            // ... (keeping existing advanced mode structure if needed, but simplified for this task as we only focus on Default Mode updates mostly, but ensuring code structure remains valid)
             const blurTypes = [
                "Gaussian", "Depth / Portrait", "Lens (DSLR)", "Bokeh", "Motion",
                "Radial", "Selective", "Soft", "Multi-Depth", "Directional"
            ];
            // ... (Simulated Advanced Mode content just to keep valid JS)
            const typeWrapper = document.createElement('div');
             typeWrapper.innerHTML = '<span>Advanced settings available in Advanced Mode</span>';
             extraContainer.appendChild(typeWrapper);
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
                if (selectedCategories.includes(option.value) && option.value !== currentValue) {
                    option.disabled = true;
                } else {
                    option.disabled = false;
                }
            });
        });
    }

    createPromptBtn.addEventListener('click', () => {
        const rows = builderRowsContainer.querySelectorAll('.builder-row');
        const language = languageSelect.value;
        let promptParts = [];

        rows.forEach(row => {
            const cat = row.querySelector('.category-select').value;
            const act = row.querySelector('.action-select').value;

            if (cat && act) {
                if (currentMode === 'default' && cat === 'Background' && BACKGROUND_SETTINGS[act]) {
                    // Logic for all Background actions
                    const settingsConfig = BACKGROUND_SETTINGS[act];
                    const pool = backgroundLanguagePools[act];

                    if (act === 'Blur') {
                         const intensityInput = row.querySelector('.blur-intensity');
                         const focusInput = row.querySelector('.blur-focus');
                         const feelInput = row.querySelector('.blur-feel');

                         const intensityVal = intensityInput ? parseInt(intensityInput.value) : 5;
                         const focusVal = focusInput ? focusInput.value : "Auto";
                         const feelVal = feelInput ? feelInput.value : "Natural";

                         let lines = [getRandom(pool.baseIntent)];
                         let intensityPhrase = "";
                         if (intensityVal <= 3) intensityPhrase = getRandom(pool.intensity.low);
                         else if (intensityVal <= 6) intensityPhrase = getRandom(pool.intensity.medium);
                         else intensityPhrase = getRandom(pool.intensity.high);
                         lines.push(intensityPhrase);

                         if (pool.focus[focusVal]) lines.push(getRandom(pool.focus[focusVal]));
                         if (pool.blurFeel[feelVal]) lines.push(getRandom(pool.blurFeel[feelVal]));

                         const sentence1 = `${lines[0]} ${lines[1]} ${lines[2]}.`;
                         const sentence2 = `${lines[3]} ${getRandom(pool.safety)}`;
                         const sentence2Cap = sentence2.charAt(0).toUpperCase() + sentence2.slice(1);
                         promptParts.push(`${sentence1} ${sentence2Cap}`);

                    } else if (act === 'Replace') {
                        // Use window.REPLACE_BRAIN
                        const brain = window.REPLACE_BRAIN;

                        const envVal = row.querySelector('.replace-env').value;
                        const lightVal = row.querySelector('.replace-lighting').value;
                        const blendVal = row.querySelector('.replace-blend').value;

                        // Assembly:
                        // Sentence 1: Base Intent
                        const baseIntent = getRandom(brain.baseIntent);

                        // Sentence 2: Environment + Lighting
                        const envText = getRandom(brain.environment[envVal]);
                        const lightText = getRandom(brain.lighting[lightVal]);
                        // Combine: "using a natural... and automatically matching..."
                        // Need to check if texts already include connectors or start with prepositions
                        // "using..." "with..."
                        // We can join them.
                        const sentence2 = `${envText} and ${lightText}.`;

                        // Sentence 3: Blend Quality + Safety
                        const blendText = getRandom(brain.blend[blendVal]);
                        const safetyText = getRandom(brain.safety);
                        const sentence3 = `${blendText} while ${safetyText.toLowerCase().replace(/^\w/, c => c.toLowerCase())}`;
                        // Actually safety text is full sentence: "Preserve..."
                        // Let's make it: "Ensure [blendText]. [SafetyText]"?
                        // User example: "Ensure natural and smooth blending... Preserve natural colors..."
                        // blendText starts with "with..." or "ensuring..."

                        // Let's reconstruct based on user example:
                        // "Replace the background..." (Base)
                        // "... using a natural... and automatically matching..." (Env + Light)
                        // "Ensure [blendText]... Preserve..." (Blend + Safety)

                        // Refined Logic:
                        // 1. Base Intent.
                        // 2. Env + Light.
                        // 3. Blend + Safety.

                        const part1 = `${baseIntent}, ${envText} and ${lightText}.`;
                        // Capitalize first letter of Blend Text if it's a new sentence?
                        // "with clean..." -> "Ensure clean..."?
                        // Or just "Ensure " + blendText?
                        // blendText: "with clean..." -> "Ensure with clean..." (Wrong)
                        // blendText: "ensuring neat..." -> "Ensure ensuring..." (Wrong)

                        // Let's use the provided examples strictly.
                        // User Example:
                        // "Replace... using a natural... and automatically matching..."
                        // "Ensure natural and smooth blending..."
                        // "Preserve natural colors..."

                        // My blend texts start with "with..." or "ensuring...".
                        // If "with...", I can say "Proceed with...".
                        // Or I can just output them as they are but capitalize?
                        // "With natural and smooth blending..."

                        // Let's try to make it flow.
                        // Sentence 3: "[BlendText]. [SafetyText]"
                        // Capitalize BlendText.
                        const blendTextCap = blendText.charAt(0).toUpperCase() + blendText.slice(1);
                        const sentence3Final = `${blendTextCap}. ${safetyText}`;

                        promptParts.push(`${part1} ${sentence3Final}`);

                    } else if (act === 'Transparent') {
                        const edgeVal = row.querySelector('.trans-edge').value;
                        const shadowVal = row.querySelector('.trans-shadow').value;
                        const cutVal = row.querySelector('.trans-cut').value;

                        const intent = getRandom(pool.intent);
                        const edgeText = getRandom(pool.edge[edgeVal]);
                        const shadowText = getRandom(pool.shadow[shadowVal]);
                        const cutText = getRandom(pool.cut[cutVal]);

                        promptParts.push(`${intent} ${edgeText}. ${shadowText.charAt(0).toUpperCase() + shadowText.slice(1)}. ${cutText.charAt(0).toUpperCase() + cutText.slice(1)}.`);

                    } else if (act === 'Studio') {
                        const styleVal = row.querySelector('.studio-style').value;
                        const lightVal = row.querySelector('.studio-light').value;
                        const toneVal = row.querySelector('.studio-tone').value;

                        const intent = getRandom(pool.intent);
                        const styleText = getRandom(pool.style[styleVal]);
                        const lightText = getRandom(pool.light[lightVal]);
                        const toneText = getRandom(pool.tone[toneVal]);

                        promptParts.push(`${intent} ${styleText}. ${lightText.charAt(0).toUpperCase() + lightText.slice(1)}. ${toneText.charAt(0).toUpperCase() + toneText.slice(1)}.`);

                    } else if (act === 'Extend / Expand') {
                        const dirVal = row.querySelector('.extend-dir').value;
                        const fillVal = row.querySelector('.extend-fill').value;
                        const edgeVal = row.querySelector('.extend-edge').value;

                        const intent = getRandom(pool.intent);
                        const dirText = getRandom(pool.direction[dirVal]);
                        const fillText = getRandom(pool.fill[fillVal]);
                        const edgeText = getRandom(pool.edge[edgeVal]);

                        promptParts.push(`${intent} ${dirText}. ${fillText.charAt(0).toUpperCase() + fillText.slice(1)}. ${edgeText.charAt(0).toUpperCase() + edgeText.slice(1)}.`);

                    } else if (act === 'Clean / Remove Distractions') {
                        const levelVal = row.querySelector('.clean-level').value;
                        const scopeVal = row.querySelector('.clean-scope').value;
                        const safetyVal = row.querySelector('.clean-safety').value;

                        const intent = getRandom(pool.intent);
                        const levelText = getRandom(pool.level[levelVal]);
                        const scopeText = getRandom(pool.scope[scopeVal]);
                        const safetyText = getRandom(pool.safety[safetyVal]);

                        promptParts.push(`${intent} ${levelText}. ${scopeText.charAt(0).toUpperCase() + scopeText.slice(1)}. ${safetyText.charAt(0).toUpperCase() + safetyText.slice(1)}.`);

                    } else if (act === 'Lighting Adjust') {
                        const brightVal = row.querySelector('.light-bright').value;
                        const styleVal = row.querySelector('.light-style').value;
                        const protectVal = row.querySelector('.light-protect').value;

                        const intent = getRandom(pool.intent);
                        const brightText = getRandom(pool.brightness[brightVal]);
                        const styleText = getRandom(pool.style[styleVal]);
                        const protectText = getRandom(pool.protect[protectVal]);

                        promptParts.push(`${intent} ${brightText}. ${styleText.charAt(0).toUpperCase() + styleText.slice(1)}. ${protectText.charAt(0).toUpperCase() + protectText.slice(1)}.`);

                    } else if (act === 'Color Adjust') {
                         const toneVal = row.querySelector('.color-tone').value;
                         const satVal = row.querySelector('.color-sat').value;
                         const accVal = row.querySelector('.color-acc').value;

                         const intent = getRandom(pool.intent);
                         const toneText = getRandom(pool.tone[toneVal]);
                         const satText = getRandom(pool.saturation[satVal]);
                         const accText = getRandom(pool.accuracy[accVal]);

                         promptParts.push(`${intent} ${toneText}. ${satText.charAt(0).toUpperCase() + satText.slice(1)}. ${accText.charAt(0).toUpperCase() + accText.slice(1)}.`);

                    } else if (act === 'Shadow / Depth Fix') {
                        const strVal = row.querySelector('.shadow-str').value;
                        const depthVal = row.querySelector('.shadow-depth').value;
                        const contactVal = row.querySelector('.shadow-contact').value;

                        const intent = getRandom(pool.intent);
                        const strText = getRandom(pool.strength[strVal]);
                        const depthText = getRandom(pool.balance[depthVal]);
                        const contactText = getRandom(pool.contact[contactVal]);

                        promptParts.push(`${intent} ${strText}. ${depthText.charAt(0).toUpperCase() + depthText.slice(1)}. ${contactText.charAt(0).toUpperCase() + contactText.slice(1)}.`);
                    }

                } else if (data[cat] && data[cat].templates[act]) {
                    // Standard Logic
                    let text = data[cat].templates[act][language] || data[cat].templates[act]["English"];
                    promptParts.push(text);
                }
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
