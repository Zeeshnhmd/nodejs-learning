// Common use for the File System module:
// - Read files
// - Create files
// - Update files
// - Delete files
// - Rename files

const fs = require('fs');
const path = require('path');
const color = require('cli-color');

//create a folder
fs.mkdir(path.join(__dirname, '/test'), (err) => {
	if (err) {
		console.log(color.red(`Something went wrong ${err}`));
		// return;
	}
	console.log('Folder created successfully...');
});

//create a file
fs.writeFile(
	path.join(__dirname, 'test', 'test.txt'),
	'Hello Node\n',
	(err) => {
		if (err) {
			console.log(color.red(`Something went wrong ${err}`));
		}
		//append file
		fs.appendFile(
			path.join(__dirname, 'test', 'test.txt'),
			'More data',
			(err) => {
				if (err) {
					console.log(err);
				}
				console.log('Data appended');
			}
		);
		console.log(color.green('File created successfully'));
	}
);

//when you run the above code again (create file) it not throw an error what it does is that it deletes the existing file and create a new file again.

//Read file
fs.readFile(path.join(__dirname, 'test', 'test.txt'), (err, data) => {
	if (err) {
		console.log(err);
	}
	const content = Buffer.from(data);
	console.log(content.toString());
});
