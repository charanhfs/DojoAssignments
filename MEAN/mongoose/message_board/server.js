const express = require('express');
const parse = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 8000;

const { Schema } = mongoose;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(parse.urlencoded({extended: true}));


mongoose.connect('mongodb://localhost/messageboardDB');
mongoose.connection.on('connected', () => console.log('Connected to messageboardDB'));

const messageSchema = new Schema({
	name: {
		type: String,
    required: [true, 'A name is required'],
    minlength: [4, 'Your name must be longer than 4 characters'],
    match: [/[^0-9]/g, 'No numbers in name'],
    trim: true,
	},
	text: {
		type: String,
		  minlength: [1, 'message must be longer that 1 character'],
	},
	comments: [{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}]
},{ timestamps:true });

const commentSchema = new Schema({
	name: {
		type: String,
    required: [true, 'A name is required'],
    minlength: [4, 'Your name must be longer than 4 characters'],
    match: [/[^0-9]/g, 'No numbers in name'],
    trim: true,
	},
	text: {
		type: String,
		  minlength: [1, 'comment must be longer that 1 character'],
	},
	_message: { type: Schema.Types.ObjectId, ref: 'Message'}
},{ timestamps:true });

const Message = mongoose.model('Message', messageSchema);
const Comment = mongoose.model('Comment', commentSchema);


app.get('/', function(request, response){
	Message.find({}).sort({createdAt: -1}).populate('comments').exec(function(error, messages){
    if(error){
      throw error;
    }
    response.render('index', { messages });
  });
});
app.post('/message', function(request, response) {
	Message.create(request.body)
		.then(function(message) {
			response.redirect('/');
		})
		.catch(function(error) {
			response.render('index', {
        errors: Object.keys(error.errors)
                  .map(errorKey => error.errors[errorKey].message)
        });
		});
});
app.post('/comments/:id', function (request, response){
    Message.findOne({_id: request.params.id}, function(err, message){
        // data from form on the front end
        var comment = new Comment(request.body);
        //  set the reference like this:
        comment._message = message._id;
        // now save both to the DB
        comment.save(function(err){
                message.comments.push(comment);
                message.save(function(err){
                     if(err) {
                          console.log('Error');
                     } else {
                          response.redirect('/');
                     }
                 });
         });
    });
 });


app.listen(port, () => console.log(`Listening to server on port ${ port }`));
