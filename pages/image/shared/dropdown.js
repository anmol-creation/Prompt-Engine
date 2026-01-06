// Shared Custom Dropdown Logic

export function initDropdown(dropdownElement, options, onSelectCallback, placeholder = "Select", config = {}) {
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
    if (textSpan) textSpan.textContent = placeholder;

    // Populate
    updateDropdownOptions(dropdownElement, options, onSelectCallback, config);

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
                // If search is enabled, focus input
                const searchInput = dropdownElement.querySelector('.dropdown-search-input');
                if (searchInput && config.enableSearch) {
                    setTimeout(() => searchInput.focus(), 100);
                }
            }
        });
        dropdownElement.dataset.hasListener = 'true';
    }
}

export function updateDropdownOptions(dropdownElement, options, onSelectCallback, config = {}) {
    const menu = dropdownElement.querySelector('.dropdown-menu');
    // Safety check if menu is missing
    if (!menu) return;

    const textSpan = dropdownElement.querySelector('.selected-text');
    menu.innerHTML = '';

    // If Search Enabled
    if (config.enableSearch) {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'dropdown-search-container';
        searchContainer.style.padding = '8px';
        searchContainer.style.borderBottom = '1px solid var(--border-color, #eee)';
        searchContainer.style.position = 'sticky';
        searchContainer.style.top = '0';
        searchContainer.style.backgroundColor = 'var(--card-bg, #fff)';
        searchContainer.style.zIndex = '10';

        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.className = 'dropdown-search-input';
        searchInput.placeholder = config.searchPlaceholder || 'Type to search...';
        searchInput.style.width = '100%';
        searchInput.style.padding = '8px';
        searchInput.style.borderRadius = '4px';
        searchInput.style.border = '1px solid var(--border-color, #ccc)';
        searchInput.style.outline = 'none';
        searchInput.style.fontSize = '0.9rem';

        // Prevent click prop
        searchInput.addEventListener('click', (e) => e.stopPropagation());

        searchInput.addEventListener('input', (e) => {
            const val = e.target.value.toLowerCase();
            const items = menu.querySelectorAll('.dropdown-item');
            let hasMatch = false;
            items.forEach(item => {
                if (item.textContent.toLowerCase().includes(val)) {
                    item.style.display = 'block';
                    hasMatch = true;
                } else {
                    item.style.display = 'none';
                }
            });

            // Update value to input if nothing selected or override
            dropdownElement.dataset.customValue = e.target.value;
            // Clear selection visual if typing
            items.forEach(i => i.classList.remove('selected'));

            // If the user is typing, we consider the typed value as the current selection candidate
            // Use a specific event or mechanism if 'live' updates are needed, but usually we wait for enter or click or blur?
            // Requirement: "Typed input always overrides list selection".

            // If callback supports it, maybe we don't trigger callback on every keystroke unless specified,
            // but the main logic is that when we retrieve value later, we prefer customValue if set.

            // However, to mimic selection:
            // textSpan.textContent = e.target.value || config.placeholder || "Select";
            // Actually, we don't update main display while typing inside menu.
        });

        // Handle Enter key to confirm typed value
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                e.stopPropagation();
                const val = searchInput.value;
                if (val) {
                    textSpan.textContent = val;
                    dropdownElement.dataset.value = val;
                    dropdownElement.dataset.isCustom = "true";
                    closeDropdown(dropdownElement);
                    if (onSelectCallback) onSelectCallback(val);
                }
            }
        });

        searchContainer.appendChild(searchInput);
        menu.appendChild(searchContainer);
    }

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
                dropdownElement.dataset.isCustom = "false"; // Reset custom flag

                // Clear search input if exists
                const searchInput = menu.querySelector('.dropdown-search-input');
                if (searchInput) {
                     searchInput.value = "";
                     dropdownElement.dataset.customValue = "";
                }

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
    if (!dropdownElement) return null;

    // Check if we have a pending custom value from search input that wasn't "confirmed" by Enter but is present?
    // Requirement: "If user types + selects nothing: Typed input still proceeds normally"
    // This usually implies when the user clicks "Create" or similar, we read the value.
    // The dropdown might be closed. If it was closed by clicking outside, the input value is lost in standard UI.
    // But here we stored it in dataset.customValue.

    const customVal = dropdownElement.dataset.customValue;
    const isCustom = dropdownElement.dataset.isCustom === "true";
    const selectedVal = dropdownElement.dataset.value;

    // If customValue is present and not empty, it takes precedence if the logic dictates "Typed input overrides list selection".
    // But usually only if the user explicitly typed something recently.
    // If the user selected an item, we cleared customValue.

    if (customVal && customVal.trim() !== "") {
        return customVal.trim();
    }

    return selectedVal;
}

export function setDropdownValue(dropdownElement, value) {
    if (!dropdownElement) return;
    const menu = dropdownElement.querySelector('.dropdown-menu');
    if (!menu) return;

    const item = Array.from(menu.querySelectorAll('.dropdown-item')).find(child => child.dataset.value === value);
    if (item) {
        // Update UI only
        const textSpan = dropdownElement.querySelector('.selected-text');
        if(textSpan) textSpan.textContent = item.textContent;
        dropdownElement.dataset.value = value;
        dropdownElement.dataset.isCustom = "false";
        dropdownElement.dataset.customValue = "";

        menu.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
    } else if (value === "") {
        resetDropdown(dropdownElement);
    } else {
        // It's a custom value
        const textSpan = dropdownElement.querySelector('.selected-text');
        if(textSpan) textSpan.textContent = value;
        dropdownElement.dataset.value = value;
        dropdownElement.dataset.isCustom = "true";
        dropdownElement.dataset.customValue = value;
        menu.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('selected'));
    }
}

export function resetDropdown(dropdownElement, placeholder = "Select") {
    if (!dropdownElement) return;
    const textSpan = dropdownElement.querySelector('.selected-text');
    if(textSpan) textSpan.textContent = placeholder;
    dropdownElement.dataset.value = "";
    dropdownElement.dataset.customValue = "";
    dropdownElement.dataset.isCustom = "false";
    const menu = dropdownElement.querySelector('.dropdown-menu');
    if(menu) {
        menu.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('selected'));
        const searchInput = menu.querySelector('.dropdown-search-input');
        if(searchInput) searchInput.value = "";
    }
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
    // Before closing, if there is text in search input, sync it to main value if no item selected?
    // Requirement: "Typed input always overrides list selection"
    // If I type "foo" and click outside, is "foo" selected?
    // Usually yes for this kind of "Type" control.

    const searchInput = dropdown.querySelector('.dropdown-search-input');
    if (searchInput && searchInput.value.trim() !== "") {
        const val = searchInput.value.trim();
        // Check if this matches an item exactly?
        // If not, it's custom.
        const items = dropdown.querySelectorAll('.dropdown-item');
        let match = null;
        /*
           We could try to match, but requirement says "Typed input always overrides list selection".
           So even if I type "Avatar", strictly speaking it overrides. But value "Avatar" is same.
        */

        dropdown.dataset.value = val; // Set the value
        dropdown.dataset.customValue = val;

        const textSpan = dropdown.querySelector('.selected-text');
        if(textSpan) textSpan.textContent = val;
    }

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
