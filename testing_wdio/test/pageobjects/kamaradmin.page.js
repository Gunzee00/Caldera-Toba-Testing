const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class KamarAdminPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputNamaKamar () {
        return $('#nama_kamar');
    }

    get inputDeskripsi () {
        return $('#deskripsi');
    }
    get inputGambar() {
        return $('#gambar');
    }
    get inputNomorTelepon () {
        return $('#nomor_telepon');
    }
    get btnTambah () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (nama_kamar,deskripsi,nomor_telepon) {
        await this.NamaKamar .setValue(nama_kamar);
        await this.Deskripsi.setValue(deskripsi);
        await this.Gambar.setValue(gambar);
        await this.NomorTelepon.setValue(nomor_telepon);
        await this.btnTambah.click();
       
    }
    async uploadImage() {
        const { join } = require('path'); // Import module 'path'

        function getFilePath() {
          return 'D:\KULIAH\Semester 5\PPL\Caldera-Toba-Testing\testing_wdio\images\gambar 1.jpg';
        }
        
        const filePath = getFilePath();  
        
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('artikeladmin');
    }
}

module.exports = new KamarAdminPage();
