const { expect } = require('@wdio/globals');
const UbahDataPengunjungAdminPage = require('../pageobjects/ubahdatapengunjungadminbutton.page');
const LoginPage = require('../pageobjects/login.page');

describe('My Login admin application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('admin@gmail.com', '12345678');

        const currentUrl = await browser.getUrl(); // Capture the current URL here
        expect(currentUrl).toBe('http://127.0.0.1:8000/home');
    });

    // Mengubah data pengunjung
    it('melakukan perubahan data pada artikel', async () => {
        try {
            await browser.url('http://127.0.0.1:8000/show-datapengunjung');
            const ubahButton = await $('a[href="/edit-datapengunjung/2"]');
            await ubahButton.click();
            
            const currentURL = await browser.getUrl();
            expect(currentURL).toBe('http://127.0.0.1:8000/edit-datapengunjung/2');

            const nama_pengunjungInput = await browser.$('#nama_pengunjung');
            const NikInput = await browser.$('#nik');
            const TempatTinggalInput = await browser.$('#tempat_tinggal');
      

            await nama_pengunjungInput.setValue('yoanaaa');
            await NikInput.setValue('11421007');
            await TempatTinggalInput.setValue('Dantob');


            const simpanButton = await browser.$('button[type="submit"]');
            await simpanButton.click();

            const currentUrl = await browser.getUrl();
            expect(currentUrl).toBe('http://127.0.0.1:8000/show-datapengunjung');
        } catch (error) {
            console.error('Test failed:', error);
        }
    });
     // Mengubah data dengan mengosongkan nama
     it('melakukan perubahan data mengosongkan nama', async () => {
        try {
            await browser.url('http://127.0.0.1:8000/show-datapengunjung');
            const ubahButton = await $('a[href="/edit-datapengunjung/2"]');
            await ubahButton.click();
            
            const currentURL = await browser.getUrl();
            expect(currentURL).toBe('http://127.0.0.1:8000/edit-datapengunjung/2');

            const nama_pengunjungInput = await browser.$('#nama_pengunjung');
            const NikInput = await browser.$('#nik');
            const TempatTinggalInput = await browser.$('#tempat_tinggal');
      

            await nama_pengunjungInput.setValue('');
            await NikInput.setValue('11421007');
            await TempatTinggalInput.setValue('Dantob');


            const simpanButton = await browser.$('button[type="submit"]');
            await simpanButton.click();

            const currentUrl = await browser.getUrl();
            expect(currentUrl).toBe('http://127.0.0.1:8000/show-datapengunjung');
        } catch (error) {
            console.error('Test failed:', error);
        }
    });
    // Mengubah data mengosongkan nik
    it('melakukan perubahan data pada artikel', async () => {
        try {
            await browser.url('http://127.0.0.1:8000/show-datapengunjung');
            const ubahButton = await $('a[href="/edit-datapengunjung/2"]');
            await ubahButton.click();
            
            const currentURL = await browser.getUrl();
            expect(currentURL).toBe('http://127.0.0.1:8000/edit-datapengunjung/2');

            const nama_pengunjungInput = await browser.$('#nama_pengunjung');
            const NikInput = await browser.$('#nik');
            const TempatTinggalInput = await browser.$('#tempat_tinggal');
      

            await nama_pengunjungInput.setValue('yoanaaa');
            await NikInput.setValue('');
            await TempatTinggalInput.setValue('Dantob');


            const simpanButton = await browser.$('button[type="submit"]');
            await simpanButton.click();

            const currentUrl = await browser.getUrl();
            expect(currentUrl).toBe('http://127.0.0.1:8000/show-datapengunjung');
        } catch (error) {
            console.error('Test failed:', error);
        }
    });
    // Mengubah data mengosongkan tempat tinggal
    it('melakukan perubahan data tempat tinggal', async () => {
        try {
            await browser.url('http://127.0.0.1:8000/show-datapengunjung');
            const ubahButton = await $('a[href="/edit-datapengunjung/2"]');
            await ubahButton.click();
            
            const currentURL = await browser.getUrl();
            expect(currentURL).toBe('http://127.0.0.1:8000/edit-datapengunjung/2');

            const nama_pengunjungInput = await browser.$('#nama_pengunjung');
            const NikInput = await browser.$('#nik');
            const TempatTinggalInput = await browser.$('#tempat_tinggal');
      

            await nama_pengunjungInput.setValue('yoanaaa');
            await NikInput.setValue('11421007');
            await TempatTinggalInput.setValue('');


            const simpanButton = await browser.$('button[type="submit"]');
            await simpanButton.click();

            const currentUrl = await browser.getUrl();
            expect(currentUrl).toBe('http://127.0.0.1:8000/show-datapengunjung');
        } catch (error) {
            console.error('Test failed:', error);
        }
    });
});