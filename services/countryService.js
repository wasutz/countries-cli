const axios = require('axios');

const BASE_URL = 'https://restcountries.eu/rest/v2';

module.exports = {
	getCountryByCode(code) {
	  return axios({
	  	baseURL: BASE_URL,
		method: 'get',
		url: `/alpha/${code}`,
	  });
	}
};