// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  dialogflow: {
    angularBot: 'ae0bea9b8c424c3584aa5ac247b83d6f'
  },
  firebase: {
    apiKey: 'AIzaSyDMLPlhTgYWZEmMjLiADhKYaY5IFnORY0I',
    authDomain: 'rums-15e5f.firebaseapp.com',
    databaseURL: 'https://rums-15e5f.firebaseio.com',
    projectId: 'rums-15e5f',
    storageBucket: 'rums-15e5f.appspot.com',
    messagingSenderId: '688594952310'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
