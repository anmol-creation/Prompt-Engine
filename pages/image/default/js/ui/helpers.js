export function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function setupCopyButton(copyBtn, promptOutput) {
    if (!copyBtn || !promptOutput) return;

    copyBtn.addEventListener('click', () => {
        const text = promptOutput.textContent;
        navigator.clipboard.writeText(text).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = "Copied!";
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 2000);
        });
    });
}
