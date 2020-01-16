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
		res.render('index');
	},
	product: (req, res) => {
		res.render('productDetail');
	},
	cart: (req, res) => {
		res.render('productCart');
	},
	register: (req, res) => {
		res.render('register');
	},
	productAdd: (req, res) => {
		res.render('productAdd');
	},
	checkout: (req, res) => {
		res.render('checkout');
	}
};

module.exports = controller
