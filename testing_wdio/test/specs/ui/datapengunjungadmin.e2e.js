const { expect } = require('@wdio/globals');
const DataPengunjungAdminPage = require('../pageobjects/datapengunjungadmin.page');
const LoginPage = require('../pageobjects/login.page');

describe('My Login admin application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('admin@gmail.com', '12345678');
        
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/home');
    });


    it('harus mengisi data pengunjung dengan benar', async () => {
        await browser.url('http://127.0.0.1:8000/show-datapengunjung');
    
        const inputNamaPengunjung = $('#nama_pengunjung');
        const inputNik = $('#nik');
        const inputTempatTinggal = $('#tempat_tinggal');
        const btnTambah = $('button[type="submit"]');

        // Isi data pada form pengunjung
        await inputNamaPengunjung.setValue('Yopet');
        await inputNik.setValue('1213141516554');
        await inputTempatTinggal.setValue('Tarutung');

        // Tekan tombol Tambah
        await btnTambah.click();

        // Verifikasi bahwa masih berada di halaman show-datapengunjung yang diharapkan
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/show-datapengunjung');
    });
    //ketika nama kosong
    it('Ketika nama kosong', async () => {
        await browser.url('http://127.0.0.1:8000/show-datapengunjung');
    
        const inputNamaPengunjung = $('#nama_pengunjung');
        const inputNik = $('#nik');
        const inputTempatTinggal = $('#tempat_tinggal');
        const btnTambah = $('button[type="submit"]');

        // Isi data pada form pengunjung
        await inputNamaPengunjung.setValue('');
        await inputNik.setValue('1213141516554');
        await inputTempatTinggal.setValue('Tarutung');

        // Tekan tombol Tambah
        await btnTambah.click();

        // Verifikasi bahwa masih berada di halaman show-datapengunjung yang diharapkan
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/show-datapengunjung');
    });
    //ketika nik kosong
    it('ketika nik kosong', async () => {
        await browser.url('http://127.0.0.1:8000/show-datapengunjung');
    
        const inputNamaPengunjung = $('#nama_pengunjung');
        const inputNik = $('#nik');
        const inputTempatTinggal = $('#tempat_tinggal');
        const btnTambah = $('button[type="submit"]');

        // Isi data pada form pengunjung
        await inputNamaPengunjung.setValue('Yopet');
        await inputNik.setValue('');
        await inputTempatTinggal.setValue('Tarutung');

        // Tekan tombol Tambah
        await btnTambah.click();

        // Verifikasi bahwa masih berada di halaman show-datapengunjung yang diharapkan
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/show-datapengunjung');
    });
    //ketika alamat kosong
    it('ketika alamat kosong', async () => {
        await browser.url('http://127.0.0.1:8000/show-datapengunjung');
    
        const inputNamaPengunjung = $('#nama_pengunjung');
        const inputNik = $('#nik');
        const inputTempatTinggal = $('#tempat_tinggal');
        const btnTambah = $('button[type="submit"]');

        // Isi data pada form pengunjung
        await inputNamaPengunjung.setValue('Yopet');
        await inputNik.setValue('1213141516554');
        await inputTempatTinggal.setValue('');

        // Tekan tombol Tambah
        await btnTambah.click();

        // Verifikasi bahwa masih berada di halaman show-datapengunjung yang diharapkan
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/show-datapengunjung');
    });
});
