const graphicData = {
    "Design Format": {
        "Social Media Design": [
            { title: "Square Post", prompt: "Instagram/Facebook Square Post (1:1 aspect ratio, optimized for feed)" },
            { title: "Portrait Post", prompt: "Instagram Portrait Post (4:5 aspect ratio, tall feed post)" },
            { title: "Story / Reel", prompt: "Vertical Story / Reel / Shorts Background (9:16 aspect ratio, full screen)" },
            { title: "YouTube Thumbnail", prompt: "YouTube Video Thumbnail (16:9 aspect ratio, high click-through rate design)" },
            { title: "Twitter / X Post", prompt: "Twitter / X Post Image (16:9 aspect ratio, engaging visual)" },
            { title: "LinkedIn Banner", prompt: "LinkedIn / Professional Article Banner (wide format, clean corporate design)" },
            { title: "Page Cover Header", prompt: "Facebook / LinkedIn Page Cover Header (ultra-wide landscape)" },
            { title: "Pinterest Pin", prompt: "Pinterest Pin (Long vertical 2:3 aspect ratio, highly visual and informative)" },
            { title: "Carousel Post", prompt: "Instagram Carousel Post (Seamless panoramic layout for swiping)" },
            { title: "Profile Picture", prompt: "Social Media Profile Picture / Avatar (Circular framed focus)" }
        ],
        "Branding & Logos": [
            { title: "Minimalist Logo", prompt: "Minimalist / Corporate Logo" },
            { title: "Mascot Logo", prompt: "Mascot / Esports Logo" },
            { title: "Typography Logo", prompt: "Typography / Lettermark Logo" },
            { title: "App Icon", prompt: "App Icon Design" }
        ],
        "Advertising & Posters": [
            { title: "Movie Poster", prompt: "Cinematic Movie Poster" },
            { title: "Event Flyer", prompt: "Event Flyer / Pamphlet" },
            { title: "Magazine Cover", prompt: "Magazine Cover" },
            { title: "Billboard Mockup", prompt: "Billboard Ad Mockup" }
        ],
        "UI/UX Concept Mockups": [
            { title: "Mobile UI Screen", prompt: "Mobile App UI Screen" },
            { title: "Landing Page", prompt: "Website Landing Page Concept" },
            { title: "Game Interface", prompt: "Game Interface / HUD" }
        ],
        "Merchandise & Apparel": [
            { title: "T-shirt Graphic", prompt: "T-shirt / Hoodie Graphic" },
            { title: "Sticker Pack", prompt: "Die-cut Sticker Pack" },
            { title: "Seamless Pattern", prompt: "Seamless Pattern" }
        ],
        "Product Packaging": [
            { title: "Box Packaging", prompt: "Box Packaging Mockup" },
            { title: "Bottle Label", prompt: "Bottle / Can Label" },
            { title: "Cosmetic Jar", prompt: "Cosmetic Jar Mockup" }
        ],
        "Typography & Text Effects": [
            { title: "3D Neon Text", prompt: "3D Glowing Neon Text" },
            { title: "Vintage Typography", prompt: "Vintage / Retro Typography" },
            { title: "Metallic Lettering", prompt: "Metallic / Chrome 3D Lettering" }
        ]
    },
    "Subject & Core Element": {
        "People & Characters": [
            { title: "Business Professional", prompt: "Business Professional" },
            { title: "Fitness Model", prompt: "Fitness Model" },
            { title: "Fashion Model", prompt: "Fashion Model" },
            { title: "Cyberpunk Character", prompt: "Cyberpunk Character" }
        ],
        "Products & Objects": [
            { title: "Tech Gadget", prompt: "Tech Gadget / Smartphone" },
            { title: "Sneaker", prompt: "Sneaker / Shoe" },
            { title: "Coffee Cup", prompt: "Coffee Cup / Mug" },
            { title: "Luxury Perfume", prompt: "Luxury Perfume Bottle" }
        ],
        "Nature & Environment": [
            { title: "Forest Landscape", prompt: "Lush Forest Landscape" },
            { title: "Cityscape", prompt: "Futuristic Cityscape" },
            { title: "Minimalist Plant", prompt: "Minimalist Plant/Leaf" },
            { title: "Space Galaxy", prompt: "Space / Galaxy" }
        ],
        "Abstract & Geometry": [
            { title: "Floating Shapes", prompt: "Floating Abstract Shapes" },
            { title: "Geometric Patterns", prompt: "Geometric Patterns" },
            { title: "Fluid Forms", prompt: "Fluid / Liquid Forms" }
        ]
    },
    "Art Style & Theme": {
        "Modern & Clean": [
            { title: "Minimalist Vector", prompt: "Minimalist Vector" },
            { title: "Corporate", prompt: "Corporate / Professional" },
            { title: "Flat Design", prompt: "Flat Design" }
        ],
        "Trendy & Expressive": [
            { title: "Cyberpunk", prompt: "Cyberpunk / Futuristic" },
            { title: "Synthwave", prompt: "Synthwave / Retro 80s" },
            { title: "Y2K Grunge", prompt: "Y2K / Grunge" },
            { title: "Pop Art", prompt: "Pop Art" }
        ],
        "3D & Rendered": [
            { title: "3D Isometric", prompt: "3D Isometric" },
            { title: "Claymorphism", prompt: "Claymorphism" },
            { title: "Hyper-realistic", prompt: "Hyper-realistic Render" }
        ],
        "Artistic & Painted": [
            { title: "Watercolor", prompt: "Watercolor Style" },
            { title: "Oil Painting", prompt: "Oil Painting Texture" },
            { title: "Hand-drawn", prompt: "Hand-drawn Sketch" }
        ]
    },
    "Color Palette": {
        "Vibrant & Bold": [
            { title: "Neon Pink & Blue", prompt: "Neon Pink & Blue" },
            { title: "High Contrast Primary", prompt: "High Contrast Primary Colors" },
            { title: "Warm Gradients", prompt: "Warm Sunset Gradients" }
        ],
        "Subtle & Minimal": [
            { title: "Monochrome", prompt: "Monochrome (Black & White)" },
            { title: "Soft Pastels", prompt: "Soft Pastels" },
            { title: "Muted Earthy", prompt: "Muted Earthy Tones" },
            { title: "Sepia Vintage", prompt: "Sepia / Vintage" }
        ],
        "Professional": [
            { title: "Corporate Blue & Silver", prompt: "Corporate Blue & Silver" },
            { title: "Luxury Gold & Black", prompt: "Luxury Gold & Black" },
            { title: "Clean White & Grey", prompt: "Clean White & Grey" }
        ]
    },
    "Typography / Text Style": {
        "Modern Fonts": [
            { title: "Bold Sans-Serif", prompt: "Bold Sans-Serif" },
            { title: "Clean Geometric", prompt: "Clean Geometric" },
            { title: "Minimalist Thin", prompt: "Minimalist Thin Font" }
        ],
        "Classic Fonts": [
            { title: "Elegant Serif", prompt: "Elegant Serif" },
            { title: "Vintage Typewriter", prompt: "Vintage Typewriter" },
            { title: "Classic Newspaper", prompt: "Classic Newspaper" }
        ],
        "Expressive Text": [
            { title: "Handwritten Calligraphy", prompt: "Handwritten Calligraphy" },
            { title: "Graffiti Style", prompt: "Graffiti / Street Style" },
            { title: "Chunky Retro", prompt: "Chunky Retro Font" }
        ],
        "3D Text": [
            { title: "Metallic Chrome", prompt: "Metallic Chrome Letters" },
            { title: "Inflated Balloon", prompt: "Inflated / Balloon Text" },
            { title: "Glowing Neon", prompt: "Glowing Neon Typography" }
        ]
    },
    "Layout & Composition": {
        "Framing": [
            { title: "Centered Focus", prompt: "Centered Focus" },
            { title: "Rule of Thirds", prompt: "Rule of Thirds" },
            { title: "Asymmetrical Balance", prompt: "Asymmetrical Balance" }
        ],
        "Space": [
            { title: "Heavy Negative Space", prompt: "Heavy Negative Space" },
            { title: "Grid Layout", prompt: "Grid Layout" },
            { title: "Edge-to-Edge", prompt: "Edge-to-Edge / Bleed" }
        ],
        "Perspective": [
            { title: "Flat 2D Perspective", prompt: "Flat / 2D Perspective" },
            { title: "Dynamic Angle", prompt: "Dynamic Angle" },
            { title: "Isometric Top-Down", prompt: "Isometric Top-Down" }
        ]
    },
    "Lighting & Effects": {
        "Lighting Types": [
            { title: "Soft Studio Lighting", prompt: "Soft Studio Lighting" },
            { title: "Dramatic Cinematic", prompt: "Dramatic Cinematic Light" },
            { title: "Harsh Sunlight", prompt: "Harsh Sunlight / Hard Shadows" }
        ],
        "Textures & Effects": [
            { title: "Film Grain", prompt: "Film Grain / Noise" },
            { title: "Glossy Plastic", prompt: "Glossy Plastic Finish" },
            { title: "Matte Paper", prompt: "Matte Paper Texture" },
            { title: "Holographic Foil", prompt: "Holographic Foil" }
        ]
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
            items.forEach((item, index) => {
                const option = document.createElement('option');
                option.value = index; // Store index to access full object later
                option.textContent = item.title;
                level3.appendChild(option);
            });
        } else {
            level3.style.display = 'none';
            level3.disabled = true;
        }
    });

    // Handle Level 3 Change
    level3.addEventListener('change', () => {
        if (level3.value !== "") {
            addBtn.disabled = false;
        } else {
            addBtn.disabled = true;
        }
    });

    // Handle Add Button
    addBtn.addEventListener('click', () => {
        const selectedIndex = level3.value;
        const selectedPrefix = level1.value; // E.g., "Design Format"
        const selectedLevel2 = level2.value;

        if (selectedIndex !== "" && selectedPrefix && selectedLevel2) {
            const item = graphicData[selectedPrefix][selectedLevel2][selectedIndex];
            addChip(selectedPrefix, item.title, item.prompt);

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
    function addChip(category, title, prompt) {
        const chipId = Date.now().toString();

        // Data object for the chip
        const chipData = {
            id: chipId,
            category: category,
            title: title,
            prompt: prompt
        };

        chips.push(chipData);

        const chipEl = document.createElement('div');
        chipEl.className = 'chip';
        chipEl.id = `chip-${chipId}`;

        // Show the clean title in the UI
        chipEl.innerHTML = `
            <strong>${category}:</strong> ${title}
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

        // Simple logic for joining chip prompt values (AI uses the detailed prompt)
        const promptParts = chips.map(c => `${c.category}: ${c.prompt}`);
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
