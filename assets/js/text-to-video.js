document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const resultTextarea = document.getElementById('final-prompt');

    generateBtn.addEventListener('click', () => {
        const subject = document.getElementById('subject').value;
        const customization = document.getElementById('customization').value;
        const action = document.getElementById('action').value;
        const background = document.getElementById('background').value;
        const cameraShot = document.getElementById('camera-shot').value;
        const cameraMovement = document.getElementById('camera-movement').value;
        const lighting = document.getElementById('lighting').value;
        const effects = document.getElementById('effects').value;
        const artStyle = document.getElementById('art-style').value;

        // Check if required fields are filled (subject is primary)
        if (!subject || !customization || !action || !background || !cameraShot || !cameraMovement || !lighting || !effects || !artStyle) {
            alert('Please select an option for all fields to generate a complete prompt.');
            return;
        }

        let finalPrompt = `${artStyle} ${cameraShot} of a ${subject} wearing ${customization}, ${action} in a ${background}, ${lighting}, ${cameraMovement}`;

        if (effects !== 'None') {
            finalPrompt += `, ${effects}`;
        }

        finalPrompt += `.`;

        resultTextarea.value = finalPrompt;
    });

    copyBtn.addEventListener('click', () => {
        const promptText = resultTextarea.value;
        if (!promptText) {
            alert('No prompt to copy! Please generate one first.');
            return;
        }

        navigator.clipboard.writeText(promptText).then(() => {
            const originalText = copyBtn.innerText;
            copyBtn.innerText = 'Copied!';
            setTimeout(() => {
                copyBtn.innerText = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy prompt.');
        });
    });
});
