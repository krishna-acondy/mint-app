# Mint App
This project is a Progressive Web App created using Angular 8 with TypeScript.
The backend is an [API](https://github.com/krishna-acondy/mint-api) written in Node.js using Express.

The app is hosted on Firebase and can be accessed at [Mint App](http://mint-app-848c9.firebaseapp.com).

This app uses CSS media queries to provide a responsive UI for mobile and desktop web browsers. It has been tested on Chrome, Firefox and Safari(OS X and iOS).

Since it has been built as a PWA, you can add it to the home screen on your Android or iOS device and use it like any other app.

The app currently supports three languages - English, Dutch and French. The language in use can be changed at anytime, pre- or post-deployment, via the `config.json` file, located in the assets folder.

## Current Features
* Sign in/sign out and authentication via Mint API.
* Client-side storage of authentication state,
  enabling persistence between page refreshes.
* Withdrawal of preset amounts - £20, £50 and £100,
  and custom amounts in multiples of £5, £10 and £20.
* Display of current balance.
* Display of current overdraft, with support for upto £100.
* i18n - multi-language support.

## Next Steps - Product Roadmap
* PIN change functionality.
* Extend end-to-end test suite.
* More extensive testing across devices and resolutions.
* Improvement of layouts to optimise screen space usage.
* Better use of motion design and animations to convey meaning.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
