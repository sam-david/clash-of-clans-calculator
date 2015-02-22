var app = angular.module('clashCalc', []);

app.controller('TroopCtrl', [
'$scope',
function($scope){
  $scope.troops = [
    {name: 'barbarian', level: 3, imageUrl: 'images/troops/barbarian/barbarianlevel1.png'},
    {name: 'giant', level: 6, imageUrl: 'images/troops/giant/giantlevel1.png'},
    {name: 'wall breaker', level: 7, imageUrl: 'images/troops/wallbreaker/wallbreakerlevel1.png'},
    {name: 'goblin', level: 2, imageUrl: 'images/troops/goblin/goblinlevel1.png'},
  ];
  $scope.addPost = function() {
    $scope.troops.push({name: 'goblin', level: 4, imageUrl: 'images/troops/goblin/goblinlevel1.png'});  
  };
}]);