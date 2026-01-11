export const getFootwearColors = (shoeName) => {
    return {
        "Color": {
            type: "group",
            options: {
                "Black": { type: "option", prompt: `wearing Black ${shoeName}` },
                "White": { type: "option", prompt: `wearing White ${shoeName}` },
                "Brown": { type: "option", prompt: `wearing Brown ${shoeName}` },
                "Tan": { type: "option", prompt: `wearing Tan ${shoeName}` },
                "Dark Brown": { type: "option", prompt: `wearing Dark Brown ${shoeName}` },
                "Grey": { type: "option", prompt: `wearing Grey ${shoeName}` },
                "Navy Blue": { type: "option", prompt: `wearing Navy Blue ${shoeName}` },
                "Beige": { type: "option", prompt: `wearing Beige ${shoeName}` },
                "Red": { type: "option", prompt: `wearing Red ${shoeName}` },
                "Multi-colored": { type: "option", prompt: `wearing Multi-colored ${shoeName}` }
            }
        }
    };
};
