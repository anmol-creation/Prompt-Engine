from playwright.sync_api import sync_playwright, expect
import threading
import http.server
import socketserver
import os
import time

PORT = 8082

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

        # Capture console logs
        page.on("console", lambda msg: print(f"BROWSER CONSOLE: {msg.text}"))

        try:
            print("Navigating to Image Page...")
            page.goto(f"http://localhost:{PORT}/pages/image/image.html")

            # 1. Wait for Simple Mode to load
            print("Waiting for Simple Mode to load...")
            mode_content = page.locator("#mode-content-container")
            expect(mode_content).not_to_have_text("Loading...", timeout=10000)

            main_category = page.locator("#simple-main-category")
            expect(main_category).to_be_visible(timeout=5000)

            # 2. Select "Fix Image"
            print("Selecting 'Fix Image'...")
            main_category.click()
            page.get_by_text("Fix Image").click()

            # 3. Wait for Sub Category (Level 1)
            print("Waiting for sub-category...")
            sub_cat_1 = page.locator("#simple-sub-category")
            expect(sub_cat_1).to_be_visible()
            sub_cat_1.click()
            page.get_by_text("Fix Background").click()

            # 4. Wait for Level 2
            print("Waiting for level 2...")
            sub_cat_2 = page.locator("#simple-sub-category-2")
            expect(sub_cat_2).to_be_visible()
            sub_cat_2.click()
            page.get_by_text("Replace Background").click()

            # 5. Wait for Level 3
            print("Waiting for level 3...")
            sub_cat_3 = page.locator("#simple-sub-category-3")
            expect(sub_cat_3).to_be_visible()
            sub_cat_3.click()

            # 6. Select "Type" (Scoped to the active dropdown to avoid hair/beard collisions)
            print("Selecting 'Type'...")
            sub_cat_3.get_by_text("Type", exact=True).click()

            # 7. Check if Dynamic Input appears
            print("Checking for dynamic input...")
            dynamic_input = page.locator("#simple-text-input")
            expect(dynamic_input).to_be_visible()

            dynamic_input.fill("Eiffel Tower")

            # 8. Take Screenshot
            print("Taking screenshot...")
            page.screenshot(path="verification_success.png")
            print("Screenshot saved to verification_success.png")

        except Exception as e:
            print(f"Test failed: {e}")
            page.screenshot(path="verification_failed.png")
            raise e
        finally:
            browser.close()

if __name__ == "__main__":
    run_verification()
