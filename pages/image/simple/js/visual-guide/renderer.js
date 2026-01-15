/**
 * Visual Guide Renderer
 * Renders the static "Visual Guide: Expected Results" section.
 */

export function initVisualGuide() {
    const container = document.getElementById('simple-visual-guide-container');
    if (!container) return;

    // Ensure the container has the correct class
    container.classList.add('visual-guide-container');

    // Render static HTML structure
    container.innerHTML = `
        <h2>Visual Guide & Expected Results</h2>

        <!-- Header: Reference & Model Selector -->
        <div class="vg-header">
            <div class="vg-reference">
                <div class="vg-placeholder-ref">Original Image</div>
                <span>Reference</span>
            </div>
            <div class="vg-model-selector">
                <select id="vg-model-select">
                    <option value="chatgpt" selected>ChatGPT</option>
                    <option value="gemini">Gemini</option>
                </select>
            </div>
        </div>

        <!-- Categories -->
        <div class="vg-gallery">
            ${renderCategory("Fix Image")}
            ${renderCategory("Customization")}
            ${renderCategory("Generate New")}
        </div>
    `;

    // Make visible
    container.classList.remove('hidden');
}

function renderCategory(title) {
    return `
        <div class="vg-category-section">
            <h3>${title}</h3>
            <div class="vg-image-grid">
                <div class="vg-image-item">
                    <div class="vg-image-placeholder">Result A</div>
                </div>
                <div class="vg-image-item">
                    <div class="vg-image-placeholder">Result B</div>
                </div>
            </div>
        </div>
    `;
}
