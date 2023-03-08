const path = require('path');
const color = require('cli-color');

//dirname
console.log(`Folder name: ${color.green(path.dirname(__filename))}`);

//basename
console.log(`File name: ${color.yellow(path.basename(__filename))}`);

//extension name
console.log(`Extension name: ${color.blue(path.extname(__filename))}`);

//parse: this give us the whole information of file.
console.log(`Parse: ${path.parse(__filename)}`);

//join: used to join things here (__dirname gives us the current file path), ("order" is file name inside the current file) and ("app.js" is file name inside "order")
//Output: C:\Personal_space\learning\Backend\NodeJS\nodejs-learning\modules\order\app.js
console.log(`Join: ${color.blue(path.join(__dirname, 'order', 'app.js'))}`);
