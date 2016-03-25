console.log('made it to factory');

myApp.factory('itemsFactory', function($http){
  var factory = {};
  var items = [];
  var users = [];
  factory.getItems = function(callback){
    $http.get('/dashboard').then(function(output) {
      items = output;
      console.log(items);
      callback(items, users);
    });
  };
  factory.create = function(info, callback){
    $http.post('/item/new', info).success(function(output){
      items.push(output);
      callback(items);
    });
  };
  factory.delete = function(callback){
    $http.post('/item/remove', itemDelete).then(function(output){
      items.splice(items.indexOf(output),1);
    })
  },
  factory.getEvents = function(callback){
    $http.get('/dashboard').then(function(output) {
      items = output;
      callback(items);
    });
  };
  factory.createEvent = function(info, callback){
    $http.post('/event/new', info).success(function(output){
      items.push(output);
      callback(items);
    });
  };
  factory.deleteEvent = function(callback){
    $http.post('/event/remove', itemDelete).then(function(output){
      items.splice(items.indexOf(output),1);
    })
  }
  return factory;
});

myApp.factory('usersFactory', function($http){
  var factory = {};
  var users = [];
  var items = [];
  factory.getUsers = function(callback){
    $http.get('/').then(function(output) {
      users = output;
      callback(users);
    });
  };
  factory.create = function(info, callback){
    $http.post('/user/new', info).success(function(output){
      console.log(output);
      // users.push(output);
      callback(output);
    });
  };
  factory.delete = function(callback){
    $http.post('/user/remove', userDelete).then(function(output){
      users.splice(users.indexOf(output),1);
    })
  }
  return factory;
});
