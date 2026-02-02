import time
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        page.goto("http://localhost:8000/pages/home/home.html")
        page.click("text=Create Prompt")
        page.wait_for_load_state("networkidle")
        page.click(".field-card:has-text('Image')")
        page.wait_for_load_state("networkidle")

        # 1. Main Category: Customization
        page.click("#simple-main-category .dropdown-trigger")
        page.click(".dropdown-item:has-text('Customization')")

        # 2. Sub Category 1: Couple
        # Wait for sub category 1
        page.wait_for_selector("#simple-sub-category .dropdown-trigger", state="visible")
        page.click("#simple-sub-category .dropdown-trigger")
        page.click(".dropdown-item:has-text('Couple')")

        # 3. Sub Category 2: Face
        # Wait for sub category 2
        page.wait_for_selector("#simple-sub-category-2 .dropdown-trigger", state="visible")
        page.click("#simple-sub-category-2 .dropdown-trigger")
        page.click(".dropdown-item:has-text('Face')")

        # 4. Check Couple UI (Split Dropdowns)
        male_dropdown = page.locator("#couple-male-select")
        male_trigger = male_dropdown.locator(".dropdown-trigger")

        if not male_trigger.is_visible():
            print("Error: Male dropdown trigger not found/visible")
            # Debug: print what IS visible
            print(page.inner_html(".couple-row"))
            exit(1)

        print("Male dropdown found.")
        male_trigger.click()

        # Select "Bearded"
        item = male_dropdown.locator(".dropdown-item:has-text('Bearded')")
        if not item.is_visible():
             print("Error: Bearded option not found")
             exit(1)

        item.click()

        # 5. Verify Add Button
        add_btn = page.locator("#simple-add-btn")
        if not add_btn.is_visible():
            print("Error: Add button did not appear")
            exit(1)

        print("Add button appeared!")
        page.screenshot(path="verification/couple_custom_dropdown.png")
        browser.close()

if __name__ == "__main__":
    run()
