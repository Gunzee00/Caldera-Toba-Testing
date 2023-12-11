const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const{db} = require('./model/dbConnection');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

//read
app.get('/api/readdatakamar',(req,res)=>{
    const sqlQuery = "SELECT * FROM kamar";
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
app.post('/api/createkamar', (req, res) => {
    const namaKamar = req.body.nama_kamar;
    const gambarKamar = req.body.gambar_kamar; 
    const deskripsiKamar = req.body.deskripsi; 
    const nomorTelepon = req.body.nomor_telepon; 
  
    const sqlQuery = "INSERT INTO kamar (nama_kamar, gambar_kamar, deskripsi,nomor_telepon ) VALUES (?, ?, ?, ?)";
    db.query(sqlQuery,[namaKamar,gambarKamar, deskripsiKamar, nomorTelepon ], (err,result)=>{
        if(err) {
            console.log(err);

        }else{
            res.send(result);
            console.log(result)
        }
    })
  });

  //update
  app.put('/api/updatekamar/:id', (req, res) => {
    const kamarId = req.params.id;
    const namaKamar = req.body.nama_kamar;
    const gambarKamar = req.body.gambar_kamar; 
    const deskripsiKamar = req.body.deskripsi; 
    const nomorTelepon = req.body.nomor_telepon; 
    
    const sqlQuery = "UPDATE kamar SET nama_kamar=?, gambar_kamar=?, deskripsi=?, nomor_telepon=? WHERE id_kamar=?";
    db.query(sqlQuery, [namaKamar, gambarKamar, deskripsiKamar, nomorTelepon, kamarId], (err, result) => {
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
  app.delete('/api/deletekamar', (req, res) => {
    const idKamar = req.body.id_kamar; 
    const sqlQuery = "DELETE FROM kamar WHERE id_kamar = ?";
  
    db.query(sqlQuery, [idKamar], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error deleting kamar");
      } else {
        console.log(result);
        res.send(result);
      }
    });
  });
  


app.listen(3003, ()=>{
    console.log('server berhasil berjalan')
})