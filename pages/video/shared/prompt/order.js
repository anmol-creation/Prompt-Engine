// Prompt Execution Order Constants

export const FIX_EXECUTION_ORDER = [
    "Remove Distractions",
    "Fix Background",
    "Fix Lighting",
    "Improve Quality",
    "Fix Face"
];

// Helper to sort prompt items
export function sortPromptItems(items) {
    return items.sort((a, b) => {
        const idxA = FIX_EXECUTION_ORDER.indexOf(a.category);
        const idxB = FIX_EXECUTION_ORDER.indexOf(b.category);

        // If both are in defined order, sort by it
        if (idxA !== -1 && idxB !== -1) return idxA - idxB;

        // If A is in order (Fix Image), put it first
        if (idxA !== -1) return -1;

        // If B is in order, put it first
        if (idxB !== -1) return 1;

        // Otherwise keep original order
        return 0;
    });
}
