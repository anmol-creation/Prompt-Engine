from playwright.sync_api import sync_playwright, expect
import time

def verify_simple_alignment():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Capture console logs
        page.on("console", lambda msg: print(f"Console: {msg.text}"))
        page.on("pageerror", lambda err: print(f"Page Error: {err}"))

        # Navigate
        page.goto("http://localhost:8000/pages/image/image.html")

        # 1. Verify Heading
        heading = page.get_by_role("heading", name="Image Prompt Builder")
        expect(heading).to_be_visible()
        print("Global Heading Verified.")

        # 2. Verify Simple Mode UI Elements
        main_cat_container = page.locator("#simple-main-category")
        expect(main_cat_container).to_be_visible()

        main_cat_trigger = main_cat_container.locator(".dropdown-trigger")
        main_cat_trigger.click()

        # Click "Fix Background"
        fix_bg_item = page.locator(".dropdown-item", has_text="Fix Background")
        fix_bg_item.wait_for(state="visible", timeout=5000)
        fix_bg_item.click()

        # Interact with Sub Category
        add_blur_item = page.locator(".dropdown-item", has_text="Add Blur")
        try:
            add_blur_item.wait_for(state="visible", timeout=2000)
        except:
            sub_cat_container = page.locator("#simple-sub-category")
            sub_cat_trigger = sub_cat_container.locator(".dropdown-trigger")
            sub_cat_trigger.click()
            add_blur_item.wait_for(state="visible", timeout=2000)
        add_blur_item.click()

        create_btn = page.locator("#simple-create-btn")
        create_btn.click()

        output = page.locator("#simple-final-prompt")
        expect(output).not_to_be_empty()
        print("Simple Mode Prompt Generation Verified.")

        # 3. Verify Default Mode
        page.locator("button[data-target='hard']").click()
        time.sleep(2)

        expect(heading).to_be_visible()

        def_cat_container = page.locator(".category-dropdown").first
        expect(def_cat_container).to_be_visible()

        def_cat_trigger = def_cat_container.locator(".dropdown-trigger")
        def_cat_trigger.click()

        bg_item = page.locator(".dropdown-item", has_text="Background").first
        bg_item.wait_for(state="visible", timeout=5000)
        bg_item.click()

        def_act_container = page.locator(".action-dropdown").first
        expect(def_act_container).to_be_visible()

        # Check logic sync: Does hidden select have value?
        hidden_cat_select = page.locator(".category-select").first
        expect(hidden_cat_select).to_have_value("Background")
        print("Default Mode Logic Sync Verified (Category).")

        # Select Action
        blur_item = page.locator(".dropdown-item", has_text="Blur").first
        try:
             blur_item.wait_for(state="visible", timeout=2000)
        except:
             def_act_trigger = def_act_container.locator(".dropdown-trigger")
             def_act_trigger.click()
             blur_item.wait_for(state="visible", timeout=2000)
        blur_item.click()

        hidden_act_select = page.locator(".action-select").first
        expect(hidden_act_select).to_have_value("Blur")
        print("Default Mode Logic Sync Verified (Action).")

        # Create Prompt in Default Mode
        def_create_btn = page.locator("#create-prompt-btn")
        def_create_btn.click()

        def_output = page.locator("#prompt-output")
        expect(def_output).not_to_be_empty()
        expect(def_output).not_to_contain_text("Please select at least one")
        print("Default Mode Prompt Generation Verified.")

        page.screenshot(path="verification/default_mode_verified.png", full_page=True)
        print("Default Mode Screenshot taken.")

        browser.close()

if __name__ == "__main__":
    verify_simple_alignment()
