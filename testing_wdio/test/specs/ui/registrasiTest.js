describe('Laravel Project Testing - User Registration', () => {
    it('should not register with empty name, email, password, and password confirmation', async () => {
        await testRegistration('', '', '', '', 'http://127.0.0.1:8000/register');
        
        // Expect bahwa pendaftaran gagal dan masih berada di halaman registrasi
        await expect(browser).toHaveUrl('http://127.0.0.1:8000/register');
        // Di sini, Anda juga bisa menambahkan expect untuk pesan error yang mungkin muncul
    });

    it('should not register with valid name, valid email, valid password, and invalid password confirmation', async () => {
        await testRegistration('Masnida', 'masnida@gmail.com', 'securepassword', 'invalidconfirmation', 'http://127.0.0.1:8000/register');
        
        // Expect bahwa pendaftaran gagal dan masih berada di halaman registrasi
        await expect(browser).toHaveUrl('http://127.0.0.1:8000/register');
        // Di sini, Anda juga bisa menambahkan expect untuk pesan error yang mungkin muncul
    });

    it('should not register with valid name, invalid email, valid password, and valid password confirmation', async () => {
        await testRegistration('Masnida', 'invalidemail', 'securepassword', 'securepassword', 'http://127.0.0.1:8000/register');
        
        // Expect bahwa pendaftaran gagal dan masih berada di halaman registrasi
        await expect(browser).toHaveUrl('http://127.0.0.1:8000/register');
        // Di sini, Anda juga bisa menambahkan expect untuk pesan error yang mungkin muncul
    });

    it('should register with valid name, valid email, valid password, and valid password confirmation', async () => {
        await testRegistration('Masnida', 'masnida@gmail.com', 'securepassword', 'securepassword', 'http://127.0.0.1:8000/home');
        
        // Expect bahwa pendaftaran berhasil dan diarahkan ke halaman beranda
        await expect(browser).toHaveUrl('http://127.0.0.1:8000/home');
    });
});



async function testRegistration(name, email, password, confirmPassword, expectedUrl) {
    await browser.url('http://127.0.0.1:8000/register');

    const nameInput = await $('#name');
    const emailInput = await $('#email');
    const passwordInput = await $('#password');

    // Pengecekan keberadaan elemen #password-confirm sebelum pengisian nilai
    const confirmPasswordInput = await $('#password-confirm');
    const passwordConfirmExists = await confirmPasswordInput.isExisting();

    if (passwordConfirmExists) {
        await confirmPasswordInput.setValue(confirmPassword);
    }

    await nameInput.setValue(name);
    await emailInput.setValue(email);
    await passwordInput.setValue(password);

    const registerButton = await $('button[type="submit"]');
    await registerButton.click();

    await expect(browser).toHaveUrl(expectedUrl);
}

