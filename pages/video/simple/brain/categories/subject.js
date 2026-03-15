// Video Simple Mode: Subject Category Brain Map

export const subjectCategory = {
    id: "subject",
    title: "Subject",
    type: "group",
    children: {
        "human": {
            id: "human",
            title: "Human",
            type: "group",
            children: {
                "men": {
                    id: "human-men",
                    title: "Men",
                    type: "category",
                    promptTemplate: "featuring ${selection}",
                    generator: "subject_human_men"
                },
                "women": {
                    id: "human-women",
                    title: "Women",
                    type: "category",
                    promptTemplate: "featuring ${selection}",
                    generator: "subject_human_women"
                }
            }
        },
        "animal": {
            id: "animal",
            title: "Animal",
            type: "category",
            promptTemplate: "featuring ${selection}",
            generator: "subject_animal"
        },
        "object": {
             id: "object",
             title: "Object / Vehicle",
             type: "category",
             promptTemplate: "featuring a ${selection}",
             generator: "subject_object"
        }
    }
};
