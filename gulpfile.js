var gulp = require('gulp');
var tsc = require('gulp-typescript');
var sourcemap = require('gulp-sourcemaps');
var del = require('del');
var tslint = require('gulp-tslint');
var config = require('./gulp.config')();
var tsProject = tsc.createProject('tsconfig.json');

gulp.task('clean', function(cb) {
    del(['client/js/**/*'], cb);
});

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
gulp.task('watch', ['ts-lint', 'compile-ts'], function() {
	
	gulp.watch([config.allTs], ['ts-lint', 'compile-ts']);	
});

gulp.task('default', ['clean', 'ts-lint', 'compile-ts']);