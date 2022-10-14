
//* base Actor

class Actor {
    constructor(atrHP, atrSTR, atrDEX, atrINT){
        this.actorName = "";
        this.atrHP = 12;
        this.atrSTR = 10;
        this.atrDEX = 10;
        this.atrINT = 10;
    }

    receiveDamage(damage) {
        this.atrHP = this.atrHP - damage;
    }
}

//* Player Actor Ancestries
// Human

class Human extends Actor {
    constructor(atrHP, atrSTR, atrDEX, atrINT) {
        super(atrHP, atrSTR, atrDEX, atrINT)
        this.actorName = "Hero";
        this.humanAtrBonus = {
            humanBonusHP: 1,
            humanBonusSTR: 1,
            humanBonusDEX: 1,
            humanBonusINT: 1,
        };
        this.atrHP = atrHP + humanBonusHP;
        this.atrSTR = atrSTR + humanBonusSTR;
        this.atrDEX = atrDEX + humanBonusDEX;
        this.atrINT = atrINT + humanBonusINT;
    }
}

//* Player Actor Classes
//? Human Variants

class Warrior extends Human {
    constructor(atrHP, atrSTR, atrDEX, atrINT) {
        super(atrHP, atrSTR, atrDEX, atrINT)
        this.warriorAtrBonus = {
            warriorBonusHP: 4,
            warriorBonusSTR: 2,
            warriorBonusDEX: 0,
            warriorBonusINT: -2,
        };
        this.className = "Human Warrior";
        this.atrHP = atrHP + warriorBonusHP;
        this.atrSTR = atrSTR + warriorBonusSTR;
        this.atrDEX = atrDEX + warriorBonusDEX;
        this.atrINT = atrINT + warriorBonusINT;
    }
}

//* Enemy Actor Ancestries
// base Slime (Green Slime aka Common Slime)

class BaseSlime extends Actor {
    constructor(atrHP, atrSTR, atrDEX, atrINT) {
        super(atrHP, atrSTR, atrDEX, atrINT)
        this.actorName = "Green Slime";
        this.className = "Common Slime";
        this.slimeAtrBonus = {
            slimeBonusHP: -7,
            slimeBonusSTR: -2,
            slimeBonusDEX: 2,
            slimeBonusINT: -5,
        };
        this.atrHP = atrHP + slimeBonusHP;
        this.atrSTR = atrSTR + slimeBonusSTR;
        this.atrDEX = atrDEX + slimeBonusDEX;
        this.atrINT = atrINT + slimeBonusINT;
    }
}