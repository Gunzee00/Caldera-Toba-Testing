

import axios from 'axios';
import assert from 'assert';

//get data

// describe('API Test', () => {
//   beforeEach(function () {
//     this.timeout(5000);
//   });

//   it('should return status code 200', async function () {
//     try {
//       const response = await axios.get('http://localhost:3007/api/readpesanan');

//       assert.strictEqual(response.status, 200);
//       console.log('Response Data:', response.data);
//     } catch (error) {
//       throw error;
//     }
//   });
// });


// //create data


// // describe('Create Artikel API Test', () => {
// //   it('should create an article and return status code 200', async () => {
  
// //     const postData = {
// //       gambar: 'TisDaSeason.jpg',
// //       deskripsi: 'Its the time of the year...',
// //       judul_artikel: 'Feastivus Strikes Back',
// //     };

// //     try {
// //       const response = await axios.post('http://localhost:3002/api/createartikel', postData);


// //       assert.strictEqual(response.status, 200);
// //       assert.ok(response.data); 

// //       console.log('Article created successfully:', response.data);
// //     } catch (error) {
// //       console.error('Error creating article:', error.message);
// //       throw error;
// //     }
// //   });
// // });

// //update data (masih error)
// // describe('Update Artikel API Test', () => {
// //   it('should update an article and return status code 200', async () => {
// //     const articleIdToUpdate = 11; // Update this with the correct article ID

// //     const updateData = {
// //       gambar: 'updated_gambar testing.jpg',
// //       deskripsi: 'updated_contoh',
// //       judul_artikel: 'Updated Sample Judul Artikel',
// //     };

// //     try {
// //       const response = await axios.put(`http://localhost:3002/api/updateartikel/${articleIdToUpdate}`, updateData);

// //       assert.strictEqual(response.status, 200);
// //       assert.ok(response.data); // Ensure response.data is not undefined

// //       console.log('Article updated successfully:', response.data);
// //     } catch (error) {
// //       console.error('Error updating article:', error.message);
// //       if (error.response) {
// //         // Log additional information if available
// //         console.error('Server responded with:', error.response.status, error.response.data);
// //       }
// //       throw error;
// //     }
// //   });
// // });

// // //delete data

describe('Delete Pesanan API Test', () => {
  it('should delete an article and return status code 200', async () => {
    const articleIdToDelete = 89; 

    try {
      const response = await axios.delete('http://localhost:3007/api/deletepesanan', {
        data: { id: articleIdToDelete },
      });

      assert.strictEqual(response.status, 200);
      assert.ok(response.data); 
      console.log('Article deleted successfully:', response.data);
    } catch (error) {
      console.error('Error deleting article:', error.message);
      throw error;
    }
  });
});
