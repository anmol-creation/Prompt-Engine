import { initSimpleMode } from './init.js';

export function initVideoSimpleMode() {
    console.log("Starting Video Simple Mode Menu...");

    const menuContainer = document.getElementById('video-simple-menu-container');
    const builderContainer = document.getElementById('simple-builder-container');
    const cards = document.querySelectorAll('.video-category-card');

    if (!menuContainer || !builderContainer) {
        console.error("Video Simple Mode: Required containers not found.");
        return;
    }

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;

            if (category === 'text-to-video') {
                // Switch UI
                menuContainer.classList.add('hidden');
                builderContainer.classList.remove('hidden');

                // Initialize the new dropdown builder
                initSimpleMode();
            } else {
                // Keep the old behavior for other cards
                window.location.href = `pages/video/${category}.html`;
            }
        });
    });
}
