'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope','time',function($scope,time) {
  	
  	$scope.time = time;

  }])
  .controller('MyCtrl2', [function() {

  }]);

