describe('Laravel Project Testing - Order Page', () => {
    it('should login with valid email and valid password', async () => {
        await testLogin('wiliam@gmail.com', '12345678', 'http://127.0.0.1:8000/home');
        await pauseFor5Seconds();
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/home');
    });

    it('should navigate back to the list menu page when clicking the "Kembali" button', async () => {
        const initialOrderUrl = 'http://127.0.0.1:8000/pesanan';

        // Login is now part of the test suite, so you don't need to call it again here

        // Navigate to the initial order URL
        await browser.url(initialOrderUrl);

        // Check if there is a "Kembali" button on the order page
        const backButton = await $('a[href^="http://127.0.0.1:8000/list-menu"]');
        if (backButton) {
            // Click the "Kembali" button
            await backButton.click();

            // Define the expected URL for the list menu page
            const expectedListMenuUrl = 'http://127.0.0.1:8000/list-menu';

            // Check if the browser URL matches the expected URL after clicking the "Kembali" button
            const currentUrl = await browser.getUrl();
            expect(currentUrl).toBe(expectedListMenuUrl);

            // Pause for 15 seconds (optional)
            await pauseFor15Seconds();
        } else {
            console.log('Kembali button not found on the order page.');
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
