const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  viewportHeight: 1080,                           //вказуємо розширення екрану за замовченням
  viewportWidth: 1920,
  watchForFileChanges: false,                     //блокує автоматичний перезапуск сайпрес ранера/тесту
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    baseUrl: 'https://juice-shop-sanitarskyi.herokuapp.com',   //вказуємо Url за замовченням
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
