// Generator Registry
// Acts as a central lookup for all logic functions used in the Brain Map.
// This decouples Data (categories/*.js) from Logic (generators/*.js).

// 1. Import all generators
import * as CustomizationClothes from './generators/customization-clothes.js';
import * as CustomizationFace from '../generate/customization/male/face.js'; // Note: Path adjustment
import * as CustomizationFootwear from './generators/customization-footwear.js';
import * as CustomizationGestures from './generators/customization-gestures.js';
import * as CreativeImage from './generators/creative-image.js';
import * as FanMoment from './generators/fan-moment.js';
import * as CoupleGenerators from './generators/couple-generators.js';

// 2. Register them with unique string IDs
const registry = {
    // Couple Special
    "couple_generate": CoupleGenerators.generateCouplePrompt,

    // Customization - Clothes
    "fullOutfitColorGenerator": CustomizationClothes.fullOutfitColorGenerator,
    "generateMaleClothesDefault": CustomizationClothes.generateMaleClothesDefault,
    "getFemaleClothingColors": CustomizationClothes.getFemaleClothingColors,

    // Customization - Face
    "faceGenerators": CustomizationFace.faceGenerators,
    "generateMaleFaceDefault": CustomizationFace.generateMaleFaceDefault,

    // Customization - Footwear
    "getFootwearColors": CustomizationFootwear.getFootwearColors,

    // Customization - Gestures
    "gesturePoseOptions": CustomizationGestures.gesturePoseOptions,

    // Creative Image
    "creative_doubleExposure": CreativeImage.doubleExposureGenerator,
    "creative_popOut": CreativeImage.popOutGenerator,
    "creative_fantasyMap": CreativeImage.fantasyMapGenerator,
    "creative_knolling": CreativeImage.knollingGenerator,
    "creative_isometric": CreativeImage.isometricGenerator,
    "creative_biolum": CreativeImage.biolumGenerator,
    "creative_paperCut": CreativeImage.paperCutGenerator,
    "creative_origami": CreativeImage.origamiGenerator,
    "creative_sticker": CreativeImage.stickerGenerator,
    "creative_logo": CreativeImage.logoGenerator,
    "creative_coloring": CreativeImage.coloringPageGenerator,
    "creative_tattoo": CreativeImage.tattooGenerator,
    "creative_blueprint": CreativeImage.blueprintGenerator,
    "creative_pixel": CreativeImage.pixelArtGenerator,
    "creative_voxel": CreativeImage.voxelArtGenerator,
    "creative_lowpoly": CreativeImage.lowPolyGenerator,
    "creative_diagram": CreativeImage.diagramGenerator,
    "creative_infographic": CreativeImage.infographicGenerator,

    // Fan Moment
    "fan_actor": FanMoment.actorGenerator,
    "fan_youtuber": FanMoment.youtuberGenerator,
    "fan_musician": FanMoment.musicianGenerator,
    "fan_influencer": FanMoment.influencerGenerator,
    "fan_athlete": FanMoment.athleteGenerator,
    "fan_character": FanMoment.characterGenerator,
    "fan_director": FanMoment.directorGenerator,
    "fan_writer": FanMoment.writerGenerator,
    "fan_artist": FanMoment.artistGenerator,
    "fan_scientist": FanMoment.scientistGenerator,
    "fan_historical": FanMoment.historicalGenerator,
    "fan_business": FanMoment.businessGenerator,
    "fan_politician": FanMoment.politicianGenerator
};

// 3. Export Lookup Function
export function getGenerator(id) {
    if (!id) return null;
    const gen = registry[id];
    if (!gen) {
        console.warn(`Registry: Generator with ID '${id}' not found.`);
        return null;
    }
    return gen;
}

// Helper to inspect registry (for debugging)
export function getRegistryKeys() {
    return Object.keys(registry);
}
