
from playwright.sync_api import sync_playwright, expect
import time
import os

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    page.goto("http://localhost:8000/pages/image/image.html")
    page.wait_for_load_state("networkidle")

    # Ensure Simple Mode is active
    # Using specific class/id to avoid strict mode violation
    if page.locator(".simple-builder-container").is_visible():
        print("Already in Simple Mode")
    else:
        page.get_by_role("button", name="Simple Mode").click()

    # Take screenshot of initial state
    page.screenshot(path="verification/1_initial.png")

    # Select "Fix Background" in Main Category
    # Scope to the dropdown
    main_dropdown = page.locator("#simple-main-category")
    main_dropdown.locator(".dropdown-trigger").click()
    # Click the item inside the dropdown list
    main_dropdown.locator(".dropdown-item", has_text="Fix Background").click()

    time.sleep(0.5)
    page.screenshot(path="verification/2_fix_background_selected.png")

    # Select "Replace BG (Type)" in Sub Category
    sub_dropdown = page.locator("#simple-sub-category")
    sub_dropdown.locator(".dropdown-trigger").click()
    sub_dropdown.locator(".dropdown-item", has_text="Replace BG (Type)").click()

    time.sleep(0.5)
    # Check if input appeared
    input_locator = page.locator("#simple-text-input")
    expect(input_locator).to_be_visible()
    page.screenshot(path="verification/3_type_selected.png")

    # Type something
    input_locator.fill("Mars Surface")

    # Click Create Prompt button (Use ID to be specific)
    page.locator("#simple-create-btn").click()

    time.sleep(0.5)
    # Check output
    output_locator = page.locator("#simple-final-prompt")
    expect(output_locator).to_contain_text("Mars Surface environment background")
    page.screenshot(path="verification/4_prompt_generated.png")

    # Test Custom Image UI
    sub_dropdown.locator(".dropdown-trigger").click()
    sub_dropdown.locator(".dropdown-item", has_text="Replace BG (Custom Image)").click()

    time.sleep(0.5)
    expect(page.locator("#simple-file-wrapper")).to_be_visible()
    expect(input_locator).not_to_be_visible() # text input should be hidden
    page.screenshot(path="verification/5_custom_image_selected.png")

    # Test Auto AI (should have no inputs)
    sub_dropdown.locator(".dropdown-trigger").click()
    sub_dropdown.locator(".dropdown-item", has_text="Replace BG (Auto AI)").click()

    time.sleep(0.5)
    expect(page.locator("#simple-file-wrapper")).not_to_be_visible()
    expect(input_locator).not_to_be_visible()
    page.screenshot(path="verification/6_auto_ai_selected.png")

    browser.close()

if __name__ == "__main__":
    with sync_playwright() as playwright:
        run(playwright)
