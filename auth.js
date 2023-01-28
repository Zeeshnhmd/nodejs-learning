const register = (name) => {
	console.log(`User ${name} is being registered`);
};

const login = (name, password) => {
	console.log(`${name} this is your password ${password}`);
};

// this is how we can export multiple functions from one file
module.exports = {
	register,
	login,
};
