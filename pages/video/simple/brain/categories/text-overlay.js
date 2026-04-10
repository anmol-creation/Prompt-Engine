// Video Simple Mode: Text Overlay Category Brain Map
export const textOverlayCategory = {
    id: "text_overlay",
    title: "Text Overlay",
    type: "group",
    options: {
        "Cinematic Titles": {
            type: "group",
            options: {
                "Epic Movie Trailer": {
                    type: "option",
                    prompt: "featuring an epic, bold cinematic movie title in the center of the screen that clearly reads: '[USER_INPUT]'",
                    dynamicInput: { type: "text", placeholder: "Type the epic title..." }
                },
                "Minimalist / Elegant": {
                    type: "option",
                    prompt: "featuring a minimalist, elegant thin-font title appearing softly on screen that clearly reads: '[USER_INPUT]'",
                    dynamicInput: { type: "text", placeholder: "Type the elegant text..." }
                }
            }
        },
        "In-World Text (Diegetic)": {
            type: "group",
            options: {
                "Neon Sign": {
                    type: "option",
                    prompt: "featuring a bright, glowing neon sign attached to a surface in the scene that clearly reads: '[USER_INPUT]'",
                    dynamicInput: { type: "text", placeholder: "Type neon sign text..." }
                },
                "Handwritten / Chalkboard": {
                    type: "option",
                    prompt: "featuring handwritten chalk text on a dark surface that clearly reads: '[USER_INPUT]'",
                    dynamicInput: { type: "text", placeholder: "Type handwritten text..." }
                },
                "Billboard / Signage": {
                    type: "option",
                    prompt: "featuring a large outdoor billboard or commercial sign clearly displaying the text: '[USER_INPUT]'",
                    dynamicInput: { type: "text", placeholder: "Type billboard text..." }
                }
            }
        },
        "Digital & HUD": {
            type: "group",
            options: {
                "Sci-Fi HUD": {
                    type: "option",
                    prompt: "featuring a futuristic sci-fi digital HUD overlay displaying glowing text that reads: '[USER_INPUT]'",
                    dynamicInput: { type: "text", placeholder: "Type HUD text..." }
                },
                "Glitch / Hacker Text": {
                    type: "option",
                    prompt: "featuring green, glitching hacker-style computer text overlaying the footage that reads: '[USER_INPUT]'",
                    dynamicInput: { type: "text", placeholder: "Type hacker text..." }
                }
            }
        }
    }
};