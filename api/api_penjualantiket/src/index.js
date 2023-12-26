const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const{db} = require('./model/dbConnection');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

//read
app.get('/api/readpenjualantiket',(req,res)=>{
    const sqlQuery = "SELECT * FROM penjualan_tiket";
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

  app.delete('/api/deletepenjualantiket', (req, res) => {
    const idPenjualanTiket = req.body.id;

    // Periksa apakah penjualan tiket dengan ID yang diminta ada dalam database sebelum melakukan delete
    const checkQuery = "SELECT * FROM penjualan_tiket WHERE id = ?";
    db.query(checkQuery, [idPenjualanTiket], (checkErr, checkResult) => {
        if (checkErr) {
            console.log(checkErr);
            return res.status(500).send("Internal Server Error");
        }

        // Penjualan tiket tidak ditemukan dalam database
        if (checkResult.length === 0) {
            return res.status(404).send("Penjualan tiket not found");
        }

        // Lakukan delete jika penjualan tiket ditemukan
        const sqlQuery = "DELETE FROM penjualan_tiket WHERE id = ?";
        db.query(sqlQuery, [idPenjualanTiket], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error deleting penjualan tiket");
            } else {
                console.log(result);
                res.send(result);
            }
        });
    });
});

  


app.listen(3009, ()=>{
    console.log('server berhasil berjalan di server 3009')
})