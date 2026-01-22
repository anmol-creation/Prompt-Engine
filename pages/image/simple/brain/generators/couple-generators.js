// Couple Generators
// Implements "Brain Mapping Logic" for Couple Special Category

const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// --- Phrase Pools ---

// Romantic
const romanticPoses = [
    "holding hands while walking slowly",
    "leaning heads together comfortably",
    "looking into each other's eyes softly",
    "sharing a quiet embrace",
    "sitting close with shoulders touching"
];
const romanticLighting = [
    "bathed in soft, warm golden hour light",
    "lit by gentle candlelight warmth",
    "surrounded by a dreamy, diffused glow",
    "caught in a soft sunset ray",
    "illuminated by tender, low-contrast lighting"
];
const romanticEnvironment = [
    "in a quiet, blooming garden path",
    "on a peaceful balcony at dusk",
    "walking along a serene beach line",
    "in a cozy, intimate corner",
    "amidst a field of wildflowers"
];
const romanticAtmosphere = [
    "with a feeling of pure emotional closeness",
    "radiating a sense of quiet love",
    "capturing a truly intimate moment",
    "evoking a tender and heartfelt vibe",
    "filled with soft, romantic energy"
];

// Wedding / Pre-Wedding
const weddingPoses = [
    "standing elegantly side by side in traditional attire",
    "posing formally yet affectionately",
    "sharing a celebratory glance",
    "holding hands with a sense of occasion",
    "caught in a candid moment of joy"
];
const weddingLighting = [
    "under grand, cinematic ceremonial lighting",
    "brightly lit with a festive glow",
    "sparkling with rich, warm ambient light",
    "highlighted by clear, celebratory illumination",
    "softly focused to enhance the details"
];
const weddingEnvironment = [
    "against a backdrop of grand architectural heritage",
    "framed by floral wedding decorations",
    "in a beautifully decorated ceremonial hall",
    "amidst a vibrant outdoor celebration setup",
    "surrounded by rich cultural aesthetics"
];
const weddingAtmosphere = [
    "exuding elegance and cultural richness",
    "capturing the grandeur of the celebration",
    "full of festive joy and tradition",
    "radiating a regal wedding vibe",
    "preserving the intricate details of the occasion"
];

// Casual / Lifestyle
const casualPoses = [
    "laughing candidly while walking",
    "sitting relaxed at a coffee table",
    "captured in a spontaneous, unposed moment",
    "sharing a joke, naturally smiling",
    "walking casually down a city street"
];
const casualLighting = [
    "bathed in natural, bright daylight",
    "lit by the soft glow of a coffee shop window",
    "caught in crisp, realistic afternoon light",
    "illuminated by ambient city light",
    "fresh and airy with natural shadows"
];
const casualEnvironment = [
    "in a chic urban café setting",
    "on a lively city sidewalk",
    "relaxing in a modern living space",
    "strolling through a casual park path",
    "enjoying a weekend vibe outdoors"
];
const casualAtmosphere = [
    "feeling effortless and genuinely candid",
    "radiating a cool, everyday luxury vibe",
    "capturing a slice of real life",
    "with an authentic, influencer-style energy",
    "relaxed, happy, and full of life"
];

// Cinematic
const cinematicPoses = [
    "standing back-to-back with intensity",
    "looking towards a distant horizon together",
    "framed in a dramatic silhouette",
    "caught in a frozen moment of action",
    "posing with a sense of narrative depth"
];
const cinematicLighting = [
    "drenched in dramatic, high-contrast lighting",
    "lit by moody, directional beams",
    "caught in a cinematic 'blue hour' glow",
    "highlighted by strong rim lighting",
    "immersed in deep shadows and bright highlights"
];
const cinematicEnvironment = [
    "on a rain-slicked city street at night",
    "against a vast, epic landscape",
    "in a dimly lit, atmospheric corridor",
    "surrounded by a mysterious, foggy setting",
    "framed by imposing architectural lines"
];
const cinematicAtmosphere = [
    "looking like a still from a movie",
    "evoking a strong sense of story and drama",
    "with an intense, movie-poster quality",
    "full of depth and visual weight",
    "capturing a powerful, dramatic mood"
];

// Travel / Adventure
const travelPoses = [
    "standing on a cliff edge looking out",
    "walking away from the camera into the scene",
    "pointing towards a distant landmark",
    "captured mid-stride exploring a new place",
    "sitting together overlooking a view"
];
const travelLighting = [
    "bathed in bright, adventurous sunlight",
    "lit by the golden glow of a sunrise",
    "caught in the clear light of high altitude",
    "illuminated by dynamic, outdoor lighting",
    "fresh and vibrant natural light"
];
const travelEnvironment = [
    "atop a majestic mountain peak",
    "wandering through an ancient stone street",
    "on the edge of a vast canyon",
    "in a lush, dense forest trail",
    "overlooking a sweeping ocean vista"
];
const travelAtmosphere = [
    "evoking the thrill of discovery",
    "capturing the scale of the journey",
    "full of wanderlust and freedom",
    "radiating an adventurous spirit",
    "feeling epic and boundless"
];

// Royal / Luxury
const royalPoses = [
    "standing tall with regal posture",
    "seated gracefully on ornate furniture",
    "descending a grand staircase together",
    "posing with dignified elegance",
    "looking confident and commanding"
];
const royalLighting = [
    "bathed in rich, warm chandelier light",
    "highlighted by a soft, luxurious glow",
    "lit to emphasize textures and gold tones",
    "dramatic yet flattering premium lighting",
    "glowing with an aura of sophistication"
];
const royalEnvironment = [
    "inside a lavish palace hall",
    "in front of a grand heritage estate",
    "surrounded by velvet and gold decor",
    "in a manicured royal garden",
    "framed by opulent architectural details"
];
const royalAtmosphere = [
    "oozing premium luxury and class",
    "radiating heritage and timeless wealth",
    "feeling grand, majestic, and high-end",
    "capturing a sense of nobility",
    "elegant, sophisticated, and rich"
];

// Fashion
const fashionPoses = [
    "striking a sharp, editorial pose",
    "looking coolly detached and stylish",
    "caught in movement with fabric flowing",
    "posing with high-fashion confidence",
    "leaning angularly against a backdrop"
];
const fashionLighting = [
    "lit by crisp, studio-quality flash",
    "caught in dramatic, hard fashion lighting",
    "highlighted to accentuate clothing textures",
    "clean, bright, and commercially sharp",
    "using bold shadows for styling effect"
];
const fashionEnvironment = [
    "against a minimal, solid-colored wall",
    "on a busy, blurred fashion street",
    "in a sleek, modern architectural space",
    "on a runway-style pathway",
    "framed by abstract geometric shapes"
];
const fashionAtmosphere = [
    "looking straight out of a magazine",
    "radiating style, confidence, and edge",
    "focusing on the sharpness of the look",
    "bold, trendy, and visually dominant",
    "capturing the essence of high fashion"
];

// Fantasy / Creative
const fantasyPoses = [
    "reaching out towards floating lights",
    "standing amidst magical swirling energy",
    "looking up in wonder at the sky",
    "entwined with magical flora",
    "floating gently in a dreamlike state"
];
const fantasyLighting = [
    "glowing with ethereal, bioluminescent light",
    "bathed in surreal purple and blue hues",
    "lit by magical, sparkling particles",
    "soft, dreamlike, and otherworldly",
    "illuminated by a mystical moon"
];
const fantasyEnvironment = [
    "in an enchanted forest with giant glowing mushrooms",
    "on a cloud pathway in the sky",
    "surrounded by floating crystal islands",
    "in a mystical garden of light",
    "under a galaxy-filled night sky"
];
const fantasyAtmosphere = [
    "feeling like a beautiful dream",
    "full of magic and artistic imagination",
    "surreal, breathtaking, and creative",
    "evoking a sense of wonder and fantasy",
    "visually stunning and impossible"
];

// Moody Aesthetic
const moodyPoses = [
    "looking down in contemplation",
    "silhouetted against a dim light source",
    "sitting quietly in shadow",
    "obscured partially by foreground elements",
    "gazing intensely into the darkness"
];
const moodyLighting = [
    "low-key, with deep rich blacks",
    "lit by a single, dim light source",
    "shrouded in shadow and mystery",
    "using subtle, desaturated cool tones",
    "flickering and uncertain illumination"
];
const moodyEnvironment = [
    "in a dark, rainy room",
    "wandering a foggy night street",
    "in an abandoned, textured space",
    "against a dark, textured wall",
    "isolated in a vast, empty space"
];
const moodyAtmosphere = [
    "heavy with emotion and depth",
    "radiating a somber, artistic intensity",
    "feeling introverted and deep",
    "capturing the beauty of shadows",
    "quiet, intense, and aesthetically dark"
];

// Fun / Cute
const funPoses = [
    "jumping joyfully in the air",
    "making silly faces at each other",
    "giving a piggyback ride laughing",
    "playing with balloons or props",
    "hugging tightly with big smiles"
];
const funLighting = [
    "bright, colorful, and high-key",
    "sunny and vibrant with pop colors",
    "even, cheerful, and flattering",
    "warm and sparkling with joy",
    "fresh, clear, and energetic"
];
const funEnvironment = [
    "at a colorful carnival or fair",
    "in a park full of balloons",
    "against a bright, painted wall",
    "surrounded by bubbles or confetti",
    "in a playful, sunny meadow"
];
const funAtmosphere = [
    "bursting with youthful energy",
    "feeling incredibly cute and wholesome",
    "radiating pure happiness and fun",
    "playful, lighthearted, and sweet",
    "full of life, color, and smiles"
];

// --- Main Generator Function ---

export const generateCouplePrompt = (subType) => {
    let poses, lighting, env, atmosphere;

    switch (subType) {
        case "Romantic":
            poses = romanticPoses;
            lighting = romanticLighting;
            env = romanticEnvironment;
            atmosphere = romanticAtmosphere;
            break;
        case "Wedding / Pre-Wedding":
            poses = weddingPoses;
            lighting = weddingLighting;
            env = weddingEnvironment;
            atmosphere = weddingAtmosphere;
            break;
        case "Casual / Lifestyle":
            poses = casualPoses;
            lighting = casualLighting;
            env = casualEnvironment;
            atmosphere = casualAtmosphere;
            break;
        case "Cinematic":
            poses = cinematicPoses;
            lighting = cinematicLighting;
            env = cinematicEnvironment;
            atmosphere = cinematicAtmosphere;
            break;
        case "Travel / Adventure":
            poses = travelPoses;
            lighting = travelLighting;
            env = travelEnvironment;
            atmosphere = travelAtmosphere;
            break;
        case "Royal / Luxury":
            poses = royalPoses;
            lighting = royalLighting;
            env = royalEnvironment;
            atmosphere = royalAtmosphere;
            break;
        case "Fashion":
            poses = fashionPoses;
            lighting = fashionLighting;
            env = fashionEnvironment;
            atmosphere = fashionAtmosphere;
            break;
        case "Fantasy / Creative":
            poses = fantasyPoses;
            lighting = fantasyLighting;
            env = fantasyEnvironment;
            atmosphere = fantasyAtmosphere;
            break;
        case "Moody Aesthetic":
            poses = moodyPoses;
            lighting = moodyLighting;
            env = moodyEnvironment;
            atmosphere = moodyAtmosphere;
            break;
        case "Fun / Cute":
            poses = funPoses;
            lighting = funLighting;
            env = funEnvironment;
            atmosphere = funAtmosphere;
            break;
        default:
            // Default to Romantic if unknown
            poses = romanticPoses;
            lighting = romanticLighting;
            env = romanticEnvironment;
            atmosphere = romanticAtmosphere;
    }

    const selectedPose = randomItem(poses);
    const selectedLighting = randomItem(lighting);
    const selectedEnv = randomItem(env);
    const selectedAtmosphere = randomItem(atmosphere);

    // Natural Language Assembly
    // "A couple [pose], [environment]. The scene is [lighting], [atmosphere]."
    // Variation for natural feel:
    // "Capture a couple [pose] [environment], [lighting]. The image should be [atmosphere]."

    const templates = [
        `Capture a couple ${selectedPose} ${selectedEnv}. The scene is ${selectedLighting}, ${selectedAtmosphere}.`,
        `A couple, ${selectedPose}, ${selectedEnv}. They are ${selectedLighting}, ${selectedAtmosphere}.`,
        `Create an image of a couple ${selectedPose} ${selectedEnv}, ${selectedLighting}, ${selectedAtmosphere}.`
    ];

    return randomItem(templates);
};
