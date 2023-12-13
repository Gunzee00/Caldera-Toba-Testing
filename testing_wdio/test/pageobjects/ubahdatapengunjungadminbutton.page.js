const { $ } = require('@wdio/globals');
const Page = require('./page');

class UbahDataPengunjungAdminPage extends Page {
    get UbahButton() {
        return $('a[href="http://127.0.0.1:8000/edit-datapengunjung/2"]');
    }

    async daftar() {
        await this.UbahButton.click();
        return super.open('UbahButton');
    }
}

module.exports = new  UbahDataPengunjungAdminPage();