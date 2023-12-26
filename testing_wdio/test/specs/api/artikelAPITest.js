

import axios from 'axios';
import assert from 'assert';

//get data

describe('API Test', () => {
  beforeEach(function () {
    this.timeout(5000);
  });

  it('should return status code 200', async function () {
    try {
      const response = await axios.get('http://localhost:3002/api/readdataartikel');

      assert.strictEqual(response.status, 200);
      console.log('Data berhasil ditampilkan:', response.data);
    } catch (error) {
      throw error;
    }
  });
});





  describe('Create Artikel API Tests', () => {
    it('should create an article with valid data', async () => {
      const postData = {
        gambar: ' asda',
        deskripsi: ' sada  ',
        judul_artikel: ' wqe',
      };

      try {
        const response = await axios.post('http://localhost:3002/api/createartikel', postData);
        assert.strictEqual(response.status, 200);
        assert.ok(response.data);
        console.log('Data artikel berhasil di create:', response.data);
      } catch (error) {
        console.error('Error creating article:', error.message);
        throw error;
      }
    });

    it('should handle case where gambar is empty', async () => {
      const postData = {
        gambar: '',
        deskripsi: 'Its the time of the year',
        judul_artikel: 'Feastivus Strikes Back',
      };
      try {
        const response = await axios.post('http://localhost:3002/api/createartikel', postData);
        assert.strictEqual(response.status, 200);
        assert.ok(response.data);
        console.log('Article created successfully:', response.data);
      } catch (error) {
        console.error('Error creating article:', error.message);
        throw error;
      }
    });

    it('should handle case where deskripsi is empty', async () => {
      const postData = {
        gambar: 'gambar',
        deskripsi: '',
        judul_artikel: 'Feastivus Strikes Back',
      };

      try {
        const response = await axios.post('http://localhost:3002/api/createartikel', postData);
        assert.strictEqual(response.status, 200);
        assert.ok(response.data);
        console.log('Artikel Berhasil ditambahkan:', response.data);
      } catch (error) {
        console.error('Artikel Gagal Berhasil ditambahkan:', error.message);
        throw error;
      }
    });

    it('should handle case where judul_artikel is empty', async () => {
      const postData = {
        gambar: 'gambar',
        deskripsi: 'deskripsi artikel',
        judul_artikel: '',
      };

      try {
        const response = await axios.post('http://localhost:3002/api/createartikel', postData);
        assert.strictEqual(response.status, 200);
        assert.ok(response.data);
        console.log('Article created successfully:', response.data);
      } catch (error) {
        console.error('Error creating article:', error.message);
        throw error;
      }
    });

    it('should handle case where gambar and deskripsi are empty', async () => {
      const postData = {
        gambar: '',
        deskripsi: '',
        judul_artikel: '',
      };

      try {
        const response = await axios.post('http://localhost:3002/api/createartikel', postData);
        assert.strictEqual(response.status, 200);
        assert.ok(response.data);
        console.log('Artikel berhasil dibuat:', response.data);
      } catch (error) {
        console.error('Data Artikel gagal dibuat:', error.message);
        throw error;
      }
    });

    
    it('should handle case where gambar and deskripsi are empty', async () => {
      const postData = {
        gambar: '12345',
        deskripsi: '12314',
        judul_artikel: '123124',
      };

      try {
        const response = await axios.post('http://localhost:3002/api/createartikel', postData);
        assert.strictEqual(response.status, 200);
        assert.ok(response.data);
        console.log('Artikel berhasil dibuat:', response.data);
      } catch (error) {
        console.error('Error saat membuat artikel:', error.message);
        throw error;
      }
    });
    
    it('should handle case where gambar and deskripsi are empty', async () => {
      const postData = {
        gambar: '!@#!$%',
        deskripsi: '!@#!$%',
        judul_artikel: '!@#$%',
      };

      try {
        const response = await axios.post('http://localhost:3002/api/createartikel', postData);
        assert.strictEqual(response.status, 200);
        assert.ok(response.data);
        console.log('Artikel berhasil dibuat:', response.data);
      } catch (error) {
        console.error('Gagal membuat artikel:', error.message);
        throw error;
      }
    });
  });



// // //update data 
describe('Update Artikel API Test', () => {
  const articleIdToUpdate = 1 ; // Update this with the correct article ID

  const testCases = [
    {
      description: 'harus memperbarui artikel dengan updated_gambar testing.jpg, updated_contoh, dan Updated Sample Judul Artikel',
      postData: {
        gambar: 'updated_gambar testing.jpg',
        deskripsi: ' sda',
        judul_artikel: 'Updated Sample Judul Artikel',
      },
    },
    {
      description: 'harus memperbarui artikel dengan updated_gambar testing.jpg, updated_contoh, dan Updated Sample Judul Artikel, dengan gambar kosong',
      postData: {
        gambar: '',
        deskripsi: 'updated_contoh',
        judul_artikel: 'Updated Sample Judul Artikel',
      },
    },
    {
      description: 'harus memperbarui artikel dengan updated_gambar testing.jpg, updated_contoh, dan Updated Sample Judul Artikel, dengan deskripsi kosong',
      postData: {
        gambar: 'updated_gambar testing.jpg',
        deskripsi: '',
        judul_artikel: 'Updated Sample Judul Artikel',
      },
    },
    {
      description: 'harus memperbarui artikel dengan updated_gambar testing.jpg, updated_contoh, dan Updated Sample Judul Artikel, dengan judul_artikel kosong',
      postData: {
        gambar: 'updated_gambar testing.jpg',
        deskripsi: 'updated_contoh',
        judul_artikel: '',
      },
    },
    {
      description: 'harus memperbarui artikel dengan updated_gambar testing.jpg, updated_contoh, dan Updated Sample Judul Artikel, dengan gambar dan deskripsi kosong',
      postData: {
        gambar: '',
        deskripsi: '',
        judul_artikel: 'Updated Sample Judul Artikel',
      },
    },
    {
      description: 'harus memperbarui artikel dengan updated_gambar testing.jpg, updated_contoh, dan Updated Sample Judul Artikel, dengan gambar dan judul_artikel kosong',
      postData: {
        gambar: 'updated_gambar testing.jpg',
        deskripsi: '',
        judul_artikel: '',
      },
    },
    {
      description: 'harus memperbarui artikel dengan updated_gambar testing.jpg, updated_contoh, dan Updated Sample Judul Artikel, dengan gambar, deskripsi, dan judul_artikel kosong',
      postData: {
        gambar: '',
        deskripsi: '',
        judul_artikel: '',
      },
    },

    /////
    {
      description: 'harus memperbarui artikel dengan 1234.jpg, 12345, dan 12345',
      postData: {
        gambar: '1234.jpg',
        deskripsi: '12345',
        judul_artikel: '12345',
      },
    },
    {
      description: 'harus memperbarui artikel dengan gambar kosong, deskripsi 12345, dan judul_artikel 12345',
      postData: {
        gambar: '',
        deskripsi: '12345',
        judul_artikel: '12345',
      },
    },
    {
      description: 'harus memperbarui artikel dengan gambar 12345.jpg, deskripsi kosong, dan judul_artikel 12345',
      postData: {
        gambar: '12345.jpg',
        deskripsi: '',
        judul_artikel: '12345',
      },
    },
    {
      description: 'harus memperbarui artikel dengan gambar 12345.jpg, deskripsi 12345, dan judul_artikel kosong',
      postData: {
        gambar: '12345.jpg',
        deskripsi: '12345',
        judul_artikel: '',
      },
    },
    {
      description: 'harus memperbarui artikel dengan gambar kosong, deskripsi kosong, dan judul_artikel 12345',
      postData: {
        gambar: '',
        deskripsi: '',
        judul_artikel: '12345',
      },
    },
    {
      description: 'harus memperbarui artikel dengan gambar 12345.jpg, deskripsi kosong, dan judul_artikel kosong',
      postData: {
        gambar: '12345.jpg',
        deskripsi: '',
        judul_artikel: '',
      },
    },
    {
      description: 'harus memperbarui artikel dengan gambar kosong, deskripsi kosong, dan judul_artikel kosong',
      postData: {
        gambar: '',
        deskripsi: '',
        judul_artikel: '',
      },
    },
    ///
    {
      description: 'harus memperbarui artikel dengan !@#!$%.jpg, !@#!$%, dan !@#!$%',
      postData: {
        gambar: '!@#!$%.jpg',
        deskripsi: '!@#!$%',
        judul_artikel: '!@#!$%',
      },
    },
    {
      description: 'harus memperbarui artikel dengan gambar kosong, !@#!$%, dan !@#!$%',
      postData: {
        gambar: '',
        deskripsi: '!@#!$%',
        judul_artikel: '!@#!$%',
      },
    },
    {
      description: 'harus memperbarui artikel dengan !@#!$%.jpg, deskripsi kosong, dan !@#!$%',
      postData: {
        gambar: '!@#!$%.jpg',
        deskripsi: '',
        judul_artikel: '!@#!$%',
      },
    },
    {
      description: 'harus memperbarui artikel dengan !@#!$%.jpg, !@#!$%, dan judul_artikel kosong',
      postData: {
        gambar: '!@#!$%.jpg',
        deskripsi: '!@#!$%',
        judul_artikel: '',
      },
    },
    {
      description: 'harus memperbarui artikel dengan gambar kosong, deskripsi kosong, dan !@#!$%',
      postData: {
        gambar: '',
        deskripsi: '',
        judul_artikel: '!@#!$%',
      },
    },
    {
      description: 'harus memperbarui artikel dengan !@#!$%.jpg, deskripsi kosong, dan judul_artikel kosong',
      postData: {
        gambar: '!@#!$%.jpg',
        deskripsi: '',
        judul_artikel: '',
      },
    },
    {
      description: 'harus memperbarui artikel dengan gambar kosong, deskripsi kosong, dan judul_artikel kosong',
      postData: {
        gambar: '',
        deskripsi: '',
        judul_artikel: '',
      },
    },
  ];

  testCases.forEach((testCase, index) => {
    const { description, postData } = testCase;

    it(description, async () => {
      try {
        const response = await axios.put(`http://localhost:3002/api/updateartikel/${articleIdToUpdate}`, postData);

        assert.strictEqual(response.status, 200);
        assert.ok(response.data); // Ensure response.data is not undefined

        console.log(`${description}: Data artikel berhasil di update ${index + 1}:`, response.data);
      } catch (error) {
        console.error(`${description}: Data gagal artikel berhasil di update ${index + 1}:`, error.message);
        if (error.response) {
          console.error('Server responded with:', error.response.status, error.response.data);
        }
        throw error;
      }
    });
  });
});



// // // // // //delete data

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

