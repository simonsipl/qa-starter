exports.config = {
  framework: 'jasmine2',

  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['spec/**/*[sS]pec.js'],
/*
  capabilities: {
    "browserName": "chrome"
  },

  /*
   * By this you can use multiBrowser
   *
   */

  multiCapabilities:[
    {
      'browserName' : 'chrome'
    },
    {
      'browserName' : 'firefox'
    },/*
    {
      'browserName' : 'internet explorer',
      'platform' : 'ANY',
      'version' : '11'
    },
    {
      'browserName' : 'phantomjs'
    },
    */
  ],
  /*
  * Force protractor to use only one browser at a time
  */
  maxSessions: 1,
  allScriptsTimeout: 60000,

  jasmineNodeOpts: {
    defaultTimeoutInterval: 360000,
    showTiming: true,
    //isVerbose:true,
    //includeStackTrace:true
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
  baseUrl: 'https://localhost:8000/',
};
