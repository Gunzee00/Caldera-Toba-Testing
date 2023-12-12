const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const RegistrasiPage = require('../pageobjects/registrasi.page'); // Memperbaiki nama variabel untuk konsistensi

describe('My Login application', () => {
    it('harus mengisi data registrasi dengan benar', async () => {
        // Navigate to your application's URL
        await browser.url('http://127.0.0.1:8000/register');
    
        // Get input elements
        const inputNama = $('#name');
        const inputEmail = $('#email');
        const inputPassword = $('#password');
        const inputKonfirmasiPassword = $('#password_confirm');
        const daftarButton = $('button[type="submit"]');
       
    
        // Set input values
        await inputNama.setValue('goriorio');
        await inputEmail.setValue('goriorio@gmail.com');
        await inputPassword.setValue('12345678');
        await inputKonfirmasiPassword.setValue('12345678');
      
        await daftarButton.waitForExist();
        await daftarButton.waitForClickable();
    
        // Wait for submit button to be clickable
        await daftarButton.click();
    
        // Verifikasi bahwa masih berada di halaman yang diharapkan
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/register');
    });

    //Input nama dikosongkan
    it('Input nama dikosongkan', async () => {
        // Navigate to your application's URL
        await browser.url('http://127.0.0.1:8000/register');
    
        // Get input elements
        const inputNama = $('#name');
        const inputEmail = $('#email');
        const inputPassword = $('#password');
        const inputKonfirmasiPassword = $('#password_confirm');
        const daftarButton = $('button[type="submit"]');
       
    
        // Set input values
        await inputNama.setValue('');
        await inputEmail.setValue('goriorio@gmail.com');
        await inputPassword.setValue('12345678');
        await inputKonfirmasiPassword.setValue('12345678');
      
        await daftarButton.waitForExist();
        await daftarButton.waitForClickable();
    
        // Wait for submit button to be clickable
        await daftarButton.click();
    
        // Verifikasi bahwa masih berada di halaman yang diharapkan
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/register');
    });
     //Input email dikosongkan
     it('email dikosongkan', async () => {
        // Navigate to your application's URL
        await browser.url('http://127.0.0.1:8000/register');
    
        // Get input elements
        const inputNama = $('#name');
        const inputEmail = $('#email');
        const inputPassword = $('#password');
        const inputKonfirmasiPassword = $('#password_confirm');
        const daftarButton = $('button[type="submit"]');
       
    
        // Set input values
        await inputNama.setValue('goriorio');
        await inputEmail.setValue('');
        await inputPassword.setValue('12345678');
        await inputKonfirmasiPassword.setValue('12345678');
      
        await daftarButton.waitForExist();
        await daftarButton.waitForClickable();
    
        // Wait for submit button to be clickable
        await daftarButton.click();
    
        // Verifikasi bahwa masih berada di halaman yang diharapkan
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/register');
    });
    //password dikosongkan
    it('password dikosongkan', async () => {
        // Navigate to your application's URL
        await browser.url('http://127.0.0.1:8000/register');
    
        // Get input elements
        const inputNama = $('#name');
        const inputEmail = $('#email');
        const inputPassword = $('#password');
        const inputKonfirmasiPassword = $('#password_confirm');
        const daftarButton = $('button[type="submit"]');
       
    
        // Set input values
        await inputNama.setValue('goriorio');
        await inputEmail.setValue('goriorio@gmail.com');
        await inputPassword.setValue('');
        await inputKonfirmasiPassword.setValue('12345678');
      
        await daftarButton.waitForExist();
        await daftarButton.waitForClickable();
    
        // Wait for submit button to be clickable
        await daftarButton.click();
    
        // Verifikasi bahwa masih berada di halaman yang diharapkan
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/register');
    });
     //konfirmasi password dikosongkan
     it('konfirmasi dikosongkan', async () => {
        // Navigate to your application's URL
        await browser.url('http://127.0.0.1:8000/register');
    
        // Get input elements
        const inputNama = $('#name');
        const inputEmail = $('#email');
        const inputPassword = $('#password');
        const inputKonfirmasiPassword = $('#password_confirm');
        const daftarButton = $('button[type="submit"]');
       
    
        // Set input values
        await inputNama.setValue('goriorio');
        await inputEmail.setValue('goriorio@gmail.com');
        await inputPassword.setValue('');
        await inputKonfirmasiPassword.setValue('12345678');
      
        await daftarButton.waitForExist();
        await daftarButton.waitForClickable();
    
        // Wait for submit button to be clickable
        await daftarButton.click();
    
        // Verifikasi bahwa masih berada di halaman yang diharapkan
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8000/register');
    });
    

});

