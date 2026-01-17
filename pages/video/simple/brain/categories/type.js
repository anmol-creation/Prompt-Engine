// Type Category for Video (Shared Concept)

export const typeCategory = {
    type: 'group',
    options: {
        "Custom Type": {
            type: 'input',
            prompt: "Type: ${input}"
        },
        "Music Video": { type: 'option', prompt: "Type: Music Video" },
        "Documentary": { type: 'option', prompt: "Type: Documentary" },
        "Vlog": { type: 'option', prompt: "Type: Vlog" },
        "Commercial": { type: 'option', prompt: "Type: Commercial" }
    }
};
