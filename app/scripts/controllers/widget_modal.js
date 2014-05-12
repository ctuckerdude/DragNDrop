'use strict';

// Controller used for handling widget modal dialog
var WidgetModalCtrl = ['$scope', '$modalInstance', 'eventObj', function ($scope, $modalInstance, eventObj) {

  $scope.selectedWidget = eventObj.target;
  $scope.selectedWidgetDetails = JSON.parse($scope.selectedWidget.attributes.widget.value);

  $scope.ok = function () { 
   $scope.selectedWidget.attributes.widget.value = JSON.stringify($scope.selectedWidgetDetails);
   $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.delete = function () {
    $scope.selectedWidget.remove();
    $modalInstance.dismiss('cancel');
  };

}];