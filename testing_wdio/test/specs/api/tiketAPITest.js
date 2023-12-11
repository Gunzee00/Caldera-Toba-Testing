import axios from 'axios';
import assert from 'assert';

// Get data
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

// Create data
describe('Create Tiket API Test', () => {
  const testCases = [
    {
      gambar_tiket: 'Tiket contoh.jpg',
      jenis_tiket: 'contoh jenis tiket',
      harga: 'contoh harga',
      keterangan: 'Sample keterangan',
      stok: '1',
    },
    {
      gambar_tiket: '123.jpg', 
      jenis_tiket: 'bioskop', 
      harga: '50000', 
      keterangan: '',
      stok: '2',
    },
    {
      gambar_tiket: '', 
      jenis_tiket: 'kereta api', 
      harga: '100000', 
      keterangan: '/',
    },
    {
      gambar_tiket: 'abc.png', 
      jenis_tiket: '123', 
      harga: '$$$', 
      keterangan: '?',
      stok: '3',
    },
    {
      gambar_tiket: 'tiket.pdf', 
      jenis_tiket: 'pesawat', 
      harga: '1500000', 
      keterangan: 'Jakarta - Denpasar',
      stok: '4',
    },
    {
      gambar_tiket: '{}', 
      jenis_tiket: '()', 
      harga: '#', 
      keterangan: ';',
      stok: '4',
    },
    {
      gambar_tiket: '????.png', 
      jenis_tiket: '????????', 
      harga: '??????', 
      keterangan: '????',
      stok: '???',
    },
    {
      gambar_tiket: 'tiket123.jpg', 
      jenis_tiket: 'bioskop', 
      harga: '125000', 
      keterangan: 'Film Spiderman',
      stok: '0'
    },
    {
      gambar_tiket: '', 
      jenis_tiket: '', 
      harga: '', 
      keterangan: '',
      stok:'',
    },
  ];

  testCases.forEach((testCase, index) => {
    it(`should create an article and return status code 200 - Test Case ${index + 1}`, async () => {
      try {
        const response = await axios.post('http://localhost:3005/api/createtiket', testCase);

        // Assertions
        assert.strictEqual(response.status, 200);
        assert.ok(response.data); // Check if response.data is truthy

        console.log(`Tiket created successfully - Test Case ${index + 1}:`, response.data);
      } catch (error) {
        console.error(`Error creating tiket - Test Case ${index + 1}:`, error.message);
        throw error;
      }
    });
  });
});

// Update data (fixing the error)
describe('Update Tiket API Test', () => {
  it('should update a tiket and return status code 200', async () => {
      // Assume you have an existing tiket with an ID that you want to update
      const tiketIdToUpdate = 11;

      // Define the data to be sent in the PUT request
      const updateData = {
          jenis_tiket: 'Updated Jenis Tiket',
          gambar_tiket: 'updated_gambar_tiket.jpg',
          harga: 100, // replace with the desired updated value
          stok: 50,   // replace with the desired updated value
          keterangan: 'Updated Keterangan',
      };

      // Make the PUT request to update the tiket
      try {
          const response = await axios.put(`http://localhost:3005/api/updatetiket/${tiketIdToUpdate}`, updateData);

          // Assertions
          assert.strictEqual(response.status, 200);
          assert.ok(response.data); // Check if response.data is truthy

          // Adjust based on the actual structure of the response
          if (response.data && response.data.id !== undefined) {
              assert.strictEqual(response.data.id, tiketIdToUpdate);
          } else {
              throw new Error('Invalid response structure. Unable to verify tiket update.');
          }

          console.log('Tiket updated successfully:', response.data);
      } catch (error) {
          console.error('Error updating tiket:', error.message);
          throw error;
      }
  });
});

// Delete data
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
