from playwright.sync_api import sync_playwright

def verify_redirect_visual():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print("Navigating to Root (index.html)...")
        # Go to root
        page.goto("http://localhost:8000/")

        # Wait for redirect to complete
        page.wait_for_url("**/pages/home/home.html")

        # Wait for content to load
        page.wait_for_selector(".logo-link")

        # Take screenshot of the destination page
        page.screenshot(path="verification/redirect_destination.png")
        print("Screenshot taken of final destination.")

        browser.close()

if __name__ == "__main__":
    verify_redirect_visual()
