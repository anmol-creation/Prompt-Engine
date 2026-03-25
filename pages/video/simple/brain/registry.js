// Video Simple Mode Registry

// 1. Import Generators
import * as BackgroundGenerators from './generators/background-generators.js';
import * as SubjectGenerators from './generators/subject-generators.js';

// 2. Register Generators
const registry = {
    // Backgrounds (now empty since we use static promptTemplates)
    "empty_gen": () => BackgroundGenerators.empty_generator,

    // Subjects
    // People & Characters
    "sub_ppl_everyday": () => SubjectGenerators.ppl_everyday_gen,
    "sub_ppl_professions": () => SubjectGenerators.ppl_professions_gen,
    "sub_ppl_fantasy": () => SubjectGenerators.ppl_fantasy_gen,
    "sub_ppl_scifi": () => SubjectGenerators.ppl_scifi_gen,
    "sub_ppl_historical": () => SubjectGenerators.ppl_historical_gen,
    // Animals & Wildlife
    "sub_ani_pets": () => SubjectGenerators.ani_pets_gen,
    "sub_ani_wild": () => SubjectGenerators.ani_wild_gen,
    "sub_ani_birds": () => SubjectGenerators.ani_birds_gen,
    "sub_ani_aquatic": () => SubjectGenerators.ani_aquatic_gen,
    "sub_ani_mythical": () => SubjectGenerators.ani_mythical_gen,
    // Vehicles & Transport
    "sub_veh_cars": () => SubjectGenerators.veh_cars_gen,
    "sub_veh_two": () => SubjectGenerators.veh_two_gen,
    "sub_veh_air": () => SubjectGenerators.veh_air_gen,
    "sub_veh_water": () => SubjectGenerators.veh_water_gen,
    "sub_veh_scifi": () => SubjectGenerators.veh_scifi_gen,
    // Food & Drink
    "sub_food_meals": () => SubjectGenerators.food_meals_gen,
    "sub_food_desserts": () => SubjectGenerators.food_desserts_gen,
    "sub_food_bev": () => SubjectGenerators.food_bev_gen,
    "sub_food_produce": () => SubjectGenerators.food_produce_gen,
    // Objects & Items
    "sub_obj_tech": () => SubjectGenerators.obj_tech_gen,
    "sub_obj_weapons": () => SubjectGenerators.obj_weapons_gen,
    "sub_obj_magical": () => SubjectGenerators.obj_magical_gen,
    "sub_obj_everyday": () => SubjectGenerators.obj_everyday_gen,
    // Abstract & Conceptual
    "sub_abs_elements": () => SubjectGenerators.abs_elements_gen,
    "sub_abs_shapes": () => SubjectGenerators.abs_shapes_gen,
    "sub_abs_entities": () => SubjectGenerators.abs_entities_gen
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