const express = require('express');
const body = require('body-parser');

const app = express();

app.use(body.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	response.render('index');
});

app.post('/result', function(req, res) {
		submitted_info = {
			name: req.body.name,
			dojo_location: req.body.location,
			favorite_language: req.body.language,
			comment: req.body.comment
		};
	 	res.render("results",{user_data: submitted_info});
	})



app.listen(8000, function() {
  console.log("listening on port 8000");
})
