const path = require('path');
const color = require('cli-color');

//dirname
console.log(`Folder name: ${color.green(path.dirname(__filename))}`);

//basename
console.log(`File name: ${color.yellow(path.basename(__filename))}`);

//extension name
console.log(`Extension name: ${color.blue(path.extname(__filename))}`);
