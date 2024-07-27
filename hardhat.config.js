require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.24",
  networks: {
    skale: {
      url: "https://testnet.skalenodes.com/v1/giant-half-dual-testnet",
      chainId: 974399131,
      accounts: [
        "69ce12de13d59566873cd601609c8d1b0b7d0ad15c4006ff0c678f6c1183bbac",
      ],
    },
  },
};
