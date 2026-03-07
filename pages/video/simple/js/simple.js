// Video Simple Mode Initialization
export function initVideoSimpleMode() {
    console.log("Video Simple Mode Initialized (Grid Layout)");

    // Get all category cards
    const categoryCards = document.querySelectorAll('.video-category-card');
    const uiPlaceholder = document.getElementById('video-ui-placeholder');

    // Add click event listeners to each card
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const categoryId = card.dataset.category;
            const categoryName = card.querySelector('.card-title').textContent;

            console.log(`Selected Category: ${categoryId}`);

            // Show placeholder text
            if (uiPlaceholder) {
                uiPlaceholder.classList.remove('hidden');
                uiPlaceholder.innerHTML = `Loading UI for <strong>${categoryName}</strong>...`;

                // Optional: Scroll to the placeholder smoothly
                uiPlaceholder.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }

            // Visual feedback: Highlight selected card
            categoryCards.forEach(c => {
                c.style.borderColor = 'var(--border-color, #eee)';
                c.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.05)';
            });

            card.style.borderColor = 'var(--primary-color, #007bff)';
            card.style.boxShadow = '0 8px 25px rgba(52, 152, 219, 0.15)';
        });
    });
}
