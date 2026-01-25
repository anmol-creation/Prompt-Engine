
export class TypingAnimator {
    constructor(element, phrases, options = {}) {
        this.element = element;
        this.phrases = phrases;
        this.loop = true;
        this.typingSpeed = options.typingSpeed || 100;
        this.erasingSpeed = options.erasingSpeed || 50;
        this.delayAfterType = options.delayAfterType || 2000;
        this.delayAfterErase = options.delayAfterErase || 500;

        this.currentPhraseIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;

        this.animate();
    }

    animate() {
        const currentPhrase = this.phrases[this.currentPhraseIndex];
        const currentText = currentPhrase.substring(0, this.isDeleting ? this.currentCharIndex - 1 : this.currentCharIndex + 1);

        if (this.element.tagName === 'INPUT' || this.element.tagName === 'TEXTAREA') {
            this.element.placeholder = currentText;
        } else {
            this.element.textContent = currentText;
        }

        if (this.isDeleting) {
            this.currentCharIndex--;
        } else {
            this.currentCharIndex++;
        }

        let typeSpeed = this.typingSpeed;

        if (this.isDeleting) {
            typeSpeed = this.erasingSpeed;
        }

        if (!this.isDeleting && this.currentCharIndex === currentPhrase.length) {
            // Finished typing
            typeSpeed = this.delayAfterType;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            // Finished erasing
            this.isDeleting = false;
            this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
            typeSpeed = this.delayAfterErase;
        }

        setTimeout(() => this.animate(), typeSpeed);
    }
}
