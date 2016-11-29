var mongoose = require('mongoose');

var jobSchema = new mongoose.Schema({
	id: String,
	company: String,
	title: String,
	location: String,
	interestLevel: Number,
	url: String,
	knowSomeone: Boolean,
	appSubmitted: Boolean,
	outcome: String
});



module.exports = mongoose.model('Job', jobSchema);