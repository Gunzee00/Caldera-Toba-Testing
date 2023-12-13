const { expect } = require('@wdio/globals')
const TiketPage = require('../pageobjects/tiket.page');
const LoginPage = require('../pageobjects/login.page')



describe('Pemesanan Tiket', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('yohannasihotang27@gmail.com', '12345678')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!')
    })

    describe('Pemesanan Tiket', () => {
        it('harus mengisi data tiket dengan benar', async () => {
            await browser.url('http://127.0.0.1:8000/list-menu');
    
            // Klik tombol 'Pesan' di halaman 'list-menu' untuk menuju halaman 'pesan/16'
            const btnPesan = $('a[href="http://127.0.0.1:8000/pesan/18"]');
            await btnPesan.waitForClickable();
            await btnPesan.click();
    
            // Ensure the user is on the 'pesan/16' page and fills in the ticket details
            const InputTanggalPemesananTiket = $('input[name="tanggal_tiket"]');
            const InputJumlahPesan = $('input[name="jumlah_pesan"]');
            const btnTambahkanKeKeranjang = $('button[type="submit"]');
    
            await InputTanggalPemesananTiket.setValue('2023-12-28');
            await InputJumlahPesan.setValue('2');
    
            await btnTambahkanKeKeranjang.waitForExist();
            await btnTambahkanKeKeranjang.waitForClickable();
    
            await btnTambahkanKeKeranjang.click();
    
            // Verifikasi bahwa masih berada di halaman checkout yang diharapkan
            const currentUrl = await browser.getUrl();
            expect(currentUrl).toBe('http://127.0.0.1:8000/checkout');
        });
        it('Tanggal kosong', async () => {
            await browser.url('http://127.0.0.1:8000/list-menu');
    
            // Klik tombol 'Pesan' di halaman 'list-menu' untuk menuju halaman 'pesan/16'
            const btnPesan = $('a[href="http://127.0.0.1:8000/pesan/18"]');
            await btnPesan.waitForClickable();
            await btnPesan.click();
    
            // Ensure the user is on the 'pesan/16' page and fills in the ticket details
            const InputTanggalPemesananTiket = $('input[name="tanggal_tiket"]');
            const InputJumlahPesan = $('input[name="jumlah_pesan"]');
            const btnTambahkanKeKeranjang = $('button[type="submit"]');
    
            await InputTanggalPemesananTiket.setValue('');
            await InputJumlahPesan.setValue('2');
    
            await btnTambahkanKeKeranjang.waitForExist();
            await btnTambahkanKeKeranjang.waitForClickable();
    
            await btnTambahkanKeKeranjang.click();
    
            // Verifikasi bahwa masih berada di halaman checkout yang diharapkan
            const currentUrl = await browser.getUrl();
            expect(currentUrl).toBe('http://127.0.0.1:8000/checkout');
        });
        it('jumlah kosong', async () => {
            await browser.url('http://127.0.0.1:8000/list-menu');
    
            // Klik tombol 'Pesan' di halaman 'list-menu' untuk menuju halaman 'pesan/16'
            const btnPesan = $('a[href="http://127.0.0.1:8000/pesan/18"]');
            await btnPesan.waitForClickable();
            await btnPesan.click();
    
            // Ensure the user is on the 'pesan/16' page and fills in the ticket details
            const InputTanggalPemesananTiket = $('input[name="tanggal_tiket"]');
            const InputJumlahPesan = $('input[name="jumlah_pesan"]');
            const btnTambahkanKeKeranjang = $('button[type="submit"]');
    
            await InputTanggalPemesananTiket.setValue('2023-12-28');
            await InputJumlahPesan.setValue('');
    
            await btnTambahkanKeKeranjang.waitForExist();
            await btnTambahkanKeKeranjang.waitForClickable();
    
            await btnTambahkanKeKeranjang.click();
    
            // Verifikasi bahwa masih berada di halaman checkout yang diharapkan
            const currentUrl = await browser.getUrl();
            expect(currentUrl).toBe('http://127.0.0.1:8000/checkout');
        });
        
       
    });
    
});


