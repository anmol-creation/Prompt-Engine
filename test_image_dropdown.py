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

        await page.goto("http://localhost:8080/pages/image/image.html")
        await page.wait_for_load_state("networkidle")

        # Take screenshot of builder initial state
        await page.screenshot(path="image_builder_initial.png")

        # Click Main Category
        await page.click("#simple-main-category .dropdown-trigger")
        await page.wait_for_timeout(500)
        await page.screenshot(path="image_builder_main_open.png")

        # Select "Fix Image" or something
        await page.click("#simple-main-category .dropdown-item:text('Fix Image')")
        await page.wait_for_timeout(500)

        # Take screenshot after selection
        await page.screenshot(path="image_builder_step1.png")

        await browser.close()
        server.kill()

if __name__ == "__main__":
    asyncio.run(main())
