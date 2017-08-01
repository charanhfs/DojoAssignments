const mongoose = require('mongoose');
var User = mongoose.model('User');

var users = require('../controllers/quotes.js');
module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index')
  })
  app.post('/quotes', function(req,res){
    users.create(req, res)
  })
  app.get('/quotes', function (req, res) {
    users.show(req, res)
  })
}
