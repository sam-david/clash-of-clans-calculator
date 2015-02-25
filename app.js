var app = angular.module('clashCalc', []);

var troopInfo = {
	barbarian: {
		name: "Barbarian",
		housingSpace: 1,
		movementSpeed: 2,
		attackSpeed: 2,
		trainingTime: 20,
		range: "melee",
		attackType: "melee",
		prefferredTarget: "poop",
		level: [
			{dps: 8,
			hp: 45,
			ec: 25,
			accessLevel: 0,
			imageUrl: 'images/troops/barbarian/barbarianlevel1.png',
			researchCost: 0,
			researchTime: 0},
			{dps: 11,
			hp: 54,
			ec: 40,
			accessLevel: 1,
			imageUrl: 'images/troops/barbarian/barbarianlevel2.png',
			researchCost: 50000,
			researchTime: 6}
		]
	}
}

app.controller('TroopCtrl', [
'$scope','$log',
function($scope, $log){
	$scope.troopTypes = ["Barbarian","Archer","Goblin","Giant","Wall Breaker", "Balloon","Wizard","Healer","Dragon","P.E.K.K.A"];
	$scope.townHall = {level: 0, imageUrl: "images/town-hall/Town_hall10.png"};
  // $scope.troops = [
  //   {name: 'Barbarian', level: 3, imageUrl: 'images/troops/barbarian/barbarianlevel1.png', damagePerSecond: 200, housingSpace: 30, elixirCost: 3000, totalHealth: 10000, totalDps: 500, trainingTime: 50, quantity: 25},
  //   {name: 'Giant', level: 6, imageUrl: 'images/troops/giant/giantlevel1.png', damagePerSecond: 400, housingSpace: 10, elixirCost: 1000, totalHealth: 4000, totalDps: 500, trainingTime: 30, quantity: 15},
  //   {name: 'Wall Breaker', level: 7, imageUrl: 'images/troops/wallbreaker/wallbreakerlevel1.png', damagePerSecond: 300, housingSpace: 20, elixirCost: 5000, totalHealth: 5000, totalDps: 500, trainingTime: 30, quantity: 35},
  //   {name: 'Goblin', level: 2, imageUrl: 'images/troops/goblin/goblinlevel1.png', damagePerSecond: 100, housingSpace: 10, elixirCost: 1000, totalHealth: 2000, totalDps: 500, trainingTime: 30, upgradeCost: 3000, damageUpgrade: 200, hpUpgrade: 20, upgradeTime: 1000, quantity: 25},
  // ];
  $scope.troops = [];
  // $scope.troop = {};
  $scope.addTroop = function() {
    for(var troop in troopInfo) {
      if($scope.type === troopInfo[troop].name) {
        console.log("Match:", $scope.type, troopInfo[troop].name);
        $scope.troops.push({name: troopInfo[troop].name, level: parseInt($scope.level), quantity: 0, imageUrl: troopInfo[troop].level[$scope.level - 1].imageUrl, damagePerSecond: troopInfo[troop].level[$scope.level - 1].dps, housingSpace: troopInfo[troop].housingSpace, elixirCost: troopInfo[troop].level[$scope.level - 1].ec, trainingTime: troopInfo[troop].trainingTime, researchCost: troopInfo[troop].level[$scope.level].researchCost, damageUpgrade: troopInfo[troop].level[$scope.level].dps - troopInfo[troop].level[$scope.level - 1].dps, hp: troopInfo[troop].level[$scope.level - 1].hp, hpUpgrade: troopInfo[troop].level[$scope.level].hp - troopInfo[troop].level[$scope.level - 1].hp, researchTime: troopInfo[troop].level[$scope.level].researchTime, totalHealth: 0, totalDps: 0, totalTrainingTime: 0, totalHousingSpace: 0});
      }
    }
  };
  $scope.updateTroop = function(troop) {
    for (var troops in troopInfo) {
      if(troop.name === troopInfo[troops].name) {
        troop.damagePerSecond = troopInfo[troops].level[troop.level - 1].dps;
        troop.elixirCost = troopInfo[troops].level[troop.level - 1].ec;
        troop.hp = troopInfo[troops].level[troop.level - 1].hp;
      }
    }
  };
  $scope.changeTroopQuantity = function(troop) {
  	// console.log(quan.quan);
  	troop.quantity = troop.quan;
  	troop.totalHealth = troop.quantity * troop.hp;
  	troop.totalDps = troop.quantity * troop.damagePerSecond; 
  	troop.totalTrainingTime = troop.quantity * troop.trainingTime;
  	troop.totalHousingSpace = troop.quantity * troop.housingSpace;
  };
  $scope.levelUp = function(troop) {
    if(troop.level >= 8) {return;}
  	troop.level += 1;
    $scope.updateTroop();
  	// troop.imageUrl = troopInfo.;
  };
  $scope.levelDown = function(troop) {
  	if(troop.level <= 1) {return;}
  	troop.level -= 1;
    $scope.updateTroop();
  };
  $scope.changeTownHallLevel = function() {
  	console.log($scope.townHall.level);
  	$scope.townHall.level = $scope.levelSelect;
    $scope.townHall.imageUrl = "images/town-hall/Town_hall" + $scope.townHall.level + ".png"
  }
}]);