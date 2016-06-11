var isPublic = typeof window != "undefined";

/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
    // map tells the System loader where to look for things
    var map = {
        'app':                        'client', // 'dist',
        '@angular':                   (isPublic)? '@angular' : 'node_modules/@angular',
        'angular2-in-memory-web-api': (isPublic)? 'angular2-in-memory-web-api' : 'node_modules/angular2-in-memory-web-api',
        'rxjs':                       (isPublic)? 'rxjs' : 'node_modules/rxjs',
        'ng-semantic':                (isPublic)? 'ng-semantic' : 'node_modules/ng-semantic'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                        { main: 'main.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' },
        'ng-semantic':                { main: 'ng-semantic', defaultExtension: 'js' }
    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade'
    ];
    // Add package entries for angular packages
    ngPackageNames.forEach(function(pkgName) {
        packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
    });
    var config = {
        map: map,
        packages: packages
    };
    System.config(config);
})(this);
