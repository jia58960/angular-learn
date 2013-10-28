'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope',function($scope) {
  	$scope.qty = 2;
  	$scope.cost = 2.596;

  }])
  .controller('MyCtrl2', [function() {

  }]);