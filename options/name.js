const ora = require('ora');
const countryService = require('../services/countryService');
const { printCountries } = require('../utils/print');

module.exports = async name => {
 	const spinner = ora().start();

 	await countryService.getCountriesByName(name).then(countries => {
		spinner.stop();
		printCountries(countries);
    }).catch(() => {
		spinner.stop();
		console.log(`Cannot find countries name ${name}`);
  	});
};