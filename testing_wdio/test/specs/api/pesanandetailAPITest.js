

import axios from 'axios';
import assert from 'assert';

//get data

describe('API Test', () => {
  beforeEach(function () {
    this.timeout(5000);
  });

  it('should return status code 200', async function () {
    try {
      const response = await axios.get('http://localhost:3008/api/readpesanandetail');

      assert.strictEqual(response.status, 200);
      console.log('Data berhasil ditampilkan', response.data);
    } catch (error) {
      throw error;
    }
  });
});



// // //delete data

describe('Delete Detail Pesanan API Test', () => {
  it('should delete an Detail Pesanan and return status code 200', async () => {
    const pesanandetailIdToDelete = 131; 

    try {
      const response = await axios.delete(' ', {
        data: { id:pesanandetailIdToDelete },
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
