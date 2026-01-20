/**
 * Visual Guide Renderer
 * Renders the Visual Guide section. Can be static (default) or dynamic (category-based).
 */

// Helper to get container
function getContainer() {
    return document.getElementById('simple-visual-guide-container');
}

/**
 * Initializes the Visual Guide (starts with default view)
 */
export function initVisualGuide() {
    const container = getContainer();
    if (!container) return;

    // Ensure the container has the correct class
    container.classList.add('visual-guide-container');

    // Make visible
    container.classList.remove('hidden');

    // Render default initially
    renderDefaultGuide();
}

/**
 * Renders the Default Static View (Reference vs Result)
 */
export function renderDefaultGuide() {
    const container = getContainer();
    if (!container) return;

    container.innerHTML = `
        <h2 style="text-align: center; margin-bottom: 1rem;">Visual Guide: Expected Results</h2>
        <div class="vg-flex-container">

            <!-- Reference Image -->
            <div class="vg-item-group">
                <h4 class="vg-label-ref">Reference</h4>
                <div class="vg-image-wrapper" tabindex="0">
                    <img
                        src="https://res.cloudinary.com/daxgt0qfj/image/upload/v1768615619/20250429_091534_kwuuft.jpg"
                        alt="Visual Guide Reference"
                        class="vg-image vg-image-ref"
                    >
                    <div class="vg-overlay">Original image uploaded by user</div>
                </div>
            </div>

            <!-- Example Result -->
            <div class="vg-item-group">
                <h4 class="vg-label-res">Example Result</h4>
                <div class="vg-image-wrapper" tabindex="0">
                    <img
                        src="https://res.cloudinary.com/daxgt0qfj/image/upload/v1768618100/file_0000000082f47207ad79d88ee163f39f_ddep8j.png"
                        alt="Visual Guide Result"
                        class="vg-image vg-image-res"
                    >
                    <div class="vg-overlay">Add Background blur</div>
                </div>
                <div class="vg-image-wrapper" tabindex="0">
                    <img
                        src="https://res.cloudinary.com/daxgt0qfj/image/upload/v1768843224/file_00000000bd8471fa9c01eb6ef00f1837_evhde0.png"
                        alt="Visual Guide Result"
                        class="vg-image vg-image-res"
                    >
                    <div class="vg-overlay">Green Screen Background</div>
                </div>
            </div>

        </div>
    `;
}

/**
 * Renders the Category Specific Guide (Grid View)
 * @param {string} title - The Category Name (e.g., "Hair")
 * @param {Array} items - Array of objects { name, img }
 */
export function renderCategoryGuide(title, items) {
    const container = getContainer();
    if (!container) return;

    // Generate HTML for grid items
    const gridItemsHtml = items.map(item => `
        <div class="vg-grid-item">
            <div class="vg-grid-image-wrapper">
                <img src="${item.img}" alt="${item.name}" loading="lazy">
            </div>
            <div class="vg-grid-label">${item.name}</div>
        </div>
    `).join('');

    // Update Container HTML
    container.innerHTML = `
        <h2 style="text-align: center; margin-bottom: 1rem;">Visual Guide: ${title} Styles</h2>
        <div class="vg-grid-container">
            ${gridItemsHtml}
        </div>
    `;
}
