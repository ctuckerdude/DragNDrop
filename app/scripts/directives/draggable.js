'use strict';

angular
   .module("dragNdropApp")
     .directive('draggable', function() {
	   return {
	            // A = attribute, E = Element, C = Class and M = HTML Comment
	            restrict:'A',
	            // The link function is responsible for registering attributes as 
	            // draggable
	            link: function(scope, element, attrs) {
                    element
                       .draggable({
                       	 zIndex: 999,
					     helper: function(){
					     	var $clone =  $(this).clone();
					     	$clone.draggable({ containment: "parent" });
					        $clone.unbind('click');
                            $clone.bind('click', function(eventObj) {
                                                   scope.open(eventObj); 
                                       });   	
						    return $clone;
					     }
					    });
				 }
	    }		
	 });
