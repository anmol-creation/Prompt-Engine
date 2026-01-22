
from playwright.sync_api import sync_playwright

def verify_3rd_category_list():
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

        # Wait for subcategory dropdown (simple-sub-category)
        print("Waiting for Sub Category 1...")
        page.wait_for_selector("#simple-sub-category:not(.hidden)")

        # Select "Lifestyle & Daily Life"
        print("Selecting Sub Category 1: Lifestyle & Daily Life...")
        page.click("#simple-sub-category .dropdown-trigger")
        page.click("#simple-sub-category .dropdown-item[data-value='Lifestyle & Daily Life']")

        # Now, instead of dynamic inputs, we expect another dropdown (simple-sub-category-2)
        print("Waiting for Sub Category 2 (Title List)...")
        try:
            page.wait_for_selector("#simple-sub-category-2:not(.hidden)", timeout=5000)
            print("SUCCESS: Sub Category 2 appeared.")
        except Exception as e:
            print(f"FAILURE: Sub Category 2 did not appear. Error: {e}")

        # Verify dynamic inputs are HIDDEN
        is_hidden = page.evaluate("document.getElementById('simple-dynamic-inputs').classList.contains('hidden')")
        if is_hidden:
            print("SUCCESS: Dynamic inputs are hidden.")
        else:
            print("FAILURE: Dynamic inputs are visible.")

        # Select an option from Sub Category 2 (e.g. "Morning routine")
        print("Selecting Title: Morning routine...")
        page.click("#simple-sub-category-2 .dropdown-trigger")
        page.click("#simple-sub-category-2 .dropdown-item[data-value='Morning routine']")

        # Verify Add button appears
        print("Waiting for Add button...")
        page.wait_for_selector("#simple-add-btn:not(.hidden)")

        # Click Add and Create
        page.click("#simple-add-btn")
        page.click("#simple-create-btn")

        # Check prompt
        page.wait_for_selector("#simple-final-prompt")
        final_prompt = page.locator("#simple-final-prompt").text_content()
        print("\n--- FINAL PROMPT START ---")
        print(final_prompt)
        print("--- FINAL PROMPT END ---\n")

        # Take screenshot
        page.screenshot(path="verification/video_dropdown_verification.png")

        browser.close()

if __name__ == "__main__":
    verify_3rd_category_list()
