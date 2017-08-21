const User = require('mongoose').model('User');

module.exports = {
   login(request, response) {
      console.log('request.body', request.body)
        User.findOneAndUpdate(request.body, request.body, { upsert: true, new: true })
            .then(user => {
                console.log('successfully created user: ', user);
                request.session.user = user.toObject();
                usersession = request.session.user;
                 response.cookie('username', user.name.toString());
                 response.cookie('expiration', Date.now() + 86400 * 1000);
                response.json(user);
                
            })
            .catch(error => {
                response.status(422).json(
                    Object.keys(error.errors).map(key => error.errors[key].message)
                );
            })
    },
  
  logout(request, response) {
    request.session.destroy();

    response.clearCookie('username');
    response.clearCookie('expiration');

    response.json(true);
  },

  users(request, response) {
    User.find({})
      .then(function(users) {
        response.json(users);
      })
      .catch(function(error) {
        console.log(error);
      })
  },
};



