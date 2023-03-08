const os = require('os');
const color = require('cli-color');

// OS type
console.log(color.bgBlue(`OS Type: ${os.type()}`));

// OS platform
console.log(color.bgMagenta(`OS Platform: ${os.platform}`));

// OS architecture
console.log(color.bgCyanBright(`OS architecture: ${os.arch()}`));

// CPU details
console.log(os.cpus());

// Free memory
console.log(color.bgWhite(`Free Memory: ${os.freemem()}`));
