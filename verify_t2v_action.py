from playwright.sync_api import sync_playwright
import time
import os

def verify_t2v_action():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        file_path = f"file://{os.path.abspath('pages/video/text-to-video.html')}"
        page.goto(file_path)

        page.wait_for_selector('#t2v-level1')

        # 1. Select Action / Motion (3-tier)
        page.locator('#t2v-level1').select_option('Action / Motion')
        time.sleep(0.5)
        # Select sub category
        page.locator('#t2v-level2').select_option('Dynamic, Sports & Combat')
        time.sleep(0.5)
        # Select specific item
        page.locator('#t2v-level3').select_option('Doing parkour')
        page.locator('#t2v-add-btn').click()

        # Take screenshot BEFORE clicking Add to show the state of dropdowns
        os.makedirs('/home/jules/verification', exist_ok=True)
        screenshot_path = '/home/jules/verification/t2v_ui_action.png'
        page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")

        browser.close()

if __name__ == "__main__":
    verify_t2v_action()