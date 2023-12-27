const { expect } = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page');

describe('Laravel Project Testing - Detail Page', () => {
    it('should login with valid email and valid password', async () => {
        await LoginPage.open(); // Assuming open() method navigates to the login page
        await testLogin('wiliam@gmail.com', '12345678', 'http://127.0.0.1:8000/home');

        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/home');
    });

    it('should navigate to the next page of the gallery using page link', async () => {
        const initialUrl = 'http://127.0.0.1:8000/user-galeri?page=1';

        // Navigate to the initial URL (gallery)
        await browser.url(initialUrl);

        // Click the next page link if available
        const nextPageLink = await $('.page-link=2');
        if (nextPageLink) {
            await nextPageLink.click();

            // Define the expected URL for the next page
            const expectedNextPageUrl = 'http://127.0.0.1:8000/user-galeri?page=2';

            // Check if the browser URL matches the expected URL after clicking the page link
            await expect(browser).toHaveUrl(expectedNextPageUrl);

            // Optionally, add further validation for the content or behavior after clicking the page link
            // ...

            // Pause for 5 seconds (optional)
            await pauseFor5Seconds();
        } else {
            console.log('Next page link not found.');
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
