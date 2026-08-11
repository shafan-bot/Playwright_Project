const base = require('@playwright/test');

exports.test = base.test.extend({
    baseURL: async ({}, use)=> {
    await use('https://www.google.com/');
    }
});
exports.expect = base.expect ;