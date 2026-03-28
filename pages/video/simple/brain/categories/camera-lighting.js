// Video Simple Mode: Camera & Lighting Category Brain Map
export const cameraLightingCategory = {
    id: "camera_lighting",
    title: "Camera & Lighting",
    type: "group",
    options: {
        "Camera Shots & Framing": {
            type: "group",
            options: {
                "Distance / Size": {
                    type: "group",
                    options: {
                        "Extreme Close-up (Macro)": { type: "option", prompt: "framed as an extreme close-up or macro shot, focusing tightly on minute, intricate details" },
                        "Close-up": { type: "option", prompt: "framed tightly as a close-up, capturing raw emotion and facial expressions clearly" },
                        "Medium Shot (Waist-up)": { type: "option", prompt: "framed as a medium shot from the waist up, capturing both the subject's posture and their immediate surroundings" },
                        "Full Shot / Wide Shot": { type: "option", prompt: "framed as a full wide shot, showing the complete subject from head to toe within their environment" },
                        "Extreme Wide / Establishing": { type: "option", prompt: "framed as an extreme wide establishing shot, capturing a vast, sweeping view of the landscape where the subject appears small" }
                    }
                },
                "Viewing Angles": {
                    type: "group",
                    options: {
                        "Eye Level": { type: "option", prompt: "shot from a neutral, direct eye-level perspective for a natural and intimate connection" },
                        "Low Angle (Heroic)": { type: "option", prompt: "shot from a low angle, looking up to make the subject appear powerful, imposing, and heroic" },
                        "High Angle": { type: "option", prompt: "shot from a high angle, looking down to make the subject appear vulnerable, small, or isolated" },
                        "Bird's Eye / Drone View": { type: "option", prompt: "shot looking straight down from high above like a drone or bird's eye view, capturing patterns and immense scale" },
                        "Dutch Angle / Tilted": { type: "option", prompt: "shot with a tilted Dutch angle, creating a disorienting, tense, and dynamic composition" }
                    }
                }
            }
        },
        "Camera Movement & Motion": {
            type: "group",
            options: {
                "Tracking & Following": {
                    type: "group",
                    options: {
                        "Pan (Left/Right)": { type: "option", prompt: "with the camera smoothly panning horizontally across the scene to reveal the environment" },
                        "Tilt (Up/Down)": { type: "option", prompt: "with the camera smoothly tilting vertically up or down the scene, establishing height or scale" },
                        "Tracking Shot (Following)": { type: "option", prompt: "with a dynamic tracking shot physically moving alongside or behind the subject to follow the action seamlessly" },
                        "Push-in / Zoom-in": { type: "option", prompt: "with the camera slowly pushing in closer to the subject, steadily increasing intimacy and narrative tension" },
                        "Pull-out / Zoom-out": { type: "option", prompt: "with the camera slowly pulling back or zooming out to gradually reveal the wider surrounding environment" }
                    }
                },
                "Dynamic & Special Movements": {
                    type: "group",
                    options: {
                        "Handheld / Shaky Cam": { type: "option", prompt: "filmed with an unsteady, raw handheld camera style, creating a chaotic and realistic documentary feel" },
                        "Orbit / Arc Shot": { type: "option", prompt: "with the camera smoothly orbiting in a 360-degree arc around the central subject, maintaining focus while the background spins" },
                        "Dolly Zoom (Vertigo Effect)": { type: "option", prompt: "featuring a dramatic dolly zoom or vertigo effect, where the camera moves backward while zooming in, warping the background perspective" },
                        "Crane / Jib Shot": { type: "option", prompt: "featuring a grand crane or jib shot, where the camera sweeps majestically through the air, moving up and over the scene" }
                    }
                }
            }
        },
        "Lighting & Atmosphere": {
            type: "group",
            options: {
                "Natural Time of Day": {
                    type: "group",
                    options: {
                        "Golden Hour": { type: "option", prompt: "illuminated by the soft, warm, glowing sunlight of golden hour, casting long, dramatic shadows" },
                        "Blue Hour / Twilight": { type: "option", prompt: "bathed in the cool, deep blue ambient light of twilight or blue hour, just before sunrise or after sunset" },
                        "Harsh Midday Sun": { type: "option", prompt: "lit by bright, high-contrast midday sunlight creating sharp, stark, and very dark shadows" },
                        "Nighttime / Moonlight": { type: "option", prompt: "set in a dark nighttime environment, softly illuminated by cool, silvery moonlight cutting through the darkness" }
                    }
                },
                "Studio & Artificial": {
                    type: "group",
                    options: {
                        "Cinematic / Three-point": { type: "option", prompt: "lit with professional cinematic three-point lighting, perfectly balancing key, fill, and bright rim lights for depth" },
                        "Neon / Cyberpunk": { type: "option", prompt: "illuminated by high-contrast, vibrant, and saturated neon lights, casting colorful reflections on wet surfaces" },
                        "Volumetric / God Rays": { type: "option", prompt: "featuring thick atmospheric haze that catches strong directional beams of light, creating distinct volumetric god rays" },
                        "Silhouette / Backlit": { type: "option", prompt: "strongly backlit with the primary light source directly behind the subject, turning them into a stark, dark silhouette against a bright background" },
                        "Moody / Low-key": { type: "option", prompt: "lit with moody, low-key lighting featuring deep, dramatic shadows and only small, intense pools of focused light" }
                    }
                }
            }
        }
    }
};