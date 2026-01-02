// Entry point for Video Page
import { initTheme } from '../../assets/js/utils.js';
import { categoriesData } from './js/data/categories.js';
import { createVisualGuide, updateVisualGuide } from './js/visual-guide/index.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Theme
    initTheme();

    // 2. Initialize Builder Logic
    initVideoBuilder();

    // 3. Initialize Visual Guide
    initVisualGuide();
});

function initVideoBuilder() {
    const builderRowsContainer = document.getElementById('builder-rows');
    const addRowBtn = document.getElementById('add-row-btn');

    if (!builderRowsContainer) return;

    // Initial Row Setup
    setupRow(builderRowsContainer.querySelector('.builder-row'));

    // Add Row Handler
    if (addRowBtn) {
        addRowBtn.addEventListener('click', () => {
            const rowCount = builderRowsContainer.querySelectorAll('.builder-row').length;
            if (rowCount >= 6) {
                alert("Maximum 6 attributes allowed.");
                return;
            }

            const newRow = createNewRow(rowCount);
            builderRowsContainer.appendChild(newRow);
            setupRow(newRow);
        });
    }

    // Create Prompt Handler
    const createBtn = document.getElementById('create-prompt-btn');
    if (createBtn) {
        createBtn.addEventListener('click', generatePrompt);
    }
}

function initVisualGuide() {
    const outputArea = document.querySelector('.output-area');
    if (outputArea) {
        const visualGuide = createVisualGuide();
        // Insert after outputArea
        outputArea.parentNode.insertBefore(visualGuide, outputArea.nextSibling);
    }
}

function createNewRow(index) {
    const row = document.createElement('div');
    row.classList.add('builder-row');
    row.dataset.rowIndex = index;

    row.innerHTML = `
        <span class="builder-static">Attribute ${index + 1}</span>
        <select class="builder-dropdown category-select" aria-label="Select Category">
            <option value="">Category</option>
        </select>
        <select class="builder-dropdown action-select hidden" aria-label="Select Option">
            <option value="">Option</option>
        </select>
    `;

    return row;
}

function setupRow(row) {
    const categorySelect = row.querySelector('.category-select');
    const actionSelect = row.querySelector('.action-select');

    // Populate Categories
    Object.keys(categoriesData).forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        categorySelect.appendChild(option);
    });

    // Category Change Listener
    categorySelect.addEventListener('change', (e) => {
        const selectedCat = e.target.value;

        // Reset Action Select
        actionSelect.innerHTML = '<option value="">Option</option>';
        actionSelect.classList.add('hidden');

        if (selectedCat && categoriesData[selectedCat]) {
            const actions = categoriesData[selectedCat].actions;

            actions.forEach(action => {
                const opt = document.createElement('option');
                opt.value = action;
                opt.textContent = action;
                actionSelect.appendChild(opt);
            });

            actionSelect.classList.remove('hidden');
        }
    });
}

function generatePrompt() {
    const rows = document.querySelectorAll('.builder-row');
    let promptParts = [];

    rows.forEach(row => {
        const cat = row.querySelector('.category-select').value;
        const act = row.querySelector('.action-select').value;

        if (cat && act) {
            promptParts.push(`${cat}: ${act}`);
        }
    });

    const output = document.getElementById('prompt-output');
    if (promptParts.length > 0) {
        output.textContent = promptParts.join(' | ');
    } else {
        output.textContent = "Please select at least one category and option.";
    }
}
