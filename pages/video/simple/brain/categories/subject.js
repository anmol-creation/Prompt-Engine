// Video Simple Mode: Subject Category Brain Map

export const subjectCategory = {
    id: "subject",
    title: "Subject",
    type: "group",
    children: {
        "people_characters": {
            id: "sub_people",
            title: "People & Characters",
            type: "group",
            children: {
                "everyday": { id: "ppl_everyday", title: "Everyday People", type: "category", promptTemplate: "featuring a cinematic shot of ${selection}", generator: "sub_ppl_everyday" },
                "professions": { id: "ppl_prof", title: "Professions", type: "category", promptTemplate: "featuring a cinematic shot of ${selection} in their element", generator: "sub_ppl_professions" },
                "fantasy": { id: "ppl_fantasy", title: "Fantasy Characters", type: "category", promptTemplate: "featuring a cinematic shot of ${selection}", generator: "sub_ppl_fantasy" },
                "scifi": { id: "ppl_scifi", title: "Sci-Fi Characters", type: "category", promptTemplate: "featuring a cinematic shot of ${selection}", generator: "sub_ppl_scifi" },
                "historical": { id: "ppl_historical", title: "Historical Figures", type: "category", promptTemplate: "featuring a cinematic shot of ${selection}", generator: "sub_ppl_historical" }
            }
        },
        "animals_wildlife": {
            id: "sub_animals",
            title: "Animals & Wildlife",
            type: "group",
            children: {
                "pets": { id: "ani_pets", title: "Pets", type: "category", promptTemplate: "featuring a close-up of ${selection}", generator: "sub_ani_pets" },
                "wild": { id: "ani_wild", title: "Wild Animals", type: "category", promptTemplate: "featuring a majestic ${selection} in its natural habitat", generator: "sub_ani_wild" },
                "birds": { id: "ani_birds", title: "Birds", type: "category", promptTemplate: "featuring a beautifully detailed ${selection} in mid-flight", generator: "sub_ani_birds" },
                "aquatic": { id: "ani_aquatic", title: "Aquatic Creatures", type: "category", promptTemplate: "featuring a graceful ${selection} swimming underwater", generator: "sub_ani_aquatic" },
                "mythical": { id: "ani_mythical", title: "Mythical Creatures", type: "category", promptTemplate: "featuring a legendary ${selection} standing proudly", generator: "sub_ani_mythical" }
            }
        },
        "vehicles_transport": {
            id: "sub_vehicles",
            title: "Vehicles & Transport",
            type: "group",
            children: {
                "cars": { id: "veh_cars", title: "Cars", type: "category", promptTemplate: "focused on ${selection} driving dynamically", generator: "sub_veh_cars" },
                "two_wheelers": { id: "veh_two", title: "Two Wheelers", type: "category", promptTemplate: "focused on ${selection} cruising smoothly", generator: "sub_veh_two" },
                "aircraft": { id: "veh_air", title: "Aircraft", type: "category", promptTemplate: "focused on ${selection} soaring through the sky", generator: "sub_veh_air" },
                "watercraft": { id: "veh_water", title: "Watercraft", type: "category", promptTemplate: "focused on ${selection} cutting through the waves", generator: "sub_veh_water" },
                "scifi_veh": { id: "veh_scifi", title: "Sci-Fi Vehicles", type: "category", promptTemplate: "focused on ${selection} maneuvering effortlessly", generator: "sub_veh_scifi" }
            }
        },
        "food_drink": {
            id: "sub_food",
            title: "Food & Drink",
            type: "group",
            children: {
                "meals": { id: "food_meals", title: "Prepared Meals", type: "category", promptTemplate: "highlighting a mouth-watering ${selection}", generator: "sub_food_meals" },
                "desserts": { id: "food_desserts", title: "Desserts & Sweets", type: "category", promptTemplate: "highlighting a deliciously decadent ${selection}", generator: "sub_food_desserts" },
                "beverages": { id: "food_bev", title: "Beverages", type: "category", promptTemplate: "highlighting a perfectly prepared ${selection} with condensation and dynamic light", generator: "sub_food_bev" },
                "produce": { id: "food_produce", title: "Fresh Produce", type: "category", promptTemplate: "highlighting vibrant, fresh ${selection}", generator: "sub_food_produce" }
            }
        },
        "objects_items": {
            id: "sub_objects",
            title: "Objects & Items",
            type: "group",
            children: {
                "tech": { id: "obj_tech", title: "Tech & Gadgets", type: "category", promptTemplate: "centering on a sleek ${selection}", generator: "sub_obj_tech" },
                "weapons": { id: "obj_weapons", title: "Weapons & Tools", type: "category", promptTemplate: "centering on a highly detailed ${selection}", generator: "sub_obj_weapons" },
                "magical": { id: "obj_magical", title: "Magical Items", type: "category", promptTemplate: "centering on a glowing, mystical ${selection}", generator: "sub_obj_magical" },
                "everyday_obj": { id: "obj_everyday", title: "Everyday Objects", type: "category", promptTemplate: "centering on an ordinary but beautifully lit ${selection}", generator: "sub_obj_everyday" }
            }
        },
        "abstract_conceptual": {
            id: "sub_abstract",
            title: "Abstract & Conceptual",
            type: "group",
            children: {
                "elements": { id: "abs_elements", title: "Elements", type: "category", promptTemplate: "manifesting as a raw ${selection}", generator: "sub_abs_elements" },
                "shapes": { id: "abs_shapes", title: "Shapes", type: "category", promptTemplate: "manifesting as a mesmerizing ${selection}", generator: "sub_abs_shapes" },
                "entities": { id: "abs_entities", title: "Entities", type: "category", promptTemplate: "manifesting as an ethereal ${selection}", generator: "sub_abs_entities" }
            }
        }
    }
};