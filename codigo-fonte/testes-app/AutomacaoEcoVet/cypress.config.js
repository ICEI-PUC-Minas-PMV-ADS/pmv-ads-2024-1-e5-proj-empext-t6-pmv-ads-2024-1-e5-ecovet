const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 20000,
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on) {
      on("file:preprocessor", cucumber())
    },
    baseUrl: 'https://ecovet-c1ed8c8c14dc.herokuapp.com'
  },
})