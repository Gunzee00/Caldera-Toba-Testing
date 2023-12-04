
<?php $__env->startSection('title'); ?>
    Home
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
    

 
    <div id="page">
        <section id="gtco-hero" class="gtco-cover"
            style="background-image: url(img/sampul.png); background-repeat:no-repeat; background-size:cover; height:100vh;"
            data-section="home" data-stellar-background-ratio="">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-md-offset-0 text-center">
                        <div class="display-t">
                            <div class="display-tc">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ***** Main Banner Area End ***** -->
        <!-- ***** Blog Start ***** -->
        <section class="section" id="our-classes">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 offset-lg-2">
                        <div class="section">
                            
                            <img src="assets/images/line-dec.png" alt="">
                            
                        </div>
                    </div>
                </div>
                <section id="gtco-about" data-section="about">
                    <?php $__currentLoopData = $artikel; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="mt-2" >
                        <div class="row mb-1">
                            <div class="col-md">
                                <img src="<?php echo e(url('/image//' . $item->gambar)); ?>" width="100%;" class="img-responsive" alt="product">
                            </div>
                            <div class="col-md">
                                <h2><?php echo e($item->judul_artikel); ?></h2>
                                <p class="card-text"><?php echo e($item->tanggal_rilis); ?></p>
                                <p><?php echo e($item->deskripsi); ?>

                                </p>
                            </div>
                        </div><br><br><br>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        

                </section>

                

                <!-- ***** About Us Ends***** -->
                <!-- ***** Footer Start ***** -->


                <!-- jQuery -->
                <script src="aset/js/jquery-2.1.0.min.js"></script>

                <!-- Bootstrap -->
                <script src="aset/js/popper.js"></script>
                <script src="aset/js/bootstrap.min.js"></script>

                <!-- Plugins -->
                <script src="aset/js/scrollreveal.min.js"></script>
                <script src="aset/js/waypoints.min.js"></script>
                <script src="aset/js/jquery.counterup.min.js"></script>
                <script src="aset/js/imgfix.min.js"></script>
                <script src="aset/js/mixitup.js"></script>
                <script src="aset/js/accordions.js"></script>

                <!-- Global Init -->
                <script src="assets/js/custom.js"></script>

                </body>

                </html>
            <?php $__env->stopSection(); ?>

<?php echo $__env->make('user.layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\DELLLLL\SEM5\Pengujian Perangkat Lunak\PROJECT\Caldera-Toba-Testing\caldera-sibisa\resources\views/user/home.blade.php ENDPATH**/ ?>