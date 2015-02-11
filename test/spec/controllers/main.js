'use strict';

describe('Controller: MainCtrl', function () {
  beforeEach(function() {
    return browser.ignoreSynchronization = false;
  });

  // load the controller's module
  beforeEach(module('transformadminApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
