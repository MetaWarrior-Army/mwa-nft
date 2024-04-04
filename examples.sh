#!/bin/bash

# Compile
npx hardhat compile

# Deploy
npx hardhat run scripts/deploy.js

# Verify, arguments might be optional
#npx hardhat verify <deployedcontractaddress> [arg1 arg2 arg3]
