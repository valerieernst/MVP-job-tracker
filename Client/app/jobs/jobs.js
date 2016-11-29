angular.module('jobHunter.jobs', [])
.controller('jobsController', function($scope, $http) {
	$scope.job = {};

	var renderJobs = function() {
		return $http({
			method: 'GET',
			url: '/api/jobs',
		})
		.then(function(resp) {
			console.log('here is the resp',resp);
		})
	};

	renderJobs();
})