from playwright.sync_api import sync_playwright
import time
import os

def verify_t2v_ui():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        file_path = f"file://{os.path.abspath('pages/video/text-to-video.html')}"
        page.goto(file_path)

        page.wait_for_selector('#t2v-main-category')

        # 1. Select Subject
        page.locator('#t2v-main-category').select_option('Subject')
        time.sleep(0.5)
        page.locator('#t2v-sub-option').select_option('Robot')
        page.locator('#t2v-add-btn').click()

        # 2. Select Customization
        page.locator('#t2v-main-category').select_option('Customization')
        time.sleep(0.5)
        page.locator('#t2v-sub-option').select_option('Cyberpunk gear')

        # Take screenshot BEFORE clicking Add to show the green button
        os.makedirs('/home/jules/verification', exist_ok=True)
        screenshot_path = '/home/jules/verification/t2v_ui_before_add.png'
        page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")

        browser.close()

if __name__ == "__main__":
    verify_t2v_ui()
