# Wave portal Project (Solidity)

This project is my solution from the exercise in '@buildspace.so' about wave portal with solidity hardhat.Basically, this project do like counter when someone trigger the wave() function and the contract will give back money 0.0001 ETH on the rinkeby test network on the random people but we do have condition check spam for each address when wave at us once, that address need to wait for 15 second.

Before running this project, you need to install dotenv.
```shell
npm install dotenv
```
In order to use some plugins, API keys or custom network with secret config we need a .env file. You can check hardhat.config.js for more details.
This project use API key from Alchemy to be as node provider for deploy smart contract to rinkeby test network and private key of your metamask wallet on rinkeby test network and setup all credentials in your own .env file.

```javascript
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.DEVELOP_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
};
```

Try running some of the following tasks:

- For test function from smart contract with ether.js
```shell
npx hardhat run scripts/run.js 
```

- For upload file to the rinkeby test network
```shell
npx hardhat run scripts/deploy.js --network rinkeby
```
