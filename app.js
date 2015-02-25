var app = angular.module('clashCalc', []);

app.controller('TroopCtrl', [
'$scope','$log',
function($scope, $log){
	$scope.troopTypes = ["Barbarian","Archer","Goblin","Giant","Wall Breaker", "Balloon","Wizard","Healer","Dragon","P.E.K.K.A"];
	$scope.townHall = {level: 0, imageUrl: "images/town-hall/Town_hall10.png"};
  $scope.troops = [];
  $scope.army = {
    totalDPS: 0,
    totalHP: 0,
    totalHS: 0,
    totalEC: 0,
    totalTrainingTime: 0
  }
  $scope.addTroop = function() {
    for(var troop in troopInfo) {
      if($scope.type === troopInfo[troop].name) {
        console.log("Match:", $scope.type, troopInfo[troop].name);
        $scope.troops.push({name: troopInfo[troop].name, level: parseInt($scope.level), quantity: 0, imageUrl: troopInfo[troop].level[$scope.level - 1].imageUrl, damagePerSecond: troopInfo[troop].level[$scope.level - 1].dps, housingSpace: troopInfo[troop].housingSpace, elixirCost: troopInfo[troop].level[$scope.level - 1].ec, trainingTime: troopInfo[troop].trainingTime, researchCost: troopInfo[troop].level[$scope.level].researchCost, damageUpgrade: troopInfo[troop].level[$scope.level].dps - troopInfo[troop].level[$scope.level - 1].dps, hp: troopInfo[troop].level[$scope.level - 1].hp, hpUpgrade: troopInfo[troop].level[$scope.level].hp - troopInfo[troop].level[$scope.level - 1].hp, researchTime: troopInfo[troop].level[$scope.level].researchTime, totalHealth: 0, totalDps: 0, totalTrainingTime: 0, totalHousingSpace: 0, maxLevel: troopInfo[troop].maxLevel});
      }
    }
  };
  $scope.updateTroop = function(troop) {
    console.log('updating', troop);
    for (var troops in troopInfo) {
      if (troop.name === troopInfo[troops].name && troop.level === troopInfo[troops].level.length) {
        console.log(troop.level, troopInfo[troops].level.length);
        console.log("max reached");
        troop.damagePerSecond = troopInfo[troops].level[troop.level - 1].dps;
        troop.elixirCost = troopInfo[troops].level[troop.level - 1].ec;
        troop.hp = troopInfo[troops].level[troop.level - 1].hp;
        troop.researchCost = "MAX Level";
        troop.damageUpgrade = "N/A";
        troop.hpUpgrade = "N/A";
        troop.researchTime = "N/A";
        troop.totalHealth = troop.quantity * troop.hp;
        troop.totalDps = troop.quantity * troop.damagePerSecond;
      } else if(troop.name === troopInfo[troops].name) {
        troop.damagePerSecond = troopInfo[troops].level[troop.level - 1].dps;
        troop.elixirCost = troopInfo[troops].level[troop.level - 1].ec;
        troop.hp = troopInfo[troops].level[troop.level - 1].hp;
        troop.researchCost = troopInfo[troops].level[troop.level].researchCost;
        troop.damageUpgrade = troopInfo[troops].level[troop.level].dps - troopInfo[troops].level[troop.level - 1].dps;
        troop.hpUpgrade = troopInfo[troops].level[troop.level].hp - troopInfo[troops].level[troop.level - 1].hp;
        troop.researchTime = troopInfo[troops].level[troop.level].researchTime;
        troop.totalHealth = troop.quantity * troop.hp;
        troop.totalDps = troop.quantity * troop.damagePerSecond; 
        troop.totalTrainingTime = troop.quantity * troop.trainingTime;
        troop.totalHousingSpace = troop.quantity * troop.housingSpace;
        troop.imageUrl = troopInfo[troops].level[troop.level - 1].imageUrl;
      }
    }
  };
  $scope.changeTroopQuantity = function(troop) {
    $scope.army.totalDPS -= troop.totalDps;
    $scope.army.totalHP -= troop.totalHealth;
    $scope.army.totalHS -= troop.totalHousingSpace;
    $scope.army.totalTrainingTime -= troop.totalTrainingTime;
  	troop.quantity = troop.quan;
  	troop.totalHealth = troop.quantity * troop.hp;
  	troop.totalDps = troop.quantity * troop.damagePerSecond; 
  	troop.totalTrainingTime = troop.quantity * troop.trainingTime;
  	troop.totalHousingSpace = troop.quantity * troop.housingSpace;
    $scope.army.totalDPS += troop.totalDps;
    $scope.army.totalHP += troop.totalHealth;
    $scope.army.totalHS += troop.totalHousingSpace;
    $scope.army.totalTrainingTime += troop.totalTrainingTime; 
  };
  $scope.levelUp = function(troop) {
    if(troop.level === troop.maxLevel) {return;}
  	troop.level += 1;
    $scope.updateTroop(troop);
  };
  $scope.levelDown = function(troop) {
  	if(troop.level <= 1) {return;}
  	troop.level -= 1;
    $scope.updateTroop(troop);
  };
  $scope.changeTownHallLevel = function() {
  	console.log($scope.townHall.level);
  	$scope.townHall.level = $scope.levelSelect;
    $scope.townHall.imageUrl = "images/town-hall/Town_hall" + $scope.townHall.level + ".png"
  };
}]);