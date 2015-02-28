var app = angular.module('clashCalc', []);

app.controller('TroopCtrl', [
'$scope','$log',
function($scope, $log){
	$scope.troopTypes = ["Barbarian","Archer","Goblin","Giant","Wall Breaker", "Balloon","Wizard","Healer","Dragon","P.E.K.K.A","Minion","Hog Rider","Valkyrie","Golem","Witch"];
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
  $scope.existingTroopsCookie = function() {
    if ($.cookie('troop_cookie') != undefined) {
      console.log(JSON.parse($.cookie('troop_cookie')));
      $scope.troops = JSON.parse($.cookie('troop_cookie'));
    }
  }
  $scope.existingTroopsCookie();
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
    $scope.cookieSaveTroops();
    $('.troop-level-select').prop('disabled', true);
  };
  $scope.cookieSaveTroops = function() {
    cookieTroops = $scope.troops;
    for (i = 0; i < cookieTroops.length; i++) {
      delete cookieTroops[i]['$$hashKey'];
    }
    $.cookie('troop_cookie', JSON.stringify(cookieTroops));
    console.log(JSON.parse($.cookie('troop_cookie')));
  }
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
    for (i = 0; i < $scope.troops.length; i++) {
      if ($scope.troops[i].name === "Hog Rider") {
        sortedTroops.push($scope.troops[i]);
      }
    }
    for (i = 0; i < $scope.troops.length; i++) {
      if ($scope.troops[i].name === "Valkyrie") {
        sortedTroops.push($scope.troops[i]);
      }
    }
    for (i = 0; i < $scope.troops.length; i++) {
      if ($scope.troops[i].name === "Golem") {
        sortedTroops.push($scope.troops[i]);
      }
    }
    for (i = 0; i < $scope.troops.length; i++) {
      if ($scope.troops[i].name === "Witch") {
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
    $scope.army.totalTrainingTime += troop.totalTrainingTime;
    $scope.cookieSaveTroops(); 
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
    $scope.cookieSaveTroops(); 
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
    alertify.log('Removed '+ troop.name + "s from your army");
    var index = 0;
    for (i = 0; i < $scope.troops.length; i++) {
      if (troop.name === $scope.troops[i].name) {
        index = i;
      }
    }
    $scope.troops.splice(index, 1);
    $scope.cookieSaveTroops();
  }
}]);

app.controller('DefenseCtrl', [
'$scope','$log',
function($scope, $log){

  $scope.defenseTypes = ["Cannon","Archer Tower","Mortar","Air Defense","Wizard Tower","Hidden Tesla","X-Bow","Inferno Tower"];
  $scope.totalDefenseDps = 0;
  $scope.totalDefenseHp = 0;
  $scope.cannons = [];
  $scope.cannonLevels = [1,2,3,4,5,6,7,8,9,10,11,12]
  $scope.cannonTotalDps = 0;
  $scope.cannonTotalHp = 0;
  $scope.archerTowers = [];
  $scope.archerTowerTotalHp = 0;
  $scope.archerTowerTotalDps = 0;
  $scope.mortars = [];
  $scope.mortarTotalHp = 0;
  $scope.mortarTotalDps = 0;
  $scope.airDefenses = [];
  $scope.airDefenseTotalHp = 0;
  $scope.airDefenseTotalDps = 0;
  $scope.wizardTowers = [];
  $scope.wizardTowerTotalHp = 0;
  $scope.wizardTowerTotalDps = 0;
  $scope.hiddenTeslas = [];
  $scope.hiddenTeslaTotalHp = 0;
  $scope.hiddenTeslaTotalDps = 0;
  $scope.xbows = [];
  $scope.xbowTotalHp = 0;
  $scope.xbowTotalDps = 0;
  $scope.infernoTowers = [];
  $scope.infernoTowerTotalHp = 0;
  $scope.infernoTowerTotalDps = 0;

  $scope.existingDefensesCookie = function() {
    if ($.cookie('defense_cookie') != undefined) {
      console.log('Existing Defenses:', JSON.parse($.cookie('defense_cookie')));
      $scope.cannons = JSON.parse($.cookie('defense_cookie')).cannons;
      $scope.archerTowers = JSON.parse($.cookie('defense_cookie')).archerTowers;
      $scope.mortars = JSON.parse($.cookie('defense_cookie')).mortars;
      $scope.airDefenses = JSON.parse($.cookie('defense_cookie')).airDefenses;
      $scope.wizardTowers = JSON.parse($.cookie('defense_cookie')).wizardTowers;
      $scope.hiddenTeslas = JSON.parse($.cookie('defense_cookie')).hiddenTeslas;
      $scope.xbows = JSON.parse($.cookie('defense_cookie')).xbows;
      $scope.infernoTowers = JSON.parse($.cookie('defense_cookie')).infernoTowers;
      $scope.cannonTotalDps = JSON.parse($.cookie('defense_cookie')).cannonTotalDps;
      $scope.cannonTotalHp = JSON.parse($.cookie('defense_cookie')).cannonTotalHp;
      $scope.archerTowerTotalHp = JSON.parse($.cookie('defense_cookie')).archerTowerTotalHp;
      $scope.archerTowerTotalDps = JSON.parse($.cookie('defense_cookie')).archerTowerTotalDps;
      $scope.mortarTotalHp = JSON.parse($.cookie('defense_cookie')).mortarTotalHp;
      $scope.mortarTotalDps = JSON.parse($.cookie('defense_cookie')).mortarTotalDps;
      $scope.airDefenseTotalHp = JSON.parse($.cookie('defense_cookie')).airDefenseTotalHp;
      $scope.airDefenseTotalDps = JSON.parse($.cookie('defense_cookie')).airDefenseTotalDps;
      $scope.wizardTowerTotalHp = JSON.parse($.cookie('defense_cookie')).wizardTowerTotalHp;
      $scope.wizardTowerTotalDps = JSON.parse($.cookie('defense_cookie')).wizardTowerTotalDps;
      $scope.hiddenTeslaTotalHp = JSON.parse($.cookie('defense_cookie')).hiddenTeslaTotalHp;
      $scope.hiddenTeslaTotalDps = JSON.parse($.cookie('defense_cookie')).hiddenTeslaTotalDps;
      $scope.xbowTotalHp = JSON.parse($.cookie('defense_cookie')).xbowTotalHp;
      $scope.xbowTotalDps = JSON.parse($.cookie('defense_cookie')).xbowTotalDps;
      $scope.infernoTowerTotalHp = JSON.parse($.cookie('defense_cookie')).infernoTowerTotalHp;
      $scope.infernoTowerTotalDps = JSON.parse($.cookie('defense_cookie')).infernoTowerTotalDps;
      $scope.totalDefenseDps = JSON.parse($.cookie('defense_cookie')).totalDefenseDps;
      $scope.totalDefenseHp = JSON.parse($.cookie('defense_cookie')).totalDefenseHp;
    }
  }
  $scope.existingDefensesCookie();
  $scope.cookieSaveDefenses = function() {
    var cookieDefenses = {};
    cookieDefenses.cannons = $scope.cannons;
    cookieDefenses.archerTowers = $scope.archerTowers;
    cookieDefenses.mortars = $scope.mortars;
    cookieDefenses.airDefenses = $scope.airDefenses;
    cookieDefenses.wizardTowers = $scope.wizardTowers;
    cookieDefenses.hiddenTeslas = $scope.hiddenTeslas;
    cookieDefenses.xbows = $scope.xbows;
    cookieDefenses.infernoTowers = $scope.infernoTowers;
    cookieDefenses.cannonTotalDps = $scope.cannonTotalDps;
    cookieDefenses.cannonTotalHp = $scope.cannonTotalHp
    cookieDefenses.archerTowerTotalHp = $scope.archerTowerTotalHp
    cookieDefenses.archerTowerTotalDps = $scope.archerTowerTotalDps
    cookieDefenses.mortarTotalHp = $scope.mortarTotalHp
    cookieDefenses.mortarTotalDps = $scope.mortarTotalDps
    cookieDefenses.airDefenseTotalHp = $scope.airDefenseTotalHp
    cookieDefenses.airDefenseTotalDps = $scope.airDefenseTotalDps
    cookieDefenses.wizardTowerTotalHp = $scope.wizardTowerTotalHp
    cookieDefenses.wizardTowerTotalDps = $scope.wizardTowerTotalDps
    cookieDefenses.hiddenTeslaTotalHp = $scope.hiddenTeslaTotalHp
    cookieDefenses.hiddenTeslaTotalDps = $scope.hiddenTeslaTotalDps
    cookieDefenses.xbowTotalHp = $scope.xbowTotalHp
    cookieDefenses.xbowTotalDps = $scope.xbowTotalDps
    cookieDefenses.infernoTowerTotalHp = $scope.infernoTowerTotalHp
    cookieDefenses.infernoTowerTotalDps = $scope.infernoTowerTotalDps
    cookieDefenses.totalDefenseDps = $scope.totalDefenseDps
    cookieDefenses.totalDefenseHp = $scope.totalDefenseHp
    for (var defense in cookieDefenses) {
      for (i=0;i < cookieDefenses[defense].length; i++) {
        delete cookieDefenses[defense][i]['$$hashKey'];
      }
    }
    $.cookie('defense_cookie', JSON.stringify(cookieDefenses));
    console.log("Saved Defenses:", JSON.parse($.cookie('defense_cookie')));
  }
  $scope.addDefense = function(type) {
    alertify.set({delay: 1500});
    if (type === "Cannon") {
      if ($scope.cannons.length >= defenseInfo.cannon.townhallLevelCounts[defenseInfo.cannon.townhallLevelCounts.length-1]) {return;}
      alertify.log("Added Cannon to Your Army");
      $scope.cannons.push({name: "Cannon", imageUrl: defenseInfo.cannon.level[0].imageUrl, level: 1, damagePerSecond: defenseInfo.cannon.level[0].dps, hp: defenseInfo.cannon.level[0].hp, upgradeCost: defenseInfo.cannon.level[1].cost, damageUpgrade: defenseInfo.cannon.level[1].dps - defenseInfo.cannon.level[0].dps, hpUpgrade: defenseInfo.cannon.level[1].hp - defenseInfo.cannon.level[0].hp, buildTime: defenseInfo.cannon.level[0].buildTime, maxLevel: defenseInfo.cannon.maxLevel})
      $scope.cannonTotalDps += defenseInfo.cannon.level[0].dps;
      $scope.cannonTotalHp += defenseInfo.cannon.level[0].hp;
      $scope.totalDefenseDps += defenseInfo.cannon.level[0].dps;
      $scope.totalDefenseHp += defenseInfo.cannon.level[0].hp;
    } else if (type === "Archer Tower") {
      if ($scope.archerTowers.length >= defenseInfo.archerTower.townhallLevelCounts[defenseInfo.archerTower.townhallLevelCounts.length-1]) {return;}
      alertify.log("Added Archer Tower to Your Army");
      $scope.archerTowers.push({name: "Archer Tower", imageUrl: defenseInfo.archerTower.level[0].imageUrl, level: 1, damagePerSecond: defenseInfo.archerTower.level[0].dps, hp: defenseInfo.archerTower.level[0].hp, upgradeCost: defenseInfo.archerTower.level[1].cost, damageUpgrade: defenseInfo.archerTower.level[1].dps - defenseInfo.archerTower.level[0].dps, hpUpgrade: defenseInfo.archerTower.level[1].hp - defenseInfo.archerTower.level[0].hp, buildTime: defenseInfo.archerTower.level[0].buildTime, maxLevel: defenseInfo.archerTower.maxLevel})
      $scope.archerTowerTotalDps += defenseInfo.archerTower.level[0].dps;
      $scope.archerTowerTotalHp += defenseInfo.archerTower.level[0].hp;
      $scope.totalDefenseDps += defenseInfo.archerTower.level[0].dps;
      $scope.totalDefenseHp += defenseInfo.archerTower.level[0].hp;
    } else if (type === "Mortar") {
      if ($scope.mortars.length >= defenseInfo.mortar.townhallLevelCounts[defenseInfo.mortar.townhallLevelCounts.length-1]) {return;}
      alertify.log("Added Mortar to Your Army");
      $scope.mortars.push({name: "Mortar", imageUrl: defenseInfo.mortar.level[0].imageUrl, level: 1, damagePerSecond: defenseInfo.mortar.level[0].dps, hp: defenseInfo.mortar.level[0].hp, upgradeCost: defenseInfo.mortar.level[1].cost, damageUpgrade: defenseInfo.mortar.level[1].dps - defenseInfo.mortar.level[0].dps, hpUpgrade: defenseInfo.mortar.level[1].hp - defenseInfo.mortar.level[0].hp, buildTime: defenseInfo.mortar.level[0].buildTime, maxLevel: defenseInfo.mortar.maxLevel})
      $scope.mortarTotalDps += defenseInfo.mortar.level[0].dps;
      $scope.mortarTotalHp += defenseInfo.mortar.level[0].hp;
      $scope.totalDefenseDps += defenseInfo.mortar.level[0].dps;
      $scope.totalDefenseHp += defenseInfo.mortar.level[0].hp;
    } else if (type === "Air Defense") {
      if ($scope.airDefenses.length >= defenseInfo.airDefense.townhallLevelCounts[defenseInfo.airDefense.townhallLevelCounts.length-1]) {return;}
      alertify.log("Added Air Defense to Your Army");
      $scope.airDefenses.push({name: "Air Defense", imageUrl: defenseInfo.airDefense.level[0].imageUrl, level: 1, damagePerSecond: defenseInfo.airDefense.level[0].dps, hp: defenseInfo.airDefense.level[0].hp, upgradeCost: defenseInfo.airDefense.level[1].cost, damageUpgrade: defenseInfo.airDefense.level[1].dps - defenseInfo.airDefense.level[0].dps, hpUpgrade: defenseInfo.airDefense.level[1].hp - defenseInfo.airDefense.level[0].hp, buildTime: defenseInfo.airDefense.level[0].buildTime, maxLevel: defenseInfo.airDefense.maxLevel})
      $scope.airDefenseTotalDps += defenseInfo.airDefense.level[0].dps;
      $scope.airDefenseTotalHp += defenseInfo.airDefense.level[0].hp;
      $scope.totalDefenseDps += defenseInfo.airDefense.level[0].dps;
      $scope.totalDefenseHp += defenseInfo.airDefense.level[0].hp;
    } else if (type === "Wizard Tower") {
      console.log("poopj",$scope.wizardTowers.length, defenseInfo.wizardTower.townhallLevelCounts[defenseInfo.wizardTower.townhallLevelCounts.length-1]);
      if ($scope.wizardTowers.length >= defenseInfo.wizardTower.townhallLevelCounts[defenseInfo.wizardTower.townhallLevelCounts.length-1]) {return;}
      alertify.log("Added Wizard Tower to Your Army");
      $scope.wizardTowers.push({name: "Wizard Tower", imageUrl: defenseInfo.wizardTower.level[0].imageUrl, level: 1, damagePerSecond: defenseInfo.wizardTower.level[0].dps, hp: defenseInfo.wizardTower.level[0].hp, upgradeCost: defenseInfo.wizardTower.level[1].cost, damageUpgrade: defenseInfo.wizardTower.level[1].dps - defenseInfo.wizardTower.level[0].dps, hpUpgrade: defenseInfo.wizardTower.level[1].hp - defenseInfo.wizardTower.level[0].hp, buildTime: defenseInfo.wizardTower.level[0].buildTime, maxLevel: defenseInfo.wizardTower.maxLevel})
      $scope.wizardTowerTotalDps += defenseInfo.wizardTower.level[0].dps;
      $scope.wizardTowerTotalHp += defenseInfo.wizardTower.level[0].hp;
      $scope.totalDefenseDps += defenseInfo.wizardTower.level[0].dps;
      $scope.totalDefenseHp += defenseInfo.wizardTower.level[0].hp;
    } else if (type === "Hidden Tesla") {
      if ($scope.hiddenTeslas.length >= defenseInfo.hiddenTesla.townhallLevelCounts[defenseInfo.hiddenTesla.townhallLevelCounts.length-1]) {return;}
      alertify.log("Added Hidden Tesla to Your Army");
      $scope.hiddenTeslas.push({name: "Hidden Tesla", imageUrl: defenseInfo.hiddenTesla.level[0].imageUrl, level: 1, damagePerSecond: defenseInfo.hiddenTesla.level[0].dps, hp: defenseInfo.hiddenTesla.level[0].hp, upgradeCost: defenseInfo.hiddenTesla.level[1].cost, damageUpgrade: defenseInfo.hiddenTesla.level[1].dps - defenseInfo.hiddenTesla.level[0].dps, hpUpgrade: defenseInfo.hiddenTesla.level[1].hp - defenseInfo.hiddenTesla.level[0].hp, buildTime: defenseInfo.hiddenTesla.level[0].buildTime, maxLevel: defenseInfo.hiddenTesla.maxLevel})
      $scope.hiddenTeslaTotalDps += defenseInfo.hiddenTesla.level[0].dps;
      $scope.hiddenTeslaTotalHp += defenseInfo.hiddenTesla.level[0].hp;
      $scope.totalDefenseDps += defenseInfo.hiddenTesla.level[0].dps;
      $scope.totalDefenseHp += defenseInfo.hiddenTesla.level[0].hp;
    } else if (type === "X-Bow") {
      if ($scope.xbows.length >= defenseInfo.xbow.townhallLevelCounts[defenseInfo.xbow.townhallLevelCounts.length-1]) {return;}
      alertify.log("Added X-Bow to Your Army");
      $scope.xbows.push({name: "X-Bow", imageUrl: defenseInfo.xbow.level[0].imageUrl, level: 1, damagePerSecond: defenseInfo.xbow.level[0].dps, hp: defenseInfo.xbow.level[0].hp, upgradeCost: defenseInfo.xbow.level[1].cost, damageUpgrade: defenseInfo.xbow.level[1].dps - defenseInfo.xbow.level[0].dps, hpUpgrade: defenseInfo.xbow.level[1].hp - defenseInfo.xbow.level[0].hp, buildTime: defenseInfo.xbow.level[0].buildTime, maxLevel: defenseInfo.xbow.maxLevel})
      $scope.xbowTotalDps += defenseInfo.xbow.level[0].dps;
      $scope.xbowTotalHp += defenseInfo.xbow.level[0].hp;
      $scope.totalDefenseDps += defenseInfo.xbow.level[0].dps;
      $scope.totalDefenseHp += defenseInfo.xbow.level[0].hp;
    } else if (type === "Inferno Tower") {
      if ($scope.infernoTowers.length >= defenseInfo.infernoTower.townhallLevelCounts[defenseInfo.infernoTower.townhallLevelCounts.length-1]) {return;}
      alertify.log("Added Inferno Tower to Your Army");
      $scope.infernoTowers.push({name: "Inferno Tower", imageUrl: defenseInfo.infernoTower.level[0].imageUrl, level: 1, damagePerSecond: defenseInfo.infernoTower.level[0].dps, hp: defenseInfo.infernoTower.level[0].hp, upgradeCost: defenseInfo.infernoTower.level[1].cost, damageUpgrade: defenseInfo.infernoTower.level[1].dps - defenseInfo.infernoTower.level[0].dps, hpUpgrade: defenseInfo.infernoTower.level[1].hp - defenseInfo.infernoTower.level[0].hp, buildTime: defenseInfo.infernoTower.level[0].buildTime, maxLevel: defenseInfo.infernoTower.maxLevel})
      $scope.infernoTowerTotalDps += defenseInfo.infernoTower.level[0].dps;
      $scope.infernoTowerTotalHp += defenseInfo.infernoTower.level[0].hp;
      $scope.totalDefenseDps += defenseInfo.infernoTower.level[0].dps;
      $scope.totalDefenseHp += defenseInfo.infernoTower.level[0].hp;
    }
    $scope.cookieSaveDefenses();
  }
  $scope.levelUpDefense = function(defense) {
    console.log('level up', defense);
    if(defense.level === defense.maxLevel) {return;}
    defense.level += 1;
    $scope.updateDefense(defense);
  }
  $scope.levelDownDefense = function(defense) {
    console.log('level down', defense);
    if(defense.level <= 1) {return;}
    defense.level -= 1;
    $scope.updateDefense(defense);
  }
  $scope.updateDefense = function(defense) {
    console.log("updating", defense);
    if (defense.name === "Cannon") {
      $scope.cannonTotalDps -= defense.damagePerSecond;
      $scope.cannonTotalHp -= defense.hp;
    } else if (defense.name === "Archer Tower") {
      $scope.archerTowerTotalDps -= defense.damagePerSecond;
      $scope.archerTowerTotalHp -= defense.hp;
    } else if (defense.name === "Mortar") {
      $scope.mortarTotalDps -= defense.damagePerSecond;
      $scope.mortarTotalHp -= defense.hp;
    } else if (defense.name === "Air Defense") {
      $scope.airDefenseTotalDps -= defense.damagePerSecond;
      $scope.airDefenseTotalHp -= defense.hp;
    } else if (defense.name === "Wizard Tower") {
      $scope.wizardTowerTotalDps -= defense.damagePerSecond;
      $scope.wizardTowerTotalHp -= defense.hp;
    } else if (defense.name === "Hidden Tesla") {
      $scope.hiddenTeslaTotalDps -= defense.damagePerSecond;
      $scope.hiddenTeslaTotalHp -= defense.hp;
    } else if (defense.name === "X-Bow") {
      $scope.xbowTotalDps -= defense.damagePerSecond;
      $scope.xbowTotalHp -= defense.hp;
    } else if (defense.name === "Inferno Tower") {
      $scope.infernoTowerTotalDps -= defense.damagePerSecond;
      $scope.infernoTowerTotalHp -= defense.hp;
    }
    $scope.totalDefenseDps -= defense.damagePerSecond;
    $scope.totalDefenseHp -= defense.hp;
    for (var defenses in defenseInfo) {
      if (defense.name === defenseInfo[defenses].name && defense.level === defenseInfo[defenses].level.length) {
        console.log("max reached");
        defense.imageUrl = defenseInfo[defenses].level[defense.level - 1].imageUrl;
        defense.damagePerSecond = defenseInfo[defenses].level[defense.level - 1].dps;
        defense.hp = defenseInfo[defenses].level[defense.level - 1].hp;
        defense.damageUpgrade = "N/A";
        defense.hpUpgrade = "N/A";
        defense.upgradeCost = "N/A";
        defense.buildTime = "N/A";
      } else if(defense.name === defenseInfo[defenses].name) {
        defense.imageUrl = defenseInfo[defenses].level[defense.level - 1].imageUrl;
        defense.damagePerSecond = defenseInfo[defenses].level[defense.level - 1].dps;
        defense.hp = defenseInfo[defenses].level[defense.level - 1].hp;
        defense.damageUpgrade = defenseInfo[defenses].level[defense.level].dps - defenseInfo[defenses].level[defense.level - 1].dps;
        defense.hpUpgrade = defenseInfo[defenses].level[defense.level].hp - defenseInfo[defenses].level[defense.level - 1].hp;
        defense.upgradeCost = defenseInfo[defenses].level[defense.level].cost - defenseInfo[defenses].level[defense.level - 1].cost;
        defense.buildTime = defenseInfo[defenses].level[defense.level - 1].buildTime;
      }
    }
    if (defense.name === "Cannon") {
      $scope.cannonTotalDps += defense.damagePerSecond;
      $scope.cannonTotalHp += defense.hp;
    } else if (defense.name === "Archer Tower") {
      $scope.archerTowerTotalDps += defense.damagePerSecond;
      $scope.archerTowerTotalHp += defense.hp;
    } else if (defense.name === "Mortar") {
      $scope.mortarTotalDps += defense.damagePerSecond;
      $scope.mortarTotalHp += defense.hp;
    } else if (defense.name === "Air Defense") {
      $scope.airDefenseTotalDps += defense.damagePerSecond;
      $scope.airDefenseTotalHp += defense.hp;
    } else if (defense.name === "Wizard Tower") {
      $scope.wizardTowerTotalDps += defense.damagePerSecond;
      $scope.wizardTowerTotalHp += defense.hp;
    } else if (defense.name === "Hidden Tesla") {
      $scope.hiddenTeslaTotalDps += defense.damagePerSecond;
      $scope.hiddenTeslaTotalHp += defense.hp;
    } else if (defense.name === "X-Bow") {
      $scope.xbowTotalDps += defense.damagePerSecond;
      $scope.xbowTotalHp += defense.hp;
    } else if (defense.name === "Inferno Tower") {
      $scope.infernoTowerTotalDps += defense.damagePerSecond;
      $scope.infernoTowerTotalHp += defense.hp;
    }
    $scope.totalDefenseDps += defense.damagePerSecond;
    $scope.totalDefenseHp += defense.hp;
    $scope.cookieSaveDefenses();
  }
  $scope.removeDefense = function(defense) {
    alertify.log('Removed '+ defense.name + " from your army");
    var index = 0;
    if (defense.name === "Cannon") {
      $scope.cannons.splice($scope.cannons.indexOf(defense), 1);
      $scope.cannonTotalDps -= defense.damagePerSecond;
      $scope.cannonTotalHp -= defense.hp;
    } else if (defense.name === "Archer Tower") {
      $scope.archerTowers.splice($scope.archerTowers.indexOf(defense), 1);
      $scope.archerTowerTotalDps -= defense.damagePerSecond;
      $scope.archerTowerTotalHp -= defense.hp;
    } else if (defense.name === "Mortar") {
      $scope.mortars.splice($scope.mortars.indexOf(defense), 1);
      $scope.mortarTotalDps -= defense.damagePerSecond;
      $scope.mortarTotalHp -= defense.hp;
    } else if (defense.name === "Air Defense") {
      $scope.airDefenses.splice($scope.airDefenses.indexOf(defense), 1);
      $scope.airDefenseTotalDps -= defense.damagePerSecond;
      $scope.airDefenseTotalHp -= defense.hp;
    } else if (defense.name === "Wizard Tower") {
      $scope.wizardTowers.splice($scope.wizardTowers.indexOf(defense), 1);
      $scope.wizardTowerTotalDps -= defense.damagePerSecond;
      $scope.wizardTowerTotalHp -= defense.hp;
    } else if (defense.name === "Hidden Tesla") {
      $scope.hiddenTeslas.splice($scope.hiddenTeslas.indexOf(defense), 1);
      $scope.hiddenTeslaTotalDps -= defense.damagePerSecond;
      $scope.hiddenTeslaTotalHp -= defense.hp;
    } else if (defense.name === "X-Bow") {
      $scope.xbows.splice($scope.xbows.indexOf(defense), 1);
      $scope.xbowTotalDps -= defense.damagePerSecond;
      $scope.xbowTotalHp -= defense.hp;
    } else if (defense.name === "Inferno Tower") {
      $scope.infernoTowers.splice($scope.infernoTowers.indexOf(defense), 1);
      $scope.infernoTowerTotalDps -= defense.damagePerSecond;
      $scope.infernoTowerTotalHp -= defense.hp;
    }
    $scope.totalDefenseDps -= defense.damagePerSecond;
    $scope.totalDefenseHp -= defense.hp;
    $scope.cookieSaveDefenses();
  }
}]);


app.controller('ResourceCtrl', [
'$scope','$log',
function($scope, $log){

  $scope.totalResourceGoldCapacity = 0;
  $scope.totalResourceElixirCapacity = 0;
  $scope.totalResourceDarkElixirCapacity = 0;
  $scope.totalResourceHp = 0;
  $scope.goldStorages = [];
  $scope.goldStorageTotalCapacity = 0;
  $scope.goldStorageTotalHp = 0;
  $scope.goldMines = [];
  $scope.goldMineTotalCapacity = 0;
  $scope.goldMineTotalHp = 0;
  $scope.goldMineTotalProductionRate = 0;
  $scope.elixirCollectors = [];
  $scope.elixirCollectorTotalCapacity = 0;
  $scope.elixirCollectorTotalHp = 0;
  $scope.elixirCollectorTotalProductionRate = 0;

  $scope.existingResourcesCookie = function() {
    if ($.cookie('resource_cookie') != undefined) {
      console.log('Existing Resources:', JSON.parse($.cookie('resource_cookie')));
      $scope.goldStorages = JSON.parse($.cookie('resource_cookie')).goldStorages;
      $scope.goldMines = JSON.parse($.cookie('resource_cookie')).goldMines;
      $scope.goldStorageTotalCapacity = JSON.parse($.cookie('resource_cookie')).goldStorageTotalCapacity;
      $scope.goldStorageTotalHp = JSON.parse($.cookie('resource_cookie')).goldStorageTotalHp;
      $scope.goldMineTotalHp = JSON.parse($.cookie('resource_cookie')).goldMineTotalHp;
      $scope.goldMineTotalCapacity = JSON.parse($.cookie('resource_cookie')).goldMineTotalCapacity;
      $scope.goldMineTotalProductionRate = JSON.parse($.cookie('resource_cookie')).goldMineTotalProductionRate;
      $scope.elixirCollectors = JSON.parse($.cookie('resource_cookie')).elixirCollectors;
      $scope.elixirCollectorTotalCapacity = JSON.parse($.cookie('resource_cookie')).elixirCollectorTotalCapacity;
      $scope.elixirCollectorTotalHp = JSON.parse($.cookie('resource_cookie')).elixirCollectorTotalHp;
      $scope.elixirCollectorTotalProductionRate = JSON.parse($.cookie('resource_cookie')).elixirCollectorTotalProductionRate;
    }
  }
  $scope.existingResourcesCookie();
  $scope.cookieSaveResources = function() {
    var cookieResources = {};
    cookieResources.goldStorages = $scope.goldStorages;
    cookieResources.goldMines = $scope.goldMines;
    cookieResources.goldStorageTotalCapacity = $scope.goldStorageTotalCapacity;
    cookieResources.goldStorageTotalHp = $scope.goldStorageTotalHp;
    cookieResources.goldMineTotalHp = $scope.goldMineTotalHp;
    cookieResources.goldMineTotalCapacity = $scope.goldMineTotalCapacity;
    cookieResources.goldMineTotalProductionRate = $scope.goldMineTotalProductionRate;
    cookieResources.elixirCollectors = $scope.elixirCollectors;
    cookieResources.elixirCollectorTotalCapacity = $scope.elixirCollectorTotalCapacity;
    cookieResources.elixirCollectorTotalHp = $scope.elixirCollectorTotalHp;
    cookieResources.elixirCollectorTotalProductionRate = $scope.elixirCollectorTotalProductionRate;
    // clear hash keys from angular before saving cookie
    // for (var goldMine in cookieResources.goldMines) {
    //   console.log(goldMine);
    //   for (var i = 0; i < cookieResources[goldMine].length; i++) {
    //     delete cookieResources[goldMine][i]['$$hashKey'];
    //   }
    // }
    for (i = 0; i < cookieResources.goldMines.length; i++) {
      delete cookieResources.goldMines[i]['$$hashKey'];
    }
    for (i = 0; i < cookieResources.elixirCollectors.length; i++) {
      delete cookieResources.elixirCollectors[i]['$$hashKey'];
    }
    $.cookie('resource_cookie', JSON.stringify(cookieResources));
    console.log("Saved Resources:", JSON.parse($.cookie('resource_cookie')));
  }
  $scope.addResource = function(type) {
    alertify.set({delay: 1500});
    if (type === "Gold Mine") {
      if ($scope.goldMines.length >= resourceInfo.goldMine.townhallLevelCounts[resourceInfo.goldMine.townhallLevelCounts.length-1]) {return;}
      alertify.log("Added Gold Mine to Your Army");
      $scope.goldMines.push({name: "Gold Mine", imageUrl: resourceInfo.goldMine.level[0].imageUrl, level: 1, capacity: resourceInfo.goldMine.level[0].capacity, hp: resourceInfo.goldMine.level[0].hp, productionRate: resourceInfo.goldMine.level[0].productionRate, upgradeCost: resourceInfo.goldMine.level[1].cost, capacityUpgrade: resourceInfo.goldMine.level[1].capacity - resourceInfo.goldMine.level[0].capacity, hpUpgrade: resourceInfo.goldMine.level[1].hp - resourceInfo.goldMine.level[0].hp, prUpgrade: resourceInfo.goldMine.level[1].productionRate - resourceInfo.goldMine.level[0].productionRate, buildTime: resourceInfo.goldMine.level[0].buildTime, maxLevel: resourceInfo.goldMine.maxLevel})
      $scope.goldMineTotalHp += resourceInfo.goldMine.level[0].hp;
      $scope.goldMineTotalCapacity += resourceInfo.goldMine.level[0].capacity;
      $scope.goldMineTotalProductionRate += resourceInfo.goldMine.level[0].productionRate;
      $scope.totalResourceHp += resourceInfo.goldMine.level[0].hp;
      $scope.totalResourceGoldCapacity += resourceInfo.goldMine.level[0].capacity;
    } else if (type === "Elixir Collector") {
      if ($scope.elixirCollectors.length >= resourceInfo.elixirCollector.townhallLevelCounts[resourceInfo.elixirCollector.townhallLevelCounts.length-1]) {return;}
      alertify.log("Added Elixir Collector to Your Army");
      $scope.elixirCollectors.push({name: "Elixir Collector", imageUrl: resourceInfo.elixirCollector.level[0].imageUrl, level: 1, capacity: resourceInfo.elixirCollector.level[0].capacity, hp: resourceInfo.elixirCollector.level[0].hp, productionRate: resourceInfo.elixirCollector.level[0].productionRate, upgradeCost: resourceInfo.elixirCollector.level[1].cost, capacityUpgrade: resourceInfo.elixirCollector.level[1].capacity - resourceInfo.elixirCollector.level[0].capacity, hpUpgrade: resourceInfo.elixirCollector.level[1].hp - resourceInfo.elixirCollector.level[0].hp, prUpgrade: resourceInfo.elixirCollector.level[1].productionRate - resourceInfo.elixirCollector.level[0].productionRate, buildTime: resourceInfo.elixirCollector.level[0].buildTime, maxLevel: resourceInfo.elixirCollector.maxLevel})
      $scope.elixirCollectorTotalHp += resourceInfo.elixirCollector.level[0].hp;
      $scope.elixirCollectorTotalCapacity += resourceInfo.elixirCollector.level[0].capacity;
      $scope.elixirCollectorTotalProductionRate += resourceInfo.elixirCollector.level[0].productionRate;
      $scope.totalResourceHp += resourceInfo.elixirCollector.level[0].hp;
      $scope.totalResourceGoldCapacity += resourceInfo.elixirCollector.level[0].capacity;
    } 
    $scope.cookieSaveResources();
  }
  $scope.levelUpResource = function(resource) {
    console.log('level up', resource);
    if(resource.level === resource.maxLevel) {return;}
    resource.level += 1;
    $scope.updateResource(resource);
  }
  $scope.levelDownResource = function(resource) {
    console.log('level down', resource);
    if(resource.level <= 1) {return;}
    resource.level -= 1;
    $scope.updateResource(resource);
  }
  $scope.updateResource = function(resource) {
    console.log("updating", resource);
    if (resource.name === "Gold Mine") {
      $scope.goldMineTotalHp -= resource.hp;
      $scope.goldMineTotalCapacity -= resource.capacity;
      $scope.goldMineTotalProductionRate -= resource.productionRate;
      $scope.totalResourceGoldCapacity -= resource.capacity;
      $scope.totalResourceHp -= resource.hp;
      if (resource.level === resourceInfo.goldMine.maxLevel) {
        console.log("you hit the max");
        resource.capacityUpgrade = "N/A";
        resource.hpUpgrade = "N/A";
        resource.prUpgrade = "N/A";
        resource.upgradeCost = "N/A";
      } else {
        resource.capacityUpgrade = resourceInfo.goldMine.level[resource.level].capacity - resourceInfo.goldMine.level[resource.level - 1].capacity;
        resource.hpUpgrade = resourceInfo.goldMine.level[resource.level].hp - resourceInfo.goldMine.level[resource.level - 1].hp;
        resource.prUpgrade = resourceInfo.goldMine.level[resource.level].productionRate - resourceInfo.goldMine.level[resource.level - 1].productionRate;
        resource.upgradeCost = resourceInfo.goldMine.level[resource.level].cost;
      }
      resource.productionRate = resourceInfo.goldMine.level[resource.level - 1].productionRate;
      resource.capacity = resourceInfo.goldMine.level[resource.level - 1].capacity;
      resource.hp = resourceInfo.goldMine.level[resource.level - 1].hp;
      resource.buildTime = resourceInfo.goldMine.level[resource.level - 1].buildTime;
      resource.imageUrl = resourceInfo.goldMine.level[resource.level - 1].imageUrl;
      $scope.goldMineTotalHp += resource.hp;
      $scope.goldMineTotalCapacity += resource.capacity;
      $scope.goldMineTotalProductionRate += resource.productionRate;
      $scope.totalResourceGoldCapacity += resource.capacity;
      $scope.totalResourceHp += resource.hp;    
    } else if (resource.name === "Elixir Collector") {
      $scope.elixirCollectorTotalHp -= resource.hp;
      $scope.elixirCollectorTotalCapacity -= resource.capacity;
      $scope.elixirCollectorTotalProductionRate -= resource.productionRate;
      $scope.totalResourceGoldCapacity -= resource.capacity;
      $scope.totalResourceHp -= resource.hp;
      if (resource.level === resourceInfo.elixirCollector.maxLevel) {
        console.log("you hit the max");
        resource.capacityUpgrade = "N/A";
        resource.hpUpgrade = "N/A";
        resource.prUpgrade = "N/A";
        resource.upgradeCost = "N/A";
      } else {
        resource.capacityUpgrade = resourceInfo.elixirCollector.level[resource.level].capacity - resourceInfo.elixirCollector.level[resource.level - 1].capacity;
        resource.hpUpgrade = resourceInfo.elixirCollector.level[resource.level].hp - resourceInfo.elixirCollector.level[resource.level - 1].hp;
        resource.prUpgrade = resourceInfo.elixirCollector.level[resource.level].productionRate - resourceInfo.elixirCollector.level[resource.level - 1].productionRate;
        resource.upgradeCost = resourceInfo.elixirCollector.level[resource.level].cost;
      }
      resource.productionRate = resourceInfo.elixirCollector.level[resource.level - 1].productionRate;
      resource.capacity = resourceInfo.elixirCollector.level[resource.level - 1].capacity;
      resource.hp = resourceInfo.elixirCollector.level[resource.level - 1].hp;
      resource.buildTime = resourceInfo.elixirCollector.level[resource.level - 1].buildTime;
      resource.imageUrl = resourceInfo.elixirCollector.level[resource.level - 1].imageUrl;
      $scope.elixirCollectorTotalHp += resource.hp;
      $scope.elixirCollectorTotalCapacity += resource.capacity;
      $scope.elixirCollectorTotalProductionRate += resource.productionRate;
      $scope.totalResourceGoldCapacity += resource.capacity;
      $scope.totalResourceHp += resource.hp;    
    } 
    $scope.cookieSaveResources();
  }
  $scope.removeResource = function(resource) {
    alertify.log('Removed '+ resource.name + " from your army");
    var index = 0;
    if (resource.name === "Gold Mine") {
      $scope.goldMines.splice($scope.goldMines.indexOf(resource), 1);
      $scope.goldMineTotalHp -= resource.hp;
      $scope.goldMineTotalCapacity -= resource.capacity;
      $scope.goldMineTotalProductionRate -= resource.productionRate;
      $scope.totalResourceGoldCapacity -= resource.capacity;
      $scope.totalResourceHp -= resource.hp;
    } else if (resource.name === "Elixir Collector") {
      $scope.elixirCollectors.splice($scope.elixirCollectors.indexOf(resource), 1);
      $scope.elixirCollectorTotalHp -= resource.hp;
      $scope.elixirCollectorTotalCapacity -= resource.capacity;
      $scope.elixirCollectorTotalProductionRate -= resource.productionRate;
      $scope.totalResourceGoldCapacity -= resource.capacity;
      $scope.totalResourceHp -= resource.hp;
    } 
    $scope.cookieSaveResources();
  }
}]);