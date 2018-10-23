// on déclare un module schoolApp grace à la fonction angular.module.
var schoolApp = angular.module('schoolApp',[]);
// on déclare un controller qu'on rattache au module.
//studentsCtrl est le nom du controller.
// scope est un parametre du ctrl et fait la liaison entre JS et html.
schoolApp.controller('studentsCtrl',function($scope){
  // $scope est une dépendance du controller
  $scope.firstName = 'Émilie';
  $scope.lastName = 'Gérard';
  $scope.age = '17';
  $scope.grade = 'Terminale';
});
