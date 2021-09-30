const { resolve } = require('path');

module.exports = {
    entry: {
        app: './src/scripts/app.js',
        worklet: './src/scripts/worklet.js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: resolve('build/scripts'),
        publicPath: '/scripts/'
    }
};
