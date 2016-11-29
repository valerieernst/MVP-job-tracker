var jobsModel = require('./jobsModel.js')

var router = function(app, express) {

	app.get('/api/jobs', function(req, res) {
		console.log('successfully called app.get');
		res.end();
	});

	app.post('/api/jobs', function(req, res) {
    var body = req.body
		jobsModel.create({
				company: body.company,
      	title: body.title,
      	location: body.location,
      	interestLevel: body.interestLevel,
      	url: body.url,
      	knowSomeone: body.knowSomeone
		}, function(err, resp) {
        if(err) {
          console.log('err!');
        } else {
          console.log('new job created!', resp)
        }
      });

	});

};

module.exports = router;



