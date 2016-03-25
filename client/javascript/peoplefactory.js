console.log('made it to factory');

myApp.factory('peopleFactory', function($http){
  var factory = {};
  var people = [];
  factory.getPerson = function(callback){
    $http.get('/people').success(function(output) {
      people = output;
      callback(people);
    })
  };
  factory.create = function(info, callback){
    $http.post('/person/new', info).success(function(output){
      people.push(output);
      callback(people);
    });
  };
  factory.delete = function(personDestroy){
    $http.post('/person/remove', personDestroy).success(function(output){
      people.splice(people.indexOf(output),1);
    })
  };
  return factory;
});
