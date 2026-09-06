const {defineConfig} = require('@playwright/test');

const dotenv = require('dotenv');
const env = process.env.ENV || 'qa'
dotenv.config({
    path: `config/${env}.env`
})

module.exports = defineConfig({

    testDir: './tests',
    reporter: 'html', 
    use: {
        headless: false,
        baseURL: 'https://www.saucedemo.com/',
        // baseURL: process.env.BASE_URL - for QA, UAT , PROD
    },
    
    projects: [
        {
            name: 'setup',
            testMatch: 'auth.setup.spec.js',
        },
        {
            name: 'WebKit',
            use: {
                ...devices['Desktop Safari'],
                storageState: 'playwright/.auth/user.json',
            },
            dependencies: ['setup'],

        },
    ],

});


