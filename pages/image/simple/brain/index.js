// Brain Map Index
// Reassembles the split brain map files into the expected object structure.

import { fixImageCategory } from './categories/fix-image.js';
import { creativeImageCategory } from './categories/creative-image.js';
import { fanMomentCategory, fanMomentOptions } from './categories/fan-moment.js';
import {
    profilePhotoReadyCategory,
    changeStyleCategory,
    restoreOldPhotoCategory,
    productPhotoCategory,
    socialMediaImageCategory
} from './categories/other.js';

export const simpleBrainMap = {
    "Fix Image": fixImageCategory,
    "Creative Image": creativeImageCategory,
    "Fan Moment": fanMomentCategory,
    "Profile Photo Ready": profilePhotoReadyCategory,
    "Change Style": changeStyleCategory,
    "Restore Old Photo": restoreOldPhotoCategory,
    "Product Photo": productPhotoCategory,
    "Social Media Image": socialMediaImageCategory
};

export { fanMomentOptions };
