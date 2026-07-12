export const simpleBrainMap = {
    "Plan": {
        type: "group",
        options: {
            "Project Idea": {
                type: "group",
                options: {
                    "Generate New Idea": {
                        type: "option",
                        prompt: "Generate New Idea",
                        dynamicInput: {
                            type: "text",
                            placeholder: "Examples:\n- AI tools for students\n- Website for bike riders\n- Healthcare platform\n- Local business directory\n- Portfolio for designers",
                            label: "Describe your idea or the problem you want to solve (Optional)"
                        }
                    },
                    "Improve Existing Idea": { type: "option", prompt: "Improve Existing Idea" },
                    "Expand Existing Idea": { type: "option", prompt: "Expand Existing Idea" },
                    "Validate Existing Idea": { type: "option", prompt: "Validate Existing Idea" },
                    "Convert Idea into Website Plan": { type: "option", prompt: "Convert Idea into Website Plan" }
                }
            },
            "Existing Project": { type: "group", options: {} },
            "Requirements": { type: "group", options: {} },
            "Features": { type: "group", options: {} },
            "Pages": { type: "group", options: {} },
            "Structure": { type: "group", options: {} },
            "User Flow": { type: "group", options: {} },
            "Tech Stack": { type: "group", options: {} },
            "Architecture": { type: "group", options: {} },
            "Roadmap": { type: "group", options: {} },
            "Timeline": { type: "group", options: {} },
            "Other": { type: "group", options: {} }
        }
    },
    "Create": { type: "group", options: {} },
    "Design": { type: "group", options: {} },
    "Content": { type: "group", options: {} },
    "Features": { type: "group", options: {} },
    "Manage": { type: "group", options: {} },
    "Analyze": { type: "group", options: {} },
    "Fix": { type: "group", options: {} },
    "Optimize": { type: "group", options: {} },
    "Security": { type: "group", options: {} },
    "Responsive": { type: "group", options: {} },
    "Accessibility": { type: "group", options: {} },
    "Connect": { type: "group", options: {} },
    "Test": { type: "group", options: {} },
    "Deploy": { type: "group", options: {} },
    "Migrate": { type: "group", options: {} },
    "Upgrade": { type: "group", options: {} },
    "Document": { type: "group", options: {} },
    "Remove": { type: "group", options: {} },
    "Other": { type: "group", options: {} }
};
