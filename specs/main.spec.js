

describe('angularjs homepage', function() {
  beforeEach(function() {
    return browser.ignoreSynchronization = true;
  });
  it('should have a title', function() {
    browser.ignoreSynchronization = true;
    browser.get('/');

    expect(browser.getTitle()).toEqual('Transform Admins');
  });
});
