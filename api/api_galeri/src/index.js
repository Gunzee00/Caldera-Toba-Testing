const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const{db} = require('./model/dbConnection');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

//read
app.get('/api/readdatagaleri',(req,res)=>{
    const sqlQuery = "SELECT * FROM galeri";
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
app.post('/api/creategaleri', (req, res) => {
    const judulGaleri = req.body.judul_galeri;
    const gambarGaleri = req.body.gambar_galeri; 
    const deskripsiGaleri = req.body.deskripsi_galeri; 
  
    const sqlQuery = "INSERT INTO galeri (judul_galeri, gambar_galeri, deskripsi_galeri) VALUES (?, ?, ?)";
    db.query(sqlQuery,[judulGaleri,gambarGaleri, deskripsiGaleri ], (err,result)=>{
        if(err) {
            console.log(err);

        }else{
            res.send(result);
            console.log(result)
        }
    })
  });

  //update
  
  app.put('/api/updategaleri/:id', (req, res) => {
    const galeriId = req.params.id; // Perbaiki di sini
    const gambarGaleri = req.body.gambar_galeri;
    const deskripsiGaleri = req.body.deskripsi_galeri;
    const judulGaleri = req.body.judul_galeri;
  
    const sqlQuery = "UPDATE galeri SET gambar_galeri=?, deskripsi_galeri=?, judul_galeri=? WHERE id_galeri=?";
    db.query(sqlQuery, [gambarGaleri, deskripsiGaleri, judulGaleri, galeriId], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.send(result);
            console.log(result);
        }
    });
  });
  //delete

  app.delete('/api/deletegaleri', (req, res) => {
    const idGaleri = req.body.id_galeri; // Fix: Corrected variable name
    const sqlQuery = "DELETE FROM galeri WHERE id_galeri = ?";
  
    db.query(sqlQuery, [idGaleri], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error deleting galeri");
      } else {
        console.log(result);
        res.send(result);
      }
    });
  });
  


app.listen(3001, ()=>{
    console.log('server berhasil berjalan pada port 3001')
})