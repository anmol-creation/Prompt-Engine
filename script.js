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

            } else {
                intensityWrapper.classList.add('hidden');
                helperText.classList.add('hidden');
            }
        });

        intensitySlider.addEventListener('input', () => {
            intensityValue.textContent = intensitySlider.value;
        });
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
