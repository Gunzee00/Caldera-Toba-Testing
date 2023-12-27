describe('Laravel Project Testing - Order Page', () => {
    it('should login with valid email and valid password', async () => {
        await testLogin('wiliam@gmail.com', '12345678', 'http://127.0.0.1:8000/home');
        await pauseFor5Seconds();
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/home');
    });

    it('should navigate to the next page of the order using page link', async () => {
        const initialOrderUrl = 'http://127.0.0.1:8000/pesanan?page=1';

        // Login is now part of the test suite, so you don't need to call it again here

        // Navigate to the initial URL (order page)
        await browser.url(initialOrderUrl);

        // Click the next page link if available
        const nextPageLink = await $('.page-link=2');
        if (nextPageLink) {
            await nextPageLink.click();

            // Define the expected URL for the next page
            const expectedNextPageUrl = 'http://127.0.0.1:8000/pesanan?page=2';

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
