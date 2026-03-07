from playwright.sync_api import sync_playwright

def verify_video_simple_redirection():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the video page
        page.goto("http://localhost:8000/pages/video/video.html")

        # Wait for the category cards to load
        page.wait_for_selector(".video-category-card")

        # Take a screenshot of the initial state (text only layout)
        page.screenshot(path="verification/video_simple_text_only.png", full_page=True)

        # Click the "Text To Video" card to verify redirection
        text_to_video_card = page.locator(".video-category-card", has_text="Text To Video")
        text_to_video_card.click()

        # Wait for navigation to the new page
        page.wait_for_url("**/pages/video/text-to-video.html")

        # Take a screenshot after navigation
        page.screenshot(path="verification/video_simple_redirected.png", full_page=True)

        browser.close()

if __name__ == "__main__":
    verify_video_simple_redirection()