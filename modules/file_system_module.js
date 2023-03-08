// Common use for the File System module:
// - Read files
// - Create files
// - Update files
// - Delete files
// - Rename files

const fs = require('fs');
const path = require('path');

//create a folder
fs.mkdir(path.join(__dirname, '/test'), (err) => {
	if (err) {
		console.log(`Something went wrong ${err}`);
		return;
	}
	console.log('Folder created successfully...');
});
