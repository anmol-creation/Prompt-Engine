// Category Data for Add Object
// Allows the user to insert specific tangible elements into the scene.

const ICONS = {
    object: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M574.1 280.37L528.75 98.66c-5.91-23.7-21.59-44.05-43-55.81-21.44-11.73-46.97-14.11-70.19-6.33l-15.25 5.08c-8.39 2.79-12.92 11.86-10.12 20.24l5.06 15.18c2.79 8.38 11.85 12.91 20.23 10.12l13.18-4.39c10.87-3.62 23-3.57 33.16 1.73 10.29 5.37 17.57 14.56 20.37 25.82l38.46 153.82c-22.19-6.81-49.79-12.46-81.2-12.46-34.77 0-73.98 7.02-114.85 26.74h-73.18c-40.87-19.74-80.08-26.75-114.86-26.75-31.42 0-59.02 5.65-81.21 12.46l38.46-153.83c2.79-11.25 10.09-20.45 20.38-25.81 10.16-5.3 22.28-5.35 33.15-1.73l13.17 4.39c8.38 2.79 17.44-1.74 20.23-10.12l5.06-15.18c2.8-8.38-1.73-17.45-10.12-20.24l-15.25-5.08c-23.22-7.78-48.75-5.41-70.19 6.33-21.41 11.77-37.09 32.11-43 55.8L1.9 280.37A64.218 64.218 0 0 0 0 295.86v70.25C0 429.01 51.58 480 115.2 480h37.12c60.28 0 110.37-45.94 114.88-105.37l2.93-38.63h35.75l2.93 38.63C313.31 434.06 363.4 480 423.68 480h37.12c63.62 0 115.2-50.99 115.2-113.88v-70.25c0-5.23-.64-10.43-1.9-15.5zm-370.72 89.42c-1.97 25.91-24.4 46.21-51.06 46.21H115.2C86.97 416 64 393.62 64 366.11v-37.54c18.12-6.49 43.42-12.92 72.58-12.92 23.86 0 47.26 4.33 69.93 12.92l-3.13 41.22zM512 366.12c0 27.51-22.97 49.88-51.2 49.88h-37.12c-26.67 0-49.1-20.3-51.06-46.21l-3.13-41.22c22.67-8.59 46.08-12.92 69.95-12.92 29.12 0 54.43 6.44 72.55 12.93v37.54z"/></svg>` // Generic Object/Accessory Icon
};

export const addObjectCategory = {
    type: 'group',
    options: {
        "Living Beings": {
            type: "group",
            icon: ICONS.object,
            options: {
                "Dog": { type: "option", prompt: "featuring a Dog" },
                "Cat": { type: "option", prompt: "featuring a Cat" },
                "Lion": { type: "option", prompt: "featuring a Lion" },
                "Wolf": { type: "option", prompt: "featuring a Wolf" },
                "Eagle": { type: "option", prompt: "featuring a Eagle" },
                "Owl": { type: "option", prompt: "featuring a Owl" },
                "Horse": { type: "option", prompt: "featuring a Horse" },
                "Butterfly": { type: "option", prompt: "featuring a Butterfly" },
                "Dolphin": { type: "option", prompt: "featuring a Dolphin" },
                "Dragon": { type: "option", prompt: "featuring a Dragon" }
            }
        },
        "Transport": {
            type: "group",
            icon: ICONS.object,
            options: {
                "Sports Car": { type: "option", prompt: "featuring a Sports Car" },
                "Motorcycle": { type: "option", prompt: "featuring a Motorcycle" },
                "Bicycle": { type: "option", prompt: "featuring a Bicycle" },
                "Spaceship": { type: "option", prompt: "featuring a Spaceship" },
                "Helicopter": { type: "option", prompt: "featuring a Helicopter" },
                "Sailboat": { type: "option", prompt: "featuring a Sailboat" },
                "Cyberpunk Van": { type: "option", prompt: "featuring a Cyberpunk Van" },
                "Train": { type: "option", prompt: "featuring a Train" }
            }
        },
        "Instruments & Art": {
            type: "group",
            icon: ICONS.object,
            options: {
                "Acoustic Guitar": { type: "option", prompt: "featuring an Acoustic Guitar" },
                "Electric Guitar": { type: "option", prompt: "featuring an Electric Guitar" },
                "Piano": { type: "option", prompt: "featuring a Piano" },
                "Violin": { type: "option", prompt: "featuring a Violin" },
                "Drum Kit": { type: "option", prompt: "featuring a Drum Kit" },
                "Vintage Camera": { type: "option", prompt: "featuring a Vintage Camera" },
                "Easel & Canvas": { type: "option", prompt: "featuring an Easel & Canvas" }
            }
        },
        "Gadgets & Tech": {
            type: "group",
            icon: ICONS.object,
            options: {
                "Smartphone": { type: "option", prompt: "featuring a Smartphone" },
                "Laptop": { type: "option", prompt: "featuring a Laptop" },
                "Hologram Device": { type: "option", prompt: "featuring a Hologram Device" },
                "Retro TV": { type: "option", prompt: "featuring a Retro TV" },
                "Robot Companion": { type: "option", prompt: "featuring a Robot Companion" },
                "Floating Drone": { type: "option", prompt: "featuring a Floating Drone" }
            }
        },
        "Props (Handheld)": {
            type: "group",
            icon: ICONS.object,
            options: {
                "Sword": { type: "option", prompt: "holding a Sword" },
                "Magic Staff": { type: "option", prompt: "holding a Magic Staff" },
                "Shield": { type: "option", prompt: "holding a Shield" },
                "Old Book": { type: "option", prompt: "holding an Old Book" },
                "Lantern": { type: "option", prompt: "holding a Lantern" },
                "Umbrella": { type: "option", prompt: "holding an Umbrella" },
                "Gun/Blaster": { type: "option", prompt: "holding a Gun/Blaster" },
                "Bouquet of Flowers": { type: "option", prompt: "holding a Bouquet of Flowers" }
            }
        },
        "Food & Drink": {
            type: "group",
            icon: ICONS.object,
            options: {
                "Coffee Cup": { type: "option", prompt: "featuring a Coffee Cup" },
                "Pizza Box": { type: "option", prompt: "featuring a Pizza Box" },
                "Fancy Cake": { type: "option", prompt: "featuring a Fancy Cake" },
                "Wine Glass": { type: "option", prompt: "featuring a Wine Glass" },
                "Fruit Basket": { type: "option", prompt: "featuring a Fruit Basket" },
                "Burger": { type: "option", prompt: "featuring a Burger" }
            }
        },
        "Environment Assets": {
            type: "group",
            icon: ICONS.object,
            options: {
                "Large Rock": { type: "option", prompt: "featuring a Large Rock" },
                "Ancient Tree": { type: "option", prompt: "featuring an Ancient Tree" },
                "Street Bench": { type: "option", prompt: "featuring a Street Bench" },
                "Street Light": { type: "option", prompt: "featuring a Street Light" },
                "Campfire": { type: "option", prompt: "featuring a Campfire" },
                "Fountain": { type: "option", prompt: "featuring a Fountain" }
            }
        }
    }
};
