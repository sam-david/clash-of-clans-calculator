var app = angular.module('clashCalc', []);

app.controller('TroopCtrl', [
'$scope','$log',
function($scope, $log){
	$scope.troopTypes = ["Goblin","Giant","Barbarian","witchbitch"];
  $scope.troops = [
    {name: 'Barbarian', level: 3, imageUrl: 'images/troops/barbarian/barbarianlevel1.png', damagePerSecond: 200, housingSpace: 30, elixirCost: 3000, totalHealth: 10000, totalDps: 500, trainingTime: 50, quantity: 25},
    {name: 'Giant', level: 6, imageUrl: 'images/troops/giant/giantlevel1.png', damagePerSecond: 400, housingSpace: 10, elixirCost: 1000, totalHealth: 4000, totalDps: 500, trainingTime: 30, quantity: 15},
    {name: 'Wall Breaker', level: 7, imageUrl: 'images/troops/wallbreaker/wallbreakerlevel1.png', damagePerSecond: 300, housingSpace: 20, elixirCost: 5000, totalHealth: 5000, totalDps: 500, trainingTime: 30, quantity: 35},
    {name: 'Goblin', level: 2, imageUrl: 'images/troops/goblin/goblinlevel1.png', damagePerSecond: 100, housingSpace: 10, elixirCost: 1000, totalHealth: 2000, totalDps: 500, trainingTime: 30, upgradeCost: 3000, damageUpgrade: 200, hpUpgrade: 20, upgradeTime: 1000, quantity: 25},
  ];
  // $scope.troop = {};
  $scope.addTroop = function() {
    $scope.troops.push({name: $scope.type, level: $scope.level, imageUrl: 'images/troops/goblin/goblinlevel1.png'});  
  };
  $scope.changeTroopQuantity = function(troop) {
  	// console.log(quan.quan);
  	troop.quantity = troop.quan;
  };
  $scope.levelUp = function(troop) {
  	troop.level += 1;
  };
  $scope.levelDown = function(troop) {
  	if(troop.level <= 1) {return;}
  	troop.level -= 1;
  };
}]);