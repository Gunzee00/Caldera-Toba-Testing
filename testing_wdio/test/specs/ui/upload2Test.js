describe('Laravel Project Testing - Form Page with Image Upload', () => {
    it('should login with valid email and valid password', async () => {
        await testLogin('wiliam@gmail.com', '12345678', 'http://127.0.0.1:8000/home');
        await pauseFor5Seconds();
    });

    it('should submit the form with an image when clicking on the submit button', async () => {
        const formPageUrl = 'http://127.0.0.1:8000/upload/107';

        // Login is now part of the test suite, so you don't need to call it again here

        // Navigate to the form page
        await browser.url(formPageUrl);

        // Click the submit button
        const submitButton = await $('button[type="submit"]');
        if (submitButton) {
            await submitButton.click();

            // Pause for 5 seconds
            await pauseFor5Seconds();
        } else {
            console.log('Submit button not found on the form page.');
        }
    });

    it('should remain on the form page if no file is selected when clicking on the submit button', async () => {
        const formPageUrl = 'http://127.0.0.1:8000/upload/107';

        // Login is now part of the test suite, so you don't need to call it again here

        // Navigate to the form page
        await browser.url(formPageUrl);

        // Click the submit button without attaching a file
        const submitButton = await $('button[type="submit"]');
        if (submitButton) {
            await submitButton.click();

            // Validate if still on the same form page
            await expect(browser).toHaveUrl(formPageUrl);

            // Optionally, add further validation for error messages or other indicators
        } else {
            console.log('Submit button not found on the form page.');
        }
    });

    it('should redirect to the pesanan page after submitting the form with an image', async () => {
        const formPageUrl = 'http://127.0.0.1:8000/upload/107';
        const expectedPesananUrl = 'http://127.0.0.1:8000/pesanan';

        // Login is now part of the test suite, so you don't need to call it again here

        // Navigate to the form page
        await browser.url(formPageUrl);

        // Attach an image file to the file input field
        const filePath = 'D://KULIAH//Semester 5//PPL//TestUI//images//gambar 1.jpg'; // Replace with the actual file path
        const fileInput = await $('input[type="file"]');
        if (fileInput) {
            await fileInput.setValue(filePath);
        } else {
            console.log('File input not found on the form page.');
            return;
        }

        // Click the submit button
        const submitButton = await $('button[type="submit"]');
        if (submitButton) {
            await submitButton.click();

            // Wait for the redirect to the pesanan page
            const isRedirected = await browser.waitUntil(async () => (await browser.getUrl()) === expectedPesananUrl, {
                timeout: 10000, // Adjust timeout as needed
                timeoutMsg: `Expected URL to be ${expectedPesananUrl} but found ${await browser.getUrl()}`,
            });

            if (!isRedirected) {
                console.log('Redirect to pesanan page failed.');
            }

            // Optionally, add further validation for the content or behavior on the pesanan page
        } else {
            console.log('Submit button not found on the form page.');
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