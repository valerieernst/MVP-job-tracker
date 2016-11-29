var jobsModel = require('./jobsModel.js')
var shortid = require('shortid')

var router = function(app, express) {

	app.get('/api/jobs', function(req, res) {
    //USED TO CLEAR DATABASE!
    // jobsModel.remove({}, function(err) { 
    //    console.log('collection removed') 
    // });

    //potentially factor these out into the jobsModel?
		jobsModel.find({}, function(err, jobs) {
      if(err) { console.log('An error getting jobs!'); }
      res.send(jobs);
    });
	});

	app.post('/api/jobs', function(req, res) {
    var body = req.body;

		jobsModel.create({
      id: shortid.generate(),
			company: body.company,
    	title: body.title,
    	location: body.location,
    	interestLevel: body.interestLevel,
    	url: body.url,
    	knowSomeone: body.knowSomeone,
      appSubmitted: false,
      outcome: 'Pending'
		}, 
    function(err, resp) {
      if(err) {
        console.log('err!');
      } else {
        console.log('new job created!', resp)
        res.send();
      }
    });
	});

  app.put('/api/jobs', function(req, res) {
    var body = req.body;
    var id = req.body.id;

    jobsModel.update({'id': id}, {
      company: body.company,
      title: body.title,
      location: body.location,
      interestLevel: body.interestLevel,
      url: body.url,
      knowSomeone: body.knowSomeone,
      appSubmitted: body.appSubmitted,
      outcome: body.outcome
    }, 
      function(err, resp) {
        if(err) { console.log('Update failed!'); }
        console.log('Update response', resp);
        res.send();
      })
  })

};

module.exports = router;



