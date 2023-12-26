const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const{db} = require('./model/dbConnection');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

//read
app.get('/api/readtiket', (req, res) => {
  const sqlQuery = "SELECT * FROM tiket";
  db.query(sqlQuery, (err, result) => {
      if (err) {
          console.error(err);
          res.status(500).send({ error: 'Internal Server Error' });
      } else {
          res.status(200).send(result);
          console.log(result);
      }
  });
});

// create
app.post('/api/createtiket', (req, res) => {
    const jenisTiket = req.body.jenis_tiket;
    const gambarTiket = req.body.gambar_tiket; 
    const harga = req.body.harga; 
    const stok = req.body.stok; 
    const keterangan = req.body.keterangan; 

    // Pengecekan nilai kosong atau null
    if (!jenisTiket.trim() || !gambarTiket.trim() || !harga.trim() || !stok.trim() || !keterangan.trim()) {
        return res.status(400).send("All columns must be filled");
    }

    // Pengecekan tipe data
    if (typeof jenisTiket !== 'string' || typeof gambarTiket !== 'string' || typeof harga !== 'string' || typeof stok !== 'string' || typeof keterangan !== 'string') {
        return res.status(400).send("Invalid data types");
    }

    const sqlQuery = "INSERT INTO tiket (jenis_tiket, gambar_tiket, harga, stok, keterangan) VALUES (?, ?, ?, ?, ?)";
    db.query(sqlQuery, [jenisTiket, gambarTiket, harga, stok, keterangan], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Internal Server Error");
        } else {
            res.send(result);
            console.log(result);
        }
    });
});

// update
app.put('/api/updatetiket/:id', (req, res) => {
    const tiketId = req.params.id;
    const jenisTiket = req.body.jenis_tiket;
    const gambarTiket = req.body.gambar_tiket; 
    const harga = req.body.harga; 
    const stok = req.body.stok; 
    const keterangan = req.body.keterangan; 

    // Pengecekan nilai kosong atau null
    if (!jenisTiket.trim() || !gambarTiket.trim() || !harga.trim() || !stok.trim() || !keterangan.trim()) {
        return res.status(400).send("All columns must be filled");
    }

    // Pengecekan tipe data
    if (typeof jenisTiket !== 'string' || typeof gambarTiket !== 'string' || typeof harga !== 'string' || typeof stok !== 'string' || typeof keterangan !== 'string') {
        return res.status(400).send("Invalid data types");
    }

    // Periksa apakah tiket dengan ID yang diminta ada dalam database sebelum melakukan update
    const checkQuery = "SELECT * FROM tiket WHERE id = ?";
    db.query(checkQuery, [tiketId], (checkErr, checkResult) => {
        if (checkErr) {
            console.log(checkErr);
            return res.status(500).send("Internal Server Error");
        }

        // Tiket tidak ditemukan dalam database
        if (checkResult.length === 0) {
            return res.status(404).send("Ticket not found");
        }

        // Lakukan update jika tiket ditemukan
        const sqlQuery = "UPDATE tiket SET jenis_tiket=?, gambar_tiket=?, harga=?, stok=?, keterangan=? WHERE id=?";
        db.query(sqlQuery, [jenisTiket, gambarTiket, harga, stok, keterangan, tiketId], (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Internal Server Error");
            } else {
                res.send(result);
                console.log(result);
            }
        });
    });
});

  //delete

  app.delete('/api/deletetiket', (req, res) => {
    const idTiket = req.body.id_tiket;

    // Periksa apakah tiket dengan ID yang diminta ada dalam database sebelum melakukan delete
    const checkQuery = "SELECT * FROM tiket WHERE id = ?";
    db.query(checkQuery, [idTiket], (checkErr, checkResult) => {
        if (checkErr) {
            console.log(checkErr);
            return res.status(500).send("Internal Server Error");
        }

        // Tiket tidak ditemukan dalam database
        if (checkResult.length === 0) {
            return res.status(404).send("Tiket not found");
        }

        // Lakukan delete jika tiket ditemukan
        const sqlQuery = "DELETE FROM tiket WHERE id = ?";
        db.query(sqlQuery, [idTiket], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error deleting tiket");
            } else {
                console.log(result);
                res.send(result);
            }
        });
    });
});

  


app.listen(3005, ()=>{
    console.log('server berhasil berjalan 3005')
})