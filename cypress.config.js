module.exports = {
  projectId: 'p24cwo',
  env: {
    baseUrl: 'https://rahulshettyacademy.com/',
  },
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 10000,
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  scrollBehavior: 'top',
  retries: {
    runMode: 1,
    openMode: 3,
  },
  db: {
    userName: '',
    password: '',
    server: '',
    options: {
      database: 'coffee_store',
      encrypt: true,
      rowCollectionOnRequestCompletion: true,
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
}
