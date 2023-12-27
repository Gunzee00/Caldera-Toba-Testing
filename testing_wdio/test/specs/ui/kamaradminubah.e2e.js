const { expect } = require('@wdio/globals');
const KamarAdminUbahPage = require('../pageobjects/kamaradminubah.page');
const LoginPage = require('../pageobjects/login.page');

describe('My Login admin application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('admin@gmail.com', '12345678');

        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/home');
    });

    // Mengubah data kamar button radio tersedia true 
    it('melakukan perubahan data pada kamar button radio tersedia true ', async () => {
        try {
            await browser.url('http://127.0.0.1:8000/show-kamar');
            const ubahButton = await $('a[href="/edit-kamar/29"]');
            await ubahButton.click();
            
            const currentURL = await browser.getUrl();
            expect(currentURL).toBe('http://127.0.0.1:8000/edit-kamar/29');

            const NamaKamarInput = await browser.$('#nama_kamar');
            const deskripsiInput = await browser.$('#deskripsi');
            const fileInput = await browser.$('#gambar');
            const inputNomorTelepon = await browser.$('#nomor_telepon');
            //button radio
            const isTersediaSelected = await KamarAdminButtonPage.isTersediaRadioButtonSelected();
            const isSudahDiBookingSelected = await KamarAdminButtonPage.isSudahDiBookingRadioButtonSelected();

            await NamaKamarInput.setValue('Kamar mahal');
            await deskripsiInput.setValue('Kamar mahal memiliki....');
            await inputNomorTelepon.setValue('0812345577657');
            await KamarAdminUbahPage.open(); 
            
            // Mengganti gambar
            const pathToImage = 'D:\KULIAH\Semester 5\PPL\TestUI\images\Danau toba.jpg'; // Ganti dengan path file gambar Anda
            await fileInput.setValue(pathToImage);

            const simpanButton = await browser.$('button[type="submit"]');
            await simpanButton.click();

            const currentUrl = await browser.getUrl();
            expect(currentUrl).toBe('http://127.0.0.1:8000/show-kamar');
            expect(isTersediaSelected).to.be.true; // Memastikan radio button "Tersedia" terpilih secara default
            expect(isSudahDiBookingSelected).to.be.false; // Memastikan radio button "Sudah di Booking" tidak terpilih secara defa
        } catch (error) {
            console.error('Test failed:', error);
        }
    });
     // Mengubah data kamar button radio tersedia false
     it('melakukan perubahan data pada kamar button radio tersedia false', async () => {
        try {
            await browser.url('http://127.0.0.1:8000/show-kamar');
            const ubahButton = await $('a[href="/edit-kamar/29"]');
            await ubahButton.click();
            
            const currentURL = await browser.getUrl();
            expect(currentURL).toBe('http://127.0.0.1:8000/edit-kamar/29');

            const NamaKamarInput = await browser.$('#nama_kamar');
            const deskripsiInput = await browser.$('#deskripsi');
            const fileInput = await browser.$('#gambar');
            const inputNomorTelepon = await browser.$('#nomor_telepon');
            //button radio
            const isTersediaSelected = await KamarAdminButtonPage.isTersediaRadioButtonSelected();
            const isSudahDiBookingSelected = await KamarAdminButtonPage.isSudahDiBookingRadioButtonSelected();

            await NamaKamarInput.setValue('Kamar mahal');
            await deskripsiInput.setValue('Kamar mahal memiliki....');
            await inputNomorTelepon.setValue('0812345577657');
            await KamarAdminUbahPage.open(); 
            
            // Mengganti gambar
            const pathToImage = 'D:\KULIAH\Semester 5\PPL\TestUI\images\Danau toba.jpg'; // Ganti dengan path file gambar Anda
            await fileInput.setValue(pathToImage);

            const simpanButton = await browser.$('button[type="submit"]');
            await simpanButton.click();

            const currentUrl = await browser.getUrl();
            expect(currentUrl).toBe('http://127.0.0.1:8000/show-kamar');
            expect(isTersediaSelected).to.be.true; 
            expect(isSudahDiBookingSelected).to.be.false; 
        } catch (error) {
            console.error('Test failed:', error);
        }
    });
    //Nama Kamar kosong button radio tersedia true
    it('nama kamar kosong button radio tersedia true', async () => {
        try {
            await browser.url('http://127.0.0.1:8000/show-kamar');
            const ubahButton = await $('a[href="/edit-kamar/29"]');
            await ubahButton.click();
            
            const currentURL = await browser.getUrl();
            expect(currentURL).toBe('http://127.0.0.1:8000/edit-kamar/29');

            const NamaKamarInput = await browser.$('#nama_kamar');
            const deskripsiInput = await browser.$('#deskripsi');
            const fileInput = await browser.$('#gambar');
            const inputNomorTelepon = await browser.$('#nomor_telepon');
            //button radio
            const isTersediaSelected = await KamarAdminButtonPage.isTersediaRadioButtonSelected();
            const isSudahDiBookingSelected = await KamarAdminButtonPage.isSudahDiBookingRadioButtonSelected();

            await NamaKamarInput.setValue('');
            await deskripsiInput.setValue('Kamar mahal memiliki....');
            await inputNomorTelepon.setValue('0812345577657');
            await KamarAdminUbahPage.open(); 
            
            // Mengganti gambar
            const pathToImage = 'D:\KULIAH\Semester 5\PPL\TestUI\images\Danau toba.jpg'; // Ganti dengan path file gambar Anda
            await fileInput.setValue(pathToImage);

            const simpanButton = await browser.$('button[type="submit"]');
            await simpanButton.click();

            const currentUrl = await browser.getUrl();
            expect(currentUrl).toBe('http://127.0.0.1:8000/show-kamar');
            expect(isTersediaSelected).to.be.true; // Memastikan radio button "Tersedia" terpilih secara default
            expect(isSudahDiBookingSelected).to.be.false; // Memastikan radio button "Sudah di Booking" tidak terpilih secara defa
        } catch (error) {
            console.error('Test failed:', error);
        }
    });
     //Nama Kamar kosong button radio tersedi false
     it('nama kamar kosong button radio tersedia false', async () => {
        try {
            await browser.url('http://127.0.0.1:8000/show-kamar');
            const ubahButton = await $('a[href="/edit-kamar/29"]');
            await ubahButton.click();
            
            const currentURL = await browser.getUrl();
            expect(currentURL).toBe('http://127.0.0.1:8000/edit-kamar/29');

            const NamaKamarInput = await browser.$('#nama_kamar');
            const deskripsiInput = await browser.$('#deskripsi');
            const fileInput = await browser.$('#gambar');
            const inputNomorTelepon = await browser.$('#nomor_telepon');
            //button radio
            const isTersediaSelected = await KamarAdminButtonPage.isTersediaRadioButtonSelected();
            const isSudahDiBookingSelected = await KamarAdminButtonPage.isSudahDiBookingRadioButtonSelected();

            await NamaKamarInput.setValue('');
            await deskripsiInput.setValue('Kamar mahal memiliki....');
            await inputNomorTelepon.setValue('0812345577657');
            await KamarAdminUbahPage.open(); 
            
            // Mengganti gambar
            const pathToImage = 'D:\KULIAH\Semester 5\PPL\TestUI\images\Danau toba.jpg'; // Ganti dengan path file gambar Anda
            await fileInput.setValue(pathToImage);

            const simpanButton = await browser.$('button[type="submit"]');
            await simpanButton.click();

            const currentUrl = await browser.getUrl();
            expect(currentUrl).toBe('http://127.0.0.1:8000/show-kamar');
            expect(isTersediaSelected).to.be.false; // Memastikan radio button "Tersedia" terpilih secara default
            expect(isSudahDiBookingSelected).to.be.true; // Memastikan radio button "Sudah di Booking" tidak terpilih secara defa
        } catch (error) {
            console.error('Test failed:', error);
        }
    });
    //Deskripsi Kosong button radio true
    it('deskripsi kosong button radio true', async () => {
        try {
            await browser.url('http://127.0.0.1:8000/show-kamar');
            const ubahButton = await $('a[href="/edit-kamar/29"]');
            await ubahButton.click();
            
            const currentURL = await browser.getUrl();
            expect(currentURL).toBe('http://127.0.0.1:8000/edit-kamar/29');

            const NamaKamarInput = await browser.$('#nama_kamar');
            const deskripsiInput = await browser.$('#deskripsi');
            const fileInput = await browser.$('#gambar');
            const inputNomorTelepon = await browser.$('#nomor_telepon');
            //button radio
            const isTersediaSelected = await KamarAdminButtonPage.isTersediaRadioButtonSelected();
            const isSudahDiBookingSelected = await KamarAdminButtonPage.isSudahDiBookingRadioButtonSelected();

            await NamaKamarInput.setValue('Kamar mahal');
            await deskripsiInput.setValue('');
            await inputNomorTelepon.setValue('0812345577657');
            await KamarAdminUbahPage.open(); 
            
            // Mengganti gambar
            const pathToImage = 'D:\KULIAH\Semester 5\PPL\TestUI\images\Danau toba.jpg'; // Ganti dengan path file gambar Anda
            await fileInput.setValue(pathToImage);

            const simpanButton = await browser.$('button[type="submit"]');
            await simpanButton.click();

            const currentUrl = await browser.getUrl();
            expect(currentUrl).toBe('http://127.0.0.1:8000/show-kamar');
            expect(isTersediaSelected).to.be.true; // Memastikan radio button "Tersedia" terpilih secara default
            expect(isSudahDiBookingSelected).to.be.false; // Memastikan radio button "Sudah di Booking" tidak terpilih secara defa
        } catch (error) {
            console.error('Test failed:', error);
        }
    });
    //Deskripsi Kosong button radio false
    it('deskripsi kosong button radio false', async () => {
        try {
            await browser.url('http://127.0.0.1:8000/show-kamar');
            const ubahButton = await $('a[href="/edit-kamar/29"]');
            await ubahButton.click();
            
            const currentURL = await browser.getUrl();
            expect(currentURL).toBe('http://127.0.0.1:8000/edit-kamar/29');

            const NamaKamarInput = await browser.$('#nama_kamar');
            const deskripsiInput = await browser.$('#deskripsi');
            const fileInput = await browser.$('#gambar');
            const inputNomorTelepon = await browser.$('#nomor_telepon');
            //button radio
            const isTersediaSelected = await KamarAdminButtonPage.isTersediaRadioButtonSelected();
            const isSudahDiBookingSelected = await KamarAdminButtonPage.isSudahDiBookingRadioButtonSelected();

            await NamaKamarInput.setValue('Kamar mahal');
            await deskripsiInput.setValue('');
            await inputNomorTelepon.setValue('0812345577657');
            await KamarAdminUbahPage.open(); 
            
            // Mengganti gambar
            const pathToImage = 'D:\KULIAH\Semester 5\PPL\TestUI\images\Danau toba.jpg'; // Ganti dengan path file gambar Anda
            await fileInput.setValue(pathToImage);

            const simpanButton = await browser.$('button[type="submit"]');
            await simpanButton.click();

            const currentUrl = await browser.getUrl();
            expect(currentUrl).toBe('http://127.0.0.1:8000/show-kamar');
            expect(isTersediaSelected).to.be.false; // Memastikan radio button "Tersedia" terpilih secara default
            expect(isSudahDiBookingSelected).to.be.true; // Memastikan radio button "Sudah di Booking" tidak terpilih secara defa
        } catch (error) {
            console.error('Test failed:', error);
        }
    });
    //Nomor telepon kosong button radio true
    it('nomor telepon kosong button radio true', async () => {
        try {
            await browser.url('http://127.0.0.1:8000/show-kamar');
            const ubahButton = await $('a[href="/edit-kamar/29"]');
            await ubahButton.click();
            
            const currentURL = await browser.getUrl();
            expect(currentURL).toBe('http://127.0.0.1:8000/edit-kamar/29');

            const NamaKamarInput = await browser.$('#nama_kamar');
            const deskripsiInput = await browser.$('#deskripsi');
            const fileInput = await browser.$('#gambar');
            const inputNomorTelepon = await browser.$('#nomor_telepon');
            //button radio
            const isTersediaSelected = await KamarAdminButtonPage.isTersediaRadioButtonSelected();
            const isSudahDiBookingSelected = await KamarAdminButtonPage.isSudahDiBookingRadioButtonSelected();

            await NamaKamarInput.setValue('Kamar mahal');
            await deskripsiInput.setValue('Kamar mahal memiliki....');
            await inputNomorTelepon.setValue('');
            await KamarAdminUbahPage.open(); 
            
            // Mengganti gambar
            const pathToImage = 'D:\KULIAH\Semester 5\PPL\TestUI\images\Danau toba.jpg'; // Ganti dengan path file gambar Anda
            await fileInput.setValue(pathToImage);

            const simpanButton = await browser.$('button[type="submit"]');
            await simpanButton.click();

            const currentUrl = await browser.getUrl();
            expect(currentUrl).toBe('http://127.0.0.1:8000/show-kamar');
            expect(isTersediaSelected).to.be.true; // Memastikan radio button "Tersedia" terpilih secara default
            expect(isSudahDiBookingSelected).to.be.false; // Memastikan radio button "Sudah di Booking" tidak terpilih secara defa
        } catch (error) {
            console.error('Test failed:', error);
        }
    });
     //Nomor telepon kosong button radio false
     it('nomor telepon kosong button radio false', async () => {
        try {
            await browser.url('http://127.0.0.1:8000/show-kamar');
            const ubahButton = await $('a[href="/edit-kamar/29"]');
            await ubahButton.click();
            
            const currentURL = await browser.getUrl();
            expect(currentURL).toBe('http://127.0.0.1:8000/edit-kamar/29');

            const NamaKamarInput = await browser.$('#nama_kamar');
            const deskripsiInput = await browser.$('#deskripsi');
            const fileInput = await browser.$('#gambar');
            const inputNomorTelepon = await browser.$('#nomor_telepon');
            //button radio
            const isTersediaSelected = await KamarAdminButtonPage.isTersediaRadioButtonSelected();
            const isSudahDiBookingSelected = await KamarAdminButtonPage.isSudahDiBookingRadioButtonSelected();

            await NamaKamarInput.setValue('Kamar mahal');
            await deskripsiInput.setValue('Kamar mahal memiliki....');
            await inputNomorTelepon.setValue('');
            await KamarAdminUbahPage.open(); 
            
            // Mengganti gambar
            const pathToImage = 'D:\KULIAH\Semester 5\PPL\TestUI\images\Danau toba.jpg'; // Ganti dengan path file gambar Anda
            await fileInput.setValue(pathToImage);

            const simpanButton = await browser.$('button[type="submit"]');
            await simpanButton.click();

            const currentUrl = await browser.getUrl();
            expect(currentUrl).toBe('http://127.0.0.1:8000/show-kamar');
            expect(isTersediaSelected).to.be.false; // Memastikan radio button "Tersedia" terpilih secara default
            expect(isSudahDiBookingSelected).to.be.true; // Memastikan radio button "Sudah di Booking" tidak terpilih secara defa
        } catch (error) {
            console.error('Test failed:', error);
        }
    });
});