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


  //delete

  app.delete('/api/deletepesanan', (req, res) => {
    const idPesanan = req.body.id;

    // Periksa apakah pesanan dengan ID yang diminta ada dalam database sebelum melakukan delete
    const checkQuery = "SELECT * FROM pesanans WHERE id = ?";
    db.query(checkQuery, [idPesanan], (checkErr, checkResult) => {
        if (checkErr) {
            console.log(checkErr);
            return res.status(500).send("Internal Server Error");
        }

        // Pesanan tidak ditemukan dalam database
        if (checkResult.length === 0) {
            return res.status(404).send("Pesanan not found");
        }

        // Lakukan delete jika pesanan ditemukan
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
});

  


app.listen(3007, ()=>{
    console.log('server berhasil berjalan di server 3007')
})