describe('Laravel Project Testing - Article Page', () => {
    it('should not proceed to detail article with no articles available', async () => {
        await testArticle('http://127.0.0.1:8000/user-artikel', 'http://127.0.0.1:8000/user-detail-artikel/1', 'Error: No articles available');
        await pauseFor5Seconds();
    });

    it('should proceed to detail article with available articles', async () => {
        await testArticle('http://127.0.0.1:8000/user-artikel', 'http://127.0.0.1:8000/user-detail-artikel/1', 'Success: Article details loaded successfully');
        await pauseFor5Seconds();
    });
});

async function testArticle(initialUrl, expectedUrl, expectedMessage) {
    // Navigate to the initial URL (article list)
    await browser.url(initialUrl);

    // Click the "Lihat Selengkapnya" button
    const viewMoreButton = await $('button[type="submit"]');
    await viewMoreButton.click();

    // Check if the browser URL matches the expected URL after attempting to view more
    await expect(browser).toHaveUrl(expectedUrl);

    // If the article details are successfully loaded, handle the success message
    if (expectedMessage.includes('Success')) {
        // You might want to add further validation for success messages
        // and confirm the navigation to the detail article page
        const okButton = await $('button[type="submit"]');
        await okButton.click();
        await expect(browser).toHaveUrl(expectedUrl);
    } else {
        // If there is an error message, handle the error message
        const errorMessage = await $('.error-message');
        await expect(errorMessage).toHaveText(expectedMessage);

        // Click the "OK" button to acknowledge the error
        const okButton = await $('button[type="submit"]');
        await okButton.click();
    }
}

async function pauseFor5Seconds() {
    await browser.pause(5000); // Pause for 5 seconds
}
