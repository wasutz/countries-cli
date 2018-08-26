const minimist = require('minimist');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  const firstOption = Object.entries(args)[1] || ['help'];
  const [optionName, optionValue] = firstOption;

  try {
	require(`./options/${optionName}`)(optionValue);
  } catch (e) {
  	console.error(`Option ${optionName} is not a valid command`);
  }
}