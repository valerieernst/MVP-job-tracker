 angular.module('jobHunter.add', [])
.controller('addController', function($scope, $http) {

	$scope.addNew = function() {
		console.log('addNew being called!', $scope.job)
		return $http({
			method: 'POST',
      url: '/api/jobs',
      data: $scope.job
		});
	}

});
