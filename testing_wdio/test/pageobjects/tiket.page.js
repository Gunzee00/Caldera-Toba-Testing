const { $ } = require('@wdio/globals');
const Page = require('./page');

class TiketPage extends Page {
    get InputTanggalPemesananTiket() {
        return $('[name="tanggal_tiket"]');
    }

    get InputJumlahPesan() {
        return $('[name="jumlah_pesan"]');
    }

    get btnTambahkanKeKeranjang() {
        return $('btn.btn-primary');
    }

    // get btnCheckout() {
    //     return $('btn.btn-success');
    // }
    
    async tambahkanKeKeranjang(tanggal, jumlah) {
        await this.TanggalPemesananTiket.setValue(tanggal);
        await this.JumlahPesan.setValue(jumlah);
        await this.btnTambahkanKeKeranjang.click();
        // await this.btnCheckout.click();
        return super.open('konfirmasi-check-out');
       
        // Tambahkan penanganan kesalahan atau asersi untuk menambahkan ke keranjang yang sukses
        // Contoh: memastikan pesan sukses ditampilkan
        // await expect(SecurePage.flashAlert).toBeExisting();
    }
}

module.exports = new TiketPage();