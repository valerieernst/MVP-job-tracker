var mongoose = require('mongoose');
var shortid = require('shortid')

var jobSchema = new mongoose.Schema({
	id: String,
	company: String,
	title: String,
	location: String,
	interestLevel: Number,
	url: String,
	knowSomeone: String,
	appSubmitted: Boolean,
	outcome: String
});


module.exports.getJobs = function(req, res) {
    //USED TO CLEAR DATABASE!
    // Job.remove({}, function(err) { 
    //    console.log('collection removed') 
    // });

    //potentially factor these out into the jobsModel?
    Job.find({}, function(err, jobs) {
      if(err) { console.log('An error getting jobs!'); }
      res.send(jobs);
    });
};

module.exports.createJob = function(req, res) {
    var body = req.body;

    Job.create({
      id: shortid.generate(),
      company: body.company,
      title: body.title,
      location: body.location,
      interestLevel: body.interestLevel,
      url: body.url,
      knowSomeone: body.knowSomeone || 'No',
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
};

module.exports.updateJob = function(req, res) {
    var body = req.body;
    var id = req.body.id;

    Job.update({'id': id}, {
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
  }


var Job = mongoose.model('Job', jobSchema);