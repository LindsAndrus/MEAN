console.log("made it to front-end config");
var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
  $routeProvider
  .when('/',{
    templateUrl: 'static/login.html',
    controller: 'usersController'
  })
  .when('/dashboard',{
    templateUrl: 'static/dashboard.html',
    controller: 'eventsController'
  })
  .when('/user/:id',{
    templateUrl: 'static/user_list.html',
    controller: 'usersController'
  })
  .otherwise({
    redirectTo: '/'
  });
});
