// Video Simple Mode: Customization Category Brain Map
export const customizationCategory = {
    id: "customization",
    title: "Customization",
    type: "group",
    children: {
        "clothes": {
            id: "cust_clothes",
            title: "Clothes & Outfit",
            type: "category",
            promptTemplate: "wearing ${selection}",
            generator: "cust_clothes"
        },
        "accessories": {
            id: "cust_accessories",
            title: "Accessories",
            type: "category",
            promptTemplate: "with ${selection}",
            generator: "cust_accessories"
        }
    }
};