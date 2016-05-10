describe('Login view', function () {

  var loginForm = element(by.name('loginForm'));
  var loginHeading = element(by.css('.middle-box h3'));

  var username = element(by.model('data.username'));
  var password = element(by.model('data.password'));
  var submitBtn = element(by.css('button[type=submit]'));

  var userDropdownSelector = element(by.css('.navbar a.user-dropdown'));

  it('should start on login view and allow to log user in', function () {

    // visit login page
    browser.get('/login');
    expect(loginForm.isPresent()).toBeTruthy();
    expect(loginHeading.getText()).toEqual('LOG IN')

    // try to log in
    username.sendKeys('admin@domain.tld');
    password.sendKeys('test');
    submitBtn.click();

    expect(userDropdownSelector.isPresent()).toBeTruthy();
  });

});
