'use strict';

describe('Directive: listaItems', function () {

  // load the directive's module
  beforeEach(module('seguridadAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<lista-items></lista-items>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the listaItems directive');
  }));
});
