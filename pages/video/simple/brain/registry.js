// Video Simple Mode Registry

// 1. Import Generators
import * as BackgroundGenerators from './generators/background-generators.js';
import * as SubjectGenerators from './generators/subject-generators.js';

// 2. Register Generators
const registry = {
    // Backgrounds
    "bg_nature": () => BackgroundGenerators.natureOutdoorsGenerator,
    "bg_urban": () => BackgroundGenerators.urbanCityLifeGenerator,
    "bg_studio": () => BackgroundGenerators.studioSetupGenerator,
    "bg_scifi": () => BackgroundGenerators.scifiFuturisticGenerator,
    "bg_fantasy": () => BackgroundGenerators.fantasyMagicalGenerator,

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
