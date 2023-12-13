const { $ } = require('@wdio/globals');
const Page = require('./page');

class ArtikelAdminUbahPage extends Page {
    get SelengkapnyaButton() {
        return $('button[type="submit"]');
    }
    get UbahButton() {
        return $('a[href="http://127.0.0.1:8000/add-artikel/1/edit"]');
    }

    async daftar() {
        await this.SelengkapnyaButton.click();
        return super.open('artikelbutton');
    }
}

module.exports = new ArtikelAdminUbahPage();
