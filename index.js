// this is how we can use external modules
const color = require('cli-color');
console.log(color.yellow('hi there'));

// this is how we can import and use internal modules
const auth = require('./auth.js');
auth.register('zeeshan');
auth.login('Zeeshan', '1234567890');
