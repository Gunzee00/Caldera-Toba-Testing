
# Caldera-Toba-Testing
Pada repositori ini terdapat 3 folder
- api: Berisi projek api menggunakan node express
- testing_wdio : Berisi projek testing menggunakan web driver io
- caldera-sibisa-ppl : Berisi projek pa 2 berjudul caldera sibisa

----------------------------------------------------------------------------------------------------------------------------------
Instalasi untuk folder api
- node js yang digunakan adalah versi 20 atau sejenisnya
- import database mysqlnya bernama api_ppl (Databasenya berada pada folder api)
- untuk run port api command yang digunakan=  npm run start

----------------------------------------------------------------------------------------------------------------------------------
Instalasi untuk folder tesing_wdio
Untuk testing api nya, gunakan command = npx mocha test/specs/api/NAMA FILE

-----------------------------------------------------------------------------------------------------------------------------------
Instalasi Folfer Projek Caldera Toba Sibisa
- PHP yang di perbolehkan adalah versi php 8 ke atas dan menggunakan laravel 9.
- Import database terlebih dahulu
- composer install
- php artisan key:generate
NOTE:
-Tidak perlu di migrate
-Databasenya terdapat di folder bernama caldera-sibisa-db
untuk run 
- php artisan serve


