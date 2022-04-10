#!/usr/bin/env node
const address = require('./src/address');

Object.keys(address).forEach(key => {
  console.log(`${key}: ${address[key]}`);
});
