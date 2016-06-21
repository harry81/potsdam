/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
    '@angular2-material': 'vendor/@angular2-material',
    'angular2-infinite-scroll': 'vendor/angular2-infinite-scroll',
    'angular2-moment': 'vendor/angular2-moment',
    'moment': 'vendor/moment',
};


const packages:any = {};

const materialPkgs:string[] = [
    'core',
    'card',
    'button',
    'checkbox',
    'grid-list',
    'icon',
    'input',
    'list',
    'progress-bar',
    'progress-circle',
    'radio',
    'sidenav',
    'slide-toggle',
    'tabs',
    'toolbar',
];

materialPkgs.forEach((pkg) => {
    packages[`@angular2-material/${pkg}`] = {
        format: 'cjs',
        defaultExtension: 'js',
        main: `${pkg}.js`
    };
});

packages['angular2-infinite-scroll'] = {
    format: 'cjs',
    defaultExtension: 'js',
    main: `angular2-infinite-scroll.js`
};

packages['angular2-moment'] = {
    format: 'cjs',
    defaultExtension: 'js',
    main: `TimeAgoPipe.js`
};

packages['moment'] = {
    format: 'cjs',
    defaultExtension: 'js',
    main: `moment`
};


////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
