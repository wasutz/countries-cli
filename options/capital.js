const ora = require('ora');
const countryService = require('../services/countryService');
const { printCountries } = require('../utils/print');

module.exports = async capital => {
    const spinner = ora().start();

    await countryService.getCountriesByCapital(capital).then(countries => {
        spinner.stop();
        printCountries(countries);
    }).catch(() => {
        spinner.stop();
        console.log(`Cannot find countries using capital ${capital}`);
    });
};
