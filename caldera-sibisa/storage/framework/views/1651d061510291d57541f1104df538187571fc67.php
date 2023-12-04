<!DOCTYPE html>
<html lang="en">
<!-- index.html  21 Nov 2019 03:44:50 GMT -->
<head>
  
    <base href="/public">
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">
  <title><?php echo e($title); ?></title>
  
  <!-- General CSS Files -->
  <base href="/public">
  <link rel="stylesheet" href="assets/css/app.min.css">
  <!-- Template CSS -->
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="stylesheet" href="assets/css/components.css">
  <!-- Custom style CSS -->
  <link rel="stylesheet" href="assets/css/custom.css">
  <link rel='shortcut icon' type='image/x-icon' href='assets/img/favicon.ico' />

      <!-- Styles -->
      <link href="<?php echo e(asset('css/app.css')); ?>" rel="stylesheet">

      <link rel="stylesheet" type="text/css" href="css/trix.css">
      <script type="text/javascript" src="js/trix.js"></script>
      <style>
        trix-toolbar [data-trix-button-group="file-tools"] {
          display: none;
        }
      </style>
</head>

<body>
  <div class="loader"></div>
  <div id="app">
    <div class="main-wrapper main-wrapper-1">
      <div class="navbar-bg"></div>
      <?php echo $__env->make('admin.layouts.navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
      <?php echo $__env->make('admin.layouts.sidebar-left', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
      <!-- Main Content -->
      <div class="main-content">
        <section class="section">
            <?php echo $__env->yieldContent('content'); ?>
        </section>
        <?php echo $__env->make('admin.layouts.sidebar-right', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
      </div>
      <?php echo $__env->make('admin.layouts.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
  </div>
  <?php echo $__env->make('sweetalert::alert', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.slim.js" integrity="sha256-HwWONEZrpuoh951cQD1ov2HUK5zA5DwJ1DNUXaM6FsY=" crossorigin="anonymous"></script>
  <!-- General JS Scripts -->
  <script src="assets/js/app.min.js"></script>
  <!-- JS Libraies -->
  <script src="assets/bundles/apexcharts/apexcharts.min.js"></script>
  <!-- Page Specific JS File -->
  <script src="assets/js/page/index.js"></script>
  <!-- Template JS File -->
  <script src="assets/js/scripts.js"></script>
  <!-- Custom JS File -->
  <script src="assets/js/custom.js"></script>
  <script>
    $('.delete').click( function() {
      var userid = $(this).attr('data-id')
      var name = $(this).attr('data-name')
      // var type = $(this).attr('data-type');
      swal({
            title: "Apa anda yakin menonaktifkan data ini?",
            text: "Anda akan menonaktifkan "+name+'',
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Data berhasil dinonaktifkan", {
                icon: "success",
              });
            } else {
              swal("Data tidak jadi dihapus");
            }
      });
    })
  </script>
  <?php echo $__env->make('sweetalert::alert', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
</body>
<!-- index.html  21 Nov 2019 03:47:04 GMT -->
<script>
  document.addEventListener('trix-file-accept', function(e) {
    e.preventDefault();
  })
</script>
</html>
<?php /**PATH D:\DELLLLL\SEM5\Pengujian Perangkat Lunak\PROJECT\Caldera-Toba-Testing\caldera-sibisa\resources\views/admin/layouts/master.blade.php ENDPATH**/ ?>