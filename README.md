# MWA-NFT
MetaWarrior Army Membership NFT

## A NodeJS/Hardhat project
See `examples.sh` for inspiration.

Additionally, you will need to configure variables. Hardhat can help you with this by running `npx hardhat vars setup`.

## MWAMBR.sol
It all boils down to this file in `/contracts` with less than 100 lines of code managing the creation of unique digital assets representing membership to MetaWarrior Army. We use NFT's that are minted by the user for a price. NFT's cannot be traded, but only destroyed by the owner. The contract owner (MetaWarrior Army) can adjust price and the supply of NFTs if needed and withdraw from the contract's wallet.

This repository only hosts the smart contract that can be deployed on a blockchain. There will be a separate repository for a web application that allows users to interact with MWA-NFT, minting memberships on a blockchain with related images on IPFS and additional services provided by MetaWarrior Army.

