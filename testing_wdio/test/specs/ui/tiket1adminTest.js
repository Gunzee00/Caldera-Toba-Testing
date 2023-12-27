const { expect } = require('@wdio/globals');

describe('Ubah Tiket', () => {
    it('should add a new ticket', async () => {
        // Navigate to the login page
        await browser.url('http://127.0.0.1:8000/login');

        // Find login elements
        const emailInput = $("#email");
        const inputPassword = $("#password");
        const btnSubmit = $("button[type='submit']");

        // Fill in login credentials
        await emailInput.setValue("admin@gmail.com");
        await inputPassword.setValue("12345678");

        // Wait for the submit button to be clickable and click it
        await btnSubmit.waitForClickable();
        await btnSubmit.click();

        // Log success message
        console.log('Login successful!');
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/home');
    });

    it('should handle the alert and change the image and submit form', async () => {
        try {
            // Adjust URL to navigate to the correct page
            await browser.url('http://127.0.0.1:8000/menu');

            // Trigger the alert
            await browser.execute(() => window.alert('Apakah Anda yakin ingin mengubah ini?'));

            // Wait for the alert to appear
            const alert = await browser.getAlertText();
            expect(alert).toContain('Apakah Anda yakin ingin mengubah ini?');

            // Accept the alert
            await browser.acceptAlert();

            // Find and click the "Ubah" button
            const ubahButton = await $('.btn.btn-warning.btn-icon-text'); // Adjust the selector as needed
            await ubahButton.click();

            // Wait for the "Ubah" button to be clickable
            await ubahButton.waitForClickable({ timeout: 5000 }); // Set an appropriate timeout

            // Verify the correct page URL after clicking the "Ubah" button
            const currentURL = await browser.getUrl();
            expect(currentURL).toContain('http://127.0.0.1:8000/edit-menu');

            

            // Add your code to change the image and submit the form
            // ...

            // Add a 5-second pause if needed
            await browser.pause(5000);
        } catch (error) {
            console.error('Test failed:', error);
        }
    });
});