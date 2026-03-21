import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        await page.goto("http://localhost:8000/pages/video/video.html")
        await page.wait_for_load_state("networkidle")

        await page.click(".video-category-card[data-category='text-to-video']")
        await page.wait_for_timeout(500)

        # Click the trigger
        await page.click("#simple-main-category .dropdown-trigger")
        await page.wait_for_timeout(500)

        # Click 'Background'
        await page.click("#simple-main-category .dropdown-item[data-value='Background']")
        await page.wait_for_timeout(500)

        await page.screenshot(path="video_after_bg_select.png")

        # Click the sub category trigger
        await page.click("#simple-sub-category .dropdown-trigger")
        await page.wait_for_timeout(500)

        # Click first option in sub category (e.g. 'Nature')
        await page.click("#simple-sub-category .dropdown-item:first-child")
        await page.wait_for_timeout(500)

        await page.screenshot(path="video_after_sub_select.png")

        dropdowns = await page.query_selector_all(".custom-dropdown")
        for i, d in enumerate(dropdowns):
            is_visible = await d.is_visible()
            id = await d.get_attribute("id")
            if is_visible:
                print(f"[{i}] {id}: VISIBLE")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
