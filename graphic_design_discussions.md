# Graphic Design Prompt Builder Discussions

This document captures discussions and category mappings for the Graphic Design module in PromptoEngine.

## Current Assessment: "Design Format" Category
The current `Design Format` category and its nested levels (Level 2 & 3) are actually quite good for setting the **base type** of the design.
*   **Level 2 (Sub-categories):** Social Media, Branding, Advertising, Packaging, etc.
*   **Level 3 (Specific Items):** YouTube Thumbnail, Minimalist Logo, Billboard Mockup, etc.

*Verdict:* This is a solid starting point because the AI needs to know *what* it is generating before applying styles.

## Proposed Main Categories for Graphic Design
To allow users to generate any type of graphic design, we need to structure the Main Categories (Level 1) logically. Here is the proposed architecture:

1.  **Design Format (Core)**
    *   *What are we making?* (Logo, Poster, UI Mockup, Social Media Post).
2.  **Subject & Core Element**
    *   *What is in the design?* (Tech gadget, Human model, Coffee cup, Abstract shapes, Typography focus).
3.  **Art Style & Theme**
    *   *What is the vibe?* (Minimalist, Cyberpunk, Vintage/Retro, Corporate/Clean, 3D Rendered, Flat Vector).
4.  **Color Palette**
    *   *What colors are used?* (Monochrome, Neon/Vibrant, Pastel, Earthy tones, Gradient).
5.  **Typography / Text Style (If applicable)**
    *   *How does the text look?* (Bold Sans-serif, Elegant Serif, 3D Chrome, Handwritten/Calligraphy).
6.  **Layout & Composition**
    *   *How are things arranged?* (Centered focus, Grid layout, Negative space, Asymmetrical).
7.  **Lighting & Effects**
    *   *How is it lit?* (Studio lighting, Soft drop shadow, Glowing neon, Matte finish).

*Update:* These 7 categories have now been added directly into `assets/js/graphic-design.js` under the `graphicData` object, each populated with initial sub-categories (Level 2) and specific options (Level 3).
