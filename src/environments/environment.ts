// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBdnV29e0A0mwp3z56FEU-ub3-fPn_85cs',
    authDomain: 'invoiceissuer.firebaseapp.com',
    databaseURL: 'https://invoiceissuer.firebaseio.com',
    storageBucket: 'invoiceissuer.appspot.com',
    messagingSenderId: '458385736944'
  }
};
