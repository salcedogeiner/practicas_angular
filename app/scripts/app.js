'use strict';

/**
 * @ngdoc overview
 * @name seguridadAngularApp
 * @description
 * # seguridadAngularApp
 *
 * Main module of the application.
 */
angular
  .module('seguridadAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'afOAuth2',
    'treeControl',
    'ngMaterial',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.rowEdit',
    'ui.grid.cellNav',
    'ui.grid.treeView',
    'ui.grid.selection',
    'ui.grid.exporter',
    'ngStorage',
    'angular-bind-html-compile'
  ])
    .config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("");
      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/malas_practicas', {
        templateUrl: 'views/malas_practicas.html',
        controller: 'MalasPracticasCtrl',
        controllerAs: 'malasPracticas'
      })
      .when('/buenas_practicas', {
        templateUrl: 'views/buenas_practicas.html',
        controller: 'BuenasPracticasCtrl',
        controllerAs: 'buenasPracticas'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
