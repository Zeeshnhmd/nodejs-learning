const os = require('os');
const color = require('cli-color');

// OS type
console.log(color.bgBlue(`OS Type: ${os.type()}`));

// OS platform
console.log(color.bgMagenta(`OS Platform: ${os.platform}`));
