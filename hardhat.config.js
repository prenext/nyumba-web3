require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  solidity: "0.8.24",
  networks: {
    skale: {
      url: process.env.SKALE_ENDPOINT,
      chainId: parseInt(process.env.SKALE_CHAIN_ID),
      accounts: [process.env.SKALE_PRIVATE_KEY],
    },
  },
};