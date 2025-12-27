document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const iconSpan = toggleButton.querySelector('.icon');
    const textSpan = toggleButton.querySelector('.text');

    // Check for saved user preference, if any, on load of the website
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateButtonState(savedTheme === 'dark-mode');
    } else {
        // Default is light mode, but check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // Requirements say Default mode: Light. So we stick to light unless user explicitly toggles.
            // However, it's polite to respect system pref, but the requirement is "Default mode: Light".
            // So I will stick to Light as default state initially, unless I want to be smart.
            // I'll stick to Light default as requested.
        }
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');

        // Save preference
        if (isDarkMode) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.setItem('theme', 'light-mode');
        }

        updateButtonState(isDarkMode);
    });

    function updateButtonState(isDarkMode) {
        if (isDarkMode) {
            iconSpan.textContent = '☀️';
            textSpan.textContent = 'Light Mode';
        } else {
            iconSpan.textContent = '🌙';
            textSpan.textContent = 'Dark Mode';
        }
    }
});
