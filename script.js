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

    // Data Structure
    const data = {
        "Background": {
            actions: ["Blur", "Remove", "Replace"],
            templates: {
                "Blur": "Blur the background naturally while keeping the main subject sharp and clear. Maintain realistic lighting and avoid over-processing.",
                "Remove": "Remove the background completely, isolating the subject on a clean layer.",
                "Replace": "Replace the background with a suitable context that matches the subject's lighting."
            }
        },
        "Face": {
            actions: ["Skin Smooth", "Blemish Remove", "Light Retouch"],
            templates: {
                "Skin Smooth": "Smooth facial skin naturally while preserving texture and details. Do not alter facial features or create an artificial look.",
                "Blemish Remove": "Remove visible blemishes and imperfections from the face while keeping a natural skin tone.",
                "Light Retouch": "Apply a light retouch to the face to enhance appearance without losing natural characteristics."
            }
        },
        "Object / Subject": {
            actions: ["Remove Object", "Resize Subject"],
            templates: {
                "Remove Object": "Remove the specified object from the scene, filling the gap with context-aware background details.",
                "Resize Subject": "Adjust the size of the main subject to better fit the composition while maintaining correct proportions."
            }
        },
        "Color & Light": {
            actions: ["Brightness Adjust", "Color Correction"],
            templates: {
                "Brightness Adjust": "Adjust the overall brightness to ensure a balanced exposure, avoiding crushed blacks or blown-out highlights.",
                "Color Correction": "Correct the color balance to achieve natural skin tones and accurate environmental colors."
            }
        },
        "Style": {
            actions: ["Artistic Style", "Cinematic Look"],
            templates: {
                "Artistic Style": "Apply an artistic style to the image, enhancing brush strokes and texture for a creative effect.",
                "Cinematic Look": "Apply a cinematic color grade with dramatic lighting and a widescreen aspect ratio feel."
            }
        },
        "Quality": {
            actions: ["Enhance Quality", "Sharpen Image"],
            templates: {
                "Enhance Quality": "Upscale and enhance the overall image quality, reducing noise and artifacts.",
                "Sharpen Image": "Sharpen the fine details of the image to make it look crisp and high-definition."
            }
        }
    };

    // Initialize first row
    setupRow(builderRowsContainer.querySelector('.builder-row'));

    // Add Row Logic
    addRowBtn.addEventListener('click', () => {
        const currentRows = builderRowsContainer.querySelectorAll('.builder-row');
        if (currentRows.length >= 2) {
            alert("Maximum 2 edits allowed for this phase.");
            return;
        }

        // Clone the first row structure (resetting values)
        const templateRow = currentRows[0].cloneNode(true);
        // Reset values
        const selects = templateRow.querySelectorAll('select');
        selects.forEach(s => s.value = "");
        templateRow.querySelector('.action-select').classList.add('hidden');
        templateRow.querySelector('.action-select').innerHTML = '<option value="">Action</option>';
        templateRow.querySelector('.intensity-wrapper').classList.add('hidden');
        templateRow.querySelector('.intensity-slider').value = 5;
        templateRow.querySelector('.intensity-value').textContent = "5";

        // Remove "Create Prompt" label from second row to clean up UI?
        // The design shows "Create Prompt [Cat] [Act]". If we add another row,
        // it might look like "Create Prompt [Cat] [Act] \n [Cat] [Act]".
        // Or maybe just remove the text span.
        const label = templateRow.querySelector('.builder-static');
        if (label) label.textContent = "AND"; // Change "Create Prompt" to "AND" or remove

        templateRow.dataset.rowIndex = currentRows.length;
        builderRowsContainer.appendChild(templateRow);
        setupRow(templateRow);

        // Hide add button if max reached
        if (currentRows.length + 1 >= 2) {
            addRowBtn.style.display = 'none';
        }
    });

    function setupRow(rowElement) {
        const categorySelect = rowElement.querySelector('.category-select');
        const actionSelect = rowElement.querySelector('.action-select');
        const intensityWrapper = rowElement.querySelector('.intensity-wrapper');
        const intensitySlider = rowElement.querySelector('.intensity-slider');
        const intensityValue = rowElement.querySelector('.intensity-value');

        categorySelect.addEventListener('change', () => {
            const cat = categorySelect.value;
            // Reset Action
            actionSelect.innerHTML = '<option value="">Action</option>';
            actionSelect.classList.add('hidden');
            intensityWrapper.classList.add('hidden');

            if (cat && data[cat]) {
                data[cat].actions.forEach(action => {
                    const opt = document.createElement('option');
                    opt.value = action;
                    opt.textContent = action;
                    actionSelect.appendChild(opt);
                });
                actionSelect.classList.remove('hidden');
            }
        });

        actionSelect.addEventListener('change', () => {
            if (actionSelect.value) {
                // Show intensity for all actions for now (per plan)
                // Or we could customize based on action name
                intensityWrapper.classList.remove('hidden');
            } else {
                intensityWrapper.classList.add('hidden');
            }
        });

        intensitySlider.addEventListener('input', () => {
            intensityValue.textContent = intensitySlider.value;
        });
    }

    // Create Prompt Logic
    createPromptBtn.addEventListener('click', () => {
        const rows = builderRowsContainer.querySelectorAll('.builder-row');
        let promptParts = [];

        rows.forEach(row => {
            const cat = row.querySelector('.category-select').value;
            const act = row.querySelector('.action-select').value;
            const intensity = row.querySelector('.intensity-slider').value;

            if (cat && act && data[cat] && data[cat].templates[act]) {
                let text = data[cat].templates[act];
                // Append Intensity info if it deviates from default?
                // Or just always append?
                // Plan: "Generate a BASIC, GENERIC prompt text... No AI execution".
                // "If user selects: Background -> Blur -> Intensity 5... Generate text like: Blur the background naturally..."
                // It seems intensity 5 implies "natural" or "standard".
                // Let's stick to the template text as the base.
                // Maybe if intensity is very high (8-10), we add "Apply with high intensity."

                if (intensity >= 8) {
                     text += " Apply this effect with high intensity.";
                } else if (intensity <= 3) {
                     text += " Apply this effect subtly.";
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
