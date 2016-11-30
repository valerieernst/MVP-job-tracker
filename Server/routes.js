var jobsModel = require('./jobsModel.js');

var router = function(app, express) {

	app.get('/api/jobs', jobsModel.getJobs);

	app.post('/api/jobs', jobsModel.createJob);

  app.put('/api/jobs', jobsModel.updateJob)

};

module.exports = router;



