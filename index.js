//node js program is wrapped inside IIFE (Immediately Invoked Function Expression)

// (function (exports, require, module, __filename, __dirname) {
// 	const superHero = 'Batman';
// 	console.log(superHero);
// });

// this is how we can use external modules
const color = require('cli-color');
console.log(color.yellow('hi there'));

// this is how we can import and use internal modules
const auth = require('./auth.js');
auth.register('zeeshan');
auth.login('Zeeshan', '1234567890');
