const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jpe?g|png|PNG$/,
                exclude: /node_modules/,
                loader: ['url-loader', 'file-loader']
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
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
            PUBLIC_URL:''
        }),
        new CopyPlugin({
            patterns: [
                { from: 'public', to: '' }
            ]
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    optimization: {
        splitChunks: { chunks: 'all' },
        minimizer:[
            new TerserPlugin({
                parallel: true,
                extractComments: false,
                // Enable file caching
                cache: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }

};
