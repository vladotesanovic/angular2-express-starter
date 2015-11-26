var gulp = require('gulp');
var tsc = require('gulp-typescript');
var sourcemap = require('gulp-sourcemaps');
var tslint = require('gulp-tslint');
var config = require('./gulp.config')();
var tsProject = tsc.createProject('tsconfig.json');

// run express server for testing prupouse
// don't use this anywhere else
var express = require("express");
var app = express();
app.use(express.static("./public"));
app.use(express.static("./node_modules/angular2/bundles/"));
app.use(express.static("./node_modules/systemjs/dist/"));
app.listen(5000);

gulp.task('ts-lint', function() {

	return gulp
		.src(config.allTs)
		.pipe(tslint())
		.pipe(tslint.report('prose', {
			emmitError: false
		}))
});

gulp.task('compile-ts', function() {

	var sourceTsFiles = [
		config.allTs,
		config.typings
	];

	var toResult = gulp
		.src(sourceTsFiles)
		.pipe(sourcemap.init())
		.pipe(tsc(tsProject));

	return toResult.js
		.pipe(sourcemap.write('.'))
		.pipe(gulp.dest(config.toOutputhPath));
});

// compile each time when we change something in /src folder
gulp.task('serve', ['ts-lint', 'compile-ts'], function() {
	
	gulp.watch([config.allTs], ['ts-lint', 'compile-ts']);	
});

// compile type script on each change in src/ folder
gulp.watch(config.allTs, ['ts-lint', 'compile-ts']);

gulp.task('default', ['serve']);