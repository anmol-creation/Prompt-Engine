const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Test Image Simple Mode
    await page.goto('http://localhost:8000/pages/image/image.html');
    await page.waitForLoadState('networkidle');

    // Check if simple-visual-guide-container is hidden by default
    const isHidden = await page.evaluate(() => {
        const el = document.getElementById('simple-visual-guide-container');
        return el ? el.classList.contains('hidden') : false;
    });
    console.log("Image Simple Visual Guide is hidden initially:", isHidden);

    await page.screenshot({ path: 'verification_img_builder.png' });

    // Test Video Simple Mode
    await page.goto('http://localhost:8000/pages/video/video.html');
    await page.waitForLoadState('networkidle');

    // Click "Text to Video" card to load simple mode
    try {
        await page.click('h2:has-text("Text To Video")');
        await page.waitForTimeout(1000);
    } catch(e) {}

    const isHiddenVideo = await page.evaluate(() => {
        const el = document.getElementById('simple-visual-guide-container');
        return el ? el.classList.contains('hidden') : false;
    });
    console.log("Video Simple Visual Guide is hidden initially:", isHiddenVideo);

    await page.screenshot({ path: 'verification_vid_builder.png' });

    await browser.close();
})();
