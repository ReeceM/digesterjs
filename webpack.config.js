const path = require('path')

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "digesterjs.js",
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
    plugins: [],
}
