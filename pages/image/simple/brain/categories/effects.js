// Category Data for Effects

// --- Icons (SVG Strings) ---
const ICONS = {
    magicWand: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M447.8 153.6c-2.4-5.3-7.7-8.7-13.6-8.7h-36.2l-17.7-32.5c-4.4-8.1-12.9-13.1-22.1-13.1-9.3 0-17.8 5.1-22.1 13.1L318.4 144.9h-36.2c-5.8 0-11.2 3.4-13.6 8.7-2.5 5.3-1.4 11.6 2.7 15.9l26.9 27.9-6.3 36.6c-1.1 6.3 1.8 12.6 7.4 15.6 2.3 1.3 4.9 1.9 7.4 1.9 3.5 0 7-1.2 9.7-3.6l32.4-28.5 32.4 28.5c2.7 2.4 6.2 3.6 9.7 3.6 2.5 0 5.1-.6 7.4-1.9 5.6-3 8.5-9.3 7.4-15.6l-6.3-36.6 26.9-27.9c4.1-4.3 5.1-10.6 2.7-15.9zM509.3 227.4l-31.5-33.3 7.3-42.9c1.6-9.3-2.6-18.6-10.9-22.9-3.4-1.8-7.1-2.7-10.8-2.7-5.1 0-10.1 1.7-14.2 5l-37.9 33.3-37.9-33.3c-7-6.2-16.8-7.5-25-3.3-8.3 4.2-12.5 13.6-10.9 22.9l7.3 42.9-31.5 33.3c-6.1 6.4-7.6 15.9-3.8 24 3.8 8.1 12.3 12.8 21.2 11.8l45.2-4.8 19.3 41.5c4.1 8.8 12.9 14.3 22.6 14.3s18.5-5.5 22.6-14.3l19.3-41.5 45.2 4.8c8.9 1 17.5-3.7 21.2-11.8 3.8-8.1 2.3-17.6-3.8-24zM169.3 90.9l-22.2-40.8c-5.5-10.1-16.1-16.4-27.6-16.4s-22.2 6.3-27.6 16.4l-22.2 40.8-45.2 6c-7.2 1-14 4.3-17 11.1-2.9 6.6-1.8 14.5 3.3 19.9l33.6 34.9-7.9 45.7c-1.4 7.9 2.3 15.8 9.3 19.5 2.9 1.6 6.1 2.4 9.3 2.4 4.4 0 8.7-1.5 12.1-4.5l40.5-35.6 40.5 35.6c3.4 3 7.8 4.5 12.1 4.5 3.1 0 6.4-.8 9.3-2.4 7-3.7 10.6-11.6 9.3-19.5l-7.9-45.7 33.6-34.9c5.1-5.4 6.3-13.3 3.3-19.9-3.1-6.8-9.8-10.1-17-11.1l-45.2-6zM32 384c0 17.7 14.3 32 32 32h160v-64h-99.8L281.4 194.8l-45.3-45.3L32 353.8V384z"/></svg>`, // magic-wand
    film: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 80c-26.5 0-48 21.5-48 48 0 8.8 2.4 17 6.7 24H105.3c4.3-7 6.7-15.2 6.7-24 0-26.5-21.5-48-48-48S16 101.5 16 128c0 8.8 2.4 17 6.7 24H0v240h512V152h-22.7c4.3-7 6.7-15.2 6.7-24 0-26.5-21.5-48-48-48zm-384 80c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zM64 368c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm80 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm80 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm80 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm80 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zM448 160c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16z"/></svg>`, // film
    camera: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.6-39.4 88-88 88s-88-39.4-88-88 39.4-88 88-88 88 39.4 88 88z"/></svg>`, // camera
    lens: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm0-336c-75.1 0-136 60.9-136 136s60.9 136 136 136 136-60.9 136-136-60.9-136-136-136zm0 224c-48.6 0-88-39.4-88-88s39.4-88 88-88 88 39.4 88 88-39.4 88-88 88z"/></svg>`, // dot-circle (representing lens)
    palette: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/></svg>`, // palette
    sparkles: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M384 128h-32L304.5 16.9c-2.3-5.3-7.6-8.9-13.4-8.9s-11.1 3.5-13.4 8.9L224 128h-32c-5.8 0-11.1 3.5-13.4 8.9-2.3 5.4-.6 11.6 4.3 14.9l43 28.7-23 70.8c-1.8 5.6.2 11.8 4.9 15.2 4.7 3.5 11.1 3.2 15.5-.9l48.7-44.6 48.7 44.6c2.5 2.3 5.8 3.5 9.1 3.5 1.9 0 3.8-.4 5.6-1.1 5.3-2.1 8.7-7.4 8.4-13.1l-6.3-43 43-28.7c4.9-3.3 6.6-9.5 4.3-14.9-2.3-5.4-7.6-8.9-13.4-8.9zM128 256H96L48.5 144.9c-2.3-5.3-7.6-8.9-13.4-8.9S24 139.6 21.7 144.9L-25.8 256h-32c-5.8 0-11.1 3.5-13.4 8.9-2.3 5.4-.6 11.6 4.3 14.9l43 28.7-23 70.8c-1.8 5.6.2 11.8 4.9 15.2 4.7 3.5 11.1 3.2 15.5-.9L22.6 350l48.7 44.6c2.5 2.3 5.8 3.5 9.1 3.5 1.9 0 3.8-.4 5.6-1.1 5.3-2.1 8.7-7.4 8.4-13.1l-6.3-43 43-28.7c4.9-3.3 6.6-9.5 4.3-14.9-2.3-5.4-7.6-8.9-13.4-8.9z"/></svg>` // stars (using generic placeholder for sparkle)
};

// --- Effects Category Structure ---
export const effectsCategory = {
    type: 'group',
    icon: ICONS.magicWand,
    options: {
        "Vintage & Retro Vibe": {
            type: "group",
            icon: ICONS.film,
            options: {
                "90s Film Grain": { type: "option", prompt: "90s vintage film grain look" },
                "Polaroid Style": { type: "option", prompt: "faded polaroid photo aesthetic" },
                "Sepia Tone": { type: "option", prompt: "antique sepia tone filter" },
                "VHS Glitch": { type: "option", prompt: "retro VHS tape glitch effect" },
                "Light Leaks": { type: "option", prompt: "analog film light leaks overlay" },
                "Dust & Scratches": { type: "option", prompt: "vintage aged photo texture with dust and scratches" }
            }
        },
        "Cinematic & Dramatic Mood": {
            type: "group",
            icon: ICONS.camera,
            options: {
                "Teal & Orange Grading": { type: "option", prompt: "cinematic teal and orange color grading" },
                "Noir Black & White": { type: "option", prompt: "high contrast film noir black and white style" },
                "Moody Dark": { type: "option", prompt: "moody, underexposed dark atmosphere" },
                "Cyberpunk Neon": { type: "option", prompt: "futuristic cyberpunk neon lighting style" },
                "Bleach Bypass": { type: "option", prompt: "gritty bleach bypass film look" }
            }
        },
        "Lenses & Focus Techniques": {
            type: "group",
            icon: ICONS.lens,
            options: {
                "Heavy Bokeh Background": { type: "option", prompt: "with heavy background bokeh blur" },
                "Fisheye Lens": { type: "option", prompt: "seen through a wide-angle fisheye lens" },
                "Vignette (Dark Corners)": { type: "option", prompt: "with heavy vignette darkening the corners" },
                "Tilt-Shift (Miniature)": { type: "option", prompt: "tilt-shift lens effect making scene look miniature" },
                "Soft Focus Dreamy": { type: "option", prompt: "soft focus dreamy diffusion filter" }
            }
        },
        "Artistic Aesthetic": {
            type: "group",
            icon: ICONS.palette,
            options: {
                "Oil Painting": { type: "option", prompt: "rendered in a classic oil painting style" },
                "Pencil Sketch": { type: "option", prompt: "rendered as a black and white pencil sketch" },
                "Watercolor": { type: "option", prompt: "rendered in a soft watercolor painting style" },
                "Pop Art Comic": { type: "option", prompt: "comic book pop art style with halftone dots" }
            }
        },
        "Trendy Overlays": {
            type: "group",
            icon: ICONS.magicWand, // Re-using magic wand or could use specific icon if available
            options: {
                "Lens Flare": { type: "option", prompt: "with a dramatic lens flare overlay" },
                "Sparkles / Glitter": { type: "option", prompt: "with a sparkling glitter overlay effect" },
                "Date & Time Stamp": { type: "option", prompt: "with a retro camcorder date/time stamp overlay" },
                "Prism Effect": { type: "option", prompt: "with photographic prism light distortion" }
            }
        }
    }
};
