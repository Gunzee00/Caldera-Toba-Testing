describe('Laravel Project Testing - Order Page', () => {
    it('should navigate back to the list menu page when clicking the "Kembali" button', async () => {
        const initialOrderUrl = 'http://127.0.0.1:8000/pesanan';
        
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
            await expect(browser).toHaveUrl(expectedListMenuUrl);

            // Pause for 15 seconds (optional)
            await pauseFor15Seconds();
        } else {
            console.log('Kembali button not found on the order page.');
        }
    });
});

async function pauseFor15Seconds() {
    await browser.pause(15000); // Pause for 15 seconds
}