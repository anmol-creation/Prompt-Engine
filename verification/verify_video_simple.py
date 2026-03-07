from playwright.sync_api import sync_playwright

def verify_video_simple_mode():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the video page
        page.goto("http://localhost:8000/pages/video/video.html")

        # Wait for the category cards to load
        page.wait_for_selector(".video-category-card")

        # Take a screenshot of the initial state
        page.screenshot(path="verification/video_simple_initial.png", full_page=True)

        # Click the "Text To Video" card
        text_to_video_card = page.locator(".video-category-card", has_text="Text To Video")
        text_to_video_card.click()

        # Wait a moment for visual feedback
        page.wait_for_timeout(500)

        # Take a screenshot after click
        page.screenshot(path="verification/video_simple_clicked.png", full_page=True)

        browser.close()

if __name__ == "__main__":
    verify_video_simple_mode()