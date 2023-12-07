describe('Laravel Project Testing - Checkout Process', () => {
    it('should not proceed to checkout with an empty cart', async () => {
        await testCheckout('http://127.0.0.1:8000/checkout', 'http://127.0.0.1:8000/checkout', 'Error: Cart is empty');
        await pauseFor5Seconds();
    });

    it('should proceed to checkout with items in the cart', async () => {
        await testCheckout('http://127.0.0.1:8000/checkout', 'http://127.0.0.1:8000/history/107', 'Success: Order placed successfully');
        await pauseFor5Seconds();
    });
});

async function testCheckout(initialUrl, expectedUrl, expectedMessage) {
    // Navigate to the initial URL (cart or checkout page)
    await browser.url(initialUrl);

    // Click the "Checkout" button
    const checkoutButton = await $('button[type="checkout"]');
    await checkoutButton.click();

    // Check if the browser URL matches the expected URL after attempting to checkout
    await expect(browser).toHaveUrl(expectedUrl);

    // If the checkout was successful, handle the success message
    if (expectedMessage.includes('Success')) {
        // You might want to add further validation for success messages
        // and confirm the navigation to the history page
        const okButton = await $('button[type="ok"]');
        await okButton.click();
        await expect(browser).toHaveUrl('http://127.0.0.1:8000/history/107');
    } else {
        // If there is an error message, handle the error message
        const errorMessage = await $('.error-message');
        await expect(errorMessage).toHaveText(expectedMessage);

        // Click the "OK" button to acknowledge the error
        const okButton = await $('button[type="ok"]');
        await okButton.click();
    }
}

async function pauseFor5Seconds() {
    await browser.pause(5000); // Pause for 5 seconds
}
