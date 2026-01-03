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

    // Initialize Capability Section
    initCapabilitySection();
});

function initCapabilitySection() {
    const fields = ['Images', 'Video', 'Text', 'Code', 'Design'];
    const categories = ['Background', 'Face', 'Style', 'HTML', 'Quality', 'Motion'];
    const tools = ['ChatGPT', 'Gemini', 'Claude', 'Midjourney', 'Stable Diffusion', 'Perplexity'];

    populateRandomRow('cap-row-fields', fields);
    populateRandomRow('cap-row-categories', categories);
    populateRandomRow('cap-row-tools', tools);
}

function populateRandomRow(elementId, items) {
    const container = document.getElementById(elementId);
    if (!container) return;

    // Shuffle array
    const shuffled = [...items].sort(() => 0.5 - Math.random());

    shuffled.forEach(item => {
        const tag = document.createElement('div');
        tag.className = 'capability-tag';
        tag.textContent = item;
        container.appendChild(tag);
    });
}
