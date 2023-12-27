const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const KamarPage = require('../pageobjects/kamar.page'); 

describe('Melihat deskripsi kamar', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('yohannasihotang27@gmail.com', '12345678')
        
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/home');
    });
    //melihat deskripsi kamar
    it('melihat deskripsi kamar', async () => {
        // Navigate to your application's URL
        await browser.url('http://127.0.0.1:8000/list-menu');
    
        // Get input elements
        const SelengkapnyaButton = $('button[type="submit"]');
    
      
        await SelengkapnyaButton.waitForExist();
        await SelengkapnyaButton.waitForClickable();
    
        // Wait for submit button to be clickable
        await SelengkapnyaButton.click();
    
        // Verifikasi bahwa masih berada di halaman yang diharapkan
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/detail-kamar-user/29');
    });
    
});