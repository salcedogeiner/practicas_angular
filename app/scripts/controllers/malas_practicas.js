'use strict';

/**
 * @ngdoc function
 * @name seguridadAngularApp.controller:MalasPracticasCtrl
 * @description
 * # MalasPracticasCtrl
 * Controller of the seguridadAngularApp
 */
angular.module('seguridadAngularApp')
  .controller('MalasPracticasCtrl', function ($scope,inventario, $sce) {
    $scope.fabrica = inventario;
    var self = this;
    self.nuevo_item={};
    self.actualizar=false;
    self.categorias= inventario.get_categorias();


    self.agregar_item=function(){
      $scope.fabrica.post_producto(self.nuevo_item);
      self.nuevo_item={};
    };

  //  $scope.template_item= "";

    $scope.$watch('malasPracticas.nuevo_item.categoria',function(){
      if( self.nuevo_item.categoria.nombre == "casa"){
        $scope.ver_descuento=true;
      } else {
        $scope.ver_descuento=false;
      }
    },true)

    $scope.$watch('my_item',function(){
      if ($scope.my_item !=undefined) {
        $scope.template_item=$sce.trustAsHtml("<h4>"+$scope.my_item.nombre+"</h4>"+
            "<p>"+$scope.my_item.descripcion+"</p>");
      }
    },true)

  });
