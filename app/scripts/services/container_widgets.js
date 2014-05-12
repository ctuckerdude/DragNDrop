'use strict';

// The sevice used for retrieving and updating container widgets.
angular
   .module("dragNdropApp") 
       .factory('ContainerWidgets', ['$http', function($http) { 
        return {
           get: function() { 
              var containerWidgetsItem = localStorage.getItem("dragndrop_container_widgets");
              var containerWidgets = [];
       
              if(containerWidgetsItem != null) {
                containerWidgets = JSON.parse(containerWidgetsItem);  
              } 
              
              return containerWidgets;         
          },
           put: function(containerWidgets) {
            localStorage.setItem("dragndrop_container_widgets", JSON.stringify(containerWidgets));  
           }
        }; 
    }]);