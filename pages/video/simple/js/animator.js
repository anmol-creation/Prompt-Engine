export class PlaceholderAnimator {
    constructor(inputElement, examples, options = {}) {
        this.input = inputElement;
        this.examples = examples || ["Example 1", "Example 2"];
        this.options = Object.assign({
            typingSpeed: 100,
            deletingSpeed: 50,
            pauseDuration: 1500
        }, options);

        this.state = {
            text: '',
            exampleIndex: 0,
            isDeleting: false,
            isPaused: false,
            isStopped: false
        };

        this.timeout = null;
        this.start();

        // Bind events
        this.input.addEventListener('focus', () => this.stop());
        this.input.addEventListener('input', () => this.stop());
        this.input.addEventListener('blur', () => {
            if (!this.input.value) this.start();
        });
    }

    start() {
        this.state.isStopped = false;
        this.loop();
    }

    stop() {
        this.state.isStopped = true;
        clearTimeout(this.timeout);
        this.input.placeholder = this.options.defaultPlaceholder || "Type here...";
    }

    loop() {
        if (this.state.isStopped) return;

        const currentExample = this.examples[this.state.exampleIndex];

        if (this.state.isDeleting) {
            this.state.text = currentExample.substring(0, this.state.text.length - 1);
        } else {
            this.state.text = currentExample.substring(0, this.state.text.length + 1);
        }

        this.input.placeholder = this.state.text + "|";

        let delta = this.options.typingSpeed;

        if (this.state.isDeleting) {
            delta = this.options.deletingSpeed;
        }

        if (!this.state.isDeleting && this.state.text === currentExample) {
            delta = this.options.pauseDuration;
            this.state.isDeleting = true;
        } else if (this.state.isDeleting && this.state.text === '') {
            this.state.isDeleting = false;
            this.state.exampleIndex = (this.state.exampleIndex + 1) % this.examples.length;
            delta = 500;
        }

        this.timeout = setTimeout(() => this.loop(), delta);
    }
}
