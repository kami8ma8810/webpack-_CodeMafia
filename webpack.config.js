const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		app: './src/js/app.js'
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		__filename: '[name].bundle.js',
	}

};