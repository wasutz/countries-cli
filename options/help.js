const menus = {
  main: `
    countries <options>

    --name           Get country using name
    --code           Get country using country code
    --version        Show package version
    --help           Show help menu for a command`,
};

module.exports = (args) => {
  console.log(menus.main);
};