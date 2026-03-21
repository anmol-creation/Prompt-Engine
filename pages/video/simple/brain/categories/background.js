// Video Simple Mode: Background Category Brain Map
export const backgroundCategory = {
    id: "background",
    title: "Background",
    type: "group",
    children: {
        "nature_landscapes": {
            id: "bg_nature",
            title: "Nature & Landscapes",
            type: "group",
            children: {
                "mountains": { id: "nat_mountains", title: "Mountains", type: "category", promptTemplate: "set against a breathtaking background of majestic snow-capped mountain peaks towering over a deep valley, with clouds slowly rolling across the craggy ridges", generator: "empty_gen" },
                "forests": { id: "nat_forests", title: "Forests", type: "category", promptTemplate: "set against a breathtaking background of a dense, ancient forest with tall pine trees, sunbeams filtering softly through the thick canopy and a gentle breeze rustling the leaves", generator: "empty_gen" },
                "deserts": { id: "nat_deserts", title: "Deserts", type: "category", promptTemplate: "set against a breathtaking background of endless, rolling sand dunes under a scorching midday sun, with heat waves visibly shimmering across the vast, arid landscape", generator: "empty_gen" },
                "oceans": { id: "nat_oceans", title: "Oceans", type: "category", promptTemplate: "set against a breathtaking background of a dynamic coastline where powerful deep-blue ocean waves constantly crash against rugged dark cliffs, sending white sea spray into the air", generator: "empty_gen" },
                "valleys": { id: "nat_valleys", title: "Valleys", type: "category", promptTemplate: "set against a breathtaking background of a lush, emerald-green valley floor featuring a winding, crystal-clear river, surrounded by gentle rolling hills blooming with wildflowers", generator: "empty_gen" }
            }
        },
        "urban_cityscapes": {
            id: "bg_urban",
            title: "Urban & Cityscapes",
            type: "group",
            children: {
                "cyberpunk": { id: "urb_cyberpunk", title: "Cyberpunk City", type: "category", promptTemplate: "in a bustling environment of a towering cyberpunk metropolis at night, drenched in rain, with massive glowing neon signs reflecting intensely off slick, dark pavement", generator: "empty_gen" },
                "tokyo": { id: "urb_tokyo", title: "Tokyo Streets", type: "category", promptTemplate: "in a bustling environment of bustling Tokyo streets at twilight, tightly packed with pedestrians and brightly lit storefronts casting colorful light onto the wet asphalt", generator: "empty_gen" },
                "ny": { id: "urb_ny", title: "New York at Night", type: "category", promptTemplate: "in a bustling environment of a classic New York City avenue at night, featuring a constant stream of yellow taxis and towering skyscrapers glowing with internal office lights", generator: "empty_gen" },
                "suburban": { id: "urb_suburban", title: "Quiet Suburban", type: "category", promptTemplate: "in a bustling environment of a peaceful suburban neighborhood street lined with large oak trees, manicured lawns, and cozy houses bathed in the warm, long shadows of late afternoon", generator: "empty_gen" },
                "alleys": { id: "urb_alleys", title: "Dark Alleys", type: "category", promptTemplate: "in a bustling environment of a narrow, gritty urban alleyway barely lit by a single flickering streetlamp, with brick walls covered in faded graffiti and a sense of isolation", generator: "empty_gen" }
            }
        },
        "indoors_rooms": {
            id: "bg_indoors",
            title: "Indoors & Rooms",
            type: "group",
            children: {
                "bedroom": { id: "ind_bedroom", title: "Cozy Bedroom", type: "category", promptTemplate: "filmed inside a cozy, softly lit bedroom decorated with warm fairy lights, thick knitted blankets, and morning sunlight gently pouring through a sheer white curtain", generator: "empty_gen" },
                "lab": { id: "ind_lab", title: "High-tech Lab", type: "category", promptTemplate: "filmed inside a pristine, sterile high-tech laboratory filled with sleek stainless steel surfaces, glowing holographic displays, and softly humming scientific equipment", generator: "empty_gen" },
                "castle": { id: "ind_castle", title: "Royal Castle Hall", type: "category", promptTemplate: "filmed inside a grand medieval castle hall featuring towering stone arches, enormous stained glass windows, and heavy velvet tapestries hanging from the walls", generator: "empty_gen" },
                "office": { id: "ind_office", title: "Modern Office", type: "category", promptTemplate: "filmed inside a sleek, modern open-plan office space on a high floor, featuring minimalist glass desks, potted plants, and massive floor-to-ceiling windows overlooking a sunny city", generator: "empty_gen" },
                "factory": { id: "ind_factory", title: "Abandoned Factory", type: "category", promptTemplate: "filmed inside a massive abandoned industrial factory with broken skylights, rusted heavy machinery, and thick dust motes floating visibly in sharp shafts of natural light", generator: "empty_gen" }
            }
        },
        "cinematic_studio": {
            id: "bg_studio",
            title: "Cinematic & Studio Sets",
            type: "group",
            children: {
                "solid": { id: "stu_solid", title: "Solid Color Backdrop", type: "category", promptTemplate: "on a cinematic set featuring a perfectly seamless, vibrant solid-color studio backdrop providing intense, uniform contrast with no distracting elements", generator: "empty_gen" },
                "neon": { id: "stu_neon", title: "Neon Studio", type: "category", promptTemplate: "on a cinematic set featuring a dark cinematic studio environment aggressively illuminated by intersecting beams of bright neon pink and deep electric blue lights", generator: "empty_gen" },
                "spotlight": { id: "stu_spot", title: "Spotlight Stage", type: "category", promptTemplate: "on a cinematic set featuring a completely dark, empty theatrical stage suddenly pierced by a single, powerful, sharp white spotlight beaming directly down from the ceiling", generator: "empty_gen" },
                "white": { id: "stu_white", title: "Infinite White Room", type: "category", promptTemplate: "on a cinematic set featuring a surreal, boundless white space with no visible corners or edges, bathed in bright, soft, omnidirectional lighting that eliminates all shadows", generator: "empty_gen" },
                "green": { id: "stu_green", title: "Green Screen Stage", type: "category", promptTemplate: "on a cinematic set featuring a professional film production set featuring an expansive green screen cyclorama wall, complete with heavy c-stands and large diffuse softbox lights", generator: "empty_gen" }
            }
        },
        "historical_period": {
            id: "bg_history",
            title: "Historical & Period Settings",
            type: "group",
            children: {
                "medieval": { id: "his_medieval", title: "Medieval Village", type: "category", promptTemplate: "transported to a historical bustling medieval European village square complete with half-timbered thatched-roof cottages, a central stone well, and dirt pathways", generator: "empty_gen" },
                "rome": { id: "his_rome", title: "Ancient Rome", type: "category", promptTemplate: "transported to a historical grand, sun-baked marble columns and sprawling plazas of an ancient Roman city, featuring towering monuments and statues under a clear blue sky", generator: "empty_gen" },
                "wildwest": { id: "his_west", title: "Wild West Saloon", type: "category", promptTemplate: "transported to a historical dusty, wooden exterior of a classic Wild West saloon town, featuring wide dirt roads, wooden boardwalks, and swinging saloon doors", generator: "empty_gen" },
                "london": { id: "his_london", title: "Victorian London", type: "category", promptTemplate: "transported to a historical fog-drenched, cobblestone street in 19th-century Victorian London, illuminated faintly by the warm, dim glow of authentic gaslight street lamps", generator: "empty_gen" },
                "speakeasy": { id: "his_speak", title: "1920s Speakeasy", type: "category", promptTemplate: "transported to a historical dimly lit, opulent 1920s speakeasy featuring rich mahogany wood paneling, velvet curtains, and the smoky ambiance of the jazz age", generator: "empty_gen" }
            }
        },
        "scifi_fantasy": {
            id: "bg_scifi",
            title: "Sci-Fi & Fantasy Worlds",
            type: "group",
            children: {
                "alien": { id: "sci_alien", title: "Alien Planet", type: "category", promptTemplate: "in a fantastical setting of a surreal alien landscape featuring bizarre, glowing bioluminescent flora, strange towering rock formations, and multiple oversized moons hanging in a purple sky", generator: "empty_gen" },
                "floating": { id: "sci_float", title: "Floating Islands", type: "category", promptTemplate: "in a fantastical setting of massive chunks of earth and ancient ruins effortlessly floating mid-air amongst fluffy white clouds, connected by crumbling stone bridges in a magical sky", generator: "empty_gen" },
                "magic": { id: "sci_magic", title: "Magic Forest", type: "category", promptTemplate: "in a fantastical setting of an enchanted, deeply mystical forest where the trees possess glowing blue bark and the air is thick with sparkling, floating fairy dust", generator: "empty_gen" },
                "spaceship": { id: "sci_ship", title: "Spaceship Interior", type: "category", promptTemplate: "in a fantastical setting of the sleek, futuristic corridor of a deep-space starship, featuring glowing metallic panels, geometric doors, and a large viewport showing distant, swirling galaxies", generator: "empty_gen" },
                "ruin": { id: "sci_ruin", title: "Post-Apocalyptic Ruin", type: "category", promptTemplate: "in a fantastical setting of the desolate, overgrown ruins of a once-great modern city, where nature has entirely reclaimed the crumbling concrete skyscrapers and rusted cars", generator: "empty_gen" }
            }
        },
        "weather_atmosphere": {
            id: "bg_weather",
            title: "Weather & Atmosphere",
            type: "group",
            children: {
                "rain": { id: "wth_rain", title: "Heavy Rainstorm", type: "category", promptTemplate: "with a dramatic atmosphere of a dramatic scene completely enveloped in a torrential downpour, with heavy raindrops violently splashing on the ground and frequent, bright flashes of distant lightning", generator: "empty_gen" },
                "fog": { id: "wth_fog", title: "Dense Fog", type: "category", promptTemplate: "with a dramatic atmosphere of an incredibly thick, mysterious grey fog that heavily obscures the background, severely limiting visibility and creating a highly cinematic, tense mood", generator: "empty_gen" },
                "snow": { id: "wth_snow", title: "Snow Blizzard", type: "category", promptTemplate: "with a dramatic atmosphere of a blinding, intense winter blizzard with powerful, howling winds violently whipping thick, white snowflakes across a completely frozen landscape", generator: "empty_gen" },
                "sunset": { id: "wth_sunset", title: "Golden Hour Sunset", type: "category", promptTemplate: "with a dramatic atmosphere of a stunning, peaceful landscape bathed in the warm, rich, golden-orange light of a setting sun that casts long, dramatic, beautiful shadows", generator: "empty_gen" },
                "storm": { id: "wth_storm", title: "Thunderstorm", type: "category", promptTemplate: "with a dramatic atmosphere of an ominous, turbulent sky filled with dark, rolling, heavy cumulonimbus clouds, violently illuminated by massive, branching strikes of purple lightning", generator: "empty_gen" }
            }
        }
    }
};
