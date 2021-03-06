const path = require('path');

module.exports = {
	mode: 'development', // or 'production'
	entry: {
		app: './src/app.js',
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				'postcss-loader',
				'sass-loader',
			],
		}],
	},

};