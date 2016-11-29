var router = function(app, express) {
	app.get('/api/jobs', function(req, res) {
		console.log('successfully called app.get');
		res.end();
	});
	app.post('/api/jobs', function(req, res) {
		console.log('called app.post');
		res.end();

	});

};

module.exports = router;