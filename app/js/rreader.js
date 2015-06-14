'use strict'
var rreaderApp = angular.module('rreaderApp', [
  'ngRoute',
  'bookControllers'
  ]);

rreaderApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider
      .when('/',
        {
          controller: 'bookController',
          templateURL:'partials/view1.html'
        })
      .when('/partial2',
        {
          controller: 'bookController',
          templateURL:'partials/view2.html' 
        })
      .otherwise({redirectTo: '/'});
}]);

rreaderApp.controller('bookController', function($scope){

});

