// Festival Special Category

export const festivalSpecialCategory = {
    type: 'group',
    options: {
        "Type": {
            type: "input",
            placeholder: "Enter custom festival details...",
            prompt: "Festival theme: ${input}"
        },
        "Diwali": { type: "static", prompt: "Festival theme: Diwali" },
        "Holi": { type: "static", prompt: "Festival theme: Holi" },
        "Eid": { type: "static", prompt: "Festival theme: Eid" },
        "Christmas": { type: "static", prompt: "Festival theme: Christmas" },
        "Navratri": { type: "static", prompt: "Festival theme: Navratri" },
        "Wedding / Celebration": { type: "static", prompt: "Festival theme: Wedding / Celebration" },
        "Birthday": { type: "static", prompt: "Festival theme: Birthday" }
    }
};
