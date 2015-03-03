var app = angular.module('clashCalc', []);
alertify.set({delay: 1600});

function clearCookies() {
  $.removeCookie('troop_cookie');
  $.removeCookie('defense_cookie_one');
  $.removeCookie('defense_cookie_two');
  $.removeCookie('defense_cookie_three');
  $.removeCookie('defense_cookie_cannons');
  $.removeCookie('storage_resource_cookie');
  $.removeCookie('harvest_resource_cookie');
  $.removeCookie('troop_resource_cookie');
  console.log("Cookies Cleared");
}

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
      console.log("Existing Troops:", JSON.parse($.cookie('troop_cookie')));
      $scope.troops = JSON.parse($.cookie('troop_cookie')).troops;
      $scope.army = JSON.parse($.cookie('troop_cookie')).army;
    }
  }
  $scope.existingTroopsCookie();
  $scope.addTroop = function() {
    for (var i = 0; i < $scope.troops.length; i++ ) {
      if ($scope.type === $scope.troops[i].name) {
        alertify.alert("You already have " + $scope.type + "s in your army");
        return;
      }
    }
    alertify.log("Added " + $scope.selectedQuantity + " Level " + $scope.level + " " + $scope.type + "s To Your Army");
    console.log("That scope level", $scope.level);
    for(var troop in troopInfo) {
      if ($scope.type === troopInfo[troop].name && $scope.level === troopInfo[troop].level.length) {
        console.log("max level");
        $scope.troops.push({name: troopInfo[troop].name, level: parseInt($scope.level), quantity: $scope.selectedQuantity, imageUrl: troopInfo[troop].level[$scope.level - 1].imageUrl, damagePerSecond: troopInfo[troop].level[$scope.level - 1].dps, housingSpace: troopInfo[troop].housingSpace, elixirCost: troopInfo[troop].level[$scope.level - 1].ec, trainingTime: troopInfo[troop].trainingTime, researchCost: "", damageUpgrade: "", hp: troopInfo[troop].level[$scope.level - 1].hp, hpUpgrade: "", researchTime: "", totalHealth: troopInfo[troop].level[$scope.level - 1].hp * $scope.selectedQuantity, totalDps: troopInfo[troop].level[$scope.level - 1].dps * $scope.selectedQuantity, totalTrainingTime: troopInfo[troop].trainingTime * $scope.selectedQuantity, totalHousingSpace: troopInfo[troop].housingSpace * $scope.selectedQuantity, totalElixirCost: troopInfo[troop].level[$scope.level - 1].ec * $scope.selectedQuantity, maxLevel: troopInfo[troop].maxLevel, darkTroop: troopInfo[troop].darkTroop, isMaxLevel: true});
          $scope.army.totalDPS += troopInfo[troop].level[$scope.level - 1].dps * $scope.selectedQuantity;
          $scope.army.totalHP += troopInfo[troop].level[$scope.level - 1].hp * $scope.selectedQuantity;
          $scope.army.totalHS += troopInfo[troop].housingSpace * $scope.selectedQuantity;
          if (troopInfo[troop].darkTroop === true ) {
            $scope.army.totalDarkEC += troopInfo[troop].level[$scope.level - 1].ec * $scope.selectedQuantity;
          } else {
            $scope.army.totalEC += troopInfo[troop].level[$scope.level - 1].ec * $scope.selectedQuantity;
          }
          $scope.army.totalTrainingTime += troopInfo[troop].trainingTime * $scope.selectedQuantity;
      } else if ($scope.type === troopInfo[troop].name) {
        console.log("normal level:", troopInfo[troop].level.length)
        $scope.troops.push({name: troopInfo[troop].name, level: parseInt($scope.level), quantity: $scope.selectedQuantity, imageUrl: troopInfo[troop].level[$scope.level - 1].imageUrl, damagePerSecond: troopInfo[troop].level[$scope.level - 1].dps, housingSpace: troopInfo[troop].housingSpace, elixirCost: troopInfo[troop].level[$scope.level - 1].ec, trainingTime: troopInfo[troop].trainingTime, researchCost: troopInfo[troop].level[$scope.level].researchCost, damageUpgrade: troopInfo[troop].level[$scope.level].dps - troopInfo[troop].level[$scope.level - 1].dps, hp: troopInfo[troop].level[$scope.level - 1].hp, hpUpgrade: troopInfo[troop].level[$scope.level].hp - troopInfo[troop].level[$scope.level - 1].hp, researchTime: troopInfo[troop].level[$scope.level].researchTime, totalHealth: troopInfo[troop].level[$scope.level - 1].hp * $scope.selectedQuantity, totalDps: troopInfo[troop].level[$scope.level - 1].dps * $scope.selectedQuantity, totalTrainingTime: troopInfo[troop].trainingTime * $scope.selectedQuantity, totalHousingSpace: troopInfo[troop].housingSpace * $scope.selectedQuantity, totalElixirCost: troopInfo[troop].level[$scope.level - 1].ec * $scope.selectedQuantity, maxLevel: troopInfo[troop].maxLevel, darkTroop: troopInfo[troop].darkTroop, isMaxLevel: false});
          $scope.army.totalDPS += troopInfo[troop].level[$scope.level - 1].dps * $scope.selectedQuantity;
          $scope.army.totalHP += troopInfo[troop].level[$scope.level - 1].hp * $scope.selectedQuantity;
          $scope.army.totalHS += troopInfo[troop].housingSpace * $scope.selectedQuantity;
          if (troopInfo[troop].darkTroop === true ) {
            $scope.army.totalDarkEC += troopInfo[troop].level[$scope.level - 1].ec * $scope.selectedQuantity;
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
    cookieTroops = {troops: $scope.troops, army: $scope.army};
    for (i = 0; i < cookieTroops.troops.length; i++) {
      delete cookieTroops.troops[i]['$$hashKey'];
    }
    $.cookie('troop_cookie', JSON.stringify(cookieTroops));
    console.log("Saved Troops:", JSON.parse($.cookie('troop_cookie')));
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
    console.log('Updating:', troop);
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
        troop.damagePerSecond = troopInfo[troops].level[troop.level - 1].dps;
        troop.elixirCost = troopInfo[troops].level[troop.level - 1].ec;
        troop.hp = troopInfo[troops].level[troop.level - 1].hp;
        troop.researchCost = "MAX Level";
        troop.damageUpgrade = "N/A";
        troop.hpUpgrade = "N/A";
        troop.researchTime = "N/A";
        troop.isMaxLevel = true;
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
        troop.isMaxLevel = false;
        troop.totalHealth = troop.quantity * troop.hp;
        troop.totalDps = troop.quantity * troop.damagePerSecond;
        troop.totalElixirCost = troop.quantity * troop.elixirCost;
        troop.totalTrainingTime = troop.quantity * troop.trainingTime;
        troop.totalHousingSpace = troop.quantity * troop.housingSpace;
        troop.imageUrl = troopInfo[troops].level[troop.level - 1].imageUrl;
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
  	$scope.townHall.level = $scope.levelSelect;
    $scope.townHall.imageUrl = "images/town-hall/Town_hall" + $scope.townHall.level + ".png"
  };
  $scope.renderTroopLevels = function() {
    $scope.currentTroopLevels = [];
    for (var troops in troopInfo) {
      if ($scope.type === troopInfo[troops].name) {
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
    if ($.cookie('defense_cookie_one') != undefined) {
      console.log('Existing Defenses 1:', JSON.parse($.cookie('defense_cookie_one')));
      $scope.archerTowers = JSON.parse($.cookie('defense_cookie_one')).archerTowers;
      $scope.mortars = JSON.parse($.cookie('defense_cookie_one')).mortars;
      $scope.archerTowerTotalHp = JSON.parse($.cookie('defense_cookie_one')).archerTowerTotalHp;
      $scope.archerTowerTotalDps = JSON.parse($.cookie('defense_cookie_one')).archerTowerTotalDps;
      $scope.mortarTotalHp = JSON.parse($.cookie('defense_cookie_one')).mortarTotalHp;
      $scope.mortarTotalDps = JSON.parse($.cookie('defense_cookie_one')).mortarTotalDps;
    } 
    if ($.cookie('defense_cookie_two') != undefined) {
      console.log('Existing Defenses 2:', JSON.parse($.cookie('defense_cookie_two')));
      $scope.airDefenses = JSON.parse($.cookie('defense_cookie_two')).airDefenses;
      $scope.wizardTowers = JSON.parse($.cookie('defense_cookie_two')).wizardTowers;
      $scope.hiddenTeslas = JSON.parse($.cookie('defense_cookie_two')).hiddenTeslas;
      $scope.airDefenseTotalHp = JSON.parse($.cookie('defense_cookie_two')).airDefenseTotalHp;
      $scope.airDefenseTotalDps = JSON.parse($.cookie('defense_cookie_two')).airDefenseTotalDps;
      $scope.wizardTowerTotalHp = JSON.parse($.cookie('defense_cookie_two')).wizardTowerTotalHp;
      $scope.wizardTowerTotalDps = JSON.parse($.cookie('defense_cookie_two')).wizardTowerTotalDps;
      $scope.hiddenTeslaTotalHp = JSON.parse($.cookie('defense_cookie_two')).hiddenTeslaTotalHp;
      $scope.hiddenTeslaTotalDps = JSON.parse($.cookie('defense_cookie_two')).hiddenTeslaTotalDps;
    } 
    if ($.cookie('defense_cookie_three') != undefined) {
      console.log('Existing Defenses 3:', JSON.parse($.cookie('defense_cookie_three')));
      $scope.xbows = JSON.parse($.cookie('defense_cookie_three')).xbows;
      $scope.infernoTowers = JSON.parse($.cookie('defense_cookie_three')).infernoTowers;
      $scope.xbowTotalHp = JSON.parse($.cookie('defense_cookie_three')).xbowTotalHp;
      $scope.xbowTotalDps = JSON.parse($.cookie('defense_cookie_three')).xbowTotalDps;
      $scope.infernoTowerTotalHp = JSON.parse($.cookie('defense_cookie_three')).infernoTowerTotalHp;
      $scope.infernoTowerTotalDps = JSON.parse($.cookie('defense_cookie_three')).infernoTowerTotalDps;
      $scope.totalDefenseDps = JSON.parse($.cookie('defense_cookie_three')).totalDefenseDps;
      $scope.totalDefenseHp = JSON.parse($.cookie('defense_cookie_three')).totalDefenseHp;
    } 
    if ($.cookie('defense_cookie_cannons') != undefined) {
      console.log('Existing Defenses 1b:', JSON.parse($.cookie('defense_cookie_cannons')));
      $scope.cannons = JSON.parse($.cookie('defense_cookie_cannons')).cannons;
      $scope.cannonTotalDps = JSON.parse($.cookie('defense_cookie_cannons')).cannonTotalDps;
      $scope.cannonTotalHp = JSON.parse($.cookie('defense_cookie_cannons')).cannonTotalHp;
    }
  }
  $scope.existingDefensesCookie();
  $scope.cookieSaveDefenses = function() {
    var cookieOneDefenses = {};
    var cookieTwoDefenses = {};
    var cookieThreeDefenses = {};
    var cookieCannonDefenses = {};
    cookieCannonDefenses.cannons = $scope.cannons;
    cookieOneDefenses.archerTowers = $scope.archerTowers;
    cookieOneDefenses.mortars = $scope.mortars;
    cookieTwoDefenses.airDefenses = $scope.airDefenses;
    cookieTwoDefenses.wizardTowers = $scope.wizardTowers;
    cookieTwoDefenses.hiddenTeslas = $scope.hiddenTeslas;
    cookieThreeDefenses.xbows = $scope.xbows;
    cookieThreeDefenses.infernoTowers = $scope.infernoTowers;
    cookieCannonDefenses.cannonTotalDps = $scope.cannonTotalDps;
    cookieCannonDefenses.cannonTotalHp = $scope.cannonTotalHp
    cookieOneDefenses.archerTowerTotalHp = $scope.archerTowerTotalHp
    cookieOneDefenses.archerTowerTotalDps = $scope.archerTowerTotalDps
    cookieOneDefenses.mortarTotalHp = $scope.mortarTotalHp
    cookieOneDefenses.mortarTotalDps = $scope.mortarTotalDps
    cookieTwoDefenses.airDefenseTotalHp = $scope.airDefenseTotalHp
    cookieTwoDefenses.airDefenseTotalDps = $scope.airDefenseTotalDps
    cookieTwoDefenses.wizardTowerTotalHp = $scope.wizardTowerTotalHp
    cookieTwoDefenses.wizardTowerTotalDps = $scope.wizardTowerTotalDps
    cookieTwoDefenses.hiddenTeslaTotalHp = $scope.hiddenTeslaTotalHp
    cookieTwoDefenses.hiddenTeslaTotalDps = $scope.hiddenTeslaTotalDps
    cookieThreeDefenses.xbowTotalHp = $scope.xbowTotalHp
    cookieThreeDefenses.xbowTotalDps = $scope.xbowTotalDps
    cookieThreeDefenses.infernoTowerTotalHp = $scope.infernoTowerTotalHp
    cookieThreeDefenses.infernoTowerTotalDps = $scope.infernoTowerTotalDps
    cookieThreeDefenses.totalDefenseDps = $scope.totalDefenseDps
    cookieThreeDefenses.totalDefenseHp = $scope.totalDefenseHp
    for (var defense in cookieOneDefenses) {
      for (i=0;i < cookieOneDefenses[defense].length; i++) {
        delete cookieOneDefenses[defense][i]['$$hashKey'];
      }
    }
    for (var defense in cookieTwoDefenses) {
      for (i=0;i < cookieTwoDefenses[defense].length; i++) {
        delete cookieTwoDefenses[defense][i]['$$hashKey'];
      }
    }
    for (var defense in cookieThreeDefenses) {
      for (i=0;i < cookieThreeDefenses[defense].length; i++) {
        delete cookieThreeDefenses[defense][i]['$$hashKey'];
      }
    }
    for (var defense in cookieCannonDefenses) {
      for (i=0;i < cookieCannonDefenses[defense].length; i++) {
        delete cookieCannonDefenses[defense][i]['$$hashKey'];
      }
    }
    $.cookie('defense_cookie_one', JSON.stringify(cookieOneDefenses));
    $.cookie('defense_cookie_two', JSON.stringify(cookieTwoDefenses));
    $.cookie('defense_cookie_three', JSON.stringify(cookieThreeDefenses));
    $.cookie('defense_cookie_cannons', JSON.stringify(cookieCannonDefenses));
    console.log("Saved Defenses 1:", JSON.parse($.cookie('defense_cookie_one')));
    console.log("Saved Defenses 1b:", JSON.parse($.cookie('defense_cookie_cannons')));
    console.log("Saved Defenses 2:", JSON.parse($.cookie('defense_cookie_two')));
    console.log("Saved Defenses 3:", JSON.parse($.cookie('defense_cookie_three')));
  }
  $scope.addDefense = function(type) {
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
  $scope.goldMines = [];
  $scope.goldMineTotalCapacity = 0;
  $scope.goldMineTotalHp = 0;
  $scope.goldMineTotalProductionRate = 0;
  $scope.elixirCollectors = [];
  $scope.elixirCollectorTotalCapacity = 0;
  $scope.elixirCollectorTotalHp = 0;
  $scope.elixirCollectorTotalProductionRate = 0;
  $scope.darkElixirDrills = [];
  $scope.darkElixirDrillTotalCapacity = 0;
  $scope.darkElixirDrillTotalHp = 0;
  $scope.darkElixirDrillTotalProductionRate = 0;
  $scope.goldStorages = [];
  $scope.goldStorageTotalCapacity = 0;
  $scope.goldStorageTotalHp = 0;
  $scope.elixirStorages = [];
  $scope.elixirStorageTotalCapacity = 0;
  $scope.elixirStorageTotalHp = 0;
  $scope.darkElixirStorages = [];
  $scope.darkElixirStorageTotalCapacity = 0;
  $scope.darkElixirStorageTotalHp = 0;
  $scope.armyCamps = [];
  $scope.armyCampTotalTroopCapacity = 0;
  $scope.armyCampTotalHp = 0;
  $scope.barracks = [];
  $scope.barrackTotalHp = 0;
  $scope.barrackTotalQueueLength = 0;
  $scope.darkBarracks = [];
  $scope.darkBarrackTotalHp = 0;
  $scope.darkBarrackTotalQueueLength = 0;
  $scope.laboratory = [];
  $scope.spellFactory = [];
  var cookieResources = {};

  $scope.existingResourcesCookie = function() {
    if ($.cookie('harvest_resource_cookie') != undefined || $.cookie('storage_resource_cookie') != undefined || $.cookie('troop_resource_cookie') != undefined || $.cookie('other_resource_cookie')) {
      if ($.cookie('harvest_resource_cookie') != undefined) {
        console.log('Existing Harvest Resources:', JSON.parse($.cookie('harvest_resource_cookie')));
        $scope.goldMines = JSON.parse($.cookie('harvest_resource_cookie')).goldMines;
        $scope.goldMineTotalHp = JSON.parse($.cookie('harvest_resource_cookie')).goldMineTotalHp;
        $scope.goldMineTotalCapacity = JSON.parse($.cookie('harvest_resource_cookie')).goldMineTotalCapacity;
        $scope.goldMineTotalProductionRate = JSON.parse($.cookie('harvest_resource_cookie')).goldMineTotalProductionRate;
        $scope.elixirCollectors = JSON.parse($.cookie('harvest_resource_cookie')).elixirCollectors;
        $scope.elixirCollectorTotalCapacity = JSON.parse($.cookie('harvest_resource_cookie')).elixirCollectorTotalCapacity;
        $scope.elixirCollectorTotalHp = JSON.parse($.cookie('harvest_resource_cookie')).elixirCollectorTotalHp;
        $scope.elixirCollectorTotalProductionRate = JSON.parse($.cookie('harvest_resource_cookie')).elixirCollectorTotalProductionRate;
        $scope.darkElixirDrills = JSON.parse($.cookie('harvest_resource_cookie')).darkElixirDrills;
        $scope.darkElixirDrillTotalCapacity = JSON.parse($.cookie('harvest_resource_cookie')).darkElixirDrillTotalCapacity;
        $scope.darkElixirDrillTotalHp = JSON.parse($.cookie('harvest_resource_cookie')).darkElixirDrillTotalHp;
        $scope.darkElixirDrillTotalProductionRate = JSON.parse($.cookie('harvest_resource_cookie')).darkElixirDrillTotalProductionRate;
      }
      if ($.cookie('storage_resource_cookie') != undefined) {
        console.log('Existing Storage Resources:', JSON.parse($.cookie('storage_resource_cookie')));
        $scope.goldStorages = JSON.parse($.cookie('storage_resource_cookie')).goldStorages;
        $scope.goldStorageTotalCapacity = JSON.parse($.cookie('storage_resource_cookie')).goldStorageTotalCapacity;
        $scope.goldStorageTotalHp = JSON.parse($.cookie('storage_resource_cookie')).goldStorageTotalHp;
        $scope.elixirStorages = JSON.parse($.cookie('storage_resource_cookie')).elixirStorages;
        $scope.elixirStorageTotalCapacity = JSON.parse($.cookie('storage_resource_cookie')).elixirStorageTotalCapacity;
        $scope.elixirStorageTotalHp = JSON.parse($.cookie('storage_resource_cookie')).elixirStorageTotalHp;
        $scope.darkElixirStorages = JSON.parse($.cookie('storage_resource_cookie')).darkElixirStorages;
        $scope.darkElixirStorageTotalCapacity = JSON.parse($.cookie('storage_resource_cookie')).darkElixirStorageTotalCapacity;
        $scope.darkElixirStorageTotalHp = JSON.parse($.cookie('storage_resource_cookie')).darkElixirStorageTotalHp;
      }
      if ($.cookie('troop_resource_cookie') != undefined) { 
        console.log('Existing Troop Resources:', JSON.parse($.cookie('troop_resource_cookie')));
        $scope.armyCamps = JSON.parse($.cookie('troop_resource_cookie')).armyCamps;
        $scope.armyCampTotalTroopCapacity = JSON.parse($.cookie('troop_resource_cookie')).armyCampTotalTroopCapacity;
        $scope.armyCampTotalHp = JSON.parse($.cookie('troop_resource_cookie')).armyCampTotalHp;
        $scope.barracks = JSON.parse($.cookie('troop_resource_cookie')).barracks;
        $scope.barrackTotalHp = JSON.parse($.cookie('troop_resource_cookie')).barrackTotalHp;
        $scope.barrackTotalQueueLength = JSON.parse($.cookie('troop_resource_cookie')).barrackTotalQueueLength;
        $scope.darkBarracks = JSON.parse($.cookie('troop_resource_cookie')).darkBarracks;
        $scope.darkBarrackTotalHp = JSON.parse($.cookie('troop_resource_cookie')).darkBarrackTotalHp;
        $scope.darkBarrackTotalQueueLength = JSON.parse($.cookie('troop_resource_cookie')).darkBarrackTotalQueueLength;
      }
      if ($.cookie('troop_resource_cookie') != undefined) { 
        console.log('Existing Other Resources:', JSON.parse($.cookie('other_resource_cookie')));
        $scope.spellFactory = JSON.parse($.cookie('other_resource_cookie')).spellFactory;
        $scope.laboratory = JSON.parse($.cookie('other_resource_cookie')).laboratory;
      }
    }
  }
  $scope.existingResourcesCookie();
  $scope.cookieSaveResources = function() {
    var harvestResources = {};
    var storageResources = {};
    var troopResources = {};
    var otherResources = {};
    harvestResources.goldMines = $scope.goldMines;
    harvestResources.goldMineTotalHp = $scope.goldMineTotalHp;
    harvestResources.goldMineTotalCapacity = $scope.goldMineTotalCapacity;
    harvestResources.goldMineTotalProductionRate = $scope.goldMineTotalProductionRate;
    harvestResources.elixirCollectors = $scope.elixirCollectors;
    harvestResources.elixirCollectorTotalCapacity = $scope.elixirCollectorTotalCapacity;
    harvestResources.elixirCollectorTotalHp = $scope.elixirCollectorTotalHp;
    harvestResources.elixirCollectorTotalProductionRate = $scope.elixirCollectorTotalProductionRate;
    harvestResources.darkElixirDrills = $scope.darkElixirDrills;
    harvestResources.darkElixirDrillTotalCapacity = $scope.darkElixirDrillTotalCapacity;
    harvestResources.darkElixirDrillTotalHp = $scope.darkElixirDrillTotalHp;
    harvestResources.darkElixirDrillTotalProductionRate = $scope.darkElixirDrillTotalProductionRate;
    storageResources.goldStorages = $scope.goldStorages;
    storageResources.goldStorageTotalCapacity = $scope.goldStorageTotalCapacity;
    storageResources.goldStorageTotalHp = $scope.goldStorageTotalHp;
    storageResources.elixirStorages = $scope.elixirStorages;
    storageResources.elixirStorageTotalCapacity = $scope.elixirStorageTotalCapacity;
    storageResources.elixirStorageTotalHp = $scope.elixirStorageTotalHp;
    storageResources.darkElixirStorages = $scope.darkElixirStorages;
    storageResources.darkElixirStorageTotalCapacity = $scope.darkElixirStorageTotalCapacity;
    storageResources.darkElixirStorageTotalHp = $scope.darkElixirStorageTotalHp;
    troopResources.armyCamps = $scope.armyCamps;
    troopResources.armyCampTotalTroopCapacity = $scope.armyCampTotalTroopCapacity;
    troopResources.armyCampTotalHp = $scope.armyCampTotalHp;
    troopResources.barracks = $scope.barracks;
    troopResources.barrackTotalHp = $scope.barrackTotalHp;
    troopResources.barrackTotalQueueLength = $scope.barrackTotalQueueLength;
    troopResources.darkBarracks = $scope.darkBarracks;
    troopResources.darkBarrackTotalHp = $scope.darkBarrackTotalHp;
    troopResources.darkBarrackTotalQueueLength = $scope.darkBarrackTotalQueueLength;
    otherResources.spellFactory = $scope.spellFactory;
    otherResources.laboratory = $scope.laboratory;
    $scope.clearHashKey(harvestResources.goldMines);
    $scope.clearHashKey(harvestResources.elixirCollectors);
    $scope.clearHashKey(harvestResources.darkElixirDrills);
    $scope.clearHashKey(storageResources.goldStorages);
    $scope.clearHashKey(storageResources.elixirStorages);
    $scope.clearHashKey(storageResources.darkElixirStorages);
    $scope.clearHashKey(troopResources.armyCamps);
    $scope.clearHashKey(troopResources.barracks);
    $scope.clearHashKey(troopResources.darkBarracks);
    if (troopResources.spellFactory != undefined) {
      delete troopResources.spellFactory[0]['$$hashKey'];
    }
    if (troopResources.laboratory != undefined) {
      delete troopResources.laboratory[0]['$$hashKey'];
    }
    $.cookie('harvest_resource_cookie', JSON.stringify(harvestResources));
    $.cookie('storage_resource_cookie', JSON.stringify(storageResources));
    $.cookie('troop_resource_cookie', JSON.stringify(troopResources));
    $.cookie('other_resource_cookie', JSON.stringify(otherResources));
    console.log("Saved Harvest Resources:", JSON.parse($.cookie('harvest_resource_cookie')));
    console.log("Saved Storage Resources:", JSON.parse($.cookie('storage_resource_cookie')));
    console.log("Saved Troop Resources:", JSON.parse($.cookie('troop_resource_cookie')));
    console.log("Saved Other Resources:", JSON.parse($.cookie('other_resource_cookie')));
  };
  $scope.clearHashKey = function(element) {
    for (i = 0; i < element.length; i++) {
      delete element[i]['$$hashKey'];
    }
  };
  $scope.addResource = function(type) {
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
    } else if (type === "Dark Elixir Drill") {
      if ($scope.darkElixirDrills.length >= resourceInfo.darkElixirDrill.townhallLevelCounts[resourceInfo.darkElixirDrill.townhallLevelCounts.length-1]) {return;}
      alertify.log("Added Dark Elixir Drill to Your Army");
      $scope.darkElixirDrills.push({name: "Dark Elixir Drill", imageUrl: resourceInfo.darkElixirDrill.level[0].imageUrl, level: 1, capacity: resourceInfo.darkElixirDrill.level[0].capacity, hp: resourceInfo.darkElixirDrill.level[0].hp, productionRate: resourceInfo.darkElixirDrill.level[0].productionRate, upgradeCost: resourceInfo.darkElixirDrill.level[1].cost, capacityUpgrade: resourceInfo.darkElixirDrill.level[1].capacity - resourceInfo.darkElixirDrill.level[0].capacity, hpUpgrade: resourceInfo.darkElixirDrill.level[1].hp - resourceInfo.darkElixirDrill.level[0].hp, prUpgrade: resourceInfo.darkElixirDrill.level[1].productionRate - resourceInfo.darkElixirDrill.level[0].productionRate, buildTime: resourceInfo.darkElixirDrill.level[0].buildTime, maxLevel: resourceInfo.darkElixirDrill.maxLevel})
      $scope.darkElixirDrillTotalHp += resourceInfo.darkElixirDrill.level[0].hp;
      $scope.darkElixirDrillTotalCapacity += resourceInfo.darkElixirDrill.level[0].capacity;
      $scope.darkElixirDrillTotalProductionRate += resourceInfo.darkElixirDrill.level[0].productionRate;
      $scope.totalResourceHp += resourceInfo.darkElixirDrill.level[0].hp;
      $scope.totalResourceDarkElixirCapacity += resourceInfo.darkElixirDrill.level[0].capacity;
    } else if (type === "Gold Storage") {
      if ($scope.goldStorages.length >= resourceInfo.goldStorage.townhallLevelCounts[resourceInfo.goldStorage.townhallLevelCounts.length-1]) {return;}
      alertify.log("Added Gold Storage to Your Army");
      $scope.goldStorages.push({name: "Gold Storage", imageUrl: resourceInfo.goldStorage.level[0].imageUrl, level: 1, capacity: resourceInfo.goldStorage.level[0].capacity, hp: resourceInfo.goldStorage.level[0].hp, upgradeCost: resourceInfo.goldStorage.level[1].cost, capacityUpgrade: resourceInfo.goldStorage.level[1].capacity - resourceInfo.goldStorage.level[0].capacity, hpUpgrade: resourceInfo.goldStorage.level[1].hp - resourceInfo.goldStorage.level[0].hp, buildTime: resourceInfo.goldStorage.level[0].buildTime, maxLevel: resourceInfo.goldStorage.maxLevel, percentLootable: resourceInfo.goldStorage.percentLootableTownhallLevel[0].percentStealable, lootableCap: resourceInfo.goldStorage.percentLootableTownhallLevel[0].cap })
      $scope.goldStorageTotalHp += resourceInfo.goldStorage.level[0].hp;
      $scope.goldStorageTotalCapacity += resourceInfo.goldStorage.level[0].capacity;
      $scope.totalResourceHp += resourceInfo.goldStorage.level[0].hp;
      $scope.totalResourceGoldCapacity += resourceInfo.goldStorage.level[0].capacity;
    } else if (type === "Elixir Storage") {
      if ($scope.elixirStorages.length >= resourceInfo.elixirStorage.townhallLevelCounts[resourceInfo.elixirStorage.townhallLevelCounts.length-1]) {return;}
      alertify.log("Added Elixir Storage to Your Army");
      $scope.elixirStorages.push({name: "Elixir Storage", imageUrl: resourceInfo.elixirStorage.level[0].imageUrl, level: 1, capacity: resourceInfo.elixirStorage.level[0].capacity, hp: resourceInfo.elixirStorage.level[0].hp, upgradeCost: resourceInfo.elixirStorage.level[1].cost, capacityUpgrade: resourceInfo.elixirStorage.level[1].capacity - resourceInfo.elixirStorage.level[0].capacity, hpUpgrade: resourceInfo.elixirStorage.level[1].hp - resourceInfo.elixirStorage.level[0].hp, buildTime: resourceInfo.elixirStorage.level[0].buildTime, maxLevel: resourceInfo.elixirStorage.maxLevel, percentLootable: resourceInfo.elixirStorage.percentLootableTownhallLevel[0].percentStealable, lootableCap: resourceInfo.elixirStorage.percentLootableTownhallLevel[0].cap })
      $scope.elixirStorageTotalHp += resourceInfo.elixirStorage.level[0].hp;
      $scope.elixirStorageTotalCapacity += resourceInfo.elixirStorage.level[0].capacity;
      $scope.totalResourceHp += resourceInfo.elixirStorage.level[0].hp;
      $scope.totalResourceElixirCapacity += resourceInfo.elixirStorage.level[0].capacity;
    } else if (type === "Dark Elixir Storage") {
      if ($scope.darkElixirStorages.length >= resourceInfo.darkElixirStorage.townhallLevelCounts[resourceInfo.darkElixirStorage.townhallLevelCounts.length-1]) {return;}
      alertify.log("Added Dark Elixir Storage to Your Army");
      $scope.darkElixirStorages.push({name: "Dark Elixir Storage", imageUrl: resourceInfo.darkElixirStorage.level[0].imageUrl, level: 1, capacity: resourceInfo.darkElixirStorage.level[0].capacity, hp: resourceInfo.darkElixirStorage.level[0].hp, upgradeCost: resourceInfo.darkElixirStorage.level[1].cost, capacityUpgrade: resourceInfo.darkElixirStorage.level[1].capacity - resourceInfo.darkElixirStorage.level[0].capacity, hpUpgrade: resourceInfo.darkElixirStorage.level[1].hp - resourceInfo.darkElixirStorage.level[0].hp, buildTime: resourceInfo.darkElixirStorage.level[0].buildTime, maxLevel: resourceInfo.darkElixirStorage.maxLevel, percentLootable: resourceInfo.darkElixirStorage.percentLootableTownhallLevel[0].percentStealable, lootableCap: resourceInfo.darkElixirStorage.percentLootableTownhallLevel[0].cap })
      $scope.darkElixirStorageTotalHp += resourceInfo.darkElixirStorage.level[0].hp;
      $scope.darkElixirStorageTotalCapacity += resourceInfo.darkElixirStorage.level[0].capacity;
      $scope.totalResourceHp += resourceInfo.darkElixirStorage.level[0].hp;
      $scope.totalResourceDarkElixirCapacity += resourceInfo.darkElixirStorage.level[0].capacity;
    } else if (type === "Army Camp") {
      if ($scope.armyCamps.length >= resourceInfo.armyCamp.townhallLevelCounts[resourceInfo.armyCamp.townhallLevelCounts.length-1]) {return;}
      alertify.log("Added Army Camp to Your Army");
      $scope.armyCamps.push({name: "Army Camp", imageUrl: resourceInfo.armyCamp.level[0].imageUrl, level: 1, troopCapacity: resourceInfo.armyCamp.level[0].troopCapacity, hp: resourceInfo.armyCamp.level[0].hp, upgradeCost: resourceInfo.armyCamp.level[1].cost, troopCapacityUpgrade: resourceInfo.armyCamp.level[1].troopCapacity - resourceInfo.armyCamp.level[0].troopCapacity, hpUpgrade: resourceInfo.armyCamp.level[1].hp - resourceInfo.armyCamp.level[0].hp, buildTime: resourceInfo.armyCamp.level[0].buildTime, maxLevel: resourceInfo.armyCamp.maxLevel })
      $scope.armyCampTotalHp += resourceInfo.armyCamp.level[0].hp;
      $scope.armyCampTotalTroopCapacity += resourceInfo.armyCamp.level[0].troopCapacity;
      $scope.totalResourceHp += resourceInfo.armyCamp.level[0].hp;
    } else if (type === "Barracks") {
      if ($scope.barracks.length >= resourceInfo.barracks.townhallLevelCounts[resourceInfo.barracks.townhallLevelCounts.length-1]) {return;}
      alertify.log("Added Barracks to Your Army");
      $scope.barracks.push({name: "Barracks", imageUrl: resourceInfo.barracks.level[0].imageUrl, level: 1, queueLength: resourceInfo.barracks.level[0].queueLength, hp: resourceInfo.barracks.level[0].hp, upgradeCost: resourceInfo.barracks.level[1].cost, queueLengthUpgrade: resourceInfo.barracks.level[1].queueLength - resourceInfo.barracks.level[0].queueLength, hpUpgrade: resourceInfo.barracks.level[1].hp - resourceInfo.barracks.level[0].hp, buildTime: resourceInfo.barracks.level[0].buildTime, maxLevel: resourceInfo.barracks.maxLevel, unitUnlocked: resourceInfo.barracks.level[0].unitUnlocked})
      $scope.barrackTotalHp += resourceInfo.barracks.level[0].hp;
      $scope.barrackTotalQueueLength += resourceInfo.barracks.level[0].queueLength;
      $scope.totalResourceHp += resourceInfo.barracks.level[0].hp;
    } else if (type === "Dark Barracks") {
      if ($scope.darkBarracks.length >= resourceInfo.darkBarracks.townhallLevelCounts[resourceInfo.darkBarracks.townhallLevelCounts.length-1]) {return;}
      alertify.log("Added Dark Barracks to Your Army");
      $scope.darkBarracks.push({name: "Dark Barracks", imageUrl: resourceInfo.darkBarracks.level[0].imageUrl, level: 1, queueLength: resourceInfo.darkBarracks.level[0].queueLength, hp: resourceInfo.darkBarracks.level[0].hp, upgradeCost: resourceInfo.darkBarracks.level[1].cost, queueLengthUpgrade: resourceInfo.darkBarracks.level[1].queueLength - resourceInfo.darkBarracks.level[0].queueLength, hpUpgrade: resourceInfo.darkBarracks.level[1].hp - resourceInfo.darkBarracks.level[0].hp, buildTime: resourceInfo.darkBarracks.level[0].buildTime, maxLevel: resourceInfo.darkBarracks.maxLevel, unitUnlocked: resourceInfo.darkBarracks.level[0].unitUnlocked})
      $scope.darkBarrackTotalHp += resourceInfo.darkBarracks.level[0].hp;
      $scope.darkBarrackTotalQueueLength += resourceInfo.darkBarracks.level[0].queueLength;
      $scope.totalResourceHp += resourceInfo.darkBarracks.level[0].hp;
    } else if (type === "Laboratory") {
      if ($scope.laboratory.length === 1) {return;}
      alertify.log("Added Laboratory to Your Army");
      $scope.laboratory.push({name: "Laboratory", imageUrl: resourceInfo.laboratory.level[0].imageUrl, level: 1, hp: resourceInfo.laboratory.level[0].hp, upgradeCost: resourceInfo.laboratory.level[1].cost, hpUpgrade: resourceInfo.laboratory.level[1].hp - resourceInfo.laboratory.level[0].hp, buildTime: resourceInfo.laboratory.level[0].buildTime, maxLevel: resourceInfo.laboratory.maxLevel})
      $scope.totalResourceHp += resourceInfo.laboratory.level[0].hp;
    } else if (type === "Spell Factory") {
      if ($scope.spellFactory.length === 1) {return;}
      alertify.log("Added Spell Factory to Your Army");
      $scope.spellFactory.push({name: "Spell Factory", imageUrl: resourceInfo.spellFactory.level[0].imageUrl, level: 1, hp: resourceInfo.spellFactory.level[0].hp, upgradeCost: resourceInfo.spellFactory.level[1].cost, hpUpgrade: resourceInfo.spellFactory.level[1].hp - resourceInfo.spellFactory.level[0].hp, buildTime: resourceInfo.spellFactory.level[0].buildTime, maxLevel: resourceInfo.spellFactory.maxLevel, spellUnlocked: resourceInfo.spellFactory.level[0].spellUnlocked});
      $scope.totalResourceHp += resourceInfo.spellFactory.level[0].hp;
    }
    $scope.cookieSaveResources();
  }
  $scope.levelUpResource = function(resource) {
    if(resource.level === resource.maxLevel) {return;}
    resource.level += 1;
    $scope.updateResource(resource);
  }
  $scope.levelDownResource = function(resource) {
    if(resource.level <= 1) {return;}
    resource.level -= 1;
    $scope.updateResource(resource);
  }
  $scope.updateResource = function(resource) {
    console.log("Updating:", resource);
    if (resource.name === "Gold Mine") {
      $scope.goldMineTotalHp -= resource.hp;
      $scope.goldMineTotalCapacity -= resource.capacity;
      $scope.goldMineTotalProductionRate -= resource.productionRate;
      $scope.totalResourceGoldCapacity -= resource.capacity;
      $scope.totalResourceHp -= resource.hp;
      if (resource.level === resourceInfo.goldMine.maxLevel) {
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
      $scope.totalResourceElixirCapacity -= resource.capacity;
      $scope.totalResourceHp -= resource.hp;
      if (resource.level === resourceInfo.elixirCollector.maxLevel) {
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
      $scope.totalResourceElixirCapacity += resource.capacity;
      $scope.totalResourceHp += resource.hp;    
    } else if (resource.name === "Dark Elixir Drill") {
      $scope.darkElixirDrillTotalHp -= resource.hp;
      $scope.darkElixirDrillTotalCapacity -= resource.capacity;
      $scope.darkElixirDrillTotalProductionRate -= resource.productionRate;
      $scope.totalResourceDarkElixirCapacity -= resource.capacity;
      $scope.totalResourceHp -= resource.hp;
      if (resource.level === resourceInfo.darkElixirDrill.maxLevel) {
        resource.capacityUpgrade = "N/A";
        resource.hpUpgrade = "N/A";
        resource.prUpgrade = "N/A";
        resource.upgradeCost = "N/A";
      } else {
        resource.capacityUpgrade = resourceInfo.darkElixirDrill.level[resource.level].capacity - resourceInfo.darkElixirDrill.level[resource.level - 1].capacity;
        resource.hpUpgrade = resourceInfo.darkElixirDrill.level[resource.level].hp - resourceInfo.darkElixirDrill.level[resource.level - 1].hp;
        resource.prUpgrade = resourceInfo.darkElixirDrill.level[resource.level].productionRate - resourceInfo.darkElixirDrill.level[resource.level - 1].productionRate;
        resource.upgradeCost = resourceInfo.darkElixirDrill.level[resource.level].cost;
      }
      resource.productionRate = resourceInfo.darkElixirDrill.level[resource.level - 1].productionRate;
      resource.capacity = resourceInfo.darkElixirDrill.level[resource.level - 1].capacity;
      resource.hp = resourceInfo.darkElixirDrill.level[resource.level - 1].hp;
      resource.buildTime = resourceInfo.darkElixirDrill.level[resource.level - 1].buildTime;
      resource.imageUrl = resourceInfo.darkElixirDrill.level[resource.level - 1].imageUrl;
      $scope.darkElixirDrillTotalHp += resource.hp;
      $scope.darkElixirDrillTotalCapacity += resource.capacity;
      $scope.darkElixirDrillTotalProductionRate += resource.productionRate;
      $scope.totalResourceDarkElixirCapacity += resource.capacity;
      $scope.totalResourceHp += resource.hp;    
    } else if (resource.name === "Gold Storage") {
      $scope.goldStorageTotalHp -= resource.hp;
      $scope.goldStorageTotalCapacity -= resource.capacity;
      $scope.totalResourceGoldCapacity -= resource.capacity;
      $scope.totalResourceHp -= resource.hp;
      if (resource.level === resourceInfo.goldStorage.maxLevel) {
        resource.capacityUpgrade = "N/A";
        resource.hpUpgrade = "N/A";
        resource.upgradeCost = "N/A";
      } else {
        resource.capacityUpgrade = resourceInfo.goldStorage.level[resource.level].capacity - resourceInfo.goldStorage.level[resource.level - 1].capacity;
        resource.hpUpgrade = resourceInfo.goldStorage.level[resource.level].hp - resourceInfo.goldStorage.level[resource.level - 1].hp;
        resource.upgradeCost = resourceInfo.goldStorage.level[resource.level].cost;
      }
      resource.capacity = resourceInfo.goldStorage.level[resource.level - 1].capacity;
      resource.hp = resourceInfo.goldStorage.level[resource.level - 1].hp;
      resource.buildTime = resourceInfo.goldStorage.level[resource.level - 1].buildTime;
      resource.imageUrl = resourceInfo.goldStorage.level[resource.level - 1].imageUrl;
      $scope.goldStorageTotalHp += resource.hp;
      $scope.goldStorageTotalCapacity += resource.capacity;
      $scope.totalResourceGoldCapacity += resource.capacity;
      $scope.totalResourceHp += resource.hp;    
    } else if (resource.name === "Elixir Storage") {
      $scope.elixirStorageTotalHp -= resource.hp;
      $scope.elixirStorageTotalCapacity -= resource.capacity;
      $scope.totalResourceElixirCapacity -= resource.capacity;
      $scope.totalResourceHp -= resource.hp;
      if (resource.level === resourceInfo.elixirStorage.maxLevel) {
        resource.capacityUpgrade = "N/A";
        resource.hpUpgrade = "N/A";
        resource.upgradeCost = "N/A";
      } else {
        resource.capacityUpgrade = resourceInfo.elixirStorage.level[resource.level].capacity - resourceInfo.elixirStorage.level[resource.level - 1].capacity;
        resource.hpUpgrade = resourceInfo.elixirStorage.level[resource.level].hp - resourceInfo.elixirStorage.level[resource.level - 1].hp;
        resource.upgradeCost = resourceInfo.elixirStorage.level[resource.level].cost;
      }
      resource.capacity = resourceInfo.elixirStorage.level[resource.level - 1].capacity;
      resource.hp = resourceInfo.elixirStorage.level[resource.level - 1].hp;
      resource.buildTime = resourceInfo.elixirStorage.level[resource.level - 1].buildTime;
      resource.imageUrl = resourceInfo.elixirStorage.level[resource.level - 1].imageUrl;
      $scope.elixirStorageTotalHp += resource.hp;
      $scope.elixirStorageTotalCapacity += resource.capacity;
      $scope.totalResourceElixirCapacity += resource.capacity;
      $scope.totalResourceHp += resource.hp;    
    } else if (resource.name === "Dark Elixir Storage") {
      $scope.darkElixirStorageTotalHp -= resource.hp;
      $scope.darkElixirStorageTotalCapacity -= resource.capacity;
      $scope.totalResourceDarkElixirCapacity -= resource.capacity;
      $scope.totalResourceHp -= resource.hp;
      if (resource.level === resourceInfo.darkElixirStorage.maxLevel) {
        resource.capacityUpgrade = "N/A";
        resource.hpUpgrade = "N/A";
        resource.upgradeCost = "N/A";
      } else {
        resource.capacityUpgrade = resourceInfo.darkElixirStorage.level[resource.level].capacity - resourceInfo.darkElixirStorage.level[resource.level - 1].capacity;
        resource.hpUpgrade = resourceInfo.darkElixirStorage.level[resource.level].hp - resourceInfo.darkElixirStorage.level[resource.level - 1].hp;
        resource.upgradeCost = resourceInfo.darkElixirStorage.level[resource.level].cost;
      }
      resource.capacity = resourceInfo.darkElixirStorage.level[resource.level - 1].capacity;
      resource.hp = resourceInfo.darkElixirStorage.level[resource.level - 1].hp;
      resource.buildTime = resourceInfo.darkElixirStorage.level[resource.level - 1].buildTime;
      resource.imageUrl = resourceInfo.darkElixirStorage.level[resource.level - 1].imageUrl;
      $scope.darkElixirStorageTotalHp += resource.hp;
      $scope.darkElixirStorageTotalCapacity += resource.capacity;
      $scope.totalResourceDarkElixirCapacity += resource.capacity;
      $scope.totalResourceHp += resource.hp;    
    } else if (resource.name === "Army Camp") {
      $scope.armyCampTotalHp -= resource.hp;
      $scope.armyCampTotalTroopCapacity -= resource.troopCapacity;
      $scope.totalResourceHp -= resource.hp;
      if (resource.level === resourceInfo.armyCamp.maxLevel) {
        resource.troopCapacityUpgrade = "N/A";
        resource.hpUpgrade = "N/A";
        resource.upgradeCost = "N/A";
      } else {
        resource.troopCapacityUpgrade = resourceInfo.armyCamp.level[resource.level].troopCapacity - resourceInfo.armyCamp.level[resource.level - 1].troopCapacity;
        resource.hpUpgrade = resourceInfo.armyCamp.level[resource.level].hp - resourceInfo.armyCamp.level[resource.level - 1].hp;
        resource.upgradeCost = resourceInfo.armyCamp.level[resource.level].cost;
      }
      resource.troopCapacity = resourceInfo.armyCamp.level[resource.level - 1].troopCapacity;
      resource.hp = resourceInfo.armyCamp.level[resource.level - 1].hp;
      resource.buildTime = resourceInfo.armyCamp.level[resource.level - 1].buildTime;
      resource.imageUrl = resourceInfo.armyCamp.level[resource.level - 1].imageUrl;
      $scope.armyCampTotalHp += resource.hp;
      $scope.armyCampTotalTroopCapacity += resource.troopCapacity;
      $scope.totalResourceHp += resource.hp;    
    } else if (resource.name === "Barracks") {
      $scope.barrackTotalHp -= resource.hp;
      $scope.barrackTotalQueueLength -= resource.queueLength;
      $scope.totalResourceHp -= resource.hp;
      if (resource.level === resourceInfo.barracks.maxLevel) {
        resource.queueLengthUpgrade = "N/A";
        resource.hpUpgrade = "N/A";
        resource.upgradeCost = "N/A";
      } else {
        resource.queueLengthUpgrade = resourceInfo.barracks.level[resource.level].queueLength - resourceInfo.barracks.level[resource.level - 1].queueLength;
        resource.hpUpgrade = resourceInfo.barracks.level[resource.level].hp - resourceInfo.barracks.level[resource.level - 1].hp;
        resource.upgradeCost = resourceInfo.barracks.level[resource.level].cost;
      }
      resource.queueLength = resourceInfo.barracks.level[resource.level - 1].queueLength;
      resource.hp = resourceInfo.barracks.level[resource.level - 1].hp;
      resource.buildTime = resourceInfo.barracks.level[resource.level - 1].buildTime;
      resource.imageUrl = resourceInfo.barracks.level[resource.level - 1].imageUrl;
      resource.unitUnlocked = resourceInfo.barracks.level[resource.level - 1].unitUnlocked;
      $scope.barrackTotalHp += resource.hp;
      $scope.barrackTotalQueueLength += resource.queueLength;
      $scope.totalResourceHp += resource.hp;    
    } else if (resource.name === "Dark Barracks") {
      $scope.darkBarrackTotalHp -= resource.hp;
      $scope.darkBarrackTotalQueueLength -= resource.queueLength;
      $scope.totalResourceHp -= resource.hp;
      if (resource.level === resourceInfo.darkBarracks.maxLevel) {
        resource.queueLengthUpgrade = "N/A";
        resource.hpUpgrade = "N/A";
        resource.upgradeCost = "N/A";
      } else {
        resource.queueLengthUpgrade = resourceInfo.darkBarracks.level[resource.level].queueLength - resourceInfo.darkBarracks.level[resource.level - 1].queueLength;
        resource.hpUpgrade = resourceInfo.darkBarracks.level[resource.level].hp - resourceInfo.darkBarracks.level[resource.level - 1].hp;
        resource.upgradeCost = resourceInfo.darkBarracks.level[resource.level].cost;
      }
      resource.queueLength = resourceInfo.darkBarracks.level[resource.level - 1].queueLength;
      resource.hp = resourceInfo.darkBarracks.level[resource.level - 1].hp;
      resource.buildTime = resourceInfo.darkBarracks.level[resource.level - 1].buildTime;
      resource.imageUrl = resourceInfo.darkBarracks.level[resource.level - 1].imageUrl;
      resource.unitUnlocked = resourceInfo.darkBarracks.level[resource.level - 1].unitUnlocked;
      $scope.darkBarrackTotalHp += resource.hp;
      $scope.darkBarrackTotalQueueLength += resource.queueLength;
      $scope.totalResourceHp += resource.hp;    
    } else if (resource.name === "Laboratory") {
      $scope.totalResourceHp -= resource.hp;
      if (resource.level === resourceInfo.laboratory.maxLevel) {
        resource.hpUpgrade = "N/A";
        resource.upgradeCost = "N/A";
      } else {
        resource.hpUpgrade = resourceInfo.laboratory.level[resource.level].hp - resourceInfo.laboratory.level[resource.level - 1].hp;
        resource.upgradeCost = resourceInfo.laboratory.level[resource.level].cost;
      }
      resource.hp = resourceInfo.laboratory.level[resource.level - 1].hp;
      resource.buildTime = resourceInfo.laboratory.level[resource.level - 1].buildTime;
      resource.imageUrl = resourceInfo.laboratory.level[resource.level - 1].imageUrl;
      $scope.totalResourceHp += resource.hp;    
    } else if (resource.name === "Spell Factory") {
      $scope.totalResourceHp -= resource.hp;
      if (resource.level === resourceInfo.spellFactory.maxLevel) {
        resource.hpUpgrade = "N/A";
        resource.upgradeCost = "N/A";
      } else {
        resource.hpUpgrade = resourceInfo.spellFactory.level[resource.level].hp - resourceInfo.spellFactory.level[resource.level - 1].hp;
        resource.upgradeCost = resourceInfo.spellFactory.level[resource.level].cost;
      }
      resource.spellUnlocked = resourceInfo.spellFactory.level[resource.level - 1].spellUnlocked;
      resource.hp = resourceInfo.spellFactory.level[resource.level - 1].hp;
      resource.buildTime = resourceInfo.spellFactory.level[resource.level - 1].buildTime;
      resource.imageUrl = resourceInfo.spellFactory.level[resource.level - 1].imageUrl;
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
      $scope.totalResourceElixirCapacity -= resource.capacity;
      $scope.totalResourceHp -= resource.hp;
    } else if (resource.name === "Dark Elixir Drill") {
      $scope.darkElixirDrills.splice($scope.darkElixirDrills.indexOf(resource), 1);
      $scope.darkElixirDrillTotalHp -= resource.hp;
      $scope.darkElixirDrillTotalCapacity -= resource.capacity;
      $scope.darkElixirDrillTotalProductionRate -= resource.productionRate;
      $scope.totalResourceDarkElixirCapacity -= resource.capacity;
      $scope.totalResourceHp -= resource.hp;
    } else if (resource.name === "Gold Storage") {
      $scope.goldStorages.splice($scope.goldStorages.indexOf(resource), 1);
      $scope.goldStorageTotalHp -= resource.hp;
      $scope.goldStorageTotalCapacity -= resource.capacity;
      $scope.totalResourceGoldCapacity -= resource.capacity;
      $scope.totalResourceHp -= resource.hp;
    } else if (resource.name === "Elixir Storage") {
      $scope.elixirStorages.splice($scope.elixirStorages.indexOf(resource), 1);
      $scope.elixirStorageTotalHp -= resource.hp;
      $scope.elixirStorageTotalCapacity -= resource.capacity;
      $scope.totalResourceGoldCapacity -= resource.capacity;
      $scope.totalResourceHp -= resource.hp;
    } else if (resource.name === "Dark Elixir Storage") {
      $scope.darkElixirStorages.splice($scope.darkElixirStorages.indexOf(resource), 1);
      $scope.darkElixirStorageTotalHp -= resource.hp;
      $scope.darkElixirStorageTotalCapacity -= resource.capacity;
      $scope.totalResourceGoldCapacity -= resource.capacity;
      $scope.totalResourceHp -= resource.hp;
    } else if (resource.name === "Army Camp") {
      $scope.armyCamps.splice($scope.armyCamps.indexOf(resource), 1);
      $scope.armyCampTotalHp -= resource.hp;
      $scope.armyCampTotalTroopCapacity -= resource.troopCapacity;
      $scope.totalResourceHp -= resource.hp;
    } else if (resource.name === "Barracks") {
      $scope.barracks.splice($scope.barracks.indexOf(resource), 1);
      $scope.barrackTotalHp -= resource.hp;
      $scope.barrackTotalQueueLength -= resource.queueLength;
      $scope.totalResourceHp -= resource.hp;
    } else if (resource.name === "Dark Barracks") {
      $scope.darkBarracks.splice($scope.darkBarracks.indexOf(resource), 1);
      $scope.darkBarrackTotalHp -= resource.hp;
      $scope.darkBarrackTotalQueueLength -= resource.queueLength;
      $scope.totalResourceHp -= resource.hp;
    } else if (resource.name === "Laboratory") {
      $scope.laboratory = [];
      $scope.totalResourceHp -= resource.hp;
    } else if (resource.name === "Spell Factory") {
      $scope.spellFactory = [];
      $scope.totalResourceHp -= resource.hp;
    } 
    $scope.cookieSaveResources();
  }
}]);