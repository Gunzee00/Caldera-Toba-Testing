describe('Laravel Project Testing - Order Page', () => {
    it('should login with valid email and valid password', async () => {
        await testLogin('wiliam@gmail.com', '12345678', 'http://127.0.0.1:8000/home');
        await pauseFor5Seconds();
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/home');
    });

    it('should navigate to the order page with specific order ID when clicking on a "Detail" link', async () => {
        const initialOrderUrl = 'http://127.0.0.1:8000/pesanan';
    
        // Navigate to the initial order URL
        await browser.url(initialOrderUrl);
    
        // Check if there is a "Detail" link on the order page
        const detailLink = await $('a[href*="pesanan"]');
        if (detailLink) {
            // Get the current browser URL before clicking the "Detail" link
            const currentUrlBeforeClick = await browser.getUrl();
    
            // Click the "Detail" link
            await detailLink.click();
    
            // Wait for the page to load (adjust the time as needed)
            await browser.pause(8000); // Increased waiting time to ensure the page fully loads
    
            // Get the current browser URL after clicking the "Detail" link
            const currentUrlAfterClick = await browser.getUrl();
    
            // Define the expected URL pattern for the "Pesanan" page with a specific order ID
            const expectedPesananUrlPattern = /http:\/\/127.0.0.1:8000\/pesanan\/\d+/; // Matches any URL like "http://127.0.0.1:8000/pesanan/97"
    
            // Debugging output for analysis
            console.log('Current URL before click:', currentUrlBeforeClick);
            console.log('Current URL after click:', currentUrlAfterClick);
    
            // Check if the browser URL matches the expected URL pattern after clicking the "Detail" link
            expect(currentUrlAfterClick).not.toEqual(currentUrlBeforeClick);
            expect(currentUrlAfterClick).toMatch(expectedPesananUrlPattern); // Match with the expected URL pattern
        } else {
            console.log('Detail link not found on the order page.');
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
