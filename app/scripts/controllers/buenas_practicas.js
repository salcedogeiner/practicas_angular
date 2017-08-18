'use strict';

/**
 * @ngdoc function
 * @name seguridadAngularApp.controller:BuenasPracticasCtrl
 * @description
 * # BuenasPracticasCtrl
 * Controller of the seguridadAngularApp
 */
angular.module('seguridadAngularApp')
  .controller('BuenasPracticasCtrl',  function (inventario, $sce,$scope) {
    var self = this;
    self.actualizar=false;
    inventario.get_categorias().then(function(response){
      self.categorias=response.data;
    });
    self.template = "<h4> {{buenasPracticas.my_item.nombre}} </h4>"+
        "<p> {{buenasPracticas.my_item.descripcion}} </p>";

    self.agregar_item=function(form, item){
      console.log(form);
      if (form.$valid) {
        var nuevo_item={
          nombre: (typeof item.nombre === 'string')? item.nombre : null,
          precio: (typeof item.precio === 'number')? item.precio : null,
          categoria: (typeof item.categoria === 'object')? item.categoria : null,
          descripcion: item.descripcion,
          descuento: (item.descuento != undefined)? (item.categoria.nombre == "casa"? item.descuento : null) : ""
        }
        if (nuevo_item.nombre != null && nuevo_item.precio != null && nuevo_item.categoria != null) {
          inventario.post_producto(nuevo_item);
          $scope.nuevo_item={};
          form.$setPristine();
          form.$setUntouched();

        } else {
          alert("item errorneo")
        }

      } else {
        alert("formulario invalido")
      }
    };

    $scope.$watch('buenasPracticas.my_item', function(){
      self.template_item=$sce.trustAsHtml(self.template);
    })

  });
