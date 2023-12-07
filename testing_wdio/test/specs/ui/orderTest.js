describe('Laravel Project Testing - Order Process', () => {
    it('should not add to cart with empty date and empty quantity', async () => {
        await testOrder('', '', 'http://127.0.0.1:8000/pesan/16');
        await pauseFor5Seconds();
    });

    it('should not add to cart with valid date and invalid quantity', async () => {
        await testOrder('2023-12-15', 'abc', 'http://127.0.0.1:8000/pesan/16');
        await pauseFor5Seconds();
    });

    it('should add to cart with valid date and valid quantity', async () => {
        await testOrder('2023-12-15', '3', 'http://127.0.0.1:8000/checkout');
        await pauseFor5Seconds();
    });
});

async function testOrder(orderDate, orderQuantity, expectedUrl) {
    // Navigate to the order page
    await browser.url('http://127.0.0.1:8000/checkout');

    // Fill out the order form
    const dateInput = await $('#order_date');
    const quantityInput = await $('#order_quantity');

    await dateInput.setValue(orderDate);
    await quantityInput.setValue(orderQuantity);

    // Click the "Tambahkan ke Keranjang" button
    const addButton = await $('button[type="submit"]');
    await addButton.click();

    // Check if the browser URL matches the expected URL after adding to cart
    await expect(browser).toHaveUrl(expectedUrl);
}

async function pauseFor30Seconds() {
    await browser.pause(30000); // Pause for 30 seconds
}
