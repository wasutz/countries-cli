const ora = require('ora');
const countryService = require('../services/countryService');

module.exports = async (value) => {
 	const spinner = ora().start();

 	await countryService.getCountryByCode(value).then(result => {
		spinner.stop();
		
		console.log(`Name: ${result.data.name}`);
		console.log(`Capital: ${result.data.capital}`);
		console.log(`Region: ${result.data.region}`);
		console.log(`Population: ${result.data.population}`);
    }).catch(() => {
		spinner.stop();
		console.log(`Cannot find country code ${value}`);
  	});
};