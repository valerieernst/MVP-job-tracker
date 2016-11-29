angular.module('jobHunter.jobs', [])
.controller('jobsController', function($scope) {
	$scope.job = {};

	var renderJobs = function() {
		$scope.job.data = [{'name': 'job1', 'company': 'company1'}]
	};

	renderJobs();
})