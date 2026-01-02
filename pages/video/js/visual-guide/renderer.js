// Visual Guide Renderer for Video

export function renderVisualGuide(container, data) {
    const content = container.querySelector('.guide-grid');
    if (!content) return;

    let html = '';

    data.categories.forEach(cat => {
        html += `
            <div class="guide-category-block ${cat.visualClass}">
                <div class="guide-category-header">
                    <span class="guide-category-name">${cat.name}</span>
                    <!-- Optional: could show selected action here if interactive -->
                </div>
                <div class="guide-visual-preview">
                    ${cat.visualContent}
                </div>
                <!-- Optional: List actions or just keep it purely visual as requested -->
                <!-- Prompt says: "visuals support selection" and "not explain them in text" -->
                <!-- But listing options might be helpful? The prompt says "Visual Guide System... visually represents each main category" -->
                <!-- It also says "Hover / tap shows clarity" -->
            </div>
        `;
    });

    content.innerHTML = html;
}
