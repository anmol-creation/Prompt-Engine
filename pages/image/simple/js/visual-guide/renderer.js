/**
 * Visual Guide Renderer
 * Renders the static "Visual Guide: Expected Results" section.
 */

export function initVisualGuide() {
    const container = document.getElementById('simple-visual-guide-container');
    if (!container) return;

    // Ensure the container has the correct class
    container.classList.add('visual-guide-container');

    // Render static Images (Reference & Result)
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
                    <div class="vg-overlay">Background blur applied, subject preserved</div>
                </div>
            </div>

        </div>
    `;

    // Make visible
    container.classList.remove('hidden');
}
