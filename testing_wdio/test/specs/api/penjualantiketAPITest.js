

import axios from 'axios';
import assert from 'assert';

//get data

describe('API Test', () => {
  beforeEach(function () {
    this.timeout(5000);
  });

  it('should return status code 200', async function () {
    try {
      const response = await axios.get('A');

      assert.strictEqual(response.status, 200);
      console.log('Data berhasil ditampilkan:', response.data);
    } catch (error) {
      throw error;
    }
  });
});



// // //delete data

describe('Delete Penjualan Tiket API Test', () => {
  it('should delete an article and return status code 200', async () => {
    const penjualantiketIdToDelete = 18; 

    try {
      const response = await axios.delete('http://localhost:3009/api/deletepenjualantiket', {
        data: { id: penjualantiketIdToDelete },
      });

      assert.strictEqual(response.status, 200);
      assert.ok(response.data); 
      console.log('Penjualan Tiket berhasil dihapus:', response.data);
    } catch (error) {
      console.error('Error deleting Penjualan Tiket:', error.message);
      throw error;
    }
  });
});
