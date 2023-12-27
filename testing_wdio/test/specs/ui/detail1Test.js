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

    it('should navigate back to the list menu page when clicking the "Kembali" button', async () => {
        const initialDetailUrl = 'http://127.0.0.1:8000/pesanan/106'; 

        // Login is now part of the test suite, so you don't need to call it again here

        // Navigate to the initial detail URL
        await browser.url(initialDetailUrl);

        // Check if there is a "Kembali" button on the detail page
        const backButton = await $('a[href="http://127.0.0.1:8000/pesanan"]');
        if (backButton) {
            // Click the "Kembali" button
            await backButton.click();

            // Define the expected URL for the list menu page
            const expectedListMenuUrl = 'http://127.0.0.1:8000/pesanan';

            // Check if the browser URL matches the expected URL after clicking the "Kembali" button
            await expect(browser).toHaveUrl(expectedListMenuUrl);

            // Pause for 15 seconds 
            await pauseFor15Seconds();
        } else {
            console.log('Kembali button not found on the detail page.');
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

async function pauseFor15Seconds() {
    await browser.pause(15000); // Pause for 15 seconds
}