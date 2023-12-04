@extends('user.layouts.app')
@section('title')
    Data Pesanan
@endsection
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <a href="{{ url('/list-menu') }}" class="btn btn-primary"><i class="fa fa-arrow-left"></i> Kembali</a>
            </div>
            <div class="col-md-12 mt-3">
                <div class="container-fluid">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="{{ url('/list-menu') }}">Menu</a></li>
                            <li class="breadcrumb-item">Pesanan</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4><i class="fa fa-hostory">Pesanan Anda</i></h4>
                        <div class="table-responsive">
                            <table class="table">
                                <tr>
                                    <th>Nomor</th>
                                    <th>Tanggal</th>
                                    <th>Status</th>
                                    <th>Jumlah Harga</th>
                                    <th>Aksi</th>
                                </tr>
                                @php $no = ($pesanans->currentPage() - 1) * $pesanans->perPage() + 1; @endphp

                                @foreach ($pesanans as $pesanan)
                                    @if (
                                        $pesanan->status == 1 ||
                                            $pesanan->status == 2 ||
                                            $pesanan->status == 3 ||
                                            $pesanan->status == 4 ||
                                            $pesanan->status == 5 ||
                                            $pesanan->status == 6)
                                        <tr>
                                            <td>{{ $no++ }}</td>
                                            <td>{{ $pesanan->tanggal_pemesanan }}</td>
                                            <td>
                                                @if ($pesanan->status == 1)
                                                    Tiket sudah dipesan & Belum dibayar
                                                @elseif($pesanan->status == 2)
                                                    Pembayaran berhasil, tunggu konfirmasi dari admin
                                                @elseif($pesanan->status == 3)
                                                    Pesanan tiket sudah di confirm oleh admin
                                                @elseif($pesanan->status == 4)
                                                    Lihat hasil tiket
                                                @elseif($pesanan->status == 5)
                                                    Tiket anda anda sudah dikirim, lihat tiket anda
                                                @elseif($pesanan->status == 6)
                                                    Maaf pesanan anda di tolak
                                                @endif
                                            </td>
                                            <td>Rp. {{ number_format($pesanan->jumlah_harga) }}</td>
                                            <td>
                                                <a href="{{ url('pesanan') }}\{{ $pesanan->id }}"
                                                    class="btn btn-primary">Detail</a>
                                            </td>
                                        </tr>
                                    @endif
                                @endforeach
                            </table>
                            {{ $pesanans->links() }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
