const List = require('mongoose').model('List');

module.exports = {
  index(request, response) {
    List.find({})
      .then(function(lists) {
        response.json(lists);
      })
      .catch(function(error) {
        console.log(error);
      })
  },
  create(request, response) {
    const list = new List(request.body);

    console.log('created new bucket list', list);

    list.save()
      .then(function(list) {
        console.log('saved bucket list', list);
        response.json(list);
      })
      .catch(function(error) {
        console.log(error);
      })
  },
};

