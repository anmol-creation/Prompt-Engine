import time
import subprocess
from playwright.sync_api import sync_playwright

def verify_dropdown_type():
    server = subprocess.Popen(["python3", "-m", "http.server", "8000"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    time.sleep(2)

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()

            page.goto("http://localhost:8000/pages/image/image.html")

            def select_custom_dropdown(dropdown_id, option_text):
                dropdown = page.locator(f"#{dropdown_id}")
                dropdown.click()
                dropdown.locator(".dropdown-menu").wait_for(state="visible")
                option = dropdown.locator(f".dropdown-item:has-text('{option_text}')").first
                option.click()
                time.sleep(1)

            page.wait_for_selector("#simple-main-category .dropdown-item", state="attached", timeout=10000)
            select_custom_dropdown("simple-main-category", "Customization")

            page.wait_for_selector("#simple-sub-category:not(.hidden)", timeout=5000)
            select_custom_dropdown("simple-sub-category", "Couple")

            page.wait_for_selector("#simple-sub-category-2:not(.hidden)", timeout=5000)
            select_custom_dropdown("simple-sub-category-2", "Gesture & Pose")

            # Now verify Level 3 appears (meaning it was treated as a group)
            if page.locator("#simple-sub-category-3").is_visible():
                print("Level 3 is VISIBLE - SUCCESS")
            else:
                print("Level 3 is HIDDEN - FAILURE (Check type='group')")
                page.screenshot(path="verification/failed_type.png")

    finally:
        server.kill()

if __name__ == "__main__":
    verify_dropdown_type()
