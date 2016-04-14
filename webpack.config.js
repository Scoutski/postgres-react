module.exports = {
	entry: {
		reactredux: './frontend/main.js'
	},
	output: {
		filename: './public/javascripts/app.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};