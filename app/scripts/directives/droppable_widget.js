'use strict';

angular
   .module("dragNdropApp")
     .directive('droppableWidget', function() {
	   return {
	            restrict:'E',
	            templateUrl: 'views/partials/app-tpls/droppable_widget.html',   
              // The link function is responsible for registering elements as 
              // droppable_widget
	            link: function(scope, element, attrs) {
                   attrs.$observe('icon', function(icon) {
                      scope.icon = icon;
                   }); 
                   attrs.$observe('type', function(type) {
                      scope.widget_type = type;
                   });      
				      }
	    }		
	 });