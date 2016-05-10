var LoginPage = require('../pages/demo-loginPage');

describe('Login view', function () {

  var loginHeading = element(by.css('.middle-box h3'));
  var userDropdownSelector = element(by.css('.navbar a.user-dropdown'));

  beforeEach(function () {
    // ensure we are logged out before each test
    LoginPage.logout();
  });

  it('should allow to display login form', function () {
    // visit login page
    LoginPage.visit();
    expect(loginHeading.getText()).toEqual('LOG IN')
  });

  it('should allow to log user in', function () {

    LoginPage.setUsername('admin@domain.tld');
    LoginPage.setPassword('test');
    LoginPage.submit();

    expect(userDropdownSelector.isPresent()).toBeTruthy();
  });

});
