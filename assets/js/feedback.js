export function initFeedback() {
    const starContainer = document.getElementById('star-rating');
    const stars = document.querySelectorAll('.star');
    const formContainer = document.getElementById('feedback-form');
    const detailsDiv = document.getElementById('feedback-details');
    const messageInput = document.getElementById('feedback-message');
    const submitBtn = document.getElementById('feedback-submit');
    const successDiv = document.getElementById('feedback-success');
    const categoryInputs = document.querySelectorAll('input[name="feedback-category"]');

    if (!starContainer || !stars.length) return; // Safety check

    let currentRating = 0;
    let isLocked = false;

    // Helper to visualize stars
    const updateStarsVisuals = (maxVal, cls) => {
        stars.forEach(s => {
            const val = parseInt(s.dataset.value);
            if (val <= maxVal) s.classList.add(cls);
            else s.classList.remove(cls);
        });
    };

    // Hover Handling
    stars.forEach(star => {
        star.addEventListener('mouseenter', () => {
            if (!isLocked) {
                const val = parseInt(star.dataset.value);
                updateStarsVisuals(val, 'hover');
            }
        });

        // Click Handling
        star.addEventListener('click', () => {
            const val = parseInt(star.dataset.value);
            currentRating = val;
            isLocked = true;

            // Clear hover, set active
            stars.forEach(s => s.classList.remove('hover'));
            updateStarsVisuals(val, 'active');

            // Show details if hidden
            if (detailsDiv && (getComputedStyle(detailsDiv).display === 'none')) {
                detailsDiv.style.display = 'flex';
                // Focus message
                if(messageInput) setTimeout(() => messageInput.focus(), 100);
            }
            validate();
        });
    });

    // Mouse leave container -> clear hover if not locked
    starContainer.addEventListener('mouseleave', () => {
        if (!isLocked) {
            updateStarsVisuals(0, 'hover');
        }
    });

    // Validation
    function validate() {
        if (!messageInput || !submitBtn) return;
        const msg = messageInput.value.trim();
        // Rating > 0 AND Message not empty
        if (currentRating > 0 && msg.length > 0) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }

    if (messageInput) {
        messageInput.addEventListener('input', validate);
    }

    // Submit
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            let category = "Other";
            if (categoryInputs) {
                categoryInputs.forEach(inp => {
                    if (inp.checked) category = inp.value;
                });
            }

            const data = {
                rating: currentRating,
                category: category,
                message: messageInput ? messageInput.value.trim() : "",
                device_info: navigator.userAgent,
                timestamp: new Date().toISOString()
            };

            console.log("Feedback Submitted:", data);

            // Hide form, show success
            if (formContainer) formContainer.style.display = 'none';
            if (successDiv) successDiv.style.display = 'block';
        });
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFeedback);
} else {
    initFeedback();
}
