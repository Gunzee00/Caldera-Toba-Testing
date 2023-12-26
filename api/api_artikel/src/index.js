const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const{db} = require('./model/dbConnection');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

//read
app.get('/api/readdataartikel',(req,res)=>{
    const sqlQuery = "SELECT * FROM artikel";
    db.query(sqlQuery,(err, result)=>{
        if(err) {
            console.log(err);

        }else{
            res.send(result);
            console.log(result)
        }
    })
})


//create
app.post('/api/createartikel', (req, res) => {
  const gambarArtikel = req.body.gambar;
  const deskripsiArtikel = req.body.deskripsi;
  const judulArtikel = req.body.judul_artikel;

  // Pengecekan nilai kosong atau null
  if (!gambarArtikel.trim() || !deskripsiArtikel.trim() || !judulArtikel.trim()) {
      return res.status(400).send("All columns must be filled");
  }

  // Pengecekan tipe data
  if (typeof gambarArtikel !== 'string' || typeof deskripsiArtikel !== 'string' || typeof judulArtikel !== 'string') {
      return res.status(400).send("Invalid data types");
  }

  const sqlQuery = "INSERT INTO artikel (gambar, deskripsi, judul_artikel) VALUES (?, ?, ?)";
  db.query(sqlQuery, [gambarArtikel, deskripsiArtikel, judulArtikel], (err, result) => {
      if (err) {
          console.log(err);
          return res.status(500).send("Internal Server Error");
      } else {
          res.send(result);
          console.log(result);
      }
  });
});


  //update
  app.put('/api/updateartikel/:id', (req, res) => {
    const articleId = req.params.id;
    const gambarArtikel = req.body.gambar;
    const deskripsiArtikel = req.body.deskripsi; 
    const judulArtikel = req.body.judul_artikel; 
    
    // Pengecekan nilai kosong atau null
    if (!gambarArtikel.trim() || !deskripsiArtikel.trim() || !judulArtikel.trim()) {
        return res.status(400).send("All columns must be filled");
    }

    // Pengecekan tipe data
    if (typeof gambarArtikel !== 'string' || typeof deskripsiArtikel !== 'string' || typeof judulArtikel !== 'string') {
        return res.status(400).send("Invalid data types");
    }

    // Periksa apakah artikel dengan ID yang diminta ada dalam database sebelum melakukan update
    const checkQuery = "SELECT * FROM artikel WHERE id_artikel = ?";
    db.query(checkQuery, [articleId], (checkErr, checkResult) => {
        if (checkErr) {
            console.log(checkErr);
            return res.status(500).send("Internal Server Error");
        }

        // Artikel tidak ditemukan dalam database
        if (checkResult.length === 0) {
            return res.status(404).send("Article not found");
        }

        // Lakukan update jika artikel ditemukan
        const sqlQuery = "UPDATE artikel SET gambar=?, deskripsi=?, judul_artikel=? WHERE id_artikel=?";
        db.query(sqlQuery, [gambarArtikel, deskripsiArtikel, judulArtikel, articleId], (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send("Internal Server Error");
            } else {
                res.send(result);
                console.log(result);
            }
        });
    });
});




  //delete

  app.delete('/api/deleteartikel', (req, res) => {
    const idArtikel = req.body.id_artikel;

    // Periksa apakah artikel dengan ID yang diminta ada dalam database sebelum melakukan delete
    const checkQuery = "SELECT * FROM artikel WHERE id_artikel = ?";
    db.query(checkQuery, [idArtikel], (checkErr, checkResult) => {
        if (checkErr) {
            console.log(checkErr);
            return res.status(500).send("Internal Server Error");
        }

        // Artikel tidak ditemukan dalam database
        if (checkResult.length === 0) {
            return res.status(404).send("Article not found");
        }

        // Lakukan delete jika artikel ditemukan
        const sqlQuery = "DELETE FROM artikel WHERE id_artikel = ?";
        db.query(sqlQuery, [idArtikel], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error deleting artikel");
            } else {
                console.log(result);
                res.send(result);
            }
        });
    });
});



app.listen(3002, ()=>{
-    console.log('server berhasil berjalan di server 3002')
})