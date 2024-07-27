async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const RealEstateMarketPlace = await ethers.deployContract(
    "RealEstateMarketPlace"
  );

  console.log("Contract address:", await RealEstateMarketPlace.address);
}
//blockchain\contracts\RealEstateMarketPlace.sol
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
