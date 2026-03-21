// Video Simple Mode: Action & Motion Category Brain Map
export const actionMotionCategory = {
    id: "action_motion",
    title: "Action & Motion",
    type: "group",
    children: {
        "movement": {
            id: "act_movement",
            title: "General Movement",
            type: "category",
            promptTemplate: "${selection}",
            generator: "act_movement"
        },
        "facial": {
            id: "act_facial",
            title: "Facial Expressions",
            type: "category",
            promptTemplate: "${selection}",
            generator: "act_facial"
        }
    }
};