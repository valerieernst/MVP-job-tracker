angular.module('jobHunter.jobs', [])
.controller('jobsController', function($scope, httpReq) {

	$scope.data = {};

  $scope.sortHeader = 'interestLevel';
  $scope.sortReverse = true;
  $scope.filterToggle = false;

  $scope.filterAll = function(job) {
    if($scope.filterToggle) {
      return job.active === true;
    } else {
      return job
    }
  };

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