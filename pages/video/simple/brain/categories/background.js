// Video Simple Mode: Background Category Brain Map
export const backgroundCategory = {
    id: "background",
    title: "Background",
    type: "group",
    children: {
        "nature_landscapes": {
            id: "bg_nature",
            title: "Nature & Landscapes",
            type: "category",
            promptTemplate: "set against a breathtaking background of ${selection}",
            generator: "bg_nature_landscapes"
        },
        "urban_cityscapes": {
            id: "bg_urban",
            title: "Urban & Cityscapes",
            type: "category",
            promptTemplate: "in a bustling environment of ${selection}",
            generator: "bg_urban_cityscapes"
        },
        "indoors_rooms": {
            id: "bg_indoors",
            title: "Indoors & Rooms",
            type: "category",
            promptTemplate: "filmed inside a ${selection}",
            generator: "bg_indoors_rooms"
        },
        "cinematic_studio": {
            id: "bg_studio",
            title: "Cinematic & Studio Sets",
            type: "category",
            promptTemplate: "on a cinematic set featuring ${selection}",
            generator: "bg_cinematic_studio"
        },
        "historical_period": {
            id: "bg_history",
            title: "Historical & Period Settings",
            type: "category",
            promptTemplate: "transported to a historical ${selection}",
            generator: "bg_historical_period"
        },
        "scifi_fantasy": {
            id: "bg_scifi",
            title: "Sci-Fi & Fantasy Worlds",
            type: "category",
            promptTemplate: "in a fantastical setting of ${selection}",
            generator: "bg_scifi_fantasy"
        },
        "weather_atmosphere": {
            id: "bg_weather",
            title: "Weather & Atmosphere",
            type: "category",
            promptTemplate: "with a dramatic atmosphere of ${selection}",
            generator: "bg_weather_atmosphere"
        }
    }
};
