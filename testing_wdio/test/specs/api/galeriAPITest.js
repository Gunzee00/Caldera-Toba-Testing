

import axios from 'axios';
import assert from 'assert';

//get data

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

//create data
// describe('Create Galeri API Test', () => {
//   const postData = [
//     {
//       gambar_galeri: '',
//       judul_galeri: '',
//       deskripsi_galeri: '',
//     },
//     {
//       gambar_galeri: 'image2.jpg',
//       judul_galeri: '@#$%^&*()',
//       deskripsi_galeri: '1234567890',
//     },
//     {
//       gambar_galeri: 'image3.jpg',
//       judul_galeri: '',
//       deskripsi_galeri: '!@#$%^&*()_+',
//     },
//     {
//       gambar_galeri: 'image4.jpg',
//       judul_galeri: 'Combination123@#$',
//       deskripsi_galeri: 'SpecialChars!@#$%^&*()_+123',
//     },
//     {
//       gambar_galeri: 'image5.jpg',
//       judul_galeri: 'TwoSymbolsOneDigit!@#5',
//       deskripsi_galeri: 'ComplexChars#@!123',
//     },
//     {
//       gambar_galeri: '',
//       judul_galeri: '!@#Symbols123',
//       deskripsi_galeri: 'Numbers123456',
//     },
//     {
//       gambar_galeri: 'image6.jpg',
//       judul_galeri: '123ABC456',
//       deskripsi_galeri: '789XYZ012',
//     },
//     {
//       gambar_galeri: '',
//       judul_galeri: 'SpecialChars!@#$%^&*()_+',
//       deskripsi_galeri: '',
//     },
//     {
//       gambar_galeri: 'image7.jpg',
//       judul_galeri: 'DuplicateNumbers11',
//       deskripsi_galeri: 'DuplicateNumbers11',
//     },
//     {
//       gambar_galeri: 'image8.jpg',
//       judul_galeri: '12345',
//       deskripsi_galeri: '12345',
//     },
//     {
//       gambar_galeri: 'image9.jpg',
//       judul_galeri: '!@#%^&*()',
//       deskripsi_galeri: '!@#%^&*()',
//     },
//     {
//       gambar_galeri: 'image10.jpg',
//       judul_galeri: 'Numbers123',
//       deskripsi_galeri: 'Symbols!@#$',
//     },
//     {
//       gambar_galeri: '',
//       judul_galeri: '',
//       deskripsi_galeri: '',
//     },
//     {
//       gambar_galeri: 'image11.jpg',
//       judul_galeri: 'A1B2C3',
//       deskripsi_galeri: '@#*Symbols',
//     },
//     {
//       gambar_galeri: 'image12.jpg',
//       judul_galeri: '123ABC',
//       deskripsi_galeri: '',
//     },
//     {
//       gambar_galeri: 'image13.jpg',
//       judul_galeri: '',
//       deskripsi_galeri: 'Special!@#Chars',
//     },
//     {
//       gambar_galeri: 'image14.jpg',
//       judul_galeri: 'Complex!@#Symbols',
//       deskripsi_galeri: '123456789',
//     },
//     {
//       gambar_galeri: 'image15.jpg',
//       judul_galeri: 'EmptyImageName.jpg',
//       deskripsi_galeri: 'Empty Description',
//     },
//     // Additional test cases
//     {
//       gambar_galeri: 'image16.jpg',
//       judul_galeri: '!@#$%^&*()',
//       deskripsi_galeri: '',
//     },
//     {
//       gambar_galeri: '',
//       judul_galeri: 'Alphanumeric123',
//       deskripsi_galeri: 'Symbol!@#',
//     },
//     {
//       gambar_galeri: 'image17.jpg',
//       judul_galeri: '123456789',
//       deskripsi_galeri: '!@#$%^&*()',
//     },
//     {
//       gambar_galeri: 'image18.jpg',
//       judul_galeri: 'SymbolChars!@#$%^&*()',
//       deskripsi_galeri: 'Empty Description',
//     },
//     {
//       gambar_galeri: 'image19.jpg',
//       judul_galeri: '12345',
//       deskripsi_galeri: 'Symbol!@#$',
//     },
//   ];

//   postData.forEach((data, index) => {
//     it(`should create an article ${index + 1} and return status code 200`, async () => {
//       try {
//         const response = await axios.post('http://localhost:3001/api/creategaleri', data);

//         assert.strictEqual(response.status, 200);
//         assert.ok(response.data);

//         console.log(`Article ${index + 1} created successfully:`, response.data);
//       } catch (error) {
//         console.error(`Error creating article ${index + 1}:`, error.message);
//         throw error;
//       }
//     });
//   });
// });

//update data 
// describe('Update Galeri API Test', () => {
//   // Test Case 1
//   it('should update a gallery with ID 4 and return status code 200', async () => {
//     const galeriIdToUpdate = 4;
//     const updateData = {
//       gambar_galeri: 'new_image_4.jpg',
//       deskripsi_galeri: 'Updated description for ID 4',
//       judul_galeri: 'Updated Title 4',
//     };

//     try {
//       const response = await axios.put(`http://localhost:3001/api/updategaleri/${galeriIdToUpdate}`, updateData);

//       assert.strictEqual(response.status, 200);
//       assert.ok(response.data);
//       assert.strictEqual(response.data.gambar_galeri, updateData.gambar_galeri);
//       assert.strictEqual(response.data.deskripsi_galeri, updateData.deskripsi_galeri);
//       assert.strictEqual(response.data.judul_galeri, updateData.judul_galeri);

//       console.log(`Gallery with ID ${galeriIdToUpdate} updated successfully:`, response.data);
//     } catch (error) {
//       console.error(`Error updating gallery with ID ${galeriIdToUpdate}:`, error.message);
//       if (error.response) {
//         console.error('Server responded with:', error.response.status, error.response.data);
//       }
//       throw error;
//     }
//   });

//   // Test Case 2
//   it('should update a gallery with ID 18 and return status code 200', async () => {
//     const galeriIdToUpdate = 18;
//     const updateData = {
//       gambar_galeri: 'new_image_18a.jpg',
//       deskripsi_galeri: 'Updated description for ID 18a',
//       judul_galeri: 'Updated Title 18a',
//     };

//     try {
//       const response = await axios.put(`http://localhost:3001/api/updategaleri/${galeriIdToUpdate}`, updateData);

//       assert.strictEqual(response.status, 200);
//       assert.ok(response.data);
//       assert.strictEqual(response.data.gambar_galeri, updateData.gambar_galeri);
//       assert.strictEqual(response.data.deskripsi_galeri, updateData.deskripsi_galeri);
//       assert.strictEqual(response.data.judul_galeri, updateData.judul_galeri);

//       console.log(`Gallery with ID ${galeriIdToUpdate} updated successfully:`, response.data);
//     } catch (error) {
//       console.error(`Error updating gallery with ID ${galeriIdToUpdate}:`, error.message);
//       if (error.response) {
//         console.error('Server responded with:', error.response.status, error.response.data);
//       }
//       throw error;
//     }
//   });

//   // Test Case 3
//   it('should update a gallery with ID 19 and return status code 200', async () => {
//     const galeriIdToUpdate = 19;
//     const updateData = {
//       gambar_galeri: 'new_image_19.jpg',
//       deskripsi_galeri: 'Updated description for ID 19',
//       judul_galeri: 'Updated Title 19',
//     };

//     try {
//       const response = await axios.put(`http://localhost:3001/api/updategaleri/${galeriIdToUpdate}`, updateData);

//       assert.strictEqual(response.status, 200);
//       assert.ok(response.data);
//       assert.strictEqual(response.data.gambar_galeri, updateData.gambar_galeri);
//       assert.strictEqual(response.data.deskripsi_galeri, updateData.deskripsi_galeri);
//       assert.strictEqual(response.data.judul_galeri, updateData.judul_galeri);

//       console.log(`Gallery with ID ${galeriIdToUpdate} updated successfully:`, response.data);
//     } catch (error) {
//       console.error(`Error updating gallery with ID ${galeriIdToUpdate}:`, error.message);
//       if (error.response) {
//         console.error('Server responded with:', error.response.status, error.response.data);
//       }
//       throw error;
//     }
//   });

//   // Test Case 4
//   it('should update a gallery with ID 20 and return status code 200', async () => {
//     const galeriIdToUpdate = 20;
//     const updateData = {
//       gambar_galeri: 'new_image_20.jpg',
//       deskripsi_galeri: 'Updated description for ID 20',
//       judul_galeri: 'Updated Title 20',
//     };

//     try {
//       const response = await axios.put(`http://localhost:3001/api/updategaleri/${galeriIdToUpdate}`, updateData);

//       assert.strictEqual(response.status, 200);
//       assert.ok(response.data);
//       assert.strictEqual(response.data.gambar_galeri, updateData.gambar_galeri);
//       assert.strictEqual(response.data.deskripsi_galeri, updateData.deskripsi_galeri);
//       assert.strictEqual(response.data.judul_galeri, updateData.judul_galeri);

//       console.log(`Gallery with ID ${galeriIdToUpdate} updated successfully:`, response.data);
//     } catch (error) {
//       console.error(`Error updating gallery with ID ${galeriIdToUpdate}:`, error.message);
//       if (error.response) {
//         console.error('Server responded with:', error.response.status, error.response.data);
//       }
//       throw error;
//     }
//   });

//   // Test Case 5
//   it('should update a gallery with ID 21 and return status code 200', async () => {
//     const galeriIdToUpdate = 21;
//     const updateData = {
//       gambar_galeri: 'new_image_21.jpg',
//       deskripsi_galeri: 'Updated description for ID 21',
//       judul_galeri: 'Updated Title 21',
//     };

//     try {
//       const response = await axios.put(`http://localhost:3001/api/updategaleri/${galeriIdToUpdate}`, updateData);

//       assert.strictEqual(response.status, 200);
//       assert.ok(response.data);
//       assert.strictEqual(response.data.gambar_galeri, updateData.gambar_galeri);
//       assert.strictEqual(response.data.deskripsi_galeri, updateData.deskripsi_galeri);
//       assert.strictEqual(response.data.judul_galeri, updateData.judul_galeri);

//       console.log(`Gallery with ID ${galeriIdToUpdate} updated successfully:`, response.data);
//     } catch (error) {
//       console.error(`Error updating gallery with ID ${galeriIdToUpdate}:`, error.message);
//       if (error.response) {
//         console.error('Server responded with:', error.response.status, error.response.data);
//       }
//       throw error;
//     }
//   });

//   // Test Case 6
//   it('should update a gallery with ID 21 and return status code 200', async () => {
//     const galeriIdToUpdate = 22;
//     const updateData = {
//       gambar_galeri: 'new_image_22.jpg',
//       deskripsi_galeri: 'Updated description for ID 22',
//       judul_galeri: 'Updated Title 22',
//     };

//     try {
//       const response = await axios.put(`http://localhost:3001/api/updategaleri/${galeriIdToUpdate}`, updateData);

//       assert.strictEqual(response.status, 200);
//       assert.ok(response.data);
//       assert.strictEqual(response.data.gambar_galeri, updateData.gambar_galeri);
//       assert.strictEqual(response.data.deskripsi_galeri, updateData.deskripsi_galeri);
//       assert.strictEqual(response.data.judul_galeri, updateData.judul_galeri);

//       console.log(`Gallery with ID ${galeriIdToUpdate} updated successfully:`, response.data);
//     } catch (error) {
//       console.error(`Error updating gallery with ID ${galeriIdToUpdate}:`, error.message);
//       if (error.response) {
//         console.error('Server responded with:', error.response.status, error.response.data);
//       }
//       throw error;
//     }
//   });

//   //test case 7
//   it('should update a gallery with ID 21 and return status code 200', async () => {
//     const galeriIdToUpdate = 23;
//     const updateData = {
//       gambar_galeri: 'new_image_23.jpg',
//       deskripsi_galeri: 'Updated description for ID 23',
//       judul_galeri: 'Updated Title 21',
//     };

//     try {
//       const response = await axios.put(`http://localhost:3001/api/updategaleri/${galeriIdToUpdate}`, updateData);

//       assert.strictEqual(response.status, 200);
//       assert.ok(response.data);
//       assert.strictEqual(response.data.gambar_galeri, updateData.gambar_galeri);
//       assert.strictEqual(response.data.deskripsi_galeri, updateData.deskripsi_galeri);
//       assert.strictEqual(response.data.judul_galeri, updateData.judul_galeri);

//       console.log(`Gallery with ID ${galeriIdToUpdate} updated successfully:`, response.data);
//     } catch (error) {
//       console.error(`Error updating gallery with ID ${galeriIdToUpdate}:`, error.message);
//       if (error.response) {
//         console.error('Server responded with:', error.response.status, error.response.data);
//       }
//       throw error;
//     }
//   });

//   // test case 8
//   it('should update a gallery with ID 21 and return status code 200', async () => {
//     const galeriIdToUpdate = 24;
//     const updateData = {
//       gambar_galeri: 'new_image_24.jpg',
//       deskripsi_galeri: 'Updated description for ID 24',
//       judul_galeri: 'Updated Title 24',
//     };

//     try {
//       const response = await axios.put(`http://localhost:3001/api/updategaleri/${galeriIdToUpdate}`, updateData);

//       assert.strictEqual(response.status, 200);
//       assert.ok(response.data);
//       assert.strictEqual(response.data.gambar_galeri, updateData.gambar_galeri);
//       assert.strictEqual(response.data.deskripsi_galeri, updateData.deskripsi_galeri);
//       assert.strictEqual(response.data.judul_galeri, updateData.judul_galeri);

//       console.log(`Gallery with ID ${galeriIdToUpdate} updated successfully:`, response.data);
//     } catch (error) {
//       console.error(`Error updating gallery with ID ${galeriIdToUpdate}:`, error.message);
//       if (error.response) {
//         console.error('Server responded with:', error.response.status, error.response.data);
//       }
//       throw error;
//     }
//   });

//   //test case 9
//   it('should update a gallery with ID 21 and return status code 200', async () => {
//     const galeriIdToUpdate = 25;
//     const updateData = {
//       gambar_galeri: 'new_image_25.jpg',
//       deskripsi_galeri: 'Updated description for ID 25',
//       judul_galeri: 'Updated Title 25',
//     };

//     try {
//       const response = await axios.put(`http://localhost:3001/api/updategaleri/${galeriIdToUpdate}`, updateData);

//       assert.strictEqual(response.status, 200);
//       assert.ok(response.data);
//       assert.strictEqual(response.data.gambar_galeri, updateData.gambar_galeri);
//       assert.strictEqual(response.data.deskripsi_galeri, updateData.deskripsi_galeri);
//       assert.strictEqual(response.data.judul_galeri, updateData.judul_galeri);

//       console.log(`Gallery with ID ${galeriIdToUpdate} updated successfully:`, response.data);
//     } catch (error) {
//       console.error(`Error updating gallery with ID ${galeriIdToUpdate}:`, error.message);
//       if (error.response) {
//         console.error('Server responded with:', error.response.status, error.response.data);
//       }
//       throw error;
//     }
//   });

//   // test case 10
//   it('should update a gallery with ID 21 and return status code 200', async () => {
//     const galeriIdToUpdate = 26;
//     const updateData = {
//       gambar_galeri: 'new_image_26.jpg',
//       deskripsi_galeri: 'Updated description for ID 26',
//       judul_galeri: 'Updated Title 26',
//     };

//     try {
//       const response = await axios.put(`http://localhost:3001/api/updategaleri/${galeriIdToUpdate}`, updateData);

//       assert.strictEqual(response.status, 200);
//       assert.ok(response.data);
//       assert.strictEqual(response.data.gambar_galeri, updateData.gambar_galeri);
//       assert.strictEqual(response.data.deskripsi_galeri, updateData.deskripsi_galeri);
//       assert.strictEqual(response.data.judul_galeri, updateData.judul_galeri);

//       console.log(`Gallery with ID ${galeriIdToUpdate} updated successfully:`, response.data);
//     } catch (error) {
//       console.error(`Error updating gallery with ID ${galeriIdToUpdate}:`, error.message);
//       if (error.response) {
//         console.error('Server responded with:', error.response.status, error.response.data);
//       }
//       throw error;
//     }
//   });
//   // Continue Test Cases for IDs 22 to 31...
// });

//delete data
describe('Delete Galeri API Test', () => {
  it('should delete an article and return status code 200', async () => {
    const galeriIdToDelete =33; 

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