'use strict';

/**
 * @ngdoc directive
 * @name seguridadAngularApp.directive:listaItems
 * @description
 * # listaItems
 */
angular.module('seguridadAngularApp')
  .directive('listaItems', function (inventario) {
    return {
      restrict: 'E',
      scope:{
        item:'=?'
      },
      templateUrl: 'views/lista-items.html',
      controller:function($scope){
        var self = this;
        self.productos=inventario.get_productos();

        self.seleccionar=function(item){
          $scope.item = item;
        }
        $scope.eliminar=function(item){
          inventario.delete_item(item);
        };
      },
      controllerAs:'d_listaItems'
    };
  });
