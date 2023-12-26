

import axios from 'axios';
import assert from 'assert';

//get data

// describe('API Test', () => {
//   beforeEach(function () {
//     this.timeout(5000);
//   });

//   it('should return status code 200', async function () {
//     try {
//       const response = await axios.get('http://localhost:3003/api/readdatakamar');

//       assert.strictEqual(response.status, 200);
//       console.log('Response Data:', response.data);
//     } catch (error) {
//       throw error;
//     }
//   });
// });


//create data

// describe('Create Kamar API Test', () => {
//   it('should create an kamar and return status code 200', async () => {
//     Define the data to be sent in the POST request
    const postData = [
      {
        // gambar_kamar: '',
        // nama_kamar: '',
        // deskripsi: '',
        // nomor_telepon: '',
      },
      // {
      //   gambar_kamar: 'kamar2.jpg',
      //   nama_kamar: '@#$%^&*()',
      //   deskripsi: '1234567890',
      //   nomor_telepon: '!@#$%^&*()_+',
      // },
      // {
      //   gambar_kamar: '',
      //   nama_kamar: 'Combination123@#$',
      //   deskripsi: 'SpecialChars!@#$%^&*()_+123',
      //   nomor_telepon: 'TwoSymbolsOneDigit!@#5',
      // },
      // {
      //   gambar_kamar: 'kamar4.jpg',
      //   nama_kamar: '123ABC456',
      //   deskripsi: '789XYZ012',
      //   nomor_telepon: 'SpecialChars!@#$%^&*()_+',
      // },
      // {
      //   gambar_kamar: 'kamar5.jpg',
      //   nama_kamar: '',
      //   deskripsi: '!@#Symbols123',
      //   nomor_telepon: 'Numbers123456',
      // },
      // {
      //   gambar_kamar: 'kamar6.jpg',
      //   nama_kamar: '12345',
      //   deskripsi: '!@#%^&*()',
      //   nomor_telepon: 'Numbers123',
      // },
      // {
      //   gambar_kamar: 'kamar7.jpg',
      //   nama_kamar: '!@#%^&*()',
      //   deskripsi: 'Symbols!@#$',
      //   nomor_telepon: '',
      // },
      // // Kombinasi Data Tambahan
      // {
      //   gambar_kamar: 'kamar8.jpg',
      //   nama_kamar: 'Alphanumeric123',
      //   deskripsi: 'Symbol!@#',
      //   nomor_telepon: '123456789',
      // },
      // {
      //   gambar_kamar: 'kamar9.jpg',
      //   nama_kamar: '123456789',
      //   deskripsi: '!@#$%^&*()',
      //   nomor_telepon: 'SymbolChars!@#$%^&*()',
      // },
      // {
      //   gambar_kamar: 'kamar10.jpg',
      //   nama_kamar: '12345',
      //   deskripsi: 'Symbol!@#$',
      //   nomor_telepon: 'Special!@#Chars',
      // },
      // // Kombinasi Data Tambahan dengan Variasi Lebih Banyak
      // {
      //   gambar_kamar: 'kamar11.jpg',
      //   nama_kamar: '',
      //   deskripsi: 'Symbol&Number123',
      //   nomor_telepon: '!@#$%^&*()_+',
      // },
      // {
      //   gambar_kamar: 'kamar12.jpg',
      //   nama_kamar: 'SpecialChars!@#$%^&*()_+',
      //   deskripsi: '',
      //   nomor_telepon: 'Numbers123456',
      // },
      // {
      //   gambar_kamar: 'kamar13.jpg',
      //   nama_kamar: 'Alphanumeric!@#',
      //   deskripsi: '123456',
      //   nomor_telepon: '!@#$%^&*()',
      // },
      // // Kombinasi Lebih Banyak untuk 4 Baris Data yang Dikombinasikan
      // {
      //   gambar_kamar: 'kamar14.jpg',
      //   nama_kamar: 'Combined123!@#',
      //   deskripsi: '7890Symbols&Numbers',
      //   nomor_telepon: 'Special!@#Chars567',
      // },
      // {
      //   gambar_kamar: 'kamar15.jpg',
      //   nama_kamar: 'EmptyImageName.jpg',
      //   deskripsi: 'Empty Description',
      //   nomor_telepon: 'EmptyPhoneNumber',
      // },
      // {
      //   gambar_kamar: '',
      //   nama_kamar: 'Combined!@#123',
      //   deskripsi: '456SpecialChars',
      //   nomor_telepon: '7890Numbers',
      // },
      // {
      //   gambar_kamar: 'kamar16.jpg',
      //   nama_kamar: '123456',
      //   deskripsi: '7890',
      //   nomor_telepon: '0987654321',
      // },
    ];

// Test Case untuk Create Kamar API
describe('Create Kamar API Test', () => {
  postData.forEach((postData, index) => {
    it(`should create a kamar with data set ${index + 1} and return status code 200`, async () => {
      // Make the POST request
      try {
        const response = await axios.post('http://localhost:3003/api/createkamar', postData);

        // Assertions
        assert.strictEqual(response.status, 200);
        assert.ok(response.data); // Check if response.data is truthy

        console.log(`Data kamar berhasil dicreate ${index + 1}:`, response.data);
      } catch (error) {
        console.error(`Data kamar gagal  dicreate ${index + 1}:`, error.message);
        throw error;
      }
    });
  });
});

 

//update data
// Data untuk test case Update Kamar API

// const updateKamarTestData = [
//   {
//     id: 38,
//     gambar_kamar: 'updated_kamar38lagi.jpg',
//     nama_kamar: 'Updated Nama Kamar38',
//     deskripsi: 'Updated Deskripsi Kamar38',
//     nomor_telepon: 'Updated Nomor Telepon38',
//   },
//   {
//     id: 39,
//     gambar_kamar: '!@#123_kamar39.jpg',
//     nama_kamar: 'Updated Nama Kamar39',
//     deskripsi: 'Updated Deskripsi Kamar39',
//     nomor_telepon: 'Updated Nomor Telepon39',
//   },
//   {
//     id: 40,
//     gambar_kamar: 'updated_kamar40.jpg',
//     nama_kamar: '1234567890',
//     deskripsi: 'Updated Deskripsi Kamar40',
//     nomor_telepon: '!@#$%^&*()_+',
//   },
//   {
//     id: 41,
//     gambar_kamar: 'updated_kamar41.jpg',
//     nama_kamar: '',
//     deskripsi: 'Updated Deskripsi Kamar41',
//     nomor_telepon: 'Updated Nomor Telepon41',
//   },
//   {
//     id: 42,
//     gambar_kamar: '',
//     nama_kamar: 'Updated Nama Kamar42',
//     deskripsi: '!@#$%^&*()_+',
//     nomor_telepon: 'Updated Nomor Telepon42',
//   },
//   {
//     id: 43,
//     gambar_kamar: 'updated_kamar43.jpg',
//     nama_kamar: 'SpecialChars!@#$%^&*()',
//     deskripsi: '',
//     nomor_telepon: 'Updated Nomor Telepon43',
//   },
//   {
//     id: 44,
//     gambar_kamar: 'updated_kamar44.jpg',
//     nama_kamar: '12345',
//     deskripsi: 'Updated Deskripsi Kamar44',
//     nomor_telepon: '',
//   },
//   {
//     id: 45,
//     gambar_kamar: 'updated_kamar45.jpg',
//     nama_kamar: 'Symbol!@#$',
//     deskripsi: '',
//     nomor_telepon: 'Updated Nomor Telepon45',
//   },
//   {
//     id: 46,
//     gambar_kamar: 'updated_kamar46.jpg',
//     nama_kamar: 'Updated Nama Kamar46',
//     deskripsi: 'Numbers123',
//     nomor_telepon: 'Symbol!@#$',
//   },
//   {
//     id: 47,
//     gambar_kamar: 'updated_kamar47.jpg',
//     nama_kamar: '!@#%^&*()',
//     deskripsi: 'Updated Deskripsi Kamar47',
//     nomor_telepon: '',
//   },
//   {
//     id: 48,
//     gambar_kamar: 'updated_kamar48.jpg',
//     nama_kamar: 'Updated Nama Kamar48',
//     deskripsi: '',
//     nomor_telepon: 'Special!@#Chars567',
//   },
//   {
//     id: 49,
//     gambar_kamar: 'updated_kamar49.jpg',
//     nama_kamar: '123456',
//     deskripsi: 'Updated Deskripsi Kamar49',
//     nomor_telepon: '123456789',
//   },
//   {
//     id: 50,
//     gambar_kamar: 'updated_kamar50.jpg',
//     nama_kamar: 'Alphanumeric!@#',
//     deskripsi: '!@#$%^&*()',
//     nomor_telepon: '',
//   },
//   {
//     id: 51,
//     gambar_kamar: 'updated_kamar51.jpg',
//     nama_kamar: 'Combined123!@#',
//     deskripsi: '7890Symbols&Numbers',
//     nomor_telepon: 'Special!@#Chars567',
//   },
//   {
//     id: 52,
//     gambar_kamar: 'updated_kamar52.jpg',
//     nama_kamar: '',
//     deskripsi: '456SpecialChars',
//     nomor_telepon: '7890Numbers',
//   },
//   {
//     id: 53,
//     gambar_kamar: '',
//     nama_kamar: 'Updated Nama Kamar53',
//     deskripsi: 'Updated Deskripsi Kamar53',
//     nomor_telepon: '0987654321',
//   },
// ];

// // Test Case untuk Update Kamar API
// describe('Update Kamar API Test', () => {
//   updateKamarTestData.forEach((updateData, index) => {
//     it(`should update a kamar with id ${updateData.id} and return status code 200`, async () => {
//       // Make the PUT request
//       try {
//         const response = await axios.put(`http://localhost:3003/api/updatekamar/${updateData.id}`, updateData);

<<<<<<< HEAD
        console.log(`Data kamar berhasil diupdate ${index + 1}:`, response.data);
      } catch (error) {
        console.error(`Error updating kamar for data set ${index + 1}:`, error.message);
        throw error;
      }
    });
  });
});
=======
//         // Assertions
//         assert.strictEqual(response.status, 200);
//         assert.ok(response.data);

//         console.log(`Kamar updated successfully for data set ${index + 1}:`, response.data);
//       } catch (error) {
//         console.error(`Error updating kamar for data set ${index + 1}:`, error.message);
//         throw error;
//       }
//     });
//   });
// });
>>>>>>> 51d63b74a85499e999abfbc4b9bb0739f265793f


describe('Update Kamar API Test', () => {
  it('should update a kamar and return status code 200', async () => {
    const kamarId = 53; 
    const updateData = {
      gambar_kamar: 'updated_kamar53.jpg',
      nama_kamar: 'Updated Nama Kamar53',
      deskripsi: 'Updated Deskripsi Kamar53',
      nomor_telepon: 'Updated Nomor Telepon53',
    };

    try {
      const response = await axios.put(`http://localhost:3003/api/updatekamar/${kamarId}`, updateData);

      
      assert.strictEqual(response.status, 200);
      assert.ok(response.data);

      console.log('Kamar updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating kamar:', error.message);
      throw error;
    }
  });
});


//delete data

// describe('Delete Kamar API Test', () => {
//   it('should delete an article and return status code 200', async () => {
//     // Assume you have a test article ID, replace it with an actual ID from your database
//     const kamarIdToDelete = 1; // Replace with a valid article ID

//     // Make the DELETE request
//     try {
//       const response = await axios.delete('http://localhost:3003/api/deletekamar', {
//         data: { id_kamar: kamarIdToDelete },
//       });

//       // Assertions
//       assert.strictEqual(response.status, 200);
//       assert.ok(response.data); // Check if response.data is truthy

//       console.log('Article deleted successfully:', response.data);
//     } catch (error) {
//       console.error('Error deleting article:', error.message);
//       throw error;
//     }
//   });
// });
