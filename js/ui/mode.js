// Mode System Logic

export let currentMode = 'default';

export function initModeSystem(callbackUpdateUI) {
    const modeToggleContainer = document.querySelector('.mode-toggle-container');
    const modeSlider = document.querySelector('.mode-slider');

    // Safety check
    if (!modeToggleContainer || !modeSlider) return;

    // Mode Toggle Logic (Vertical Slide)
    modeToggleContainer.addEventListener('click', () => {
        if (currentMode === 'default') {
            setMode('advanced', callbackUpdateUI);
        } else if (currentMode === 'advanced') {
            setMode('pro', callbackUpdateUI);
        } else {
            setMode('default', callbackUpdateUI);
        }
    });
}

export function setMode(mode, callbackUpdateUI) {
    currentMode = mode;
    const modeSlider = document.querySelector('.mode-slider');
    const modeOptions = document.querySelectorAll('.mode-option');

    const index = mode === 'default' ? 0 : mode === 'advanced' ? 1 : 2;
    if(modeSlider) modeSlider.style.transform = `translateY(-${index * 40}px)`;

    modeOptions.forEach(opt => opt.classList.remove('active'));
    if(modeOptions[index]) modeOptions[index].classList.add('active');

    if (callbackUpdateUI) callbackUpdateUI();
}
