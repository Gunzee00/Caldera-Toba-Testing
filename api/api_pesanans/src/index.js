const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const{db} = require('./model/dbConnection');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

//read
app.get('/api/readpesanan',(req,res)=>{
    const sqlQuery = "SELECT * FROM pesanans";
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
app.post('/api/createpesanan', (req, res) => {
    const gambarArtikel = req.body.gambar;
    const deskripsiArtikel = req.body.deskripsi; 
    const judulArtikel = req.body.judul_artikel; 
  
    const sqlQuery = "INSERT INTO artikel (gambar, deskripsi, judul_artikel) VALUES (?, ?, ?)";
    db.query(sqlQuery,[gambarArtikel,deskripsiArtikel, judulArtikel ], (err,result)=>{
        if(err) {
            console.log(err);

        }else{
            res.send(result);
            console.log(result)
        }
    })
  });

  //update
  app.put('/api/updateartikel/:id', (req, res) => {
    const articleId = req.params.id;
    const gambarArtikel = req.body.gambar;
    const deskripsiArtikel = req.body.deskripsi; 
    const judulArtikel = req.body.judul_artikel; 
    
    const sqlQuery = "UPDATE artikel SET gambar=?, deskripsi=?, judul_artikel=? WHERE id_artikel=?";
    db.query(sqlQuery, [gambarArtikel, deskripsiArtikel, judulArtikel, articleId], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err); // Send an error response to the client
      } else {
        res.send(result);
        console.log(result);
      }
    });
});


  //delete

  app.delete('/api/deletepesanan', (req, res) => {
    const idPesanan  = req.body.id; // Fix: Corrected variable name
    const sqlQuery = "DELETE FROM pesanans WHERE id = ?";
  
    db.query(sqlQuery, [idPesanan], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error deleting pesanan");
      } else {
        console.log(result);
        res.send(result);
      }
    });
  });
  


app.listen(3007, ()=>{
    console.log('server berhasil berjalan di server 3007')
})