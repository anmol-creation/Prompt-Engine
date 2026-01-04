from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Navigate to Image Page (Default mode is Simple)
    print("Navigating to Image Page...")
    page.goto("http://localhost:8000/pages/image/image.html")

    # Wait for Simple Mode content to load
    print("Waiting for Simple Mode...")
    # Expect "Create Prompt" text
    expect(page.get_by_text("Create Prompt")).to_be_visible()

    # Take initial screenshot
    page.screenshot(path="verification/1_simple_mode_load.png")

    # Click Main Category Dropdown
    print("Opening Main Category...")
    # Find the dropdown trigger (div with class dropdown-trigger) inside #simple-main-category
    main_cat = page.locator("#simple-main-category .dropdown-trigger")
    main_cat.click()

    # Wait for menu to appear
    menu = page.locator("#simple-main-category .dropdown-menu")
    expect(menu).to_be_visible()

    # Click "Fix Background"
    print("Selecting 'Fix Background'...")
    # Using get_by_text on the page might be ambiguous if multiple exist, so scope to menu
    menu.get_by_text("Fix Background").click()

    # Verify "Fix Background" is selected
    expect(page.locator("#simple-main-category .selected-text")).to_have_text("Fix Background")

    # Verify Sub Category Dropdown appears
    sub_cat = page.locator("#simple-sub-category")
    expect(sub_cat).not_to_have_class("hidden")

    # Wait for animation/js
    page.wait_for_timeout(500)

    # Take screenshot of sub-cat open
    page.screenshot(path="verification/2_sub_cat_open.png")

    # Click "Add Blur" in Sub Category
    print("Selecting 'Add Blur'...")
    sub_menu = page.locator("#simple-sub-category .dropdown-menu")
    # In my JS, I auto-open sub-cat. So menu should be visible.
    expect(sub_menu).to_be_visible()

    sub_menu.get_by_text("Add Blur").click()

    # Verify Output
    print("Verifying Output...")
    output = page.locator("#simple-final-prompt")
    expect(output).to_be_visible()
    expect(output).to_contain_text("Apply a professional cinematic blur")

    # Verify Visual Guide Placeholder
    guide = page.locator("#simple-visual-guide-container")
    expect(guide).to_be_visible()

    # Final Screenshot
    page.screenshot(path="verification/3_final_output.png")

    browser.close()
    print("Verification Complete.")

if __name__ == "__main__":
    with sync_playwright() as playwright:
        run(playwright)
