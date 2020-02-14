const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        "digesterjs": "./index.js",
        "digesterjs.min": "./index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        library: 'digesterjs',
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,// Set loaders to transform files.
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/
        })]
    },
    plugins: [],
}
