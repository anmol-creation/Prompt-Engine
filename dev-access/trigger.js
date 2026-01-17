// dev-access/trigger.js
import { toggleDevMode } from './access.js';

/**
 * Attaches a 7-tap/click event listener to the specified selector.
 * Tapping 7 times within 2 seconds toggles developer mode.
 *
 * @param {string} selector - The CSS selector for the trigger element.
 */
export function initDevTrigger(selector = '.ac-trigger') {
    const triggerEl = document.querySelector(selector);
    if (!triggerEl) return;

    let clickCount = 0;
    let timeout;

    triggerEl.addEventListener('click', (e) => {
        // Prevent default text selection or similar issues if needed
        e.preventDefault();

        clickCount++;

        // Reset count if too much time passes between clicks
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            clickCount = 0;
        }, 2000); // 2 seconds to complete the combo

        if (clickCount >= 7) {
            toggleDevMode();
            clickCount = 0; // Reset after successful toggle
        }
    });
}
