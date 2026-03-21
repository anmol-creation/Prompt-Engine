// Video Simple Mode Registry

// 1. Import Generators
import * as BackgroundGenerators from './generators/background-generators.js';
import * as SubjectGenerators from './generators/subject-generators.js';

// 2. Register Generators
const registry = {
    // Backgrounds
    "bg_nature_landscapes": () => BackgroundGenerators.bg_nature_landscapes,
    "bg_urban_cityscapes": () => BackgroundGenerators.bg_urban_cityscapes,
    "bg_indoors_rooms": () => BackgroundGenerators.bg_indoors_rooms,
    "bg_cinematic_studio": () => BackgroundGenerators.bg_cinematic_studio,
    "bg_historical_period": () => BackgroundGenerators.bg_historical_period,
    "bg_scifi_fantasy": () => BackgroundGenerators.bg_scifi_fantasy,
    "bg_weather_atmosphere": () => BackgroundGenerators.bg_weather_atmosphere,

    // Subjects
    "subject_human_men": () => SubjectGenerators.menGenerator,
    "subject_human_women": () => SubjectGenerators.womenGenerator,
    "subject_animal": () => SubjectGenerators.animalGenerator,
    "subject_object": () => SubjectGenerators.objectGenerator
};

export function getGenerator(id) {
    if (!id) return null;
    const genFn = registry[id];
    if (!genFn) {
        console.warn(`Registry: Generator with ID '${id}' not found.`);
        return null;
    }
    // Return array if generator is a function wrapper
    return genFn();
}
