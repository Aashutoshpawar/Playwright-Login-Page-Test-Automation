import {test,expect} from '@playwright/test';
test.only('Salesforce login automation',async ({page})=>{
await page.goto("https://trailhead.salesforce.com/");
await page.locator('a[href="https://trailhead.salesforce.com/login"]').click();
await expect(page).toHaveURL('https://trailhead.salesforce.com/login');
await page.locator('.button-link__text').click();
await expect(page).toHaveTitle("Log in");
await page.locator(".icon.icon--google").click();
await page.locator('#identifierId').fill('aashutoshpawar123@gmail.com');
await page.waitForTimeout(5000);
await page.locator('span.VfPpkd-vQzf8d').nth(1).click();
// after this i am not able to proceed because google wont able to proceed with sign in using automated scripts 
});