
import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox-viem"
import "@nomicfoundation/hardhat-ethers"
import "@nomicfoundation/hardhat-verify"

const config: HardhatUserConfig = {
  solidity: "0.8.24",

  defaultNetwork: "sepolia",

  etherscan: {
   apiKey: 'IR3Q2SESEHHDN7DJBRF5IQCZEJMQX9X4RS',
  },

  networks: {

     hardhat: {},

     sepolia: {
      chainId: 11155111,
      url: `${vars.get('ALCHEMY_SEPOLIA_URL')}`,
      from: `${vars.get('WALLET_PUBLIC_KEY')}`,
      accounts: [`${vars.get('WALLET_PRIVATE_KEY')}`],
    },

  },

};

export default config;
