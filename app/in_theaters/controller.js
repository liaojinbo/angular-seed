(function (angular) {
  'use strict';

  var module = angular.module('moviecat.in_theaters', ['ngRoute'])

  module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/in_theaters', {
      templateUrl: 'in_theaters/view.html',
      controller: 'InTheatersController'
    });
  }])

  module.controller('InTheatersController', [
    '$scope', '$http',
    function ($scope, $http) {
      $scope.subjects = [];
      $scope.message = ''
      $http.get('../data.json', []).then(function (data) {

        if (data.status == 200) {
          $scope.subjects = data.data;
          
        } else {
          $scope.message = '获取数据失败';
        }
      }, function (err) {
        $scope.message = '获取数据失败';
        console.log(err);
      })
    }
  ]);
})(angular)