import asyncio
from playwright.async_api import async_playwright
import time

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        print("Navigating to Video Simple Mode...")
        await page.goto("http://localhost:8000/pages/video/video.html")
        await page.wait_for_load_state("networkidle")

        # Click Text to Video card
        print("Clicking Text to Video card...")
        await page.click(".video-category-card[data-category='text-to-video']")
        await page.wait_for_timeout(500)

        # Take screenshot of builder
        await page.screenshot(path="video_builder_after_fix.png")
        print("Screenshot saved: video_builder_after_fix.png")

        # The main category should be rendered.
        dropdowns = await page.query_selector_all(".custom-dropdown")
        print("Dropdowns visibility:")
        for i, d in enumerate(dropdowns):
            is_visible = await d.is_visible()
            id = await d.get_attribute("id")
            if is_visible:
                print(f"[{i}] {id}: VISIBLE")

        # Now click the main category
        await page.click("#simple-main-category .dropdown-trigger")
        await page.wait_for_timeout(500)
        await page.screenshot(path="video_builder_main_open_after_fix.png")
        print("Screenshot saved: video_builder_main_open_after_fix.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
