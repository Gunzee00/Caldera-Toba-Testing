

import axios from 'axios';
import assert from 'assert';

//get data

describe('API Test', () => {
  beforeEach(function () {
    this.timeout(5000);
  });

  it('should return status code 200', async function () {
    try {
      const response = await axios.get('http://localhost:3001/api/readdatagaleri');

      assert.strictEqual(response.status, 200);
      console.log('Response Data:', response.data);
    } catch (error) {
      throw error;
    }
  });
});


//create data


describe('Create Galeri API Test', () => {
  it('should create an article and return status code 200', async () => {
    const postData = {
        gambar_galeri: 'gambargaleri.jpg',
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

//update data

// describe('Update Artikel API Test', () => {
//   it('should update an article and return status code 200', async () => {
//     // Assume you have an existing article with an ID that you want to update
//     const articleIdToUpdate = 11;

//     // Define the data to be sent in the PUT request
//     const updateData = {
//       gambar: 'updated_gambar.jpg',
//       deskripsi: 'updated_contoh',
//       judul_artikel: 'Updated Sample Judul Artikel',
//     };

//     // Make the PUT request to update the article
//     try {
//       const response = await axios.put(`http://localhost:3001/api/updateartikel/${articleIdToUpdate}`, updateData);

//       // Assertions
//       assert.strictEqual(response.status, 200);
// assert.ok(response.data); // Check if response.data is truthy
// assert.strictEqual(response.data.id, 11); // Adjust based on the actual structure of the response
//       console.log('Article updated successfully:', response.data);
//     } catch (error) {
//       console.error('Error updating article:', error.message);
//       throw error;
//     }
//   });
// });


describe('Delete Galeri API Test', () => {
  it('should delete an article and return status code 200', async () => {
    const galeriIdToDelete = 1; 

    try {
      const response = await axios.delete('http://localhost:3001/api/deletegaleri', {
        data: { id_galeri: galeriIdToDelete },
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
