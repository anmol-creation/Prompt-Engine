from playwright.sync_api import sync_playwright

def verify_home_hero():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to home
        page.goto("http://localhost:8000/pages/home/home.html")

        # Verify Hero Existence
        hero = page.locator("#hero")
        assert hero.is_visible()

        # Verify Headline
        headline = hero.locator(".hero-headline")
        assert headline.inner_text() == "Stop describing. Start selecting."

        # Verify Subline
        subline = hero.locator(".hero-subline")
        assert subline.inner_text() == "We turn your selections into AI-ready prompts."

        # Verify CTA
        cta = hero.locator(".hero-cta")
        assert "Convert your ideas 💡 into prompt" in cta.inner_text()

        # Light Mode Screenshot
        print("Taking Light Mode Screenshot...")
        page.screenshot(path="verification/hero_light.png")

        # Dark Mode Check
        print("Toggling Dark Mode...")
        page.click("#theme-toggle")
        page.wait_for_selector("body.dark-mode")

        # Dark Mode Screenshot
        print("Taking Dark Mode Screenshot...")
        page.screenshot(path="verification/hero_dark.png")

        browser.close()

if __name__ == "__main__":
    verify_home_hero()
