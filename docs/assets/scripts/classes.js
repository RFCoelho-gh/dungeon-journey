//* base Actor

class Actor {
    constructor(){
        this.actorName = "";
        this.atrHP = 12;
        this.atrSTR = 10;
        this.atrDEX = 10;
        this.atrINT = 10;
    }

    receiveDamage(damage) {
        this.atrHP = this.atrHP - damage;
    }

    rollDice(diceSize) {
        if (typeof diceSize !== number ) {
            throw new Error ('method "rollDice" received a non-number as an Argument')
        }
        if (diceSize !== 2 || diceSize !== 3 || diceSize !== 4 || diceSize !== 6 || diceSize !== 10 || diceSize !== 12 || diceSize !== 100) {
            throw new Error ('method "rollDice" received a invalid number')
        }
        return (Math.floor(Math.random() * (diceSize - 1 + 1) + 1 ))
    }

    attributeModifier(atr){
        return Math.floor((atr / 2) - 5);
    }
}

//* Player Actor Ancestries
// Human

class Human extends Actor {
    constructor(atrHP, atrSTR, atrDEX, atrINT) {
        super(atrHP, atrSTR, atrDEX, atrINT)
        this.actorName = "Hero";
        this.humanAtrBonus = {
            humanBonusHP: 2,
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


// Human Warrior
class Warrior extends Human {
    constructor(atrHP, atrSTR, atrDEX, atrINT) {
        super(atrHP, atrSTR, atrDEX, atrINT)
        this.warriorAtrBonus = {
            warriorBonusHP: 6,
            warriorBonusSTR: 4,
            warriorBonusDEX: 2,
            warriorBonusINT: -2,
        };
        this.className = "Human Warrior";
        this.atrHP = atrHP + warriorBonusHP;
        this.atrSTR = atrSTR + warriorBonusSTR;
        this.atrDEX = atrDEX + warriorBonusDEX;
        this.atrINT = atrINT + warriorBonusINT;
    }

    heavySlash(target){ // RETURNS DAMAGE VALUE
        if (this.attributeModifier(this.atrSTR) + this.rollDice(20) >= target.atrSTR) {
            return this.rollDice(8) + this.attributeModifier(this.atrSTR);
        } else {
            return 0; //? Use 0 as Boolean for MISS
        }
    }

    quickJab(target){ // RETURNS DAMAGE VALUE
        if (this.attributeModifier(this.atrDEX) + this.rollDice(20) >= target.atrDEX) {
            return this.rollDice(6) + this.attributeModifier(this.atrDEX);
        } else {
            return 0; //? Use 0 as Boolean for MISS
        }
    }

    feintingRiposte(target){ // RETURNS DAMAGE VALUE
        if (this.attributeModifier(this.atrINT) + this.rollDice(20) >= target.atrINT) {
            return this.rollDice(4) + this.attributeModifier(this.atrINT);
        } else {
            return 0; //? Use 0 as Boolean for MISS
        }
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

    slimySlam(target) { // RETURNS DAMAGE VALUE
        if (this.attributeModifier(this.atrSTR) + this.rollDice(20) >= target.atrSTR) {
            return this.rollDice(4) + this.attributeModifier(this.atrSTR);
        } else {
            return 0; //? Use 0 as Boolean for MISS
        }
    };

    acidSplash(target) {
        if (this.attributeModifier(this.atrDEX) + this.rollDice(20) >= target.atrDEX) {
            return this.rollDice(3) + this.attributeModifier(this.atrSTR);
        } else {
            return 0; //? Use 0 as Boolean for MISS
        }
    }
}

//* Battle Class (Battle Encounter Governor)

class BattleEncounter {
    constructor(){
        this.turnCounter = 1;
        this.leftActor = [];
        this.rightActor = [];
    }

    addPlayerActor(playerActor){
        this.leftActor.push(playerActor);
    }

    addEnemyActor(enemyActor){
        this.rightActor.push(enemyActor);
    }

}