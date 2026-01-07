// Generators for Creative Image Category

export const moviesGenerator = (input) => {
    const cleanInput = input && input.trim() ? input.trim() : "cinematic";
    return `Transform the subject into the ${cleanInput} universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality.`;
};

export const webSeriesGenerator = (input) => {
    const cleanInput = input && input.trim() ? input.trim() : "cinematic series";
    return `Transform the subject into the ${cleanInput} universe. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality.`;
};

export const toonsGenerator = (input) => {
     const cleanInput = input && input.trim() ? input.trim() : "cartoon";
     return `Transform the subject into the ${cleanInput} animation style. Adjust clothing, environment, lighting, and visual style to match that world. Preserve subject identity and image quality.`;
};

export const universeGenerator = (input) => {
     const cleanInput = input && input.trim() ? input.trim() : "apocalyptic world";
     return `Transform the environment into a ${cleanInput}. Adjust lighting, atmosphere, and visual style to match. Preserve subject identity and image quality.`;
};

export const mythologyGenerator = (input) => {
    const cleanInput = input && input.trim() ? input.trim() : "mythology";
    return `Transform the subject into a human figure from the era of ${cleanInput}. Adjust clothing, accessories, and environment to reflect the historical and cultural aesthetic. Do NOT depict as a god or deity. Preserve subject identity and image quality.`;
};

export const roleGenerator = (input) => {
     const cleanInput = input && input.trim() ? input.trim() : "universe";
     return `Inspired by a role from the ${cleanInput}, depict subject with inspired costume, posture, and environment. Preserve subject identity.`;
};

// Nested generators for Roles
export const marvelRoleGenerator = (input) => `Inspired by ${input} role from Marvel Universe, depict subject as a hero human. Inspired costume, posture, environment. Preserve subject identity.`;
export const dcRoleGenerator = (input) => `Inspired by ${input} role from DC Universe, depict subject as a hero human. Inspired costume, posture, environment. Preserve subject identity.`;
export const starWarsRoleGenerator = (input) => `Inspired by ${input} role from Star Wars Universe, depict subject as a sci-fi warrior human. Inspired costume, posture, environment. Preserve subject identity.`;
export const harryPotterRoleGenerator = (input) => `Inspired by ${input} role from Harry Potter Universe, depict subject as a wizard/witch human. Inspired costume, posture, environment. Preserve subject identity.`;
export const lotrRoleGenerator = (input) => `Inspired by ${input} role from Lord of the Rings Universe, depict subject as a fantasy character human. Inspired costume, posture, environment. Preserve subject identity.`;
export const gotRoleGenerator = (input) => `Inspired by ${input} role from Game of Thrones Universe, depict subject as a medieval fantasy human. Inspired costume, posture, environment. Preserve subject identity.`;
export const acRoleGenerator = (input) => `Inspired by ${input} role from Assassin’s Creed Universe, depict subject as an assassin human. Inspired costume, posture, environment. Preserve subject identity.`;
export const mkRoleGenerator = (input) => `Inspired by ${input} role from Mortal Kombat Universe, depict subject as a martial artist fighter human. Inspired costume, posture, environment. Preserve subject identity.`;
export const cyberpunkRoleGenerator = (input) => `Inspired by ${input} role from Cyberpunk Universe, depict subject as a futuristic cyberpunk human. Inspired costume, posture, environment. Preserve subject identity.`;
export const gowRoleGenerator = (input) => `Inspired by ${input} role from God of War Universe, depict subject as a mythological warrior human. Inspired costume, posture, environment. Preserve subject identity.`;

export const historyGenerator = (input) => {
     const cleanInput = input && input.trim() ? input.trim() : "historical figure";
     return `Depict the subject standing alongside ${cleanInput}. Subject has era-appropriate look. Historical figure reference presence only. Preserve subject identity.`;
};
