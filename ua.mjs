import { chromium, webkit } from '@playwright/test';

(async () => {
  const context = await webkit.launchPersistentContext('my-data', {
    headless: false,
    // userAgent: 'CustomUA'
  });
  const page = await context.newPage();
  console.log('user-agent = ', await page.evaluate(() => navigator.userAgent));
  await context.close();
})();