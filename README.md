# PromptoEngine

## 1. Project Overview
**Project name:** PromptoEngine

PromptoEngine is a selection-based AI prompt generation system. Instead of struggling to describe complex visual or structural changes in words, users simply select the desired changes from a structured interface. It is designed to work across various AI tools and fields, focusing on simplicity, clarity, and usability to democratize prompt engineering.

## 2. Core Philosophy
**"Stop describing. Start selecting."**

PromptoEngine is built on the belief that prompt engineering should not be a barrier to creativity.
*   **Prompt engineering not required:** Users don't need to learn complex syntax.
*   **Universal Design:** Designed for beginners, content creators, and professionals alike.
*   **Clarity:** Focuses on reducing confusion and improving the quality of AI-generated results.

## 3. Homepage & Navigation
**Status:** Active.

The application uses a centralized navigation flow:
*   **Home Page:** Features the core message, "Not Required" typing animation, and entry points.
*   **Selection Hub:** A gateway page (`pages/selection/`) that routes users to **Image**, **Video**, or **Writing** modes.
*   **Dev Mode:** Includes a hidden 7-tap trigger for developer access and testing.

## 4. Core Modules

### A. Image Mode (Simple)
**Status:** Active (`pages/image/simple/`).
The primary interface for generating image prompts.
*   **Visual Guide:** Acts as a "Visual Navigation Companion," updating at every step to mirror available options.
*   **Categories:** Includes Fix Image, Customization, Couple Special, Effects, Festival Special, Creative Image, and more.
*   **Features:**
    *   Placeholder animations for text inputs.
    *   Dynamic prompt generation (e.g., for Couple Special).
    *   "Add-to-Apply" workflow for stacking modifications.
    *   **Built-in AI Image Generation:** Integrates Pollinations.ai to allow users to generate and download AI images directly from their generated prompts without requiring an API key.

### B. Video Mode (Simple)
**Status:** Active (`pages/video/simple/`).
A specialized mode for video generation, mirroring the architecture of Image Mode.
*   **Structure:** Reuses the UI/UX of Image Mode for consistency with a newly implemented inline sequential dropdown flow.
*   **Categories:** Uses a 7-step advanced building flow for "Text To Video":
    1. Background (Nature, Urban, Indoors, Cinematic, Historical, Sci-Fi, Weather)
    2. Subject
    3. Customization
    4. Action & Motion
    5. Text Overlay
    6. Camera & Lighting
    7. Style & Vibe
*   **Global Instructions:** Enforces specific "cinematic realism" and "subject preservation" suffixes on all prompts.
*   **Visual Guide:** Fully integrated to provide visual feedback for video parameters.

### C. Prompt Gallery
**Status:** Active (`pages/prompt_gallery/`).
A curated showcase of generated prompts and results.
*   **Design:** Fullscreen vertical scroll layout.
*   **Features:**
    *   **Original vs AI Toggle:** Compare reference images with AI results.
    *   **Search & Filter:** Client-side filtering by prompt text or subject.
    *   **Chronological Sorting:** Newest items appear at the top.
    *   **Interaction:** Like counters and copy-to-clipboard functionality.

## 5. Modes Overview
The application currently focuses on "Simple Mode" as the primary user experience:
*   **Simple Mode (Image & Video):** The main functional interface, featuring Visual Guides and structured dropdowns.
*   **Advanced/Pro Modes:** Planned for future iterations.

## 6. Project Structure
The project maintains a modular architecture:
*   **`pages/home/`**: Landing page logic.
*   **`pages/selection/`**: Mode selection gateway.
*   **`pages/image/`**: Contains `simple` (active) and `default` (legacy/alternate) modes.
*   **`pages/video/`**: Video generation logic (mirroring Image Mode).
*   **`pages/prompt_gallery/`**: Gallery database and display logic.
*   **Isolation:** Each page type maintains its own assets and logic, with shared utilities duplicated or strictly managed to prevent cross-contamination.

## 7. Account & Pricing
*   **Free:** Prompt generation is completely free.
*   **No Subscription:** There are no paid tiers for generation.
*   **Account Requirement:** Creating an account is only required for saving prompts and history organization.

## 8. Current Status Summary
*   **Status:** Active Development.
*   **Focus:** Refinement of Simple Mode (Image/Video) and Prompt Gallery features.
*   **Note:** Core functionality for Image and Video generation is operational.
