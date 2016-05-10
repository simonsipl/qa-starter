'use strict';

var extend = require('extend');
var base = require('./base');


var LoginPage = extend(true, {}, base.Page, {
  url: '/login',

  usernameInput: element(by.model('data.username')),
  passwordInput: element(by.model('data.password')),
  submitButton: element(by.css('form button[type="submit"]')),

  requiredToBePresentElement: [
    element(by.name('loginForm'))
  ],

  setUsername: function (name) {
    this.usernameInput.sendKeys(name);
    return this;
  },

  setPassword: function (password) {
    this.passwordInput.sendKeys(password);
    return this;
  },

  login: function (username, password) {
    this.setUsername(username);
    this.setPassword(password);
    this.submit();
    return browser.waitForAngular().then(function () {
      return this;
    });
  },

  logout: function () {
    browser.get('/logout');
  }

});


module.exports = LoginPage
