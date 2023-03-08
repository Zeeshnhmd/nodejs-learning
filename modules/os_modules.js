const os = require('os');
const color = require('cli-color');

// OS type
console.log(color.bgBlue(`OS Type: ${os.type()}`));
