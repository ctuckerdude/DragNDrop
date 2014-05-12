'use strict';

// The main application controller.

angular.module('dragNdropApp')
  .controller('MainCtrl', ['$scope', '$modal', '$log', 'SelectableWidgets', 'ContainerWidgets',
    function ($scope, $modal, $log, SelectableWidgets, ContainerWidgets) {
  	 
     // Retrieve container widgets
  	 $scope.containerWidgets = ContainerWidgets.get();
  	  

     // Retrieve selectable widgets 
     $scope.selectableWidgets = SelectableWidgets.get();                                                      
  	 $scope.primaryWidgets = $scope.selectableWidgets.primary_widgets;
  	 $scope.successWidgets = $scope.selectableWidgets.success_widgets;

     // Handler for saving container widgets
     $scope.saveContainerWidgets = function() {
        var containerWidgets = [];
        var containerWidget;

        $scope.droppableContainer.children().each(function(index, element) {
           containerWidget = JSON.parse($(element).attr("widget"));
           containerWidget.xpos = $(element).css("left").replace("px", "");
           containerWidget.ypos = $(element).css("top").replace("px", "");    
           containerWidgets.push(containerWidget);
        });

        ContainerWidgets.put(containerWidgets);
     }

    
    // Handler for opening widget modal
    $scope.open = function (eventObj) {

      var modalInstance = $modal.open({
        templateUrl: 'views/partials/app-tpls/widget_modal.html',
        controller: WidgetModalCtrl,
        size: 'sm',
        resolve: {
          eventObj: function() {
            return eventObj;
          }  
        }
      });

      modalInstance.result.then(function () {
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });

    };


  }]);
