// Video Simple Mode: Background Category Brain Map
export const backgroundCategory = {
    id: "background",
    title: "Background",
    type: "group",
    children: {
        "nature_outdoors": {
            id: "bg_nature",
            title: "Nature & Outdoors",
            type: "category",
            promptTemplate: "${selection}",
            generator: "bg_nature"
        },
        "urban_city": {
            id: "bg_urban",
            title: "Urban & City Life",
            type: "category",
            promptTemplate: "${selection}",
            generator: "bg_urban"
        },
        "studio_setup": {
            id: "bg_studio",
            title: "Studio Setup",
            type: "category",
            promptTemplate: "${selection}",
            generator: "bg_studio"
        },
        "scifi_futuristic": {
            id: "bg_scifi",
            title: "Sci-Fi & Futuristic",
            type: "category",
            promptTemplate: "${selection}",
            generator: "bg_scifi"
        },
        "fantasy_magical": {
            id: "bg_fantasy",
            title: "Fantasy & Magical",
            type: "category",
            promptTemplate: "${selection}",
            generator: "bg_fantasy"
        }
    }
};
