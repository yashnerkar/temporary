const path = require('path');

module.exports = {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        performance: {
            hints: false,
        },
        mode: 'development',
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }],
        },
        devtool: 'eval-cheap-module-source-map',
        devServer: {
            static: path.join(__dirname, 'public'),
            historyApiFallback: true
        }

    }
    //  --watch-mode checks on changes and rebuilds the bundle not only on save



// loader is a function that takes in a source file and returns a transformed file