from playwright.sync_api import sync_playwright

def verify_redirect():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print("Navigating to Root (index.html)...")
        # Go to root
        page.goto("http://localhost:8000/")

        # Check current URL
        current_url = page.url
        print(f"Initial URL hit: {current_url}")

        # Wait for potential redirect
        page.wait_for_url("**/pages/home/home.html")

        final_url = page.url
        print(f"Final URL: {final_url}")

        if "/pages/home/home.html" in final_url:
            print("SUCCESS: Redirected to Home Page.")
        else:
            print("FAILURE: Did not redirect to Home Page.")
            exit(1)

        # Verify element on Home Page to ensure it loaded
        page.wait_for_selector(".logo-link")
        print("Home Page Loaded.")

        browser.close()

if __name__ == "__main__":
    verify_redirect()
