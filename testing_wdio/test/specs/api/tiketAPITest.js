import axios from 'axios';
import assert from 'assert';

// Get data
// describe('API Test', () => {
//   beforeEach(function () {
//       this.timeout(5000);
//   });

//   it('should return status code 200', async function () {
//       try {
//           const response = await axios.get('http://localhost:3005/api/readtiket');
//           assert.strictEqual(response.status, 200);
//           console.log('Response Data:', response.data);
//       } catch (error) {
//           console.error('Test failed with error:', error.message);
//           throw error;
//       }
//   });
// });


// // // Create data
// describe('Create Data API Test', () => {
//   const testCases = [
//     {
//       description: 'seharusnya membuat data dengan karakter alfanumerik',
//       postData: {
//         gambar_tiket: 'Tiket contoh.jpg',
//         jenis_tiket: 'contoh jenis',
//         harga: 'harga',
//         keterangan: 'Sample keterangan',
//         stok: 'satu',  
//       },
//     },
//     {
//       description: 'seharusnya membuat data dengan karakter numerik',
//       postData: {
//         gambar_tiket: 'Tiket contoh.jpg',
//         jenis_tiket: 'contoh jenis tiket',
//         harga: 'contoh harga',
//         keterangan: 'Sample keterangan',
//         stok: 'satu',
//       },
//     },
//     {
//       description: 'seharusnya membuat data dengan gambar kosong',
//       postData: {
//         gambar_tiket: '',
//         jenis_tiket: 'contoh jenis tiket',
//         harga: 'contoh harga',
//         keterangan: 'Sample keterangan',
//         stok: 'satu',
//       },
//     },
//     {
//       description: 'seharusnya membuat data dengan jenis tiket kosong',
//       postData: {
//         gambar_tiket: 'Tiket contoh.jpg',
//         jenis_tiket: '',
//         harga: 'contoh harga',
//         keterangan: 'Sample keterangan',
//         stok: 'satu',
//       },
//     },
//     {
//       description: 'seharusnya membuat data dengan harga kosong',
//       postData: {
//         gambar_tiket: 'Tiket contoh.jpg',
//         jenis_tiket: 'contoh jenis tiket',
//         harga: '',
//         keterangan: 'Sample keterangan',
//         stok: 'satu',
//       },
//     },
//     {
//       description: 'seharusnya membuat data dengan keterangan kosong',
//       postData: {
//         gambar_tiket: 'Tiket contoh.jpg',
//         jenis_tiket: 'contoh jenis tiket',
//         harga: 'harga',
//         keterangan: '',
//         stok: 'satu',
//       },
//     },
//     {
//       description: 'seharusnya membuat data dengan stok kosong',
//       postData: {
//         gambar_tiket: 'Tiket contoh.jpg',
//         jenis_tiket: 'contoh jenis tiket',
//         harga: 'harga',
//         keterangan: 'keterangan',
//         stok: '',
//       },
//     },
//     {
//       description: 'seharusnya membuat data dengan karakter alfanumerik kosong',
//       postData: {
//         gambar_tiket: ' ',
//         jenis_tiket: ' ',
//         harga: ' ',
//         keterangan: ' ',
//         stok: ' ',  
//       },
//     },
//     {
//       description: 'seharusnya membuat data dengan karakter alfanumerik',
//       postData: {
//         gambar_tiket: 'Tiket contoh.jpg',
//         jenis_tiket: '12345',
//         harga: '1234',
//         keterangan: '12345',
//         stok: '12345',  
//       },
//     },
//     {
//       description: 'seharusnya membuat data dengan karakter alfanumerik khusus',
//       postData: {
//         gambar_tiket: '!@#$%',
//         jenis_tiket: '!@#$%',
//         harga: '!@#$%',
//         keterangan: '!@#$%',
//         stok: '!@#$%',  
//       },
//     },
//   ];

//   testCases.forEach((testCase) => {
//     it(testCase.description, async () => {
//       try {
//         const response = await axios.post('http://localhost:3005/api/createtiket', testCase.postData);

//         assert.strictEqual(response.status, 200);
//         assert.ok(response.data);

//         console.log('Data created successfully:', response.data);
//       } catch (error) {
//         console.error('Error creating data:', error.message);
//       }
//     });
//   });
// });

// Update data (fixing the error)
// describe('Update Tiket API Test', () => {
//   const tiketIdToUpdate = 11; // Update this with the correct article ID

//   const testCases = [
//     {
//       jenis_tiket: 'Updated Jenis Tiket',
//       gambar_tiket: 'updated_gambar_tiket.jpg',
//       harga: 100, // replace with the desired updated value
//       stok: 50,   // replace with the desired updated value
//       keterangan: 'Updated Keterangan',
//     },
//     {
//       gambar_tiket: '123.jpg', 
//       jenis_tiket: 'bioskop', 
//       harga: 50000, 
//       keterangan: '',
//       stok: 2,
//     },
//     {
//       gambar_tiket: '', 
//       jenis_tiket: 'kereta api', 
//       harga: 100000, 
//       keterangan: '/',
//       stok: 3,
//     },
//     {
//       gambar_tiket: 'abc.png', 
//       jenis_tiket: '123', 
//       harga: 150000, 
//       keterangan: '?',
//       stok: 3,
//     },
//     {
//       gambar_tiket: 'tiket.pdf', 
//       jenis_tiket: 'pesawat', 
//       harga: 1000000, 
//       keterangan: 'Jakarta - Denpasar',
//       stok: 4,
//     },
//     {
//       gambar_tiket: '{}', 
//       jenis_tiket: '()', 
//       harga: 100000, 
//       keterangan: ';',
//       stok: 4,
//     },
//     {
//       gambar_tiket: '????.png', 
//       jenis_tiket: '????????', 
//       harga: 100000, 
//       keterangan: '????',
//       stok: 9,
//     },
//     {
//       gambar_tiket: 'tiket123.jpg', 
//       jenis_tiket: 'bioskop', 
//       harga: 125000, 
//       keterangan: 'Film Spiderman',
//       stok: 0,
//     },
//     {
//       gambar_tiket: '', 
//       jenis_tiket: '', 
//       harga: 120000, 
//       keterangan: '',
//       stok: 11,
//     },
//     // Add more test cases as needed
//   ];

//   testCases.forEach((updateData, index) => {
//     it(`should update an article with test case ${index + 1}`, async () => {
//       try {
//         const response = await axios.put(`http://localhost:3005/api/updatetiket/${tiketIdToUpdate}`, updateData);

//         assert.strictEqual(response.status, 200);
//         assert.ok(response.data); // Ensure response.data is not undefined

//         console.log(`Ticket updated successfully with test case ${index + 1}:`, response.data);
//       } catch (error) {
//         console.error(`Error updating Tiket with test case ${index + 1}:`, error.message);
//         if (error.response) {
//           console.error('Server responded with:', error.response.status, error.response.data);
//         }

//         throw error;
//       }
//     });
//   });
// });


// Update data 
describe('Update Tiket API Test', () => {
  const tiketIdToUpdate = 11; // Update this with the correct article ID

  const testCases = [
    {
      description: 'seharusnya membuat data dengan karakter alfanumerik',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
        jenis_tiket: 'contoh jenis',
        harga: 'harga',
        keterangan: 'Sample keterangan',
        stok: 'satu',  
      },
    },
    {
      description: 'seharusnya membuat data dengan karakter numerik',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
        jenis_tiket: 'contoh jenis tiket',
        harga: 'contoh harga',
        keterangan: 'Sample keterangan',
        stok: 'satu',
      },
    },
    {
      description: 'seharusnya membuat data dengan gambar kosong',
      postData: {
        gambar_tiket: '',
        jenis_tiket: 'contoh jenis tiket',
        harga: 'contoh harga',
        keterangan: 'Sample keterangan',
        stok: 'satu',
      },
    },
    {
      description: 'seharusnya membuat data dengan jenis tiket kosong',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
        jenis_tiket: '',
        harga: 'contoh harga',
        keterangan: 'Sample keterangan',
        stok: 'satu',
      },
    },
    {
      description: 'seharusnya membuat data dengan harga kosong',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
        jenis_tiket: 'contoh jenis tiket',
        harga: '',
        keterangan: 'Sample keterangan',
        stok: 'satu',
      },
    },
    {
      description: 'seharusnya membuat data dengan keterangan kosong',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
        jenis_tiket: 'contoh jenis tiket',
        harga: 'harga',
        keterangan: '',
        stok: 'satu',
      },
    },
    {
      description: 'seharusnya membuat data dengan stok kosong',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
        jenis_tiket: 'contoh jenis tiket',
        harga: 'harga',
        keterangan: 'keterangan',
        stok: '',
      },
    },
    {
      description: 'seharusnya membuat data dengan karakter alfanumerik kosong',
      postData: {
        gambar_tiket: ' ',
        jenis_tiket: ' ',
        harga: ' ',
        keterangan: ' ',
        stok: ' ',  
      },
    },
    {
      description: 'seharusnya membuat data dengan karakter alfanumerik',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
        jenis_tiket: '12345',
        harga: '1234',
        keterangan: '12345',
        stok: '12345',  
      },
    },
    {
      description: 'seharusnya membuat data dengan karakter alfanumerik khusus',
      postData: {
        gambar_tiket: '!@#$%',
        jenis_tiket: '!@#$%',
        harga: '!@#$%',
        keterangan: '!@#$%',
        stok: '!@#$%',  
      },
    },
  ];

  testCases.forEach((testCase, index) => {
    const { description, postData } = testCase;

    it(description, async () => {
      try {
        const response = await axios.put(`http://localhost:3005/api/updatetiket/${tiketIdToUpdate}`, postData);

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


// // // Delete data
// // describe('Delete Tiket API Test', () => {
// //   it('should delete an article and return status code 200', async () => {
// //     // Assume you have a test article ID, replace it with an actual ID from your database
// //     const tiketIdToDelete = 21; // Replace with a valid article ID

// //     // Make the DELETE request
// //     try {
// //       const response = await axios.delete('http://localhost:3005/api/deletetiket', {
// //         data: { id_tiket: tiketIdToDelete },
// //       });

// //       // Assertions
// //       assert.strictEqual(response.status, 200);
// //       assert.ok(response.data); // Check if response.data is truthy

// //       console.log('Article deleted successfully:', response.data);
// //     } catch (error) {
// //       console.error('Error deleting article:', error.message);
// //       throw error;
// //     }
// //   });
// // });

  //     console.log('Tiket deleted successfully:', response.data);
  //   } catch (error) {
  //     console.error('Error deleting Tiket:', error.message);
  //     throw error;
  //   }
  // });
    
