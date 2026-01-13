const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf_placeholder/viewform"; // Replace with actual URL

export function initFeedback() {
    // 1. Find the feedback container
    const feedbackContainer = document.querySelector('.footer-feedback');
    if (!feedbackContainer) return;

    // 2. Clear existing complex UI (stars, forms)
    feedbackContainer.innerHTML = '';

    // 3. Create simplified UI
    const heading = document.createElement('h4');
    heading.textContent = "We value your feedback";

    const link = document.createElement('a');
    link.href = GOOGLE_FORM_URL;
    link.target = "_blank";
    link.rel = "noopener noreferrer"; // Security best practice
    link.className = "feedback-link-btn"; // We can style this or use inline styles for safety
    link.textContent = "Give Feedback";
    link.style.display = "inline-block";
    link.style.padding = "10px 20px";
    link.style.backgroundColor = "var(--primary-color, #007bff)";
    link.style.color = "#fff";
    link.style.borderRadius = "5px";
    link.style.textDecoration = "none";
    link.style.marginTop = "10px";
    link.style.fontWeight = "bold";

    feedbackContainer.appendChild(heading);
    feedbackContainer.appendChild(link);
}

// Auto-initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFeedback);
} else {
    initFeedback();
}
