'use strict';

// Declare app level module which depends on views, and components
angular.module('moviecat', [
  'ngRoute',
  'moviecat.in_theaters',
  'moviecat.coming_soon',
  'moviecat.top250'
]).config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {

  //假如锚点出现#/！的情况，请配置$locationProvider.hashPrefix('');重要!!!!
  $locationProvider.hashPrefix('');
  
  $routeProvider.otherwise({ redirectTo: '/in_theaters' });
}]);