// Video Simple Mode Registry

// 1. Import Generators
import * as BackgroundGenerators from './generators/background-generators.js';
import * as SubjectGenerators from './generators/subject-generators.js';

// 2. Register Generators
const registry = {
    // Backgrounds (now empty since we use static promptTemplates)
    "empty_gen": () => BackgroundGenerators.empty_generator,

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
