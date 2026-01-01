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
import { getRandom } from '../../ui/helpers.js';

export function buildDefaultPrompt(rowElement, category, action) {
    if (category === 'Background' && action === 'Blur') {
        const intensityInput = rowElement.querySelector('.blur-intensity');
        const focusInput = rowElement.querySelector('.blur-focus');
        const feelInput = rowElement.querySelector('.blur-feel');

        // If we can't find inputs (maybe UI didn't update or race condition), fallback to defaults
        const intensityVal = intensityInput ? parseInt(intensityInput.value) : 5;
        const focusVal = focusInput ? focusInput.value : "Auto";
        const feelVal = feelInput ? feelInput.value : "Natural";

        // 1. Base Intent
        let lines = [getRandom(blurLanguagePools.baseIntent)];

        // 2. Intensity Mapping
        let intensityPhrase = "";
        if (intensityVal <= 3) {
            intensityPhrase = getRandom(blurLanguagePools.intensity.low);
        } else if (intensityVal <= 6) {
            intensityPhrase = getRandom(blurLanguagePools.intensity.medium);
        } else {
            intensityPhrase = getRandom(blurLanguagePools.intensity.high);
        }
        lines.push(intensityPhrase);

        // 3. Focus
        if (blurLanguagePools.focus[focusVal]) {
            lines.push(getRandom(blurLanguagePools.focus[focusVal]));
        }

        // 4. Blur Feel
        if (blurLanguagePools.blurFeel[feelVal]) {
             lines.push(getRandom(blurLanguagePools.blurFeel[feelVal]));
        }

        // Combine lines into sentences
        const sentence1 = `${lines[0]} ${lines[1]} ${lines[2]}.`;

        // Sentence 2: Blur Feel + Safety
        const sentence2 = `${lines[3]} ${getRandom(blurLanguagePools.safety)}`;

        // Capitalize first letter of sentence 2.
        const sentence2Cap = sentence2.charAt(0).toUpperCase() + sentence2.slice(1);

        return `${sentence1} ${sentence2Cap}`;

    } else if (category === 'Background' && action === 'Remove') {
        const strengthInput = rowElement.querySelector('.remove-strength');
        const edgeInput = rowElement.querySelector('.edge-smoothness');
        const shadowInput = rowElement.querySelector('.shadow-preserve');

        const strengthVal = strengthInput ? strengthInput.value : "Medium";
        const edgeVal = edgeInput ? edgeInput.value : "Soft";
        const shadowVal = shadowInput ? shadowInput.value : "On";

        // 1. Base Intent
        let lines = [getRandom(removeLanguagePools.baseIntent)];

        // 2. Strength
        if (removeLanguagePools.strength[strengthVal]) {
             lines.push(getRandom(removeLanguagePools.strength[strengthVal]));
        }

        // 3. Edge
        if (removeLanguagePools.edge[edgeVal]) {
             lines.push(getRandom(removeLanguagePools.edge[edgeVal]));
        }

        // 4. Shadow
        if (removeLanguagePools.shadow[shadowVal]) {
             lines.push(getRandom(removeLanguagePools.shadow[shadowVal]));
        }

        // Combine
        const sentence1 = `${lines[0]} ${lines[1]}.`;

        let edgePhrase = lines[2];
        edgePhrase = edgePhrase.charAt(0).toUpperCase() + edgePhrase.slice(1);
        const sentence2 = `${edgePhrase} ${lines[3]}.`;

        const safetyPhrase = getRandom(removeLanguagePools.safety);

        return `${sentence1} ${sentence2} ${safetyPhrase}`;
    } else if (category === 'Background' && action === 'Replace') {
        const sceneInput = rowElement.querySelector('.scene-type');
        const lightingInput = rowElement.querySelector('.lighting-match');
        const blendInput = rowElement.querySelector('.blend-quality');

        const sceneVal = sceneInput ? sceneInput.value : "Natural";
        const lightingVal = lightingInput ? lightingInput.value : "Auto";
        const blendVal = blendInput ? blendInput.value : "Natural";

        // 1. Base Intent
        let lines = [getRandom(replaceLanguagePools.baseIntent)];

        // 2. Scene Type
        if (replaceLanguagePools.sceneType[sceneVal]) {
            lines.push(getRandom(replaceLanguagePools.sceneType[sceneVal]));
        }

        // 3. Lighting Match
        if (replaceLanguagePools.lightingMatch[lightingVal]) {
            lines.push(getRandom(replaceLanguagePools.lightingMatch[lightingVal]));
        }

        // 4. Blend Quality
        if (replaceLanguagePools.blendQuality[blendVal]) {
            lines.push(getRandom(replaceLanguagePools.blendQuality[blendVal]));
        }

        // Combine
        // Order: Base Intent -> Scene Type + Lighting -> Blend Quality + Safety

        // Sentence 1: Base Intent + Scene Type + Lighting
        const sentence1 = `${lines[0]} ${lines[1]} ${lines[2]}.`;

        // Sentence 2: Blend Quality + Safety
        let blendPhrase = lines[3];
        blendPhrase = blendPhrase.charAt(0).toUpperCase() + blendPhrase.slice(1);
        const safetyPhrase = getRandom(replaceLanguagePools.safety);

        const sentence2 = `${blendPhrase}. ${safetyPhrase}`;

        return `${sentence1} ${sentence2}`;
    } else if (category === 'Background' && action === 'Gradient') {
        const typeInput = rowElement.querySelector('.gradient-type');
        const colorInput = rowElement.querySelector('.color-style');
        const smoothInput = rowElement.querySelector('.blend-smoothness');

        const typeVal = typeInput ? typeInput.value : "Linear";
        const colorVal = colorInput ? colorInput.value : "Light";
        const smoothVal = smoothInput ? smoothInput.value : "Balanced";

        // 1. Base Intent
        let lines = [getRandom(gradientLanguagePools.baseIntent)];

        // 2. Gradient Type
        if (gradientLanguagePools.gradientType[typeVal]) {
            lines.push(getRandom(gradientLanguagePools.gradientType[typeVal]));
        }

        // 3. Color Style
        if (gradientLanguagePools.colorStyle[colorVal]) {
            lines.push(getRandom(gradientLanguagePools.colorStyle[colorVal]));
        }

        // 4. Blend Smoothness
        if (gradientLanguagePools.smoothness[smoothVal]) {
            lines.push(getRandom(gradientLanguagePools.smoothness[smoothVal]));
        }

        // Combine
        // Order: Base Intent -> Gradient Type + Color Style -> Smoothness + Safety

        // Sentence 1: Base Intent + Gradient Type + Color Style
        const sentence1 = `${lines[0]} ${lines[1]} ${lines[2]}.`;

        // Sentence 2: Smoothness + Safety
        let smoothPhrase = lines[3];
        smoothPhrase = smoothPhrase.charAt(0).toUpperCase() + smoothPhrase.slice(1);
        const safetyPhrase = getRandom(gradientLanguagePools.safety);

        const sentence2 = `${smoothPhrase}. ${safetyPhrase}`;

        return `${sentence1} ${sentence2}`;
    } else if (category === 'Background' && action === 'Extend') {
        const directionInput = rowElement.querySelector('.extend-direction');
        const fillInput = rowElement.querySelector('.fill-style');
        const edgeInput = rowElement.querySelector('.edge-continuity');

        const directionVal = directionInput ? directionInput.value : "All Sides";
        const fillVal = fillInput ? fillInput.value : "Natural";
        const edgeVal = edgeInput ? edgeInput.value : "Seamless";

        // 1. Base Intent
        let lines = [getRandom(extendLanguagePools.baseIntent)];

        // 2. Extend Direction
        if (extendLanguagePools.direction[directionVal]) {
            lines.push(getRandom(extendLanguagePools.direction[directionVal]));
        }

        // 3. Fill Style
        if (extendLanguagePools.fillStyle[fillVal]) {
            lines.push(getRandom(extendLanguagePools.fillStyle[fillVal]));
        }

        // 4. Edge Continuity
        if (extendLanguagePools.edgeContinuity[edgeVal]) {
            lines.push(getRandom(extendLanguagePools.edgeContinuity[edgeVal]));
        }

        // Combine
        // Order: Base Intent -> Extend Direction + Fill Style -> Edge Continuity + Safety

        // Sentence 1: Base Intent + Extend Direction + Fill Style
        const sentence1 = `${lines[0]} ${lines[1]} ${lines[2]}.`;

        // Sentence 2: Edge Continuity + Safety
        let edgePhrase = lines[3];
        edgePhrase = edgePhrase.charAt(0).toUpperCase() + edgePhrase.slice(1);
        const safetyPhrase = getRandom(extendLanguagePools.safety);

        const sentence2 = `${edgePhrase}. ${safetyPhrase}`;

        return `${sentence1} ${sentence2}`;
    } else if (category === 'Background' && action === 'Outdoor') {
        const typeInput = rowElement.querySelector('.outdoor-scene-type');
        const lightInput = rowElement.querySelector('.lighting-condition');
        const depthInput = rowElement.querySelector('.depth-feel');

        const typeVal = typeInput ? typeInput.value : "Nature";
        const lightVal = lightInput ? lightInput.value : "Daylight";
        const depthVal = depthInput ? depthInput.value : "Natural";

        // 1. Base Intent
        let lines = [getRandom(outdoorLanguagePools.baseIntent)];

        // 2. Scene Type
        if (outdoorLanguagePools.sceneType[typeVal]) {
            lines.push(getRandom(outdoorLanguagePools.sceneType[typeVal]));
        }

        // 3. Lighting Condition
        if (outdoorLanguagePools.lighting[lightVal]) {
            lines.push(getRandom(outdoorLanguagePools.lighting[lightVal]));
        }

        // 4. Depth Feel
        if (outdoorLanguagePools.depthFeel[depthVal]) {
            lines.push(getRandom(outdoorLanguagePools.depthFeel[depthVal]));
        }

        // Combine
        // Order: Base Intent -> Scene Type + Lighting -> Depth Feel + Safety

        // Sentence 1: Base Intent + Scene Type + Lighting
        const sentence1 = `${lines[0]} ${lines[1]} ${lines[2]}.`;

        // Sentence 2: Depth Feel + Safety
        let depthPhrase = lines[3];
        depthPhrase = depthPhrase.charAt(0).toUpperCase() + depthPhrase.slice(1);
        const safetyPhrase = getRandom(outdoorLanguagePools.safety);

        const sentence2 = `${depthPhrase}. ${safetyPhrase}`;

        return `${sentence1} ${sentence2}`;
    } else if (category === 'Background' && action === 'Shadow Adjust') {
        const typeInput = rowElement.querySelector('.shadow-type');
        const intensityInput = rowElement.querySelector('.shadow-intensity');
        const spreadInput = rowElement.querySelector('.shadow-spread');

        const typeVal = typeInput ? typeInput.value : "Natural";
        const intensityVal = intensityInput ? intensityInput.value : "Medium";
        const spreadVal = spreadInput ? spreadInput.value : "Balanced";

        // 1. Base Intent
        let lines = [getRandom(shadowAdjustLanguagePools.baseIntent)];

        // 2. Shadow Type
        if (shadowAdjustLanguagePools.shadowType[typeVal]) {
            lines.push(getRandom(shadowAdjustLanguagePools.shadowType[typeVal]));
        }

        // 3. Shadow Intensity
        if (shadowAdjustLanguagePools.intensity[intensityVal]) {
            lines.push(getRandom(shadowAdjustLanguagePools.intensity[intensityVal]));
        }

        // 4. Shadow Spread
        if (shadowAdjustLanguagePools.spread[spreadVal]) {
            lines.push(getRandom(shadowAdjustLanguagePools.spread[spreadVal]));
        }

        // Combine
        // Order: Base Intent -> Shadow Type + Intensity -> Spread + Safety

        // Sentence 1: Base Intent + Shadow Type + Intensity
        const sentence1 = `${lines[0]} ${lines[1]} ${lines[2]}.`;

        // Sentence 2: Spread + Safety
        let spreadPhrase = lines[3];
        spreadPhrase = spreadPhrase.charAt(0).toUpperCase() + spreadPhrase.slice(1);
        const safetyPhrase = getRandom(shadowAdjustLanguagePools.safety);

        const sentence2 = `${spreadPhrase}. ${safetyPhrase}`;

        return `${sentence1} ${sentence2}`;
    } else if (category === 'Background' && action === 'Light Match') {
        const directionInput = rowElement.querySelector('.light-direction');
        const intensityInput = rowElement.querySelector('.light-intensity');
        const tempInput = rowElement.querySelector('.color-temperature');

        const directionVal = directionInput ? directionInput.value : "Auto";
        const intensityVal = intensityInput ? intensityInput.value : "Balanced";
        const tempVal = tempInput ? tempInput.value : "Neutral";

        // 1. Base Intent
        let lines = [getRandom(lightMatchLanguagePools.baseIntent)];

        // 2. Light Direction
        if (lightMatchLanguagePools.direction[directionVal]) {
            lines.push(getRandom(lightMatchLanguagePools.direction[directionVal]));
        }

        // 3. Light Intensity
        if (lightMatchLanguagePools.intensity[intensityVal]) {
            lines.push(getRandom(lightMatchLanguagePools.intensity[intensityVal]));
        }

        // 4. Color Temperature
        if (lightMatchLanguagePools.colorTemperature[tempVal]) {
            lines.push(getRandom(lightMatchLanguagePools.colorTemperature[tempVal]));
        }

        // Combine
        // Order: Base Intent -> Direction + Intensity -> Color Temperature + Safety

        // Sentence 1: Base Intent + Direction + Intensity
        const sentence1 = `${lines[0]} ${lines[1]} ${lines[2]}.`;

        // Sentence 2: Color Temperature + Safety
        let tempPhrase = lines[3];
        tempPhrase = tempPhrase.charAt(0).toUpperCase() + tempPhrase.slice(1);
        const safetyPhrase = getRandom(lightMatchLanguagePools.safety);

        const sentence2 = `${tempPhrase}. ${safetyPhrase}`;

        return `${sentence1} ${sentence2}`;
    } else if (category === 'Background' && action === 'Transparent') {
        const edgeInput = rowElement.querySelector('.edge-quality');
        const detailInput = rowElement.querySelector('.detail-preservation');
        const shadowInput = rowElement.querySelector('.shadow-handling');

        const edgeVal = edgeInput ? edgeInput.value : "Natural";
        const detailVal = detailInput ? detailInput.value : "Standard";
        const shadowVal = shadowInput ? shadowInput.value : "Remove";

        // 1. Base Intent
        let lines = [getRandom(transparentLanguagePools.baseIntent)];

        // 2. Edge Quality
        if (transparentLanguagePools.edge[edgeVal]) {
            lines.push(getRandom(transparentLanguagePools.edge[edgeVal]));
        }

        // 3. Detail Preservation
        if (transparentLanguagePools.detail[detailVal]) {
            lines.push(getRandom(transparentLanguagePools.detail[detailVal]));
        }

        // 4. Shadow Handling
        if (transparentLanguagePools.shadow[shadowVal]) {
            lines.push(getRandom(transparentLanguagePools.shadow[shadowVal]));
        }

        // Combine
        // Sentence 1: Base Intent + Edge Quality + Detail Preservation
        const sentence1 = `${lines[0]} ${lines[1]} and ${lines[2]}.`;

        // Sentence 2: Shadow Handling + Safety
        let shadowPhrase = lines[3];
        shadowPhrase = shadowPhrase.charAt(0).toUpperCase() + shadowPhrase.slice(1);
        const safetyPhrase = getRandom(transparentLanguagePools.safety);

        const sentence2 = `${shadowPhrase}. ${safetyPhrase}`;

        return `${sentence1} ${sentence2}`;
    } else if (category === 'Background' && action === 'Studio') {
        const typeInput = rowElement.querySelector('.studio-type');
        const toneInput = rowElement.querySelector('.background-tone');
        const lightInput = rowElement.querySelector('.light-balance');

        const typeVal = typeInput ? typeInput.value : "Neutral";
        const toneVal = toneInput ? toneInput.value : "White";
        const lightVal = lightInput ? lightInput.value : "Even";

        // 1. Base Intent
        let lines = [getRandom(studioLanguagePools.baseIntent)];

        // 2. Studio Type
        if (studioLanguagePools.type[typeVal]) {
            lines.push(getRandom(studioLanguagePools.type[typeVal]));
        }

        // 3. Background Tone
        if (studioLanguagePools.tone[toneVal]) {
            lines.push(getRandom(studioLanguagePools.tone[toneVal]));
        }

        // 4. Light Balance
        if (studioLanguagePools.lighting[lightVal]) {
            lines.push(getRandom(studioLanguagePools.lighting[lightVal]));
        }

        // Combine
        // Sentence 1: Base Intent + Studio Type + Background Tone
        const sentence1 = `${lines[0]} ${lines[1]} ${lines[2]}.`;

        // Sentence 2: Light Balance + Safety
        let lightingPhrase = lines[3];
        lightingPhrase = lightingPhrase.charAt(0).toUpperCase() + lightingPhrase.slice(1);
        const safetyPhrase = getRandom(studioLanguagePools.safety);

        const sentence2 = `${lightingPhrase}. ${safetyPhrase}`;

        return `${sentence1} ${sentence2}`;
    } else if (category === 'Face' && action === 'Skin Smooth') {
        const smoothInput = rowElement.querySelector('.smooth-level');
        const textureInput = rowElement.querySelector('.texture-preserve');
        const detailInput = rowElement.querySelector('.detail-focus');

        const smoothVal = smoothInput ? smoothInput.value : "Natural";
        const textureVal = textureInput ? textureInput.value : "On";
        const detailVal = detailInput ? detailInput.value : "Face Only";

        // 1. Base Intent
        let lines = [getRandom(faceSkinSmoothLanguagePools.baseIntent)];

        // 2. Smooth Level
        if (faceSkinSmoothLanguagePools.smoothLevel[smoothVal]) {
            lines.push(getRandom(faceSkinSmoothLanguagePools.smoothLevel[smoothVal]));
        }

        // 3. Texture Preserve
        if (faceSkinSmoothLanguagePools.texturePreserve[textureVal]) {
            lines.push(getRandom(faceSkinSmoothLanguagePools.texturePreserve[textureVal]));
        }

        // 4. Detail Focus
        if (faceSkinSmoothLanguagePools.detailFocus[detailVal]) {
            lines.push(getRandom(faceSkinSmoothLanguagePools.detailFocus[detailVal]));
        }

        // Combine
        // Order: Base Intent -> Smooth Level + Texture Preserve -> Detail Focus + Safety

        // Sentence 1: Base Intent + Smooth Level + Texture Preserve
        // Example: Smooth facial skin naturally with natural skin smoothing while preserving natural skin texture.
        const sentence1 = `${lines[0]} ${lines[1]} ${lines[2]}.`;

        // Sentence 2: Detail Focus + Safety
        // Example: Applying smoothing only to the face area. Avoid over-smoothing or plastic-looking skin.
        let detailPhrase = lines[3];
        detailPhrase = detailPhrase.charAt(0).toUpperCase() + detailPhrase.slice(1);
        const safetyPhrase = getRandom(faceSkinSmoothLanguagePools.safety);

        const sentence2 = `${detailPhrase}. ${safetyPhrase}`;

        return `${sentence1} ${sentence2}`;
    } else if (category === 'Face' && action === 'Blemish Remove') {
        const typeInput = rowElement.querySelector('.blemish-type');
        const strengthInput = rowElement.querySelector('.removal-strength');
        const textureInput = rowElement.querySelector('.texture-protection');

        const typeVal = typeInput ? typeInput.value : "Mixed";
        const strengthVal = strengthInput ? strengthInput.value : "Balanced";
        const textureVal = textureInput ? textureInput.value : "On";

        // 1. Base Intent
        let lines = [getRandom(faceBlemishRemoveLanguagePools.baseIntent)];

        // 2. Blemish Type
        if (faceBlemishRemoveLanguagePools.blemishType[typeVal]) {
            lines.push(getRandom(faceBlemishRemoveLanguagePools.blemishType[typeVal]));
        }

        // 3. Removal Strength
        if (faceBlemishRemoveLanguagePools.removalStrength[strengthVal]) {
            lines.push(getRandom(faceBlemishRemoveLanguagePools.removalStrength[strengthVal]));
        }

        // 4. Texture Protection
        if (faceBlemishRemoveLanguagePools.textureProtection[textureVal]) {
            lines.push(getRandom(faceBlemishRemoveLanguagePools.textureProtection[textureVal]));
        }

        // Combine
        // Order: Base Intent -> Blemish Type + Removal Strength -> Texture Protection + Safety

        // Sentence 1: Base Intent + Blemish Type + Removal Strength
        const sentence1 = `${lines[0]} ${lines[1]} ${lines[2]}.`;

        // Sentence 2: Texture Protection + Safety
        let texturePhrase = lines[3];
        texturePhrase = texturePhrase.charAt(0).toUpperCase() + texturePhrase.slice(1);
        const safetyPhrase = getRandom(faceBlemishRemoveLanguagePools.safety);

        const sentence2 = `${texturePhrase}. ${safetyPhrase}`;

        return `${sentence1} ${sentence2}`;
    } else if (category === 'Object / Subject' && action === 'Remove Object') {
        const typeInput = rowElement.querySelector('.object-type');
        const accuracyInput = rowElement.querySelector('.removal-accuracy');
        const fillInput = rowElement.querySelector('.background-fill');

        const typeVal = typeInput ? typeInput.value : "Small Object";
        const accuracyVal = accuracyInput ? accuracyInput.value : "Standard";
        const fillVal = fillInput ? fillInput.value : "Auto";

        // 1. Base Intent
        let lines = [getRandom(objectRemoveLanguagePools.baseIntents)];

        // 2. Object Type
        if (objectRemoveLanguagePools.objectType[typeVal]) {
            lines.push(getRandom(objectRemoveLanguagePools.objectType[typeVal]));
        }

        // 3. Removal Accuracy
        if (objectRemoveLanguagePools.removalAccuracy[accuracyVal]) {
            lines.push(getRandom(objectRemoveLanguagePools.removalAccuracy[accuracyVal]));
        }

        // 4. Background Fill
        if (objectRemoveLanguagePools.backgroundFill[fillVal]) {
            lines.push(getRandom(objectRemoveLanguagePools.backgroundFill[fillVal]));
        }

        // Combine
        // Order: Base Intent -> Object Type + Accuracy -> Background Fill + Safety

        // Sentence 1: Base Intent + Object Type + Accuracy
        // Example: Remove the selected object from the image by targeting small distracting elements with balanced accuracy.
        const sentence1 = `${lines[0]} by ${lines[1]} ${lines[2]}.`;

        // Sentence 2: Background Fill + Safety
        // Example: Automatically fill the background while preserving surrounding textures...
        let fillPhrase = lines[3];
        fillPhrase = fillPhrase.charAt(0).toUpperCase() + fillPhrase.slice(1);
        const safetyPhrase = getRandom(objectRemoveLanguagePools.safety);

        const sentence2 = `${fillPhrase} ${safetyPhrase}`; // safety phrases usually start with capital, but here we might need to adjust or keep distinct.
        // Wait, safety phrase in pool is a full sentence?
        // "Preserve surrounding details and textures." -> Yes.
        // So: "Automatically filling the background. Preserve surrounding..."
        // But fillPhrase is "automatically filling...". It's a participle phrase.
        // The example says: "Automatically fill the background while preserving..."
        // But the pool text is "automatically filling the background".
        // Let's adjust slightly to make grammatical sense or just concatenation.
        // "Automatically filling the background Preserve surrounding..." -> Missing punctuation.
        // I will add a period.

        const sentence2Final = `${fillPhrase}. ${safetyPhrase}`;

        return `${sentence1} ${sentence2Final}`;
    } else if (category === 'Object / Subject' && action === 'Resize Subject') {
        const directionInput = rowElement.querySelector('.resize-direction');
        const amountInput = rowElement.querySelector('.resize-amount');
        const lockInput = rowElement.querySelector('.proportion-lock');

        const directionVal = directionInput ? directionInput.value : "Increase";
        const amountVal = amountInput ? amountInput.value : "Medium";
        const lockVal = lockInput ? lockInput.value : "On";

        // 1. Base Intent
        let lines = [getRandom(objectResizeSubjectLanguagePools.baseIntents)];

        // 2. Resize Direction
        if (objectResizeSubjectLanguagePools.resizeDirection[directionVal]) {
            lines.push(getRandom(objectResizeSubjectLanguagePools.resizeDirection[directionVal]));
        }

        // 3. Resize Amount
        if (objectResizeSubjectLanguagePools.resizeAmount[amountVal]) {
            lines.push(getRandom(objectResizeSubjectLanguagePools.resizeAmount[amountVal]));
        }

        // 4. Proportion Lock
        if (objectResizeSubjectLanguagePools.proportionLock[lockVal]) {
            lines.push(getRandom(objectResizeSubjectLanguagePools.proportionLock[lockVal]));
        }

        // Combine
        // Order: Base Intent -> Direction + Amount -> Proportion Lock + Safety

        // Sentence 1: Base Intent + Direction + Amount
        // Example: Adjust the size of the main subject by making it more prominent with balanced resizing.
        // BaseIntent: "Adjust the size of the main subject"
        // Direction: "making the subject more prominent"
        // Amount: "with balanced resizing"
        const sentence1 = `${lines[0]} by ${lines[1]} ${lines[2]}.`;

        // Sentence 2: Proportion Lock + Safety
        // Example: Maintain original proportions and ensure the subject remains natural and undistorted.
        // Lock: "while maintaining original proportions" (participle)
        // Safety: "Ensure the subject..." (imperative)
        // We might want to rephrase or capitalize.
        // "While maintaining original proportions. Ensure..." is slightly awkward.
        // Let's capitalize the Lock phrase.
        let lockPhrase = lines[3];
        lockPhrase = lockPhrase.charAt(0).toUpperCase() + lockPhrase.slice(1);
        const safetyPhrase = getRandom(objectResizeSubjectLanguagePools.safety);

        const sentence2 = `${lockPhrase}. ${safetyPhrase}`;

        return `${sentence1} ${sentence2}`;
    } else if (category === 'Color & Light' && action === 'Brightness & Exposure') {
        const brightnessInput = rowElement.querySelector('.brightness-level');
        const exposureInput = rowElement.querySelector('.exposure-balance');
        const highlightInput = rowElement.querySelector('.highlight-protection');

        const brightnessVal = brightnessInput ? brightnessInput.value : "Normal";
        const exposureVal = exposureInput ? exposureInput.value : "Balanced";
        const highlightVal = highlightInput ? highlightInput.value : "On";

        // 1. Base Intent
        let lines = [getRandom(colorLightBrightnessExposureLanguagePools.baseIntent)];

        // 2. Brightness
        if (colorLightBrightnessExposureLanguagePools.brightness[brightnessVal]) {
            lines.push(getRandom(colorLightBrightnessExposureLanguagePools.brightness[brightnessVal]));
        }

        // 3. Exposure
        if (colorLightBrightnessExposureLanguagePools.exposure[exposureVal]) {
            lines.push(getRandom(colorLightBrightnessExposureLanguagePools.exposure[exposureVal]));
        }

        // 4. Highlight Protection
        if (colorLightBrightnessExposureLanguagePools.highlightProtection[highlightVal]) {
            lines.push(getRandom(colorLightBrightnessExposureLanguagePools.highlightProtection[highlightVal]));
        }

        // Combine
        // Order: Base Intent -> Brightness + Exposure -> Highlight Protection + Safety

        // Sentence 1: Base Intent + Brightness + Exposure
        // Example: Adjust the overall brightness and exposure of the image by maintaining balanced brightness while maintaining balanced exposure.
        // We might want to add "by" or "while" or make it a list.
        // Pools:
        // Base: "Adjust..."
        // Brightness: "slightly reducing..." (participle)
        // Exposure: "correcting dark exposure" (participle)
        // So: "Adjust... by slightly reducing... and correcting..."
        const sentence1 = `${lines[0]} by ${lines[1]} and ${lines[2]}.`;

        // Sentence 2: Highlight Protection + Safety
        // Highlight: "while protecting highlight details" (prepositional phrase)
        // Safety: "Preserve natural colors..." (Imperative)
        // So: "While protecting highlight details, preserve..." (Joined with comma, lowercase safety)

        let highlightPhrase = lines[3];
        highlightPhrase = highlightPhrase.charAt(0).toUpperCase() + highlightPhrase.slice(1);

        let safetyPhrase = getRandom(colorLightBrightnessExposureLanguagePools.safety);
        // Lowercase safety phrase for flow if joining, but safety phrase is a full sentence "Preserve..."
        // "While protecting highlight details, preserve natural colors..."
        safetyPhrase = safetyPhrase.charAt(0).toLowerCase() + safetyPhrase.slice(1);

        const sentence2 = `${highlightPhrase}, ${safetyPhrase}`;

        return `${sentence1} ${sentence2}`;
    }

    return null;
}
