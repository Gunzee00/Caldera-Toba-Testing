

import axios from 'axios';
import assert from 'assert';

// //get data

// describe('API Test', () => {
//   beforeEach(function () {
//     this.timeout(5000);
//   });

//   it('should return status code 200', async function () {
//     try {
//       const response = await axios.get('http://localhost:3007/api/readpesanans');

//       assert.strictEqual(response.status, 200);
//       console.log('Response Data:', response.data);
//     } catch (error) {
//       throw error;
//     }
//   });
// });


//create data


describe('Create Artikel API Test', () => {
  it('should create an article and return status code 200', async () => {
  
    const postData = {
      gambar: 'TisDaSeason.jpg',
      deskripsi: 'Its the time of the year...',
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
});


//gambar kosong
describe('Create Artikel API Test', () => {
  it('should create an article and return status code 200', async () => {
  
    const postData = {
      gambar: '',
      deskripsi: 'Its the time of the year...',
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
});

//deskripsi kosong
describe('Create Artikel API Test', () => {
  it('should create an article and return status code 200', async () => {
  
    const postData = {
      gambar: 'gambar',
      deskripsi: '',
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
});

//judul artikel kosong
describe('Create Artikel API Test', () => {
  it('should create an article and return status code 200', async () => {
  
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
});

//gambar & deskripsi kosong
describe('Create Artikel API Test', () => {
  it('should create an article and return status code 200', async () => {
  
    const postData = {
      gambar: '',
      deskripsi: '',
      judul_artikel: 'Feastivus Strikes Back',
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
  });



// //update data 
describe('Update Artikel API Test', () => {
  const articleIdToUpdate = 11; // Update this with the correct article ID

  const testCases = [
    {
      description: 'harus memperbarui artikel dengan updated_gambar testing.jpg, updated_contoh, dan Updated Sample Judul Artikel',
      postData: {
        gambar: 'updated_gambar testing.jpg',
        deskripsi: 'updated_contoh',
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

        console.log(`${description}: Article updated successfully with test case ${index + 1}:`, response.data);
      } catch (error) {
        console.error(`${description}: Error updating article with test case ${index + 1}:`, error.message);
        if (error.response) {
          console.error('Server responded with:', error.response.status, error.response.data);
        }
        throw error;
      }
    });
  });
});



// // //delete data

// describe('Delete Artikel API Test', () => {
//   it('should delete an article and return status code 200', async () => {
//     const articleIdToDelete = 10; 

//     try {
//       const response = await axios.delete('http://localhost:3002/api/deleteartikel', {
//         data: { id_artikel: articleIdToDelete },
//       });

//       assert.strictEqual(response.status, 200);
//       assert.ok(response.data); 
//       console.log('Article deleted successfully:', response.data);
//     } catch (error) {
//       console.error('Error deleting article:', error.message);
//       throw error;
//     }
//   });
// });
