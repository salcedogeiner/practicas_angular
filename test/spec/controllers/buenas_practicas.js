'use strict';

describe('Controller: BuenasPracticasCtrl', function () {

  // load the controller's module
  beforeEach(module('seguridadAngularApp'));

  var BuenasPracticasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BuenasPracticasCtrl = $controller('BuenasPracticasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BuenasPracticasCtrl.awesomeThings.length).toBe(3);
  });
});
