describe('Login view', function () {

  var loginForm = element(by.name('loginForm'));
  var loginHeading = element(by.css('.middle-box h3'));

  var username = element(by.model('data.username'));
  var password = element(by.model('data.password'));
  var submitBtn = element(by.css('button[type=submit]'));

  var userDropdownSelector = element(by.css('.navbar a.user-dropdown'));

  beforeEach(function () {
    // ensure we are logged out before each test
    browser.get('/logout');
  });

  it('should allow to display login form', function () {
    // visit login page
    expect(loginForm.isPresent()).toBeTruthy();
    expect(loginHeading.getText()).toEqual('LOG IN')
  });

  it('should allow to log user in', function () {

    // log user in
    username.sendKeys('admin@domain.tld');
    password.sendKeys('test');
    submitBtn.click();

    expect(userDropdownSelector.isPresent()).toBeTruthy();
  });

});
