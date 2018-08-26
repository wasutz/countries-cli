const axios = require('axios');
const ora = require('ora');

module.exports = async (value) => {
	const result = await axios({
    method: 'get',
    url: `https://restcountries.eu/rest/v2/alpha/${value}`,
  }).then(result => {
  	console.log(result.data);
  }).catch(() => {
  	console.log(`Cannot find country code ${value}`);
  });
};