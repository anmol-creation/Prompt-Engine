
from playwright.sync_api import sync_playwright

def verify_global_instructions():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print("Navigating to Home...")
        page.goto("http://localhost:8080/pages/home/home.html")

        print("Clicking Create Prompt...")
        page.click("text=Create Prompt")

        print("Waiting for Video option...")
        page.wait_for_selector("text=Video")
        page.click("text=Video")

        print("Waiting for Video Page to load...")
        page.wait_for_load_state("networkidle")

        # Verify simple mode is loaded
        page.wait_for_selector("#simple-main-category")

        # Select "Text → Video" (Main Category)
        print("Selecting Main Category: Text → Video...")
        # Since custom dropdowns are div based, we must click the trigger, then click the option.

        # 1. Click Main Category Trigger
        page.click("#simple-main-category .dropdown-trigger")

        # 2. Click "Text → Video" option
        page.click("#simple-main-category .dropdown-item[data-value='Text → Video']")

        # Wait for subcategory dropdown (simple-sub-category) to appear/unhide
        page.wait_for_selector("#simple-sub-category:not(.hidden)")

        # Select "Nature / Environment" (Sub Category)
        print("Selecting Sub Category: Nature / Environment...")

        # 1. Click Sub Category Trigger
        page.click("#simple-sub-category .dropdown-trigger")

        # 2. Click "Nature / Environment" option
        page.click("#simple-sub-category .dropdown-item[data-value='Nature / Environment']")

        # This subcategory is type 'input', so dynamic inputs should appear
        # Wait for dynamic inputs container
        print("Waiting for dynamic inputs...")
        page.wait_for_selector("#simple-dynamic-inputs:not(.hidden)")

        # Type something in the input
        print("Typing into input...")
        page.fill("#simple-text-input", "A beautiful forest stream")

        # Typing triggers "Add" button visibility (logic in simple.js: if val.trim().length > 0)

        # Wait for Add Button
        print("Waiting for Add button...")
        page.wait_for_selector("#simple-add-btn:not(.hidden)")

        # Click Add
        print("Clicking Add...")
        page.click("#simple-add-btn")

        # Click Create Prompt
        print("Clicking Create Prompt...")
        page.click("#simple-create-btn")

        # Wait for result
        page.wait_for_selector("#simple-final-prompt")

        # Get text content
        final_prompt = page.locator("#simple-final-prompt").text_content()
        print("\n--- FINAL PROMPT START ---")
        print(final_prompt)
        print("--- FINAL PROMPT END ---\n")

        # Verify it contains the new instructions
        target_phrase = "You are an expert Text-to-Video cinematic generation system."
        if target_phrase in final_prompt:
            print("SUCCESS: New instructions found in prompt.")
        else:
            print("FAILURE: New instructions NOT found in prompt.")

        # Take screenshot
        page.screenshot(path="verification/video_prompt_verification.png")

        browser.close()

if __name__ == "__main__":
    verify_global_instructions()
