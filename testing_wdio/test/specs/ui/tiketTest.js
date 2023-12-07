describe('Laravel Project Testing - Ticket Order', () => {
    it('should navigate to the order page when clicking the "Pesan" button', async () => {
        await testTicketOrder('http://127.0.0.1:8000/pesan/16', 'http://127.0.0.1:8000/pesanan/16');
        await pauseFor5Seconds();
    });
});

async function testTicketOrder(buttonHref, expectedUrl) {
    // Navigate to the ticket page
    await browser.url('http://127.0.0.1:8000/list-menu');

    // Find and click the "Pesan" button
    const pesanButton = await $(`a[href="${buttonHref}"]`);
    await pesanButton.click();

    // Check if the browser URL matches the expected URL after clicking the button
    await expect(browser).toHaveUrl(expectedUrl);
}

async function pauseFor20Seconds() {
    await browser.pause(20000); // Pause for 20 seconds
}
