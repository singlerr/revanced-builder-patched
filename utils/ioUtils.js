const fetch = require('node-fetch');

module.exports = async function fetchCompatible(url){
  return fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.231 Mobile Safari/537.36'
      }
  })
};