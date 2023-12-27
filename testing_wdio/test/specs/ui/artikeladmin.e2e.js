const { expect } = require('@wdio/globals');
const ArtikelAdminPage = require('../pageobjects/artikeladmin.page');
const LoginPage = require('../pageobjects/login.page');


describe('My Login admin application', () => {
    before(async () => {
        await LoginPage.open();
        await LoginPage.login('admin@gmail.com', '12345678');

        
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/home');
    });

    it('harus mengisi data artikel dengan benar', async () => {
        await browser.url('http://127.0.0.1:8000/show-artikel');
    
        const inputJudulArtikel = $('#judul_artikel');
        const inputDeskripsi = $('#deskripsi');
        const btnTambah = $('button[type="submit"]');

        await inputJudulArtikel.setValue('Yopet');
        await inputDeskripsi.setValue('artikel.....');
        
        await ArtikelAdminPage.uploadImage(); // Mengunggah gambar

        await btnTambah.click();

        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/show-artikel');
    });
    //jika judul artikel kosong
    it('harus mengisi data artikel dengan benar', async () => {
        await browser.url('http://127.0.0.1:8000/show-artikel');
    
        const inputJudulArtikel = $('#judul_artikel');
        const inputDeskripsi = $('#deskripsi');
        const btnTambah = $('button[type="submit"]');

        await inputJudulArtikel.setValue('');
        await inputDeskripsi.setValue('artikel.....');
        
        await ArtikelAdminPage.uploadImage(); // Mengunggah gambar

        await btnTambah.click();

        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/show-artikel');
    });
    //jika deskripsi kosong
    it('harus mengisi data artikel dengan benar', async () => {
        await browser.url('http://127.0.0.1:8000/show-artikel');
    
        const inputJudulArtikel = $('#judul_artikel');
        const inputDeskripsi = $('#deskripsi');
        const btnTambah = $('button[type="submit"]');

        await inputJudulArtikel.setValue('Yopet');
        await inputDeskripsi.setValue('');
        
        await ArtikelAdminPage.uploadImage(); // Mengunggah gambar

        await btnTambah.click();

        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/show-artikel');
    });
 
     it('judul menggunakan integer', async () => {
        await browser.url('http://127.0.0.1:8000/show-artikel');
    
        const inputJudulArtikel = $('#judul_artikel');
        const inputDeskripsi = $('#deskripsi');
        const btnTambah = $('button[type="submit"]');

        await inputJudulArtikel.setValue('123');
        await inputDeskripsi.setValue('sjdsdsdd');
        
        await ArtikelAdminPage.uploadImage(); // Mengunggah gambar

        await btnTambah.click();

        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/show-artikel');
    });
});
