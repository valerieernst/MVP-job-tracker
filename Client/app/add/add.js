 angular.module('jobHunter.add', [])
.controller('addController', function($scope, httpReq) {

	$scope.addNew = function() {
    httpReq.send($scope.job);
	}

});
