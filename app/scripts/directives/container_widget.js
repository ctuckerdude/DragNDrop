'use strict';

angular
   .module("dragNdropApp")
     .directive('containerWidget', function() {
	   return {
	            restrict:'A',
              // The link function is responsible for registering attributes as 
              // container_widget
 		          link: function(scope, element, attrs) {
                   var widget = JSON.parse(attrs.widget);
                   var clazz = "glyphicon glyphicon-" + widget.icon + " droppable_widget_" + widget.type + " ui-draggable";

                   // Add attributes and classes required to display widgets in container.
                   element.attr("class", clazz);
                   element.css("position", "absolute");
                   element.css("left", widget.xpos + "px");
                   element.css("top", widget.ypos + "px");
                   element.draggable({zIndex: 999, containment: 'parent'});             
				      }
	    }		
	 });