module.exports = {
  verbose:false,
  preset:"jest-puppeteer",
  setupFilesAfterEnv: [
    "./setupTests.js"
  ]
};