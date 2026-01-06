// Brain Mapping Logic for Default Mode

import { blurLanguagePools } from '../../brain/default/background-blur.js';
import { removeLanguagePools } from '../../brain/default/background-remove.js';
import { replaceLanguagePools } from '../../brain/default/background-replace.js';
import { gradientLanguagePools } from '../../brain/default/background-gradient.js';
import { extendLanguagePools } from '../../brain/default/background-extend.js';
import { outdoorLanguagePools } from '../../brain/default/background-outdoor.js';
import { shadowAdjustLanguagePools } from '../../brain/default/background-shadow-adjust.js';
import { lightMatchLanguagePools } from '../../brain/default/background-light-match.js';
import { transparentLanguagePools } from '../../brain/default/background-transparent.js';
import { studioLanguagePools } from '../../brain/default/background-studio.js';
import { faceSkinSmoothLanguagePools } from '../../brain/default/face-skin-smooth.js';
import { faceBlemishRemoveLanguagePools } from '../../brain/default/face-blemish-remove.js';
import { objectRemoveLanguagePools } from '../../brain/default/object-remove.js';
import { objectResizeSubjectLanguagePools } from '../../brain/default/object-resize-subject.js';
import { colorLightBrightnessExposureLanguagePools } from '../../brain/default/color-light-brightness-exposure.js';
import { colorLightColorCorrectionLanguagePools } from '../../brain/default/color-light-color-correction.js';
import { qualityEnhanceLanguagePools } from '../../brain/default/quality-enhance.js';
import { qualitySharpenImageLanguagePools } from '../../brain/default/quality-sharpen-image.js';
import { getRandom } from '../../ui/helpers.js';
import {
    BLUR_DEFAULT_SETTINGS,
    REMOVE_DEFAULT_SETTINGS,
    REPLACE_DEFAULT_SETTINGS,
    GRADIENT_DEFAULT_SETTINGS,
    EXTEND_DEFAULT_SETTINGS,
    OUTDOOR_DEFAULT_SETTINGS,
    SHADOW_ADJUST_DEFAULT_SETTINGS,
    LIGHT_MATCH_DEFAULT_SETTINGS,
    TRANSPARENT_DEFAULT_SETTINGS,
    STUDIO_DEFAULT_SETTINGS,
    FACE_SKIN_SMOOTH_DEFAULT_SETTINGS,
    BLEMISH_REMOVE_DEFAULT_SETTINGS,
    REMOVE_OBJECT_DEFAULT_SETTINGS,
    RESIZE_SUBJECT_DEFAULT_SETTINGS,
    COLOR_LIGHT_BRIGHTNESS_EXPOSURE_SETTINGS,
    COLOR_LIGHT_COLOR_CORRECTION_SETTINGS,
    QUALITY_ENHANCE_DEFAULT_SETTINGS,
    QUALITY_SHARPEN_IMAGE_DEFAULT_SETTINGS
} from '../../data/uiMeta.js';

// Helper to get default value
function getDefault(settings, label) {
    const setting = settings.find(s => s.label === label || s.class === label);
    return setting ? setting.val : null;
}

// Helper to construct sentence from valid lines
function constructSentence(parts) {
    return parts.filter(Boolean).join(' ') + (parts.length > 0 ? '.' : '');
}

export function buildDefaultPrompt(rowElement, category, action) {
    if (category === 'Background' && action === 'Blur') {
        const intensityInput = rowElement.querySelector('.blur-intensity');
        const focusInput = rowElement.querySelector('.blur-focus');
        const feelInput = rowElement.querySelector('.blur-feel');

        const intensityVal = intensityInput ? parseInt(intensityInput.value) : 5;
        const focusVal = focusInput ? focusInput.value : "Auto";
        const feelVal = feelInput ? feelInput.value : "Natural";

        const defaultIntensity = getDefault(BLUR_DEFAULT_SETTINGS, "Intensity"); // 5
        const defaultFocus = getDefault(BLUR_DEFAULT_SETTINGS, "Focus Type"); // Auto
        const defaultFeel = getDefault(BLUR_DEFAULT_SETTINGS, "Blur Feel"); // Natural

        // 1. Base Intent (Always included)
        let lines = [getRandom(blurLanguagePools.baseIntent)];

        // 2. Intensity Mapping
        // Only if different from default
        // Note: Logic for pools is mapped by range, we assume default 5 maps to Medium.
        // We will check if value != defaultIntensity (5)
        if (intensityVal !== defaultIntensity) {
             let intensityPhrase = "";
             if (intensityVal <= 3) {
                 intensityPhrase = getRandom(blurLanguagePools.intensity.low);
             } else if (intensityVal <= 6) {
                 intensityPhrase = getRandom(blurLanguagePools.intensity.medium);
             } else {
                 intensityPhrase = getRandom(blurLanguagePools.intensity.high);
             }
             lines.push(intensityPhrase);
        }

        // 3. Focus
        if (focusVal !== defaultFocus && blurLanguagePools.focus[focusVal]) {
            lines.push(getRandom(blurLanguagePools.focus[focusVal]));
        }

        // 4. Blur Feel
        if (feelVal !== defaultFeel && blurLanguagePools.blurFeel[feelVal]) {
             lines.push(getRandom(blurLanguagePools.blurFeel[feelVal]));
        }

        const sentence1 = constructSentence(lines);
        const sentence2 = getRandom(blurLanguagePools.safety);

        return `${sentence1} ${sentence2}`;

    } else if (category === 'Background' && action === 'Remove') {
        const strengthInput = rowElement.querySelector('.remove-strength');
        const edgeInput = rowElement.querySelector('.edge-smoothness');
        const shadowInput = rowElement.querySelector('.shadow-preserve');

        const strengthVal = strengthInput ? strengthInput.value : "Medium";
        const edgeVal = edgeInput ? edgeInput.value : "Soft";
        const shadowVal = shadowInput ? shadowInput.value : "On";

        const defaultStrength = getDefault(REMOVE_DEFAULT_SETTINGS, "Remove Strength");
        const defaultEdge = getDefault(REMOVE_DEFAULT_SETTINGS, "Edge Smoothness");
        const defaultShadow = getDefault(REMOVE_DEFAULT_SETTINGS, "Shadow Preserve");

        let lines = [getRandom(removeLanguagePools.baseIntent)];

        if (strengthVal !== defaultStrength && removeLanguagePools.strength[strengthVal]) {
             lines.push(getRandom(removeLanguagePools.strength[strengthVal]));
        }

        if (edgeVal !== defaultEdge && removeLanguagePools.edge[edgeVal]) {
             lines.push(getRandom(removeLanguagePools.edge[edgeVal]));
        }

        if (shadowVal !== defaultShadow && removeLanguagePools.shadow[shadowVal]) {
             lines.push(getRandom(removeLanguagePools.shadow[shadowVal]));
        }

        const sentence1 = constructSentence(lines);
        const safety = getRandom(removeLanguagePools.safety);

        return `${sentence1} ${safety}`;

    } else if (category === 'Background' && action === 'Replace') {
        const sceneInput = rowElement.querySelector('.scene-type');
        const lightingInput = rowElement.querySelector('.lighting-match');
        const blendInput = rowElement.querySelector('.blend-quality');

        const sceneVal = sceneInput ? sceneInput.value : "Natural";
        const lightingVal = lightingInput ? lightingInput.value : "Auto";
        const blendVal = blendInput ? blendInput.value : "Natural";

        const defaultScene = getDefault(REPLACE_DEFAULT_SETTINGS, "Scene Type");
        const defaultLighting = getDefault(REPLACE_DEFAULT_SETTINGS, "Lighting Match");
        const defaultBlend = getDefault(REPLACE_DEFAULT_SETTINGS, "Blend Quality");

        let lines = [getRandom(replaceLanguagePools.baseIntent)];

        if (sceneVal !== defaultScene && replaceLanguagePools.sceneType[sceneVal]) {
            lines.push(getRandom(replaceLanguagePools.sceneType[sceneVal]));
        }

        if (lightingVal !== defaultLighting && replaceLanguagePools.lightingMatch[lightingVal]) {
            lines.push(getRandom(replaceLanguagePools.lightingMatch[lightingVal]));
        }

        if (blendVal !== defaultBlend && replaceLanguagePools.blendQuality[blendVal]) {
            lines.push(getRandom(replaceLanguagePools.blendQuality[blendVal]));
        }

        const sentence1 = constructSentence(lines);
        const safety = getRandom(replaceLanguagePools.safety);

        return `${sentence1} ${safety}`;

    } else if (category === 'Background' && action === 'Gradient') {
        const typeInput = rowElement.querySelector('.gradient-type');
        const colorInput = rowElement.querySelector('.color-style');
        const smoothInput = rowElement.querySelector('.blend-smoothness');

        const typeVal = typeInput ? typeInput.value : "Linear";
        const colorVal = colorInput ? colorInput.value : "Light";
        const smoothVal = smoothInput ? smoothInput.value : "Balanced";

        const defaultType = getDefault(GRADIENT_DEFAULT_SETTINGS, "Gradient Type");
        const defaultColor = getDefault(GRADIENT_DEFAULT_SETTINGS, "Color Style");
        const defaultSmooth = getDefault(GRADIENT_DEFAULT_SETTINGS, "Blend Smoothness");

        let lines = [getRandom(gradientLanguagePools.baseIntent)];

        if (typeVal !== defaultType && gradientLanguagePools.gradientType[typeVal]) {
            lines.push(getRandom(gradientLanguagePools.gradientType[typeVal]));
        }

        if (colorVal !== defaultColor && gradientLanguagePools.colorStyle[colorVal]) {
            lines.push(getRandom(gradientLanguagePools.colorStyle[colorVal]));
        }

        if (smoothVal !== defaultSmooth && gradientLanguagePools.smoothness[smoothVal]) {
            lines.push(getRandom(gradientLanguagePools.smoothness[smoothVal]));
        }

        const sentence1 = constructSentence(lines);
        const safety = getRandom(gradientLanguagePools.safety);

        return `${sentence1} ${safety}`;

    } else if (category === 'Background' && action === 'Extend') {
        const directionInput = rowElement.querySelector('.extend-direction');
        const fillInput = rowElement.querySelector('.fill-style');
        const edgeInput = rowElement.querySelector('.edge-continuity');

        const directionVal = directionInput ? directionInput.value : "All Sides";
        const fillVal = fillInput ? fillInput.value : "Natural";
        const edgeVal = edgeInput ? edgeInput.value : "Seamless";

        const defaultDirection = getDefault(EXTEND_DEFAULT_SETTINGS, "Extend Direction");
        const defaultFill = getDefault(EXTEND_DEFAULT_SETTINGS, "Fill Style");
        const defaultEdge = getDefault(EXTEND_DEFAULT_SETTINGS, "Edge Continuity");

        let lines = [getRandom(extendLanguagePools.baseIntent)];

        if (directionVal !== defaultDirection && extendLanguagePools.direction[directionVal]) {
            lines.push(getRandom(extendLanguagePools.direction[directionVal]));
        }

        if (fillVal !== defaultFill && extendLanguagePools.fillStyle[fillVal]) {
            lines.push(getRandom(extendLanguagePools.fillStyle[fillVal]));
        }

        if (edgeVal !== defaultEdge && extendLanguagePools.edgeContinuity[edgeVal]) {
            lines.push(getRandom(extendLanguagePools.edgeContinuity[edgeVal]));
        }

        const sentence1 = constructSentence(lines);
        const safety = getRandom(extendLanguagePools.safety);

        return `${sentence1} ${safety}`;

    } else if (category === 'Background' && action === 'Outdoor') {
        const typeInput = rowElement.querySelector('.outdoor-scene-type');
        const lightInput = rowElement.querySelector('.lighting-condition');
        const depthInput = rowElement.querySelector('.depth-feel');

        const typeVal = typeInput ? typeInput.value : "Nature";
        const lightVal = lightInput ? lightInput.value : "Daylight";
        const depthVal = depthInput ? depthInput.value : "Natural";

        const defaultType = getDefault(OUTDOOR_DEFAULT_SETTINGS, "Outdoor Scene Type");
        const defaultLight = getDefault(OUTDOOR_DEFAULT_SETTINGS, "Lighting Condition");
        const defaultDepth = getDefault(OUTDOOR_DEFAULT_SETTINGS, "Depth Feel");

        let lines = [getRandom(outdoorLanguagePools.baseIntent)];

        if (typeVal !== defaultType && outdoorLanguagePools.sceneType[typeVal]) {
            lines.push(getRandom(outdoorLanguagePools.sceneType[typeVal]));
        }

        if (lightVal !== defaultLight && outdoorLanguagePools.lighting[lightVal]) {
            lines.push(getRandom(outdoorLanguagePools.lighting[lightVal]));
        }

        if (depthVal !== defaultDepth && outdoorLanguagePools.depthFeel[depthVal]) {
            lines.push(getRandom(outdoorLanguagePools.depthFeel[depthVal]));
        }

        const sentence1 = constructSentence(lines);
        const safety = getRandom(outdoorLanguagePools.safety);

        return `${sentence1} ${safety}`;

    } else if (category === 'Background' && action === 'Shadow Adjust') {
        const typeInput = rowElement.querySelector('.shadow-type');
        const intensityInput = rowElement.querySelector('.shadow-intensity');
        const spreadInput = rowElement.querySelector('.shadow-spread');

        const typeVal = typeInput ? typeInput.value : "Natural";
        const intensityVal = intensityInput ? intensityInput.value : "Medium";
        const spreadVal = spreadInput ? spreadInput.value : "Balanced";

        const defaultType = getDefault(SHADOW_ADJUST_DEFAULT_SETTINGS, "Shadow Type");
        const defaultIntensity = getDefault(SHADOW_ADJUST_DEFAULT_SETTINGS, "Shadow Intensity");
        const defaultSpread = getDefault(SHADOW_ADJUST_DEFAULT_SETTINGS, "Shadow Spread");

        let lines = [getRandom(shadowAdjustLanguagePools.baseIntent)];

        if (typeVal !== defaultType && shadowAdjustLanguagePools.shadowType[typeVal]) {
            lines.push(getRandom(shadowAdjustLanguagePools.shadowType[typeVal]));
        }

        if (intensityVal !== defaultIntensity && shadowAdjustLanguagePools.intensity[intensityVal]) {
            lines.push(getRandom(shadowAdjustLanguagePools.intensity[intensityVal]));
        }

        if (spreadVal !== defaultSpread && shadowAdjustLanguagePools.spread[spreadVal]) {
            lines.push(getRandom(shadowAdjustLanguagePools.spread[spreadVal]));
        }

        const sentence1 = constructSentence(lines);
        const safety = getRandom(shadowAdjustLanguagePools.safety);

        return `${sentence1} ${safety}`;

    } else if (category === 'Background' && action === 'Light Match') {
        const directionInput = rowElement.querySelector('.light-direction');
        const intensityInput = rowElement.querySelector('.light-intensity');
        const tempInput = rowElement.querySelector('.color-temperature');

        const directionVal = directionInput ? directionInput.value : "Auto";
        const intensityVal = intensityInput ? intensityInput.value : "Balanced";
        const tempVal = tempInput ? tempInput.value : "Neutral";

        const defaultDirection = getDefault(LIGHT_MATCH_DEFAULT_SETTINGS, "Light Direction");
        const defaultIntensity = getDefault(LIGHT_MATCH_DEFAULT_SETTINGS, "Light Intensity");
        const defaultTemp = getDefault(LIGHT_MATCH_DEFAULT_SETTINGS, "Color Temperature");

        let lines = [getRandom(lightMatchLanguagePools.baseIntent)];

        if (directionVal !== defaultDirection && lightMatchLanguagePools.direction[directionVal]) {
            lines.push(getRandom(lightMatchLanguagePools.direction[directionVal]));
        }

        if (intensityVal !== defaultIntensity && lightMatchLanguagePools.intensity[intensityVal]) {
            lines.push(getRandom(lightMatchLanguagePools.intensity[intensityVal]));
        }

        if (tempVal !== defaultTemp && lightMatchLanguagePools.colorTemperature[tempVal]) {
            lines.push(getRandom(lightMatchLanguagePools.colorTemperature[tempVal]));
        }

        const sentence1 = constructSentence(lines);
        const safety = getRandom(lightMatchLanguagePools.safety);

        return `${sentence1} ${safety}`;

    } else if (category === 'Background' && action === 'Transparent') {
        const edgeInput = rowElement.querySelector('.edge-quality');
        const detailInput = rowElement.querySelector('.detail-preservation');
        const shadowInput = rowElement.querySelector('.shadow-handling');

        const edgeVal = edgeInput ? edgeInput.value : "Natural";
        const detailVal = detailInput ? detailInput.value : "Standard";
        const shadowVal = shadowInput ? shadowInput.value : "Remove";

        const defaultEdge = getDefault(TRANSPARENT_DEFAULT_SETTINGS, "Edge Quality");
        const defaultDetail = getDefault(TRANSPARENT_DEFAULT_SETTINGS, "Detail Preservation");
        const defaultShadow = getDefault(TRANSPARENT_DEFAULT_SETTINGS, "Shadow Handling");

        let lines = [getRandom(transparentLanguagePools.baseIntent)];

        if (edgeVal !== defaultEdge && transparentLanguagePools.edge[edgeVal]) {
            lines.push(getRandom(transparentLanguagePools.edge[edgeVal]));
        }

        if (detailVal !== defaultDetail && transparentLanguagePools.detail[detailVal]) {
            lines.push(getRandom(transparentLanguagePools.detail[detailVal]));
        }

        if (shadowVal !== defaultShadow && transparentLanguagePools.shadow[shadowVal]) {
            lines.push(getRandom(transparentLanguagePools.shadow[shadowVal]));
        }

        const sentence1 = constructSentence(lines);
        const safety = getRandom(transparentLanguagePools.safety);

        return `${sentence1} ${safety}`;

    } else if (category === 'Background' && action === 'Studio') {
        const typeInput = rowElement.querySelector('.studio-type');
        const toneInput = rowElement.querySelector('.background-tone');
        const lightInput = rowElement.querySelector('.light-balance');

        const typeVal = typeInput ? typeInput.value : "Neutral";
        const toneVal = toneInput ? toneInput.value : "White";
        const lightVal = lightInput ? lightInput.value : "Even";

        const defaultType = getDefault(STUDIO_DEFAULT_SETTINGS, "Studio Type");
        const defaultTone = getDefault(STUDIO_DEFAULT_SETTINGS, "Background Tone");
        const defaultLight = getDefault(STUDIO_DEFAULT_SETTINGS, "Light Balance");

        let lines = [getRandom(studioLanguagePools.baseIntent)];

        if (typeVal !== defaultType && studioLanguagePools.type[typeVal]) {
            lines.push(getRandom(studioLanguagePools.type[typeVal]));
        }

        if (toneVal !== defaultTone && studioLanguagePools.tone[toneVal]) {
            lines.push(getRandom(studioLanguagePools.tone[toneVal]));
        }

        if (lightVal !== defaultLight && studioLanguagePools.lighting[lightVal]) {
            lines.push(getRandom(studioLanguagePools.lighting[lightVal]));
        }

        const sentence1 = constructSentence(lines);
        const safety = getRandom(studioLanguagePools.safety);

        return `${sentence1} ${safety}`;

    } else if (category === 'Face' && action === 'Skin Smooth') {
        const smoothInput = rowElement.querySelector('.smooth-level');
        const textureInput = rowElement.querySelector('.texture-preserve');
        const detailInput = rowElement.querySelector('.detail-focus');

        const smoothVal = smoothInput ? smoothInput.value : "Natural";
        const textureVal = textureInput ? textureInput.value : "On";
        const detailVal = detailInput ? detailInput.value : "Face Only";

        const defaultSmooth = getDefault(FACE_SKIN_SMOOTH_DEFAULT_SETTINGS, "Smooth Level");
        const defaultTexture = getDefault(FACE_SKIN_SMOOTH_DEFAULT_SETTINGS, "Texture Preserve");
        const defaultDetail = getDefault(FACE_SKIN_SMOOTH_DEFAULT_SETTINGS, "Detail Focus");

        let lines = [getRandom(faceSkinSmoothLanguagePools.baseIntent)];

        if (smoothVal !== defaultSmooth && faceSkinSmoothLanguagePools.smoothLevel[smoothVal]) {
            lines.push(getRandom(faceSkinSmoothLanguagePools.smoothLevel[smoothVal]));
        }

        if (textureVal !== defaultTexture && faceSkinSmoothLanguagePools.texturePreserve[textureVal]) {
            lines.push(getRandom(faceSkinSmoothLanguagePools.texturePreserve[textureVal]));
        }

        if (detailVal !== defaultDetail && faceSkinSmoothLanguagePools.detailFocus[detailVal]) {
            lines.push(getRandom(faceSkinSmoothLanguagePools.detailFocus[detailVal]));
        }

        const sentence1 = constructSentence(lines);
        const safety = getRandom(faceSkinSmoothLanguagePools.safety);

        return `${sentence1} ${safety}`;

    } else if (category === 'Face' && action === 'Blemish Remove') {
        const typeInput = rowElement.querySelector('.blemish-type');
        const strengthInput = rowElement.querySelector('.removal-strength');
        const textureInput = rowElement.querySelector('.texture-protection');

        const typeVal = typeInput ? typeInput.value : "Mixed";
        const strengthVal = strengthInput ? strengthInput.value : "Balanced";
        const textureVal = textureInput ? textureInput.value : "On";

        const defaultType = getDefault(BLEMISH_REMOVE_DEFAULT_SETTINGS, "Blemish Type");
        const defaultStrength = getDefault(BLEMISH_REMOVE_DEFAULT_SETTINGS, "Removal Strength");
        const defaultTexture = getDefault(BLEMISH_REMOVE_DEFAULT_SETTINGS, "Texture Protection");

        let lines = [getRandom(faceBlemishRemoveLanguagePools.baseIntent)];

        if (typeVal !== defaultType && faceBlemishRemoveLanguagePools.blemishType[typeVal]) {
            lines.push(getRandom(faceBlemishRemoveLanguagePools.blemishType[typeVal]));
        }

        if (strengthVal !== defaultStrength && faceBlemishRemoveLanguagePools.removalStrength[strengthVal]) {
            lines.push(getRandom(faceBlemishRemoveLanguagePools.removalStrength[strengthVal]));
        }

        if (textureVal !== defaultTexture && faceBlemishRemoveLanguagePools.textureProtection[textureVal]) {
            lines.push(getRandom(faceBlemishRemoveLanguagePools.textureProtection[textureVal]));
        }

        const sentence1 = constructSentence(lines);
        const safety = getRandom(faceBlemishRemoveLanguagePools.safety);

        return `${sentence1} ${safety}`;

    } else if (category === 'Object / Subject' && action === 'Remove Object') {
        const typeInput = rowElement.querySelector('.object-type');
        const accuracyInput = rowElement.querySelector('.removal-accuracy');
        const fillInput = rowElement.querySelector('.background-fill');

        const typeVal = typeInput ? typeInput.value : "Small Object";
        const accuracyVal = accuracyInput ? accuracyInput.value : "Standard";
        const fillVal = fillInput ? fillInput.value : "Auto";

        const defaultType = getDefault(REMOVE_OBJECT_DEFAULT_SETTINGS, "Object Type");
        const defaultAccuracy = getDefault(REMOVE_OBJECT_DEFAULT_SETTINGS, "Removal Accuracy");
        const defaultFill = getDefault(REMOVE_OBJECT_DEFAULT_SETTINGS, "Background Fill");

        let lines = [getRandom(objectRemoveLanguagePools.baseIntents)];

        if (typeVal !== defaultType && objectRemoveLanguagePools.objectType[typeVal]) {
            lines.push(getRandom(objectRemoveLanguagePools.objectType[typeVal]));
        }

        if (accuracyVal !== defaultAccuracy && objectRemoveLanguagePools.removalAccuracy[accuracyVal]) {
            lines.push(getRandom(objectRemoveLanguagePools.removalAccuracy[accuracyVal]));
        }

        if (fillVal !== defaultFill && objectRemoveLanguagePools.backgroundFill[fillVal]) {
            lines.push(getRandom(objectRemoveLanguagePools.backgroundFill[fillVal]));
        }

        const sentence1 = constructSentence(lines);
        const safety = getRandom(objectRemoveLanguagePools.safety);

        return `${sentence1} ${safety}`;

    } else if (category === 'Object / Subject' && action === 'Resize Subject') {
        const directionInput = rowElement.querySelector('.resize-direction');
        const amountInput = rowElement.querySelector('.resize-amount');
        const lockInput = rowElement.querySelector('.proportion-lock');

        const directionVal = directionInput ? directionInput.value : "Increase";
        const amountVal = amountInput ? amountInput.value : "Medium";
        const lockVal = lockInput ? lockInput.value : "On";

        const defaultDirection = getDefault(RESIZE_SUBJECT_DEFAULT_SETTINGS, "Resize Direction");
        const defaultAmount = getDefault(RESIZE_SUBJECT_DEFAULT_SETTINGS, "Resize Amount");
        const defaultLock = getDefault(RESIZE_SUBJECT_DEFAULT_SETTINGS, "Proportion Lock");

        let lines = [getRandom(objectResizeSubjectLanguagePools.baseIntents)];

        if (directionVal !== defaultDirection && objectResizeSubjectLanguagePools.resizeDirection[directionVal]) {
            lines.push(getRandom(objectResizeSubjectLanguagePools.resizeDirection[directionVal]));
        }

        if (amountVal !== defaultAmount && objectResizeSubjectLanguagePools.resizeAmount[amountVal]) {
            lines.push(getRandom(objectResizeSubjectLanguagePools.resizeAmount[amountVal]));
        }

        if (lockVal !== defaultLock && objectResizeSubjectLanguagePools.proportionLock[lockVal]) {
            lines.push(getRandom(objectResizeSubjectLanguagePools.proportionLock[lockVal]));
        }

        const sentence1 = constructSentence(lines);
        const safety = getRandom(objectResizeSubjectLanguagePools.safety);

        return `${sentence1} ${safety}`;

    } else if (category === 'Color & Light' && action === 'Brightness & Exposure') {
        const brightnessInput = rowElement.querySelector('.brightness-level');
        const exposureInput = rowElement.querySelector('.exposure-balance');
        const highlightInput = rowElement.querySelector('.highlight-protection');

        const brightnessVal = brightnessInput ? brightnessInput.value : "Normal";
        const exposureVal = exposureInput ? exposureInput.value : "Balanced";
        const highlightVal = highlightInput ? highlightInput.value : "On";

        const defaultBrightness = getDefault(COLOR_LIGHT_BRIGHTNESS_EXPOSURE_SETTINGS, "Brightness Level");
        const defaultExposure = getDefault(COLOR_LIGHT_BRIGHTNESS_EXPOSURE_SETTINGS, "Exposure Balance");
        const defaultHighlight = getDefault(COLOR_LIGHT_BRIGHTNESS_EXPOSURE_SETTINGS, "Highlight Protection");

        let lines = [getRandom(colorLightBrightnessExposureLanguagePools.baseIntent)];

        if (brightnessVal !== defaultBrightness && colorLightBrightnessExposureLanguagePools.brightness[brightnessVal]) {
            lines.push(getRandom(colorLightBrightnessExposureLanguagePools.brightness[brightnessVal]));
        }

        if (exposureVal !== defaultExposure && colorLightBrightnessExposureLanguagePools.exposure[exposureVal]) {
            lines.push(getRandom(colorLightBrightnessExposureLanguagePools.exposure[exposureVal]));
        }

        if (highlightVal !== defaultHighlight && colorLightBrightnessExposureLanguagePools.highlightProtection[highlightVal]) {
            lines.push(getRandom(colorLightBrightnessExposureLanguagePools.highlightProtection[highlightVal]));
        }

        const sentence1 = constructSentence(lines);
        const safety = getRandom(colorLightBrightnessExposureLanguagePools.safety);

        return `${sentence1} ${safety}`;

    } else if (category === 'Color & Light' && action === 'Color Correction') {
        const colorInput = rowElement.querySelector('.color-balance');
        const whiteInput = rowElement.querySelector('.white-balance');
        const skinInput = rowElement.querySelector('.skin-tone-priority');

        const colorVal = colorInput ? colorInput.value : "Neutral";
        const whiteVal = whiteInput ? whiteInput.value : "Auto";
        const skinVal = skinInput ? skinInput.value : "On";

        const defaultColor = getDefault(COLOR_LIGHT_COLOR_CORRECTION_SETTINGS, "Color Balance");
        const defaultWhite = getDefault(COLOR_LIGHT_COLOR_CORRECTION_SETTINGS, "White Balance");
        const defaultSkin = getDefault(COLOR_LIGHT_COLOR_CORRECTION_SETTINGS, "Skin Tone Priority");

        let lines = [getRandom(colorLightColorCorrectionLanguagePools.baseIntent)];

        if (colorVal !== defaultColor && colorLightColorCorrectionLanguagePools.colorBalance[colorVal]) {
            lines.push(getRandom(colorLightColorCorrectionLanguagePools.colorBalance[colorVal]));
        }

        if (whiteVal !== defaultWhite && colorLightColorCorrectionLanguagePools.whiteBalance[whiteVal]) {
            lines.push(getRandom(colorLightColorCorrectionLanguagePools.whiteBalance[whiteVal]));
        }

        if (skinVal !== defaultSkin && colorLightColorCorrectionLanguagePools.skinTonePriority[skinVal]) {
            lines.push(getRandom(colorLightColorCorrectionLanguagePools.skinTonePriority[skinVal]));
        }

        const sentence1 = constructSentence(lines);
        const safety = getRandom(colorLightColorCorrectionLanguagePools.safety);

        return `${sentence1} ${safety}`;

    } else if (category === 'Quality' && action === 'Enhance Quality') {
        const enhanceInput = rowElement.querySelector('.enhancement-level');
        const detailInput = rowElement.querySelector('.detail-recovery');
        const artifactInput = rowElement.querySelector('.artifact-reduction');

        const enhanceVal = enhanceInput ? enhanceInput.value : "Balanced";
        const detailVal = detailInput ? detailInput.value : "Medium";
        const artifactVal = artifactInput ? artifactInput.value : "On";

        const defaultEnhance = getDefault(QUALITY_ENHANCE_DEFAULT_SETTINGS, "Enhancement Level");
        const defaultDetail = getDefault(QUALITY_ENHANCE_DEFAULT_SETTINGS, "Detail Recovery");
        const defaultArtifact = getDefault(QUALITY_ENHANCE_DEFAULT_SETTINGS, "Artifact Reduction");

        let lines = [getRandom(qualityEnhanceLanguagePools.baseIntent)];

        if (enhanceVal !== defaultEnhance && qualityEnhanceLanguagePools.enhancementLevel[enhanceVal]) {
            lines.push(getRandom(qualityEnhanceLanguagePools.enhancementLevel[enhanceVal]));
        }

        if (detailVal !== defaultDetail && qualityEnhanceLanguagePools.detailRecovery[detailVal]) {
            lines.push(getRandom(qualityEnhanceLanguagePools.detailRecovery[detailVal]));
        }

        if (artifactVal !== defaultArtifact && qualityEnhanceLanguagePools.artifactReduction[artifactVal]) {
            lines.push(getRandom(qualityEnhanceLanguagePools.artifactReduction[artifactVal]));
        }

        const sentence1 = constructSentence(lines);
        const safety = getRandom(qualityEnhanceLanguagePools.safety);

        return `${sentence1} ${safety}`;

    } else if (category === 'Quality' && action === 'Sharpen Image') {
        const sharpenInput = rowElement.querySelector('.sharpen-strength');
        const edgeInput = rowElement.querySelector('.edge-focus');
        const noiseInput = rowElement.querySelector('.noise-protection');

        const sharpenVal = sharpenInput ? sharpenInput.value : "Balanced";
        const edgeVal = edgeInput ? edgeInput.value : "Normal";
        const noiseVal = noiseInput ? noiseInput.value : "On";

        const defaultSharpen = getDefault(QUALITY_SHARPEN_IMAGE_DEFAULT_SETTINGS, "Sharpen Strength");
        const defaultEdge = getDefault(QUALITY_SHARPEN_IMAGE_DEFAULT_SETTINGS, "Edge Focus");
        const defaultNoise = getDefault(QUALITY_SHARPEN_IMAGE_DEFAULT_SETTINGS, "Noise Protection");

        let lines = [getRandom(qualitySharpenImageLanguagePools.baseIntent)];

        if (sharpenVal !== defaultSharpen && qualitySharpenImageLanguagePools.sharpenStrength[sharpenVal]) {
            lines.push(getRandom(qualitySharpenImageLanguagePools.sharpenStrength[sharpenVal]));
        }

        if (edgeVal !== defaultEdge && qualitySharpenImageLanguagePools.edgeFocus[edgeVal]) {
            lines.push(getRandom(qualitySharpenImageLanguagePools.edgeFocus[edgeVal]));
        }

        if (noiseVal !== defaultNoise && qualitySharpenImageLanguagePools.noiseProtection[noiseVal]) {
            lines.push(getRandom(qualitySharpenImageLanguagePools.noiseProtection[noiseVal]));
        }

        const sentence1 = constructSentence(lines);
        const safety = getRandom(qualitySharpenImageLanguagePools.safety);

        return `${sentence1} ${safety}`;
    }

    return null;
}
