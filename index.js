#!/usr/bin/env node
// this ~crazy-scary~ _amazing_ package mutates Strings globally
const colors = require('colors'); // eslint-disable-line no-unused-vars
const copyPaster = require('copy-paste');

copyPaster.copy('\u200c\u200d');
console.log('Your clipboard is now hidden chars >:)'.red);
