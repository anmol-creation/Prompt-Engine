// Video Simple Mode Initialization
export function initVideoSimpleMode() {
    console.log("Video Simple Mode Initialized (Text-Only Redirection Grid)");

    // Get all category cards
    const categoryCards = document.querySelectorAll('.video-category-card');

    // Add click event listeners to each card to trigger redirection
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const categoryId = card.dataset.category;
            console.log(`Redirecting to: ${categoryId}.html`);

            // Redirect to the corresponding HTML file
            if (categoryId) {
                window.location.href = `${categoryId}.html`;
            }
        });
    });
}
