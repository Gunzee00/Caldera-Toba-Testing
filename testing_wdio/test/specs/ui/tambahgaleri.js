const { expect } = require('@wdio/globals');

describe('Test Tambah Galeri', () => {
    before(async () => {
        // Halaman login
        await browser.url('http://127.0.0.1:8000/login');

        // Elwmwn Login
        const emailInput = $("#email");
        const inputPassword = $("#password");
        const btnSubmit = $("button[type='submit']");

        // Akun
        await emailInput.waitForExist();
        await emailInput.setValue("admin@gmail.com");
        await inputPassword.setValue("12345678");

        // button 
        await btnSubmit.waitForClickable();
        await btnSubmit.click();

        // Login berhasil
        console.log('Login successful!');
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/home');
    });

    it('should add a new gallery', async () => {
        // halaman galery
        await browser.url('http://127.0.0.1:8000/show-galeri');

        // isi formulir
        const judulGaleriInput = await $('input[name="judul_galeri"]');
        await judulGaleriInput.waitForExist();
        await judulGaleriInput.setValue("Jokowi");

        const deskripsiGaleriInput = await $('textarea[name="deskripsi_galeri"]');
        await deskripsiGaleriInput.waitForExist();
        await deskripsiGaleriInput.setValue("Galeri ini adalah....");

        // unggah gambar
        const inputGambar = $('input[type="file"]');
        const imagePath = 'D://KULIAH//Semester 5//PPL//TestUI//images//Danau toba.jpg';
        await inputGambar.addValue(imagePath);

        // Submit 
        const btnSimpan = $(".btn.btn-primary");
        await btnSimpan.waitForClickable();
        await btnSimpan.click();

        // tombol "Tambah galeri"  diklik
        const btnTambahGaleri = $('.btn.btn-primary');
        await btnTambahGaleri.waitForClickable();

        // klik button "Tambah" 
        await btnTambahGaleri.click();

        // Berhasil
        console.log('Berhasil menambahkan galeri');

        // Tunggu hingga notifikasi muncul
        const notification = $('.btn.btn-primary');
        await notification.waitForExist({ timeout: 5000 });

        // Pastikan notifikasi ditampilkan
        expect(notification).toBeDisplayed();

        // Arahkan kembali ke halaman beranda
        await browser.url('http://127.0.0.1:8000');
    });
});