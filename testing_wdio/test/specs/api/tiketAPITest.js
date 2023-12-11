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
describe('Create Data API Test', () => {
  const testCases = [
    {
      description: 'should create data with alphanumeric characters',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
      jenis_tiket: 'contoh jenis',
      harga: '200000',
      keterangan: 'Sample keterangan',
      stok: '10',  
      },
    },
    {
      description: 'should create data with numeric characters',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
      jenis_tiket: 'contoh jenis tiket',
      harga: 'contoh harga',
      keterangan: 'Sample keterangan',
      stok: 'satu',
      },
    },
    {
      description: 'should create data with numeric characters',
      postData: {
        gambar_tiket: '',
      jenis_tiket: 'contoh jenis tiket',
      harga: 'contoh harga',
      keterangan: 'Sample keterangan',
      stok: 'satu',
      },
    },
    {
      description: 'should create data with numeric characters',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
      jenis_tiket: '',
      harga: 'contoh harga',
      keterangan: 'Sample keterangan',
      stok: 'satu',
      },
    },
    {
      description: 'should create data with numeric characters',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
      jenis_tiket: 'contoh jenis tiket',
      harga: '',
      keterangan: 'Sample keterangan',
      stok: 'satu',
      },
    },
    {
      description: 'should create data with numeric characters',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
      jenis_tiket: 'contoh jenis tiket',
      harga: 'harga',
      keterangan: '',
      stok: 'satu',
      },
    },
    {
      description: 'should create data with numeric characters',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
      jenis_tiket: 'contoh jenis tiket',
      harga: 'harga',
      keterangan: 'keterangan',
      stok: '',
      },
    },
    {
      description: 'should create data with numeric characters',
      postData: {
        gambar_tiket: '',
      jenis_tiket: '',
      harga: 'harga',
      keterangan: 'keterangan',
      stok: 'satu',
      },
    },
    

    
    // Add more test cases as needed
  ];

  testCases.forEach((testCase) => {
    it(testCase.description, async () => {
      try {
        const response = await axios.post('http://localhost:3005/api/createtiket', testCase.postData);

        assert.strictEqual(response.status, 200);
        assert.ok(response.data);

        console.log('Data created successfully:', response.data);
      } catch (error) {
        console.error('Error creating data:', error.message);
        throw error;
      }
    });
  });
});


// // // Update data (fixing the error)
// // describe('Update Tiket API Test', () => {
// //   it('should update a tiket and return status code 200', async () => {
// //       // Assume you have an existing tiket with an ID that you want to update
// //       const tiketIdToUpdate = 11;

// //       // Define the data to be sent in the PUT request
// //       const updateData = {
// //           jenis_tiket: 'Updated Jenis Tiket',
// //           gambar_tiket: 'updated_gambar_tiket.jpg',
// //           harga: 100, // replace with the desired updated value
// //           stok: 50,   // replace with the desired updated value
// //           keterangan: 'Updated Keterangan',
// //       };

// //       // Make the PUT request to update the tiket
// //       try {
// //           const response = await axios.put(`http://localhost:3005/api/updatetiket/${tiketIdToUpdate}`, updateData);

// //           // Assertions
// //           assert.strictEqual(response.status, 200);
// //           assert.ok(response.data); // Check if response.data is truthy

// //           // Adjust based on the actual structure of the response
// //           if (response.data && response.data.id !== undefined) {
// //               assert.strictEqual(response.data.id, tiketIdToUpdate);
// //           } else {
// //               throw new Error('Invalid response structure. Unable to verify tiket update.');
// //           }

// //           console.log('Tiket updated successfully:', response.data);
// //       } catch (error) {
// //           console.error('Error updating tiket:', error.message);
// //           throw error;
// //       }
// //   });
// // });

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
