const Note = require('mongoose').model('Note');

class NoteController{
    index(request, response) {
    console.log('grabbing notes');

    Note.find({}).sort({createdAt: -1})
      .then(notes => {
        response.json(notes);
      })
      .catch(error => {
        response.status(422).json(error.message);
      });

  }
    create(request, response) {
    Note.create(request.body)
      .then(note => {
        response.json(note);
      })
      .catch(error => {
      console.log('server errors creating note', error);
      response.status(422).json(
      Object.keys(error.errors).map(key => error.errors[key].message)
        );
      })
  }
}

module.exports = new NoteController();