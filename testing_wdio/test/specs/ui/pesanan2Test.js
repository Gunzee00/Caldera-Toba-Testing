describe('Laravel Project Testing - Order Page', () => {
    it('should login with valid email and valid password', async () => {
        await testLogin('wiliam@gmail.com', '12345678', 'http://127.0.0.1:8000/home');
        await pauseFor5Seconds();
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/home');
    });

    it('should navigate to the list menu page when clicking on a menu item with href', async () => {
        const initialOrderUrl = 'http://127.0.0.1:8000/pesanan';

        // Navigate to the initial order URL
        await browser.url(initialOrderUrl);

        // Check if there is a menu item with an href on the order page
        const menuItemWithHref = await $('a[href="http://127.0.0.1:8000/list-menu"]');
        if (menuItemWithHref) {
            // Click the menu item with href
            await menuItemWithHref.click();

            // Define the expected URL for the list menu page
            const expectedListMenuUrl = 'http://127.0.0.1:8000/list-menu';

            // Check if the browser URL matches the expected URL after clicking the menu item with href
            const currentUrl = await browser.getUrl();
            expect(currentUrl).toBe(expectedListMenuUrl);

            // Pause for 10 seconds (optional)
            await pauseFor10Seconds();
        } else {
            console.log('Menu item with href not found on the order page.');
        }
    });
});

async function testLogin(email, password, expectedUrl) {
    // Visit the login page
    await browser.url('http://127.0.0.1:8000/login');

    // Fill in login form
    const emailInput = await $('#email');
    const passwordInput = await $('#password');

    await emailInput.setValue(email);
    await passwordInput.setValue(password);

    const loginButton = await $('button[type="submit"]');
    await loginButton.click();

    // Check if the login URL matches the expected URL
    await expect(browser).toHaveUrl(expectedUrl);
}

async function pauseFor5Seconds() {
    await browser.pause(5000); // Pause for 5 seconds
}

async function pauseFor10Seconds() {
    await browser.pause(10000); // Pause for 10 seconds
}
