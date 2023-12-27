const { expect } = require('@wdio/globals');
// const DataPengunjungAdminPage = require('../pageobjects/datapengunjungadmin.page');
const LoginPage = require('../pageobjects/login.page');

describe('Laravel Project Testing - Detail Page', () => {
    it('should login with valid email and valid password', async () => {
        await testLogin('wiliam@gmail.com', '12345678', 'http://127.0.0.1:8000/home');
        await pauseFor5Seconds();

        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/home');
    });


    it('should navigate to the next page when clicking on a link', async () => {
        const initialDetailUrl = 'http://127.0.0.1:8000/pesanan/108';

        // Login is now part of the test suite, so you don't need to call it again here

        // Navigate to the initial detail URL
        await browser.url(initialDetailUrl);

        // Check if there is a link on the detail page
        const nextLink = await $('a[href="http://127.0.0.1:8000/upload/108"]');
        if (nextLink) {
            // Click the link
            await nextLink.click();

            // Define the expected URL for the next page
            const expectedNextPageUrl = 'http://127.0.0.1:8000/upload/108';

            // Check if the browser URL matches the expected URL after clicking the link
            await expect(browser).toHaveUrl(expectedNextPageUrl);

            // Optionally, add further validation for the content or behavior after clicking the link
            // ...

            // Pause for 5 seconds
            await pauseFor5Seconds();
        } else {
            console.log('Link not found on the detail page.');
        }
    });
});

async function testLogin(email, password, expectedUrl) {
    // Mengunjungi halaman web
    await browser.url('http://127.0.0.1:8000/login');
  
    // Mengisi formulir login
    const emailInput = await $('#email');
    const passwordInput = await $('#password');
  
    await emailInput.setValue(email);
    await passwordInput.setValue(password);
  
    const loginButton = await $('button[type="submit"]');
    await loginButton.click();
  
    await expect(browser).toHaveUrl(expectedUrl);
}

async function pauseFor5Seconds() {
    await browser.pause(5000); // Pause for 5 seconds
}