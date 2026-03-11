const graphicData = {
    "Design Format": {
        "Social Media & Web": ["YouTube Thumbnail", "Instagram Post / Square Ad", "Social Media Story / Reel", "Web Banner / Channel Art"],
        "Branding & Logos": ["Minimalist / Corporate Logo", "Mascot / Esports Logo", "Typography / Lettermark Logo", "App Icon Design"],
        "Advertising & Posters": ["Cinematic Movie Poster", "Event Flyer / Pamphlet", "Magazine Cover", "Billboard Ad Mockup"],
        "UI/UX Concept Mockups": ["Mobile App UI Screen", "Website Landing Page Concept", "Game Interface / HUD"],
        "Merchandise & Apparel": ["T-shirt / Hoodie Graphic", "Die-cut Sticker Pack", "Seamless Pattern"],
        "Product Packaging": ["Box Packaging Mockup", "Bottle / Can Label", "Cosmetic Jar Mockup"],
        "Typography & Text Effects": ["3D Glowing Neon Text", "Vintage / Retro Typography", "Metallic / Chrome 3D Lettering"]
    }
    // More categories like Typography Style, Color Palette will be added later
};

document.addEventListener('DOMContentLoaded', () => {
    const level1 = document.getElementById('gd-level1');
    const level2 = document.getElementById('gd-level2');
    const level3 = document.getElementById('gd-level3');
    const addBtn = document.getElementById('gd-add-btn');
    const chipContainer = document.getElementById('graphic-chip-container');
    const generateBtn = document.getElementById('generate-btn');
    const finalPrompt = document.getElementById('final-prompt');
    const copyBtn = document.getElementById('copy-btn');

    let chips = [];

    // Initialize Level 1
    for (const key in graphicData) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = key;
        level1.appendChild(option);
    }

    // Handle Level 1 Change
    level1.addEventListener('change', () => {
        const selectedLevel1 = level1.value;

        // Reset Level 2 & 3
        level2.innerHTML = '<option value="" disabled selected>Select sub-category...</option>';
        level3.innerHTML = '<option value="" disabled selected>Select specific item...</option>';
        level3.style.display = 'none';
        level3.disabled = true;
        addBtn.disabled = true;

        if (selectedLevel1 && graphicData[selectedLevel1]) {
            level2.disabled = false;
            const subCategories = graphicData[selectedLevel1];

            // Populate Level 2
            for (const subKey in subCategories) {
                const option = document.createElement('option');
                option.value = subKey;
                option.textContent = subKey;
                level2.appendChild(option);
            }
        } else {
            level2.disabled = true;
        }
    });

    // Handle Level 2 Change
    level2.addEventListener('change', () => {
        const selectedLevel1 = level1.value;
        const selectedLevel2 = level2.value;

        // Reset Level 3
        level3.innerHTML = '<option value="" disabled selected>Select specific item...</option>';
        addBtn.disabled = true;

        if (selectedLevel1 && selectedLevel2 && graphicData[selectedLevel1][selectedLevel2]) {
            level3.style.display = 'block';
            level3.disabled = false;

            const items = graphicData[selectedLevel1][selectedLevel2];
            items.forEach(item => {
                const option = document.createElement('option');
                option.value = item;
                option.textContent = item;
                level3.appendChild(option);
            });
        } else {
            level3.style.display = 'none';
            level3.disabled = true;
        }
    });

    // Handle Level 3 Change
    level3.addEventListener('change', () => {
        if (level3.value) {
            addBtn.disabled = false;
        } else {
            addBtn.disabled = true;
        }
    });

    // Handle Add Button
    addBtn.addEventListener('click', () => {
        const selectedValue = level3.value;
        const selectedPrefix = level1.value; // E.g., "Design Format"

        if (selectedValue) {
            addChip(selectedPrefix, selectedValue);

            // Reset selections
            level1.value = '';

            level2.innerHTML = '<option value="" disabled selected>Select sub-category...</option>';
            level2.disabled = true;

            level3.innerHTML = '<option value="" disabled selected>Select specific item...</option>';
            level3.style.display = 'none';
            level3.disabled = true;

            addBtn.disabled = true;
        }
    });

    // Function to add a chip
    function addChip(category, value) {
        const chipId = Date.now().toString();

        // Data object for the chip
        const chipData = {
            id: chipId,
            category: category,
            value: value
        };

        chips.push(chipData);

        const chipEl = document.createElement('div');
        chipEl.className = 'chip';
        chipEl.id = `chip-${chipId}`;

        // Strong tags to differentiate the label and the value
        chipEl.innerHTML = `
            <strong>${category}:</strong> ${value}
            <span class="chip-close" data-id="${chipId}">&times;</span>
        `;

        chipContainer.appendChild(chipEl);

        // Add delete listener
        chipEl.querySelector('.chip-close').addEventListener('click', function() {
            const idToRemove = this.getAttribute('data-id');
            chips = chips.filter(c => c.id !== idToRemove);
            chipEl.remove();
        });
    }

    // Handle Generate Prompt Button
    generateBtn.addEventListener('click', () => {
        if (chips.length === 0) {
            finalPrompt.value = "Please add some options first!";
            return;
        }

        // Simple logic for joining chip values
        const promptParts = chips.map(c => `${c.category}: ${c.value}`);
        finalPrompt.value = "Create a graphic design with the following features:\n\n" + promptParts.join(",\n");
    });

    // Handle Copy Prompt Button
    copyBtn.addEventListener('click', () => {
        finalPrompt.select();
        document.execCommand('copy');

        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    });
});
