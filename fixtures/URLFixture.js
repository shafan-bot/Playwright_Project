const base = require('@playwright/test');
const { testDir, timeout, testMatch } = require('../playwright.config');

exports.test = base.test.extend({
    baseURL: async ({}, use)=> {
    await use('https://www.saucedemo.com/');
    }
});
exports.expect = base.expect ;



const base = require('@playwright/test');

test = base.test.extend({
    login: async ({page},use )=> {
        const loginPage = new LoginPage(page);
        await use(loginPage)
    }
})
module.exports = {test};