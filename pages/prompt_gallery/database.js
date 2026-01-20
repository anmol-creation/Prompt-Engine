import { naturalData } from './database/image/natural.js';
import { creativeData } from './database/image/creative.js';
import { luxuryData } from './database/image/luxury.js';
import { vibeAndFeelData } from './database/image/vibe-and-feel.js';
import { modelingAndPoseData } from './database/image/modeling-and-pose.js';

export const promptDatabase = {
    "Natural": naturalData,
    "Creative": creativeData,
    "luxury": luxuryData,
    "Vibe & Feel": vibeAndFeelData,
    "Modeling & Pose": modelingAndPoseData
};
