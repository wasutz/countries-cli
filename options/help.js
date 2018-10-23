const menus = {
  main: `
    countries <options>

    --name           Get countries using name
    --code           Get country using country code
    --capital        Get countries using capital
    --currency       Get countries using currency
    --version        Show package version
    --help           Show help menu for a command`,
};

module.exports = args => {
  console.log(menus.main);
};
