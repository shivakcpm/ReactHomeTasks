const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode:'development',
    entry: './src/index.js',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jpe?g|png$/,
                exclude: /node_modules/,
                loader: ['url-loader', 'file-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            PUBLIC_URL:'public'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'public', to: 'public' }
            ]
        })
    ],
    devServer: {
        open: true,
        hot: true
    }
};
