const { expect } = require('@wdio/globals');
const KamarAdminPage = require('../pageobjects/kamaradmin.page');
const LoginPage = require('../pageobjects/login.page');

describe('My Login admin application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('admin@gmail.com', '12345678');
    });
    it('harus mengisi data kamar dengan benar', async () => {
        await browser.url('http://127.0.0.1:8000/show-kamar');
    
        const inputNamaKamar = $('#nama_kamar');
        const inputDeskripsi = $('#deskripsi');
        const NomorTelepon = $('#nomor_telepon');
        const btnTambah = $('button[type="submit"]');

        await inputNamaKamar.setValue('Kamar VIP');
        await inputDeskripsi.setValue('Kamar vip....');
        await NomorTelepon.setValue('085277112648');
        
        await KamarAdminPage.uploadImage(); // Mengunggah gambar

        await btnTambah.click();

        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/show-kamar');
    });
    //Nama Kamar kosong]
    it('Nama Kamar Kosong', async () => {
        await browser.url('http://127.0.0.1:8000/show-kamar');
    
        const inputNamaKamar = $('#nama_kamar');
        const inputDeskripsi = $('#deskripsi');
        const NomorTelepon = $('#nomor_telepon');
        const btnTambah = $('button[type="submit"]');

        await inputNamaKamar.setValue('');
        await inputDeskripsi.setValue('Kamar vip....');
        await NomorTelepon.setValue('085277112648');
        
        await KamarAdminPage.uploadImage(); // Mengunggah gambar

        await btnTambah.click();

        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/show-kamar');
    });
    //deskripsi kosong
    it('deskripsi kosong', async () => {
        await browser.url('http://127.0.0.1:8000/show-kamar');
    
        const inputNamaKamar = $('#nama_kamar');
        const inputDeskripsi = $('#deskripsi');
        const NomorTelepon = $('#nomor_telepon');
        const btnTambah = $('button[type="submit"]');

        await inputNamaKamar.setValue('Kamar VIP');
        await inputDeskripsi.setValue('');
        await NomorTelepon.setValue('085277112648');
        
        await KamarAdminPage.uploadImage(); // Mengunggah gambar

        await btnTambah.click();

        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/show-kamar');
    });
    //nomor telepon kosong
    it('nomor telepon kosong', async () => {
        await browser.url('http://127.0.0.1:8000/show-kamar');
    
        const inputNamaKamar = $('#nama_kamar');
        const inputDeskripsi = $('#deskripsi');
        const NomorTelepon = $('#nomor_telepon');
        const btnTambah = $('button[type="submit"]');

        await inputNamaKamar.setValue('Kamar VIP');
        await inputDeskripsi.setValue('Kamar vip....');
        await NomorTelepon.setValue('');
        
        await KamarAdminPage.uploadImage(); // Mengunggah gambar

        await btnTambah.click();

        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/show-kamar');
    });
});