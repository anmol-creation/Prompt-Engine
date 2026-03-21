// Video Simple Mode: Style & Vibe Category Brain Map
export const styleVibeCategory = {
    id: "style_vibe",
    title: "Style & Vibe",
    type: "group",
    children: {
        "visual_style": {
            id: "sty_visual",
            title: "Visual Style",
            type: "category",
            promptTemplate: "in a ${selection} style",
            generator: "sty_visual"
        },
        "color_palette": {
            id: "sty_color",
            title: "Color Palette",
            type: "category",
            promptTemplate: "with a ${selection} color palette",
            generator: "sty_color"
        }
    }
};