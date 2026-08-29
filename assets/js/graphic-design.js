const graphicData = {
    "Design Format": {
        "Social Media Design": [
            "Instagram/Facebook Square Post (1:1 aspect ratio, optimized for feed)",
            "Instagram Portrait Post (4:5 aspect ratio, tall feed post)",
            "Vertical Story / Reel / Shorts Background (9:16 aspect ratio, full screen)",
            "YouTube Video Thumbnail (16:9 aspect ratio, high click-through rate design)",
            "Twitter / X Post Image (16:9 aspect ratio, engaging visual)",
            "LinkedIn / Professional Article Banner (wide format, clean corporate design)",
            "Facebook / LinkedIn Page Cover Header (ultra-wide landscape)",
            "Pinterest Pin (Long vertical 2:3 aspect ratio, highly visual and informative)",
            "Instagram Carousel Post (Seamless panoramic layout for swiping)",
            "Social Media Profile Picture / Avatar (Circular framed focus)"
        ],
        "Branding & Logos": ["Minimalist / Corporate Logo", "Mascot / Esports Logo", "Typography / Lettermark Logo", "App Icon Design"],
        "Advertising & Posters": ["Cinematic Movie Poster", "Event Flyer / Pamphlet", "Magazine Cover", "Billboard Ad Mockup"],
        "UI/UX Concept Mockups": ["Mobile App UI Screen", "Website Landing Page Concept", "Game Interface / HUD"],
        "Merchandise & Apparel": ["T-shirt / Hoodie Graphic", "Die-cut Sticker Pack", "Seamless Pattern"],
        "Product Packaging": ["Box Packaging Mockup", "Bottle / Can Label", "Cosmetic Jar Mockup"],
        "Typography & Text Effects": ["3D Glowing Neon Text", "Vintage / Retro Typography", "Metallic / Chrome 3D Lettering"]
    },
    "Subject & Core Element": {
        "People & Characters": ["Business Professional", "Fitness Model", "Fashion Model", "Cyberpunk Character"],
        "Products & Objects": ["Tech Gadget / Smartphone", "Sneaker / Shoe", "Coffee Cup / Mug", "Luxury Perfume Bottle"],
        "Nature & Environment": ["Lush Forest Landscape", "Futuristic Cityscape", "Minimalist Plant/Leaf", "Space / Galaxy"],
        "Abstract & Geometry": ["Floating Abstract Shapes", "Geometric Patterns", "Fluid / Liquid Forms"]
    },
    "Art Style & Theme": {
        "Modern & Clean": ["Minimalist Vector", "Corporate / Professional", "Flat Design"],
        "Trendy & Expressive": ["Cyberpunk / Futuristic", "Synthwave / Retro 80s", "Y2K / Grunge", "Pop Art"],
        "3D & Rendered": ["3D Isometric", "Claymorphism", "Hyper-realistic Render"],
        "Artistic & Painted": ["Watercolor Style", "Oil Painting Texture", "Hand-drawn Sketch"]
    },
    "Color Palette": {
        "Vibrant & Bold": ["Neon Pink & Blue", "High Contrast Primary Colors", "Warm Sunset Gradients"],
        "Subtle & Minimal": ["Monochrome (Black & White)", "Soft Pastels", "Muted Earthy Tones", "Sepia / Vintage"],
        "Professional": ["Corporate Blue & Silver", "Luxury Gold & Black", "Clean White & Grey"]
    },
    "Typography / Text Style": {
        "Modern Fonts": ["Bold Sans-Serif", "Clean Geometric", "Minimalist Thin Font"],
        "Classic Fonts": ["Elegant Serif", "Vintage Typewriter", "Classic Newspaper"],
        "Expressive Text": ["Handwritten Calligraphy", "Graffiti / Street Style", "Chunky Retro Font"],
        "3D Text": ["Metallic Chrome Letters", "Inflated / Balloon Text", "Glowing Neon Typography"]
    },
    "Layout & Composition": {
        "Framing": ["Centered Focus", "Rule of Thirds", "Asymmetrical Balance"],
        "Space": ["Heavy Negative Space", "Grid Layout", "Edge-to-Edge / Bleed"],
        "Perspective": ["Flat / 2D Perspective", "Dynamic Angle", "Isometric Top-Down"]
    },
    "Lighting & Effects": {
        "Lighting Types": ["Soft Studio Lighting", "Dramatic Cinematic Light", "Harsh Sunlight / Hard Shadows"],
        "Textures & Effects": ["Film Grain / Noise", "Glossy Plastic Finish", "Matte Paper Texture", "Holographic Foil"]
    }
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
