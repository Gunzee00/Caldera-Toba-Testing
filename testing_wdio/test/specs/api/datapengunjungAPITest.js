

import axios from 'axios';
import assert from 'assert';

// //get data

describe('API Test', () => {
  beforeEach(function () {
    this.timeout(5000);
  });

  it('should return status code 200', async function () {
    try {
      const response = await axios.get('http://localhost:3004/api/readdatapengunjung');

      assert.strictEqual(response.status, 200);
      console.log('Data berhasil ditampilkan:', response.data);
    } catch (error) {
      throw error;
    }
  });
});


// //create data


describe('Create Data API Test', () => {
  const testCases = [
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: 'contoh nama',
        nik: '12345',
        tempat_tinggal: 'contoh tempat tinggal',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: 'contoh nama',
        nik: 'contoh nik',
        tempat_tinggal: 'contoh tempat tinggal',
      },
    },
    {
      description: 'should create an article with numeric characters',
      postData: {
        nama_pengunjung: '',
        nik: 'contoh nik',
        tempat_tinggal: 'contoh tempat tinggal',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: 'contoh nama',
        nik: '',
        tempat_tinggal: 'contoh tempat tinggal',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: 'contoh nama',
        nik: 'contoh nik',
        tempat_tinggal: '',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '',
        nik: '',
        tempat_tinggal: 'contoh tempat tinggal',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: 'contoh nama',
        nik: '',
        tempat_tinggal: '',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '',
        nik: 'contoh nik',
        tempat_tinggal: '',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '',
        nik: '',
        tempat_tinggal: '',
      },
    },
    ///////
    
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '12345',
        nik: '12345',
        tempat_tinggal: '12345',
      },
    },
    {
      description: 'should create an article with numeric characters',
      postData: {
        nama_pengunjung: '',
        nik: '12345',
        tempat_tinggal: '12345',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '12345',
        nik: '',
        tempat_tinggal: '12345',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '12345',
        nik: '12345',
        tempat_tinggal: '',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '',
        nik: '',
        tempat_tinggal: '12345',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '12345',
        nik: '',
        tempat_tinggal: '',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '',
        nik: '12345',
        tempat_tinggal: '',
      },
    },
    
    ////

    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '!@#!@%$',
        nik: '!@#!@%$',
        tempat_tinggal: '!@#!@%$',
      },
    },
    {
      description: 'should create an article with numeric characters',
      postData: {
        nama_pengunjung: '',
        nik: '!@#!@%$',
        tempat_tinggal: '!@#!@%$',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '!@#!@%$',
        nik: '',
        tempat_tinggal: '!@#!@%$',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '!@#!@%$',
        nik: '!@#!@%$',
        tempat_tinggal: '',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '',
        nik: '',
        tempat_tinggal: '!@#!@%$',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '!@#!@%$',
        nik: '',
        tempat_tinggal: '',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '',
        nik: '!@#!@%$',
        tempat_tinggal: '',
      },
    },

  ];

  testCases.forEach((testCase) => {
    it(testCase.description, async () => {
      try {
        const response = await axios.post('http://localhost:3004/api/createdatapengunjung', testCase.postData);

        assert.strictEqual(response.status, 200);
        assert.ok(response.data);

        console.log('Article created successfully:', response.data);
      } catch (error) {
        console.error('Error creating article:', error.message);
        throw error;
      }
    });
  });
});


// //update data (masih error)

describe('Update Data Pengunjung API Test', () => {
  const dataIdToUpdate = 1; // Update this with the correct data ID

  const testCases = [
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: 'contoh nama',
        nik: '12345',
        tempat_tinggal: 'contoh tempat tinggal',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: 'contoh nama',
        nik: 'contoh nik',
        tempat_tinggal: 'contoh tempat tinggal',
      },
    },
    {
      description: 'should create an article with numeric characters',
      postData: {
        nama_pengunjung: '',
        nik: 'contoh nik',
        tempat_tinggal: 'contoh tempat tinggal',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: 'contoh nama',
        nik: '',
        tempat_tinggal: 'contoh tempat tinggal',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: 'contoh nama',
        nik: 'contoh nik',
        tempat_tinggal: '',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '',
        nik: '',
        tempat_tinggal: 'contoh tempat tinggal',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: 'contoh nama',
        nik: '',
        tempat_tinggal: '',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '',
        nik: 'contoh nik',
        tempat_tinggal: '',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '',
        nik: '',
        tempat_tinggal: '',
      },
    },
    ///////
    
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '12345',
        nik: '12345',
        tempat_tinggal: '12345',
      },
    },
    {
      description: 'should create an article with numeric characters',
      postData: {
        nama_pengunjung: '',
        nik: '12345',
        tempat_tinggal: '12345',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '12345',
        nik: '',
        tempat_tinggal: '12345',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '12345',
        nik: '12345',
        tempat_tinggal: '',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '',
        nik: '',
        tempat_tinggal: '12345',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '12345',
        nik: '',
        tempat_tinggal: '',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '',
        nik: '12345',
        tempat_tinggal: '',
      },
    },
    
    ////

    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '!@#!@%$',
        nik: '!@#!@%$',
        tempat_tinggal: '!@#!@%$',
      },
    },
    {
      description: 'should create an article with numeric characters',
      postData: {
        nama_pengunjung: '',
        nik: '!@#!@%$',
        tempat_tinggal: '!@#!@%$',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '!@#!@%$',
        nik: '',
        tempat_tinggal: '!@#!@%$',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '!@#!@%$',
        nik: '!@#!@%$',
        tempat_tinggal: '',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '',
        nik: '',
        tempat_tinggal: '!@#!@%$',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '!@#!@%$',
        nik: '',
        tempat_tinggal: '',
      },
    },
    {
      description: 'should create an article with alphanumeric characters',
      postData: {
        nama_pengunjung: '',
        nik: '!@#!@%$',
        tempat_tinggal: '',
      },
    },
    // Add more test cases as needed
  ];

  testCases.forEach((testCase, index) => {
    const { description, postData } = testCase;

    it(description, async () => {
      try {
        const response = await axios.put(`http://localhost:3004/api/updatedatapengunjung/${dataIdToUpdate}`, postData);

        assert.strictEqual(response.status, 200);
        assert.ok(response.data); // Ensure response.data is not undefined

        console.log(`${description}: Data pengunjung updated successfully with test case ${index + 1}:`, response.data);
      } catch (error) {
        console.error(`${description}: Error updating data pengunjung with test case ${index + 1}:`, error.message);
        if (error.response) {
          console.error('Server responded with:', error.response.status, error.response.data);
        }
        throw error;
      }
    });
  });
});




// //delete data

describe('Delete Data API Test', () => {
  it('should delete an article and return status code 200', async () => {
   
    const dataIdToDelete = 2; 
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
