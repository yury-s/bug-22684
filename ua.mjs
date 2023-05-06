import { webkit } from '@playwright/test';

(async () => {
  const context = await webkit.launchPersistentContext('my-data', {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Mobile/15E148 Safari/604'
  });
  const page = await context.newPage();
  console.log('user-agent = ', await page.evaluate(() => navigator.userAgent));
  await context.close();
})();