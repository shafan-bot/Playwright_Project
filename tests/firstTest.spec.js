/* const {test, expect} = require('@playwright/test');

test('verify Playwright HomePage',async({page})=> {

    await page.goto('https://playwright.dev/');

    await expect(page).toHaveTitle(/Playwright/);

});
*/

const {test,expect} = require('../fixtures/URLFixture');

test('use custom URL',async({page, baseURL})=> 
{
    await page.goto(baseURL);
    await expect(page).toHaveTitle(/Toolshop/); 
    await page.pause();
});
