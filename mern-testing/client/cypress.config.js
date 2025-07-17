const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173", // or wherever your frontend runs
    supportFile: "cypress/support/e2e.js",
  },
});
