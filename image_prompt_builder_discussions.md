# Image Prompt Builder Discussions

This document captures detailed breakdowns of user-provided image generation prompts to help inform the architecture and category mapping within PromptoEngine.

## Prompt Breakdown 1: Moody Mysterious Portrait (Image-to-Image)

**Original Prompt:**
> "create a moody mysterious portait of my picture, keep the same background and camera angle as per the reference warm golden hour sunlight casting dramatic shadow on a plain wall ensuring the strong shadow of the face on the wall is visible ratio 9:16 overall cinematic tone"

### Component Analysis & Effects

**1. "create a moody mysterious portait of my picture"**
*   **Effect:** Sets the **Subject (Reference photo)** and the **Core Vibe/Atmosphere**.
*   **Why:** Instructs the AI to use dark tones, deeper shadows, and an intense feel rather than a flat or bright atmosphere.

**2. "keep the same background and camera angle as per the reference"**
*   **Effect:** Acts as a **Control/Constraint**.
*   **Why:** In Image-to-Image generation, AI often hallucinates new environments or perspectives. This restricts the AI, forcing it to maintain the original framing and background context.

**3. "warm golden hour sunlight"**
*   **Effect:** Defines the **Lighting and Color Grading**.
*   **Why:** Introduces warm tones (yellows, oranges) typical of early morning or late afternoon, giving skin a natural glow and warming the overall color temperature.

**4. "casting dramatic shadow on a plain wall"**
*   **Effect:** Establishes **Environment Interaction** and **Contrast**.
*   **Why:** "Dramatic shadow" dictates hard, directional lighting. Specifying a "plain wall" ensures the background remains uncluttered, keeping the focus entirely on the subject and the shadow.

**5. "ensuring the strong shadow of the face on the wall is visible"**
*   **Effect:** Acts as a **High-Priority Detail / Focus** instruction.
*   **Why:** AI might generate generic body shadows. This forces the engine to specifically render the silhouette/outline of the facial profile on the wall, which is the core "mysterious" element.

**6. "ratio 9:16"**
*   **Effect:** Determines the **Technical Framing / Aspect Ratio**.
*   **Why:** Outputs a vertical image (suited for mobile screens/social media formats).

**7. "overall cinematic tone"**
*   **Effect:** Applies **Post-Processing / Style**.
*   **Why:** Triggers film-like aesthetics such as teal & orange color grading, slight film grain, and high dynamic contrast (deep shadows vs. bright highlights).

### PromptoEngine Category Mapping (Proposed)
*   **Subject/Action:** Portrait of my picture (Reference Image Input).
*   **Camera/Angle:** Keep same as reference (Constraint Toggle).
*   **Lighting:** Warm golden hour sunlight.
*   **Background/Environment:** Plain wall.
*   **Effects/Vibe:** Moody mysterious, strong face shadow, cinematic tone.
*   **Settings:** 9:16 Ratio.
