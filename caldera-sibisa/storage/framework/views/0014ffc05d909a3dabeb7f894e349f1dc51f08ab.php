<nav class="navbar navbar-expand-lg main-navbar sticky">
    <div class="form-inline mr-auto">
        <ul class="navbar-nav mr-3">
            <li><a href="#" data-toggle="sidebar"
                    class="nav-link nav-link-lg
                                collapse-btn"> <i
                        data-feather="align-justify"></i>
                </a>
            </li>
            
        </ul>
    </div>
    <ul class="navbar-nav navbar-right">
        <?php
            $stocks = \DB::select("SELECT * from tiket where stok = '0'");
            $orders = \DB::select("SELECT * from pesanans where status = '2'");
        ?>
        <li class="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown"
                class="nav-link nav-link-lg message-toggle"><i data-feather="bell"></i>
                <span class="badge headerBadge1 bg-danger"><?php echo e(count($stocks) + count($orders)); ?></span> </a>
            <div class="dropdown-menu dropdown-list dropdown-menu-right pullDown">
                <div class="dropdown-header">
                    Messages
                </div>
                <div class="dropdown-list-content dropdown-list-message">
                    <?php $__currentLoopData = $stocks; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $stock): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <a href="<?php echo e(url('/edit-menu/' . $stock->id)); ?>" class="dropdown-item dropdown-item-unread">
                            <span class="dropdown-item-icon bg-danger text-white">
                                <i class="fas fa-exclamation-triangle"></i>
                            </span>
                            <span class="dropdown-item-desc"> <?php echo e('Stock ' . $stock->jenis_tiket . ' sudah habis'); ?> <br>
                                <span class="time text-dark">-- <?php echo e($stock->updated_at); ?> --</span>
                                <i class="text-danger">*silahkan lakukan pengisian stok!</i>
                            </span>
                        </a>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    <?php $__currentLoopData = $orders; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $order): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <a href="<?php echo e(url('/result-file/' . $order->id)); ?>" class="dropdown-item dropdown-item-unread">
                            <span class="dropdown-item-icon bg-success text-white">
                                <i class="fas fa-check"></i>
                            </span>
                            <span class="dropdown-item-desc">
                                <?php echo e('Pesanan dengan kode ' . $order->kode . ' sudah dibayar'); ?>

                                <br>
                                <span class="time text-dark"><?php echo e($order->updated_at); ?></span>
                                <i class="text-danger">*silahkan cek foto disini</i>
                            </span>
                        </a>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>
            </div>
        </li>
        <li class="dropdown"><a href="#" data-toggle="dropdown"
                class="nav-link dropdown-toggle nav-link-lg nav-link-user"> <img alt="image"
                    src="productimage/logo.jpeg" class="user-img-radious-style"> <span
                    class="d-sm-none d-lg-inline-block"></span></a>
            <div class="dropdown-menu dropdown-menu-right pullDown">
                <div class="dropdown-title">Hello <?php echo e(Auth::user()->name); ?></div>
                <a href="<?php echo e(route('profile.admin')); ?>" class="dropdown-item has-icon"> <i
                        class="far
                                    fa-user"></i> Profil
                </a>
                <a href="<?php echo e(route('setting.admin')); ?>" class="dropdown-item has-icon"> <i class="fas fa-cog"></i>
                    Pengaturan Akun
                </a>
                <div class="dropdown-divider"></div>
                <a href="<?php echo e(route('logout')); ?>" class="dropdown-item has-icon text-danger"> <i
                        class="fas fa-sign-out-alt"></i>
                    Keluar
                </a>
            </div>
        </li>
    </ul>
</nav>
<?php /**PATH D:\DELLLLL\SEM5\Pengujian Perangkat Lunak\PROJECT\Caldera-Toba-Testing\caldera-sibisa\resources\views/admin/layouts/navbar.blade.php ENDPATH**/ ?>