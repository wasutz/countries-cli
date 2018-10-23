# Countries CLI
> Get information about countries from the command line.

## Install
```shell
$ npm i -g @wasutz/countries-cli
```

## Usage
```
$ countries --help

    countries <options>

    --name           Get countries using name
    --code           Get country using country code
    --capital        Get countries using capital
    --currency       Get countries using currency
    --version        Show package version
    --help           Show help menu for a command
```
## Example
Get countries using name
```
$ countries --name Thailand
Name: Thailand
Capital: Bangkok
Region: Asia
Population: 65327652
```
Get country using country code
```
$ countries --code th
Name: Thailand
Capital: Bangkok
Region: Asia
Population: 65327652
```

## License
MIT
