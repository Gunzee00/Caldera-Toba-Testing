const { $ } = require('@wdio/globals');
const Page = require('./page');


class KamarPage extends Page {
    get SelengkapnyaButton() {
        return $('button[type="submit"]');
    }

    async daftar() {
        await this.SelengkapnyaButton.click();
        return super.open('kamar');
    }
}

module.exports = new KamarPage();