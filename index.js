const minimist = require('minimist');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  const command = args._[0] || 'help';

  try {
	require(`./commands/${command}`)(args);
  } catch (e) {
  	console.error(`${command} is not a valid command`);
  }
}