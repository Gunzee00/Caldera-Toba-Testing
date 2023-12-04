const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const{db} = require('./model/dbConnection');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

//read
app.get('/api/readdatapengunjung',(req,res)=>{
    const sqlQuery = "SELECT * FROM data_pengunjung";
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
app.post('/api/createdatapengunjung', (req, res) => {
    const namaPengunjung = req.body.nama_pengunjung;
    const nik = req.body.nik; 
    const tempatTinggal = req.body.tempat_tinggal; 

  
    const sqlQuery = "INSERT INTO data_pengunjung (nama_pengunjung, nik, tempat_tinggal ) VALUES (?, ?, ?)";
    db.query(sqlQuery,[namaPengunjung,nik, tempatTinggal ], (err,result)=>{
        if(err) {
            console.log(err);

        }else{
            res.send(result);
            console.log(result)
        }
    })
  });

  //update
  app.put('/api/updatedatapengunjung', (req, res) => {
    const namaPengunjung = req.body.nama_pengunjung;
    const nik = req.body.nik; 
    const tempatTinggal = req.body.tempat_tinggal; 
  
    const sqlQuery = "UPDATE data_pengunjung SET nama_pengunjung= ?, nik=?, tempat_tinggal=?";
    db.query(sqlQuery,[namaPengunjung,nik, tempatTinggal ], (err,result)=>{
        if(err) {
            console.log(err);

        }else{
            res.send(result);
            console.log(result)
        }
    })
  });

  //delete
  app.delete('/api/deletedatapengunjung', (req, res) => {
    const idData = req.body.id_data; 
    const sqlQuery = "DELETE FROM data_pengunjung WHERE id_data = ?";
  
    db.query(sqlQuery, [idData], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error deleting data pengunjung");
      } else {
        console.log(result);
        res.send(result);
      }
    });
  });
  


app.listen(3004, ()=>{
    console.log('server berhasil berjalan')
})