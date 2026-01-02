// Visual Guide Data Connector for Video
import { categoriesData } from '../data/categories.js';

export function getVisualGuideData(selectionData) {
    // Map categories to their Visual Style classes and metadata
    // The visual styles are defined in CSS (e.g., visual-style-card)

    // We iterate through the categoriesData in order
    const categories = Object.keys(categoriesData).map(key => {
        const catData = categoriesData[key];

        // Determine Visual Style Class based on the mapping
        let visualClass = "";
        let visualContent = ""; // HTML for the preview

        switch(key) {
            case "Content Type":
                visualClass = "visual-style-cards";
                visualContent = '<div class="visual-card"></div><div class="visual-card"></div>';
                break;
            case "Platform / Output Target":
                visualClass = "visual-style-icons";
                visualContent = '<div class="visual-icon"></div><div class="visual-icon active"></div><div class="visual-icon"></div>';
                break;
            case "Video Style / Look":
                visualClass = "visual-style-images";
                visualContent = ''; // CSS background pattern
                break;
            case "Camera & Framing":
                visualClass = "visual-style-diagrams";
                visualContent = '<div class="visual-diagram-box"></div>';
                break;
            case "Motion & Pacing":
                visualClass = "visual-style-speed";
                visualContent = '<div class="visual-speed-bar"></div><div class="visual-speed-bar"></div><div class="visual-speed-bar"></div>';
                break;
            case "Lighting":
                visualClass = "visual-style-light";
                visualContent = ''; // CSS gradient
                break;
            case "Color & Tone":
                visualClass = "visual-style-color";
                visualContent = ''; // CSS gradient
                break;
            case "Mood / Emotion":
                visualClass = "visual-style-emotion";
                visualContent = '🎭'; // Emoji as requested "Emotion cards / Abstract shapes / emojis"
                break;
            case "Scene Structure":
                visualClass = "visual-style-flow";
                visualContent = '<div class="visual-flow-node"></div><div class="visual-flow-arrow"></div><div class="visual-flow-node"></div>';
                break;
            case "Text & Graphics":
                visualClass = "visual-style-overlay";
                visualContent = '<div class="visual-overlay-text"></div>';
                break;
            case "Audio / Voice":
                visualClass = "visual-style-audio";
                visualContent = '<div class="visual-wave-bar"></div><div class="visual-wave-bar"></div><div class="visual-wave-bar"></div><div class="visual-wave-bar"></div>';
                break;
            case "Editing Style":
                visualClass = "visual-style-cut";
                visualContent = '<div class="visual-cut-line"></div>';
                break;
            case "Effects & Enhancements":
                visualClass = "visual-style-toggle";
                visualContent = '<div class="visual-toggle-switch"><div class="visual-toggle-knob"></div></div>';
                break;
            case "Duration & Format":
                visualClass = "visual-style-time";
                visualContent = '<div class="visual-time-chip">16:9</div><div class="visual-time-chip">60s</div>';
                break;
            case "Output Quality":
                visualClass = "visual-style-quality";
                visualContent = '<div class="visual-quality-badge">4K</div>';
                break;
            default:
                visualClass = "";
        }

        return {
            name: key,
            visualClass: visualClass,
            visualContent: visualContent,
            visualBlock: catData.visualBlock, // from categories.js
            actions: catData.actions
        };
    });

    return {
        categories
    };
}
