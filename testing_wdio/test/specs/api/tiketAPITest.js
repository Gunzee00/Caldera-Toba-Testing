import axios from 'axios';
import assert from 'assert';

//get data

describe('API Test', () => {
  beforeEach(function () {
    this.timeout(5000);
  });

  it('should return status code 200', async function () {
    try {
      const response = await axios.get('http://localhost:3005/api/readtiket');

      assert.strictEqual(response.status, 200);
      console.log('Response Data:', response.data);
    } catch (error) {
      throw error;
    }
  });
});


// //create data


describe('Create Tiket API Test', () => {
  it('should create an article and return status code 200', async () => {
    // Define the data to be sent in the POST request
    const postData = {
        gambar_tiket: 'Tiket contoh.jpg',
        jenis_tiket: 'contoh jenis tiket',
        harga: 'contoh harga',
        keterangan: 'Sample keterangan',
    };

    // Make the POST request
    try {
      const response = await axios.post('http://localhost:3005/api/createtiket', postData);

      // Assertions
      assert.strictEqual(response.status, 200);
      assert.ok(response.data); // Check if response.data is truthy

      console.log('Article created successfully:', response.data);
    } catch (error) {
      console.error('Error creating article:', error.message);
      throw error;
    }
  });
});

//update data (masih error)

describe('Update Artikel API Test', () => {
  it('should update an article and return status code 200', async () => {
    // Assume you have an existing article with an ID that you want to update
    const articleIdToUpdate = 11;

    // Define the data to be sent in the PUT request
    const updateData = {
      gambar: 'updated_gambar.jpg',
      deskripsi: 'updated_contoh',
      judul_artikel: 'Updated Sample Judul Artikel',
    };

    // Make the PUT request to update the article
    try {
      const response = await axios.put(http://localhost:3005/api/updateartikel/${articleIdToUpdate}, updateData);

      // Assertions
      assert.strictEqual(response.status, 200);
assert.ok(response.data); // Check if response.data is truthy
assert.strictEqual(response.data.id, 11); // Adjust based on the actual structure of the response
      console.log('Article updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating article:', error.message);
      throw error;
    }
  });
});


//delete data
describe('Delete Tiket API Test', () => {
  it('should delete an article and return status code 200', async () => {
    // Assume you have a test article ID, replace it with an actual ID from your database
    const tiketIdToDelete = 21; // Replace with a valid article ID

    // Make the DELETE request
    try {
      const response = await axios.delete('http://localhost:3005/api/deletetiket', {
        data: { id_tiket: tiketIdToDelete },
      });

      // Assertions
      assert.strictEqual(response.status, 200);
      assert.ok(response.data); // Check if response.data is truthy

      console.log('Article deleted successfully:', response.data);
    } catch (error) {
      console.error('Error deleting article:', error.message);
      throw error;
    }
  });
});