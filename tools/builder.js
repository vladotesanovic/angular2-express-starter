var SystemBuilder = require('systemjs-builder');
var argv = require('yargs').argv;
var builder = new SystemBuilder();

builder.loadConfig('./public/assets/js/systemjs.config.js')
    .then(function(){
        var outputFile = argv.prod ? './public/assets/js/bundle.min.js' : './public/assets/js/bundle.js';
        return builder.buildStatic('app', outputFile, {
            minify: argv.prod,
            mangle: false, // disabled because Angular RC.5 bug
            rollup: argv.prod
        });
    })
    .then(function() {
        console.log('bundle built successfully!');
    });