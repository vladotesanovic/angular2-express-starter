module.exports = function() {
	var config = {
		allTs: './src/**/*.ts',
		typings: './typings/main/**/*.d.ts',
		toOutputhPath: './client/js/',
		srcTemplateHTML: './src/**/*.html',
		srcTemplateCSS: './src/**/*.css',
	}
	return config;
}