angular.module('jobHunter', [
	'jobHunter.jobs',
	'jobHunter.add',
	'ui.router'
])
.config(function($httpProvider, $stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/blank');

	$stateProvider
	.state('jobs', {
		url: '/jobs',
		templateUrl: 'app/jobs/jobs.html',
		controller: 'jobsController'
	})
	.state('add', {
		url: '/add',
		templateUrl: 'app/add/add.html',
		controller: 'addController'
	});

})
// .run(function(){
//   console.log('run executed');
// });
