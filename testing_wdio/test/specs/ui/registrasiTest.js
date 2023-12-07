describe('Laravel Project Testing - User Registration', () => {
    it('should not register with empty name, empty email, empty password, and empty password confirmation', async () => {
        await testRegistration('', '', '', '', 'http://127.0.0.1:8000/register');
        await pauseFor5Seconds();
    });

    it('should not register with valid name, valid email, valid password, and invalid password confirmation', async () => {
        await testRegistration('Masop', 'masnidapanjaitan710@gmail.com', 'GNSn8YakkYxFT', 'hbdsvcjwhved', 'http://127.0.0.1:8000/register');
        await pauseFor5Seconds();
    });

    it('should not register with valid name, invalid email, valid password, and valid password confirmation', async () => {
        await testRegistration('Masop', 'masnida@gmail.com', 'GNSn8YakkYxFT', 'GNSn8YakkYxFT', 'http://127.0.0.1:8000/register');
        await pauseFor5Seconds();
    });

    it('should register with valid name, valid email, valid password, and valid password confirmation', async () => {
        await testRegistration('Masop', 'masnidapanjaitan710@gmail.com', 'GNSn8YakkYxFT', 'GNSn8YakkYxFT', 'http://127.0.0.1:8000/home');
        await pauseFor5Seconds();
    });
});

async function testRegistration(name, email, password, confirmPassword, expectedUrl) {
    // Navigate to the registration page
    await browser.url('http://127.0.0.1:8000/register');

    // Fill out the registration form
    const nameInput = await $('#name');
    const emailInput = await $('#email');
    const passwordInput = await $('#password');
    const confirmPasswordInput = await $('#password_confir');

    await nameInput.setValue(name);
    await emailInput.setValue(email);
    await passwordInput.setValue(password);
    await confirmPasswordInput.setValue(confirmPassword);

    // Click the registration button
    const registerButton = await $('button[type="submit"]');
    await registerButton.click();

    // Check if the browser URL matches the expected URL after registration
    await expect(browser).toHaveUrl(expectedUrl);
}

async function pauseFor5Seconds() {
    await browser.pause(5000); // Pause for 5 seconds
}