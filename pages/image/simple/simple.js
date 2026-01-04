// Simple Mode Logic
import { simpleBrainMap } from './simple.brain.map.js';

export function initSimpleMode() {
    console.log("Initializing Simple Mode (Inline Dropdown Version)");

    const mainCategoryDropdown = document.getElementById('simple-main-category');
    const subCategoryDropdown = document.getElementById('simple-sub-category');
    const outputContainer = document.getElementById('simple-output-container');
    const finalPrompt = document.getElementById('simple-final-prompt');
    const visualGuideContainer = document.getElementById('simple-visual-guide-container');
    const copyBtn = document.getElementById('simple-copy-btn');

    // State
    let selectedCategory = null;

    // Initialize Main Categories
    setupDropdown(mainCategoryDropdown, Object.keys(simpleBrainMap), (category) => {
        selectedCategory = category;
        resetSubCategory();

        // Populate and show sub-category
        const subOptions = Object.keys(simpleBrainMap[category]);
        setupDropdown(subCategoryDropdown, subOptions, (subAction) => {
            generatePrompt(category, subAction);
        });

        // Open Sub Category immediately? Or just show it?
        // "Sub-category opens only after main category is selected"
        // I'll show the dropdown.
        subCategoryDropdown.classList.remove('hidden');

        // Auto-open sub-category dropdown for smoother flow
        toggleDropdown(subCategoryDropdown, true);
    });

    function resetSubCategory() {
        subCategoryDropdown.classList.add('hidden');
        updateDropdownText(subCategoryDropdown, 'Select Option');
        outputContainer.classList.add('hidden');
        visualGuideContainer.classList.add('hidden');
    }

    function generatePrompt(category, subAction) {
        const promptText = simpleBrainMap[category][subAction];

        finalPrompt.textContent = promptText;
        outputContainer.classList.remove('hidden');
        visualGuideContainer.classList.remove('hidden');

        // Scroll to output
        outputContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Generic Dropdown Setup
    function setupDropdown(dropdownElement, items, onSelectCallback) {
        const trigger = dropdownElement.querySelector('.dropdown-trigger');
        const menu = dropdownElement.querySelector('.dropdown-menu');

        // Clear existing items
        menu.innerHTML = '';

        // Populate items
        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'dropdown-item';
            div.textContent = item;
            div.addEventListener('click', (e) => {
                e.stopPropagation();
                updateDropdownText(dropdownElement, item);
                toggleDropdown(dropdownElement, false);
                onSelectCallback(item);
            });
            menu.appendChild(div);
        });

        // Toggle Event
        // Remove old listeners to avoid duplicates if re-initialized?
        // Better to clone and replace node if strict cleanup needed, but here we just re-assign.
        // Actually, initSimpleMode calls once.

        // Check if listener attached?
        // Since we might re-populate sub-cat, we only want to attach trigger listener once.
        if (!dropdownElement.dataset.hasListener) {
            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                const isActive = dropdownElement.classList.contains('active');
                closeAllDropdowns(); // Close others
                if (!isActive) {
                    toggleDropdown(dropdownElement, true);
                }
            });
            dropdownElement.dataset.hasListener = 'true';
        }
    }

    function updateDropdownText(dropdown, text) {
        const textSpan = dropdown.querySelector('.selected-text');
        textSpan.textContent = text;
    }

    function toggleDropdown(dropdown, show) {
        const menu = dropdown.querySelector('.dropdown-menu');
        if (show) {
            dropdown.classList.add('active');
            menu.classList.remove('hidden');
        } else {
            dropdown.classList.remove('active');
            menu.classList.add('hidden');
        }
    }

    function closeAllDropdowns() {
        document.querySelectorAll('.custom-dropdown').forEach(d => toggleDropdown(d, false));
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        closeAllDropdowns();
    });

    // Copy Button Logic
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(finalPrompt.textContent).then(() => {
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                setTimeout(() => copyBtn.textContent = originalText, 2000);
            });
        });
    }
}
