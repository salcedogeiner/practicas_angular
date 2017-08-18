'use strict';

/**
 * @ngdoc service
 * @name seguridadAngularApp.inventario
 * @description
 * # inventario
 * Factory in the seguridadAngularApp.
 */
angular.module('seguridadAngularApp')
  .factory('inventario', function ($http) {
    // Service logic
    // ...

    var productos = [];
    //var categorias = [{id:1,nombre:"casa"},{id:1,nombre:"deportes"},{id:1,nombre:"video juegos"}]

    // Public API here
    return {
      get_productos: function () {
        return productos;
      },
      post_producto: function(item){
        productos.push(item);
      },
      get_categorias: function(){
        return $http.get("scripts/json/tipos_categoria.json")
      },
      delete_item: function(item){
        productos.splice(productos.indexOf(item), 1);
      }
    };
  });
