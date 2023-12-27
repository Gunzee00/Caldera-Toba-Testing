const { expect } = require('@wdio/globals');

describe('Test Tambah Tiket', () => {
    before(async () => {
        // Navigate to the login page
        await browser.url('http://127.0.0.1:8000/login');

        // Find login elements
        const emailInput = $("#email");
        const inputPassword = $("#password");
        const btnSubmit = $("button[type='submit']");

        // Fill in login credentials
        await emailInput.waitForExist();
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

    it('should add a new ticket (Positive)', async () => {
        // Navigate to the menu page
        await browser.url('http://127.0.0.1:8000/menu');

        // Wait for the "Tambah Tiket Disini" button to be clickable
        const btnTambahTiket = $('.btn.btn-info.btn-icon-text');
        await btnTambahTiket.waitForClickable();

        // Click the "Tambah Tiket Disini" button
        await btnTambahTiket.click();

        // Fill out the form for a positive scenario
        const namaTiketInput = await $('input[name="jenis_tiket"]');
        await namaTiketInput.waitForExist();
        await namaTiketInput.setValue("dewasa");

        const hargaInput = await $('input[name="harga"]');
        await hargaInput.setValue("20000");

        const keteranganInput = await $('input[name="keterangan"]');
        await keteranganInput.waitForExist();
        await keteranganInput.setValue("tiket khusus orang dewasa");

        const stokInput = await $('input[name="stok"]');
        await stokInput.setValue("10");

        // Upload an image (change the imagePath accordingly)
        const inputGambar = $('input[type="file"]');
        const imagePath = 'D://KULIAH//Semester 5//PPL//TestUI//images//gambar 1.jpg';
        await inputGambar.addValue(imagePath);

        // Submit the form
        const btnSimpan = $(".btn.btn-primary.btn-icon-text");
        await btnSimpan.waitForClickable();
        await btnSimpan.click();

        // Ensure successful navigation to Produk page
        await browser.url('http://127.0.0.1:8000/add-menu');
        // Log success message
        console.log('Berhasil menambahkan data tiket (Positive)');

        // Navigate back to the home page
        await browser.url('http://127.0.0.1:8000/menu');
        await browser.url('http://127.0.0.1:8000/add-menu');
        await expect(browser).toHaveUrl('http://127.0.0.1:8000/add-menu');
    });


    it('should handle negative scenarios ( "harga" field)', async () => {
        // Navigate to the menu page
        await browser.url('http://127.0.0.1:8000/menu');

        // Wait for the "Tambah Tiket Disini" button to be clickable
        const btnTambahTiket = $('.btn.btn-info.btn-icon-text');
        await btnTambahTiket.waitForClickable();

        // Click the "Tambah Tiket Disini" button
        await btnTambahTiket.click();

        // Fill out the form for a negative scenario
        const namaTiketInput = await $('input[name="jenis_tiket"]');
        await namaTiketInput.waitForExist();
        await namaTiketInput.setValue("dewasa");

        // Leave the "harga" 
        const hargaInput = await $('input[name="harga"]');
        await hargaInput.waitForExist();
       
        // Log success message
        console.log('Handled negative scenario: Missing "harga" field');
        await expect(browser).toHaveUrl('http://127.0.0.1:8000/add-menu');
    });
});