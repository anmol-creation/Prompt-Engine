// Dark / Light mode toggle
// localStorage theme save/load

export function initTheme() {
    if (window.layoutReadyFired) {
        setupThemeLogic();
    } else {
        document.addEventListener('layoutReady', setupThemeLogic);
    }
}

function setupThemeLogic() {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Safety check if button exists
    if (!toggleButton) return;

    const iconSpan = toggleButton.querySelector('.icon');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        // Remove both classes first to be clean
        body.classList.remove('dark-mode', 'light-mode');
        body.classList.add(savedTheme);
        updateButtonState(savedTheme === 'dark-mode');
    } else {
        // If no saved theme, and we are default dark mode (HTML has dark-mode class)
        // We should ensure button state matches
        if (body.classList.contains('dark-mode')) {
            updateButtonState(true);
        }
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        if (isDarkMode) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.setItem('theme', 'light-mode');
        }
        updateButtonState(isDarkMode);
    });

    function updateButtonState(isDarkMode) {
        if (!iconSpan) return;
        if (isDarkMode) {
            iconSpan.textContent = '☀️';
            toggleButton.setAttribute('aria-label', 'Switch to Light Mode');
        } else {
            iconSpan.textContent = '🌙';
            toggleButton.setAttribute('aria-label', 'Switch to Dark Mode');
        }
    }
}
