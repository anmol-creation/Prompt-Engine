// Video Simple Mode: Camera & Lighting Category Brain Map
export const cameraLightingCategory = {
    id: "camera_lighting",
    title: "Camera & Lighting",
    type: "group",
    options: {
        "Camera Shots & Angles": {
            type: "group",
            options: {
                "Default": { type: "option", prompt: "shot as a Default" }
            }
        },
        "Lighting Moods": {
            type: "group",
            options: {
                "Default": { type: "option", prompt: "with Default lighting" }
            }
        }
    }
};