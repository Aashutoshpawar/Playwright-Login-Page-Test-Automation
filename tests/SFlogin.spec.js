import {test,expect} from '@playwright/test';
test('Salesforce login automation',async ({page})=>{
await page.goto("https://trailhead.salesforce.com/");
await page.locator('a[href="https://trailhead.salesforce.com/login"]').click();
await expect(page).toHaveURL('https://trailhead.salesforce.com/login');
await page.locator('a[href="/sessions/users/new?type=tbidlogin"]').click();
await expect(page).toHaveTitle("Log in");
await page.locator(".icon.icon--google").click();
});