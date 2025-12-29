// Fallback prompt generation

export function getFallbackTemplate(data, category, action, language) {
    if (data[category] && data[category].templates[action]) {
        return data[category].templates[action][language] || data[category].templates[action]["English"];
    }
    return "";
}
