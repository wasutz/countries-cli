const ora = require('ora');
const countryService = require('../services/countryService');
const { printCountry } = require('../utils/print');

module.exports = async code => {
 	const spinner = ora().start();

 	await countryService.getCountryByCode(code).then(country => {
		spinner.stop();
		printCountry(country);
    }).catch(() => {
		spinner.stop();
		console.log(`Cannot find country code ${code}`);
  	});
};