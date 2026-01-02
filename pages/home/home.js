import { initTheme } from '../../assets/js/utils.js';
import { TypingAnimator } from './js/typing-animation.js';

document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    // Initialize Typing Animation
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        const phrases = [
            "Thinking in words",
            "Choosing the right words",
            "Structured prompts",
            "Prompt engineering",
            "Field-specific expertise",
            "AI-specific writing",
            "Multiple trials",
            "One task, multiple prompts",
            "Describing while thinking"
        ];

        new TypingAnimator(typingElement, phrases, {
            typingSpeed: 60,
            erasingSpeed: 30,
            delayAfterType: 2000,
            delayAfterErase: 500
        });
    }
});
