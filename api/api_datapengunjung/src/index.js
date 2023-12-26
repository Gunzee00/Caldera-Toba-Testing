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

  // Pengecekan nilai kosong atau null
  if (!namaPengunjung.trim() || !nik.trim() || !tempatTinggal.trim()) {
      return res.status(400).send("All columns must be filled");
  }

  // Pengecekan tipe data
  if (typeof namaPengunjung !== 'string' || typeof nik !== 'string' || typeof tempatTinggal !== 'string') {
      return res.status(400).send("Invalid data types");
  }

  const sqlQuery = "INSERT INTO data_pengunjung (nama_pengunjung, nik, tempat_tinggal) VALUES (?, ?, ?)";
  db.query(sqlQuery, [namaPengunjung, nik, tempatTinggal], (err, result) => {
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
  app.put('/api/updatedatapengunjung/:id', (req, res) => {
    const dataId = req.params.id;
    const namaPengunjung = req.body.nama_pengunjung;
    const nik = req.body.nik;
    const tempatTinggal = req.body.tempat_tinggal;

    // Pengecekan nilai kosong atau null
    if (!namaPengunjung.trim() || !nik.trim() || !tempatTinggal.trim()) {
        return res.status(400).send("All columns must be filled");
    }

    // Pengecekan tipe data
    if (typeof namaPengunjung !== 'string' || typeof nik !== 'string' || typeof tempatTinggal !== 'string') {
        return res.status(400).send("Invalid data types");
    }

    // Periksa apakah data pengunjung dengan ID yang diminta ada dalam database sebelum melakukan update
    const checkQuery = "SELECT * FROM data_pengunjung WHERE id_data = ?";
    db.query(checkQuery, [dataId], (checkErr, checkResult) => {
        if (checkErr) {
            console.log(checkErr);
            return res.status(500).send("Internal Server Error");
        }

        // Data pengunjung tidak ditemukan dalam database
        if (checkResult.length === 0) {
            return res.status(404).send("Data pengunjung not found");
        }

        // Lakukan update jika data pengunjung ditemukan
        const sqlQuery = "UPDATE data_pengunjung SET nama_pengunjung=?, nik=?, tempat_tinggal=? WHERE id_data=?";
        db.query(sqlQuery, [namaPengunjung, nik, tempatTinggal, dataId], (err, result) => {
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
  app.delete('/api/deletedatapengunjung', (req, res) => {
    const idData = req.body.id_data;

    // Periksa apakah data pengunjung dengan ID yang diminta ada dalam database sebelum melakukan delete
    const checkQuery = "SELECT * FROM data_pengunjung WHERE id_data = ?";
    db.query(checkQuery, [idData], (checkErr, checkResult) => {
        if (checkErr) {
            console.log(checkErr);
            return res.status(500).send("Internal Server Error");
        }

        // Data pengunjung tidak ditemukan dalam database
        if (checkResult.length === 0) {
            return res.status(404).send("Data pengunjung not found");
        }

        // Lakukan delete jika data pengunjung ditemukan
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
});



app.listen(3004, ()=>{
    console.log('server berhasil berjalan pada port 3004')
})