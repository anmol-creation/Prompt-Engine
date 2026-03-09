document.addEventListener('DOMContentLoaded', () => {
    // --- Data ---
    const categoryOptions = {
        "Subject": ["Man", "Woman", "Golden Retriever", "Futuristic Car", "Robot"],
        "Customization": ["Casual clothes", "Cyberpunk gear", "Business suit", "Astronaut suit"],
        "Action": ["Walking slowly", "Running fast", "Standing still", "Flying", "Looking at the camera"],
        "Background": ["Busy cyberpunk street", "Misty dark forest", "Modern office", "Neon-lit alley"],
        "Camera Shot": ["Extreme Close-up", "Medium Shot", "Wide Angle", "Drone Shot"],
        "Camera Movement": ["Static/Locked", "Pan Left", "Slow Zoom-in", "Fast Zoom-out", "Orbiting subject"],
        "Lighting": ["Golden hour", "Cinematic dark", "Neon lighting", "Volumetric light rays"],
        "Effects": ["None", "Heavy rain", "Glowing embers", "Cinematic slow-motion", "Motion blur"],
        "Art Style": ["Photorealistic", "3D Pixar Style", "Anime/Manga", "Cinematic Film"]
    };

    // --- State ---
    let selectedChips = [];

    // --- DOM Elements ---
    const mainCategorySelect = document.getElementById('t2v-main-category');
    const subOptionSelect = document.getElementById('t2v-sub-option');
    const addBtn = document.getElementById('t2v-add-btn');
    const chipContainer = document.getElementById('t2v-chip-container');
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const resultTextarea = document.getElementById('final-prompt');

    // --- Event Listeners ---

    // 1. Main Category Change
    mainCategorySelect.addEventListener('change', () => {
        const category = mainCategorySelect.value;
        const options = categoryOptions[category] || [];

        // Reset and populate sub-option dropdown
        subOptionSelect.innerHTML = '<option value="" disabled selected>Select option...</option>';
        options.forEach(opt => {
            const optionEl = document.createElement('option');
            optionEl.value = opt;
            optionEl.textContent = opt;
            subOptionSelect.appendChild(optionEl);
        });

        // Enable sub-option dropdown
        subOptionSelect.disabled = false;

        // Disable add button until an option is selected
        addBtn.disabled = true;
    });

    // Sub-option change (to enable add button)
    subOptionSelect.addEventListener('change', () => {
        if (subOptionSelect.value) {
            addBtn.disabled = false;
        } else {
            addBtn.disabled = true;
        }
    });

    // 2. Add Button Click
    addBtn.addEventListener('click', () => {
        const category = mainCategorySelect.value;
        const optionValue = subOptionSelect.value;

        if (!optionValue) return;

        // Add to state
        const chipData = { category, value: optionValue, id: Date.now() };
        selectedChips.push(chipData);

        // Render chip
        renderChip(chipData);

        // Reset sub-option
        subOptionSelect.value = '';
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
