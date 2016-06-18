/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      '@angular2-material/**/*',
      '@angular/**/*.+(js|js.map)',
      'rxjs/**/*.js',
      'reflect-metadata/*.js',
      'es6-shim/es6-shim.js',
      'zone.js/dist/*.js',
      'systemjs/dist/system.src.js',
      'angular2-infinite-scroll/**/*.js',
      'systemjs/dist/system-polyfills.js',
    ]
  });
};
