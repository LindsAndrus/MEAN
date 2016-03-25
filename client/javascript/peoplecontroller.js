console.log('made it to front-end controller');

myApp.controller('PeopleControllers', function ($scope, peopleFactory){
  $scope.people = peopleFactory.getPerson(function(data){
    $scope.people = data;
    console.log($scope.people);
  });

  $scope.addperson = function(){
    // console.log($scope.newperson);
    peopleFactory.create($scope.newperson, function(data) {
       $scope.people = data;
       $scope.newperson = {};
    });
  };

  $scope.deleteperson = function(person){
    peopleFactory.delete(person);
  };
});
