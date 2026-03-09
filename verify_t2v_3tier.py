from playwright.sync_api import sync_playwright
import time
import os

def verify_t2v_ui_3tier():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        file_path = f"file://{os.path.abspath('pages/video/text-to-video.html')}"
        page.goto(file_path)

        page.wait_for_selector('#t2v-level1')

        # 1. Select Subject (3-tier)
        page.locator('#t2v-level1').select_option('Subject')
        time.sleep(0.5)
        # Select sub category
        page.locator('#t2v-level2').select_option('Sci-Fi & Fantasy Beings')
        time.sleep(0.5)
        # Select specific item
        page.locator('#t2v-level3').select_option('Robot / Cyborg')
        page.locator('#t2v-add-btn').click()

        # 2. Select Customization (2-tier)
        page.locator('#t2v-level1').select_option('Customization')
        time.sleep(0.5)
        page.locator('#t2v-level2').select_option('Sci-Fi Armor')

        # Take screenshot BEFORE clicking Add to show the state of dropdowns
        os.makedirs('/home/jules/verification', exist_ok=True)
        screenshot_path = '/home/jules/verification/t2v_ui_3tier_before_add.png'
        page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")

        browser.close()

if __name__ == "__main__":
    verify_t2v_ui_3tier()