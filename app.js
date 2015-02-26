var app = angular.module('clashCalc', []);

app.controller('TroopCtrl', [
'$scope','$log',
function($scope, $log){
	$scope.troopTypes = ["Barbarian","Archer","Goblin","Giant","Wall Breaker", "Balloon","Wizard","Healer","Dragon","P.E.K.K.A","Minion"];
	$scope.townHall = {level: 0, imageUrl: "images/town-hall/Town_hall10.png", levels: [1,2,3,4,5,6,7,8,9,10]};
  $scope.troops = [];
  $scope.townHallLevels = [1,2,3,4,5,6,7,8,9,10];
  $scope.currentTroopLevels = [];
  $scope.selectedQuantity = 1;
  $scope.army = {
    totalDPS: 0,
    totalHP: 0,
    totalHS: 0,
    totalEC: 0,
    totalDarkEC: 0,
    totalTrainingTime: 0
  }
  $scope.addTroop = function() {
    for (var i = 0; i < $scope.troops.length; i++ ) {
      if ($scope.type === $scope.troops[i].name) {
        console.log('we got one of those');
        alertify.alert("You already have " + $scope.type + "s in your army");
        return;
      }
    }
    for(var troop in troopInfo) {
      if($scope.type === troopInfo[troop].name) {
        console.log("Match:", $scope.type, troopInfo[troop].name);
        alertify.log("Added " + $scope.selectedQuantity + " Level " + $scope.level + " " + $scope.type + "s To Your Army");
        $scope.troops.push({name: troopInfo[troop].name, level: parseInt($scope.level), quantity: $scope.selectedQuantity, imageUrl: troopInfo[troop].level[$scope.level - 1].imageUrl, damagePerSecond: troopInfo[troop].level[$scope.level - 1].dps, housingSpace: troopInfo[troop].housingSpace, elixirCost: troopInfo[troop].level[$scope.level - 1].ec, trainingTime: troopInfo[troop].trainingTime, researchCost: troopInfo[troop].level[$scope.level].researchCost, damageUpgrade: troopInfo[troop].level[$scope.level].dps - troopInfo[troop].level[$scope.level - 1].dps, hp: troopInfo[troop].level[$scope.level - 1].hp, hpUpgrade: troopInfo[troop].level[$scope.level].hp - troopInfo[troop].level[$scope.level - 1].hp, researchTime: troopInfo[troop].level[$scope.level].researchTime, totalHealth: troopInfo[troop].level[$scope.level - 1].hp * $scope.selectedQuantity, totalDps: troopInfo[troop].level[$scope.level - 1].dps * $scope.selectedQuantity, totalTrainingTime: troopInfo[troop].trainingTime * $scope.selectedQuantity, totalHousingSpace: troopInfo[troop].housingSpace * $scope.selectedQuantity, totalElixirCost: troopInfo[troop].level[$scope.level - 1].ec * $scope.selectedQuantity, maxLevel: troopInfo[troop].maxLevel, darkTroop: troopInfo[troop].darkTroop});

          $scope.army.totalDPS += troopInfo[troop].level[$scope.level - 1].dps * $scope.selectedQuantity;
          $scope.army.totalHP += troopInfo[troop].level[$scope.level - 1].hp * $scope.selectedQuantity;
          $scope.army.totalHS += troopInfo[troop].housingSpace * $scope.selectedQuantity;
          if (troopInfo[troop].darkTroop === true ) {
            $scope.army.totalDarkEC += troopInfo[troop].level[$scope.level - 1].ec * $scope.selectedQuantity;
            console.log($scope.army.totalDarkEC);
          } else {
            $scope.army.totalEC += troopInfo[troop].level[$scope.level - 1].ec * $scope.selectedQuantity;
          }
          $scope.army.totalTrainingTime += troopInfo[troop].trainingTime * $scope.selectedQuantity; 
      }
    }
    $scope.sortTroops();
    console.log($scope.troops)
    $('.troop-level-select').prop('disabled', true);
  };
  $scope.sortTroops = function() {
    var sortedTroops = [];
    for (i = 0; i < $scope.troops.length; i++) {
      if ($scope.troops[i].name === "Barbarian") {
        sortedTroops.push($scope.troops[i]);
      }
    }
    for (i = 0; i < $scope.troops.length; i++) {
      if ($scope.troops[i].name === "Archer") {
        sortedTroops.push($scope.troops[i]);
      }
    }
    for (i = 0; i < $scope.troops.length; i++) {
      if ($scope.troops[i].name === "Goblin") {
        sortedTroops.push($scope.troops[i]);
      }
    }
    for (i = 0; i < $scope.troops.length; i++) {
      if ($scope.troops[i].name === "Giant") {
        sortedTroops.push($scope.troops[i]);
      }
    }
    for (i = 0; i < $scope.troops.length; i++) {
      if ($scope.troops[i].name === "Wall Breaker") {
        sortedTroops.push($scope.troops[i]);
      }
    }
    for (i = 0; i < $scope.troops.length; i++) {
      if ($scope.troops[i].name === "Balloon") {
        sortedTroops.push($scope.troops[i]);
      }
    }
    for (i = 0; i < $scope.troops.length; i++) {
      if ($scope.troops[i].name === "Wizard") {
        sortedTroops.push($scope.troops[i]);
      }
    }
    for (i = 0; i < $scope.troops.length; i++) {
      if ($scope.troops[i].name === "Healer") {
        sortedTroops.push($scope.troops[i]);
      }
    }
    for (i = 0; i < $scope.troops.length; i++) {
      if ($scope.troops[i].name === "Dragon") {
        sortedTroops.push($scope.troops[i]);
      }
    }
    for (i = 0; i < $scope.troops.length; i++) {
      if ($scope.troops[i].name === "P.E.K.K.A") {
        sortedTroops.push($scope.troops[i]);
      }
    }
    for (i = 0; i < $scope.troops.length; i++) {
      if ($scope.troops[i].name === "Minion") {
        sortedTroops.push($scope.troops[i]);
      }
    }
    $scope.troops = sortedTroops;
  };
  $scope.updateTroop = function(troop) {
    console.log('updating', troop);
    $scope.army.totalDPS -= troop.totalDps;
    $scope.army.totalHP -= troop.totalHealth;
    $scope.army.totalHS -= troop.totalHousingSpace;
    if (troop.darkTroop === true ) {
      $scope.army.totalDarkEC -= troop.totalElixirCost;
    } else {
      $scope.army.totalEC -= troop.totalElixirCost;
    }
    $scope.army.totalTrainingTime -= troop.totalTrainingTime;
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
        troop.totalElixirCost = troop.quantity * troop.elixirCost;
        troop.totalDps = troop.quantity * troop.damagePerSecond;
        troop.imageUrl = troopInfo[troops].level[troop.level - 1].imageUrl;
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
        troop.totalElixirCost = troop.quantity * troop.elixirCost;
        troop.totalTrainingTime = troop.quantity * troop.trainingTime;
        troop.totalHousingSpace = troop.quantity * troop.housingSpace;
        troop.imageUrl = troopInfo[troops].level[troop.level - 1].imageUrl;
        console.log(troop.totalElixirCost);
      }
    }
    $scope.army.totalDPS += troop.totalDps;
    $scope.army.totalHP += troop.totalHealth;
    $scope.army.totalHS += troop.totalHousingSpace;
    if (troop.darkTroop === true ) {
      $scope.army.totalDarkEC += troop.totalElixirCost;
    } else {
      $scope.army.totalEC += troop.totalElixirCost;
    }
    $scope.army.totalEC += troop.totalElixirCost;
    $scope.army.totalTrainingTime += troop.totalTrainingTime; 
  };
  $scope.changeTroopQuantity = function(troop) {
    $scope.army.totalDPS -= troop.totalDps;
    $scope.army.totalHP -= troop.totalHealth;
    $scope.army.totalHS -= troop.totalHousingSpace;
    if (troop.darkTroop === true ) {
      $scope.army.totalDarkEC -= troop.totalElixirCost;
    } else {
      $scope.army.totalEC -= troop.totalElixirCost;
    }
    $scope.army.totalTrainingTime -= troop.totalTrainingTime;
  	troop.quantity = troop.quan;
  	troop.totalHealth = troop.quantity * troop.hp;
  	troop.totalDps = troop.quantity * troop.damagePerSecond; 
  	troop.totalTrainingTime = troop.quantity * troop.trainingTime;
  	troop.totalHousingSpace = troop.quantity * troop.housingSpace;
    troop.totalElixirCost = troop.quantity * troop.elixirCost;
    $scope.army.totalDPS += troop.totalDps;
    $scope.army.totalHP += troop.totalHealth;
    $scope.army.totalHS += troop.totalHousingSpace;
    if (troop.darkTroop === true ) {
      $scope.army.totalDarkEC += troop.totalElixirCost;
    } else {
      $scope.army.totalEC += troop.totalElixirCost;
    }
    $scope.army.totalTrainingTime += troop.totalTrainingTime; 
  };
  $scope.levelUp = function(troop) {
    if(troop.level === troop.maxLevel) {return;}
  	troop.level += 1;
    $scope.updateTroop(troop);
  };
  $scope.levelDown = function(troop) {
  	if(troop.level <= 1) { return; }
  	troop.level -= 1;
    $scope.updateTroop(troop);
  };
  $scope.changeTownHallLevel = function() {
  	console.log($scope.townHall.level);
  	$scope.townHall.level = $scope.levelSelect;
    $scope.townHall.imageUrl = "images/town-hall/Town_hall" + $scope.townHall.level + ".png"
  };
  $scope.renderTroopLevels = function() {
    $scope.currentTroopLevels = [];
    console.log($scope.type, "levels")
    for (var troops in troopInfo) {
      if ($scope.type === troopInfo[troops].name) {
        console.log(troopInfo[troops].level.length);
        for (var i = 1; i <= troopInfo[troops].level.length; i++) {
          $scope.currentTroopLevels.push(i);
        }
      }
    }
    $('.troop-level-select').prop('disabled', false);
  };
  $scope.removeTroop = function(troop) {
    alertify.log('Removed '+ troop.name + " from your army");
    var index = 0;
    for (i = 0; i < $scope.troops.length; i++) {
      if (troop.name === $scope.troops[i].name) {
        index = i;
      }
    }
    $scope.troops.splice(index, 1);
  }
}]);