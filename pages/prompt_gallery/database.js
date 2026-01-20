import { naturalData } from './database/Natural/natural.js';
import { creativeData } from './database/Creative/creative.js';
import { luxuryData } from './database/luxury/luxury.js';
import { vibeAndFeelData } from './database/Vibe & Feel/vibe-and-feel.js';
import { modelingAndPoseData } from './database/Modeling & Pose/modeling-and-pose.js';

export const promptDatabase = {
    "Natural": naturalData,
    "Creative": creativeData,
    "luxury": luxuryData,
    "Vibe & Feel": vibeAndFeelData,
    "Modeling & Pose": modelingAndPoseData
};
