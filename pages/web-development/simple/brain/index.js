export const simpleBrainMap = {
    "Plan": {
        type: "group",
        options: {
            "Project Idea": {
                type: "group",
                options: {
                    "Generate New Idea": {
                        type: "group",
                        options: {
                            "Field": {
                                type: "group",
                                options: {
                                    "AI": { type: "option", prompt: "AI" },
                                    "Education": { type: "option", prompt: "Education" },
                                    "Healthcare": { type: "option", prompt: "Healthcare" },
                                    "Finance": { type: "option", prompt: "Finance" },
                                    "Social Media": { type: "option", prompt: "Social Media" },
                                    "E-commerce": { type: "option", prompt: "E-commerce" },
                                    "Productivity": { type: "option", prompt: "Productivity" },
                                    "Travel": { type: "option", prompt: "Travel" },
                                    "Gaming": { type: "option", prompt: "Gaming" },
                                    "Entertainment": { type: "option", prompt: "Entertainment" },
                                    "Business": { type: "option", prompt: "Business" },
                                    "Community": { type: "option", prompt: "Community" },
                                    "News": { type: "option", prompt: "News" },
                                    "Portfolio": { type: "option", prompt: "Portfolio" },
                                    "Food": { type: "option", prompt: "Food" },
                                    "Sports": { type: "option", prompt: "Sports" },
                                    "Real Estate": { type: "option", prompt: "Real Estate" },
                                    "Job & Career": { type: "option", prompt: "Job & Career" },
                                    "Lifestyle": { type: "option", prompt: "Lifestyle" },
                                    "Other": { type: "option", prompt: "Other" }
                                }
                            },
                            "Target Audience": {
                                type: "group",
                                options: {
                                    "Everyone": { type: "option", prompt: "Everyone" },
                                    "Students": { type: "option", prompt: "Students" },
                                    "Teachers": { type: "option", prompt: "Teachers" },
                                    "Developers": { type: "option", prompt: "Developers" },
                                    "Designers": { type: "option", prompt: "Designers" },
                                    "Creators": { type: "option", prompt: "Creators" },
                                    "Businesses": { type: "option", prompt: "Businesses" },
                                    "Startups": { type: "option", prompt: "Startups" },
                                    "Freelancers": { type: "option", prompt: "Freelancers" },
                                    "Professionals": { type: "option", prompt: "Professionals" },
                                    "Children": { type: "option", prompt: "Children" },
                                    "Parents": { type: "option", prompt: "Parents" },
                                    "Local Community": { type: "option", prompt: "Local Community" },
                                    "Other": { type: "option", prompt: "Other" }
                                }
                            },
                            "Goal": {
                                type: "group",
                                options: {
                                    "Solve a Problem": { type: "option", prompt: "Solve a Problem" },
                                    "Save Time": { type: "option", prompt: "Save Time" },
                                    "Increase Productivity": { type: "option", prompt: "Increase Productivity" },
                                    "Learning": { type: "option", prompt: "Learning" },
                                    "Business Growth": { type: "option", prompt: "Business Growth" },
                                    "Community Building": { type: "option", prompt: "Community Building" },
                                    "Entertainment": { type: "option", prompt: "Entertainment" },
                                    "Information Sharing": { type: "option", prompt: "Information Sharing" },
                                    "Sell Products": { type: "option", prompt: "Sell Products" },
                                    "Sell Services": { type: "option", prompt: "Sell Services" },
                                    "Generate Leads": { type: "option", prompt: "Generate Leads" },
                                    "Brand Awareness": { type: "option", prompt: "Brand Awareness" },
                                    "Other": { type: "option", prompt: "Other" }
                                }
                            },
                            "Platform": {
                                type: "group",
                                options: {
                                    "Website": { type: "option", prompt: "Website" },
                                    "Web App": { type: "option", prompt: "Web App" },
                                    "SaaS Platform": { type: "option", prompt: "SaaS Platform" },
                                    "Dashboard": { type: "option", prompt: "Dashboard" },
                                    "Marketplace": { type: "option", prompt: "Marketplace" },
                                    "Community Platform": { type: "option", prompt: "Community Platform" },
                                    "Landing Page": { type: "option", prompt: "Landing Page" },
                                    "Portfolio": { type: "option", prompt: "Portfolio" },
                                    "Directory": { type: "option", prompt: "Directory" },
                                    "Blog": { type: "option", prompt: "Blog" },
                                    "Other": { type: "option", prompt: "Other" }
                                }
                            },
                            "Complexity": {
                                type: "group",
                                options: {
                                    "Simple": { type: "option", prompt: "Simple" },
                                    "Medium": { type: "option", prompt: "Medium" },
                                    "Advanced": { type: "option", prompt: "Advanced" }
                                }
                            },
                            "Monetization": {
                                type: "group",
                                options: {
                                    "Free": { type: "option", prompt: "Free" },
                                    "Subscription": { type: "option", prompt: "Subscription" },
                                    "One-time Purchase": { type: "option", prompt: "One-time Purchase" },
                                    "Freemium": { type: "option", prompt: "Freemium" },
                                    "Advertisements": { type: "option", prompt: "Advertisements" },
                                    "Donations": { type: "option", prompt: "Donations" },
                                    "Not Required": { type: "option", prompt: "Not Required" },
                                    "Other": { type: "option", prompt: "Other" }
                                }
                            },
                            "Technology Preference": {
                                type: "group",
                                options: {
                                    "No Preference": { type: "option", prompt: "No Preference" },
                                    "React": { type: "option", prompt: "React" },
                                    "Next.js": { type: "option", prompt: "Next.js" },
                                    "Vue": { type: "option", prompt: "Vue" },
                                    "Angular": { type: "option", prompt: "Angular" },
                                    "HTML / CSS / JavaScript": { type: "option", prompt: "HTML / CSS / JavaScript" },
                                    "Other": { type: "option", prompt: "Other" }
                                }
                            },
                            "Additional Requirements": {
                                type: "group",
                                options: {
                                    "Add Details": {
                                        type: "option",
                                        prompt: "",
                                        dynamicInput: {
                                            type: "text",
                                            placeholder: "Describe any specific requirement that cannot be selected above.\n\nExamples:\n- Modern futuristic design\n- Focus on mobile users\n- Multi-language support\n- AI-powered features\n- Dark mode by default",
                                            label: "Additional Requirements (Optional)"
                                        }
                                    }
                                }
                            },
                            "Output Format": {
                                type: "group",
                                options: {
                                    "Quick Idea": { type: "option", prompt: "Quick Idea" },
                                    "Detailed Plan": { type: "option", prompt: "Detailed Plan" },
                                    "Startup Proposal": { type: "option", prompt: "Startup Proposal" },
                                    "Technical Blueprint": { type: "option", prompt: "Technical Blueprint" },
                                    "Product Requirements Document (PRD)": { type: "option", prompt: "Product Requirements Document (PRD)" }
                                }
                            }
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
