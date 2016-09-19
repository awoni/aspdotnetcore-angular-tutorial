/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
        app: 'app',

      // angular bundles
      '@angular/core': 'lib/core/bundles/core.umd.js',
      '@angular/common': 'lib/common/bundles/common.umd.js',
      '@angular/compiler': 'lib/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'lib/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'lib/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'lib/http/bundles/http.umd.js',
      '@angular/router': 'lib/router/bundles/router.umd.js',
      '@angular/forms': 'lib/forms/bundles/forms.umd.js',
      // other libraries
      'rxjs':                       'lib/rxjs',
      'angular2-in-memory-web-api': 'lib/angular2-in-memory-web-api',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);