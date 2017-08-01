const express = require('express');
const parse = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');

const { Schema } = mongoose;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(parse.urlencoded({extended: true}));
app.use(express.static(path.resolve('client')));

mongoose.connect('mongodb://localhost/animalsdb');
mongoose.connection.on('connected', () => console.log('Connected to booksDB'));

const animalSchema = new Schema({
	name: String,
	legs: Number,
	species: String,
	dangerous: Boolean
});

const Animal = mongoose.model('Animal', animalSchema);

app.get('/', function(request, response){
	Animal.find({}, function(err, animals) {
		  if(err) { console.log(err);}
			response.render('index', { animals });
	});
});
app.get('/animals/new', function(request, response) {
	response.render("newanimal");
});
app.post('/animals', function(request, response){
	Animal.create(request.body)
		.then(function(animal) {
			response.redirect('/');
		})
		.catch(function(error) {
			response.render('animals/new', {
        errors: Object.keys(error.errors)
                  .map(errorKey => error.errors[errorKey].message)
        });
		});
});
app.get('/animals/:animal_id', function(request, response){
  Animal.findById(request.params.animal_id)
    .then(function(animal) {
      response.render('showanimal', { animal });
    })
    .catch(function(error) {
      console.log(error);
    });
});
app.get('/animals/edit/:animal_id', function(request, response){
	Animal.findById(request.params.animal_id)
    .then(function(animal) {
      response.render('editanimal', { animal });
    })
    .catch(function(error) {
      console.log(error);
    });
});
app.post('/animals/:animal_id', function(request, response) {
	Animal.update({_id:request.params.animal_id},{$set:request.body}, function(err, results){
		if(err){
			console.log(err);
		}
		response.redirect('/');
	});
});
app.get('/animals/delete/:animal_id', function(request, response){
	Animal.findById(request.params.animal_id)
    .then(function(animal) {
      response.render('deleteanimal', { animal });
    })
    .catch(function(error) {
      console.log(error);
    });
});
app.post('/animals/destroy/:animal_id', function(request, response) {
	Animal.remove({_id:request.params.animal_id})
		.then(function(animal){
			response.redirect('/')
		})
		.catch(function(err){
			console.log(err);
		});
});


app.listen(port, () => console.log(`Listening to server on port ${ port }`));
