# SNCB profile for `hafas-client`

[*ResRobot*](https://resrobot.se) is a national public transport search engine in [Sweden](https://en.wikipedia.org/wiki/Sweden). This profile adds specific customizations to `hafas-client` for Swedish public transport. Based on documentation for the ResRobot APIs found on [Trafiklab.se](https://www.trafiklab.se/). This client is not officially supported by Trafiklab. For officially supported APIs, see [the Trafiklab.se website](https://trafiklab.se).

## Usage

```js
const createClient = require('hafas-client')
const resRobotProfile = require('hafas-client/p/sncb')

// create a client with ResRobot profile
const client = createClient(resRobotProfile, 'my-awesome-program')
```


## Customisations

- parses Swedish products
