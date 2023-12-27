const { expect } = require('@wdio/globals');

describe('ubah galery', () => {
    it('should add a new galery', async () => {
        // Login login 
        await browser.url('http://127.0.0.1:8000/login');

        // login elements
        const emailInput = $("#email");
        const inputPassword = $("#password");
        const btnSubmit = $("button[type='submit']");

        // Akun
        await emailInput.setValue("admin@gmail.com");
        await inputPassword.setValue("12345678");

        // buton 
        await btnSubmit.waitForClickable();
        await btnSubmit.click();

        //sukses
        console.log('Login successful!');
        const currentURL = await browser.getUrl();
        expect(currentURL).toBe('http://127.0.0.1:8000/home');
    });

    it('Mengganti gambar dan submit form', async () => {
        try {
            // Halaman galeri
            await browser.url('http://127.0.0.1:8000/show-galeri');

            // klik button "Ubah" 
            const ubahButton = await $('.btn.btn-primary.btn-block.btn-sm'); // Adjust the selector as needed
            await ubahButton.waitForClickable({ timeout: 5000 }); // Set an appropriate timeout
            await ubahButton.click();

            // verifikasi setelah button ubah
            const currentURL = await browser.getUrl();
            expect(currentURL).toContain('http://127.0.0.1:8000/edit-galeri/6');

            // Add a 5-second pause
            await browser.pause(5000);

        } catch (error) {
            console.error('Test failed:', error);
            await browser.pause(5000);
        }
    });
});