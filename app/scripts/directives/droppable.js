'use strict';

angular
   .module("dragNdropApp")
     .directive('droppable', function() {
	   return {
	            // A = attribute, E = Element, C = Class and M = HTML Comment
	            restrict:'A',
              // The link function is responsible for registering elements as 
              // droppable
	            link: function(scope, element, attrs) {
                    scope.droppableContainer = element; 
                    element
                       .droppable({
                           drop: function(event, ui) {
                             var offset = $(this).offset();
                             // Adjust offset when widget is first dropped in the container
                             if(!ui.helper.parent().is(element)) {
                               var x = ui.position.left  - element.offset().left;
                               ui.helper.css("left", x + "px");   
                             }
                             $.ui.ddmanager.current.cancelHelperRemoval = true;
                             ui.helper.appendTo(this);
                           }
                        });
	            }		
	          };
      });