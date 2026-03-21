import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        await page.goto("http://localhost:8000/pages/image/image.html")
        await page.wait_for_load_state("networkidle")

        # Click the main trigger
        await page.click("#simple-main-category .dropdown-trigger")
        await page.wait_for_timeout(500)

        # Click 'Creative Image'
        await page.click("#simple-main-category .dropdown-item[data-value='Creative Image']")
        await page.wait_for_timeout(500)

        # Click the sub category trigger
        await page.click("#simple-sub-category .dropdown-trigger")
        await page.wait_for_timeout(500)

        # Click first child
        await page.click("#simple-sub-category .dropdown-item:first-child")
        await page.wait_for_timeout(500)

        await page.screenshot(path="image_subject_2.png")

        dropdowns = await page.query_selector_all(".custom-dropdown")
        for i, d in enumerate(dropdowns):
            is_visible = await d.is_visible()
            id = await d.get_attribute("id")
            if is_visible:
                print(f"[{i}] {id}: VISIBLE")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
