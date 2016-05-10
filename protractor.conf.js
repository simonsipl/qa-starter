exports.config = {
  framework: 'jasmine2',

  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['spec/**/*[sS]pec.js'],

  capabilities: {
    "browserName": "chrome"
  },

  allScriptsTimeout: 60000,

  jasmineNodeOpts: {
    defaultTimeoutInterval: 360000,
    showTiming: true
  },

  onPrepare: function () {
    /*
     Set browser window size
     */
    browser.driver.manage().window().setSize(1200, 800);
  },

  /*
   Set your app's main URL here, so you can use relative urls along the tests
   */
  baseUrl: 'https://localhost:8080/',
};
