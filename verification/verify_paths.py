
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # URL of the deep test page
    url = "http://localhost:8081/pages/test/depth/test.html"
    print(f"Loading {url}")
    page.goto(url)

    # Verify Logo Link
    logo_link = page.locator(".logo-link")
    href = logo_link.get_attribute("href")
    print(f"Logo Href: {href}")

    # Expected: ../../../pages/home/home.html
    expected_logo = "../../../pages/home/home.html"
    if href == expected_logo:
        print("PASS: Logo Link is correct.")
    else:
        print(f"FAIL: Logo Link expected {expected_logo}, got {href}")

    # Verify Dashboard Link (Hidden in dropdown, but exists in DOM)
    # We might need to unhide or just check DOM attribute
    dash_link = page.locator("a.dropdown-item[href*='dashboard.html']")
    dash_href = dash_link.get_attribute("href")
    print(f"Dashboard Href: {dash_href}")

    expected_dash = "../../../dashboard.html"
    if dash_href == expected_dash:
        print("PASS: Dashboard Link is correct.")
    else:
         print(f"FAIL: Dashboard Link expected {expected_dash}, got {dash_href}")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
