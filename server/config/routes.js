console.log('made it to server routes')
var Users = require('./../controllers/users.js');
var Items = require('./../controllers/items.js');

module.exports = function(app){
  app.get('/', Users.index);
  app.get('/dashboard', Items.index);
  app.post('/user/new', Users.new);
  app.post('/item/new', Items.new);
  // app.get('/dashboard', Users.show);
  // app.post('/users/:id', Users.update);
  // app.get('/users/:id/destroy', Users.delete);
};
