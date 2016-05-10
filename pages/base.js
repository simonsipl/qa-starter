'use strict';

var path = require('path'),
  util = require('util');

var Page = {

  /***********
   *
   * NAVIGATION
   *
   ***********/

  /**
   * The URL of the page, it will be used when issuing visit() method.
   */
  url: '',

  /**
   * The list of all elements that must be present on the page. If one of them is missing, inOn() will fail.
   * Example: if you have an easy distinguishable HTML element, then you can set:
   *
   *   requiredToBePresentElement: [element(by.id('element-on-login-page'))],
   *
   * and then the isOn() method will check for existence of that element.
   */
  requiredToBePresentElement: null,

  /**
   * Make sure we are on the proper page - check all elements that need to exist
   */
  ensurePageConditions: function () {
    if (this.requiredToBePresentElements) {
      this.requiredToBePresentElements.forEach(function (e) {
        expect(e.isPresent()).toBeTruthy();
      });
    }
  },

  /**
   * Check if we are on the specified page by doing a URL comparison
   * (the page defaults to 'this' if not given).
   *
   * @returns {Page}
   */
  isOn: function (_page) {
    var page = _page ? _page : this;
    var url = page.url;

    expect(browser.getLocationAbsUrl()).toMatch(url);

    this.ensurePageConditions();

    return page;
  },

  /**
   * Open the page in the browser.
   *
   * @returns {Page}
   */
  get: function (_page) {
    var page = _page ? _page : this;

    browser.get(page.url);
    browser.waitForAngular();

    expect(browser.getLocationAbsUrl()).toMatch(page.url);

    return page;
  },

  /**
   * Visit a page, that is: go there and do all the needed checks to confirm
   * that we are really there where we should
   *
   * @returns {Page}
   */
  visit: function () {
    this.get();
    this.isOn();
    return this;
  },


  /***********
   *
   * FORMS
   *
   ***********/

  /**
   * Default submit button locator
   */
  submitButton: element(by.css('[type=submit]')),

  /**
   * Submit the form of the current page (we assume there is only one, if you need more
   * then just define it inside the inherited Page Object).
   *
   * @returns {Page}
   */
  submit: function () {
    if (!this.submitButton || this.submitButton == undefined) {
      throw new Error('The submit button element was not defined on the page object. Please check it.');
    }

    this.submitButton.click();

    browser.waitForAngular();

    return this;
  },


};


module.exports.Page = Page;
