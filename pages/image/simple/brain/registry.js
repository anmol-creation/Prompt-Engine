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
    "creative_movies": CreativeImage.moviesGenerator,
    "creative_webSeries": CreativeImage.webSeriesGenerator,
    "creative_toons": CreativeImage.toonsGenerator,
    "creative_universe": CreativeImage.universeGenerator,
    "creative_mythology": CreativeImage.mythologyGenerator,
    "creative_marvelRole": CreativeImage.marvelRoleGenerator,
    "creative_dcRole": CreativeImage.dcRoleGenerator,
    "creative_swRole": CreativeImage.starWarsRoleGenerator,
    "creative_hpRole": CreativeImage.harryPotterRoleGenerator,
    "creative_lotrRole": CreativeImage.lotrRoleGenerator,
    "creative_gotRole": CreativeImage.gotRoleGenerator,
    "creative_acRole": CreativeImage.acRoleGenerator,
    "creative_mkRole": CreativeImage.mkRoleGenerator,
    "creative_cyberpunkRole": CreativeImage.cyberpunkRoleGenerator,
    "creative_gowRole": CreativeImage.gowRoleGenerator,
    "creative_history": CreativeImage.historyGenerator,
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
    "fan_actress": FanMoment.actressGenerator,
    "fan_choreographer": FanMoment.choreographerGenerator,
    "fan_cinematographer": FanMoment.cinematographerGenerator,
    "fan_director": FanMoment.directorGenerator,
    "fan_editor": FanMoment.editorGenerator,
    "fan_musicComposer": FanMoment.musicComposerGenerator,
    "fan_playbackSinger": FanMoment.playbackSingerGenerator,
    "fan_producer": FanMoment.producerGenerator,
    "fan_screenwriter": FanMoment.screenwriterGenerator,
    "fan_filmStar": FanMoment.filmStarGenerator,

    "fan_sportsStar": FanMoment.sportsStarGenerator,
    "fan_cricket": FanMoment.cricketGenerator,
    "fan_football": FanMoment.footballGenerator,
    "fan_basketball": FanMoment.basketballGenerator,
    "fan_tennis": FanMoment.tennisGenerator,
    "fan_athletics": FanMoment.athleticsGenerator,
    "fan_otherSports": FanMoment.otherSportsGenerator,
    "fan_sportsLegend": FanMoment.sportsLegendGenerator,

    "fan_musician": FanMoment.musicianGenerator,
    "fan_singer": FanMoment.singerGenerator,
    "fan_rapper": FanMoment.rapperGenerator,
    "fan_vocalist": FanMoment.vocalistGenerator,
    "fan_composer": FanMoment.composerGenerator,
    "fan_lyricist": FanMoment.lyricistGenerator,
    "fan_musicProducer": FanMoment.musicProducerGenerator,
    "fan_instrumentalArtist": FanMoment.instrumentalArtistGenerator,
    "fan_bandMember": FanMoment.bandMemberGenerator,
    "fan_dj": FanMoment.djGenerator,
    "fan_performer": FanMoment.performerGenerator,

    "fan_politician": FanMoment.politicianGenerator,
    "fan_president": FanMoment.presidentGenerator,
    "fan_pm": FanMoment.pmGenerator,
    "fan_cm": FanMoment.cmGenerator,
    "fan_minister": FanMoment.ministerGenerator,
    "fan_parliamentMember": FanMoment.parliamentMemberGenerator,
    "fan_partyLeader": FanMoment.partyLeaderGenerator,
    "fan_politicalSpeaker": FanMoment.politicalSpeakerGenerator,
    "fan_socialReformLeader": FanMoment.socialReformLeaderGenerator,

    "fan_contentCreator": FanMoment.contentCreatorGenerator,
    "fan_youtuber": FanMoment.youtuberGenerator,
    "fan_vlogger": FanMoment.vloggerGenerator,
    "fan_streamer": FanMoment.streamerGenerator,
    "fan_gamer": FanMoment.gamerGenerator,
    "fan_influencer": FanMoment.influencerGenerator,
    "fan_shortFormCreator": FanMoment.shortFormCreatorGenerator,
    "fan_educator": FanMoment.educatorGenerator,
    "fan_techCreator": FanMoment.techCreatorGenerator,

    "fan_businessLeader": FanMoment.businessLeaderGenerator,
    "fan_entrepreneur": FanMoment.entrepreneurGenerator,
    "fan_founder": FanMoment.founderGenerator,
    "fan_ceo": FanMoment.ceoGenerator,
    "fan_executive": FanMoment.executiveGenerator,
    "fan_innovator": FanMoment.innovatorGenerator,
    "fan_industryLeader": FanMoment.industryLeaderGenerator,
    "fan_businessSpeaker": FanMoment.businessSpeakerGenerator,

    "fan_speakerAuthor": FanMoment.speakerAuthorGenerator,
    "fan_motivationalSpeaker": FanMoment.motivationalSpeakerGenerator,
    "fan_thoughtLeader": FanMoment.thoughtLeaderGenerator,
    "fan_author": FanMoment.authorGenerator,
    "fan_bookWriter": FanMoment.bookWriterGenerator,
    "fan_professor": FanMoment.professorGenerator,

    "fan_tvPersonality": FanMoment.tvPersonalityGenerator,
    "fan_host": FanMoment.hostGenerator,
    "fan_anchor": FanMoment.anchorGenerator,
    "fan_realityStar": FanMoment.realityStarGenerator,
    "fan_judge": FanMoment.judgeGenerator,
    "fan_newsAnchor": FanMoment.newsAnchorGenerator,
    "fan_journalist": FanMoment.journalistGenerator,

    "fan_digitalCeleb": FanMoment.digitalCelebGenerator,
    "fan_socialPersonality": FanMoment.socialPersonalityGenerator,
    "fan_internetCeleb": FanMoment.internetCelebGenerator,
    "fan_memeCreator": FanMoment.memeCreatorGenerator,
    "fan_trendCreator": FanMoment.trendCreatorGenerator,

    "fan_globalIcon": FanMoment.globalIconGenerator,
    "fan_culturalIcon": FanMoment.culturalIconGenerator,
    "fan_intlCeleb": FanMoment.intlCelebGenerator,
    "fan_multiDomain": FanMoment.multiDomainGenerator
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
