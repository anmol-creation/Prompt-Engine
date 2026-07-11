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

    // Make visible only when content is actually rendered (done in renderCategoryGuide)
    // container.classList.remove('hidden');

    // Default view removed per user request
    // renderDefaultGuide();
}

/**
 * Renders the Default Static View (Reference vs Result)
 */
export function renderDefaultGuide() {
    const container = getContainer();
    if (!container) return;

    // Clear the container and hide it since the default view is no longer needed
    container.innerHTML = '';
    container.classList.add('hidden');
}

/**
 * Renders the Category Specific Guide (Grid View)
 * @param {string} title - The Category Name (e.g., "Hair" or "Select Category")
 * @param {Array} items - Array of objects { name, img }
 */
export function renderCategoryGuide(title, items) {
    const container = getContainer();
    if (!container) return;

    // Show container when dynamic content is being rendered
    container.classList.remove('hidden');

    // Determine Title text based on context
    const displayTitle = title === "Select Category" || title === "Start"
        ? "Visual Guide: Select an Option"
        : `Visual Guide: ${title}`;

    // Generate HTML for grid items
    // Removed onerror fallback to placehold.co to avoid the "Image Not Found" box popping up everywhere.
    // Let the browser show a broken image icon natively or rely on CSS object-fit/bg color,
    // which is less intrusive than a glaring white box.
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
        <h2 style="text-align: center; margin-bottom: 1rem;">${displayTitle}</h2>
        <div class="vg-grid-container">
            ${gridItemsHtml}
        </div>
    `;
}
