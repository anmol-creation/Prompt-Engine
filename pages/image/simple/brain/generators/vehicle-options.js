export const getVehicleOptions = (basePrompt) => ({
    "Add Vehicle (Optional)": {
        type: "group",
        options: {
            "Cars": {
                type: "group",
                options: {
                    "Sedan": { type: "static", prompt: `${basePrompt} with a Sedan in the background` },
                    "SUV": { type: "static", prompt: `${basePrompt} with a SUV in the background` },
                    "Sports Car": { type: "static", prompt: `${basePrompt} with a Sports Car in the background` },
                    "Hatchback": { type: "static", prompt: `${basePrompt} with a Hatchback in the background` },
                    "Convertible": { type: "static", prompt: `${basePrompt} with a Convertible in the background` },
                    "Vintage Car": { type: "static", prompt: `${basePrompt} with a Vintage Car in the background` },
                    "Off-road Jeep": { type: "static", prompt: `${basePrompt} with a Off-road Jeep in the background` }
                }
            },
            "Bikes (Motorcycles)": {
                type: "group",
                options: {
                    "Sports Bike": { type: "static", prompt: `${basePrompt} with a Sports Bike parked nearby` },
                    "Cruiser": { type: "static", prompt: `${basePrompt} with a Cruiser parked nearby` },
                    "Scooter": { type: "static", prompt: `${basePrompt} with a Scooter parked nearby` },
                    "Dirt Bike": { type: "static", prompt: `${basePrompt} with a Dirt Bike parked nearby` },
                    "Cafe Racer": { type: "static", prompt: `${basePrompt} with a Cafe Racer parked nearby` }
                }
            },
            "Cycles (Bicycles)": {
                type: "group",
                options: {
                    "City Bicycle": { type: "static", prompt: `${basePrompt} with a City Bicycle nearby` },
                    "Mountain Bike": { type: "static", prompt: `${basePrompt} with a Mountain Bike nearby` },
                    "Racing Cycle": { type: "static", prompt: `${basePrompt} with a Racing Cycle nearby` },
                    "BMX": { type: "static", prompt: `${basePrompt} with a BMX nearby` },
                    "Delivery Cycle": { type: "static", prompt: `${basePrompt} with a Delivery Cycle nearby` }
                }
            },
            "Public Transport": {
                type: "group",
                options: {
                    "City Bus": { type: "static", prompt: `${basePrompt} with a City Bus passing by` },
                    "School Bus": { type: "static", prompt: `${basePrompt} with a School Bus passing by` },
                    "Double Decker Bus": { type: "static", prompt: `${basePrompt} with a Double Decker Bus passing by` },
                    "Yellow Taxi": { type: "static", prompt: `${basePrompt} with a Yellow Taxi passing by` },
                    "Modern Cab": { type: "static", prompt: `${basePrompt} with a Modern Cab passing by` },
                    "Auto Rickshaw": { type: "static", prompt: `${basePrompt} with a Auto Rickshaw passing by` },
                    "Tram": { type: "static", prompt: `${basePrompt} with a Tram passing by` }
                }
            }
        }
    }
});
