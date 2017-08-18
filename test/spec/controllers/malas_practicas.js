'use strict';

describe('Controller: MalasPracticasCtrl', function () {

  // load the controller's module
  beforeEach(module('seguridadAngularApp'));

  var MalasPracticasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MalasPracticasCtrl = $controller('MalasPracticasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MalasPracticasCtrl.awesomeThings.length).toBe(3);
  });
});
