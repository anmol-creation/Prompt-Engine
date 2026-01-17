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
        <div style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap;">

            <!-- Reference Image -->
            <div style="text-align: center;">
                <h4 style="margin-bottom: 0.5rem; color: #888;">Reference</h4>
                <img
                    src="https://res.cloudinary.com/daxgt0qfj/image/upload/v1768615619/20250429_091534_kwuuft.jpg"
                    alt="Visual Guide Reference"
                    style="max-width: 300px; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); opacity: 0.8;"
                >
            </div>

            <!-- Example Result -->
            <div style="text-align: center;">
                <h4 style="margin-bottom: 0.5rem; color: var(--primary-color);">Example Result</h4>
                <img
                    src="https://res.cloudinary.com/daxgt0qfj/image/upload/v1768618100/file_0000000082f47207ad79d88ee163f39f_ddep8j.png"
                    alt="Visual Guide Result"
                    style="max-width: 300px; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.4); border: 2px solid var(--primary-color);"
                >
            </div>

        </div>
    `;

    // Make visible
    container.classList.remove('hidden');
}
