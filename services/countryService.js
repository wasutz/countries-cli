const axios = require('axios');

const BASE_URL = 'https://restcountries.eu/rest/v2';

module.exports = {
	getCountryByCode(code) {
	  return axios({
	  	baseURL: BASE_URL,
		method: 'get',
		url: `/alpha/${code}`,
	  }).then(result => result.data);
	},
	getCountriesByName(name) {
	  return axios({
	  	baseURL: BASE_URL,
		method: 'get',
		url: `/name/${name}`,
	  }).then(result => result.data);
	}
};