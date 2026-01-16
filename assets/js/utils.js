// Dark / Light mode toggle
// localStorage theme save/load

export function initTheme() {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Safety check if button exists
    if (!toggleButton) return;

    const iconSpan = toggleButton.querySelector('.icon');
    const textSpan = toggleButton.querySelector('.text');

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
        if (!iconSpan || !textSpan) return;
        if (isDarkMode) {
            iconSpan.textContent = '☀️';
            textSpan.textContent = 'Light Mode';
        } else {
            iconSpan.textContent = '🌙';
            textSpan.textContent = 'Dark Mode';
        }
    }
}
