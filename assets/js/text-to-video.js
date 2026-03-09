document.addEventListener('DOMContentLoaded', () => {
    // --- Data ---
    const t2vData = {
        "Subject": {
            "Humans & Characters": ["Men", "Women", "Kids", "Elderly", "Crowd", "Cyberpunk Hacker", "Astronaut"],
            "Animals & Wildlife": ["Dog / Puppy", "Cat / Kitten", "Lion / Tiger", "Eagle / Bird", "Horse"],
            "Vehicles & Transport": ["Sports Car", "Vintage Car", "Superbike", "Airplane", "Spaceship"],
            "Nature & Landscapes": ["Mountains", "Waterfall", "Dense Forest", "Ocean", "Desert"],
            "Architecture & Buildings": ["Skyscrapers", "Ancient Temple", "Castle", "Modern House", "Cyberpunk Cityscape"],
            "Food & Drink": ["Coffee pouring", "Sizzling Burger", "Fresh Fruit", "Cocktail"],
            "Objects & Products": ["Floating Sneaker", "Glowing Crystal", "Ancient Book", "Tech Gadgets"],
            "Sci-Fi & Fantasy Beings": ["Robot / Cyborg", "Dragon", "Alien", "Monster", "Fairy"],
            "Abstract & Elements": ["Fluid Simulation", "Fire / Flames", "Glowing Orbs", "Smoke", "Water Splash"]
        },
        "Customization": {
            "Default": ["Casual Clothes", "Business Suit", "Sci-Fi Armor", "Vintage Dress"]
        },
        "Action": {
            "Default": ["Walking slowly", "Running fast", "Standing still", "Flying", "Looking at the camera"]
        },
        "Background": {
            "Default": ["Busy cyberpunk street", "Misty dark forest", "Modern office", "Neon-lit alley"]
        },
        "Camera Shot": {
            "Default": ["Extreme Close-up", "Medium Shot", "Wide Angle", "Drone Shot"]
        },
        "Camera Movement": {
            "Default": ["Static/Locked", "Pan Left", "Slow Zoom-in", "Fast Zoom-out", "Orbiting subject"]
        },
        "Lighting": {
            "Default": ["Golden hour", "Cinematic dark", "Neon lighting", "Volumetric light rays"]
        },
        "Effects": {
            "Default": ["None", "Heavy rain", "Glowing embers", "Cinematic slow-motion", "Motion blur"]
        },
        "Art Style": {
            "Default": ["Photorealistic", "3D Pixar Style", "Anime/Manga", "Cinematic Film"]
        }
    };

    // --- State ---
    let selectedChips = [];

    // --- DOM Elements ---
    const level1Select = document.getElementById('t2v-level1');
    const level2Select = document.getElementById('t2v-level2');
    const level3Select = document.getElementById('t2v-level3');
    const addBtn = document.getElementById('t2v-add-btn');
    const chipContainer = document.getElementById('t2v-chip-container');
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const resultTextarea = document.getElementById('final-prompt');

    // --- Event Listeners ---

    // 1. Level 1 Change
    level1Select.addEventListener('change', () => {
        const category = level1Select.value;
        const categoryData = t2vData[category];

        // Reset lower levels
        level2Select.innerHTML = '<option value="" disabled selected>Select option...</option>';
        level3Select.innerHTML = '<option value="" disabled selected>Select specific item...</option>';
        level3Select.disabled = true;
        addBtn.disabled = true;

        if (categoryData && categoryData["Default"]) {
            // It's a flat list (2-tier)
            level3Select.style.display = 'none';
            const options = categoryData["Default"];
            options.forEach(opt => {
                const optionEl = document.createElement('option');
                optionEl.value = opt;
                optionEl.textContent = opt;
                level2Select.appendChild(optionEl);
            });
            level2Select.disabled = false;
        } else if (categoryData) {
            // It's a nested list (3-tier)
            level3Select.style.display = 'block';
            const keys = Object.keys(categoryData);
            keys.forEach(key => {
                const optionEl = document.createElement('option');
                optionEl.value = key;
                optionEl.textContent = key;
                level2Select.appendChild(optionEl);
            });
            level2Select.disabled = false;
        }
    });

    // 2. Level 2 Change
    level2Select.addEventListener('change', () => {
        const category = level1Select.value;
        const categoryData = t2vData[category];

        if (categoryData && categoryData["Default"]) {
            // 2-tier: Selection complete, enable add button
            addBtn.disabled = false;
        } else if (categoryData) {
            // 3-tier: Populate Level 3
            const subCategory = level2Select.value;
            const items = categoryData[subCategory] || [];

            level3Select.innerHTML = '<option value="" disabled selected>Select specific item...</option>';
            items.forEach(item => {
                const optionEl = document.createElement('option');
                optionEl.value = item;
                optionEl.textContent = item;
                level3Select.appendChild(optionEl);
            });

            level3Select.disabled = false;
            addBtn.disabled = true; // Wait for Level 3 selection
        }
    });

    // 3. Level 3 Change
    level3Select.addEventListener('change', () => {
        if (level3Select.value) {
            addBtn.disabled = false;
        } else {
            addBtn.disabled = true;
        }
    });

    // 4. Add Button Click
    addBtn.addEventListener('click', () => {
        const category = level1Select.value;
        const categoryData = t2vData[category];
        let optionValue = '';

        if (categoryData && categoryData["Default"]) {
            optionValue = level2Select.value;
        } else {
            optionValue = level3Select.value;
        }

        if (!optionValue) return;

        // Add to state
        const chipData = { category, value: optionValue, id: Date.now() };
        selectedChips.push(chipData);

        // Render chip
        renderChip(chipData);

        // Reset
        if (categoryData && categoryData["Default"]) {
            level2Select.value = '';
        } else {
            level3Select.value = '';
        }
        addBtn.disabled = true;
    });

    // 3. Render Chip
    function renderChip(chipData) {
        const chipEl = document.createElement('div');
        chipEl.className = 'chip';
        chipEl.dataset.id = chipData.id;

        // Visual format: "Category: Value" (or just Value, but category adds context)
        // Matching simple mode 'Fix Stack' style
        chipEl.innerHTML = `
            <span><strong>${chipData.category}:</strong> ${chipData.value}</span>
            <span class="chip-close" title="Remove">&times;</span>
        `;

        // Add remove listener to the close button
        const closeBtn = chipEl.querySelector('.chip-close');
        closeBtn.addEventListener('click', () => {
            removeChip(chipData.id, chipEl);
        });

        chipContainer.appendChild(chipEl);
    }

    // 4. Remove Chip
    function removeChip(id, chipEl) {
        // Remove from state
        selectedChips = selectedChips.filter(chip => chip.id !== id);
        // Remove from DOM
        chipEl.remove();
    }

    // 5. Generate Prompt
    generateBtn.addEventListener('click', () => {
        if (selectedChips.length === 0) {
            alert('Please add at least one element to generate a prompt.');
            return;
        }

        // Extract just the values for the prompt
        // Alternatively, could format it based on categories if we wanted a structured prompt
        const promptValues = selectedChips.map(chip => chip.value);

        // Filter out "None" effects
        const filteredValues = promptValues.filter(v => v !== 'None');

        const finalPrompt = filteredValues.join(', ') + '.';

        resultTextarea.value = finalPrompt;
    });

    // 6. Copy Prompt
    copyBtn.addEventListener('click', () => {
        const promptText = resultTextarea.value;
        if (!promptText) {
            alert('No prompt to copy! Please generate one first.');
            return;
        }

        navigator.clipboard.writeText(promptText).then(() => {
            const originalText = copyBtn.innerText;
            copyBtn.innerText = 'Copied!';
            setTimeout(() => {
                copyBtn.innerText = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy prompt.');
        });
    });
});
