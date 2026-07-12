import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        # Ensure we are fully ready
        await page.goto("http://localhost:8000/pages/web-development/web-development.html")
        await page.wait_for_timeout(3000)

        async def click_item(value):
             print(f"Clicking item: {value}")
             await page.evaluate(f"""
                  let items = Array.from(document.querySelectorAll('.dropdown-item'));
                  let item = items.find(el => el.getAttribute('data-value') === '{value}');
                  if (item) item.click();
                  else console.log('Item not found: {value}');
             """)
             await page.wait_for_timeout(300)

        async def click_trigger():
             await page.evaluate("""
                  let triggers = document.querySelectorAll('.dropdown-trigger');
                  if (triggers.length > 0) triggers[triggers.length - 1].click();
             """)
             await page.wait_for_timeout(300)

        # Make sure layout is fully loaded or just wait a bit.

        # 1. Expand the first dropdown (I want to...)
        # In simple mode, it usually renders the first one automatically or requires clicking Select Category.
        await page.click("text=Simple Mode", force=True)
        await page.wait_for_timeout(1000)

        try:
             await page.click(".dropdown-trigger")
        except:
             await click_trigger()

        await page.wait_for_timeout(500)

        await click_item("Plan")
        await click_trigger()
        await click_item("Project Idea")
        await click_trigger()
        await click_item("Generate New Idea")
        await click_trigger()

        await click_item("Field")
        await click_trigger()
        await click_item("AI")
        await click_trigger()

        await click_item("Target Audience")
        await click_trigger()
        await click_item("Everyone")
        await click_trigger()

        await click_item("Goal")
        await click_trigger()
        await click_item("Solve a Problem")
        await click_trigger()

        await click_item("Platform")
        await click_trigger()
        await click_item("Website")
        await click_trigger()

        await click_item("Complexity")
        await click_trigger()
        await click_item("Simple")
        await click_trigger()

        await click_item("Monetization")
        await click_trigger()
        await click_item("Free")
        await click_trigger()

        await click_item("Technology Preference")
        await click_trigger()
        await click_item("No Preference")
        await click_trigger()

        await click_item("Additional Requirements")
        await click_trigger()
        await click_item("Add Details")

        await page.wait_for_timeout(1000)

        # Check if text input field appears
        input_container = page.locator("#dynamic-inputs")
        is_visible = await input_container.is_visible()
        print(f"Dynamic Input Container Visible: {is_visible}")

        if is_visible:
            text_area = input_container.locator("textarea, input[type='text']")
            placeholder = await text_area.get_attribute("placeholder")
            print(f"Placeholder text: {placeholder}")
            label_text = await input_container.locator("label").inner_text()
            print(f"Label text: {label_text}")

        await page.screenshot(path="verification/web_dev_generate_new_idea_full_path.png", full_page=True)
        print("Screenshot saved to verification/web_dev_generate_new_idea_full_path.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
