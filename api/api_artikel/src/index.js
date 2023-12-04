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
    const articleId = req.params.id_artikel;
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

  app.delete('/api/deleteartikel', (req, res) => {
    const idArtikel  = req.body.id_artikel; // Fix: Corrected variable name
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
  


app.listen(3002, ()=>{
    console.log('server berhasil berjalan di server 3002')
})