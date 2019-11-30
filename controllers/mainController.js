const fs = require('fs');
const path = require('path');

// ************ Function to Read an HTML File ************
function readHTML (fileName) {
	let filePath = path.join(__dirname, `/../views/${fileName}.html`);
	let htmlFile = fs.readFileSync(filePath, 'utf-8');
	return htmlFile;
}

const controller = {
	root: (req, res) => {
		let html = readHTML('index');
		res.send(html);
	},
	product: (req, res) => {
		let html = readHTML('productDetail');
		res.send(html);
	},
	cart: (req, res) => {
		let html = readHTML('productCart');
		res.send(html);
	},
	register: (req, res) => {
		let html = readHTML('register');
		res.send(html);
	},
	productAdd: (req, res) => {
		let html= readHTML('productAdd');
		res.send(html);
	},
};

module.exports = controller
