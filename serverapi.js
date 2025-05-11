

const axios = require('axios');

const BASE_API_URL = 'https://example-api.com/items';

async function searchByKeyword(keyword) {
 
    const response = await axios.get(${BASE_API_URL}?search=${encodeURIComponent(keyword)});
    return response.data.map(item => ({
      display: item.name  item.title  'No name available',
      identifier: item.id,
    }));
 
    console.error('Error searching by keyword:', error.message);
}

async function getItemById(id) {

    const response = await axios.get(${BASE_API_URL}/${id});
    return response.data;

}

module.exports = {
  searchByKeyword,
  getItemById,
}; 
