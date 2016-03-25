console.log('made it to front-end controller');

myApp.controller('usersController', ['$scope', 'usersFactory', function ($scope, usersFactory){
  $scope.users = [];
  usersFactory.getUsers(function(data){
    $scope.users = data;
    console.log($scope.users);
  });
  $scope.addUser = function(){
    usersFactory.create($scope.newUser, function(data) {
       $scope.users = data;
       $scope.newUser = {};
     });
  };
  $scope.deleteUser = function(users){
    usersFactory.delete($scope);
  }
}]);


myApp.controller('itemsController', ['$scope', 'itemsFactory', function ($scope, itemsFactory){
  $scope.items = [];
  itemsFactory.getItems(function(data){
    $scope.items = data;
  });
  $scope.addItem = function(){
    itemsFactory.create($scope.newItem, function(data) {
       $scope.items = data;
       $scope.newItem = {};
     });
  };
  $scope.deleteItem = function(items){
    itemsFactory.delete($scope);
  }
}]);



myApp.controller('eventsController', ['$scope', 'itemsFactory', 'usersFactory', function ($scope, itemsFactory, usersFactory){
  $scope.events = [];
  itemsFactory.getEvents(function(data){
    $scope.events = data;
  });
  itemsFactory.getItems(function(data){
    $scope.items = data;
  });
  usersFactory.getUsers(function(data){
    $scope.users = data;
  });
  $scope.addevent = function(){
    itemsFactory.createEvent($scope.newEvent, function(data) {
       $scope.events = data;
       $scope.newEvent = {};
     });
  };
  $scope.deleteEvent = function(events){
    itemsFactory.deleteEvent($scope);
  }
}]);
