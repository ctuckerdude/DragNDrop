'use strict';

// The app module definition. Container all routing definitions.
angular
  .module('dragNdropApp', ['ui.router', 'ui.bootstrap', 'ui-templates'])
    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
       $urlRouterProvider.otherwise('/');
       $stateProvider.state('home', { 
           url: '/',
           templateUrl: 'views/main.html',
             controller: 'MainCtrl'

       });
       
       $stateProvider.state('about', { 
       url: '/about',
       templateUrl: 'views/about.html'
  });   
}]);
