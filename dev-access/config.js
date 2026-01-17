// dev-access/config.js

export const FEATURES = {
    HARD_MODE: 'hardMode',
    VIDEO_ADVANCED: 'videoAdvanced',
    VIDEO_PRO: 'videoPro'
};

export const DEFAULT_CONFIG = {
    [FEATURES.HARD_MODE]: false, // Publicly locked
    [FEATURES.VIDEO_ADVANCED]: false, // Locked
    [FEATURES.VIDEO_PRO]: false // Locked
};
