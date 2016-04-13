module.exports = {
	entry: {
		helloWorld: './public/javascripts/main.js'
	},
	output: {
		filename: 'public/app.js'
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