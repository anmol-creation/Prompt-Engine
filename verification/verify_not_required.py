from playwright.sync_api import sync_playwright
import time

def verify_not_required_section():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to home
        page.goto("http://localhost:8000/pages/home/home.html")

        # Verify Section Existence
        section = page.locator("#not-required-section")
        assert section.is_visible()

        # Verify Static Text
        static_text = section.locator(".static-text")
        assert "— Not required" in static_text.inner_text()

        # Verify Typing Text Animation
        typing_text = section.locator("#typing-text")

        # Capture initial text
        initial_text = typing_text.inner_text()
        print(f"Initial text: '{initial_text}'")

        # Wait for some time to allow typing/erasing
        # We need to wait enough for it to type something if it started empty, or change if it started full
        time.sleep(1)
        text_after_1s = typing_text.inner_text()
        print(f"Text after 1s: '{text_after_1s}'")

        # Check if text is changing (it should be typing or erasing)
        # Note: It might be tricky if we catch it exactly at the same state, but unlikely with 1s interval and 60ms speed

        # Let's wait longer to ensure a phrase change or significant update
        time.sleep(3)
        text_after_4s = typing_text.inner_text()
        print(f"Text after 4s: '{text_after_4s}'")

        assert initial_text != text_after_4s or text_after_1s != text_after_4s, "Text did not change over 4 seconds"

        # Verify Color (Light Mode)
        color = typing_text.evaluate("element => getComputedStyle(element).color")
        print(f"Computed Color (Light Mode): {color}")
        # RGB for #6fb6ff is rgb(111, 182, 255)
        assert color == "rgb(111, 182, 255)"

        # Verify Color (Dark Mode)
        page.click("#theme-toggle")
        page.wait_for_selector("body.dark-mode")
        color_dark = typing_text.evaluate("element => getComputedStyle(element).color")
        print(f"Computed Color (Dark Mode): {color_dark}")
        # RGB for #4da3ff is rgb(77, 163, 255)
        assert color_dark == "rgb(77, 163, 255)"

        # Screenshot
        page.screenshot(path="verification/not_required_dark.png")

        browser.close()

if __name__ == "__main__":
    verify_not_required_section()
