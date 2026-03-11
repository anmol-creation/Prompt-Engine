from playwright.sync_api import sync_playwright

def verify_unlocked_image(page):
    # Load the image page directly
    page.goto(f"file://{__file__.replace('verification/verify_image_html.py', 'pages/image/image.html')}")

    # Wait for the switch buttons
    page.wait_for_selector('.switch-btn')

    # Take a screenshot to verify buttons are unlocked
    page.screenshot(path="verification/image_modes_unlocked.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_unlocked_image(page)
        finally:
            browser.close()
