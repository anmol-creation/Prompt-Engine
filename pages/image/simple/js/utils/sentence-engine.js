export class SentenceEngine {
    /**
     * Generates the sentence HTML structure.
     * @param {Object} state - The State object.
     * @param {Object} brainMap - The Brain Map object.
     * @returns {string} HTML string.
     */
    static generateHTML(state, brainMap) {
        const parts = [];

        // 1. Render Stacked Items (Completed selections)
        const stack = state.getFixStack();

        stack.forEach((item, index) => {
            const label = this.smartJoin(item.category, item.option, item.inputValue);

            parts.push(`
                <span class="sentence-part committed" data-stack-index="${index}">
                    ${label}
                    <span class="delete-btn stack-delete" data-stack-index="${index}">×</span>
                </span>
            `);
        });

        // 2. Render Current Active Path
        const selectionsObj = state.selections;
        const levels = Object.keys(selectionsObj).sort((a, b) => a - b);
        const selectedCategory = state.selectedCategory;

        levels.forEach((levelStr, i) => {
            const level = parseInt(levelStr);
            const value = selectionsObj[level];

            // Fix: Skip null or undefined values strictly
            if (value === null || value === undefined || value === "" || value === "null") return;

            const isLeaf = (i === levels.length - 1);

            let displayCheck = true;

            if (displayCheck) {
                 let showPlus = false;

                 // Logic for [+]
                 // If Level 0 (Main) -> Can add compatible Main (Customization/Fix Image stacking).
                 if (level === 0 && (value === "Fix Image" || value === "Customization")) {
                     showPlus = true;
                 }

                 // If Leaf Node -> Can add to stack if supported
                 if (isLeaf) {
                     if (selectedCategory === "Fix Image" && level > 0) {
                         showPlus = true;
                     }
                     if (selectedCategory === "Customization" && level >= 1) {
                         showPlus = true;
                     }
                 }

                 const hiddenClass = showPlus ? '' : ' hidden';

                 parts.push(`
                    <span class="sentence-part active" data-level="${level}">
                        ${value}
                        <span class="delete-btn" data-level="${level}">×</span>
                        <span class="add-btn${hiddenClass}" data-level="${level}">+</span>
                    </span>
                 `);
            }
        });

        return parts.join(" ");
    }

    static smartJoin(category, option, inputValue) {
        let text = "";

        // Sanitize input value
        const sanitizedInput = inputValue ? this.escapeHtml(inputValue) : "";
        const valStr = sanitizedInput ? ` (${sanitizedInput})` : "";

        if (category === "Fix Background" && option) {
            text = `${option}${valStr} on background`;
        } else if (category === "Fix Face" && option) {
            text = `${option}${valStr} on face`;
        } else if (option) {
            text = `${option}${valStr} for ${category}`;
        } else {
            text = `${category}${valStr}`;
        }

        return text;
    }

    static escapeHtml(text) {
        if (!text) return text;
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
}
