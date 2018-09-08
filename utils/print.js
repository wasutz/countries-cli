const printCountry = country => {
	console.log(`Name: ${country.name}`);
	console.log(`Capital: ${country.capital}`);
	console.log(`Region: ${country.region}`);
	console.log(`Population: ${country.population}`);
}

const printCountries = countries => {
	countries.map((country, index) => {
		printCountry(country);
		if (index !== countries.length - 1) {
			console.log(`------------------`);
		}
	});
}

module.exports = {printCountry, printCountries};
