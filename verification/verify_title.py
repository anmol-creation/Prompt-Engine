from playwright.sync_api import sync_playwright

def verify_home_title():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the home page (served locally)
        page.goto("http://localhost:8000/pages/home/home.html")

        # 1. Take a screenshot in Light Mode
        print("Taking Light Mode Screenshot...")
        page.screenshot(path="verification/home_light_mode.png")

        # 2. Toggle to Dark Mode
        print("Toggling to Dark Mode...")
        page.click("#theme-toggle")

        # Wait for the mode to switch (check body class)
        page.wait_for_selector("body.dark-mode")

        # 3. Take a screenshot in Dark Mode
        print("Taking Dark Mode Screenshot...")
        page.screenshot(path="verification/home_dark_mode.png")

        browser.close()

if __name__ == "__main__":
    verify_home_title()
