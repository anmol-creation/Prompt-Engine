document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('file-input');
    const dropZone = document.getElementById('drop-zone');
    const uploadedImage = document.getElementById('uploaded-image');
    const placeholder = document.getElementById('placeholder');
    const toolbar = document.getElementById('toolbar');
    const clearBtn = document.getElementById('clear-btn');

    // Handle File Upload
    function handleFile(file) {
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                uploadedImage.src = e.target.result;
                uploadedImage.style.display = 'block';
                placeholder.style.display = 'none';
                toolbar.style.display = 'flex';
                dropZone.style.justifyContent = 'flex-start';
                dropZone.style.border = 'none';
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select a valid image file.');
        }
    }

    // Input Change Event
    fileInput.addEventListener('change', (e) => {
        handleFile(e.target.files[0]);
    });

    // Drag & Drop Events
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.style.borderColor = 'var(--primary-color)';
        dropZone.style.backgroundColor = 'rgba(37, 99, 235, 0.05)';
    });

    dropZone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        dropZone.style.borderColor = 'var(--border-color)';
        dropZone.style.backgroundColor = 'var(--bg-card)';
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.style.borderColor = 'var(--border-color)';
        dropZone.style.backgroundColor = 'var(--bg-card)';

        if (e.dataTransfer.files.length > 0) {
            handleFile(e.dataTransfer.files[0]);
        }
    });

    // Clear Button
    clearBtn.addEventListener('click', () => {
        uploadedImage.src = '';
        uploadedImage.style.display = 'none';
        placeholder.style.display = 'block';
        toolbar.style.display = 'none';
        dropZone.style.justifyContent = 'center';
        dropZone.style.border = '2px dashed var(--border-color)';
        fileInput.value = '';
    });

    // Dummy Tool clicks for now
    const tools = document.querySelectorAll('.tool-item');
    tools.forEach(tool => {
        tool.addEventListener('click', () => {
            if (uploadedImage.src) {
                alert(`Applying AI Effect: ${tool.innerText}\n\n(This will be connected to the Hugging Face API later)`);
            } else {
                alert('Please upload an image first!');
            }
        });
    });
});
