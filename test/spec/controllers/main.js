'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('dragNdropApp'));
 // beforeEach(module('dragNdropApp', ['ui.router', 'ui.bootstrap', 'ui-templates']));
  var MainCtrl,
    scope;

  beforeEach(function() {
    module('ui.router');
    module('ui.bootstrap');
    module('ui-templates');
  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('Should display droppable widgets', function () {
  });
});
