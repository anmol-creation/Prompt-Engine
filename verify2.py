import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        await page.goto("http://localhost:8000/pages/web-development/web-development.html")
        await page.wait_for_timeout(2000)

        print("Clicking Select Category trigger to open dropdown...")
        await page.click(".dropdown-trigger")
        await page.wait_for_timeout(500)

        print("Navigating Plan -> Project Idea -> Generate New Idea...")
        # 1. Click Plan
        await page.click("text=Plan", force=True)
        await page.wait_for_timeout(500)

        # Click the next dropdown trigger
        dropdown_triggers = await page.locator(".dropdown-trigger").all()
        await dropdown_triggers[-1].click(force=True)
        await page.wait_for_timeout(500)

        # 2. Click Project Idea
        # Because we saw it resolved to 2 elements and was not visible, maybe the first one is hidden.
        # We can locate by .dropdown-item inside the last active dropdown menu.
        menus = await page.locator(".dropdown-menu").all()
        await menus[-1].locator(".dropdown-item:has-text('Project Idea')").click(force=True)
        await page.wait_for_timeout(500)

        dropdown_triggers = await page.locator(".dropdown-trigger").all()
        await dropdown_triggers[-1].click(force=True)
        await page.wait_for_timeout(500)

        # 3. Click Generate New Idea
        menus = await page.locator(".dropdown-menu").all()
        await menus[-1].locator(".dropdown-item:has-text('Generate New Idea')").click(force=True)
        await page.wait_for_timeout(500)

        # Now click through the newly added nested dropdowns
        # 4. Field
        print("Clicking Field -> AI...")
        dropdown_triggers = await page.locator(".dropdown-trigger").all()
        await dropdown_triggers[-1].click(force=True)
        await page.wait_for_timeout(500)
        menus = await page.locator(".dropdown-menu").all()
        await menus[-1].locator(".dropdown-item:has-text('Field')").click(force=True)
        await page.wait_for_timeout(500)

        dropdown_triggers = await page.locator(".dropdown-trigger").all()
        await dropdown_triggers[-1].click(force=True)
        await page.wait_for_timeout(500)
        menus = await page.locator(".dropdown-menu").all()
        await menus[-1].locator(".dropdown-item:has-text('AI')").click(force=True)
        await page.wait_for_timeout(500)

        # 5. Target Audience
        print("Clicking Target Audience -> Everyone...")
        dropdown_triggers = await page.locator(".dropdown-trigger").all()
        await dropdown_triggers[-1].click(force=True)
        await page.wait_for_timeout(500)
        menus = await page.locator(".dropdown-menu").all()
        await menus[-1].locator(".dropdown-item:has-text('Target Audience')").click(force=True)
        await page.wait_for_timeout(500)

        dropdown_triggers = await page.locator(".dropdown-trigger").all()
        await dropdown_triggers[-1].click(force=True)
        await page.wait_for_timeout(500)
        menus = await page.locator(".dropdown-menu").all()
        await menus[-1].locator(".dropdown-item:has-text('Everyone')").click(force=True)
        await page.wait_for_timeout(500)

        # 6. Goal
        print("Clicking Goal -> Solve a Problem...")
        dropdown_triggers = await page.locator(".dropdown-trigger").all()
        await dropdown_triggers[-1].click(force=True)
        await page.wait_for_timeout(500)
        menus = await page.locator(".dropdown-menu").all()
        await menus[-1].locator(".dropdown-item:has-text('Goal')").click(force=True)
        await page.wait_for_timeout(500)

        dropdown_triggers = await page.locator(".dropdown-trigger").all()
        await dropdown_triggers[-1].click(force=True)
        await page.wait_for_timeout(500)
        menus = await page.locator(".dropdown-menu").all()
        await menus[-1].locator(".dropdown-item:has-text('Solve a Problem')").click(force=True)
        await page.wait_for_timeout(500)

        # 7. Platform
        print("Clicking Platform -> Website...")
        dropdown_triggers = await page.locator(".dropdown-trigger").all()
        await dropdown_triggers[-1].click(force=True)
        await page.wait_for_timeout(500)
        menus = await page.locator(".dropdown-menu").all()
        await menus[-1].locator(".dropdown-item:has-text('Platform')").click(force=True)
        await page.wait_for_timeout(500)

        dropdown_triggers = await page.locator(".dropdown-trigger").all()
        await dropdown_triggers[-1].click(force=True)
        await page.wait_for_timeout(500)
        menus = await page.locator(".dropdown-menu").all()
        await menus[-1].locator(".dropdown-item:has-text('Website')").click(force=True)
        await page.wait_for_timeout(500)

        # 8. Complexity
        print("Clicking Complexity -> Simple...")
        dropdown_triggers = await page.locator(".dropdown-trigger").all()
        await dropdown_triggers[-1].click(force=True)
        await page.wait_for_timeout(500)
        menus = await page.locator(".dropdown-menu").all()
        await menus[-1].locator(".dropdown-item:has-text('Complexity')").click(force=True)
        await page.wait_for_timeout(500)

        dropdown_triggers = await page.locator(".dropdown-trigger").all()
        await dropdown_triggers[-1].click(force=True)
        await page.wait_for_timeout(500)
        menus = await page.locator(".dropdown-menu").all()
        await menus[-1].locator(".dropdown-item:has-text('Simple')").click(force=True)
        await page.wait_for_timeout(500)

        # 9. Monetization
        print("Clicking Monetization -> Free...")
        dropdown_triggers = await page.locator(".dropdown-trigger").all()
        await dropdown_triggers[-1].click(force=True)
        await page.wait_for_timeout(500)
        menus = await page.locator(".dropdown-menu").all()
        await menus[-1].locator(".dropdown-item:has-text('Monetization')").click(force=True)
        await page.wait_for_timeout(500)

        dropdown_triggers = await page.locator(".dropdown-trigger").all()
        await dropdown_triggers[-1].click(force=True)
        await page.wait_for_timeout(500)
        menus = await page.locator(".dropdown-menu").all()
        await menus[-1].locator(".dropdown-item:has-text('Free')").click(force=True)
        await page.wait_for_timeout(500)

        # 10. Technology Preference
        print("Clicking Technology Preference -> No Preference...")
        dropdown_triggers = await page.locator(".dropdown-trigger").all()
        await dropdown_triggers[-1].click(force=True)
        await page.wait_for_timeout(500)
        menus = await page.locator(".dropdown-menu").all()
        await menus[-1].locator(".dropdown-item:has-text('Technology Preference')").click(force=True)
        await page.wait_for_timeout(500)

        dropdown_triggers = await page.locator(".dropdown-trigger").all()
        await dropdown_triggers[-1].click(force=True)
        await page.wait_for_timeout(500)
        menus = await page.locator(".dropdown-menu").all()
        await menus[-1].locator(".dropdown-item:has-text('No Preference')").click(force=True)
        await page.wait_for_timeout(500)

        # 11. Additional Requirements (the one with the text input)
        print("Clicking Additional Requirements -> Add Details...")
        dropdown_triggers = await page.locator(".dropdown-trigger").all()
        await dropdown_triggers[-1].click(force=True)
        await page.wait_for_timeout(500)
        menus = await page.locator(".dropdown-menu").all()
        await menus[-1].locator(".dropdown-item:has-text('Additional Requirements')").click(force=True)
        await page.wait_for_timeout(500)

        dropdown_triggers = await page.locator(".dropdown-trigger").all()
        await dropdown_triggers[-1].click(force=True)
        await page.wait_for_timeout(500)
        menus = await page.locator(".dropdown-menu").all()
        await menus[-1].locator(".dropdown-item:has-text('Add Details')").click(force=True)
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
