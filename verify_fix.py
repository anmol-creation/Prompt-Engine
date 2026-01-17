from playwright.sync_api import sync_playwright, expect
import threading
import http.server
import socketserver
import os
import time

PORT = 8080

def start_server():
    os.chdir(os.getcwd()) # Ensure we serve from root
    Handler = http.server.SimpleHTTPRequestHandler
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving at port {PORT}")
        httpd.serve_forever()

def run_verification():
    # Start server in background thread
    server_thread = threading.Thread(target=start_server, daemon=True)
    server_thread.start()

    # Allow server to start
    time.sleep(2)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            print("Navigating to Image Page...")
            page.goto(f"http://localhost:{PORT}/pages/image/image.html")

            # 1. Wait for Simple Mode to load (it loads dynamically)
            # The dropdown for Main Category has id 'simple-main-category'
            print("Waiting for Simple Mode to load...")
            main_category = page.locator("#simple-main-category")
            expect(main_category).to_be_visible(timeout=10000)

            # 2. Select "Fix Image"
            print("Selecting 'Fix Image'...")
            # We need to handle the custom dropdown.
            # Based on memory, it's a select element replaced by custom UI,
            # OR it might be a hidden select with custom UI.
            # Let's inspect the code usage. `pages/image/simple/js/dom.js` gets it by ID.
            # `initMainCategory` in `dropdown-manager.js` calls `Renderer.initMain`.

            # Let's assume for a test we can interact with the custom UI or the select if visible.
            # The custom dropdown usually builds a structure like:
            # <div class="custom-dropdown" ...> <div class="selected-option">...</div> <div class="options-list">...</div> </div>
            # Or it might populate the select if it's native.
            # Looking at `simple.html`: <div class="custom-dropdown" id="simple-main-category"></div>
            # So it's NOT a <select> tag. It's a div.

            # Let's try to click it to open.
            main_category.click()

            # Wait for option "Fix Image" and click it
            page.get_by_text("Fix Image").click()

            # 3. Wait for Sub Category (Level 1)
            # It should appear in `simple-sub-category` (id).
            print("Waiting for sub-category...")
            sub_cat_1 = page.locator("#simple-sub-category")
            expect(sub_cat_1).to_be_visible()

            # Click sub category 1
            sub_cat_1.click()
            page.get_by_text("Fix Background").click()

            # 4. Wait for Level 2
            print("Waiting for level 2...")
            sub_cat_2 = page.locator("#simple-sub-category-2")
            expect(sub_cat_2).to_be_visible()
            sub_cat_2.click()
            page.get_by_text("Replace Background").click()

            # 5. Wait for Level 3 (The problematic one)
            print("Waiting for level 3...")
            sub_cat_3 = page.locator("#simple-sub-category-3")
            expect(sub_cat_3).to_be_visible()
            sub_cat_3.click()

            # 6. Verify "Type" is present (this would fail if the crash persisted or if logic was wrong)
            # We want to select "Type" to see the input field
            print("Selecting 'Type'...")

            # In the fixed code, "Type" is an input field node?
            # Wait, `fix-image.js`: "Type": { type: "input", ... }
            # If it's type: "input", does it appear in the dropdown list?
            # Yes, as an option named "Type".
            page.get_by_text("Type", exact=True).click()

            # 7. Check if Dynamic Input appears
            print("Checking for dynamic input...")
            dynamic_input = page.locator("#simple-text-input")
            expect(dynamic_input).to_be_visible()

            # Type something to ensure it works
            dynamic_input.fill("Eiffel Tower")

            # 8. Take Screenshot
            print("Taking screenshot...")
            page.screenshot(path="verification_success.png")
            print("Screenshot saved to verification_success.png")

        except Exception as e:
            print(f"Test failed: {e}")
            # Take screenshot on failure too
            page.screenshot(path="verification_failed.png")
            raise e
        finally:
            browser.close()

if __name__ == "__main__":
    run_verification()
