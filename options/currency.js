const ora = require('ora');
const countryService = require('../services/countryService');
const { printCountries } = require('../utils/print');

module.exports = async currency => {
    const spinner = ora().start();

    await countryService.getCountriesByCurrency(currency).then(countries => {
        spinner.stop();
        printCountries(countries);
    }).catch(() => {
        spinner.stop();
        console.log(`Cannot find countries currency: ${currency}`);
    });
};