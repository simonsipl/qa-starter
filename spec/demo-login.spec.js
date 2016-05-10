var LoginPage = require('../pages/demo-loginPage');
var Userdata = require('../data/demo-userdata');

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

    LoginPage.setUsername(Userdata.admin.username);
    LoginPage.setPassword(Userdata.admin.password);
    LoginPage.submit();

    expect(userDropdownSelector.isPresent()).toBeTruthy();
  });

});
