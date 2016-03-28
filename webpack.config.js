'use strict';

// import Webpack plugins
var htmlWebpackPlugin = require( 'html-webpack-plugin' );
var cleanPlugin = require( 'clean-webpack-plugin' );
var webpack = require( 'webpack' );

// define Webpack configuration object to be exported
var config = {
    context: __dirname + '/app',
    entry: './bootstrap.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            'npm': __dirname + '/node_modules'
        },
        extensions: ['', '.js', '.ts', '.css']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/, /typings/],
                loader: 'ts'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'raw-loader'
            },
            {
                test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
                loader: 'url?limit=100000'
            }
        ],
        preLoaders: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/, /typings/],
                loader: 'tslint'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin( {
            template: '../app/index.html',
            inject: 'body'
        } ),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new cleanPlugin( ['dist'] )
    ],
    tslint: {
        failOnHint: true,
        emitErrors: true
    },
    devServer: {
        proxy: {
            '/config/conf.json': {
                target: 'http://localhost:8888/conf.json',
                ignorePath : true,
                secure: false
            }
        }
    }
};

module.exports = config;