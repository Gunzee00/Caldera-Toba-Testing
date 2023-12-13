const { $ } = require('@wdio/globals');
const Page = require('./page');

class DaftarPage extends Page {
    get inputNama() {
        return $('#name');
    }

    get inputEmail() {
        return $('#email');
    }

    get inputPassword() {
        return $('#password');
    }

    get inputKonfirmasiPassword() {
        return $('#password_confirm');
    }

    get daftarButton() {
        return $('button[type="submit"]');
    }

    async daftar(name, email, password, password_confirm) {
        await this.inputNama.setValue(name);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputKonfirmasiPassword.setValue(password_confirm);
        await this.daftarButton.click();
        // Tambahkan penanganan kesalahan atau asersi untuk login yang sukses
        // Contoh: memastikan pesan sukses ditampilkan
        // await expect(SecurePage.flashAlert).toBeExisting();
        return super.open('daftar');
    }
}

module.exports = new DaftarPage();