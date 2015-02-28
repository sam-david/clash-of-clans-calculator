var troopInfo = {
	barbarian: {
		name: "Barbarian",
		housingSpace: 1,
		movementSpeed: 16,
		attackSpeed: 1,
		trainingTime: 20,
		range: .4,
		attackType: "Melee (Ground Only)",
		prefferredTarget: "Any",
        maxLevel: 7,
		level: [
			{ /* Level 1 */
            dps: 8,
			hp: 45,
			ec: 25,
			accessLevel: 0,
			imageUrl: 'images/troops/barbarian/barbarianlevel1.png',
			researchCost: 0,
			researchTime: 0},
			{ /* Level 2 */
            dps: 11,
			hp: 54,
			ec: 40,
			accessLevel: 1,
			imageUrl: 'images/troops/barbarian/barbarianlevel1.png',
			researchCost: 50000,
			researchTime: "6 Hours"},
            { /* Level 3 */
            dps: 14,
            hp: 65,
            ec: 60,
            accessLevel: 3,
            imageUrl: 'images/troops/barbarian/barbarianlevel3.png',
            researchCost: 150000,
            researchTime: "1 Day"},
            { /* Level 4 */
            dps: 18,
            hp: 78,
            ec: 80,
            accessLevel: 5,
            imageUrl: 'images/troops/barbarian/barbarianlevel3.png',
            researchCost: 500000,
            researchTime: "3 Days"},
            { /* Level 5 */
            dps: 23,
            hp: 95,
            ec: 100,
            accessLevel: 6,
            imageUrl: 'images/troops/barbarian/barbarianlevel5.png',
            researchCost: 1500000,
            researchTime: "5 Days"},
            { /* Level 6 */
            dps: 26,
            hp: 110,
            ec: 150,
            accessLevel: 7,
            imageUrl: 'images/troops/barbarian/barbarianlevel6.png',
            researchCost: 4500000,
            researchTime: "10 Days"},
            { /* Level 7 */
            dps: 30,
            hp: 125,
            ec: 200,
            accessLevel: 8,
            imageUrl: 'images/troops/barbarian/barbarianlevel6.png',
            researchCost: 6000000,
            researchTime: "14 Days"}
    ]
    },
    archer: {
        name: "Archer",
        housingSpace: 1,
        movementSpeed: 24,
        attackSpeed: 1,
        trainingTime: 25,
        range: 3.5,
        attackType: "Ranged (Ground & Air)",
        prefferredTarget: "Any",
        barracksLevelRequired: 2,
        maxLevel: 7,
        level: [
            { /* Level 1 */
            dps: 7,
            hp: 20,
            ec: 50,
            accessLevel: 0,
            imageUrl: 'images/troops/archer/archerlevel1.png',
            researchCost: 0,
            researchTime: 0},
            { /* Level 2 */
            dps: 9,
            hp: 23,
            ec: 80,
            accessLevel: 1,
            imageUrl: 'images/troops/archer/archerlevel1.png',
            researchCost: 100000,
            researchTime: "12 Hours"},
            { /* Level 3 */
            dps: 12,
            hp: 28,
            ec: 120,
            accessLevel: 3,
            imageUrl: 'images/troops/archer/archerlevel3.png',
            researchCost: 250000,
            researchTime: "2 Days"},
            { /* Level 4 */
            dps: 16,
            hp: 33,
            ec: 160,
            accessLevel: 5,
            imageUrl: 'images/troops/archer/archerlevel3.png',
            researchCost: 750000,
            researchTime: "3 Days"},
            { /* Level 5 */
            dps: 20,
            hp: 40,
            ec: 200,
            accessLevel: 6,
            imageUrl: 'images/troops/archer/archerlevel5.png',
            researchCost: 2250000,
            researchTime: "5 Days"},
            { /* Level 6 */
            dps: 22,
            hp: 44,
            ec: 300,
            accessLevel: 7,
            imageUrl: 'images/troops/archer/archerlevel6.png',
            researchCost: 6000000,
            researchTime: "10 Days"},
            { /* Level 7 */
            dps: 25,
            hp: 48,
            ec: 400,
            accessLevel: 8,
            imageUrl: 'images/troops/archer/archerlevel6.png',
            researchCost: 7500000,
            researchTime: "14 Days"}
    ]
    },
    goblin: {
        name: "Goblin",
        housingSpace: 1,
        movementSpeed: 32,
        attackSpeed: 1,
        trainingTime: 30,
        range: .4,
        attackType: "Melee (Ground Only)",
        prefferredTarget: "Resources Damage(x2)",
        barracksLevelRequired: 4,
        maxLevel: 6,
        level: [
            { /* Level 1 */
            dps: 11,
            hp: 20,
            ec: 25,
            accessLevel: 0,
            imageUrl: 'images/troops/goblin/goblinlevel1.png',
            researchCost: 0,
            researchTime: 0},
            { /* Level 2 */
            dps: 14,
            hp: 30,
            ec: 40,
            accessLevel: 1,
            imageUrl: 'images/troops/goblin/goblinlevel1.png',
            researchCost: 50000,
            researchTime: "12 Hours"},
            { /* Level 3 */
            dps: 19,
            hp: 36,
            ec: 60,
            accessLevel: 3,
            imageUrl: 'images/troops/goblin/goblinlevel3.png',
            researchCost: 250000,
            researchTime: "2 Days"},
            { /* Level 4 */
            dps: 24,
            hp: 43,
            ec: 80,
            accessLevel: 5,
            imageUrl: 'images/troops/goblin/goblinlevel3.png',
            researchCost: 750000,
            researchTime: "3 Days"},
            { /* Level 5 */
            dps: 32,
            hp: 52,
            ec: 100,
            accessLevel: 6,
            imageUrl: 'images/troops/goblin/goblinlevel5.png',
            researchCost: 2250000,
            researchTime: "5 Days"},
            { /* Level 6 */
            dps: 42,
            hp: 68,
            ec: 150,
            accessLevel: 8,
            imageUrl: 'images/troops/goblin/goblinlevel6.png', //this image is incorrect
            researchCost: 4500000,
            researchTime: "10 Days"}
    ]
    },
    giant: {
        name: "Giant",
        housingSpace: 5,
        movementSpeed: 12,
        attackSpeed: 2,
        trainingTime: 120,
        range: 1,
        attackType: "Melee (Ground Only)",
        prefferredTarget: "Defenses",
        barracksLevelRequired: 3,
        maxLevel: 7,
        level: [
            { /* Level 1 */
            dps: 11,
            hp: 300,
            ec: 250,
            accessLevel: 0,
            imageUrl: 'images/troops/giant/giantlevel1.png',
            researchCost: 0,
            researchTime: 0},
            { /* Level 2 */
            dps: 14,
            hp: 360,
            ec: 750,
            accessLevel: 2,
            imageUrl: 'images/troops/giant/giantlevel1.png',
            researchCost: 100000,
            researchTime: "1 Day"},
            { /* Level 3 */
            dps: 19,
            hp: 430,
            ec: 1250,
            accessLevel: 4,
            imageUrl: 'images/troops/giant/giantlevel3.png',
            researchCost: 250000,
            researchTime: "2 Days"},
            { /* Level 4 */
            dps: 24,
            hp: 520,
            ec: 1750,
            accessLevel: 5,
            imageUrl: 'images/troops/giant/giantlevel3.png',
            researchCost: 750000,
            researchTime: "3 Days"},
            { /* Level 5 */
            dps: 31,
            hp: 670,
            ec: 2250,
            accessLevel: 6,
            imageUrl: 'images/troops/giant/giantlevel5.png',
            researchCost: 2250000,
            researchTime: "5 Days"},
            { /* Level 6 */
            dps: 43,
            hp: 940,
            ec: 3000,
            accessLevel: 7,
            imageUrl: 'images/troops/giant/giantlevel6.png',
            researchCost: 4500000,
            researchTime: "10 Days"},
            { /* Level 7 */
            dps: 50,
            hp: 1100,
            ec: 3500,
            accessLevel: 8,
            imageUrl: 'images/troops/giant/giantlevel6.png',
            researchCost: 7000000,
            researchTime: "14 Days"}
    ]
    },
    wallbreaker: {
        name: "Wall Breaker",
        housingSpace: 2,
        movementSpeed: 24,
        attackSpeed: 1,
        trainingTime: 120,
        range: 1,
        attackType: "Area Splash 2 Tile Radius (Ground Only)",
        prefferredTarget: "Walls (Damage x40)",
        barracksLevelRequired: 5,
        maxLevel: 6,
        level: [
            { /* Level 1 */
            dps: 12,
            hp: 20,
            ec: 1000,
            accessLevel: 0,
            imageUrl: 'images/troops/wallbreaker/wallbreakerlevel1.png',
            researchCost: 0,
            researchTime: 0},
            { /* Level 2 */
            dps: 16,
            hp: 24,
            ec: 1500,
            accessLevel: 2,
            imageUrl: 'images/troops/wallbreaker/wallbreakerlevel1.png',
            researchCost: 100000,
            researchTime: "1 Day"},
            { /* Level 3 */
            dps: 24,
            hp: 29,
            ec: 2000,
            accessLevel: 4,
            imageUrl: 'images/troops/wallbreaker/wallbreakerlevel3.png',
            researchCost: 250000,
            researchTime: "2 Days"},
            { /* Level 4 */
            dps: 32,
            hp: 35,
            ec: 2500,
            accessLevel: 5,
            imageUrl: 'images/troops/wallbreaker/wallbreakerlevel3.png',
            researchCost: 750000,
            researchTime: "3 Days"},
            { /* Level 5 */
            dps: 46,
            hp: 42,
            ec: 3000,
            accessLevel: 6,
            imageUrl: 'images/troops/wallbreaker/wallbreakerlevel5.png',
            researchCost: 2250000,
            researchTime: "5 Days"},
            { /* Level 6 */
            dps: 60,
            hp: 54,
            ec: 3500,
            accessLevel: 8,
            imageUrl: 'images/troops/wallbreaker/wallbreakerlevel6.png',
            researchCost: 6750000,
            researchTime: "10 Days"}
    ]
    },
    balloon: {
        name: "Balloon",
        housingSpace: 5,
        movementSpeed: 10,
        attackSpeed: 4,
        trainingTime: 480,
        range: .5,
        attackType: "Area Splash 1.2 Tile Radius (Ground Only)",
        prefferredTarget: "Defenses",
        barracksLevelRequired: 6,
        maxLevel: 6,
        level: [
            { /* Level 1 */
            dps: 25,
            hp: 150,
            ec: 2000,
            accessLevel: 0,
            imageUrl: 'images/troops/balloon/balloonlevel1.png',
            researchCost: 0,
            researchTime: 0},
            { /* Level 2 */
            dps: 32,
            hp: 180,
            ec: 2500,
            accessLevel: 2,
            imageUrl: 'images/troops/balloon/balloonlevel1.png',
            researchCost: 150000,
            researchTime: "1 Day"},
            { /* Level 3 */
            dps: 48,
            hp: 216,
            ec: 3000,
            accessLevel: 4,
            imageUrl: 'images/troops/balloon/balloonlevel3.png',
            researchCost: 450000,
            researchTime: "2 Days"},
            { /* Level 4 */
            dps: 72,
            hp: 280,
            ec: 3500,
            accessLevel: 5,
            imageUrl: 'images/troops/balloon/balloonlevel3.png',
            researchCost: 1350000,
            researchTime: "3 Days"},
            { /* Level 5 */
            dps: 108,
            hp: 390,
            ec: 4000,
            accessLevel: 6,
            imageUrl: 'images/troops/balloon/balloonlevel5.png',
            researchCost: 2500000,
            researchTime: "5 Days"},
            { /* Level 6 */
            dps: 162,
            hp: 545,
            ec: 4500,
            accessLevel: 7,
            imageUrl: 'images/troops/balloon/balloonlevel6.png', //wrong image
            researchCost: 6000000,
            researchTime: "10 Days"}
    ]
    },
    wizard: {
        name: "Wizard",
        housingSpace: 4,
        movementSpeed: 16,
        attackSpeed: 1.5,
        trainingTime: 480,
        range: 3,
        attackType: "Area Splash 0.3 Tile Radius (Ground & Air)",
        prefferredTarget: "Any",
        barracksLevelRequired: 7,
        maxLevel: 6,
        level: [
            { /* Level 1 */
            dps: 50,
            hp: 75,
            ec: 1500,
            accessLevel: 0,
            imageUrl: 'images/troops/wizard/wizardlevel1.png',
            researchCost: 0,
            researchTime: 0},
            { /* Level 2 */
            dps: 70,
            hp: 90,
            ec: 2000,
            accessLevel: 3,
            imageUrl: 'images/troops/wizard/wizardlevel1.png',
            researchCost: 150000,
            researchTime: "1 Day"},
            { /* Level 3 */
            dps: 90,
            hp: 108,
            ec: 2500,
            accessLevel: 4,
            imageUrl: 'images/troops/wizard/wizardlevel3.png',
            researchCost: 450000,
            researchTime: "2 Days"},
            { /* Level 4 */
            dps: 125,
            hp: 130,
            ec: 3000,
            accessLevel: 5,
            imageUrl: 'images/troops/wizard/wizardlevel4.png',
            researchCost: 1350000,
            researchTime: "3 Days"},
            { /* Level 5 */
            dps: 170,
            hp: 156,
            ec: 3500,
            accessLevel: 6,
            imageUrl: 'images/troops/wizard/wizardlevel5.png',
            researchCost: 2500000,
            researchTime: "5 Days"},
            { /* Level 6 */
            dps: 180,
            hp: 164,
            ec: 4000,
            accessLevel: 8,
            imageUrl: 'images/troops/wizard/wizardlevel6.png', //wrong image
            researchCost: 7500000,
            researchTime: "14 Days"}
    ]
    },
    healer: {
        name: "Healer",
        housingSpace: 14,
        movementSpeed: 16,
        attackSpeed: .7,
        trainingTime: 900,
        range: 5,
        attackType: "Heal Splash 2 Tiles Radius (Ground Only)",
        prefferredTarget: "Any",
        barracksLevelRequired: 8,
        maxLevel: 4,
        level: [
            { /* Level 1 */
            dps: 35,
            hp: 500,
            ec: 5000,
            accessLevel: 0,
            imageUrl: 'images/troops/healer/healerlevel1.png',
            researchCost: 0,
            researchTime: 0},
            { /* Level 2 */
            dps: 42,
            hp: 600,
            ec: 6000,
            accessLevel: 5,
            imageUrl: 'images/troops/healer/healerlevel1.png',
            researchCost: 750000,
            researchTime: "3 Days"},
            { /* Level 3 */
            dps: 55,
            hp: 840,
            ec: 8000,
            accessLevel: 6,
            imageUrl: 'images/troops/healer/healerlevel3.png',
            researchCost: 1500000,
            researchTime: "5 Days"},
            { /* Level 4 */
            dps: 71,
            hp: 1176,
            ec: 10000,
            accessLevel: 7,
            imageUrl: 'images/troops/healer/healerlevel3.png',
            researchCost: 3000000,
            researchTime: "7 Days"}
    ]
    },
    dragon: {
        name: "Dragon",
        housingSpace: 20,
        movementSpeed: 16,
        attackSpeed: 1.5,
        trainingTime: 1800,
        range: 3,
        attackType: "Area Splash 0.3 Tile Radius (Ground and Air)",
        prefferredTarget: "Any",
        barracksLevelRequired: 9,
        maxLevel: 4,
        level: [
            { /* Level 1 */
            dps: 140,
            hp: 1900,
            ec: 25000,
            accessLevel: 0,
            imageUrl: 'images/troops/dragon/dragonlevel1.png',
            researchCost: 0,
            researchTime: 0},
            { /* Level 2 */
            dps: 160,
            hp: 2100,
            ec: 30000,
            accessLevel: 5,
            imageUrl: 'images/troops/dragon/dragonlevel2.png',
            researchCost: 2000000,
            researchTime: "7 Days"},
            { /* Level 3 */
            dps: 180,
            hp: 2300,
            ec: 36000,
            accessLevel: 6,
            imageUrl: 'images/troops/dragon/dragonlevel3.png',
            researchCost: 3000000,
            researchTime: "10 Days"},
            { /* Level 4 */
            dps: 200,
            hp: 2500,
            ec: 42000,
            accessLevel: 8,
            imageUrl: 'images/troops/dragon/dragonlevel4.png',
            researchCost: 8000000,
            researchTime: "14 Days"}
    ]
    },
    pekka: {
        name: "P.E.K.K.A",
        housingSpace: 25,
        movementSpeed: 16,
        attackSpeed: 2.5,
        trainingTime: 2700,
        range: .8,
        attackType: "Melee (Ground Only)",
        prefferredTarget: "Any",
        barracksLevelRequired: 10,
        maxLevel: 5,
        level: [
            { /* Level 1 */
            dps: 240,
            hp: 2800,
            ec: 30000,
            accessLevel: 0,
            imageUrl: 'images/troops/pekka/pekkalevel1.png',
            researchCost: 0,
            researchTime: 0},
            { /* Level 2 */
            dps: 270,
            hp: 3100,
            ec: 35000,
            accessLevel: 6,
            imageUrl: 'images/troops/pekka/pekkalevel2.png',
            researchCost: 2000000,
            researchTime: "10 Days"},
            { /* Level 3 */
            dps: 300,
            hp: 3500,
            ec: 40000,
            accessLevel: 6,
            imageUrl: 'images/troops/pekka/pekkalevel3.png',
            researchCost: 6000000,
            researchTime: "12 Days"},
            { /* Level 4 */
            dps: 340,
            hp: 4000,
            ec: 45000,
            accessLevel: 8,
            imageUrl: 'images/troops/pekka/pekkalevel4.png',
            researchCost: 7000000,
            researchTime: "14 Days"},
            { /* Level 5 */
            dps: 380,
            hp: 4500,
            ec: 50000,
            accessLevel: 8,
            imageUrl: 'images/troops/pekka/pekkalevel5.png',
            researchCost: 8000000,
            researchTime: "14 Days"}
    ]
    },
    minion: {
        name: "Minion",
        housingSpace: 2,
        movementSpeed: 32,
        attackSpeed: 1,
        trainingTime: 45,
        range: 2.75,
        attackType: "Ground & Air",
        prefferredTarget: "Any",
        barracksLevelRequired: 1,
        maxLevel: 6,
        darkTroop: true,
        level: [
            { /* Level 1 */
            dps: 35,
            hp: 55,
            ec: 6,
            accessLevel: 0,
            imageUrl: 'images/troops/minion/minionlevel1.png',
            researchCost: 0,
            researchTime: 0},
            { /* Level 2 */
            dps: 38,
            hp: 60,
            ec: 7,
            accessLevel: 5,
            imageUrl: 'images/troops/minion/minionlevel1.png',
            researchCost: 10000,
            researchTime: "5 Days"},
            { /* Level 3 */
            dps: 42,
            hp: 66,
            ec: 8,
            accessLevel: 6,
            imageUrl: 'images/troops/minion/minionlevel3.png',
            researchCost: 20000,
            researchTime: "6 Days"},
            { /* Level 4 */
            dps: 46,
            hp: 72,
            ec: 9,
            accessLevel: 6,
            imageUrl: 'images/troops/minion/minionlevel3.png',
            researchCost: 30000,
            researchTime: "7 Days"},
            { /* Level 5 */
            dps: 50,
            hp: 78,
            ec: 10,
            accessLevel: 7,
            imageUrl: 'images/troops/minion/minionlevel5.png',
            researchCost: 40000,
            researchTime: "10 Days"},
            { /* Level 6 */
            dps: 54,
            hp: 84,
            ec: 11,
            accessLevel: 8,
            imageUrl: 'images/troops/minion/minionlevel6.png',
            researchCost: 100000,
            researchTime: "14 Days"}
    ]
    },
    hogrider: {
        name: "Hog Rider",
        housingSpace: 5,
        movementSpeed: 24,
        attackSpeed: 1,
        trainingTime: 120,
        range: .6,
        attackType: "Melee (Ground Only)",
        prefferredTarget: "Defenses",
        barracksLevelRequired: 2,
        maxLevel: 5,
        darkTroop: true,
        level: [
            { /* Level 1 */
            dps: 60,
            hp: 270,
            ec: 40,
            accessLevel: 0,
            imageUrl: 'images/troops/hogrider/hogriderlevel1.png',
            researchCost: 0,
            researchTime: 0},
            { /* Level 2 */
            dps: 70,
            hp: 312,
            ec: 45,
            accessLevel: 5,
            imageUrl: 'images/troops/hogrider/hogriderlevel1.png',
            researchCost: 20000,
            researchTime: "8 Days"},
            { /* Level 3 */
            dps: 80,
            hp: 360,
            ec: 52,
            accessLevel: 6,
            imageUrl: 'images/troops/hogrider/hogriderlevel3.png',
            researchCost: 30000,
            researchTime: "10 Days"},
            { /* Level 4 */
            dps: 92,
            hp: 415,
            ec: 58,
            accessLevel: 6,
            imageUrl: 'images/troops/hogrider/hogriderlevel3.png',
            researchCost: 40000,
            researchTime: "12 Days"},
            { /* Level 5 */
            dps: 105,
            hp: 475,
            ec: 65,
            accessLevel: 7,
            imageUrl: 'images/troops/hogrider/hogriderlevel5.png',
            researchCost: 50000,
            researchTime: "14 Days"}
    ]
    },
    valkyrie: {
        name: "Valkyrie",
        housingSpace: 8,
        movementSpeed: 24,
        attackSpeed: 1.8,
        trainingTime: 480,
        range: .5,
        attackType: "Area Splash 1 Tile Radius (Ground Only)",
        prefferredTarget: "Any",
        barracksLevelRequired: 3,
        maxLevel: 4,
        darkTroop: true,
        level: [
            { /* Level 1 */
            dps: 88,
            hp: 900,
            ec: 70,
            accessLevel: 0,
            imageUrl: 'images/troops/valkyrie/valkyrielevel1.png',
            researchCost: 0,
            researchTime: 0},
            { /* Level 2 */
            dps: 99,
            hp: 1000,
            ec: 100,
            accessLevel: 6,
            imageUrl: 'images/troops/valkyrie/valkyrielevel1.png',
            researchCost: 50000,
            researchTime: "10 Days"},
            { /* Level 3 */
            dps: 111,
            hp: 1100,
            ec: 130,
            accessLevel: 7,
            imageUrl: 'images/troops/valkyrie/valkyrielevel3.png',
            researchCost: 60000,
            researchTime: "12 Days"},
            { /* Level 4 */
            dps: 124,
            hp: 1200,
            ec: 160,
            accessLevel: 7,
            imageUrl: 'images/troops/valkyrie/valkyrielevel3.png',
            researchCost: 70000,
            researchTime: "14 Days"}
    ]
    },
    golem: {
        name: "Golem",
        housingSpace: 30,
        movementSpeed: 12,
        attackSpeed: 2.4,
        trainingTime: 2700,
        range: 1,
        attackType: "Ground",
        prefferredTarget: "Defenses",
        barracksLevelRequired: 4,
        maxLevel: 5,
        darkTroop: true,
        level: [
            { /* Level 1 */
            dps: 38,
            hp: 4500,
            ec: 450,
            accessLevel: 0,
            imageUrl: 'images/troops/golem/golemlevel1.png',
            researchCost: 0,
            researchTime: 0},
            { /* Level 2 */
            dps: 42,
            hp: 5000,
            ec: 525,
            accessLevel: 6,
            imageUrl: 'images/troops/golem/golemlevel1.png',
            researchCost: 60000,
            researchTime: "10 Days"},
            { /* Level 3 */
            dps: 46,
            hp: 5500,
            ec: 600,
            accessLevel: 7,
            imageUrl: 'images/troops/golem/golemlevel3.png',
            researchCost: 70000,
            researchTime: "12 Days"},
            { /* Level 4 */
            dps: 50,
            hp: 6000,
            ec: 675,
            accessLevel: 7,
            imageUrl: 'images/troops/golem/golemlevel3.png',
            researchCost: 80000,
            researchTime: "14 Days"},
            { /* Level 5 */
            dps: 54,
            hp: 6300,
            ec: 750,
            accessLevel: 8,
            imageUrl: 'images/troops/golem/golemlevel5.png',
            researchCost: 90000,
            researchTime: "14 Days"}
    ]
    },
    witch: {
        name: "Witch",
        housingSpace: 12,
        movementSpeed: 12,
        attackSpeed: .7,
        trainingTime: 1200,
        range: 4,
        attackType: "Area Splash 0.3 Tile Radius (Ground & Air)",
        prefferredTarget: "Any",
        barracksLevelRequired: 5,
        maxLevel: 2,
        darkTroop: true,
        level: [
            { /* Level 1 */
            dps: 25,
            hp: 75,
            ec: 250,
            accessLevel: 0,
            imageUrl: 'images/troops/witch/witchlevel1.png',
            researchCost: 0,
            researchTime: 0},
            { /* Level 2 */
            dps: 30,
            hp: 100,
            ec: 350,
            accessLevel: 7,
            imageUrl: 'images/troops/witch/witchlevel1.png',
            researchCost: 75000,
            researchTime: "10 Days"}
    ]
    }
}

var defenseInfo = {
    cannon: {
        name: "Cannon",
        townhallLevelCounts: [2,2,2,2,3,3,5,5,5,6],
        size: "3x3",
        range: 9,
        attackSpeed: .8,
        damageType: "Single Shot",
        unitTargeted: "Ground",
        maxLevel: 13,
        level: [
            { /* Level 1 */
            dps: 9,
            hp: 420,
            cost: 250,
            buildTime: "1 Minute",
            townHallRequired: 1,
            imageUrl: "images/defenses/cannon/cannonlevel1.png"    
            },
            { /* Level 2 */
            dps: 11,
            hp: 470,
            cost: 1000,
            buildTime: "15 Minutes",
            townHallRequired: 1,
            imageUrl: "images/defenses/cannon/cannonlevel2.png"    
            },
            { /* Level 3 */
            dps: 15,
            hp: 520,
            cost: 4000,
            buildTime: "45 Minutes",
            townHallRequired: 2,
            imageUrl: "images/defenses/cannon/cannonlevel3.png"    
            },
            { /* Level 4 */
            dps: 19,
            hp: 570,
            cost: 16000,
            buildTime: "2 Hours",
            townHallRequired: 3,
            imageUrl: "images/defenses/cannon/cannonlevel4.png"    
            },
            { /* Level 5 */
            dps: 25,
            hp: 620,
            cost: 50000,
            buildTime: "6 Hours",
            townHallRequired: 4,
            imageUrl: "images/defenses/cannon/cannonlevel5.png"    
            },
            { /* Level 6 */
            dps: 31,
            hp: 670,
            cost: 100000,
            buildTime: "12 Hours",
            townHallRequired: 5,
            imageUrl: "images/defenses/cannon/cannonlevel6.png"    
            },
            { /* Level 7 */
            dps: 40,
            hp: 720,
            cost: 200000,
            buildTime: "1 Day",
            townHallRequired: 6,
            imageUrl: "images/defenses/cannon/cannonlevel7.png"    
            },
            { /* Level 8 */
            dps: 48,
            hp: 770,
            cost: 400000,
            buildTime: "2 Days",
            townHallRequired: 7,
            imageUrl: "images/defenses/cannon/cannonlevel8.png"    
            },
            { /* Level 9 */
            dps: 56,
            hp: 830,
            cost: 800000,
            buildTime: "3 Days",
            townHallRequired: 8,
            imageUrl: "images/defenses/cannon/cannonlevel9.png"    
            },
            { /* Level 10 */
            dps: 65,
            hp: 890,
            cost: 1600000,
            buildTime: "4 Days",
            townHallRequired: 8,
            imageUrl: "images/defenses/cannon/cannonlevel10.png"    
            },
            { /* Level 11 */
            dps: 75,
            hp: 970,
            cost: 3200000,
            buildTime: "5 Days",
            townHallRequired: 9,
            imageUrl: "images/defenses/cannon/cannonlevel11.png"    
            },
            { /* Level 12 */
            dps: 86,
            hp: 1070,
            cost: 6400000,
            buildTime: "6 Days",
            townHallRequired: 10,
            imageUrl: "images/defenses/cannon/cannonlevel12.png"    
            },
            { /* Level 13 */
            dps: 98,
            hp: 1170,
            cost: 7500000,
            buildTime: "7 Days",
            townHallRequired: 10,
            imageUrl: "images/defenses/cannon/cannonlevel12.png"    
            }
        ]
    },
    archerTower: {
        name: "Archer Tower",
        townhallLevelCounts: [0,1,1,2,3,3,4,5,6,7],
        size: "3x3",
        range: 10,
        attackSpeed: .5,
        damageType: "Single Shot",
        unitTargeted: "Ground & Air",
        maxLevel: 13,
        level: [
            { /* Level 1 */
            dps: 11,
            hp: 380,
            cost: 1000,
            buildTime: "15 Minutes",
            townHallRequired: 2,
            imageUrl: "images/defenses/archertower/archertowerlevel1.png"    
            },
            { /* Level 2 */
            dps: 15,
            hp: 420,
            cost: 2000,
            buildTime: "30 Minutes",
            townHallRequired: 2,
            imageUrl: "images/defenses/archertower/archertowerlevel2.png"    
            },
            { /* Level 3 */
            dps: 19,
            hp: 460,
            cost: 5000,
            buildTime: "45 Minutes",
            townHallRequired: 2,
            imageUrl: "images/defenses/archertower/archertowerlevel3.png"    
            },
            { /* Level 4 */
            dps: 25,
            hp: 500,
            cost: 20000,
            buildTime: "4 Hours",
            townHallRequired: 3,
            imageUrl: "images/defenses/archertower/archertowerlevel4.png"    
            },
            { /* Level 5 */
            dps: 30,
            hp: 540,
            cost: 80000,
            buildTime: "12 Hours",
            townHallRequired: 4,
            imageUrl: "images/defenses/archertower/archertowerlevel5.png"    
            },
            { /* Level 6 */
            dps: 35,
            hp: 580,
            cost: 180000,
            buildTime: "1 Day",
            townHallRequired: 5,
            imageUrl: "images/defenses/archertower/archertowerlevel6.png"    
            },
            { /* Level 7 */
            dps: 42,
            hp: 620,
            cost: 360000,
            buildTime: "2 Days",
            townHallRequired: 6,
            imageUrl: "images/defenses/archertower/archertowerlevel7.png"    
            },
            { /* Level 8 */
            dps: 48,
            hp: 660,
            cost: 720000,
            buildTime: "3 Days",
            townHallRequired: 7,
            imageUrl: "images/defenses/archertower/archertowerlevel8.png"    
            },
            { /* Level 9 */
            dps: 56,
            hp: 705,
            cost: 1500000,
            buildTime: "4 Days",
            townHallRequired: 8,
            imageUrl: "images/defenses/archertower/archertowerlevel9.png"    
            },
            { /* Level 10 */
            dps: 65,
            hp: 750,
            cost: 2500000,
            buildTime: "5 Days",
            townHallRequired: 8,
            imageUrl: "images/defenses/archertower/archertowerlevel10.png"    
            },
            { /* Level 11 */
            dps: 75,
            hp: 805,
            cost: 4500000,
            buildTime: "6 Days",
            townHallRequired: 9,
            imageUrl: "images/defenses/archertower/archertowerlevel11.png"    
            },
            { /* Level 12 */
            dps: 86,
            hp: 870,
            cost: 6500000,
            buildTime: "7 Days",
            townHallRequired: 10,
            imageUrl: "images/defenses/archertower/archertowerlevel12.png"    
            },
            { /* Level 13 */
            dps: 98,
            hp: 930,
            cost: 7500000,
            buildTime: "8 Days",
            townHallRequired: 10,
            imageUrl: "images/defenses/archertower/archertowerlevel12.png"    
            }
        ]
    },
    mortar: {
        name: "Mortar",
        townhallLevelCounts: [0,0,1,1,1,2,3,4,4,4],
        size: "3x3",
        range: 11,
        attackSpeed: 5,
        damageType: "Splash - 1.5 tiles",
        unitTargeted: "Ground",
        maxLevel: 8,
        level: [
            { /* Level 1 */
            dps: 4,
            hp: 400,
            cost: 8000,
            buildTime: "8 Hours",
            townHallRequired: 3,
            imageUrl: "images/defenses/mortar/mortarlevel1.png"    
            },
            { /* Level 2 */
            dps: 5,
            hp: 450,
            cost: 32000,
            buildTime: "12 Hours",
            townHallRequired: 4,
            imageUrl: "images/defenses/mortar/mortarlevel2.png"    
            },
            { /* Level 3 */
            dps: 6,
            hp: 500,
            cost: 120000,
            buildTime: "1 Day",
            townHallRequired: 5,
            imageUrl: "images/defenses/mortar/mortarlevel3.png"    
            },
            { /* Level 4 */
            dps: 7,
            hp: 550,
            cost: 400000,
            buildTime: "2 Days",
            townHallRequired: 6,
            imageUrl: "images/defenses/mortar/mortarlevel4.png"    
            },
            { /* Level 5 */
            dps: 8,
            hp: 600,
            cost: 800000,
            buildTime: "4 Days",
            townHallRequired: 7,
            imageUrl: "images/defenses/mortar/mortarlevel5.png"    
            },
            { /* Level 6 */
            dps: 9,
            hp: 650,
            cost: 160000,
            buildTime: "5 Days",
            townHallRequired: 8,
            imageUrl: "images/defenses/mortar/mortarlevel6.png"    
            },
            { /* Level 7 */
            dps: 11,
            hp: 700,
            cost: 3200000,
            buildTime: "7 Days",
            townHallRequired: 9,
            imageUrl: "images/defenses/mortar/mortarlevel7.png"    
            },
            { /* Level 8 */
            dps: 13,
            hp: 750,
            cost: 6400000,
            buildTime: "10 Days",
            townHallRequired: 10,
            imageUrl: "images/defenses/mortar/mortarlevel8.png"    
            }
        ]
    },
    airDefense: {
        name: "Air Defense",
        townhallLevelCounts: [0,0,0,1,1,1,2,3,4,4],
        size: "3x3",
        range: 10,
        attackSpeed: 1,
        damageType: "Single Target",
        unitTargeted: "Air",
        maxLevel: 8,
        level: [
            { /* Level 1 */
            dps: 80,
            hp: 800,
            cost: 22500,
            buildTime: "5 Hours",
            townHallRequired: 4,
            imageUrl: "images/defenses/airdefense/airdefenselevel1.png"    
            },
            { /* Level 2 */
            dps: 110,
            hp: 850,
            cost: 90000,
            buildTime: "1 Day",
            townHallRequired: 4,
            imageUrl: "images/defenses/airdefense/airdefenselevel2.png"    
            },
            { /* Level 3 */
            dps: 140,
            hp: 900,
            cost: 270000,
            buildTime: "3 Days",
            townHallRequired: 5,
            imageUrl: "images/defenses/airdefense/airdefenselevel3.png"    
            },
            { /* Level 4 */
            dps: 160,
            hp: 950,
            cost: 540000,
            buildTime: "5 Days",
            townHallRequired: 6,
            imageUrl: "images/defenses/airdefense/airdefenselevel4.png"    
            },
            { /* Level 5 */
            dps: 190,
            hp: 1000,
            cost: 1080000,
            buildTime: "6 Days",
            townHallRequired: 7,
            imageUrl: "images/defenses/airdefense/airdefenselevel5.png"    
            },
            { /* Level 6 */
            dps: 230,
            hp: 1050,
            cost: 2160000,
            buildTime: "8 Days",
            townHallRequired: 8,
            imageUrl: "images/defenses/airdefense/airdefenselevel6.png"    
            },
            { /* Level 7 */
            dps: 280,
            hp: 1110,
            cost: 4320000,
            buildTime: "10 Days",
            townHallRequired: 9,
            imageUrl: "images/defenses/airdefense/airdefenselevel7.png"    
            },
            { /* Level 8 */
            dps: 320,
            hp: 1170,
            cost: 7560000,
            buildTime: "12 Days",
            townHallRequired: 10,
            imageUrl: "images/defenses/airdefense/airdefenselevel8.png"    
            }
        ]
    },
    wizardTower: {
        name: "Wizard Tower",
        townhallLevelCounts: [0,0,0,0,1,2,2,3,4,4],
        size: "3x3",
        range: 7,
        attackSpeed: 1.3,
        damageType: "Splash - 1 tile",
        unitTargeted: "Ground & Air",
        maxLevel: 8,
        level: [
            { /* Level 1 */
            dps: 11,
            hp: 620,
            cost: 180000,
            buildTime: "12 Hours",
            townHallRequired: 5,
            imageUrl: "images/defenses/wizardtower/wizardtowerlevel1.png"    
            },
            { /* Level 2 */
            dps: 13,
            hp: 650,
            cost: 360000,
            buildTime: "1 Day",
            townHallRequired: 5,
            imageUrl: "images/defenses/wizardtower/wizardtowerlevel2.png"    
            },
            { /* Level 3 */
            dps: 16,
            hp: 680,
            cost: 720000,
            buildTime: "2 Days",
            townHallRequired: 6,
            imageUrl: "images/defenses/wizardtower/wizardtowerlevel3.png"    
            },
            { /* Level 4 */
            dps: 20,
            hp: 710,
            cost: 1280000,
            buildTime: "3 Days",
            townHallRequired: 7,
            imageUrl: "images/defenses/wizardtower/wizardtowerlevel4.png"    
            },
            { /* Level 5 */
            dps: 24,
            hp: 750,
            cost: 1960000,
            buildTime: "4 Days",
            townHallRequired: 8,
            imageUrl: "images/defenses/wizardtower/wizardtowerlevel5.png"    
            },
            { /* Level 6 */
            dps: 32,
            hp: 790,
            cost: 2680000,
            buildTime: "5 Days",
            townHallRequired: 8,
            imageUrl: "images/defenses/wizardtower/wizardtowerlevel6.png"    
            },
            { /* Level 7 */
            dps: 40,
            hp: 840,
            cost: 5360000,
            buildTime: "7 Days",
            townHallRequired: 9,
            imageUrl: "images/defenses/wizardtower/wizardtowerlevel7.png"    
            },
            { /* Level 8 */
            dps: 48,
            hp: 900,
            cost: 6480000,
            buildTime: "10 Days",
            townHallRequired: 10,
            imageUrl: "images/defenses/wizardtower/wizardtowerlevel8.png"    
            }
        ]
    },
    hiddenTesla: {
        name: "Hidden Tesla",
        townhallLevelCounts: [0,0,0,0,0,0,2,3,4,4],
        size: "2x2",
        range: 7,
        attackSpeed: .6,
        damageType: "Single Target",
        unitTargeted: "Ground & Air",
        maxLevel: 8,
        level: [
            { /* Level 1 */
            dps: 34,
            hp: 600,
            cost: 1000000,
            buildTime: "1 Day",
            townHallRequired: 7,
            imageUrl: "images/defenses/hiddentesla/hiddenteslalevel1.png"    
            },
            { /* Level 2 */
            dps: 40,
            hp: 630,
            cost: 1250000,
            buildTime: "3 Days",
            townHallRequired: 7,
            imageUrl: "images/defenses/hiddentesla/hiddenteslalevel2.png"    
            },
            { /* Level 3 */
            dps: 48,
            hp: 660,
            cost: 1500000,
            buildTime: "5 Days",
            townHallRequired: 7,
            imageUrl: "images/defenses/hiddentesla/hiddenteslalevel3.png"    
            },
            { /* Level 4 */
            dps: 55,
            hp: 690,
            cost: 2000000,
            buildTime: "6 Days",
            townHallRequired: 8,
            imageUrl: "images/defenses/hiddentesla/hiddenteslalevel4.png"    
            },
            { /* Level 5 */
            dps: 64,
            hp: 730,
            cost: 2500000,
            buildTime: "8 Days",
            townHallRequired: 8,
            imageUrl: "images/defenses/hiddentesla/hiddenteslalevel5.png"    
            },
            { /* Level 6 */
            dps: 75,
            hp: 770,
            cost: 3000000,
            buildTime: "10 Days",
            townHallRequired: 8,
            imageUrl: "images/defenses/hiddentesla/hiddenteslalevel6.png"    
            },
            { /* Level 7 */
            dps: 87,
            hp: 810,
            cost: 3500000,
            buildTime: "12 Days",
            townHallRequired: 9,
            imageUrl: "images/defenses/hiddentesla/hiddenteslalevel7.png"    
            },
            { /* Level 8 */
            dps: 99,
            hp: 850,
            cost: 5000000,
            buildTime: "14 Days",
            townHallRequired: 10,
            imageUrl: "images/defenses/hiddentesla/hiddenteslalevel8.png"    
            }
        ]
    },
    xbow: {
        name: "X-Bow",
        townhallLevelCounts: [0,0,0,0,0,0,0,0,2,3],
        size: "3x3",
        range: 14,
        attackSpeed: .128,
        damageType: "Single Target",
        unitTargeted: "Ground & Air",
        maxLevel: 4,
        level: [
            { /* Level 1 */
            dps: 50,
            hp: 1500,
            cost: 3000000,
            buildTime: "7 Days",
            townHallRequired: 9,
            imageUrl: "images/defenses/xbow/xbowlevel1.png"    
            },
            { /* Level 2 */
            dps: 60,
            hp: 1900,
            cost: 5000000,
            buildTime: "10 Days",
            townHallRequired: 9,
            imageUrl: "images/defenses/xbow/xbowlevel2.png"    
            },
            { /* Level 3 */
            dps: 75,
            hp: 2300,
            cost: 7000000,
            buildTime: "14 Days",
            townHallRequired: 9,
            imageUrl: "images/defenses/xbow/xbowlevel3.png"    
            },
            { /* Level 4 */
            dps: 80,
            hp: 2700,
            cost: 8000000,
            buildTime: "14 Days",
            townHallRequired: 10,
            imageUrl: "images/defenses/xbow/xbowlevel4.png"    
            }
        ]
    },
    infernoTower: {
        name: "Inferno Tower",
        townhallLevelCounts: [0,0,0,0,0,0,0,0,0,2],
        size: "2x2",
        range: 9,
        attackSpeed: .128,
        damageType: "Single Target/Multiple Targets",
        unitTargeted: "Ground & Air",
        maxLevel: 3,
        level: [
            { /* Level 1 */
            dps: 24,
            hp: 1000,
            cost: 5000000,
            buildTime: "7 Days",
            townHallRequired: 10,
            imageUrl: "images/defenses/infernotower/infernotowerlevel1.png"    
            },
            { /* Level 2 */
            dps: 30,
            hp: 1250,
            cost: 6500000,
            buildTime: "10 Days",
            townHallRequired: 10,
            imageUrl: "images/defenses/infernotower/infernotowerlevel2.png"    
            },
            { /* Level 3 */
            dps: 36,
            hp: 1400,
            cost: 8000000,
            buildTime: "14 Days",
            townHallRequired: 10,
            imageUrl: "images/defenses/infernotower/infernotowerlevel3.png"    
            }
        ]
    }
}

var resourceInfo = {
    goldMine: {
        name: "Gold Mine",
        townhallLevelCounts: [1,2,3,4,5,6,6,6,6,7],
        size: "3x3",
        maxLevel: 12,
        level: [
            { /* Level 1 */
            cost: 150,
            buildTime: "1 Minute",
            capacity: 500,
            productionRate: 200,
            hp: 400,
            townHallRequired: 1,
            imageUrl: "images/resources/goldmine/goldminelevel1.png"    
            },
            { /* Level 2 */
            cost: 300,
            buildTime: "5 Minute",
            capacity: 1000,
            productionRate: 400,
            hp: 440,
            townHallRequired: 1,
            imageUrl: "images/resources/goldmine/goldminelevel2.png"    
            },
            { /* Level 3 */
            cost: 700,
            buildTime: "15 Minutes",
            capacity: 1500,
            productionRate: 600,
            hp: 480,
            townHallRequired: 2,
            imageUrl: "images/resources/goldmine/goldminelevel3.png"    
            },
            { /* Level 4 */
            cost: 1400,
            buildTime: "1 Hour",
            capacity: 2500,
            productionRate: 800,
            hp: 520,
            townHallRequired: 2,
            imageUrl: "images/resources/goldmine/goldminelevel4.png"    
            },
            { /* Level 5 */
            cost: 3000,
            buildTime: "2 Hours",
            capacity: 10000,
            productionRate: 1000,
            hp: 560,
            townHallRequired: 3,
            imageUrl: "images/resources/goldmine/goldminelevel5.png"    
            },
            { /* Level 6 */
            cost: 7000,
            buildTime: "6 Hours",
            capacity: 20000,
            productionRate: 1300,
            hp: 600,
            townHallRequired: 3,
            imageUrl: "images/resources/goldmine/goldminelevel6.png"    
            },
            { /* Level 7 */
            cost: 14000,
            buildTime: "12 Hours",
            capacity: 30000,
            productionRate: 1600,
            hp: 640,
            townHallRequired: 4,
            imageUrl: "images/resources/goldmine/goldminelevel7.png"    
            },
            { /* Level 8 */
            cost: 28000,
            buildTime: "1 Day",
            capacity: 50000,
            productionRate: 1900,
            hp: 680,
            townHallRequired: 4,
            imageUrl: "images/resources/goldmine/goldminelevel8.png"    
            },
            { /* Level 9 */
            cost: 56000,
            buildTime: "2 Days",
            capacity: 75000,
            productionRate: 2200,
            hp: 720,
            townHallRequired: 5,
            imageUrl: "images/resources/goldmine/goldminelevel9.png"    
            },
            { /* Level 10 */
            cost: 84000,
            buildTime: "3 Days",
            capacity: 100000,
            productionRate: 2500,
            hp: 760,
            townHallRequired: 5,
            imageUrl: "images/resources/goldmine/goldminelevel10.png"    
            },
            { /* Level 11 */
            cost: 168000,
            buildTime: "4 Days",
            capacity: 150000,
            productionRate: 3000,
            hp: 800,
            townHallRequired: 7,
            imageUrl: "images/resources/goldmine/goldminelevel11.png"    
            },
            { /* Level 12 */
            cost: 336000,
            buildTime: "5 Days",
            capacity: 200000,
            productionRate: 3500,
            hp: 840,
            townHallRequired: 8,
            imageUrl: "images/resources/goldmine/goldminelevel11.png"    
            }
        ]
    },
    elixirCollector: {
        name: "Elixir Collector",
        townhallLevelCounts: [1,2,3,4,5,6,6,6,6,7],
        size: "3x3",
        maxLevel: 12,
        level: [
            { /* Level 1 */
            cost: 150,
            buildTime: "1 Minute",
            capacity: 500,
            productionRate: 200,
            hp: 400,
            townHallRequired: 1,
            imageUrl: "images/resources/elixircollector/elixircollectorlevel1.png"    
            },
            { /* Level 2 */
            cost: 300,
            buildTime: "5 Minute",
            capacity: 1000,
            productionRate: 400,
            hp: 440,
            townHallRequired: 1,
            imageUrl: "images/resources/elixircollector/elixircollectorlevel2.png"    
            },
            { /* Level 3 */
            cost: 700,
            buildTime: "15 Minutes",
            capacity: 1500,
            productionRate: 600,
            hp: 480,
            townHallRequired: 2,
            imageUrl: "images/resources/elixircollector/elixircollectorlevel3.png"    
            },
            { /* Level 4 */
            cost: 1400,
            buildTime: "1 Hour",
            capacity: 2500,
            productionRate: 800,
            hp: 520,
            townHallRequired: 2,
            imageUrl: "images/resources/elixircollector/elixircollectorlevel4.png"    
            },
            { /* Level 5 */
            cost: 3500,
            buildTime: "2 Hours",
            capacity: 10000,
            productionRate: 1000,
            hp: 560,
            townHallRequired: 3,
            imageUrl: "images/resources/elixircollector/elixircollectorlevel5.png"    
            },
            { /* Level 6 */
            cost: 7000,
            buildTime: "6 Hours",
            capacity: 20000,
            productionRate: 1300,
            hp: 600,
            townHallRequired: 3,
            imageUrl: "images/resources/elixircollector/elixircollectorlevel6.png"    
            },
            { /* Level 7 */
            cost: 14000,
            buildTime: "12 Hours",
            capacity: 30000,
            productionRate: 1600,
            hp: 640,
            townHallRequired: 4,
            imageUrl: "images/resources/elixircollector/elixircollectorlevel7.png"    
            },
            { /* Level 8 */
            cost: 28000,
            buildTime: "1 Day",
            capacity: 50000,
            productionRate: 1900,
            hp: 680,
            townHallRequired: 4,
            imageUrl: "images/resources/elixircollector/elixircollectorlevel8.png"    
            },
            { /* Level 9 */
            cost: 56000,
            buildTime: "2 Days",
            capacity: 75000,
            productionRate: 2200,
            hp: 720,
            townHallRequired: 5,
            imageUrl: "images/resources/elixircollector/elixircollectorlevel9.png"    
            },
            { /* Level 10 */
            cost: 84000,
            buildTime: "3 Days",
            capacity: 100000,
            productionRate: 2500,
            hp: 760,
            townHallRequired: 5,
            imageUrl: "images/resources/elixircollector/elixircollectorlevel10.png"    
            },
            { /* Level 11 */
            cost: 168000,
            buildTime: "4 Days",
            capacity: 150000,
            productionRate: 3000,
            hp: 800,
            townHallRequired: 7,
            imageUrl: "images/resources/elixircollector/elixircollectorlevel11.png"    
            },
            { /* Level 12 */
            cost: 336000,
            buildTime: "5 Days",
            capacity: 200000,
            productionRate: 3500,
            hp: 840,
            townHallRequired: 8,
            imageUrl: "images/resources/elixircollector/elixircollectorlevel11.png"    
            }
        ]
    }
}