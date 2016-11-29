 angular.module('jobHunter.add', [])
.controller('addController', function($scope) {

	$scope.addNew = function() {
		console.log('addNew being called!', $scope.job)
		// $scope.submitJob.$setPristine();
	}

});