const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', err => console.error('BROWSER ERROR:', err));

  await page.goto('http://localhost:3000/pages/video/video.html');
  await page.waitForTimeout(2000); // give it time to load dynamic imports

  const h3Text = await page.locator('.preview-overlay h3').textContent();
  console.log("H3 Text:", h3Text);

  const mainCategoryTrigger = await page.locator('#simple-main-category .dropdown-trigger .selected-text').textContent();
  console.log("Main Category Trigger:", mainCategoryTrigger);

  await browser.close();
})();
