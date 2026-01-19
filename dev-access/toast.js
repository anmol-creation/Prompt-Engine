// dev-access/toast.js
export function showDevToast(message, duration = 3000) {
    // Check if toast already exists
    let toast = document.querySelector('.dev-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'dev-toast';
        document.body.appendChild(toast);

        // Inject styles dynamically if not present
        if (!document.querySelector('#dev-toast-style')) {
            const style = document.createElement('style');
            style.id = 'dev-toast-style';
            style.textContent = `
                .dev-toast {
                    position: fixed;
                    bottom: 30px;
                    left: 50%;
                    transform: translateX(-50%) translateY(100px);
                    background: rgba(0, 0, 0, 0.95);
                    color: #00ff00;
                    padding: 12px 24px;
                    border-radius: 8px;
                    font-family: 'Courier New', monospace;
                    font-size: 14px;
                    border: 1px solid #00ff00;
                    box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
                    z-index: 10000;
                    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.27);
                    text-align: center;
                    pointer-events: none;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .dev-toast::before {
                    content: '>';
                    font-weight: bold;
                }
                .dev-toast.visible {
                    transform: translateX(-50%) translateY(0);
                }
            `;
            document.head.appendChild(style);
        }
    }

    toast.textContent = message;

    // Force reflow
    void toast.offsetWidth;

    requestAnimationFrame(() => {
        toast.classList.add('visible');
    });

    setTimeout(() => {
        toast.classList.remove('visible');
    }, duration);
}
