const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const{db} = require('./model/dbConnection');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

//read
app.get('/api/readpesanandetail',(req,res)=>{
    const sqlQuery = "SELECT * FROM pesanan_details";
    db.query(sqlQuery,(err, result)=>{
        if(err) {
            console.log(err);

        }else{
            res.send(result);
            console.log(result)
        }
    })
})


 
 

  //delete

  app.delete('/api/deletepesanandetail', (req, res) => {
    const idPesananDetails = req.body.id;

    // Periksa apakah detail pesanan dengan ID yang diminta ada dalam database sebelum melakukan delete
    const checkQuery = "SELECT * FROM pesanan_details WHERE id = ?";
    db.query(checkQuery, [idPesananDetails], (checkErr, checkResult) => {
        if (checkErr) {
            console.log(checkErr);
            return res.status(500).send("Internal Server Error");
        }

        // Detail pesanan tidak ditemukan dalam database
        if (checkResult.length === 0) {
            return res.status(404).send("Detail pesanan not found");
        }

        // Lakukan delete jika detail pesanan ditemukan
        const sqlQuery = "DELETE FROM pesanan_details WHERE id = ?";
        db.query(sqlQuery, [idPesananDetails], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error deleting detail pesanan");
            } else {
                console.log(result);
                res.send(result);
            }
        });
    });
});

  


app.listen(3008, ()=>{
    console.log('server berhasil berjalan di server 3008')
})