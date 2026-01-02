from playwright.sync_api import sync_playwright

def verify_video_visual_guide():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to video page (served locally)
        page.goto("http://localhost:8000/pages/video/video.html")

        # Check if Visual Guide container exists
        print("Checking Visual Guide Container...")
        guide = page.locator("#video-visual-guide")
        assert guide.is_visible(), "Visual Guide container not visible"

        # Check title
        title = guide.locator(".guide-title")
        assert title.inner_text() == "VISUAL GUIDE"

        # Check for grid items
        items = guide.locator(".guide-category-block")
        count = items.count()
        print(f"Found {count} visual guide items")
        assert count == 15, f"Expected 15 items, found {count}"

        # Check specific visual classes
        # 1. Content Type (Cards)
        item1 = items.nth(0)
        assert "Content Type" in item1.inner_text()
        assert item1.get_attribute("class").find("visual-style-cards") != -1
        assert item1.locator(".visual-card").count() == 2

        # 2. Platform (Icons)
        item2 = items.nth(1)
        assert "Platform / Output Target" in item2.inner_text()
        assert item2.get_attribute("class").find("visual-style-icons") != -1

        # 15. Quality (Badges)
        item15 = items.nth(14)
        assert "Output Quality" in item15.inner_text()
        assert item15.get_attribute("class").find("visual-style-quality") != -1

        # Take screenshot
        page.screenshot(path="verification/video_visual_guide.png")
        print("Screenshot saved.")

        browser.close()

if __name__ == "__main__":
    verify_video_visual_guide()
