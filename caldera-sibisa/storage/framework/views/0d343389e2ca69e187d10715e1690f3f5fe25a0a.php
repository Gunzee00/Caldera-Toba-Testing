
<?php $__env->startSection('title'); ?>
    List Menu
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
<div class="container">
    <div class="row">
    
            <?php $__currentLoopData = $galeri; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div class="card row-sm-4" style="border: 1px solid rgb(0, 0, 0); margin:5px; width:350px; height:auto;justify-content:center; align-items:center;">

                <div class="blog-box">
                    <div>
                        <a href="<?php echo e(url('/image/' . $item->gambar_galeri)); ?>" data-lightbox="image-gallery">
                            <img src="<?php echo e(url('/image/' . $item->gambar_galeri)); ?>" style="width:330px; height:230px;">
                        </a>
                    </div>
                    
                    <div class="card-body">
                        
                        <h href="#" class="blog-title"><?php echo e($item->judul_galeri); ?></h>
                        <p><?php echo e(Str::limit($item->deskripsi, 20)); ?></p>
                        <a href="/user-detail-galeri/<?php echo e($item->id_galeri); ?>">
                            <div>
                                
                            </div>
                        </a>
                    </div>
                </div>
                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
        <?php echo e($galeri->links()); ?>

        </div>
        <script src="path/to/lightbox.js"></script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('user.layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\DELLLLL\SEM5\Pengujian Perangkat Lunak\PROJECT\Caldera-Toba-Testing\caldera-sibisa\resources\views/user/galeri/galeri-user.blade.php ENDPATH**/ ?>