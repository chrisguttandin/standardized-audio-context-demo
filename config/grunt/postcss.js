const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const stylelint = require('stylelint');

module.exports = {
    development: {
        files: [ {
            cwd: 'src/styles/',
            dest: 'build/styles/',
            expand: true,
            src: [ 'styles.css' ]
        } ],
        options: {
            processors: [
                autoprefixer({
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
                })
            ]
        }
    },
    lint: {
        options: {
            failOnError: true,
            processors: [
                stylelint({ config: { extends: 'stylelint-config-holy-grail' } })
            ],
            writeDest: false
        },
        src: [ 'src/**/*.css' ]
    },
    production: {
        files: [ {
            cwd: 'src/styles/',
            dest: 'build/styles/',
            expand: true,
            src: [ 'styles.css' ]
        } ],
        options: {
            processors: [
                autoprefixer({
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
                }),
                cssnano()
            ]
        }
    }
};
