const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				// use: ['style-loader', 'css-loader', 'postcss-loader'],
				use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
			},
		],
	},
	devtool: "inline-source-map",
	plugins: [
		new HtmlWebpackPlugin({ template: "./src/index.html" }),
		new MiniCssExtractPlugin(),
	],
};
