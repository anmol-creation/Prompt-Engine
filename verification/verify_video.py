from playwright.sync_api import sync_playwright

def verify_video_page():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to home
        page.goto("http://localhost:8000/pages/home/home.html")

        # Click Video link
        print("Clicking Video link...")
        page.click("text=Video")

        # Verify URL
        print(f"Current URL: {page.url}")
        assert "pages/video/video.html" in page.url

        # Verify Page Title (in header)
        title_element = page.query_selector(".builder-header h2")
        title_text = title_element.inner_text()
        print(f"Page Title: {title_text}")
        assert "Video Prompt Builder" in title_text

        # Verify Categories are loaded
        print("Checking categories...")
        category_select = page.locator(".category-select").first
        options = category_select.locator("option").all_inner_texts()

        print(f"Found options: {options}")

        expected_categories = [
            "Content Type", "Platform / Output Target", "Video Style / Look",
            "Camera & Framing", "Motion & Pacing", "Lighting", "Color & Tone",
            "Mood / Emotion", "Scene Structure", "Text & Graphics",
            "Audio / Voice", "Editing Style", "Effects & Enhancements",
            "Duration & Format", "Output Quality"
        ]

        for cat in expected_categories:
            assert cat in options, f"Category '{cat}' not found in dropdown"

        # Test Interaction
        print("Testing interaction...")
        category_select.select_option("Content Type")

        action_select = page.locator(".action-select").first
        page.wait_for_selector(".action-select:not(.hidden)")

        action_options = action_select.locator("option").all_inner_texts()
        print(f"Action options for Content Type: {action_options}")

        assert "Short-form" in action_options

        # Generate a prompt
        action_select.select_option("Short-form")
        page.click("#create-prompt-btn")

        output = page.locator("#prompt-output").inner_text()
        print(f"Generated Output: {output}")
        assert "Content Type: Short-form" in output

        # Take screenshot
        page.screenshot(path="verification/video_page.png")
        print("Screenshot saved.")

        browser.close()

if __name__ == "__main__":
    verify_video_page()
