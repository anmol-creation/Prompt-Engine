// Video Simple Mode: Text Overlay Category Brain Map
export const textOverlayCategory = {
    id: "text_overlay",
    title: "Text Overlay",
    type: "group",
    children: {
        "neon_signs": {
            id: "txt_neon",
            title: "Neon Signs",
            type: "category",
            promptTemplate: "featuring a neon sign that says '${selection}'",
            generator: "txt_neon"
        },
        "titles": {
            id: "txt_titles",
            title: "Cinematic Titles",
            type: "category",
            promptTemplate: "with cinematic title text: '${selection}'",
            generator: "txt_titles"
        }
    }
};