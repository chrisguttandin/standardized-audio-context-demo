const { resolve } = require('path');

module.exports = {
    development: {
        entry: {
            app: './src/scripts/app.js',
            worklet: './src/scripts/worklet.js'
        },
        mode: 'development',
        module: {
            rules: [ {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ [ '@babel/preset-env', {
                            targets: {
                                browsers: [
                                    'last 2 Chrome versions',
                                    'last 2 ChromeAndroid versions',
                                    'last 2 Edge versions',
                                    'last 2 Firefox versions',
                                    'last 2 FirefoxAndroid versions',
                                    'last 2 iOS versions',
                                    'last 2 Opera versions',
                                    'last 2 Safari versions'
                                ]
                            }
                        } ] ]
                    }
                }
            } ]
        },
        output: {
            filename: '[name].js',
            path: resolve('build/scripts')
        }
    },
    production: {
        entry: {
            app: './src/scripts/app.js',
            worklet: './src/scripts/worklet.js'
        },
        mode: 'production',
        module: {
            rules: [ {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ [ '@babel/preset-env', {
                            targets: {
                                browsers: [
                                    'last 2 Chrome versions',
                                    'last 2 ChromeAndroid versions',
                                    'last 2 Edge versions',
                                    'last 2 Firefox versions',
                                    'last 2 FirefoxAndroid versions',
                                    'last 2 iOS versions',
                                    'last 2 Opera versions',
                                    'last 2 Safari versions'
                                ]
                            }
                        } ] ]
                    }
                }
            } ]
        },
        output: {
            filename: '[name].js',
            path: resolve('build/scripts')
        }
    }
};
