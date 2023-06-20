'use strict';

const fanCli = require('..');
const assert = require('assert').strict;

assert.strictEqual(fanCli(), 'Hello from fanCli');
console.info('fanCli tests passed');
