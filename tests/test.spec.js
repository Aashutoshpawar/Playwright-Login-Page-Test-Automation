import {test,expect} from '@playwright/test';
// import { hello,helloworld } from './demo/hello';

// console.log(hello());
// console.log(helloworld());

//if we dont use async await then the test will not wait for the page to load and will fail 
test('Test case 1: Positive LogIn test',async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.locator('#username').fill('student');
    await page.locator('#password').fill('Password123');
    await page.locator('#submit').click();
    await expect(page).toHaveTitle("Logged In Successfully | Practice Test Automation");
    
  
})
// test('Test case 2: Negative username test',async ({browser})=>{
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto('https://practicetestautomation.com/practice-test-login/');
//     await page.locator('#username').fill('student1');
//     await page.locator('#password').fill('Password123');
//     await page.locator('#submit').click();
//     await expect(page).toBeTruthy();
  
// })
// test('Test case 3: Negative password test',async ({browser})=>{
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto('https://practicetestautomation.com/practice-test-login/');
//     await page.locator('#username').fill('student');
//     await page.locator('#password').fill('Password1234');
//     await page.locator('#submit').click();
  
// })