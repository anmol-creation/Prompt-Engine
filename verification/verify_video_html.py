from playwright.sync_api import sync_playwright

def verify_unlocked_video(page):
    # Load the video page directly
    page.goto(f"file://{__file__.replace('verification/verify_video_html.py', 'pages/video/video.html')}")

    # Wait for the switch buttons
    page.wait_for_selector('.switch-btn')

    # Take a screenshot to verify buttons are unlocked (no lock icons, normal opacity)
    page.screenshot(path="verification/video_modes_unlocked.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_unlocked_video(page)
        finally:
            browser.close()
