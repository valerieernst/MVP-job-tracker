angular.module('jobHunter.httpFactory', [])
.factory('httpReq', function($http) {

	var getAll = function() {
    return $http({
      method: 'GET',
      url: '/api/jobs',
    })
    .then(function(resp) {
      // console.log(resp.data)
      return resp.data
    })
  };

	var send = function(job) {
    return $http({
			method: 'POST',
      url: '/api/jobs',
      data: job
		}).then(function(resp) {
      console.log('Successful post!');
    });
	};

	var update = function(job) {
    return $http({
      method: 'PUT',
      url: '/api/jobs',
      data: job
    }).then(function(resp) {
      console.log('Update successful!', resp)
    });
  };

  return {
    getAll: getAll,
    send: send, 
    update: update
  }

})