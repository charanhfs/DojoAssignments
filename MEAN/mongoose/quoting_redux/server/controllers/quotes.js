var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
  show: function(req, res) {
    User.find({}, function(err, quotes) {
      res.render('quotes', {quotes: quotes});
    }).sort({createdAt: -1});
  },
  create: function(req, res) {
    var user = new User({name: req.body.name, quote: req.body.quote});
    user.save(function(err) {
      if(err){
        console.log("something went wrong");
				res.render('index', {title: 'you have errors!', errors: user.errors});
      } else {
        res.redirect('/quotes');
      }
    })
  }
}
