'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope',function($scope) {
  	$scope.master = {};

  	$scope.update = function(user){
  		$scope.master = angular.copy(user);
  	}
  	
  	$scope.reset = function(){
  		$scope.user = angular.copy($scope.master);
  	}

  	$scope.isUnchanged = function(user){
  		return angular.equals(user, $scope.master);
  	}

  	$scope.reset();

  }])
  .controller('MyCtrl2', [function() {

  }]);

