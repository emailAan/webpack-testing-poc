var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill', './src/entry.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
};