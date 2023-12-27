const { expect } = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page');

describe('Laravel Project Testing - Detail Page', () => {
    it('should login with valid email and valid password', async () => {
        await LoginPage.open(); // Assuming open() method navigates to the login page
        await testLogin('wiliam@gmail.com', '12345678', 'http://127.0.0.1:8000/home');

        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/home');
    });

    it('should navigate to the specified image URL when clicking on an image link in the gallery', async () => {
        const initialUrl = 'http://127.0.0.1:8000/user-galeri?page=1';

        // Navigate to the initial URL (gallery)
        await browser.url(initialUrl);

        // Check if there are image links in the gallery
        const galleryImageLinks = await $$('a[href^="http://127.0.0.1:8000/image/1686888034.jpg"]');
        if (galleryImageLinks.length > 0) {
            // Click the first image link in the gallery
            const firstImageLink = galleryImageLinks[0];
            await firstImageLink.click();

            // Define the expected image URL
            const expectedImageUrl = 'http://127.0.0.1:8000/image/1686888034.jpg';

            // Check if the browser URL matches the expected image URL after clicking the image link
            await expect(browser).toHaveUrl(expectedImageUrl);

            // Optionally, add further validation for the content or behavior after clicking the image link
            // ...

            // Pause for 5 seconds (optional)
            await pauseFor5Seconds();
        } else {
            console.log('No image links in the gallery.');
        }
    });
});

async function testLogin(email, password, expectedUrl) {
    await LoginPage.login(email, password); // Assuming login() method fills in credentials and submits the form
    await browser.waitUntil(async () => {
        return (await browser.getUrl()) === expectedUrl;
    });
}

async function pauseFor5Seconds() {
    await browser.pause(5000); // Pause for 5 seconds
}
