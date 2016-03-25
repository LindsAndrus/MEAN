console.log("made it to front-end config");
var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
  $routeProvider
  .when('/people',{
    templateUrl: 'static/people.html',
    controller: 'PeopleControllers'
  })
  .when('/edit',{
    templateUrl: 'static/edit.html',
    controller: 'PeopleControllers'
  })
  .otherwise({
    redirectTo: '/'
  });
});
