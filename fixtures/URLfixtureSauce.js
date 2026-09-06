const {test: base, expect} = require("@playwright/test")

exports.test = base.extend({
    baseURL1 : async({}, use)=> {
    
             await use('https://www.saucedemo.com/')
}})
exports.expect = expect;


