
from playwright.sync_api import sync_playwright, expect
import time
import os

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    page.goto("http://localhost:8000/pages/image/image.html")
    page.wait_for_load_state("networkidle")

    if not page.locator(".simple-builder-container").is_visible():
        page.get_by_role("button", name="Simple Mode").click()

    # Select "Fix Background" in Main Category
    main_dropdown = page.locator("#simple-main-category")
    main_dropdown.locator(".dropdown-trigger").click()
    main_dropdown.locator(".dropdown-item", has_text="Fix Background").click()

    # Wait for sub-dropdown
    sub_dropdown = page.locator("#simple-sub-category")
    sub_dropdown.wait_for(state="visible")

    # 1. Test "Add Blur" (Static)
    print("Testing Add Blur...")
    try:
        sub_dropdown.locator(".dropdown-item", has_text="Add Blur").click(timeout=3000)
    except:
        sub_dropdown.locator(".dropdown-trigger").click()
        sub_dropdown.locator(".dropdown-item", has_text="Add Blur").click()

    page.locator("#simple-create-btn").click()
    # Correct assertion string based on brain map
    expect(page.locator("#simple-final-prompt")).to_contain_text("Identify main subject, apply natural depth blur")

    expect(page.locator("#simple-text-input")).not_to_be_visible()

    # 2. Test "Replace BG (Type)" (Input)
    print("Testing Replace BG (Type)...")
    sub_dropdown.locator(".dropdown-trigger").click()
    sub_dropdown.locator(".dropdown-item", has_text="Replace BG (Type)").click()

    input_locator = page.locator("#simple-text-input")
    expect(input_locator).to_be_visible()

    input_locator.fill("Mars Surface")
    page.locator("#simple-create-btn").click()
    expect(page.locator("#simple-final-prompt")).to_contain_text("Mars Surface environment background")

    # 3. Test "Replace BG (Custom Image)" (File)
    print("Testing Replace BG (Custom Image)...")
    sub_dropdown.locator(".dropdown-trigger").click()
    sub_dropdown.locator(".dropdown-item", has_text="Replace BG (Custom Image)").click()

    expect(page.locator("#simple-file-wrapper")).to_be_visible()
    expect(input_locator).not_to_be_visible()

    page.locator("#simple-create-btn").click()
    expect(page.locator("#simple-final-prompt")).to_contain_text("Blend the subject with the provided custom background")

    # 4. Test "Replace BG (Auto AI)" (Static)
    print("Testing Replace BG (Auto AI)...")
    sub_dropdown.locator(".dropdown-trigger").click()
    sub_dropdown.locator(".dropdown-item", has_text="Replace BG (Auto AI)").click()

    expect(page.locator("#simple-file-wrapper")).not_to_be_visible()
    expect(input_locator).not_to_be_visible()

    page.locator("#simple-create-btn").click()
    expect(page.locator("#simple-final-prompt")).to_contain_text("Identify the subject type")

    page.screenshot(path="verification/verify_simple_mode.png")
    print("Verification complete!")

    browser.close()

if __name__ == "__main__":
    with sync_playwright() as playwright:
        run(playwright)
