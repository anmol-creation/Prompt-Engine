import time
import subprocess
from playwright.sync_api import sync_playwright

def verify_auth_js_load():
    server = subprocess.Popen(["python3", "-m", "http.server", "8000"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    time.sleep(2)

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()

            # Capture console logs to see if our script runs without error
            console_logs = []
            page.on("console", lambda msg: console_logs.append(msg.text))

            page.goto("http://localhost:8000/pages/home/home.html")
            time.sleep(2)

            # Check if logs contain the warning about missing config (means script ran)
            # or errors

            script_ran = False
            for log in console_logs:
                if "Firebase Config is empty" in log:
                    script_ran = True
                    print("SUCCESS: Auth script ran (Config warning detected)")

            if not script_ran:
                print("WARNING: Auth script log not found. Check console logs:")
                for log in console_logs:
                    print(f" - {log}")

            # Check if login button is visible
            if page.locator("#login-btn").is_visible():
                print("Login button visible")
            else:
                print("Login button hidden")

    finally:
        server.kill()

if __name__ == "__main__":
    verify_auth_js_load()
