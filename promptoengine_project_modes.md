# PromptoEngine Project Modes

PromptoEngine is designed to cater to users of all skill levels by categorizing prompt generation into three distinct modes: **Simple Mode**, **Advanced Mode**, and **Professional (Hard) Mode**.

This document outlines the philosophy, target audience, and feature scope for each mode.

## 1. Simple Mode
**Target Audience:** Beginners, casual users, or those who lack editing/prompting knowledge.
**Philosophy:** *"One click, best result."* The goal here is to prevent choice paralysis. Users should not have to understand technical terms like ISO, aperture, or specific upscaling algorithms.

**Features & Behavior:**
*   **Auto-Fixes:** Actions like "Improve Quality", "Color Correction", or "Restore Old Photo" are single-click options.
*   **Hidden Complexities:** The backend prompts generated are highly detailed, but the UI remains minimal. For example, instead of asking *how* to fix a hand, the user just selects "Natural Body Structure" and the system automatically formulates a safe, balanced prompt to fix anatomy without altering the core image.
*   **Protection:** The prompts are balanced to ensure they only "fix" the image without hallucinating new elements or changing the original vibe unless explicitly asked.

## 2. Advanced Mode
**Target Audience:** Enthusiasts and intermediate users who want more control over the generation process.
**Philosophy:** *"Guided customization."*

**Features & Behavior:**
*   **Granular Options:** Where Simple Mode has a general "Improve Quality", Advanced Mode might break this down into specific choices (e.g., "De-noise", "Sharpen Edges", "Upscale 2x").
*   **Style Adjustments:** Users can start combining specific color palettes (e.g., "Teal and Orange") with specific camera angles and lighting setups.
*   **More Depth:** Prompts generated will combine multiple specific technical tags based on user selections.

## 3. Professional (Hard) Mode
**Target Audience:** Power users, professional graphic designers, and AI artists.
**Philosophy:** *"Total control, zero hand-holding."*

**Features & Behavior:**
*   **Raw Parameters:** Exposes underlying AI engine parameters (e.g., aspect ratios as raw numbers, styling weights like `--s 250`, or negative prompting).
*   **Manual Overrides:** Allows users to inject specific text strings exactly where they want them in the final prompt structure.
*   **Highly Specific Tools:** Advanced masking prompts, exact camera metadata (e.g., "Shot on Sony A7R IV, 35mm f/1.4"), and precise lighting setups (e.g., "Rembrandt lighting from top right").
