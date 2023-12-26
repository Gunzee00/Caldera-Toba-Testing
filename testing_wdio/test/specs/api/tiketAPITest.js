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
          console.error('Test failed with error:', error.message);
          throw error;
      }
  });
});


// Create data
describe('Create Data API Test', () => {
  const testCases = [
    {
      description: 'seharusnya membuat data dengan karakter alfanumerik',
      postData: {
        gambar_tiket: ' ',
        jenis_tiket: ' ',
        harga: ' ',
        keterangan: ' ',
        stok: ' ',    
      },
    },
    {
      description: 'seharusnya membuat data dengan karakter numerik',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
        jenis_tiket: 'contoh jenis tiket',
        harga: 'contoh harga',
        keterangan: 'Sample keterangan',
        stok: 'satu',
      },
    },  
    {
      description: 'seharusnya membuat data dengan gambar kosong',
      postData: {
        gambar_tiket: '',
        jenis_tiket: 'contoh jenis tiket',
        harga: 'contoh harga',
        keterangan: 'Sample keterangan',
        stok: 'satu',
      },
    },
    {
      description: 'seharusnya membuat data dengan jenis tiket kosong',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
        jenis_tiket: '',
        harga: 'contoh harga',
        keterangan: 'Sample keterangan',
        stok: 'satu',
      },
    },
    {
      description: 'seharusnya membuat data dengan harga kosong',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
        jenis_tiket: 'contoh jenis tiket',
        harga: '',
        keterangan: 'Sample keterangan',
        stok: 'satu',
      },
    },
    {
      description: 'seharusnya membuat data dengan keterangan kosong',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
        jenis_tiket: 'contoh jenis tiket',
        harga: 'harga',
        keterangan: '',
        stok: 'satu',
      },
    },
    {
      description: 'seharusnya membuat data dengan stok kosong',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
        jenis_tiket: 'contoh jenis tiket',
        harga: 'harga',
        keterangan: 'keterangan',
        stok: '',
      },
    },
    {
      description: 'seharusnya membuat data dengan karakter alfanumerik kosong',
      postData: {
        gambar_tiket: ' ',
        jenis_tiket: ' ',
        harga: ' ',
        keterangan: ' ',
        stok: ' ',  
      },
    },
    {
      description: 'seharusnya membuat data dengan karakter alfanumerik',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
        jenis_tiket: '12345',
        harga: '1234',
        keterangan: '12345',
        stok: '12345',  
      },
    },
    {
      description: 'seharusnya membuat data dengan karakter alfanumerik khusus',
      postData: {
        gambar_tiket: '!@#$%',
        jenis_tiket: '!@#$%',
        harga: '!@#$%',
        keterangan: '!@#$%',
        stok: '!@#$%',  
      },
    },
  ];

  testCases.forEach((testCase) => {
    it(testCase.description, async () => {
      try {
        const response = await axios.post('http://localhost:3005/api/createtiket', testCase.postData);

        assert.strictEqual(response.status, 200);
        assert.ok(response.data);

        console.log('Data created successfully:', response.data);
      } catch (error) {
        console.error('Error creating data:', error.message);
      }
    });
  });
});

 

// Update data 
describe('Update Tiket API Test', () => {
  const tiketIdToUpdate = 11; // Update this with the correct article ID

  const testCases = [
    {
      description: 'seharusnya membuat data dengan karakter alfanumerik',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
        jenis_tiket: 'contoh jenis',
        harga: 'harga',
        keterangan: 'Sample keterangan',
        stok: 'satu',  
      },
    },
    {
      description: 'seharusnya membuat data dengan karakter numerik',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
        jenis_tiket: 'contoh jenis tiket',
        harga: 'contoh harga',
        keterangan: 'Sample keterangan',
        stok: 'satu',
      },
    },
    {
      description: 'seharusnya membuat data dengan gambar kosong',
      postData: {
        gambar_tiket: '',
        jenis_tiket: 'contoh jenis tiket',
        harga: 'contoh harga',
        keterangan: 'Sample keterangan',
        stok: 'satu',
      },
    },
    {
      description: 'seharusnya membuat data dengan jenis tiket kosong',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
        jenis_tiket: '',
        harga: 'contoh harga',
        keterangan: 'Sample keterangan',
        stok: 'satu',
      },
    },
    {
      description: 'seharusnya membuat data dengan harga kosong',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
        jenis_tiket: 'contoh jenis tiket',
        harga: '',
        keterangan: 'Sample keterangan',
        stok: 'satu',
      },
    },
    {
      description: 'seharusnya membuat data dengan keterangan kosong',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
        jenis_tiket: 'contoh jenis tiket',
        harga: 'harga',
        keterangan: '',
        stok: 'satu',
      },
    },
    {
      description: 'seharusnya membuat data dengan stok kosong',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
        jenis_tiket: 'contoh jenis tiket',
        harga: 'harga',
        keterangan: 'keterangan',
        stok: '',
      },
    },
    {
      description: 'seharusnya membuat data dengan karakter alfanumerik kosong',
      postData: {
        gambar_tiket: ' ',
        jenis_tiket: ' ',
        harga: ' ',
        keterangan: ' ',
        stok: ' ',  
      },
    },
    {
      description: 'seharusnya membuat data dengan karakter alfanumerik',
      postData: {
        gambar_tiket: 'Tiket contoh.jpg',
        jenis_tiket: '12345',
        harga: '1234',
        keterangan: '12345',
        stok: '12345',  
      },
    },
    {
      description: 'seharusnya membuat data dengan karakter alfanumerik khusus',
      postData: {
        gambar_tiket: '!@#$%',
        jenis_tiket: '!@#$%',
        harga: '!@#$%',
        keterangan: '!@#$%',
        stok: '!@#$%',  
      },
    },
  ];

  testCases.forEach((testCase, index) => {
    const { description, postData } = testCase;

    it(description, async () => {
      try {
        const response = await axios.put(`http://localhost:3005/api/updatetiket/${tiketIdToUpdate}`, postData);

        assert.strictEqual(response.status, 200);
        assert.ok(response.data); // Ensure response.data is not undefined

        console.log(`${description}: Article updated successfully with test case ${index + 1}:`, response.data);
      } catch (error) {
        console.error(`${description}: Error updating article with test case ${index + 1}:`, error.message);
        if (error.response) {
          console.error('Server responded with:', error.response.status, error.response.data);
        }
        throw error;
      }
    });
  });
});


// // // Delete data
describe('Delete Tiket API Test', () => {
  it('should delete an article and return status code 200', async () => {
    // Assume you have a test article ID, replace it with an actual ID from your database
    const tiketIdToDelete = 68; // Replace with a valid article ID

    // Make the DELETE request
    try {
      const response = await axios.delete('http://localhost:3005/api/deletetiket', {
        data: { id_tiket: tiketIdToDelete },
      });

      // Assertions
      assert.strictEqual(response.status, 200);
      assert.ok(response.data); // Check if response.data is truthy

      console.log('Artikel berhasil dihapus :', response.data);
    } catch (error) {
      console.error('Error deleting article:', error.message);
      throw error;
    }
  });
});

