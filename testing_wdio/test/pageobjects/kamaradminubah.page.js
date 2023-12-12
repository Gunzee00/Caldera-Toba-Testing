const { $ } = require('@wdio/globals');
const Page = require('./page');

class KamarAdminUbahPage extends Page {
    // get SelengkapnyaButton() {
    //     return $('button[type="submit"]');
    // }
    get UbahButton() {
        return $('a[href="http://127.0.0.1:8000/edit-kamar/29"]');
    }
    get TersediaRadioButton() {
        return $('input[value="Tersedia"]');
    }

    get SudahDiBookingRadioButton() {
        return $('input[value="Sudah di booking"]');
    }

    async daftar() {
        await this.SelengkapnyaButton.click();
        return super.open('kamarbutton');
    }
    async selectTersediaRadioButton() {
        await this.TersediaRadioButton.click();
    }

    async selectSudahDiBookingRadioButton() {
        await this.SudahDiBookingRadioButton.click();
    }

    async isTersediaRadioButtonSelected() {
        return (await this.TersediaRadioButton.isSelected());
    }

    async isSudahDiBookingRadioButtonSelected() {
        return (await this.SudahDiBookingRadioButton.isSelected());
    }

}

module.exports = new KamarAdminUbahPage();
