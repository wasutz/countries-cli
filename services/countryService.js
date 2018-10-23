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
    },
    
    getCountriesByCapital(capital) {
      return axios({
        baseURL: BASE_URL,
        method: 'get',
        url: `/capital/${capital}`,
      }).then(result => result.data);
    },

    getCountriesByCurrency(currency) {
      return axios({
        baseURL: BASE_URL,
        method: 'get',
        url: `/currency/${currency}`,
      }).then(result => result.data);
    }
};
