

import axios from 'axios';
import assert from 'assert';

//get data

describe('API Test', () => {
  beforeEach(function () {
    this.timeout(5000);
  });

  it('should return status code 200', async function () {
    try {
      const response = await axios.get('http://localhost:3004/api/readdatapengunjung');

      assert.strictEqual(response.status, 200);
      console.log('Response Data:', response.data);
    } catch (error) {
      throw error;
    }
  });
});


//create data


describe('Create Data API Test', () => {
  it('should create an article and return status code 200', async () => {
    const postData = {
        nama_pengunjung: 'contoh nama',
        nik: '12345',
        tempat_tinggal: 'contoh tempat tinggal',
    };

    try {
      const response = await axios.post('http://localhost:3004/api/createdatapengunjung', postData);

      assert.strictEqual(response.status, 200);
      assert.ok(response.data); 

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
    
    const articleIdToUpdate = 11;

    const updateData = {
      gambar: 'updated_gambar.jpg',
      deskripsi: 'updated_contoh',
      judul_artikel: 'Updated Sample Judul Artikel',
    };

    try {
      const response = await axios.put(`http://localhost:3004/api/updateartikel/${articleIdToUpdate}`, updateData);

      assert.strictEqual(response.status, 200);
assert.ok(response.data); 
assert.strictEqual(response.data.id, 11); 
      console.log('Article updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating article:', error.message);
      throw error;
    }
  });
});


//delete data

describe('Delete Data API Test', () => {
  it('should delete an article and return status code 200', async () => {
   
    const dataIdToDelete = 1; 
    try {
      const response = await axios.delete('http://localhost:3004/api/deletedatapengunjung', {
        data: { id_data_pengunjung: dataIdToDelete },
      });

      assert.strictEqual(response.status, 200);
      assert.ok(response.data);
      console.log('Data deleted successfully:', response.data);
    } catch (error) {
      console.error('Error deleting article:', error.message);
      throw error;
    }
  });
});
