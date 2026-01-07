// Brain Map Index
// Reassembles the split brain map files into the expected object structure.

import { fixBackgroundCategory } from './categories/fix-background.js';
import { creativeImageCategory } from './categories/creative-image.js';
import { fanMomentCategory, fanMomentOptions } from './categories/fan-moment.js';
import {
    makePhotoClearCategory,
    improveFaceCategory,
    profilePhotoReadyCategory,
    changeStyleCategory,
    restoreOldPhotoCategory,
    productPhotoCategory,
    socialMediaImageCategory
} from './categories/other.js';

export const simpleBrainMap = {
    "Fix Background": fixBackgroundCategory,
    "Creative Image": creativeImageCategory,
    "Fan Moment": fanMomentCategory,
    "Make Photo Clear": makePhotoClearCategory,
    "Improve Face": improveFaceCategory,
    "Profile Photo Ready": profilePhotoReadyCategory,
    "Change Style": changeStyleCategory,
    "Restore Old Photo": restoreOldPhotoCategory,
    "Product Photo": productPhotoCategory,
    "Social Media Image": socialMediaImageCategory
};

export { fanMomentOptions };
