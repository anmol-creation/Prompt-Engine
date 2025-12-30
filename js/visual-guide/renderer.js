// Visual Guide Renderer
// Responsible for creating and updating the HTML content

export function renderVisualGuide(container, data) {
    const content = container.querySelector('.guide-content');
    if (!content) return;

    let html = '';

    // --- Level 1: Categories ---
    html += '<div class="guide-list-box">';
    data.categories.forEach(cat => {
        const isSelected = cat.name === data.selectedCategory;
        const opacity = isSelected ? '1' : '0.4';
        const color = isSelected ? 'var(--primary-color)' : 'var(--text-color)';
        const weight = isSelected ? '700' : '400';
        html += `<span style="opacity: ${opacity}; color: ${color}; font-weight: ${weight}; transition: all 0.2s;">${cat.name}</span>`;
    });
    html += '</div>';

    // --- Level 2: Actions ---
    if (data.actions && data.actions.length > 0) {
        html += '<div class="guide-list-box">';
        data.actions.forEach(act => {
            const isSelected = act === data.selectedAction;
            const opacity = isSelected ? '1' : '0.4';
            const color = isSelected ? 'var(--primary-color)' : 'var(--text-color)';
            const weight = isSelected ? '700' : '400';
            html += `<span style="opacity: ${opacity}; color: ${color}; font-weight: ${weight}; transition: all 0.2s;">${act}</span>`;
        });
        html += '</div>';
    }

    // --- Level 3: Settings ---
    if (data.settings && data.settings.length > 0) {
        html += '<div class="guide-list-box">';
        data.settings.forEach(setting => {
            let settingHtml = `<div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">`;
            settingHtml += `<span style="font-weight: 600; font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.5px;">${setting.label}</span>`;
            settingHtml += `<div style="display: flex; gap: 4px; flex-wrap: wrap;">`;

            if (setting.type === 'slider') {
                // Display range numbers
                for (let i = setting.min; i <= setting.max; i++) {
                    const isMatch = i == setting.value;
                    const weight = isMatch ? '700' : '400';
                    const opacity = isMatch ? '1' : '0.3';
                    const color = isMatch ? 'var(--primary-color)' : 'var(--text-color)';
                    settingHtml += `<span style="font-weight: ${weight}; opacity: ${opacity}; color: ${color}; font-size: 0.9em;">${i}</span>`;
                }
            } else if (setting.type === 'select') {
                setting.options.forEach(opt => {
                    const isMatch = opt === setting.value;
                    const weight = isMatch ? '700' : '400';
                    const opacity = isMatch ? '1' : '0.3';
                    const color = isMatch ? 'var(--primary-color)' : 'var(--text-color)';
                    settingHtml += `<span style="font-weight: ${weight}; opacity: ${opacity}; color: ${color}; font-size: 0.9em;">${opt}</span>`;
                });
            }
            settingHtml += `</div></div>`;
            html += settingHtml;
        });
        html += '</div>';
    }

    content.innerHTML = html;
}
