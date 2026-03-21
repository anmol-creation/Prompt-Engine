const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    // We start the server
    const { spawn } = require('child_process');
    const server = spawn('python3', ['-m', 'http.server', '8080']);

    // Wait a sec for server to start
    await new Promise(r => setTimeout(r, 1000));

    try {
        await page.goto('http://localhost:8080/pages/video/video.html');
        await page.waitForLoadState('networkidle');

        // Wait for simple mode category grid
        await page.waitForSelector('.video-category-card[data-category="text-to-video"]');

        // Click Text To Video to load builder
        await page.click('.video-category-card[data-category="text-to-video"]');

        // Take screenshot of initial builder state
        await page.screenshot({ path: 'builder_initial.png' });

        // Click main category dropdown and select something (e.g. "Background")
        const mainDropdown = await page.$('#simple-main-category');
        await mainDropdown.click();
        await page.click('.dropdown-item:text("Background")');

        // Take screenshot after first selection
        await page.screenshot({ path: 'builder_step1.png' });

        console.log("Screenshots captured.");
    } catch (e) {
        console.error(e);
    } finally {
        server.kill();
        await browser.close();
    }
})();
