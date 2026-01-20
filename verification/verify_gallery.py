
from playwright.sync_api import sync_playwright

def verify_gallery(page):
    # Navigate to the prompt gallery
    page.goto("http://localhost:8080/pages/prompt_gallery/index.html")

    # Wait for the gallery items to load
    # Based on script.js, items are added to 'gallery-grid' with class 'gallery-card'
    page.wait_for_selector(".gallery-card")

    # Take a screenshot
    page.screenshot(path="verification/gallery_loaded.png")
    print("Screenshot saved to verification/gallery_loaded.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_gallery(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()
