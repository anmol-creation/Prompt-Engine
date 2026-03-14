export const videoBackgroundCategory = {
    type: 'group',
    options: {
        "Nature & Outdoors": {
            type: 'group',
            options: {
                "Custom Nature Background": {
                    type: 'input',
                    prompt: "A breathtaking, highly detailed cinematic video background featuring ${input}. Ensure realistic lighting, natural atmospheric effects, and professional depth of field."
                },
                "Deep Forest": {
                    type: 'static',
                    prompt: "A dense, lush green mystical forest with cinematic volumetric sun rays piercing through the thick canopy, creating a serene and magical atmosphere."
                },
                "Snowy Mountains": {
                    type: 'static',
                    prompt: "A majestic snow-capped mountain peak during golden hour, with soft dynamic clouds rolling in the background and natural atmospheric haze."
                },
                "Ocean & Beach": {
                    type: 'static',
                    prompt: "A calm, endless ocean horizon at sunset, featuring gentle moving waves reflecting the warm, vibrant orange and pink colors of the sky."
                },
                "Desert Dunes": {
                    type: 'static',
                    prompt: "Vast, sweeping golden desert sand dunes under a clear blue sky, with subtle wind blowing fine sand across the ridges."
                }
            }
        },
        "Urban & City Life": {
            type: 'group',
            options: {
                "Custom City Background": {
                    type: 'input',
                    prompt: "A high-quality, cinematic urban background featuring ${input}. Maintain realistic architectural details and perfect lighting."
                },
                "Cyberpunk Streets": {
                    type: 'static',
                    prompt: "A neon-lit cyberpunk cityscape at night, with towering skyscrapers, holographic billboards, and rain-slicked streets reflecting vivid sci-fi colors."
                },
                "Modern Metropolis": {
                    type: 'static',
                    prompt: "A clean, bustling modern city street in broad daylight, featuring sleek glass architecture, realistic depth of field, and a highly professional commercial look."
                }
            }
        },
        "Studio Setup": {
            type: 'group',
            options: {
                "Custom Studio Background": {
                    type: 'input',
                    prompt: "A professional studio setup featuring ${input}. Ensure clean, controlled lighting and high-end production quality."
                },
                "Classic Photography Studio": {
                    type: 'static',
                    prompt: "A classic photography studio with softbox lighting, a seamless neutral backdrop, and professional camera equipment in the background."
                },
                "Modern Podcast Studio": {
                    type: 'static',
                    prompt: "A modern podcast studio with acoustic panels, warm ambient neon lights, professional microphones, and a sleek desk."
                }
            }
        },
        "Sci-Fi & Futuristic": {
            type: 'group',
            options: {
                "Custom Sci-Fi Background": {
                    type: 'input',
                    prompt: "A futuristic sci-fi environment featuring ${input}. Ensure high-tech details, glowing elements, and cinematic atmosphere."
                },
                "Spaceship Bridge": {
                    type: 'static',
                    prompt: "The bridge of an advanced spaceship with glowing holographic displays, sleek metallic surfaces, and a view of distant galaxies through the window."
                },
                "Neon Cyber City": {
                    type: 'static',
                    prompt: "A high-tech futuristic city skyline at twilight with flying vehicles, glowing neon signs, and towering mega-structures."
                }
            }
        },
        "Fantasy & Magical": {
            type: 'group',
            options: {
                "Custom Fantasy Background": {
                    type: 'input',
                    prompt: "A magical fantasy world featuring ${input}. Ensure enchanting atmosphere, ethereal lighting, and mystical elements."
                },
                "Enchanted Castle": {
                    type: 'static',
                    prompt: "A majestic ancient stone castle glowing with magical energy, surrounded by floating crystals and a starlit sky."
                },
                "Fairy Tale Garden": {
                    type: 'static',
                    prompt: "A beautiful fairy tale garden with glowing flora, sparkling dust in the air, and a serene crystal-clear pond reflecting the moonlight."
                }
            }
        }
    }
};
