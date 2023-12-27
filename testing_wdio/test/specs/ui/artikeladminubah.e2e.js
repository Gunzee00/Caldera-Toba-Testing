const { expect } = require('@wdio/globals');
const ArtikelAdminUbahPage = require('../pageobjects/artikeladmin.page');
const LoginPage = require('../pageobjects/login.page');

describe('My Login admin application', () => {
    before(async () => {
        await LoginPage.open();
        await LoginPage.login('admin@gmail.com', '12345678');

        
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/home');
    });


    // Mengubah data artikel
    it('melakukan perubahan data pada artikel', async () => {
        try {
            await browser.url('http://127.0.0.1:8000/show-artikel');
            const ubahButton = await $('a[href="/add-artikel/1/edit"]');
            await ubahButton.click();
            
            const currentURL = await browser.getUrl();
            expect(currentURL).toBe('http://127.0.0.1:8000/add-artikel/1/edit');

            const judulInput = await browser.$('#judul_artikel');
            const deskripsiInput = await browser.$('#deskripsi');
            const fileInput = await browser.$('#gambar');

            await judulInput.setValue('Indahnya Danau Toba');
            await deskripsiInput.setValue('Deskripsi baru mengenai Danau Toba...');
            
            // Mengganti gambar
            const pathToImage = 'D:\KULIAH\Semester 5\PPL\TestUI\images\Danau toba.jpg'; // Ganti dengan path file gambar Anda
            await fileInput.setValue(pathToImage);

            const simpanButton = await browser.$('button[type="submit"]');
            await simpanButton.click();

            const currentUrl = await browser.getUrl();
            expect(currentUrl).toBe('http://127.0.0.1:8000/add-artikel');
        } catch (error) {
            console.error('Test failed:', error);
        }
    });

    // Mengubah data dengan mengosongkan judul artikel
    it('melakukan perubahan data dengan mengosongkan judul', async () => {
        try {
            await browser.url('http://127.0.0.1:8000/show-artikel');
            const ubahButton = await $('a[href="/add-artikel/1/edit"]');
            await ubahButton.click();
            
            const currentURL = await browser.getUrl();
            expect(currentURL).toBe('http://127.0.0.1:8000/add-artikel/1/edit');

            const judulInput = await browser.$('#judul_artikel');
            const deskripsiInput = await browser.$('#deskripsi');
            const fileInput = await browser.$('#gambar');

            await judulInput.setValue('');
            await deskripsiInput.setValue('Deskripsi baru mengenai Danau Toba...');
            
            // Mengganti gambar
            const pathToImage = 'D:\KULIAH\Semester 5\PPL\TestUI\images\Danau toba.jpg'; // Ganti dengan path file gambar Anda
            await fileInput.setValue(pathToImage);

            const simpanButton = await browser.$('button[type="submit"]');
            await simpanButton.click();

            const currentUrl = await browser.getUrl();
            expect(currentUrl).toBe('http://127.0.0.1:8000/add-artikel/1/edit');
        } catch (error) {
            console.error('Test failed:', error);
        }
    });
    // Mengubah data dengan mengosongkan deskripsi
    it('melakukan perubahan data dengan mengosongkan deskripsi', async () => {
        try {
            await browser.url('http://127.0.0.1:8000/show-artikel');
            const ubahButton = await $('a[href="/add-artikel/1/edit"]');
            await ubahButton.click();
            
            const currentURL = await browser.getUrl();
            expect(currentURL).toBe('http://127.0.0.1:8000/add-artikel/1/edit');

            const judulInput = await browser.$('#judul_artikel');
            const deskripsiInput = await browser.$('#deskripsi');
            const fileInput = await browser.$('#gambar');

            await judulInput.setValue('Indahnya Danau Toba');
            await deskripsiInput.setValue('');
            
            // Mengganti gambar
            const pathToImage = 'D:\KULIAH\Semester 5\PPL\TestUI\images\Danau toba.jpg'; // Ganti dengan path file gambar Anda
            await fileInput.setValue(pathToImage);

            const simpanButton = await browser.$('button[type="submit"]');
            await simpanButton.click();

            const currentUrl = await browser.getUrl();
            expect(currentUrl).toBe('http://127.0.0.1:8000/add-artikel/1/edit');
        } catch (error) {
            console.error('Test failed:', error);
        }
    });
     // Mengubah data dengan mengosongkan gambar
     it('melakukan perubahan data dengan mengosongkan gambar', async () => {
        try {
            await browser.url('http://127.0.0.1:8000/show-artikel');
            const ubahButton = await $('a[href="/add-artikel/1/edit"]');
            await ubahButton.click();
            
            const currentURL = await browser.getUrl();
            expect(currentURL).toBe('http://127.0.0.1:8000/add-artikel/1/edit');

            const judulInput = await browser.$('#judul_artikel');
            const deskripsiInput = await browser.$('#deskripsi');
            const fileInput = await browser.$('#gambar');

            await judulInput.setValue('Indahnya Danau Toba');
            await deskripsiInput.setValue('');
            
            // Mengganti gambar
            const pathToImage = ''; // Ganti dengan path file gambar Anda
            await fileInput.setValue(pathToImage);

            const simpanButton = await browser.$('button[type="submit"]');
            await simpanButton.click();

            const currentUrl = await browser.getUrl();
            expect(currentUrl).toBe('http://127.0.0.1:8000/add-artikel/1/edit');
        } catch (error) {
            console.error('Test failed:', error);
        }
    });
});
