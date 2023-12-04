
<?php $__env->startSection('content'); ?>
    <form action="<?php echo e(url('store-galeri')); ?>" method="POST" enctype="multipart/form-data">
        <?php echo csrf_field(); ?>
        <div class="form-group">
            <label for="judul_galeri">Judul Galeri</label>
            <input type="text" class="form-control" id="judul_galeri" name="judul_galeri" required>
        </div>

        <div class="form-group">
            <label for="deskripsi_galeri">Deskripsi</label>
            <textarea class="form-control" id="deskripsi_galeri" name="deskripsi_galeri" rows="10" required></textarea>
        </div>

        <div class="form-group">
            <label for="gambar_galeri">Gambar</label>
            <div style="max-height: 500px; max-width: 600px; overflow:hidden">
                <img class="img-fluid mb-3 col-sm-5" id="preview">
            </div>
            <input accept="image/*" type="file" class="form-control" id="gambar_galeri" name="gambar_galeri"
                <?php $__errorArgs = ['gambar'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?> accept="image/*" onchange="previewImage(event)" required>

            <?php $__errorArgs = ['gambar_galeri'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                <div class="invalid-feedback"><?php echo e($message); ?></div>
            <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
        </div>

        <button type="submit" class="btn btn-primary">Tambah</button>
    </form>


    

    <div class="row">
        <?php $__currentLoopData = $galeri; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div class="col-4">
                <div class="card">
                    
                    <div style="height: 150px; max-width: 600px; overflow:hidden">
                        <img src="<?php echo e(url('/image//' . $item->gambar_galeri)); ?>" class="card-img-top">
                    </div>
                    <div class="card-body">
                        
                        <p class="card-title"><?php echo e($item->judul_galeri); ?></p>
                        <p class="card-text"><?php echo e(Str::limit($item->deskripsi_galeri, 20)); ?></p>
                        <a href="/detail-galeri/<?php echo e($item->id_galeri); ?>"
                            class="btn btn-primary btn-block btn-sm">Selengkapnya</a>
                        <div class="row my-2">
                            <div class="col">
                                <a href="/edit-galeri/<?php echo e($item->id_galeri); ?>"
                                    class="btn btn-primary btn-block btn-sm">Ubah</a>
                            </div>
                            <div class="col">
                                <form action="delete-galeri/<?php echo e($item->id_galeri); ?>" method="POST" id="deleteForm<?php echo e($item->id_galeri); ?>">
                                  <?php echo csrf_field(); ?>
                                  <?php echo method_field('delete'); ?>
                                  <input type="submit" class="btn btn-danger btn-block btn-sm" value="Hapus" onclick="return confirmDelete('<?php echo e($item->id_galeri); ?>')">
                                </form>
                              </div>
                        </div>
                    </div>

                </div>
            </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </div>
    <?php echo e($galeri->links()); ?>

    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous">
    </script>
    <script>
        function previewImage(event) {
            var reader = new FileReader();
            reader.onload = function() {
                var preview = document.getElementById('preview');
                preview.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    </script>

<script>
    function confirmDelete(id) {
      var confirmation = confirm("Apakah Anda yakin ingin menghapus data ini?");
    
      if (confirmation) {
        // Submit formulir penghapusan
        document.getElementById('deleteForm' + id).submit();
      }
    
      return false; // Menghentikan tindakan default klik tombol
    }
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\DELLLLL\SEM5\Pengujian Perangkat Lunak\PROJECT\Caldera-Toba-Testing\caldera-sibisa\resources\views/admin/galeri/galeri.blade.php ENDPATH**/ ?>