// Shared Custom Dropdown Logic

export function initDropdown(dropdownElement, options, onSelectCallback, placeholder = "Select") {
    if (!dropdownElement) return;

    const trigger = dropdownElement.querySelector('.dropdown-trigger');
    let textSpan = dropdownElement.querySelector('.selected-text');
    let menu = dropdownElement.querySelector('.dropdown-menu');

    // Create structure if missing (for dynamic initialization if only container is passed)
    if (!trigger) {
        dropdownElement.innerHTML = `
            <div class="dropdown-trigger">
                <span class="selected-text">${placeholder}</span>
                <span class="arrow">▼</span>
            </div>
            <div class="dropdown-menu"></div>
        `;
        textSpan = dropdownElement.querySelector('.selected-text');
        menu = dropdownElement.querySelector('.dropdown-menu');
    }

    // Set initial value
    dropdownElement.dataset.value = "";
    textSpan.textContent = placeholder;

    // Populate
    updateDropdownOptions(dropdownElement, options, onSelectCallback);

    // Toggle Event
    if (!dropdownElement.dataset.hasListener) {
        const trig = dropdownElement.querySelector('.dropdown-trigger');
        trig.addEventListener('click', (e) => {
            if (dropdownElement.classList.contains('disabled')) return;
            e.stopPropagation();
            const isActive = dropdownElement.classList.contains('active');
            closeAllDropdowns();
            if (!isActive) {
                openDropdown(dropdownElement);
            }
        });
        dropdownElement.dataset.hasListener = 'true';
    }
}

export function updateDropdownOptions(dropdownElement, options, onSelectCallback) {
    const menu = dropdownElement.querySelector('.dropdown-menu');
    // Safety check if menu is missing
    if (!menu) return;

    const textSpan = dropdownElement.querySelector('.selected-text');
    menu.innerHTML = '';

    options.forEach(opt => {
        // opt can be string or object { label, value, disabled }
        const label = typeof opt === 'object' ? opt.label : opt;
        const value = typeof opt === 'object' ? opt.value : opt;
        const isDisabled = typeof opt === 'object' ? opt.disabled : false;

        const item = document.createElement('div');
        item.className = 'dropdown-item';
        item.textContent = label;
        item.dataset.value = value;

        if (isDisabled) {
            item.classList.add('disabled');
        } else {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                textSpan.textContent = label;
                dropdownElement.dataset.value = value;

                // Mark selected
                menu.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');

                closeDropdown(dropdownElement);
                if (onSelectCallback) onSelectCallback(value);
            });
        }
        menu.appendChild(item);
    });
}

export function getDropdownValue(dropdownElement) {
    return dropdownElement ? dropdownElement.dataset.value : null;
}

export function setDropdownValue(dropdownElement, value) {
    if (!dropdownElement) return;
    const menu = dropdownElement.querySelector('.dropdown-menu');
    if (!menu) return;

    const item = Array.from(menu.children).find(child => child.dataset.value === value);
    if (item) {
        // Update UI only
        const textSpan = dropdownElement.querySelector('.selected-text');
        if(textSpan) textSpan.textContent = item.textContent;
        dropdownElement.dataset.value = value;
        menu.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
    } else if (value === "") {
        resetDropdown(dropdownElement);
    }
}

export function resetDropdown(dropdownElement, placeholder = "Select") {
    if (!dropdownElement) return;
    const textSpan = dropdownElement.querySelector('.selected-text');
    if(textSpan) textSpan.textContent = placeholder;
    dropdownElement.dataset.value = "";
    const menu = dropdownElement.querySelector('.dropdown-menu');
    if(menu) menu.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('selected'));
}

export function disableDropdown(dropdownElement, disabled) {
    if (!dropdownElement) return;
    if (disabled) {
        dropdownElement.classList.add('disabled');
    } else {
        dropdownElement.classList.remove('disabled');
    }
}

function openDropdown(dropdown) {
    if (!dropdown) return;
    dropdown.classList.add('active');
    const menu = dropdown.querySelector('.dropdown-menu');
    if (menu) menu.classList.add('visible');
}

function closeDropdown(dropdown) {
    if (!dropdown) return;
    dropdown.classList.remove('active');
    const menu = dropdown.querySelector('.dropdown-menu');
    if (menu) menu.classList.remove('visible');
}

function closeAllDropdowns() {
    document.querySelectorAll('.custom-dropdown').forEach(d => closeDropdown(d));
}

// Global click listener to close
document.addEventListener('click', () => {
    closeAllDropdowns();
});
