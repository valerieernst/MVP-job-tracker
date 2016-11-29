angular.module('jobHunter.jobs', [])
.controller('jobsController', function($scope, httpReq) {

	$scope.data = {};

  $scope.editJob = function(job) {
    job.editing = true;
  };

  $scope.doneEditing = function(job) {
    job.editing = false;

    httpReq.update(job);
  };


	 var renderJobs = function() {
    httpReq.getAll()
    .then(function(resp) {
      $scope.data.jobs = resp
    });
	};

	renderJobs();
})