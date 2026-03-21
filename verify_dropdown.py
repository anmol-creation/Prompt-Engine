import asyncio
from playwright.async_api import async_playwright
import subprocess
import time

async def main():
    server = subprocess.Popen(["python3", "-m", "http.server", "8080"])
    time.sleep(1) # wait for server

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        await page.goto("http://localhost:8080/pages/video/video.html")
        await page.wait_for_load_state("networkidle")

        # Click "Text To Video"
        await page.click(".video-category-card[data-category='text-to-video']")
        await page.wait_for_timeout(500)

        # Take screenshot of builder initial state
        await page.screenshot(path="builder_initial.png")

        # Click Main Category
        await page.click("#simple-main-category .dropdown-trigger")
        await page.wait_for_timeout(500)
        await page.screenshot(path="builder_main_open.png")

        # Select "Background"
        await page.click("#simple-main-category .dropdown-item:text('Background')")
        await page.wait_for_timeout(500)

        # Take screenshot after selection
        await page.screenshot(path="builder_step1.png")

        await browser.close()
        server.kill()

if __name__ == "__main__":
    asyncio.run(main())
