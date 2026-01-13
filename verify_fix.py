from playwright.sync_api import sync_playwright

def verify_fix(page):
    # Navigate to the Image Prompt Builder
    page.goto("http://localhost:8000/pages/image/image.html")

    # Wait for the Simple Mode content to load (the error message would appear here if it fails)
    # The fix we implemented should prevent "Error loading mode" and instead show "I want to..."

    try:
        page.wait_for_selector(".simple-builder-row", timeout=5000)
    except Exception as e:
        print(f"Error waiting for selector: {e}")
        # Take a screenshot even if it fails to see the error
        page.screenshot(path="verification_failure.png")
        raise e

    # Take a screenshot of the loaded page
    page.screenshot(path="verification_success.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_fix(page)
            print("Verification script ran successfully.")
        except Exception as e:
            print(f"Verification script failed: {e}")
        finally:
            browser.close()
