const { expect } = require('@wdio/globals');
const ArtikelAdminPage = require('../pageobjects/artikeladmin.page');
const LoginPage = require('../pageobjects/login.page');

describe('Laravel Project Testing - Article Page', () => {
    before(async () => {
        await LoginPage.open();
        await LoginPage.login('yohannasihotang27@gmail.com', '12345678');

        
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/home');
    });

    it('should proceed to detail article when clicking "Lihat Selengkapnya"', async () => {
        const initialUrl = 'http://127.0.0.1:8000/user-artikel';
        
        // Navigate to the initial URL (article list)
        await browser.url(initialUrl);
    
        // Click the "Lihat Selengkapnya" button
        const viewMoreButton = await $('button[type="submit"]');
        await viewMoreButton.click();
    
        // Extract the article ID from the URL
        const currentUrl = await browser.getUrl();
        const articleId = currentUrl.match(/user-detail-artikel\/(\d+)/)[1];
    
        // Define the expected URL for the detail article page
        const expectedUrl = `http://127.0.0.1:8000/user-detail-artikel/${articleId}`;
    
        // Check if the browser URL matches the expected URL after clicking "Lihat Selengkapnya"
        await expect(browser).toHaveUrl(expectedUrl); // Expected Result: Arahkan ke halaman detail artikel dengan URL yang sesuai.
    
        // Optionally, add further validation for the content of the detail article page
        // ...
    
        // Pause for 5 seconds (optional)
        await pauseFor5Seconds(); // Expected Result: Test berjalan tanpa kesalahan dan memberi cukup waktu untuk memeriksa halaman detail artikel.
    });
});
    

async function pauseFor5Seconds() {
    await browser.pause(5000); // Pause for 5 seconds
}