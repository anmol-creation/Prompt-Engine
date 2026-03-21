// Video Simple Mode: Camera & Lighting Category Brain Map
export const cameraLightingCategory = {
    id: "camera_lighting",
    title: "Camera & Lighting",
    type: "group",
    children: {
        "camera_shots": {
            id: "cam_shots",
            title: "Camera Shots & Angles",
            type: "category",
            promptTemplate: "shot as a ${selection}",
            generator: "cam_shots"
        },
        "lighting_moods": {
            id: "lit_moods",
            title: "Lighting Moods",
            type: "category",
            promptTemplate: "with ${selection} lighting",
            generator: "lit_moods"
        }
    }
};