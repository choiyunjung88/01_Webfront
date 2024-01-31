const player = {
    name: "",
    job: "",
    gender: "",
    level: 1,
    hp: 100,
    attack: 10,
    defense: 5,
    exp: 0,
    gold: 0,
    weapon: null,
    armor: null,
};

const monster = {
    name: "Goblin",
    hp: 20,
    attack: 8,
    defense: 2,
    expReward: 15,
    dropRate: 0.5,
};

const items = {
    sword: { name: "검", attackBonus: 5, price: 20 },
    shield: { name: "방패", defenseBonus: 3, price: 15 },
    potion: { name: "물약", hpBonus: 20, price: 10 },
};
