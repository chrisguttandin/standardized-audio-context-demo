const documentConfig = require('../htmlhint/document');

// eslint-disable-next-line padding-line-between-statements
const convertConfig = (config) => Object
    .entries(config)
    .map(([ key, value ]) => (typeof value === 'string') ? `${ key }=${ value }` : key)
    .join(',');

module.exports = (grunt) => {
    const fix = (grunt.option('fix') === true);

    return {
        'hyperlink': {
            cmd: 'hyperlink https://chrisguttandin.github.io/standardized-audio-context-demo'
        },
        'lint-config': {
            cmd: `eslint --config config/eslint/config.json ${ (fix) ? '--fix ' : '' }--report-unused-disable-directives *.js config/**/*.js`
        },
        'lint-src': {
            cmd: `eslint --config config/eslint/src.json ${ (fix) ? '--fix ' : '' }--report-unused-disable-directives src/**/*.js && htmlhint --rules ${ convertConfig(documentConfig) } 'src/**/index.html'`
        }
    };
};
