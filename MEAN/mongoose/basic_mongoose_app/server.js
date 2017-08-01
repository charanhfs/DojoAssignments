const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
 name: String,
 age: Number
})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

app.use(bodyParser.urlencoded(true));

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(request, response) {
	User.find({}, function(err, users) {
		if(err) {
	      console.log(err, users);
	    } else {
	      console.log(users);
	      response.render('index', {users});
	    }
 })
})

app.post('/users', function(request, response) {
  console.log("POST DATA", request.body);
  // create a new User with the name and age corresponding to those from req.body
  var user = new User({name: request.body.name, age: request.body.age});
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  user.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a user!');
      response.redirect('/');
    }
  })
})

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
