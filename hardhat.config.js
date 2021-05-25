require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const RINKEBY_RPC_URL = 'https://rinkeby.infura.io/v3/5375c0915a1948a8a54f43710f022639'
const PRIVATE_KEY = '0xf3f1cd1969812a9395262c7a2a98d15771565c280a99ed7f814dcf370db4ef78'

module.exports = {
  defaultNetwork: "rinkbey",
  networks: {
    rinkbey: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY]
    }
  },
  solidity: "0.7.3",
};

