

import axios from 'axios';
import assert from 'assert';

// //get data

// describe('API Test', () => {
//   beforeEach(function () {
//     this.timeout(5000);
//   });

//   it('should return status code 200', async function () {
//     try {
//       const response = await axios.get('http://localhost:3001/api/readdatagaleri');

//       assert.strictEqual(response.status, 200);
//       console.log('Response Data:', response.data);
//     } catch (error) {
//       throw error;
//     }
//   });
// });


// //create data


describe('Create Galeri API Test', () => {
  it('should create an article and return status code 200', async () => {
    const postData = {
        gambar_galeri: 'gambargaleriss.jpg',
        judul_galeri: 'contoh galeri',
        deskripsi_galeri: 'Sample deskripsi galeri',
    };


    try {
      const response = await axios.post('http://localhost:3001/api/creategaleri', postData);

      assert.strictEqual(response.status, 200);
      assert.ok(response.data); 

      console.log('Article created successfully:', response.data);
    } catch (error) {
      console.error('Error creating article:', error.message);
      throw error;
    }
  });
});

// //update data (masih error)
// describe('Update Galeri API Test', () => {
//     it('should update a gallery and return status code 200', async () => {
//       const galeriIdToUpdate = 6;
  
//       const updateData = {
//         gambar_galeri: 'updated_image.jpg', // Sesuaikan dengan nilai yang benar
//         deskripsi_galeri: 'updated_description',
//         judul_galeri: 'Updated Sample Judul Galeri',
//       };
  
//       try {
//         const response = await axios.put(`http://localhost:3001/api/updategaleri/${galeriIdToUpdate}`, updateData);
  
//         assert.strictEqual(response.status, 200);
//         assert.ok(response.data);
  
//         // Sesuaikan dengan nama properti yang benar pada respons API
//         assert.strictEqual(response.data.gambar_galeri, updateData.gambar_galeri);
//         assert.strictEqual(response.data.deskripsi_galeri, updateData.deskripsi_galeri);
//         assert.strictEqual(response.data.judul_galeri, updateData.judul_galeri);
  
//         console.log('Gallery updated successfully:', response.data);
//       } catch (error) {
//         console.error('Error updating gallery:', error.message);
//         if (error.response) {
//           console.error('Server responded with:', error.response.status, error.response.data);
//         }
//         throw error;
//       }
//     });
//   });
  
// describe('Delete Galeri API Test', () => {
//   it('should delete an article and return status code 200', async () => {
//     const galeriIdToDelete = 1; 

//     try {
//       const response = await axios.delete('http://localhost:3001/api/deletegaleri', {
//         data: { id_galeri: galeriIdToDelete },
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
