describe('Laravel Project Testing - Gallery Page', () => {
    it('should not proceed to the next page with no items in the gallery', async () => {
        await testGallery('http://127.0.0.1:8000/user-galeri?page=1', 'http://127.0.0.1:8000/user-galeri?page=1', 'Error: No items in the gallery');
        await pauseFor5Seconds();
    });

    it('should proceed to the next page with items in the gallery', async () => {
        await testGallery('http://127.0.0.1:8000/user-galeri?page=1', 'http://127.0.0.1:8000/user-galeri?page=2', 'Success: Navigated to the next page successfully');
        await pauseFor5Seconds();
    });
});

async function testGallery(initialUrl, expectedUrl, expectedMessage) {
    // Navigate to the initial URL (gallery)
    await browser.url(initialUrl);

    // Check if there are items in the gallery
    const galleryItems = await $$('.gallery-item');
    if (galleryItems.length === 0) {
        // If no items in the gallery, handle the error message
        const errorMessage = await $('.error-message');
        await expect(errorMessage).toHaveText(expectedMessage);

        // Click the "OK" button to acknowledge the error
        const okButton = await $('button[type="ok"]');
        await okButton.click();
    } else {
        // If there are items in the gallery, proceed to the next page
        const nextPageButton = await $('page-item[type="page"]');
        await nextPageButton.click();

        // Check if the browser URL matches the expected URL after attempting to go to the next page
        await expect(browser).toHaveUrl(expectedUrl);

        // If there is a success message, handle the success message
        if (expectedMessage.includes('Success')) {
            // You might want to add further validation for success messages
            // and confirm the navigation to the next page
            const okButton = await $('page-item[type="page"]');
            await okButton.click();
            await expect(browser).toHaveUrl(expectedUrl);
        }
    }
}

async function pauseFor5Seconds() {
    await browser.pause(5000); // Pause for 5 seconds
}
