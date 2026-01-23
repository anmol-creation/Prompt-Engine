
from playwright.sync_api import sync_playwright

def verify_instructions_revert():
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
        page.click("#simple-main-category .dropdown-trigger")
        page.click("#simple-main-category .dropdown-item[data-value='Text → Video']")

        # Select "Lifestyle & Daily Life"
        print("Selecting Sub Category 1: Lifestyle & Daily Life...")
        page.click("#simple-sub-category .dropdown-trigger")
        page.click("#simple-sub-category .dropdown-item[data-value='Lifestyle & Daily Life']")

        # Select Title
        print("Selecting Title: Morning routine...")
        page.wait_for_selector("#simple-sub-category-2:not(.hidden)", timeout=5000)
        page.click("#simple-sub-category-2 .dropdown-trigger")
        page.click("#simple-sub-category-2 .dropdown-item[data-value='Morning routine']")

        # Create Prompt
        print("Creating Prompt...")
        page.click("#simple-add-btn")
        page.click("#simple-create-btn")

        # Check prompt
        page.wait_for_selector("#simple-final-prompt")
        final_prompt = page.locator("#simple-final-prompt").text_content()
        print("\n--- FINAL PROMPT START ---")
        print(final_prompt)
        print("--- FINAL PROMPT END ---\n")

        # Verify it DOES NOT contain "You are Jules"
        if "You are Jules" not in final_prompt and "OUTPUT RULE" not in final_prompt:
            print("SUCCESS: System instructions removed.")
        else:
            print("FAILURE: System instructions still present.")

        # Verify it contains style keywords
        if "Cinematic" in final_prompt and "vertical 9:16" in final_prompt:
            print("SUCCESS: Style keywords present.")
        else:
            print("FAILURE: Style keywords missing.")

        # Take screenshot
        page.screenshot(path="verification/instructions_fix_verification.png")

        browser.close()

if __name__ == "__main__":
    verify_instructions_revert()
