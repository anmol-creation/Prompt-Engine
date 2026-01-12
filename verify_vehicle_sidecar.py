
from playwright.sync_api import sync_playwright, expect
import time

def verify_vehicle_options_sidecar():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        page.goto("http://localhost:8000/pages/image/image.html")

        main_category = page.locator("#simple-main-category")
        expect(main_category).to_be_visible(timeout=10000)

        # 1. Select "Fix Image" -> "Fix Background" -> "Replace Background" -> "Nature"
        main_category.click()
        page.locator("#simple-main-category").get_by_text("Fix Image", exact=True).click()

        page.locator("#simple-sub-category").click()
        page.locator("#simple-sub-category").get_by_text("Fix Background", exact=True).click()

        page.locator("#simple-sub-category-2").click()
        page.locator("#simple-sub-category-2").get_by_text("Replace Background", exact=True).click()

        page.locator("#simple-sub-category-3").click()
        page.locator("#simple-sub-category-3").get_by_text("Nature", exact=True).click()

        time.sleep(1) # Wait for animation/stack

        # 2. Verify Prompt Generates IMMEDIATELY (Nature selected, no vehicle)
        page.locator("#simple-create-btn").click()
        output = page.locator("#simple-final-prompt")
        # Match case-insensitive
        expect(output).to_contain_text("nature", ignore_case=True)
        expect(output).not_to_contain_text("with a Car")

        # 3. Verify "Add Vehicle" Sidecar is Visible
        vehicle_container = page.locator("#simple-vehicle-options")
        expect(vehicle_container).to_be_visible()
        expect(vehicle_container).to_contain_text("Optional: Add vehicle or objects")

        # 4. Select Vehicle Category: Car
        opt_cat = page.locator("#opt-vehicle-cat")
        opt_cat.click()
        page.locator(".dropdown-item").get_by_text("Car", exact=True).click()

        # 5. Verify Prompt Updates (Generic Car)
        # Note: We need to wait for update. Prompt Controller updates on change, but maybe via debounce?
        # vehicle-options.js calls generatePrompt().

        time.sleep(0.5)
        # We might need to click Create again if update isn't live?
        # prompt-controller updates the DOM element directly in generatePrompt.
        # But let's check text content.
        expect(output).to_contain_text("with a Car in the background")

        # 6. Select Vehicle Type: Sedan
        opt_type = page.locator("#opt-vehicle-type")
        expect(opt_type).to_be_visible()
        opt_type.click()
        page.locator(".dropdown-item").get_by_text("Sedan", exact=True).click()

        time.sleep(0.5)
        expect(output).to_contain_text("with a Sedan in the background")

        # 7. Select Color: Red
        opt_color = page.locator("#opt-vehicle-color")
        expect(opt_color).to_be_visible()
        opt_color.click()
        page.locator(".dropdown-item").get_by_text("Red", exact=True).click()

        time.sleep(0.5)
        expect(output).to_contain_text("with a Red Sedan in the background")

        # Take screenshot
        page.screenshot(path="/home/jules/verification/vehicle_options_sidecar.png")

        browser.close()

if __name__ == "__main__":
    verify_vehicle_options_sidecar()
