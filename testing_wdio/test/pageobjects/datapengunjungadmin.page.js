const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DataPengunjungAdminPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputNamaPengunjung () {
        return $('#nama_pengunjung');
    }

    get inputNik () {
        return $('#nik');
    }
    get inputTempatTinggal () {
        return $('#tempat_tinggal');
    }
    get btnTambah () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (nama_pengunjung,Nik, tempat_tinggal) {
        await this.NamaPengunjung.setValue(nama_pengunjung);
        await this.Nik.setValue(nik);
        await this.TempatTinggal.setValue(tempat_tinggal);
        await this.btnTambah.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('datapengunjungadmin');
    }
}

module.exports = new DataPengunjungAdminPage();
