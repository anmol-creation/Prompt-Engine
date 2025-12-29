// Brain Mapping Logic for Default Mode

import { blurLanguagePools } from '../../brain/default/background-blur.js';
import { removeLanguagePools } from '../../brain/default/background-remove.js';
import { transparentLanguagePools } from '../../brain/default/background-transparent.js';
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
    }

    return null;
}
