from playwright.sync_api import sync_playwright

def verify_site_structure():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Verify Home Page
        print("Navigating to Home Page...")
        page.goto("http://localhost:8000/pages/home/home.html")
        page.wait_for_selector("#top-fields")
        page.screenshot(path="verification/home_page.png")
        print("Home Page Screenshot taken.")

        # 2. Verify Navigation to Image Page
        print("Navigating to Image Page...")
        page.click("text=Image")
        page.wait_for_url("**/pages/image/image.html")
        page.wait_for_selector(".builder-header")
        page.screenshot(path="verification/image_page.png")
        print("Image Page Screenshot taken.")

        # 3. Verify Functionality on Image Page (e.g., adding a row)
        print("Verifying Image Page Functionality...")

        # Select category and action in the first row
        page.select_option(".category-select", "Background")
        page.select_option(".action-select", "Blur")

        # Verify advanced UI appeared
        page.wait_for_selector(".advanced-ui-container")
        print("Advanced UI for Blur loaded.")

        # Add a new row
        page.click("#add-row-btn")

        # Check if new row exists
        rows = page.query_selector_all(".builder-row")
        if len(rows) == 2:
            print("Row added successfully.")
        else:
            print(f"Failed to add row. Row count: {len(rows)}")

        page.screenshot(path="verification/image_page_interaction.png")

        # 4. Verify Visual Guide Update
        # It should appear at the bottom
        visual_guide = page.query_selector(".visual-guide-container")
        if visual_guide:
            print("Visual Guide is present.")
        else:
            print("Visual Guide is MISSING.")

        page.screenshot(path="verification/visual_guide.png")

        # 5. Verify Navigation back to Home
        print("Navigating back to Home...")
        page.click(".logo-link")
        page.wait_for_url("**/pages/home/home.html")
        print("Returned to Home Page.")

        browser.close()

if __name__ == "__main__":
    verify_site_structure()
