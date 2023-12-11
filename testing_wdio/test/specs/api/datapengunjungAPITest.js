

import axios from 'axios';
import assert from 'assert';

// //get data

// describe('API Test', () => {
//   beforeEach(function () {
//     this.timeout(5000);
//   });

//   it('should return status code 200', async function () {
//     try {
//       const response = await axios.get('http://localhost:3004/api/readdatapengunjung');

//       assert.strictEqual(response.status, 200);
//       console.log('Response Data:', response.data);
//     } catch (error) {
//       throw error;
//     }
//   });
// });


// //create data


// describe('Create Data API Test', () => {
//   it('should create an article and return status code 200', async () => {
//     const postData = {
//         nama_pengunjung: 'contoh nama',
//         nik: '12345',
//         tempat_tinggal: 'contoh tempat tinggal',
//     };

//     try {
//       const response = await axios.post('http://localhost:3004/api/createdatapengunjung', postData);

//       assert.strictEqual(response.status, 200);
//       assert.ok(response.data); 

//       console.log('Article created successfully:', response.data);
//     } catch (error) {
//       console.error('Error creating article:', error.message);
//       throw error;
//     }
//   });
// });

// //update data (masih error)
describe('Update Data Pengunjung API Test', () => {
  it('should update an article and return status code 200', async () => {
    const dataIdToUpdate = 3; // Update this with the correct article ID

    const updateData = {
      nama_pengunjung: 'updated_nama',
      nik: 'updated_nik',
      tempat_tinggal: 'Updated tempat tinggal',
    };

    try {
      const response = await axios.put(`http://localhost:3004/api/updatedatapengunjung/${dataIdToUpdate}`, updateData);

      assert.strictEqual(response.status, 200);
      assert.ok(response.data); // Ensure response.data is not undefined

      console.log('Data pengunjung updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating article:', error.message);
      if (error.response) {
        // Log additional information if available
        console.error('Server responded with:', error.response.status, error.response.data);
      }
      throw error;
    }
  });
});


// //delete data

// describe('Delete Data API Test', () => {
//   it('should delete an article and return status code 200', async () => {
   
//     const dataIdToDelete = 1; 
//     try {
//       const response = await axios.delete('http://localhost:3004/api/deletedatapengunjung', {
//         data: { id_data_pengunjung: dataIdToDelete },
//       });

//       assert.strictEqual(response.status, 200);
//       assert.ok(response.data);
//       console.log('Data deleted successfully:', response.data);
//     } catch (error) {
//       console.error('Error deleting article:', error.message);
//       throw error;
//     }
//   });
// });
