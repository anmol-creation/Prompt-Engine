
from playwright.sync_api import sync_playwright

def verify_instructions_fix():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print("Navigating to Home...")
        # Assuming server is running at port 8080
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

        # Wait for subcategory dropdown (Level 1)
        page.wait_for_selector("#simple-sub-category:not(.hidden)")

        # Select "Lifestyle & Daily Life"
        print("Selecting Sub Category 1: Lifestyle & Daily Life...")
        page.click("#simple-sub-category .dropdown-trigger")
        page.click("#simple-sub-category .dropdown-item[data-value='Lifestyle & Daily Life']")

        # Wait for subcategory dropdown (Level 2)
        print("Waiting for Sub Category 2...")
        page.wait_for_selector("#simple-sub-category-2:not(.hidden)")

        # Select "Morning routine"
        print("Selecting Sub Category 2: Morning routine...")
        page.click("#simple-sub-category-2 .dropdown-trigger")
        page.click("#simple-sub-category-2 .dropdown-item[data-value='Morning routine']")

        # Selecting a leaf option (Morning routine) should trigger the Add button visibility
        # There is no input to type for this flow.

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

        # Verification Logic
        unwanted_phrase = "You are an expert Text-to-Video cinematic generation system"
        wanted_phrase = "Professional cinematic lighting"

        # The prompt part from the option: "Category: Lifestyle & Daily Life. Title: Morning routine"
        expected_prompt_part = "Category: Lifestyle & Daily Life. Title: Morning routine"

        if unwanted_phrase in final_prompt:
            print("FAILURE: Unwanted system instructions found in prompt.")
            exit(1)

        if wanted_phrase not in final_prompt:
            print("FAILURE: Wanted keywords NOT found in prompt.")
            exit(1)

        if expected_prompt_part not in final_prompt:
             print("FAILURE: Expected user selection prompt NOT found.")
             exit(1)

        print("SUCCESS: Prompt is clean and contains keywords.")

        # Take screenshot
        page.screenshot(path="verification/instructions_fix_verification.png")

        browser.close()

if __name__ == "__main__":
    verify_instructions_fix()
