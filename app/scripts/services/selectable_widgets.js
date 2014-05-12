'use strict';

// The sevice used for retrieving selectable widgets.
angular
   .module("dragNdropApp") 
       .factory('SelectableWidgets', ['$http', function($http) { 
        return {
           get: function() {  
              var selectableWidgets = {primary_widgets: [{icon: 'user', type:'primary'}, 
                                                         {icon: 'phone', type:'primary'}, 
                                                         {icon: 'tower', type:'primary'}],
                                       success_widgets: [{icon: 'thumbs-up', type:'success'}, 
                                                         {icon: 'glass', type:'success'}, 
                                                         {icon: 'hand-up', type:'success'}]
                                      };
              return selectableWidgets;           
         }
        }; 
    }]);
    