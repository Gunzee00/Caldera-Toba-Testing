

import axios from 'axios';
import assert from 'assert';

//get data

describe('API Test', () => {
  beforeEach(function () {
    this.timeout(5000);
  });

  it('should return status code 200', async function () {
    try {
      const response = await axios.get('http://localhost:3007/api/readpesanan');

      assert.strictEqual(response.status, 200);
      console.log('Data berhasil ditampilkan', response.data);
    } catch (error) {
      throw error;
    }
  });
});



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
      console.log('Pesanan berhasil dihapus:', response.data);
    } catch (error) {
      console.error('Error deleting article:', error.message);
      throw error;
    }
  });
});
