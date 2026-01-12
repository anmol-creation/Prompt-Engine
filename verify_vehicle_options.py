
from playwright.sync_api import sync_playwright, expect
import time

def verify_vehicle_options():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        # 1. Navigate to the Image Page (Simple Mode)
        page.goto("http://localhost:8000/pages/image/image.html")

        main_category = page.locator("#simple-main-category")
        expect(main_category).to_be_visible(timeout=10000)

        # 2. Select "Fix Image"
        main_category.click()
        page.locator("#simple-main-category").get_by_text("Fix Image", exact=True).click()

        # 3. Select "Fix Background"
        sub_cat_1 = page.locator("#simple-sub-category")
        expect(sub_cat_1).to_be_visible()
        sub_cat_1.click()
        sub_cat_1.get_by_text("Fix Background", exact=True).click()

        # 4. Select "Replace Background"
        sub_cat_2 = page.locator("#simple-sub-category-2")
        expect(sub_cat_2).to_be_visible()
        sub_cat_2.click()
        sub_cat_2.get_by_text("Replace Background", exact=True).click()

        # 5. Select "Nature"
        sub_cat_3 = page.locator("#simple-sub-category-3")
        expect(sub_cat_3).to_be_visible()
        sub_cat_3.click()
        sub_cat_3.get_by_text("Nature", exact=True).click()

        # 6. Select "Add Vehicle (Optional)"
        sub_cat_4 = page.locator("#simple-sub-category-4")
        expect(sub_cat_4).to_be_visible()
        sub_cat_4.click()
        sub_cat_4.get_by_text("Add Vehicle (Optional)", exact=True).click()

        # 7. Select "Car"
        sub_cat_5 = page.locator("#simple-sub-category-5")
        expect(sub_cat_5).to_be_visible()
        sub_cat_5.click()
        sub_cat_5.get_by_text("Car", exact=True).click()

        # 8. Select "Type"
        sub_cat_6 = page.locator("#simple-sub-category-6")
        expect(sub_cat_6).to_be_visible()
        sub_cat_6.click()
        sub_cat_6.get_by_text("Type", exact=True).click()

        # 9. Select "Sedan" (Leaf node) - Level 7
        sub_cat_7 = page.locator("#simple-sub-category-7")
        expect(sub_cat_7).to_be_visible()
        sub_cat_7.click()
        sub_cat_7.get_by_text("Sedan", exact=True).click()

        time.sleep(1) # Wait for animation/render

        # Take screenshot of the deep hierarchy
        page.screenshot(path="/home/jules/verification/vehicle_options_hierarchy_deep.png")

        # 10. Generate Prompt
        page.locator("#simple-create-btn").click()

        # Verify output
        output = page.locator("#simple-final-prompt")
        # Should contain "Sedan"
        expect(output).to_contain_text("Sedan")

        browser.close()

if __name__ == "__main__":
    verify_vehicle_options()
