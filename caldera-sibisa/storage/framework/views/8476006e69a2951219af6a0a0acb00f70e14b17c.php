<!doctype html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">

    <title><?php echo $__env->yieldContent('title'); ?></title>


    <base href="/public">
    <?php echo $__env->yieldContent('style'); ?>
    <!-- Scripts -->
    <script src="<?php echo e(asset('js/app.js')); ?>" defer></script>
    <!-- MDB -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.2.0/mdb.min.js" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="<?php echo e(asset('css/app.css')); ?>" rel="stylesheet">
    <link href="path/to/lightbox.css" rel="stylesheet" />
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
    <!-- MDB -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.2.0/mdb.min.css" rel="stylesheet" />
    <link rel="shortcut icon" href="img/logo.ico" type="image/x-icon">
    <link rel="icon" href="img/logo.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="aset/css/bootstrap.min.css">

    <link rel="stylesheet" type="text/css" href="aset/css/font-awesome.css">

    <link rel="stylesheet" href="aset/css/style.css">

    <style>

    </style>
</head>

<body style="height: 100%;">
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
            <!-- Container wrapper -->
            <div class="container-fluid">
                <!-- Toggle button -->
                <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
                <!-- Collapsible wrapper -->
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Navbar brand -->
                    <a class="navbar-brand mt-2 mt-lg-0" href="<?php echo e(url('/')); ?>">
                        <img src="img/logo.jpg" height="45" alt="Caldera Toba" loading="lazy" />
                    </a>
                    <!-- Left links -->
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="<?php echo e(url('/')); ?>">Beranda</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/list-menu">Tiket Masuk dan Kamar</a>
                        </li>
                        
                        
                        <li class="nav-item">
                            <a class="nav-link" href="/user-artikel">Artikel</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="<?php echo e(url('/user-galeri')); ?>">Galeri</a>
                        </li>
                        
                        <?php if(Auth::check()): ?>
                            <li class="nav-item">
                                <a class="nav-link" href="<?php echo e(url('/pesanan')); ?>">Pesanan</a>
                            </li>
                        <?php endif; ?>

                    </ul>
                    <!-- Left links -->
                </div>
                <!-- Collapsible wrapper -->

                <!-- Right elements -->
                <div class="d-flex align-items-center">
                    <?php if(auth()->guard()->guest()): ?>
                        <?php if(Route::has('login')): ?>
                            <a href="<?php echo e(route('login')); ?>" class="nav-link text-white">Masuk</a>
                        <?php endif; ?>

                        <?php if(Route::has('register')): ?>
                            <a href="<?php echo e(route('register')); ?>"><button type="button"
                                    class="btn btn-primary">Daftar</button></a>
                        <?php endif; ?>
                    <?php endif; ?>
                    <!-- Icon -->
                    <?php if(Route::has('login')): ?>
                        <?php if(auth()->guard()->check()): ?>
                            
                            <?php
                                $orders = \DB::table('pesanans')
                                    ->where('status', 3)
                                    ->where('user_id', Auth::user()->id)
                                    ->get();
                                $packing = \DB::table('pesanans')
                                    ->where('status', 4)
                                    ->where('user_id', Auth::user()->id)
                                    ->get();
                                $tracking = \DB::table('pesanans')
                                    ->where('status', 5)
                                    ->where('user_id', Auth::user()->id)
                                    ->get();
                                $tracking = \DB::table('pesanans')
                                    ->where('status', 6)
                                    ->where('user_id', Auth::user()->id)
                                    ->get();
                            ?>
                            <div class="dropdown">
                                <a class="text-reset me-3 dropdown-toggle hidden-arrow" href="#"
                                    id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown"
                                    aria-expanded="false">
                                    <i class="fas fa-bell"></i>
                                    <span
                                        class="badge rounded-pill badge-notification bg-danger"><?php echo e(count($orders)); ?></span>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                    <?php $__currentLoopData = $orders; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <li>
                                            <a class="dropdown-item"
                                                href="<?php echo e(url('pesanan/' . $item->id)); ?>"><?php echo e('Tiket anda dengan kode ' . $item->kode . ' sudah di confirm'); ?></a>
                                        </li>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                    <?php $__currentLoopData = $packing; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <li>
                                            <a class="dropdown-item"
                                                href="<?php echo e(url('pesanan/' . $item->id)); ?>"><?php echo e('Lihat hasil tiket anda'); ?></a>
                                        </li>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                    <?php $__currentLoopData = $tracking; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <li>
                                            <a class="dropdown-item"
                                                href="<?php echo e(url('pesanan/' . $item->id)); ?>"><?php echo e('Tiket anda sudah di kirim'); ?></a>
                                        </li>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                    <?php $__currentLoopData = $tracking; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <li>
                                            <a class="dropdown-item"
                                                href="<?php echo e(url('pesanan/' . $item->id)); ?>"><?php echo e('Pesanan anda ditolak'); ?></a>
                                        </li>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </ul>
                            </div>
                            <?php
                            $pesanan_utama = App\Models\Pesanan::where('user_id', Auth::user()->id)
                                ->where('status', 0)
                                ->first();
                            if (!empty($pesanan_utama)) {
                                $notif = App\Models\PesananDetail::where('pesanan_id', $pesanan_utama->id)->count();
                            }
                            ?>
                            <a class="text-reset me-4" href="<?php echo e('checkout'); ?>">
                                <i class="fas fa-shopping-cart"></i>
                                <?php if(!empty($notif)): ?>
                                    <span
                                        class="badge rounded-pill badge-notification bg-danger"><?php echo e($notif); ?></span>
                                <?php endif; ?>
                            </a>
                            <!-- Avatar -->
                            <?php
                                $avatars = App\Models\User::where('id', Auth::user()->id)->first();
                            ?>
                            <div class="dropdown">
                                <a class="dropdown-toggle d-flex align-items-center hidden-arrow" href="#"
                                    id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown"
                                    aria-expanded="false">
                                    <?php if($avatars->avatar): ?>
                                        <img src="avatar/<?php echo e($avatars->avatar); ?>" class="rounded-circle" height="35"
                                            alt="avatar/<?php echo e($avatars->avatar); ?>" loading="lazy" />
                                    <?php else: ?>
                                        <img src="avatar/user.png" class="rounded-circle" height="35"
                                            alt="avatar/user.png" loading="lazy" />
                                    <?php endif; ?>
                                    <strong class="d-none d-sm-block ms-3 text-dark"><?php echo e(Auth::user()->name); ?></strong>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                                    <li>
                                        <a class="dropdown-item" href="<?php echo e(url('profile')); ?>">Akun Saya</a>
                                    </li>
                                    
                                    
                                    <li>
                                        <a class="dropdown-item" href="<?php echo e(route('logout')); ?>"
                                            onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                            <?php echo e(__('Keluar')); ?>

                                        </a>
                                        <form id="logout-form" action="<?php echo e(route('logout')); ?>" method="POST"
                                            class="d-none">
                                            <?php echo csrf_field(); ?>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        <?php endif; ?>
                    <?php endif; ?>
                </div>
                <!-- Right elements -->
            </div>
            <!-- Container wrapper -->
        </nav>
        <!-- Navbar -->
        <main class="py-4" style="margin-bottom: 20px; margin-top: 60px;">
            <?php echo $__env->yieldContent('content'); ?>
        </main>
    </div>
    <?php echo $__env->make('sweetalert::alert', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <hr class="footer-divider" style="border: 3px solid rgb(36, 15, 221)">
    </hr>
    <div class="footer-commons">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-4 order-sm-0 order-md-0 dcd-bg-gray">
                    <div class="">
                        <div class="row">
                            <div class="col-4 mt-3">
                                <img src="img/logo.jpg" alt="Caldera Toba" style="max-height: 207px;" width="150"
                                    height="120">
                            </div>
                            <div class="col-8">
                                <p class="mt-4 ml-5" style="font-size: 15px;">Caldera Toba Sibisa<br>
                                    Pardamean Sibisa, Kec. Ajibata, Toba, Sumatera Utara 22386</p>
                            </div>
                        </div>
                        <div class="row mt-2">
                           
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-8 order-sm-2 order-md-1 bg-white py-5">
                    <div class="row justify-content-end py-lg-5">
                        <div class="col-md-3 col-sm-6 mt-3 mt-md-0">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <?php echo $__env->yieldContent('script'); ?>
    <script src="https://code.jquery.com/jquery-3.6.0.slim.js"
        integrity="sha256-HwWONEZrpuoh951cQD1ov2HUK5zA5DwJ1DNUXaM6FsY=" crossorigin="anonymous"></script>
</body>
<script>
    $(document).on('change', '.file-input', function() {
                <
                !--Copyright-- >
                <
                /footer> <
                script src = "https://code.jquery.com/jquery-3.6.0.slim.js"
                integrity = "sha256-HwWONEZrpuoh951cQD1ov2HUK5zA5DwJ1DNUXaM6FsY="
                crossorigin = "anonymous" >
</script>

</body>
<script>
    $(document).on('change', '.file-input', function() {
        var filesCount = $(this)[0].files.length;

        var textbox = $(this).prev();

        if (filesCount === 1) {
            var fileName = $(this).val().split('\\').pop();
            textbox.text(fileName);
        } else {
            textbox.text(filesCount + ' files selected');
        }
    });
</script>


</html>
<?php /**PATH D:\DELLLLL\SEM5\Pengujian Perangkat Lunak\PROJECT\Caldera-Toba-Testing\caldera-sibisa\resources\views/user/layouts/app.blade.php ENDPATH**/ ?>